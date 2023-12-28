import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateAbout = () => {
    const {id} = useParams()
    console.log(id);
    const navigate = useNavigate()


    const handleFormSubmit = (event)=> {
        event.preventDefault()
        const form = event.target 
        const Name = form.Name.value 
        const University = form.University.value 
        const Email = form.Email.value 
        const Address =  form.Address.value 
        const about = {
            Name,
            University,
            Email,
            Address
        }
        
        console.log(about)

       // Corrected fetch URL
fetch(`http://localhost:3000/about-route/updateAbout/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(about),
  })
    .then(res => res.json())
    .then(data => {
      if (data) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "About Update Successfully",
          showConfirmButton: false,
          timer: 1500,
        });
  
        navigate('/about');
      }
    })
    .catch(error => {
      console.error("Error updating about:", error);
    });
  
    }




    return (
        <div className="p-4 md:px-8 lg:px-12 xl:px-20">
        <div className=" pb-3">
          <p className="text-2xl font-bold">Edit Information</p>
        </div>
        <form onSubmit={handleFormSubmit} className="w-full md:w-2/3 lg:w-1/2 xl:w-1/3">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name='Name'
              placeholder="Name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              University
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name='University'
              placeholder="University"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name = 'Email'
              placeholder="Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Address
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name = 'Address'
              placeholder="Address"
            />
          </div>
          <div className="flex justify-end">
           <input className="px-4 cursor-pointer py-2 bg-blue-500 text-white rounded-full focus:outline-none focus:shadow-outline-blue" type="submit" value="Submit" />
          </div>
        </form>
      </div>
      
    );
};

export default UpdateAbout;