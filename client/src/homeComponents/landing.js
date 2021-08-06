
import { Link } from 'react-router-dom';
export default function Landing({img}){
    return(
        <div className="w3-card-2">
            <div className="container">
              <div className="p-5">
                  <div className="row">
                      <div className="col-12 col-md-6 p-2">
                          <div className="myimg">
                            <img src={img} alt="" className="img-fluid w3-circle" />
                          </div>
                      </div>
                      <div className="col-12 col-md-6 img p-5 mt-5 w3-center">
                          <div className="w3-text-purple">
                              <h3 className="w3-text-purple">Welcome To One Of The Innovative and Modern Trading Broker</h3>
                              <h6 className="w3-text-grey">
                                Access the biggest market worldwide in a click! Trade financial instruments
                                including FX, Indices, Metals, Energies, Equities, and Crypto currencies at spot prices.
                              </h6>
                            <Link to="/users/register">
                            <button className="btn w3-border w3-border-purple tbtn w3-text-purple w3-hover-purple">
                                  <span style={{marginRight:7}}> Get Started</span>
                                  <i className="bi bi-arrow-right-square-fill"></i>
                              </button>
                            </Link>
                          </div>
                     </div>
                  </div>
              </div>
            </div>
        </div>
    )
}