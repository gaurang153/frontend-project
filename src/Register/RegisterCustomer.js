import Select from "../Assets/Select";
import axios from "axios"
import useEffect from "react"

function RegisterCustomer(){

    const serviceList = {
        name : "serviceList",
        options : [],
    };

    useEffect(()=>{
        axios.get('http://localhost:8080/reg/list').then(response => console.log(response)).catch(err=> console.log(err));
    })

    // const stateList = {
    //     name : "state",
    //     options : [ "Andhra Pradesh",
    //     "Arunachal Pradesh",
    //     "Assam",
    //     "Bihar",
    //     "Chhattisgarh",
    //     "Goa",
    //     "Gujarat",
    //     "Haryana",
    //     "Himachal Pradesh",
    //     "Jammu and Kashmir",
    //     "Jharkhand",
    //     "Karnataka",
    //     "Kerala",
    //     "Madhya Pradesh",
    //     "Maharashtra",
    //     "Manipur",
    //     "Meghalaya",
    //     "Mizoram",
    //     "Nagaland",
    //     "Odisha",
    //     "Punjab",
    //     "Rajasthan",
    //     "Sikkim",
    //     "Tamil Nadu",
    //     "Telangana",
    //     "Tripura",
    //     "Uttarakhand",
    //     "Uttar Pradesh",
    //     "West Bengal",
    //     "Andaman and Nicobar Islands",
    //     "Chandigarh",
    //     "Dadra and Nagar Haveli",
    //     "Daman and Diu",
    //     "Delhi",
    //     "Lakshadweep",
    //     "Puducherry"],
    // }

    return(
        <div className="container-fluid">
            <h2>Register Page</h2>
            <form action="/reg/customer" method="post" className="form-control">
                <div className="row g-3 mb-3">
                    <label htmlFor="Email" className="col-1">Email</label>
                    <input type="email" name="email" id="email" className="col-auto"/>
                </div>
                <div className="row g-3 mb-3">
                    <label htmlFor="Password" className="col-1">Password</label>
                    <input type="password" name="password" id="password" className="col-auto" />
                </div>
                <div className="row g-3 mb-3">
                    <label htmlFor="confirmPassword" className="col-1">Confirm Password</label>
                    <input type="password" name="confirmPassword" id="confirmPassword" className="col-auto" />
                </div>
                <div className="row g-3 mb-3">
                    <label htmlFor="Name" className="col-1">Name</label>
                    <input type="text" name="name" id="name" className="col-auto"/>
                </div>
                <div className="row g-3 mb-3">
                    <label htmlFor="Address Line 1" className="col-1">Address Line 1</label>
                    <input type="text" name="addressLine1" id="addressLine1" className="col-auto" />
                </div>
                <div className="row g-3 mb-3">
                    <label htmlFor="Address Line 2" className="col-1">Address Line 2</label>
                    <input type="text" name="addressLine1" id="addressLine1" className="col-auto" />
                </div>
                <div className="row g-3 mb-3">
                    <label htmlFor="State" className="col-1">State</label>
                    <Select list={serviceList}/>
                </div>
                <div className="row g-3 mb-3">
                    <label htmlFor="City" className="col-1">City</label>
                    <input type="text" className="col-auto" />
                </div>
                <div className="row g-3 mb-3">
                    <label htmlFor="Pincode" className="col-1">Pincode</label>
                    <input type="number" name="pincode" id="pincode" className="col-auto" />
                </div>
                <div className="row g-3 mb-3">
                    <label htmlFor="ContactNo" className="col-1">Contact No</label>
                    <input type="number" name="number" id="number" className="col-auto"/>
                </div>
                <div className="row g-3 mb-3">
                    <input type="submit" value="Register" className="btn-primary col-1" />
                </div>
            </form>
        </div>
    )
}

export default RegisterCustomer;