'use client';
import { validateRegisterForm } from '@/helpers/validate';
import { IRegisterErrors, IRegisterProps } from '@/types'; 
import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const initialState: IRegisterProps = {
  email: "",
  password: "",
  name: "",
  address: "",
  phone: ""
};

const RegisterView: React.FC = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<IRegisterProps>(initialState);
  const [signupErrors, setSignupErrors] = useState<IRegisterErrors>({});

  // Handle form submission
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    
    // Validar los datos usando la función de validación
    const { valid, errors } = validateRegisterForm(userData);
    
    // Si el formulario no es válido, actualizamos los errores y terminamos el envío
    if (!valid) {
      setSignupErrors(errors);
      Swal.fire({
        icon: 'error',
        title: 'Error de validación',
        text: 'Por favor, completa correctamente todos los campos del formulario.',
      });
      return;
    }

    try {
      // Aquí es donde haces la solicitud a la API de registro
      const response = await fetch('http://localhost:5000/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        console.log("Registro exitoso");
        setUserData(initialState); // Limpiar los datos del formulario
        Swal.fire({
          icon: 'success',
          title: '¡Registro exitoso!',
          text: 'Te has registrado correctamente. Ahora puedes iniciar sesión.',
        }).then(() => {
          router.push("/login"); // Redirigir al login
        });
      } else {
        const errorData = await response.json();
        console.error("Error al registrar:", errorData.message);
        Swal.fire({
          icon: 'error',
          title: 'Error de registro',
          text: errorData.message || 'Hubo un problema al intentar registrarte.',
        });
      }
    } catch (error) {
      console.error("Error al registrar:", error);
      Swal.fire({
        icon: 'error',
        title: 'Error de conexión',
        text: 'Hubo un error al intentar conectarse al servidor. Intenta más tarde.',
      });
    }
  };

  // Maneja los cambios en los inputs
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value.trim() });
    setSignupErrors({ ...signupErrors, [name]: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={userData.email}
          placeholder='johndoe@example.com'
          onChange={handleChange}
        />
        {signupErrors.email && <p>{signupErrors.email}</p>}
      </div>
      <div>
        <label>Password</label>
        <input
          type="password"
          name="password"
          value={userData.password}
          placeholder='***********'
          onChange={handleChange}
        />
        {signupErrors.password && <p>{signupErrors.password}</p>}
      </div>
      <div>
        <label>Name</label>
        <input
          type="text"
          name="name"
          value={userData.name}
          placeholder='Steve Jobs'
          onChange={handleChange}
        />
        {signupErrors.name && <p>{signupErrors.name}</p>}
      </div>
      <div>
        <label>Address</label>
        <input
          type="text"
          name="address"
          value={userData.address}
          placeholder='San Francisco, California'
          onChange={handleChange}
        />
        {signupErrors.address && <p>{signupErrors.address}</p>}
      </div>
      <div>
        <label>Phone</label>
        <input
          type="text"
          name="phone"
          value={userData.phone}
          placeholder='221-333-4343'
          onChange={handleChange}
        />
        {signupErrors.phone && <p>{signupErrors.phone}</p>}
      </div>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterView;
