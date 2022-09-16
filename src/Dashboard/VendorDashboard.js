import { useState } from "react";
import Sidebar from "../Layout/Sidebar";
import PendingTable from "./UI/PendingTable";
import RequestTable from "./UI/RequestTable";
import ServiceTabs from "./UI/ServiceTabs";
import HomePage from '../HomePage'

function VendorDashboard() {
  const vendor = JSON.parse(localStorage.getItem("authVendor"));
  const [renderComponant, setRenderComponant] = useState("default");  
  
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-2 pt-5">

          <Sidebar setRenderComponant={setRenderComponant}/>

        </div>
        <div className="col-md-10">
            {renderComponant==="completed" ? <ServiceTabs data={vendor.services} /> : renderComponant==="pending" ? <PendingTable/> : renderComponant === "request" ? <RequestTable/> : <HomePage/> }

        </div>
      </div>
    </div>
  );
}

export default VendorDashboard;

/** 
 * <div className="container-fluid">
            
            <div className="row">
                <div className="col-2"><Sidebar/></div>
                <div className="col-10">
                    {renderComponant === "default"? <HomePage/> : renderComponant === "2" ?  }
                </div>
            </div>
            
            
        </div>
 * 
 * 
 */