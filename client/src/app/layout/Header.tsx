import { ShoppingCart } from "@mui/icons-material";
import { AppBar, Typography,Toolbar, Switch, List, ListItem, IconButton, Badge, Box } from "@mui/material";
import { NavLink } from "react-router-dom";

const midlinks = [
    {title: 'catalog', path: '/catalog'},
    {title: 'about', path: '/about'},
    {title: 'contact', path: '/contact'}
]

const rightlinks = [
    {title: 'login', path: '/login'},
    {title: 'register', path: '/register'},
]
const shoppingCartLink = { title: 'shopping-cart', path: '/shopping-cart' };

interface Props{
    darkmode: boolean;
    handleThemeChange: () => void;
}

const navStyles = {
    color: 'inherit',
    textDecoration: 'none',
     typography: 'h7',
     '&:hover': {
        color: 'grey.500'
     },
     '&.active': {
        color: 'text.secondary'
     }
    }
export default function Header({darkmode,handleThemeChange}: Props) {
    return (
        <AppBar position='static' sx={{mb: 4}}>
            <Toolbar sx={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                <Box display= 'flex' alignItems= 'center'>
                    <Typography variant='h6' component={NavLink}
                    to= '/'
                    sx={navStyles}
                    >
                        PEAK HILLS
                    </Typography>
                    <Switch checked={darkmode} onChange={handleThemeChange} />
                </Box>
            <List sx={{display: 'flex'}}>
                {midlinks.map(({title,path}) => (
                    <ListItem
                        component={NavLink}
                        to={path}
                        key={path}
                        sx={navStyles}
                    >
                        {title.toUpperCase()}
                    </ListItem>
                ))}
            </List>
            
            <Box display= 'flex' alignItems= 'center'>
                <IconButton size="large" edge="start" color="inherit" sx={{mr:2}} component={NavLink} to={shoppingCartLink.path}>
                    <Badge badgeContent="4" color="secondary">
                        <ShoppingCart />
                    </Badge>
                </IconButton>

                <List sx={{display: 'flex', textAlign: 'right'}}>
                    {rightlinks.map(({title,path}) => (
                        <ListItem
                            component={NavLink}
                            to={path}
                            key={path}
                            sx={navStyles}
                        >
                            {title.toUpperCase()}
                        </ListItem>
                    ))}
                </List>
            </Box>
            
            </Toolbar>
        </AppBar>
    )
}