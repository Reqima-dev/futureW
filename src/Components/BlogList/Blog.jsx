import React from "react";
import "./Blog.css";
import image01 from "../../images/image-retro-pcs.jpg";
import image02 from "../../images/image-top-laptops.jpg";
import image03 from "../../images/image-gaming-growth.jpg";

const Blog = () => {
  return (
    <div className="BlogItems">
      <div className="blogContents">
        <img src={image01} alt="" />
        <div>
          <h1>01</h1>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades ?</p>
        </div>
      </div>
      <div className="blogContents">
        <img src={image02} alt="" />
        <div>
          <h1>02</h1>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades ?</p>
        </div>
      </div>
      <div className="blogContents">
        <img src={image03} alt="" />
        <div>
          <h1>03</h1>
          <h3>Reviving Retro PCs</h3>
          <p>What happens when old PCs are given modern upgrades ?</p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
