export default function Deposit(){
    return (
        <div className="p-2">
           <header><h3 className="w3-text-purple">Deposit To Your Live Account</h3></header>
           <main>
               <div className="w3-card-4 p-3 deposit_form">
                       <h4 className="w3-center w3-text-grey">Deposit Details</h4>
                       <form action="">
                        <input type="number" className="mb-2 rounded p-2 w3-text-grey" placeholder="Deposit Amount"/><br />
                   
                        <input type="number" className="mb-2 rounded p-2 w3-text-grey" placeholder="Account Credit in USD" readOnly/>
                        <small className="w3-small"><h6 className="w3-text-grey">Note:This is the amount deposited to Your trading account after our  commissions and charges have been deducted</h6></small>
                        <div>
                            <h6 className="w3-text-grey">Deposit Currency:</h6>
                            <select name="" id="" className="mb-2 rounded p-2 w3-text-purple">
                                <option className="bg-dark" value="USD">USD</option>
                                <option className="bg-dark" value="Naira">NGN</option>
                            </select>
                        </div>
                        <div>
                            <h6 className="w3-text-grey" >Select Trading Account:</h6>
                            <select name="" id="" className="mb-2 m-auto rounded p-2 w3-text-purple">
                            <option className="bg-dark" value="" key="">Goodluck</option>
                            </select>
                        </div>
                       <div>
                           <h6 className="w3-text-grey">Choose Payment Method:</h6>
                        <select name="" id="" className="mb-2 m-auto rounded p-2 w3-text-purple">
                                <option className="bg-dark" value="USD">Paystack</option>
                                <option className="bg-dark" value="Naira">PayPal</option>
                                <option className="bg-dark" value="">Flutter</option>
                            </select>
                       </div>



                       </form>
               </div>
           </main>
        </div>
    )
}