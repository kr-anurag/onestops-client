import React from "react";
import ServiceCategory from "../Components/ServiceCategory/ServiceCategory";
import {cleaningServices, homeRepairServices} from "../Utils/Database";

const AllServices = () => {
    return (
        <>
            <ServiceCategory title="Home Repairs" services={homeRepairServices} />
            <ServiceCategory title="Cleaning & Pest Control" services={cleaningServices} />
        </>
    );
};

export default AllServices;