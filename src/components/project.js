import React from "react";
import PropTypes from "prop-types";

const Project = ({ children }) => (
  <div
    class="flex-container"
    style={{
      display: "flex",
      flexDirection: "row"
    }}
  >
    <div style={{ flexBasis: "40rem", flexGrow: 1 }} />
    {children}
    <div
      style={{
        flexBasis: "30rem",
        flexGrow: 2,
        paddingLeft: "30px"
      }}
    />
  </div>
);

Project.propTypes = {
  children: PropTypes.node.isRequired
};

export default Project;
