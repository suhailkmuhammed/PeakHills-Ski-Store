import { Grid } from "@mui/material";
import { Product } from "../../app/models/product";
import ProductCard from "./ProductCard";
import { Grid3x3 } from "@mui/icons-material";

interface Props{
    products : Product[];
}
export default function ProductList({products} : Props) {
    return (
        <>
            <Grid container spacing={4}>
                {products.map(products => (
                    <Grid item xs={3} key={products.id}>
                        <ProductCard product={products}/>
                    </Grid>
                ))}
            </Grid>
        </>
    )
}