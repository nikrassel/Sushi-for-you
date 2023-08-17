import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = () => (
  <ContentLoader
    className="dish-block"
    speed={3}
    width={280}
    height={370}
    viewBox="0 0 280 370"
    backgroundColor="#f3f3f3"
    foregroundColor="#b8b8b8"
  >
    <rect x="168" y="65" rx="0" ry="0" width="2" height="2" />
    <rect x="1" y="205" rx="10" ry="10" width="260" height="28" />
    <rect x="1" y="258" rx="0" ry="0" width="105" height="27" />
    <rect x="120" y="250" rx="20" ry="20" width="147" height="44" />
    <rect x="1" y="1" rx="0" ry="0" width="260" height="162" />
    <rect x="1" y="170" rx="0" ry="0" width="260" height="25" />
  </ContentLoader>
);

export default Skeleton;
