'use client'
import { validateRegisterForm } from '@/helpers/validate'
import { TRegisterErrors, IRegisterProps } from '@/types'
import React, { useEffect, useState } from 'react'

const RegisterView = () => {

  const initialState = {
    email: "",
    password: "",
    name: "",
    address: "",
    phone: ""
  }

  const [dataUser, setDataUser] = useState<IRegisterProps>(initialState)
  const [errors, setErrors] = useState<TRegisterErrors>(initialState)

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    console.log("Submit exitoso")
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = event.target;
    setDataUser({
      ...dataUser,
      [name]: value
    })
  }

  useEffect(() => {
    const errors = validateRegisterForm(dataUser)
    setErrors(errors)
  }, [dataUser])

  return (
    <div>
      <h1>Register in to Apple Store</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='email_address'>Email:</label>
          <input
            id='email_address'
            type='email'
            name='email'
            value={dataUser.email}
            placeholder='johndoe@example.com'
            onChange={handleChange}
          />
          {errors.email && <span>{errors.email}</span>}
        </div>

        <div>
          <label htmlFor='password'>Password:</label>
          <input
            id='password'
            type='password'
            name='password'
            value={dataUser.password}
            placeholder='***********'
            onChange={handleChange}
          />
          {errors.password && <span>{errors.password}</span>}
        </div>

        <div>
          <label htmlFor='name'>Name:</label>
          <input
            id='name'
            type='text'
            name='name'
            value={dataUser.name}
            placeholder='Steve Jobs'
            onChange={handleChange}
          />
          {errors.name && <span>{errors.name}</span>}
        </div>

        <div>
          <label htmlFor='address'>Address:</label>
          <input
            id='address'
            type='text'
            name='address'
            value={dataUser.address}
            placeholder='San Francisco, California'
            onChange={handleChange}
          />
          {errors.address && <span>{errors.address}</span>}
        </div>

        <div>
          <label htmlFor='phone'>Phone:</label>
          <input
            id='phone'
            type='text'
            name='phone'
            value={dataUser.phone}
            placeholder='221-333-4343'
            onChange={handleChange}
          />
          {errors.phone && <span>{errors.phone}</span>}
        </div>

        <button type='submit'>Register</button>

      </form>
    </div>
  )
}

export default RegisterView
