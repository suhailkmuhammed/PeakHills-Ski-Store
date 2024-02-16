import { Typography, Container, Grid, Paper } from '@mui/material';

const AboutPage = () => {
    return (
        <Container maxWidth="lg">
            <Typography variant="h2" gutterBottom>About Us</Typography>
            <Typography variant="body1" paragraph>
                Welcome to our Peak Hills online store! We are passionate about skiing and providing the best gear to our customers.
            </Typography>
            <Typography variant="body1" paragraph>
                Our mission is to offer high-quality ski equipment, including skis, boots, poles, and accessories, at competitive prices.
            </Typography>
            <Typography variant="body1" paragraph>
                At our store, we believe in the joy and freedom that skiing brings. Whether you're a beginner hitting the slopes for the first time or an experienced skier seeking top-of-the-line equipment, we have something for everyone.
            </Typography>
            <Typography variant="body1" paragraph>
                We carefully select each product in our inventory to ensure durability, performance, and style. Our team is composed of avid skiers who understand the needs of our customers and are dedicated to providing excellent service and support.
            </Typography>
            <Typography variant="body1" paragraph>
                Thank you for choosing our store for your ski and boots needs. We look forward to serving you and helping you make the most of your skiing adventures!
            </Typography>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} style={{ padding: 20 }}>
                        <Typography variant="h5" gutterBottom>Our Vision</Typography>
                        <Typography variant="body1">
                            To be the premier destination for ski enthusiasts, offering a wide range of top-quality products and exceptional customer service.
                        </Typography>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={6}>
                    <Paper elevation={3} style={{ padding: 20 }}>
                        <Typography variant="h5" gutterBottom>Our Values</Typography>
                        <Typography variant="body1">
                            - Passion for skiing<br />
                            - Commitment to quality<br />
                            - Customer satisfaction<br />
                            - Continuous improvement
                        </Typography>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    );
};

export default AboutPage;
