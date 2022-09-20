import LogoutButton from "../Login/LogoutButton";
import OrderForm from "./OrderForm";
import OrderTable from "./OrderTable";
import ProfileModal from "./ProfileModal";

function CustomerDashboard() {

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
      <LogoutButton/>
    </div>
  );
}

export default CustomerDashboard;
