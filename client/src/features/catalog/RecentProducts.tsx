import React from 'react';
import { useAppSelector } from '../../app/store/configureStore';
import { recentProductSelectors } from './RecentlyViewedSlice';
import { Grid, Typography, Divider, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const RecentlyViewedProducts: React.FC = () => {
    const navigate = useNavigate();
    // Select the recently viewed products from the Redux store
    const recentlyViewedProducts = useAppSelector(recentProductSelectors.selectAll);


    function handleProductImageClick(productid: number) {
        navigate(`/catalog/${productid}`);
    }

    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Typography variant="h5" style={{ marginBottom: '8px' }}>Recently Viewed Products</Typography>
                <Divider style={{ marginBottom: '16px' }} />
            </Grid>

            {recentlyViewedProducts.map((product) => (
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
};

export default RecentlyViewedProducts;
