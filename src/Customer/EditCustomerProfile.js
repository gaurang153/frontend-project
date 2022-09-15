import { TextField, Button, Select, MenuItem, Grid, Card, CardContent, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import data from "../Assets/States.json";
import * as cities from "../Assets/States_Cities.json";

function EditCustomerProfile({ customer }) {
  const [editToggle, setEditToggle] = useState(true);
  const [buttonText, setButtonText] = useState("Edit");
  const [stateList, setStateList] = useState([]);
  const [cityList, setCityList] = useState([]);

  useEffect(() => {
    setStateList(data["states"]);
    setCityList(cities[customer.state])
  }, []);

  function handleChangeSelect(e) {
    setCityList(cities[e.target.value]);
  }

  function handleSubmit(e){
    e.preventDefault()
    
  }

  return (
    <div className="container-fluid">
      <h2 className="text-center mb-5">Edit Profile</h2>


      <Grid>
        <Card style={{ maxWidth: 650, padding: "20px 5px", margin: "0 auto" }}>
          <CardContent>
            <Typography gutterBottom variant="h5">
              Edit Profile
          </Typography> 
            <Typography variant="body2" color="textSecondary" component="p" gutterBottom>
              Edit your Details
          </Typography> 

      <form onSubmit={handleSubmit} >

      <Grid container spacing={3}>

      <Grid xs={12} sm={6} item>
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          defaultValue={customer.name}
          name="name"
          disabled={editToggle}
        />
        </Grid>

        <Grid xs={12} sm={6} item>
        <TextField
          type="email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          defaultValue={customer.email}
          name="email"
          disabled={editToggle}
        />
        </Grid>

        <Grid item xs={12} sm={6}>
        <TextField
          type="number"
          id="outlined-basic"
          label="Contact No"
          variant="outlined"
          defaultValue={customer.contactNo}
          disabled={editToggle}
          name="contactNo"
        />
        </Grid>

        <Grid item xs={12} sm={6}>
        <TextField
          type="text"
          id="outlined-basic"
          label="Address"
          variant="outlined"
          defaultValue={customer.address}
          disabled={editToggle}
          name="address"
        />
        </Grid>

        <Grid item xs={12} sm={6}>
        <Select
          label="State"
          disabled={editToggle}
          onChange={handleChangeSelect}
          style={{ minWidth: 120 }}
          name="state"
          defaultValue={customer.state}
        >
          {stateList.map((item) => {
            return (
              <MenuItem value={item.state_name}>{item.state_name}</MenuItem>
            );
          })}
        </Select>
        </Grid>

        <Grid item xs={12} sm={6}>
        <Select label="City" disabled={editToggle} style={{ minWidth: 120 }} name="city" defaultValue={customer.city}>
          {cityList.map((item) => {
            return <MenuItem value={item.city}>{item.city}</MenuItem>;
          })}
        </Select>
          </Grid>

          <Grid item xs={12} sm={6}>
        <TextField
          type="number"
          id="outlined-basic"
          label="Pincode"
          variant="outlined"
          defaultValue={customer.pincode}
          disabled={editToggle}
          name="pincode"
        />
        </Grid>

        <Grid item xs={12}>
        <Button
          type={editToggle ? "submit" : "button"}
          variant="contained"
          onClick={() => {
            setEditToggle(!editToggle);
            setButtonText(editToggle ? "Save" : "Edit");
          }}
          style={{margin : "0 auto"}}
        >
          {buttonText}
        </Button>
          </Grid>
        </Grid>

      </form>


      </CardContent>
        </Card>
      </Grid>

    </div>
  );
}

export default EditCustomerProfile;
