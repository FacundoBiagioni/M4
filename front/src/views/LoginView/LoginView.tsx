'use client';
import { validateLoginForm } from '@/helpers/validate';
import { ILoginErrors, ILoginProps } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Cookies from "js-cookie";
import Swal from 'sweetalert2';
import Link from 'next/link';

const initialState: ILoginProps = {
  email: '',
  password: '',
};

const LoginView = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<ILoginProps>(initialState);
  const [loginErrors, setLoginErrors] = useState<ILoginErrors>({});
  const [visible, setVisible] = useState(false);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Validación del formulario
    const { valid, errors } = validateLoginForm(userData);

    if (!valid) {
      setLoginErrors(errors);
      // Mostrar alerta de error de validación con SweetAlert
      await Swal.fire({
        icon: "error",
        title: "Error de Validación",
        html: `<ul>${Object.values(errors)
          .filter((msg) => msg)
          .map((msg) => `<li>${msg}</li>)`)
          .join("")}</ul>`,
      });
      return;
    }

    try {
      // Solicitud al backend de login
      const response = await fetch('http://localhost:5000/users/login', {  // Asegúrate de que esta sea la URL correcta
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Error desconocido");
      }

      const { token, user } = await response.json();

      // Guardar los datos del usuario y el token en cookies
      Cookies.set("userData", JSON.stringify({ token, user }), { expires: 1 });

      // Mostrar alerta de éxito con SweetAlert
      await Swal.fire({
        icon: "success",
        title: "Éxito",
        text: "Usuario logueado correctamente.",
      });

      router.push('/'); // Redirigir a la página principal o dashboard
    } catch (error) {
      console.error(error);
      await Swal.fire({
        icon: "error",
        title: "Error de Login",
        text: "Contraseña o usuario incorrecto",
      });
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({
      ...userData,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>Sign in to Apple Store</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email_address">Email:</label>
          <input
            id="email_address"
            type="email"
            name="email"
            value={userData.email}
            placeholder="johndoe@example.com"
            onChange={handleChange}
          />
          {loginErrors.email && <span>{loginErrors.email}</span>}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password:</label>
          <div>
            <input
              id="password"
              type={visible ? 'text' : 'password'}
              name="password"
              value={userData.password}
              placeholder="***********"
              onChange={handleChange}
            />
            <button type="button" onClick={() => setVisible(!visible)}>
              {visible ? 'Hide' : 'Show'}
            </button>
          </div>
          {loginErrors.password && <span className="text-red-700">{loginErrors.password}</span>}
        </div>

        <button type="submit">Sign In</button>
      </form>
      <div>
      <Link href="/register" className='text-blue-700'>You dont have an account?</Link>
      </div>
    </div>
  );
};

export default LoginView;
