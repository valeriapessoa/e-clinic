import React from "react";
import styles from "./TertiaryTitle.module.css";

interface TertiaryTitleProps {
  primary?: string;
  secondary?: string;
}

const TertiaryTitle: React.FC<TertiaryTitleProps> = ({
  primary,
  secondary,
}) => {
  return (
    <div className="section-title text-center mb-5">
      <h4 className={`${styles.primaryTitle} pe-3 mb-0`}>{primary}</h4>
      <h1 className={`${styles.secondaryTitle} mb-4`}>{secondary}</h1>
    </div>
  );
};

export default TertiaryTitle;
