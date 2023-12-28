import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const About = () => {
    const [abouts,setAbouts] = useState([])
    useEffect(()=>{
        fetch('http://localhost:3000/about-route/getAllAbout')
        .then(res => res.json())
        .then(data => {
            setAbouts(data.result)
        })
    },[])
    return (
        <div className="grid grid-cols-2 lg:grid-cols-4 md:grid-cols-3 p-12 gap-5">
           {
            abouts.map((about,index)=> <div className="border p-4" key={index}>
             
               <Link to={`/updateAbout/${about._id}`} > <button className="flex mx-auto relative left-24 bg-green-500 text-white border px-5">Edit</button></Link>
                <p>Name : {about.name} </p>
                <p>University : {about.university} </p>
                <p>Email : {about.email} </p>
                <p>Aaddress {about.address} </p>
            </div> )
           }
        </div>
    );
};

export default About;