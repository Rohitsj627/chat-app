import { Link } from "react-router-dom";
import { useState } from "react";
import { useSignup } from "../../hooks/useSignup";

const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { loading, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  };

  return (
    <div className='flex min-h-screen flex-col items-center justify-center px-6 py-12 lg:px-8'>
      <div className='sm:mx-auto sm:w-full sm:max-w-sm'>
        <h2 className='mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-white'>
          Sign up for an account
        </h2>
      </div>

      <div className='mt-10 sm:mx-auto sm:w-full sm:max-w-sm'>
        <form className='space-y-6' onSubmit={handleSubmit}>
          <div>
            <label htmlFor='fullName' className='block text-sm font-medium leading-6 text-white'>
              Full Name
            </label>
            <div className='mt-2'>
              <input
                id='fullName'
                name='fullName'
                type='text'
                required
                className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                value={inputs.fullName}
                onChange={(e) => setInputs({ ...inputs, fullName: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor='email' className='block text-sm font-medium leading-6 text-white'>
              Email address
            </label>
            <div className='mt-2'>
              <input
                id='email'
                name='email'
                type='email'
                autoComplete='email'
                required
                className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                value={inputs.email}
                onChange={(e) => setInputs({ ...inputs, email: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor='password' className='block text-sm font-medium leading-6 text-white'>
              Password
            </label>
            <div className='mt-2'>
              <input
                id='password'
                name='password'
                type='password'
                autoComplete='new-password'
                required
                className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                value={inputs.password}
                onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label htmlFor='confirmPassword' className='block text-sm font-medium leading-6 text-white'>
              Confirm Password
            </label>
            <div className='mt-2'>
              <input
                id='confirmPassword'
                name='confirmPassword'
                type='password'
                autoComplete='new-password'
                required
                className='block w-full rounded-md border-0 bg-white/5 py-1.5 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-indigo-500 sm:text-sm sm:leading-6'
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
              />
            </div>
          </div>

          <div>
            <button
              type='submit'
              className='flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500'
              disabled={loading}
            >
              {loading ? "Creating account..." : "Sign up"}
            </button>
          </div>
        </form>

        <p className='mt-10 text-center text-sm text-gray-400'>
          Already have an account?{" "}
          <Link to='/login' className='font-semibold leading-6 text-indigo-400 hover:text-indigo-300'>
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;