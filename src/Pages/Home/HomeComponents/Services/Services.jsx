import { useEffect } from "react";
import { useState } from "react";
import ServiceCard from "./ServiceCard";

const Services = () => {
    const [services,setServices] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div className="mt-4">
            <div className="text-center space-y-2">
                <h1 className="text-2xl font-bold text-orange-500">Our Services</h1>
                <h1 className="text-5xl">Our Services Area</h1>
                <p className="pb-5">
                the majority have suffered alteration in some form, by injected humour, or randomised <br /> words which don't look even slightly believable. 
                </p>
            </div>
            <div className="grid grid-cols-3 gap-10 my-5 container mx-auto">
                {
                    services.map(service => <ServiceCard key={service._id} service={service}></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Services;