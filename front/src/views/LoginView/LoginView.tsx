




//! NO ME INICIA SESSIONNNNNNNNNNNNNNNN




'use client';
import { login } from '@/helpers/auth';
import { validateLoginForm } from '@/helpers/validate';
import { ILoginErrors, ILoginProps } from '@/types';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import Cookies from "js-cookie"

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

    const { valid, errors } = validateLoginForm(userData);

    if (!valid) {
      setLoginErrors(errors);
      alert('Hubo un error de validación');
      // await Swal.fire({
      // icon: "error",
      // title: "Error de Validacíón",
      // html: `<ul>${Object.values(errors)
      // .filter((msg) => msg)
      // .map((msg) => `<li>${msg}</li>)`)
      // .join("")}</ul>`,
      // })
      return;
    }

    try {
      const response = await login(userData);
      const { token, user } = response;

      Cookies.set("userData", JSON.stringify({ token, user }) , { expires: 1 });

      alert('Login exitoso');
      // await Swal.fire({
      //   icon: "success",
      //   title: "Éxito",
      //   text: "Usuario logueado correctamente.",
      // });
      router.push('/');
    } catch (error) {
      console.error(error);
      alert('Hubo un problema');
      // await Swal.fire({
      //   icon: "error",
      //   title: "Error de Login",
      //   text: "Contraseña o usuario incorrecto",
      // });
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
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
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
    </div>
  );
};

export default LoginView;