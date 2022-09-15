import EditCustomerProfile from "../Customer/EditCustomerProfile"


function CustomerDashboard(){

    const customer = JSON.parse(localStorage.getItem("customer"))
    console.log(customer)
    return(
        <div>
            <h2>Customer Dashboard</h2>
            <EditCustomerProfile customer={customer}/>
        </div>
    )
}

export default CustomerDashboard