import React from 'react';

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark" style={{ backgroundColor: '#000000' }}>
                <a className="navbar-brand" href="#" style={{ color: '#a8b3ff', marginLeft: '15px' }}>codebygarv</a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-toggle="collapse"
                    data-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                    style={{
                        borderColor: '#a8b3ff',
                        marginRight: '10px'
                    }}
                >
                    <span className="navbar-toggler-icon" ></span>
                </button>
                {/* <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a 
                            className="nav-item nav-link active" 
                            href="#" 
                            style={{ color: '#FEDF9E' }}
                        >
                            Home <span className="sr-only">(current)</span>
                        </a>
                        <a 
                            className="nav-item nav-link" 
                            href="#" 
                            style={{ color: '#FEDF9E' }}
                        >
                            Features
                        </a>
                        <a 
                            className="nav-item nav-link" 
                            href="#" 
                            style={{ color: '#FEDF9E' }}
                        >
                            Pricing
                        </a>
                        <a 
                            className="nav-item nav-link disabled" 
                            href="#" 
                            style={{ color: '#757575' }}
                        >
                            Disabled
                        </a>
                    </div>
                </div> */}
            </nav>
        </div>
    );
}

export default Navbar;
