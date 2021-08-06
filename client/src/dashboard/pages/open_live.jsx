import { useState,useEffect } from 'react';

const OpenLive = () => {
    return ( 
      <div>
          <h3 className="w3-text-purple" style={{paddingLeft:"2%"}} >Create Live Account</h3>
            <div className="open_demo_form p-2 pt-5 pb-5 w3-card">
            <h4 className="w3-text-purple w3-center">Add Live Account Information</h4>
              <form className="demo_form">
                  <select name="" id="" className="w3-text-purple">
                      <option value="Select">Select Account Type</option>
                      <option value="Option 1" key="">Option 1</option>
                      <option value="Option 2" key="">Option 2</option>
                      <option value="Option 3" key="">Option 3</option>
                  </select><br /><br />
                  <select name="" id="" className="w3-text-purple" >
                      <option value="Select">Select Currency</option>
                      <option value="Option 2" key="">USD</option>
                      <option value="Option 3" key="">NGN</option>
                  </select><br /><br />
                  <button className="demo_submit w3-border w3-border-purple w3-text-purple" type="submit">Next</button>
              </form>
        </div>
      </div>
     );
}
 
export default OpenLive;