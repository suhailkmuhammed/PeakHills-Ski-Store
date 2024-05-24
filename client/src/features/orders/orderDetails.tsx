import { Container, Paper, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Button, Box } from '@mui/material';
import { styled } from '@mui/system';
import { currencyformat } from '../../app/util/Util';
import { Order } from '../../app/models/order';

interface Props {
  order: Order;
  setSelectedOrderNumber: (id: number) => void;
}

const StyledContainer = styled(Container)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
}));

const StyledTableContainer = styled(TableContainer)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

const TotalAmountTypography = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  marginTop: theme.spacing(2),
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(3),
}));

function capitalizeFirstLetter(word: string) {
  if (!word) return word;
  return word.charAt(0).toUpperCase() + word.slice(1);
}

const OrderDetails = ({ order, setSelectedOrderNumber }: Props) => {

  const handleBackToOrders = () => {
    setSelectedOrderNumber(0);
  };

  return (
    <StyledContainer>
      <StyledPaper>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="h4" gutterBottom>
            Order Details
          </Typography>
          <Typography variant="h6">
            Order Date: {new Date(order.orderDate).toLocaleDateString()}
          </Typography>
        </Box>
        <Typography variant="h6">
          Order ID: {order.id}
        </Typography>
        <Typography variant="h6">
          Order Status: <span style={{ color: order.orderStatus === 'completed' ? 'green' : 'orange' }}>{order.orderStatus}</span>
        </Typography>
        <Typography variant="h6">
          Customer Name: {capitalizeFirstLetter(order.buyerId)}
        </Typography>

        <StyledTableContainer >
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Product</TableCell>
                <TableCell align='center'>Quantity</TableCell>
                <TableCell>Price</TableCell>
                <TableCell>Total</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {order.orderItems.map((item) => (
                <TableRow key={item.productId}>
                  <TableCell>
                    <Box display="flex" alignItems="center">
                      <img src={item.pictureUrl} alt={item.name} style={{ width: 50, marginRight: 10 }} />
                      <Typography>{item.name}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell align='center'>{item.quantity}</TableCell>
                  <TableCell>{currencyformat(item.price)}</TableCell>
                  <TableCell>{currencyformat(item.quantity * item.price)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </StyledTableContainer>
        <Typography style={{ fontStyle: 'italic' }}>
          *Orders over $100 qualify for free delivery
        </Typography>
        <Typography variant="h6" align='right' style={{ marginRight: '120px' }}>
          Delivery Fee: {currencyformat(order.deliveryFee)}
        </Typography>
        <TotalAmountTypography variant="h6" align='right' style={{ marginRight: '120px' }}>
          Total Amount: {currencyformat(order.total)}
        </TotalAmountTypography>

        <Box textAlign="center">
          <StyledButton variant="contained" color="primary" onClick={handleBackToOrders}>
            Back to Orders
          </StyledButton>
        </Box>
      </StyledPaper>
    </StyledContainer>
  );
};

export default OrderDetails;
