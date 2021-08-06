import SideBar from './components/sidebar';
import Nav from './components/nav';
import Off from './components/offcanvas';
import {BrowserRouter as Router, Route,Switch,useRouteMatch} from 'react-router-dom'
import OpenDemo from './pages/open_demo';
import OpenLive from './pages/open_live';
import AccountHistory from './pages/account_history';
import DashLanding from './land';
import Deposit from './pages/deposit';
import Transactions from './pages/t_history';
import Investments from './pages/investments';
import Downloads from './pages/downloads';


const DashboardHome = () => {
   const match=useRouteMatch()
    return (
    <div>
       <Router>
       <SideBar/>
       <Off/>
       <div className="main">
        <Nav/>
        <Switch>
            <Route exact path={`${match.path}`} >
                <DashLanding/>
            </Route>
            <Route exact path={`${match.path}/open_demo`} >
              <OpenDemo/>
            </Route>
            <Route exact path={`${match.path}/open_live`} >
              <OpenLive/>
            </Route>
            <Route exact path={`${match.path}/account_history`} >
              <AccountHistory/>
            </Route>
            <Route exact path={`${match.path}/deposit`} >
              <Deposit/>
            </Route>
            <Route exact path={`${match.path}/transaction_history`} >
              <Transactions/>
            </Route>
            <Route exact path={`${match.path}/investments`} >
              <Investments/>
            </Route>
            <Route exact path={`${match.path}/downloads`} >
              <Downloads/>
            </Route>
        </Switch>
       </div>
       </Router>
    </div>  
        
);
}
 
export default DashboardHome;