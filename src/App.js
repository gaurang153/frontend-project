
import { useState } from "react";
import RegisterCustomer from "./Register/RegisterCustomer";
import RegisterVendor from "./Register/RegisterVendor";

function App() {

  const [toggleComponant, setToggleComponant] = useState(true);

  return (
    <div>
      <button onClick={()=> setToggleComponant(!toggleComponant) }>Toggle</button>
      {toggleComponant? <RegisterCustomer/> : <RegisterVendor/>}
      
      
    </div>
  );
}

export default App;
