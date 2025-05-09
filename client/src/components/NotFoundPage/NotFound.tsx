import React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <main>
      <section style={{ textAlign: "center", padding: "4rem 1rem" }}>
        <header>
          <h1>404 - Page Not Found</h1>
        </header>
        <p>The page you’re looking for doesn’t exist or has been moved.</p>
        <nav>
          <Link to="/">Return to Homepage</Link>
        </nav>
      </section>
    </main>
  );
};

export default NotFound;
