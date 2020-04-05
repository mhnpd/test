import React from "react";
import PropTypes from "prop-types";

export const Triangle = props => (
  <div className="react-spinner-loader-svg">
    <svg 
    className={props.svgClass}
      id="triangle"
      width={props.width}
      height={props.height}
      viewBox="-3 -4 39 39"
      aria-label={props.label}
    >
      <polygon fill="transparent" stroke={props.color} strokeWidth="1" points="16,0 32,32 0,32" />
    </svg>
  </div>
);

Triangle.propTypes = {
  svgClass: PropTypes.string,
  height: PropTypes.number,
  width: PropTypes.number,
  color: PropTypes.string,
  label: PropTypes.string
};

Triangle.defaultProps = {
  svgClass: "svg-loader-lement",
  height: 80,
  width: 80,
  color: "green",
  label: "audio-loading"
};
