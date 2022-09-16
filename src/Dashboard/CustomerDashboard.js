import { useNavigate } from "react-router-dom";
import OrderForm from "./OrderForm";
import OrderTable from "./OrderTable";
import ProfileModal from "./ProfileModal";

function CustomerDashboard() {
  const navigate = useNavigate();
  function logoutHandler() {
    localStorage.removeItem("customer");
    navigate("/");
  }

  if (!localStorage.getItem("customer")) {
    return <h1>Please Login</h1>;
  }
  const customer = JSON.parse(localStorage.getItem("customer"));
  console.log(customer);
  return (
    <div className="container">
      <div class="d-flex flex-row-reverse bd-highlight">
        <div class="p-2 bd-highlight">
          <ProfileModal title={customer.name} />
        </div>
      </div>
      <div className="row mt-4">
        <OrderForm customer={customer} />
        <OrderTable />
      </div>
      <button className="btn btn-lg btn-danger my-5" onClick={logoutHandler}>
        Logout
      </button>
    </div>
  );
}

export default CustomerDashboard;
