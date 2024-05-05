import loginImg from './../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';

const Register = () => {
    const handleSignUp = e =>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        console.log(email,password);
    }
    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex">
        <div className="flex items-center justify-center">
          <img src={loginImg} className='w-full pr-28 h-[600px]' alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className='text-3xl font-medium'>SignUp</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="type"
                name='name'
                placeholder="Name"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name='email'
                placeholder="Email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                name='password'
                placeholder="Password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary" type='submit'>SignUp</button>
            </div>
          </form>
          <p className='text-center pb-10'>Already have an account? <Link className='text-orange-600 font-bold' to={'/signin'}>Login</Link></p>
        </div>
      </div>
    </div>
    );
};

export default Register;