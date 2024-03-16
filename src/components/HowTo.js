import "../styles/FeatureStyle.css"
import howto1 from "../materials/howto.jpeg"
import howto2 from "../materials/howto2.jpeg"
import howto3 from "../materials/howto3.png"
import howto4 from "../materials/howto4.jpeg"
function HowTo() {
  return (
    <div className="MainFeaturesClass">
      <div className="TextImageContainer">
        <div className="FeatureClass">
          <div className="FeatureTextLeft">
            <h4>SHOWCASE THE FEATURES</h4>
            <h1>Show people the functionalities of your product</h1>
            <p>With simple yet modern design, users will get to know what are you offering them</p>
          </div>
          <div className="FeatureImageRight">
            <img src={howto1} alt="" />
          </div>
        </div>
        <div className="FeatureClass">
          <div className="FeatureImageLeft">
            <img id="herbalimage" src={howto2} alt="" />
          </div>
          <div className="FeatureTextRight">
            <h4>SHOWCASE THE FEATURES</h4>
            <h1>Show people the functionalities of your product</h1>
            <p>With simple yet modern design, users will get to know what are you offering them</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HowTo;
