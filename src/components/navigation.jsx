import "../assets/css/styles.css"

function Navigation() {
  
    return (
      <>
    <section className="navigation-section">
            {/* <!-- Navbar --> */}
            <nav class="navbar navbar-expand-lg fixed-top" id="mainNavbar">
                <div className="container">
                    <a className="navbar-brand" href="#">
                        <img src="./assets/logo/WSO2.jpeg" alt="logo" className="img-fluid"/>
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon fas fa-bars fa-2x"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <a className="nav-link d-flex flex-column text-center" aria-current="page" href="/">
                                    <i className="fas fa-home fa-lg"></i>
                                    <span className="small mt-3">Home</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex flex-column text-center" aria-current="page" href="https://drive.google.com/file/d/16AmJaF0sQommQ4T_MKJZL6wEtn-7RHiu/view?usp=sharing" target="_blank">
                                    <i className="fas fa-book fa-lg"></i>
                                    <span className="small mt-3">Guide Book</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex flex-column text-center" aria-current="page" href="/faq">
                                    <i className="fas fa-question-circle fa-lg"></i>
                                    <span className="small mt-3">Mechanism</span>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link d-flex flex-column text-center" aria-current="page" href="/contact">
                                    <i className="fas fa-user-friends fa-lg"></i>
                                    <span className="small mt-3">Contact</span>
                                </a>
                            </li>
                            {/* <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle d-flex flex-column text-center" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i className="fas fa-th fa-lg"></i>
                                    <span className="mt-3">List of Winners</span>
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <li><a className="dropdown-item" href="">2024</a></li>
                                </ul>
                            </li> */}
                        </ul>
                    </div>
                </div>
            </nav>
        {/* <!-- Navbar --> */}
    </section>
      </>
    )
  }
  
  export default Navigation