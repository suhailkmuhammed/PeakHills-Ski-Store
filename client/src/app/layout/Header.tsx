import { AppBar, Typography,Toolbar, Switch } from "@mui/material";

interface Props{
    darkmode: boolean;
    handleThemeChange: () => void;
}
export default function Header({darkmode,handleThemeChange}: Props) {
    return (
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar>
                <Typography variant='h6'>
                    RE-STORE
                </Typography>
                <Switch checked={darkmode} onChange={handleThemeChange} />
            </Toolbar>
        </AppBar>
    )
}