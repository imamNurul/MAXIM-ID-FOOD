import React from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import RestoreIcon from '@mui/icons-material/Restore';
import { useHistory } from "react-router-dom";
import Home from "../home/Home";
import Eksplor from "../eksplor/Eksplor";
import Promo from "../promo/Promo";
import History from "../history/History";

function BottomNav() {

    const [value, setValue] = React.useState(0);
    const history = useHistory();

    const handleOnChange = (event) => {

        console.log('valueee: ', event.target.value)

        setValue(event.target.value);

        

    }

    const getPage = () => {
        if(value == 0){
            // history.push('/')
            return <Home />
        }else if(value == 1){
            // history.push('/eksplor')
            return <Eksplor />
        }else if(value == 2){
            return <Promo />
            // history.push('/promo')
        }else{
            return <History />
            // history.push('/riwayat')
        }
    }


    return(
        <div>
            {console.log('valueee: ', history)}
            <main className="screen">
                {getPage()}
            </main>
            <Paper sx={{ position: 'fixed', 
            bottom: 10, left: 7, right: 7,
            borderRadius: '16px' }} elevation={3}>

                <BottomNavigation
                showLabels
                value={value}
                onChange={handleOnChange}>
                    <BottomNavigationAction label="Beranda" icon={<HomeOutlinedIcon />} />
                    <BottomNavigationAction label="Eksplor" icon={<SearchOutlinedIcon />} />
                    <BottomNavigationAction label="Promo" icon={<LoyaltyOutlinedIcon />} />
                    <BottomNavigationAction label="Riwayat" icon={<RestoreIcon />} />
                </BottomNavigation>

            </Paper>
        </div>
        
    )
}

export default BottomNav;