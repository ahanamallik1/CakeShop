import React from "react";
import ImageCarousel from "../ImageCarousel/ImageCarousel";
import "./Bakery.scss";
import ExploreBakedGoods from "../ExploreBakedGoods/ExploreBakedGoods";

// Landing page component displaying the image carousel and a section to explore baked goods.
const Bakery: React.FC = () => {
  return (
    <div>
      <div className="image-container">
        <ImageCarousel />
      </div>
      <div>
        <ExploreBakedGoods />
      </div>
    </div>
  );
};

export default Bakery;
