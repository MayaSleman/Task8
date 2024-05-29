import "./Sservices.css"
import brandingOrange from "./../../assets/images/brandingOrange.png"
import markiting from "./../../assets/images/markiting.png"
import brandingpattren from "./../../assets/images/brandingpattren.png"
import markrtingpattren from "./../../assets/images/markrtingpattren.png"
import brandingx from "./../../assets/images/brandingx.svg"
import marketingx from "./../../assets/images/marketingx.svg"

function Sservices() {
  return (
    <>
      <section className="Services" id="Services">
        <h2 >Our Services</h2>
        <div className="cards">
          <div className="card card1">
            <img src={brandingpattren} alt="brandingpattren" className="pattren" />
            <h3>Branding</h3>
            <p>
              <span className="bold brand">The brand is hope,</span>
              It is also the source of inspiration for everything you do when you
              deal with your customers and that is the important and emotional
              thing. <span className="bold">Your Brand and Visual identity </span>represents an intrinsic Value
              to your company.
            </p>
            <p className="bold provide">In focal X agency, we provide:</p>
            <ul className="provideList">
              <li>Visual identity design.</li>
              <li>Define Brand Identity.</li>
              <li>Define Brand personality.</li>
              <li>Building Your brand strategy.</li>
              <li>Market research and competitors study.</li>
            </ul>
            <p className="bold provide">We walk with you from A to Z.</p>
            <img src={brandingOrange} alt="focalx" className="brandimg" />
            <img src={brandingx} alt="brandingx" className="brandingx" />
          </div>
          <div className="card card2">
            <img src={markrtingpattren} alt="markrtingpattren" className="pattren" />
            <h3>Marketing</h3>
            <p>
              Talk to your customers and tell them  <span className="bold"> you and your company's </span>
              story through us the way you want.
              Let us plan the content that will bring your audience closer to you.
            </p>
            <p className="bold provide">In our marketing agency, we provide:</p>
            <ul className="provideList">
              <li>E-mail marketing.</li>
              <li>Affiliate marketing.</li>
              <li>Influencer marketing.</li>
              <li>Market research and Analysis.</li>
              <li>App store optimization ( ASO ).</li>
              <li>Search engine Marketing ( SEM ).</li>
              <li>Search engine optimization ( SEO ).</li>
              <li>Social media marketing & campaigns.</li>
            </ul>
            <img src={markiting} alt="focalx" className="brandimg" />
            <img src={marketingx} alt="marketingx" className="brandingx" />
          </div>
        </div>
      </section>

    </>
  );
}
export default Sservices