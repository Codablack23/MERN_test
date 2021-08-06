import { Link } from 'react-router-dom'

export default function Offers(){

    return(
        <div>
            <div className="container">
              <div className="p-4 w3-center">
                  <h2 className="w3-text-purple p-5">What Our Broker Offer</h2>
                  <div className="w3-center">
                  {/* <hr className="w3-purple w3-center p-1" style={{width:"10%",margin:"auto"}} /><br/> */}
                  </div>
                  <div className="row">
                      <div className="col-12 col-md-4 pb-3 magnify">
                          <div className="w3-card-4 w3-text-grey p-5 w3-leftbar w3-border-purple"  style={{height:"30vh"}}>
                          <h4 className="w3-text-purple"> COMPETITIVE SPREADS</h4>
                          <h6 className="w3-text-grey">  Trade FX Major with a spread as low as 0.0 pip. No Re-quotes, No market execution delay. No dealing desk</h6>
                          </div>
                      </div>
                      <div className="col-12 col-md-4 mb-4 magnify">
                         <div className="w3-card-4 w3-text-grey p-5 w3-leftbar w3-border-purple"  style={{height:"30vh"}}>
                         <h4 className="w3-text-purple">TRADE OVER THE CLOCK</h4>
                          <h6 className="w3-text-grey">24Hrs A Day, 5 Days A Week in the biggest market in the world with $5.3 Trillion Exchange daily</h6>
                         </div>
                     </div>
                     <div className="col-12 col-md-4 mb-4 magnify">
                      <div className="w3-card-4 w3-text-grey p-5 w3-leftbar w3-border-purple" style={{height:"30vh"}}>
                          <h4 className="w3-text-purple">SWIFT NDD EXECUTION</h4>
                          <h6 className="w3-text-grey">Our execution model is based On Non-Dealing Desk and direct market order.</h6>
                      </div>
                     </div>

                  </div>
              
              </div><br />
             <div className="p4">
            <Link to="/users/register">
            <button className="btn w3-border w3-border-purple mb-5 t_btn w3-text-purple w3-hover-purple">
                 <span style={{marginRight:7}}> Get Started</span>
                 <i className="bi bi-arrow-right-square-fill"></i>
             </button>
            </Link>
             </div>
            </div>
        </div>
    )
}