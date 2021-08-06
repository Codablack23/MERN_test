export default function DashLanding(){
    return(
        <div className="p-2">
           <header>
               <h3 className="w3-text-purple">Welcome Back Client</h3>
           
           </header>
           <section className="w3-center"><h4 className="w3-text-grey">A Quck Navigation To  Our Sections</h4></section>
           <main>
              <div className="container w3-padding">
                <div className="row">
                    <div className="col-12 col-md-4 p-1 mb-2">
                        <div className="p-1 w3-purple rounded section w3-card-4">
                           <header>
                             <h5 className="w3-text-white">Accounts</h5>
                           </header>
                           <div className="w3-center">
                               <h6 className="w3-text-light-grey" style={{textTransform:"capitalize"}}>Lets Create a Trading Account For You Where You Can Start Your Journey In MT5 You Can Get any Type Of Trading Account Live or A Demo </h6>
                           </div>
                           <div className="action_btn bg-dark p-2 d-flex justify-content-between">
                               <div><button className="btn w3-border w3-border-purple w3-text-purple">Create Live</button></div>
                               <div>  <button className="btn w3-border w3-border-purple w3-text-purple">Create Demo</button></div>
                           </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 p-1 mb-2">
                        <div className="p-1 w3-purple rounded section w3-card-4">
                            <header>
                               <h5 className="w3-text-white">Funds</h5>
                            </header>
                            <div className="w3-center">
                               <h6 className="w3-text-light-grey" style={{textTransform:"capitalize"}}>If You Have Played Around with Your Demo Account and Have Had the Confidence To Go Live You can Fund Your Live account so You Can go Into The market And Start Your Trading </h6>
                            </div>
                            <div className="action_btn bg-dark p-2 d-flex justify-content-between">
                               <div><button className="btn w3-border w3-border-purple w3-text-purple">Deposit</button></div>
                               <div>  <button className="btn w3-border w3-border-purple w3-text-purple">Withdraw</button></div>
                           </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 p-1 mb-2">
                        <div className="p-1 w3-purple rounded section w3-card-4">
                            <header>
                                <h5 className="w3-text-white">Profile</h5>
                            </header>
                            <div className="w3-center">
                               <h6 className="w3-text-light-grey" style={{textTransform:"capitalize"}}>Your profile Is Very Important you Can Check some Of your Details and Make Changes To It and also ask some important questions regarding Your Profile </h6>
                            </div>
                            <div className="action_btn bg-dark p-2 d-flex justify-content-between">
                               <div><button className="btn w3-border w3-border-purple w3-text-purple">View Profile</button></div>
                               <div>  <button className="btn w3-border w3-border-purple w3-text-purple">Get Help</button></div>
                           </div>
                        </div>
                    </div>
                </div>
              </div>
           </main>
           <section>
               <header>
                   <h4 className="w3-text-grey">Other Navigation</h4>
                   <div>
                       <ul className="w3-text-purple other_nav_list" style={{listStyle:"none"}}>
                           <li className="w3-border w3-border-purple p-2 rounded mb-3">Download</li>
                           <li className="w3-border w3-border-purple p-2 rounded mb-3">Send Reports</li>
                       </ul>
                   </div>
               </header>
           </section>
        </div>
    )
}