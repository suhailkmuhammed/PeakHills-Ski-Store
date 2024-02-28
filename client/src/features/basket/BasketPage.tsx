import { Box, Button, Grid, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { Add, Delete, Remove } from "@mui/icons-material";
import { useStoreContext } from "../../app/context/StoreContext";
import agent from "../../app/api/agent";
import { useState } from "react";
import { LoadingButton } from "@mui/lab";
import EmptyBasketPage from "../login/Basketempty";
import BasketSummary from "./BasketSummary";
import { Link, useNavigate } from "react-router-dom";

export default function BasketPage() {
    const { basket, removeItem, setBasket } = useStoreContext();
    const [status, setStatus] = useState({
        loading: false,
        name: ''
    });

    const navigate = useNavigate();
    function handleProductImageClick(productid: number) {

        navigate(`/catalog/${productid}`);
    }

    function handleRemoveItem(productId: number, quantity = 1, name: string) {
        setStatus({ loading: true, name });
        agent.Basket.removeItem(productId, quantity)
            .then(() => removeItem(productId, quantity))
            .catch(error => console.log(error))
            .finally(() => setStatus({ loading: false, name: '' }))
            .finally(() => handleSubTotal())
    }

    function handleAddItem(productId: number, name: string) {
        setStatus({ loading: true, name });
        agent.Basket.addItem(productId)
            .then(basket => setBasket(basket))
            .catch(error => console.log(error))
            .finally(() => setStatus({ loading: false, name: '' }))
            .finally(() => handleSubTotal())
    }

    if (!basket || basket.items.length === 0 || !basket.items) {
        return <EmptyBasketPage />
    }
    return (
        <>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>Product</TableCell>
                            <TableCell align="center">Price</TableCell>
                            <TableCell align="center">Quantity</TableCell>
                            <TableCell align="right">SubTotal</TableCell>
                            <TableCell align="right"></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {basket.items.map((item) => (
                            <TableRow
                                key={item.productId}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">
                                    <Box display='flex' alignItems='center'>
                                        <img src={item.pictureUrl} alt={item.name} style={{ height: 50, marginRight: 20 }} onClick={() => handleProductImageClick(item.productId)} />
                                        <span>{item.name}</span>
                                    </Box>
                                </TableCell>
                                <TableCell align="center">${(item.price / 100).toFixed(2)}</TableCell>
                                <TableCell align="center">
                                    <LoadingButton
                                        loading={status.loading && status.name === 'rem' + item.productId}
                                        onClick={() => handleRemoveItem(item.productId, 1, 'rem' + item.productId)}
                                        onChange={BasketSummary}
                                        color="error">
                                        <Remove />
                                    </LoadingButton>
                                    {item.quantity}
                                    <LoadingButton
                                        loading={status.loading && status.name === 'add' + item.productId}
                                        onClick={() => handleAddItem(item.productId, 'add' + item.productId)}
                                        onChange={BasketSummary}
                                        color="secondary">
                                        <Add />
                                    </LoadingButton>
                                </TableCell>
                                <TableCell align="right">${((item.price / 100) * item.quantity).toFixed(2)}</TableCell>
                                <TableCell align="right">
                                    <LoadingButton
                                        loading={status.loading && status.name === 'del' + item.productId} color="error"
                                        onClick={() => handleRemoveItem(item.productId, item.quantity, 'del' + item.productId)}
                                        onChange={BasketSummary}>
                                        <Delete />
                                    </LoadingButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Grid container>
                <Grid item xs={6} />
                <Grid item xs={6}>
                    <BasketSummary />
                    <Button
                        component={Link}
                        to='/checkout'
                        variant='contained'
                        size='large'
                        fullWidth
                        sx={{ mb: 10,mt: 1 }}
                    >
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}

function handleSubTotal(): any {
    throw new Error("Function not implemented.");
}
