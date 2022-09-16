import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import CompletedTable from "./CompletedTable";

function ServiceTabs(props) {
  return (
    <Tabs
      defaultActiveKey="profile"
      id="justify-tab-example"
      className="mb-3"
      justify
    >
      {props.data.map((item) => {
        return (
          <Tab eventKey={item.id} title={item.serviceType}>
            <CompletedTable service={item} />
          </Tab>
        );
      })}
    </Tabs>
  );
}

export default ServiceTabs;
