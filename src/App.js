import * as React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { createBrowserHistory } from 'history';
// import './style/App.scss';
import BottomNav from './view/bottomNav/bottomNav';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LoyaltyOutlinedIcon from '@mui/icons-material/LoyaltyOutlined';
import RestoreIcon from '@mui/icons-material/Restore';
import Home from './view/home/Home';
import Eksplor from './view/eksplor/Eksplor';
import Promo from './view/promo/Promo';
import History from './view/history/History';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const history = createBrowserHistory();
const loading = () => <div className="animated fadeIn pt-3 text-center">Loading...</div>;

// const Home = React.lazy(() => import("./view/home/Home"));
// const Eksplor = React.lazy(() => import("./view/eksplor/Eksplor"));
// const Promo = React.lazy(() => import("./view/promo/Promo"));
// const History = React.lazy(() => import("./view/history/History"));

function App() {

  const [value, setValue] = React.useState(0);
  // const history = useHistory();

    const handleOnChange = (value) => {
        setValue(value);
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

  return (

    <div className='App'>
      {getPage()}
      <Paper sx={{ position: 'fixed', 
      bottom: 10, display: 'flex', justifyContent: 'center', alignItems: 'center',
      borderRadius: '16px', left: '10px', right: '10px', boxShadow: '0px 0px 17px 6px rgba(74, 66, 66, 0.15)' }}>

          <BottomNavigation className='navBottom'
          showLabels
          value={value}
          onChange={(event, newVal) => {handleOnChange(newVal)}}>
              <BottomNavigationAction label="Beranda" icon={<HomeOutlinedIcon />} />
              <BottomNavigationAction label="Eksplor" icon={<SearchOutlinedIcon />} />
              <BottomNavigationAction label="Promo" icon={<LoyaltyOutlinedIcon />} />
              <BottomNavigationAction label="Riwayat" icon={<RestoreIcon />} />
          </BottomNavigation>

      </Paper>
  </div>

    // <Router history={history}>
    //   <React.Suspense fallback={loading()}>
    //       <BottomNav>      
    //         <Switch>   
    //           <Route path="/" render={props => <Home {...props}/>} />
    //           <Route path="/eksplor" render={props =>  <Eksplor {...props} />} />
    //           <Route path="/promo" render={props => <Promo {...props} />} />
    //           <Route path="/riwayat" render={props => <History {...props} />} />
    //         </Switch>
    //       </BottomNav>
    //   </React.Suspense>  
    //   </Router>
  );
}

export default App;
