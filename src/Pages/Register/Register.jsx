import  { useContext, } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Component/Provider/AuthProvider';

const Register = () => {
    const navigate = useNavigate()
    const {createUser,userUpdate,logOut} = useContext(AuthContext)
   


    const handleSubmit = (event)=> {
        event.preventDefault()
        const form = event.target 
        const name = form.name.value 
        const photo = form.photo.value
        const email = form.email.value 
        const password = form.password.value 
        console.log(name,photo,email,password)
       
        
        createUser(email,password)
        .then(result => {

        const loggedUser = result.user
        console.log(loggedUser)
        userUpdate(name,photo)
          logOut()

          
        console.log(loggedUser)
        
        navigate('/')
        })
        .catch(error => {
            console.log(error)
        })

       
        
    }

    return (
        <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col ">
          <div className="text-center ">
            <h1 className="text-2xl font-bold">Please Register now!</h1>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
         
            <form onSubmit={handleSubmit} className="card-body">
           
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input type="text" name='name' placeholder="name" className="input input-bordered" />
              </div>
           
           
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo Url</span>
                </label>
                <input type="text" name='photo' placeholder="photo" className="input input-bordered" />
              </div>
           
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
              </div>
           
          
          
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name='password' placeholder="password" className="input input-bordered" />
      
           
      
                <label className="label">
                  <p>Already have an account ? <Link className='underline' to='/login'>Login</Link> </p>
                </label>
              </div>
             
             
              <div className="form-control mt-6">
                <button className="btn btn-primary">Register</button>
              </div>
            </form>
          </div>
        </div>
      
      </div>
    );
};

export default Register;