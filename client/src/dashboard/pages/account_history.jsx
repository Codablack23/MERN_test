import { useState,useEffect } from 'react';

const AccountHistory = () => {
    return ( 
      <div>
          <h3 className="w3-text-purple" style={{paddingLeft:"2%"}} >Account History and Details</h3>
          <hr />
         <div className="live-accounts">
            
             <div className="w3-container">
             <h4 className="w3-text-purple live_accounts">Live Accounts</h4>
            <table className="w3-table w3-card w3-center" style={{borderRadius:"10px"}}>
                <thead className="w3-card"  style={{borderRadius:"10px"}}>
                    <tr className="w3-purple w3-card w3-round"  >
                        <th><h6 className="w3-text-white">Account Type</h6></th>
                        <th><h6 className="w3-text-white">Currency</h6></th>
                        <th><h6 className="w3-text-white">Balance</h6></th>
                        <th><h6 className="w3-text-white">Action</h6></th>
                    </tr>
                </thead>
                <tbody className="w3-text-purple">
                    <tr className="w3-text-purple">
                        <td>VIP</td>
                        <td>USD</td>
                        <td>50.00</td>
                        <td><button className="view_acc_btn w3-border w3-border-purple w3-text-purple pl-2 pr-2 pt-1 pb-1 w3-hover-purple">View Details</button></td>
                    </tr>
                </tbody>
            </table>
            </div>
         </div>
         <hr /><br />
         <div className="demo_accounts">
            
            <div className="w3-container">
            <h4 className="w3-text-purple live_accounts">Demo Accounts</h4>
           <table className="w3-table w3-card w3-center" style={{borderRadius:"10px"}}>
               <thead className="w3-card"  style={{borderRadius:"10px"}}>
                   <tr className="w3-purple w3-card w3-round"  >
                       <th><h6 className="w3-text-white">Account Type</h6></th>
                       <th><h6 className="w3-text-white">Currency</h6></th>
                       <th><h6 className="w3-text-white">Balance</h6></th>
                       <th><h6 className="w3-text-white">Action</h6></th>
                   </tr>
               </thead>
               <tbody className="w3-text-purple">
                   <tr className="w3-text-purple">
                       <td>VIP</td>
                       <td>USD</td>
                       <td>50.00</td>
                       <td><button className="view_acc_btn w3-border w3-border-purple w3-text-purple pl-2 pr-2 pt-1 pb-1 w3-hover-purple">View Details</button></td>
                   </tr>
               </tbody>
           </table>
           </div>
        </div>
      </div>
     );
}
 
export default AccountHistory;