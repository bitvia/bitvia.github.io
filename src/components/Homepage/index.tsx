import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import "./index.css";

const Homepage = () => {
  const { siteConfig } = useDocusaurusContext();

  return (
    <div className="homepage_container">
      <h1>{siteConfig.tagline}</h1>
    </div>
  );
};

export default Homepage;
