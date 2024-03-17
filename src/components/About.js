import "../styles/AboutStyle.css"
import AboutImage from "../materials/about.png"
function About() {
  return (
    <div id="About" className="AboutMainClass">
      <div className="AboutClass">
        <div className="AboutTextClass">
          <h3>Be Classy</h3>
          <h1>This Landing Page Will Showcase Your App <br /> In A Classy Way.</h1>
        </div>
        <div className="AboutImageClass">
          <img src={AboutImage} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
