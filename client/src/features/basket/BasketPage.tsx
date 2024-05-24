import { Button, Grid } from "@mui/material";
import EmptyBasketPage from "../account/Basketempty";
import BasketSummary from "./BasketSummary";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../app/store/configureStore";
import BasketTable from "./BasketTable";

export default function BasketPage() {
    const { basket } = useAppSelector(state => state.basket);

    if (!basket || basket.items.length === 0 || !basket.items) {
        return <EmptyBasketPage />
    }
    return (
        <>
            <BasketTable items={basket.items}/>
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
                        sx={{ mb: 10, mt: 1 }}
                    >
                        Checkout
                    </Button>
                </Grid>
            </Grid>
        </>
    )
}


