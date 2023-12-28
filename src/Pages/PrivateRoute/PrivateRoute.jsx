/* eslint-disable react/prop-types */
import { useContext } from 'react';
import { AuthContext } from '../../Component/Provider/AuthProvider';
import { Navigate,} from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loading} = useContext(AuthContext)

    if(loading){
        return "Loading..."
     
    }

    if(user){
    
    return  children

    }
    else{
    return  <Navigate to='/login' replace={true} ></Navigate>
    }
};

export default PrivateRoute;