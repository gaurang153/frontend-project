import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Button, Grid } from "@mui/material";
import Timer from "./UI/Timer";
import axios from "axios";

const DynamicBiddingPage = ({ orderId }) => {
  const [order, setOrder] = useState({});
  const [row, setRow] = useState([]);

  const rows = [
    {
      id: 1,
      vendorName: "vendor",
      vendorRating: "4.8",
      vendorComments: "Kaam hojayga",
      bidPlaceTime: "18/09/2022 12:00:00",
      bidAmount: "400",
    },
    {
      id: 2,
      vendorName: "vendor",
      vendorRating: "4.8",
      vendorComments: "Kaam hojayga",
      bidPlaceTime: "18/09/2022 12:00:00",
      bidAmount: "550",
    },
    {
      id: 3,
      vendorName: "vendor",
      vendorRating: "4.8",
      vendorComments: "Kaam hojayga",
      bidPlaceTime: "18/09/2022 12:00:00",
      bidAmount: "570",
    },
    {
      id: 4,
      vendorName: "vendor",
      vendorRating: "4.8",
      vendorComments: "Kaam hojayga",
      bidPlaceTime: "18/09/2022 12:00:00",
      bidAmount: "300",
    },
  ];

  useEffect(() => {
    axios
      .get("http://localhost:8080/order/getbiddetails/" + orderId, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        setRow(
          response.data.map((bid) => {
            return {
              id: bid.id,
              vendorName: bid.vendor.name,
              vendorRating: bid.vendor.rating,
              vendorComments: bid.vendorComments,
              bidPlacedTime: bid.bidPlacedTime,
              bidAmount: bid.bidAmount,
            };
          })
        );
      });

    axios
      .get("http://localhost:8080/order/" + orderId, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => setOrder(response.data))
      .catch((err) => console.log(err));

    var intervalId = setInterval(() => {
      axios
        .get("http://localhost:8080/order/" + orderId, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => setOrder(response.data))
        .catch((err) => console.log(err));

      axios
        .get("http://localhost:8080/order/getbiddetails/" + orderId, {
          headers: {
            "Content-Type": "application/json",
          },
        })
        .then((response) => {
          setRow(
            response.data.map((bid) => {
              return {
                id: bid.id,
                vendorName: bid.vendor.name,
                vendorRating: bid.vendor.rating,
                vendorComments: bid.vendorComments,
                bidPlacedTime: bid.bidPlacedTime,
                bidAmount: bid.bidAmount,
              };
            })
          );
        });
    }, 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  const columns = [
    { field: "vendorName", headerName: "Vendor Name", flex: 0.5 },
    { field: "vendorRating", headerName: "Vendor Rating", flex: 0.5 },
    { field: "vendorComments", headerName: "Vendor Comments", flex: 1 },
    { field: "bidPlacedTime", headerName: "Bid Placed Time", flex: 0.5 },
    { field: "bidAmount", headerName: "Bid Amount", flex: 0.5 },
  ];

  return (
    <div className="container-fluid mb-3">
      <Grid container spacing={3}>
        <Grid item xs={12} sm={11}>
          <h5>Order Description: </h5>
          <h6>{order.customerComments}</h6>
        </Grid>
        <Grid item xs={12} sm={1} alignSelf={"end"}>
          <Timer minutes={order.lockoutTimeInMinutes} />
        </Grid>
        <Grid item xs={12} sx={{ marginBottom: 1 }}>
          <DataGrid
            columns={columns}
            rows={row}
            autoHeight
            initialState={{
              sorting: {
                sortModel: [{ field: "bidAmount", sort: "asc" }],
              },
            }}
          />
        </Grid>
        <Grid xs={12} sm={5} sx={{ marginTop: 3, marginLeft: 3 }}>
          <h5>Place your Bid</h5>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          style={{ display: "flex", justifyContent: "flex-end" }}
        >
          <Button
            variant="contained"
            color="error"
            onClick={() =>
              axios
                .post("http://localhost:8080/order/deletebid", {
                  vendorId: JSON.parse(localStorage.getItem("authVendor")).id,
                  orderId: orderId,
                })
                .then((response) => {
                  if (response.status === 200) {
                  }
                })
                .catch((err) => console.log(err))
            }
          >
            I'm Out
          </Button>
        </Grid>
      </Grid>
    </div>
  );
};

export default DynamicBiddingPage;
