export const ContactInfo = () => {
    return (
                <>
        <div  data-testid="container" className="card-body">
            <div className="contact-info">
                <div className="h6">Address</div>
                <div className="address">
                    <i className="fa fa-home"></i>
                    <p>
                        Managua, Nicaragua
                    </p>
                </div>
            </div> 
            <div className="contact-info">
                <div className="h6">Phone</div>
                <div className="phone">
                    <i className="fa fa-phone"></i>
                    <p>
                        (+505) 8994-7284 <br />
                        (+505) 5702-7059
                    </p>
                </div>
            </div> 
            <div className="contact-info">
                <div className="h6">Email</div>
                <div className="email">
                    <i className="fa fa-envelope"></i>
                    <p data-testid="email">
                        ftinococ.45@gmail.com <br /> 
                    </p>
                </div>
            </div>  
            </div>  
        </>

    )
}
