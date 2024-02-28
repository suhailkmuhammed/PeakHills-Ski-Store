import { TableContainer, Paper, Table, TableBody, TableRow, TableCell } from "@mui/material";
import { useStoreContext } from "../../app/context/StoreContext";
import { currencyformat } from "../../app/util/Util";
import { useEffect, useState } from "react";
import { LoadingButton } from "@mui/lab";

export default function BasketSummary() {
    
    const [subtotal, setSubtotal] = useState(0);
    const [deliveryfee,setDeliveryfee] = useState(0);
    const [loading,setLoading] = useState(false);
    const { basket } = useStoreContext();
    
    useEffect(() => {
        // This effect will trigger whenever basket changes
        setLoading(true);
        handleSubTotal();
        setTimeout(() => {
            setLoading(false);
        }, 500);
        
    }, [basket]);

    function handleSubTotal() {
        const total = basket?.items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const displaysubtotal = total !== undefined ? total : 0;
        setSubtotal(displaysubtotal);
        if (displaysubtotal >= 10000) {
            setDeliveryfee(0);
        }
        else {
            setDeliveryfee(500);
        }
    }

    return (
        <>
            <TableContainer component={Paper} variant={'outlined'}>
                <Table>
                    <TableBody>
                        <TableRow>
                            <TableCell colSpan={2}>Subtotal</TableCell>
                            <TableCell align="right">
                                <LoadingButton loading={loading}>
                                {currencyformat(subtotal)}
                                </LoadingButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}>Delivery fee*</TableCell>
                            <TableCell align="right">
                            <LoadingButton loading={loading}>
                                {currencyformat(deliveryfee)}
                                </LoadingButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell colSpan={2}><b>Total</b></TableCell>
                            <TableCell align="right">
                            <LoadingButton loading={loading}>
                                {currencyformat(subtotal + deliveryfee)}
                                </LoadingButton>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                                <span style={{ fontStyle: 'italic' }}>*Orders over $100 qualify for free delivery</span>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
        </>
    )
}