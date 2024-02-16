import { Typography, Container, Grid, TextField, Button } from '@mui/material';

const ContactPage = () => {
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        // You can add your logic for handling form submission here
    };

    return (
        <Container maxWidth="md">
            <Typography variant="h2" gutterBottom>Contact Us</Typography>
            <Typography variant="body1" paragraph>
                Have a question or feedback? We'd love to hear from you! Please fill out the form below, and we'll get back to you as soon as possible.
            </Typography>
            <form onSubmit={handleSubmit}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Your Name"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <TextField
                            label="Your Email"
                            variant="outlined"
                            fullWidth
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <TextField
                            label="Message"
                            variant="outlined"
                            fullWidth
                            multiline
                            rows={6}
                            required
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Button
                            variant="contained"
                            color="primary"
                            type="submit"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
            </form>
        </Container>
    );
};

export default ContactPage;
