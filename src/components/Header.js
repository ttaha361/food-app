import "../styles/HeaderStyle.css"
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
                        <button>About</button>
                        <button>Features</button>
                        <button>How To Use</button>
                        <button>Download</button>
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
