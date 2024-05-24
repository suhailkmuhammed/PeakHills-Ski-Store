import { TableContainer, Paper, Table, TableHead, TableRow, TableCell, TableBody, Button } from "@mui/material";
import { useEffect, useState } from "react";
import agent from "../../app/api/agent";
import { Order } from "../../app/models/order";
import LoadingComponent from "../../app/layout/LoadingComponent";
import { currencyformat } from "../../app/util/Util";
import OrdersEmpty from "./ordersEmpty";
import OrderDetails from "./orderDetails";

export default function Orders() {
    const [orders, setOrders] = useState<Order[] | null>(null);
    const [loading, setLoading] = useState(true);
    const [selectedOrderNumber, setSelectedOrderNumber] = useState(0);

    useEffect(() => {
        agent.Orders.list()
            .then(orders => setOrders(orders))
            .catch(error => console.log(error))
            .finally(() => setLoading(false))
    }, [])

    if (loading) return <LoadingComponent message="Loading Orders..." />
    
    if (selectedOrderNumber > 0) return (
        <OrderDetails
            order={orders?.find(o => o.id === selectedOrderNumber)!}
            setSelectedOrderNumber={setSelectedOrderNumber}
        />
    )
    if (!orders || orders.length === 0) return <OrdersEmpty />
    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow style={{ alignContent: 'center' }}>
                        <TableCell align="center"><b>Order Number</b></TableCell>
                        <TableCell align="center"><b>Total Amount($)</b></TableCell>
                        <TableCell align="center"><b>Order Date</b></TableCell>
                        <TableCell align="center"><b>Order Status</b></TableCell>
                        <TableCell align="center"></TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {orders?.map((order) => (
                        <TableRow
                            key={order.id}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row" align="center">
                                {order.id}
                            </TableCell>
                            <TableCell align="center">{currencyformat(order.total)}</TableCell>
                            <TableCell align="center">{order.orderDate.split('T')[0]}</TableCell>
                            <TableCell align="center">{order.orderStatus}</TableCell>
                            <TableCell align="center">
                                <Button onClick={() => setSelectedOrderNumber(order.id)}>View</Button>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}