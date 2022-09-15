
function VendorDashboard() {

    const vendor = JSON.parse(localStorage.getItem("authVendor"))
    
    return(
        <div>
            <h2>Vendor Dashboard</h2>
            <h3>Hello {vendor.name}</h3>
            {vendor.email}
            {vendor.contactNo}
            
        </div>
    )
}

export default VendorDashboard;