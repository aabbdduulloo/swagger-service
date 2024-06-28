import React, { useState, useEffect } from "react";
import {
  Container,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
} from "@mui/material";

const ordersData = [
  { id: 1, customer: "Ali", total: 150, status: "Pending" },
  { id: 2, customer: "Vali", total: 200, status: "Completed" },
  { id: 3, customer: "John", total: 350, status: "In Progress" },
  { id: 4, customer: "Sara", total: 150, status: "Pending" },
  { id: 5, customer: "Abu", total: 200, status: "Completed" },
  { id: 6, customer: "Andy", total: 350, status: "In Progress" },
];

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    // Fake API call to fetch orders
    setOrders(ordersData);
  }, []);

  const handleViewDetails = orderId => {
    alert(`Showing details for order ID: ${orderId}`);
  };

  return (
    <Container>
      <h1>Buyurtmalar Ro'yxati</h1>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell>Mijoz</TableCell>
              <TableCell>Jami</TableCell>
              <TableCell>Holati</TableCell>
              <TableCell>Harakat</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {orders.map(order => (
              <TableRow key={order.id}>
                <TableCell>{order.id}</TableCell>
                <TableCell>{order.customer}</TableCell>
                <TableCell>{order.total}</TableCell>
                <TableCell>{order.status}</TableCell>
                <TableCell>
                  <Button
                    variant="contained"
                    onClick={() => handleViewDetails(order.id)}
                  >
                    Batafsil
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default Orders;
