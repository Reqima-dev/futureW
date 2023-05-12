import React from "react";
import "./section.css";
import img01 from "../../images/image-web-3-desktop.jpg";

const Section = () => {
  return (
    <div className="sectionContainer">
      <div className="left">
        <div className="leftImg">
          <img src={img01} alt="" />
        </div>
        <div className="leftInfo">
          <h1>The Bright Future of Web 3.0?</h1>
          <div>
            <p>
              We dive into the text eolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise ?
            </p>

            <button>Read More</button>
          </div>
        </div>
      </div>
      <div className="right">
        <h1>New</h1>

        <div className="rightItems">
          <div>
            <h4>Hydrogen VS Electric Cars</h4>
            <p>Will hydrogen-fueld cars ever catch up to EVs ?</p>
          </div>
          <div>
            <h4>The Downsides of All Artistry</h4>
            <p>
              What are the possible adverse effect of on demande AI image
              generation ?
            </p>
          </div>
          <div>
            <h4>Is VC Funding Drying Up ?</h4>
            <p>
              Private funding by VC firms is down 50% YOY. We take a look at
              what that means
            </p>
          </div>
          <div>
            <h4>How to download all playlist in YouTube</h4>
            <p>
              YouTube has one of the most used platforms for streaming videos.
              It has more than 2.6 billion active users. Be it a tutorial video
              or a simple music video...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section;
