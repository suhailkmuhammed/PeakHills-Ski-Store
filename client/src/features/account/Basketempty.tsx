import { Container, Typography, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { ShoppingCartTwoTone } from '@mui/icons-material';

const EmptyBasketPage = () => {
  return (
    <Container style={{ marginTop: '2rem', display: 'flex', flexDirection: 'column', alignItems: 'center' }} maxWidth="sm">
      <br />
      <Paper style={{ padding: '1.5rem', marginTop: '1rem', textAlign: 'center' }}>
        <ShoppingCartTwoTone style={{ fontSize: '6rem', color: 'rgba(0, 0, 0, 0.54)', marginBottom: '1rem' }} />
        <Typography variant="body1">
            Your basket is currently empty. Start shopping now!
          </Typography><Button
            variant="contained"
            color="primary"
            style={{ marginTop: '1rem' }}
            component={Link}
            to="/catalog"
          >
              catalog
            </Button>
      </Paper>
    </Container>
  );
};

export default EmptyBasketPage;
