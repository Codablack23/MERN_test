import { Link } from 'react-router-dom'


export default function HomeNav(){

    return (
     <div>
         <nav className="navbar navbar-expand-lg ">
            <div className="container-fluid">
                <button className="navbar-toggler w3-text-purple" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <i class="bi bi-chevron-double-down"></i>
                </button>
                <Link className="navbar-brand w3-text-purple" to="#"><Link to="" className="w3-text-purple" data-bs-toggle="tooltip" data-bs-placement="bottom" title="Go Back to PerFect Trades"><span><i className="bi bi-house w3-text-purple"></i></span></Link><span style={{marginLeft:"5%"}}> PERFECT BROKER</span></Link>
                <div className="collapse navbar-collapse justify-content-end" id="navbarTogglerDemo03">
                  <ul className="nav justify-content-between">
                  <li className="nav-item">
                        <Link className="nav-link" to="/users/register" tabindex="-1" aria-disabled="true"><button className="btn p-2 pl-5 pr-5 w3-purple sign_link">Sign Up</button></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/users/" tabindex="-1" aria-disabled="true"><button className="btn p-2 pl-5 pr-5 w3-border w3-text-purple w3-border-purple logbtn">Login</button></Link>
                    </li>
                  </ul>                        
                </div>
            </div>
       </nav>
    </div>
    )
}