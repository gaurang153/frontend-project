
import RegisterCustomer from "./Register/RegisterCustomer";
import RegisterVendor from "./Register/RegisterVendor";
import { Routes, Route} from 'react-router-dom';
import VendorLogin from "./Login/VendorLogin";
import HomePage from "./HomePage";
import CustomerLogin from "./Login/CustomerLogin";

function App() {

  return (
    <div>

      <HomePage/>
      <Routes>
        <Route path="/login/vendor" element={<VendorLogin/>}/>
        <Route path="/reg/customer" element={<RegisterCustomer/>}/>
        <Route path="/reg/vendor" element={<RegisterVendor/>}/>
        <Route path="/login/customer" element={<CustomerLogin/>}/>
      </Routes>
      
      

    </div>
  );
}

export default App;
