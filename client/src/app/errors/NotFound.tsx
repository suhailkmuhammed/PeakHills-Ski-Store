import { Button, Container, Divider, Paper, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function NotFound() {
    return(
        <Container component={Paper} sx={{height:400}}>
            <Typography gutterBottom variant="h3" sx={{color:'red',textAlign:'center'}}>Oops - Page not found</Typography>
            <Divider />
            <Button fullWidth component={Link} to='/catalog'>Go back to homepage</Button>
        </Container>
    )
}