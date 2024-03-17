import "../styles/HeaderStyle.css"
import { Link } from 'react-scroll'
import HeaderImage from "../materials/header.png"
function Header() {
    return (
        <div className="HeaderMain">
            <div className="NavClass">
                <div className="NavLogoClass">
                    <h1>Taha</h1>
                </div>
                <div className="NavBarClass">
                    <div className="NavButtons">
                        <Link to="About" smooth={true} duration={700}>
                            About
                        </Link>
                        <Link to="Features" smooth={true} duration={1000}>
                            Features
                        </Link>
                        <Link to="HowToUse" smooth={true} duration={2000}>
                            How To Use
                        </Link>
                        <Link to="Download" smooth={true} duration={2500}>
                            Download
                        </Link>
                    </div>
                </div>
            </div>
            <div className="HeaderContent">
                <div className="HeaderTextClass">
                    <h1>ClassApp</h1>
                    <h3>Launch your product with a class</h3>
                    <button>Get The App</button>
                </div>
                <div className="HeaderLogoClass">
                    <img src={HeaderImage} alt="" />
                </div>
            </div>
        </div>
    );
}

export default Header;
