export default function Transactions (){
    return(
        <div className="p-3">
            <section>
                 <div className="all_trans">
                   <header>
                       <h4 className="w3-text-purple">All Transactions</h4>
                   </header>
                   <main className="p-3 myround w3-card-4">
                   <div><h4 className="w3-center w3-text-grey">No Pending Transactions</h4></div>
                   </main>
                 </div>
                 <div className="pen_trans">
                 <header>
                       <h4 className="w3-text-purple">Pending Withdrawals</h4>
                   </header>
                   <main className="p-3 myround w3-card-4">
                      <div><h4 className="w3-center w3-text-grey">No Pending WithDrawals</h4></div>
                  </main>
                 </div>
                 <div className="all_with">
                 <header>
                       <h4 className="w3-text-purple">Withdrawals</h4>
                   </header>
                   <main className="p-3 myround w3-card-4">
                   <div><h4 className="w3-center w3-text-grey">Your Withdrawals will Appear Here</h4></div>
                   </main>
                 </div>
            </section>
        
        </div>

    )
}