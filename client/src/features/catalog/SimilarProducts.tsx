import { Divider, Grid, Paper, Typography } from '@mui/material';
import { RootState, useAppDispatch, useAppSelector } from '../../app/store/configureStore';
import { fetchAllProductsAsync, resetProducts } from './catalogSlice';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function SimilarProducts() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();
    const prodId = id ? parseInt(id, 10) : undefined;

    const products = useAppSelector((state: RootState) => state.catalog.products);

    function handleProductImageClick(productid: number) {
        navigate(`/catalog/${productid}`);
    }

    useEffect(() => {
        if (prodId && products.length === 0) {
            console.log("Fetching products for prodId:", prodId);
            dispatch(fetchAllProductsAsync(prodId));
        }
        return () => {
            console.log("Resetting products");
            dispatch(resetProducts());
        };
    }, [dispatch, prodId, products.length]);

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" style={{ marginBottom: '8px' }}>Similar Products</Typography>
                <Divider style={{ marginBottom: '16px' }} />
                <Typography>You might also like...</Typography>
            </Grid>

            {products.map((product) => (
                <Grid item key={product.id} xs={3} style={{ marginTop: '8px', marginBottom: '16px' }}>
                    <Paper elevation={3} style={{ padding: '16px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src={product.pictureUrl}
                                alt={product.name}
                                style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                                onClick={() => handleProductImageClick(product.id)}
                            />
                        </div>
                    </Paper>
                    <div style={{ textAlign: 'left', marginTop: '8px', marginLeft: '8px' }}>
                        <Typography variant="subtitle1" color='primary'>{product.type}</Typography>
                        <Typography variant="subtitle1">{product.name}</Typography>
                        <Typography variant="subtitle2" color='secondary'>${(product.price / 100).toFixed(2)}</Typography>
                    </div>
                </Grid>
            ))}
        </Grid>
    );
}

