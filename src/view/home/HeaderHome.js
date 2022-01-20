import * as React from "react";
import { AppBar, CssBaseline, IconButton, Toolbar, Typography } from "@mui/material";
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';

function AppBarHome() {
    return(
        <React.Fragment>
            <CssBaseline />
            <AppBar elevation={0} style={{
                backgroundColor: 'transparent'
            }}>
                <Toolbar>
                    <Typography variant="h5" component="div" sx={{ flexGrow: 1, color: 'black', fontWeight: 'bold' }}>
                        Foods&Goods
                    </Typography>
                    <IconButton aria-label="shopping-bag" 
                    sx={{
                        'svg':{
                            width: '35px',
                            height: '35px',
                            color: 'black'
                        },
                        marginRight: '16px'
                    }}>
                        <ShoppingBagOutlinedIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
            
        </React.Fragment>
    )
}

export default AppBarHome;