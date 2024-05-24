import { SearchOffSharp } from "@mui/icons-material";
import { Container, Paper, Typography, Button } from "@mui/material";
import { Link } from "react-router-dom";

export default function OrdersEmpty() {
    return (
        <Container style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }} maxWidth="sm">
            <br />
            <Paper style={{ padding: '1.5rem', marginTop: '1rem', textAlign: 'center' }}>
                <SearchOffSharp style={{ fontSize: '6rem', color: 'rgba(0, 0, 0, 0.54)', marginBottom: '1rem' }} />
                <Typography variant="body1">
                    <span style={{color:'red'}}>No Orders Found!<br/></span>
                    Looks like you haven't made your Order yet
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    style={{ marginTop: '1rem' }}
                    component={Link}
                    to="/catalog"
                >
                    Go to Catalog
                </Button>
            </Paper>
        </Container>
    )
}