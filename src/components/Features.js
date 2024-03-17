import "../styles/FeatureStyle.css"
import featureimg from "../materials/features.png"
import featureimg2 from "../materials/features2.png"
import featureimg3 from "../materials/features3.png"
import sicon1 from "../materials/icon-burger.svg"
import sicon2 from "../materials/icon-silverware.svg"
import sicon3 from "../materials/icon-data.svg"

function Features() {
  return (
    <div id="Features" className="MainFeaturesClass">
      <div className="TextImageContainer">
        <div className="FeatureClass">
          <div className="FeatureTextLeft">
            <h4>SHOWCASE THE FEATURES</h4>
            <h1>Show people the functionalities of your product</h1>
            <p>With simple yet modern design, users will get to know what are you offering them</p>
          </div>
          <div className="FeatureImageRight">
            <img src={featureimg} alt="" />
          </div>
        </div>
        <div className="FeatureClass">
          <div className="FeatureImageLeft">
            <img id="herbalimage" src={featureimg2} alt="" />
          </div>
          <div className="FeatureTextRight">
            <h4>SHOWCASE THE FEATURES</h4>
            <h1>Show people the functionalities of your product</h1>
            <p>With simple yet modern design, users will get to know what are you offering them</p>
          </div>
        </div>
        <div className="FeatureClass">
          <div className="FeatureTextLeft">
            <h4>SHOWCASE THE FEATURES</h4>
            <h1>Show people the functionalities of your product</h1>
            <p>With simple yet modern design, users will get to know what are you offering them</p>
          </div>
          <div className="FeatureImageRight">
            <img src={featureimg3} alt="" />
          </div>
        </div>
      </div>
      <div className="StaticsContainer">
        <div className="StaticClass">
          <img src={sicon1} alt="" />
          <h3>Activity Notifications</h3>
          <p>Small features are important, show important details to customers who needs them in your app</p>
        </div>
        <div className="StaticClass">
          <img src={sicon2} alt="" />
          <h3>Custom Timing</h3>
          <p>Small features are important, show important details to customers who needs them in your app</p>
        </div>
        <div className="StaticClass">
          <img src={sicon3} alt="" />
          <h3>Mobile Optimized</h3>
          <p>Small features are important, show important details to customers who needs them in your app</p>
        </div>
      </div>
      <div className="StaticsContainer">
        <div className="MiniStaticClass">
          <h1>+12h</h1>
          <h3>Statistics</h3>
        </div>
        <div className="MiniStaticClass">
          <h1>84</h1>
          <h3>Statistics</h3>
        </div>
        <div className="MiniStaticClass">
          <h1>3,07</h1>
          <h3>Statistics</h3>
        </div>
        <div className="MiniStaticClass">
          <h1>24h</h1>
          <h3>Statistics</h3>
        </div>
      </div>
    </div>
  );
}

export default Features;
