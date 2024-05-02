import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@mui/material';
import { useNavigate } from 'react-router-dom';

interface LoginPopupProps {
    open: boolean;
    onClose: () => void;
  }

const LoginPopup = ({ open, onClose }: LoginPopupProps) => {
  const navigate = useNavigate();

  const handleStayOnPage = () => {
    onClose(); // Close the popup
  };

  const handleRedirectToLogin = () => {
    navigate('/login'); // Navigate to the login page
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Oops! You're not logged in.</DialogTitle>
      <DialogContent>
        <DialogContentText>
          To add an item to the basket, please login first.
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={handleStayOnPage} color="primary">
          Stay on page
        </Button>
        <Button onClick={handleRedirectToLogin} color="primary" autoFocus>
          Go to Login
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default LoginPopup;
