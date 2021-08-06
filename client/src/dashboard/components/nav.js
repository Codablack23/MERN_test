const Nav = () => {
return ( 
    <div>
        <div className="sticky-top">
            <div className="navigation d-flex w3-text-grey w3-card p-2 pt-3 justify-content-between">
                <div className="dash d-flex">
                    <span className="w3-text-purple w3-border w3-border-purple btn w3-hide-medium w3-hide-large" id="show_nav" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
                    <i className="bi bi-list"></i>
                    </span>
                    <p className="pl-4" style={{marginLeft:"1%"}}>DASHBOARD</p>
                </div>
                <div className="links ">
                    <a className="logout_link" href="#"><button type="button" className="btn w3-border w3-border-purple w3-text-purple w3-hover-purple">Log Out</button></a>
                </div>
            </div>
        </div>
    </div>
 );
}
 
export default Nav;