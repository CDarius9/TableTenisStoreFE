// RegisterPage.js
import React from 'react';
import { useForm } from 'react-hook-form';
import './RegisterPage.css';


const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    // Handle form submission
    console.log(data);
  };

  return (
    <div className="RegisterPage">
      <div className="RegisterPageContainer">
       
        <div className="RegisterPageContent">
          <h1 className="RegisterPageTitle">Creeaza-ti un cont!</h1>
          <form className="RegisterPageForm" onSubmit={handleSubmit(onSubmit)}>
            <div className="RegisterPageFormGroup">
              <label htmlFor="firstName" className="RegisterPageLabel">Prenume</label>
              <input
                type="text"
                id="firstName"
                className={`RegisterPageInput ${errors.firstName ? 'RegisterPageInputError' : ''}`}
                {...register('firstName', { required: 'First name is required' })}
              />
              {errors.firstName && <span className="RegisterPageErrorMessage">{errors.firstName.message}</span>}
            </div>
            <div className="RegisterPageFormGroup">
              <label htmlFor="lastName" className="RegisterPageLabel">Nume</label>
              <input
                type="text"
                id="lastName"
                className={`RegisterPageInput ${errors.lastName ? 'RegisterPageInputError' : ''}`}
                {...register('lastName', { required: 'Last name is required' })}
              />
              {errors.lastName && <span className="RegisterPageErrorMessage">{errors.lastName.message}</span>}
            </div>
            <div className="RegisterPageFormGroup">
              <label htmlFor="email" className="RegisterPageLabel">Email</label>
              <input
                type="email"
                id="email"
                className={`RegisterPageInput ${errors.email ? 'RegisterPageInputError' : ''}`}
                {...register('email', { required: 'Email is required' })}
              />
              {errors.email && <span className="RegisterPageErrorMessage">{errors.email.message}</span>}
            </div>
            <div className="RegisterPageFormGroup">
              <label htmlFor="password" className="RegisterPageLabel">Parola</label>
              <input
                type="password"
                id="password"
                className={`RegisterPageInput ${errors.password ? 'RegisterPageInputError' : ''}`}
                {...register('password', { required: 'Password is required', minLength: { value: 6, message: 'Password must be at least 6 characters' } })}
              />
              {errors.password && <span className="RegisterPageErrorMessage">{errors.password.message}</span>}
            </div>
            <button type="submit" className="RegisterPageButton">Inregistreaza-te</button>
          </form>
          <p className="RegisterPageLoginLink">
            Ai deja un cont? <a href="/login">Log in</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;