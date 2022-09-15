
import RegisterCustomer from "./Register/RegisterCustomer";
import RegisterVendor from "./Register/RegisterVendor";
import { Routes, Route} from 'react-router-dom';
import VendorLogin from "./Login/VendorLogin";
import CustomerLogin from "./Login/CustomerLogin";
import VendorDashboard from "./Dashboard/VendorDashboard";
import CustomerDashboard from "./Dashboard/CustomerDashboard";
import DrawerAppBar from "./Layout/Navbar";
import HomePage from "./HomePage";


function App() {

  return (
    <div>
      
      
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login/vendor" element={<VendorLogin/>}/>
        <Route path="/reg/customer" element={<RegisterCustomer/>}/>
        <Route path="/reg/vendor" element={<RegisterVendor/>}/>
        <Route path="/login/customer" element={<CustomerLogin/>}/>
        <Route path="/dashboard/vendor" element={<VendorDashboard/>}/>
        <Route path="/dashboard/customer" element={<CustomerDashboard/>}/>
        <Route path="/navbar" element={<DrawerAppBar/>}/>
      </Routes>
      
      

    </div>
  );
}

export default App;
