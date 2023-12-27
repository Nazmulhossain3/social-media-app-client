import  { useContext, } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";
import { AuthContext } from "../../Component/Provider/AuthProvider";
import {  GoogleAuthProvider, getAuth, signInWithPopup } from "firebase/auth";
import app from "../../Component/Firebase/firebase.config";

const auth = getAuth(app)
const provider = new GoogleAuthProvider()

const Login = () => {
    const { signIn } = useContext(AuthContext);
    const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || '/'

  const handleLogIn = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

  

    signIn(email, password)
      .then((result) => {
        const signInUser = result.user;
        console.log(signInUser);
        navigate(from,{replace : true})
       
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleGoogleLogin = () => {
    signInWithPopup(auth,provider)
    
    .then(result => {
      const user = result.user
      console.log(user)
      navigate('/')
  })
  .catch(error=> {
      console.log(error.message)
  })
  }

    return (
        <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col ">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Please Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <form onSubmit={handleLogIn} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="email"
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
                name="password"
                placeholder="password"
                className="input input-bordered"
                required
              />
              <label className="label">
                <p>
                  {" "}
                  Create New Account ?{" "}
                  <Link className="underline" to="/register">
                    Register
                  </Link>{" "}
                </p>
              </label>
            </div>
            <div className="form-control mt-2">
              <button className="btn btn-primary">Login</button>
            </div>

            <button onClick={handleGoogleLogin} className=" text-white border-2 p-2 rounded-lg bg-slate-950 flex items-center mx-auto w-full gap-2">
              {" "}
              <FaGoogle></FaGoogle>
              <span>Login With Google</span>
            </button>

            
          </form>
        </div>
      </div>
    </div>
    );
};

export default Login;