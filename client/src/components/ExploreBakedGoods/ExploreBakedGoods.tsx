import React from "react";
import "./ExploreBakedGoods.scss";
import Button from "../Button/Button";
import { useNavigate } from "react-router-dom";

// Component displaying a banner with a button to view all baked goods recipes.
const ExploreBakedGoods: React.FC = () => {
  const navigate = useNavigate();
  const navigateToProducts = () => {
    navigate("/products");
  };

  return (
    <section className="bakery-banner">
      <div className="bakery-content">
        <header>
          <h2>What Are You Craving</h2>
        </header>
        <h1>The Taste Of Home-Baked Goodness To Enrich Every Moment.</h1>
        {/* Reusable Button Component to navigate to all products */}
        <Button
          label="VIEW ALL RECIPES"
          onClick={navigateToProducts}
          variant="primary"
          size="lg"
        />
      </div>
      <figure className="bakery-image">
        <img src="/assets/images/waffle.png" alt="Delicious Waffle" />
        <figcaption>Delicious Waffle</figcaption>
      </figure>
    </section>
  );
};

export default ExploreBakedGoods;
