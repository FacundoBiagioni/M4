'use client';
import { validateRegisterForm } from '@/helpers/validate';
import { IRegisterErrors, IRegisterProps } from '@/types'; 
import { useState } from 'react';
import { useRouter } from 'next/navigation';

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
      alert('Hubo un error de validación');
      return;
    }

    try {
      const response = await register(userData);
      if (response) {
        console.log("Registro exitoso");
        setUserData(initialState); // Limpiar los datos del formulario
        router.push("/login"); // Redirigir al login
      }
    } catch (error) {
      console.error("Error al registrar:", error);
    }
  };

  // Maneja los cambios en los inputs
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value.trim() }); // Actualizar los datos del usuario
    setSignupErrors({ ...signupErrors, [name]: "" }); // Limpiar el error asociado con ese campo
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
      <p>.</p>
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

// Función de simulación para registrar
const register = async (data: IRegisterProps): Promise<boolean> => {
  console.log("Datos enviados al servidor:", data);
  return true; // Simular un registro exitoso
};

export default RegisterView;