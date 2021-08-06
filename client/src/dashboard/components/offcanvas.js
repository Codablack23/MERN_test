import {Link} from 'react-router-dom'

const Off = () => {
    const match={
        path:'dashboard'
    }
    return (
    <div className="offcanvas offcanvas-start bg-dark" tabIndex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
    <div className="offcanvas-body">
    <div className=" p-2 w3-bar-block w3-text-gray">
        
        <header className="sideheader p-2 mb-3"><h6>PERFECT BROKER</h6></header>
        <div>
           <div className="d-flex" data-bs-toggle="collapse" href="#accounts" role="button" aria-expanded="false" aria-controls="accounts">
                <a className="w-100 w3-bar-item w3-text-gray">
                <span><i className="bi bi-wallet w3-text-purple "></i></span>
                <span className="pl-3" style={{marginLeft:7}}>Accounts</span>
                <span className="w3-right"><i className="bi bi-chevron-double-down"></i></span>
                </a>
              
           </div>
           <div className="collapse d-block" id="accounts">
            <div className="collapsed_links">
                <Link to={`/${match.path}/open_demo`} className="w3-bar-item  w3-text-purple ">Open Demo Account</Link>
                <Link to={`/${match.path}/open_live`} className="w3-bar-item w3-text-purple">Create Live Account</Link>
                <Link to={`/${match.path}/account_history`} className="w3-bar-item  w3-text-purple">Account History</Link>
            </div>
        </div>
        </div>
        {/* account Link */}
        <div>
           <div className="d-flex" data-bs-toggle="collapse" href="#funds" role="button" aria-expanded="false" aria-controls="funds">
                <a className="w-100 w3-bar-item w3-text-gray" >
                <i className="bi bi-cash-stack w3-text-purple"></i>
                <span style={{marginLeft:9}}>Funds</span>
                <span className="w3-right"><i className="bi bi-chevron-double-down"></i></span>
                </a>
              
           </div>
           <div className="collapse" id="funds">
            <div className="collapsed_links">
                <Link to={`/${match.path}/deposit`} className="w3-bar-item w3-text-purple">Deposit</Link>
                <a href="#" className="w3-bar-item w3-text-purple">Make Withdrawal</a>
                <Link to={`/${match.path}/transaction_history`} className="w3-bar-item w3-text-purple">Transaction HIstory</Link>
            </div>
        </div>
        </div>
        {/* end of Funds */}
        <div>
        <Link to={`/${match.path}/investments`} className="w3-bar-item w3-text-gray">
          <i className="bi bi-safe w3-text-purple"></i>
          <span style={{marginLeft:9}}>Investments</span>
          </Link>
      </div>
      {/* end of investment */}
        <div>
           <div className="d-flex" data-bs-toggle="collapse" href="#profile" role="button" aria-expanded="false" aria-controls="profile">
                <a className="w-100 w3-bar-item w3-text-gray" >
                    <span><i className="bi bi-person-bounding-box w3-text-purple"></i></span>
                    <span style={{ marginLeft:9}}>Profile</span>
                <span className="w3-right"><i className="bi bi-chevron-double-down"></i></span>
                </a>
              
           </div>
           <div className="collapse" id="profile">
            <div className="collapsed_links w3-text-purple">
                <a href="#" className="w3-bar-item w3-text-purple">View Profile</a>
                <a href="#" className="w3-bar-item w3-text-purple">Get Help</a>
            </div>
        </div>
        </div>
        {/* end of profile */}
    
        <div>

          <Link to={`/${match.path}/downloads`} className="w3-bar-item w3-text-gray">
          <i className="bi bi-download w3-text-purple"></i>
          <span style={{marginLeft:9}}>Download</span>
          </Link>
         </div>
         <div>
          <a href="#" className="w3-bar-item w3-text-gray">
          <i className="bi bi-pencil-square w3-text-purple"></i>
          <span style={{marginLeft:9}}>Send Reports</span>
          </a>
         </div>

   

    </div>
      
    </div>
  </div>);
}
 
export default Off;