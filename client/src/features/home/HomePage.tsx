import { Grid, Typography, Button } from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();
    function handleProductImageClick(productid: number) {
        navigate(`/catalog/${productid}`);
    }
    return (
        <div>
            {/* Hero Section */}
            <div style={{
                background: 'url("https://extreme-slide.myshopify.com/cdn/shop/files/skiers-winters.webp?v=1705929571")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                height: '100vh',
                color: '#fff',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Typography variant="h2" component="h1" gutterBottom>
                    Welcome to Peak Hills
                </Typography>
                <Typography variant="h5" component="p" gutterBottom>
                    Explore our range of ski equipment and gear
                </Typography>
                <Button
                    variant="outlined"
                    style={{
                        marginTop: '20px',
                        color: '#fff',
                        borderColor: '#fff',
                    }}
                    component={Link}
                    to="/catalog"
                >
                    Shop Now
                </Button>
            </div>

            {/* Featured Products Section */}
            <section style={{
                padding: '40px 0',
                background: '#f9f9f9',
                textAlign: 'center',
            }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    Featured Products
                </Typography>
                <Grid container spacing={1}>
                    {/* Product items go here */}
                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{
                            textAlign: 'center',
                            padding: '20px',
                        }}>
                            {/* Product image */}
                            <img src="http://localhost:3000/images/products/hat-react1.png" alt="Ski Product 1" style={{ width: '60%' }} />
                            <Typography variant="h6" gutterBottom>
                                Ski Hat
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={() => handleProductImageClick(8)}
                            >View Details</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{
                            textAlign: 'center',
                            padding: '20px',
                        }}>
                            {/* Product image */}
                            <img src="http://localhost:3000/images/products/sb-core2.png" alt="Ski Product 1" style={{ width: '60%' }} />
                            <Typography variant="h6" gutterBottom>
                                Ski Board
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={() => handleProductImageClick(4)}>
                                View Details</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{
                            textAlign: 'center',
                            padding: '20px',
                        }}>
                            {/* Product image */}
                            <img src="http://localhost:3000/images/products/boot-redis1.png" alt="Ski Product 2" style={{ width: '60%' }} />
                            <Typography variant="h6" gutterBottom>
                                Ski Boot
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={() => handleProductImageClick(14)}>
                                View Details</Button>
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6} md={3}>
                        <div style={{
                            textAlign: 'center',
                            padding: '20px',
                        }}>
                            {/* Product image */}
                            <img src="http://localhost:3000/images/products/glove-react1.png" alt="Ski Product 3" style={{ width: '60%' }} />
                            <Typography variant="h6" gutterBottom>
                                Ski Gloves
                            </Typography>
                            <Button
                                variant="outlined"
                                onClick={() => handleProductImageClick(12)}>
                                View Details</Button>
                        </div>
                    </Grid>
                </Grid>
            </section>

            {/* About Section */}
            <section style={{
                padding: '40px 0',
                textAlign: 'center',
            }}>
                <Typography variant="h4" component="h2" gutterBottom>
                    About Us
                </Typography>
                <Typography variant="body1" component="p" gutterBottom>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla convallis libero ac nisl pharetra
                    consequat.
                </Typography>
            </section>

            {/* Footer Section */}
            <footer style={{
                background: '#333',
                color: '#fff',
                padding: '20px 0',
                textAlign: 'center',
            }}>
                <Typography variant="body2" component="p">
                    © 2024 Ski Shop. All rights reserved.
                </Typography>
            </footer>
        </div>
    );
};

export default HomePage;

