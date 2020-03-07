import React from "react";

export const Card = ({
  image,
  description,
  alt,
  source,
  header,
  liveVersion,
  inverse
}) => {
  const imageDiv = (
    <div
      style={{
        flexBasis: "50rem",
        flexGrow: 2,
        paddingRight: "20px"
      }}
    >
      <img src={image} alt={alt} />
    </div>
  );

  const descriptionDiv = (
    <div style={{ flexBasis: "40rem", flexGrow: 1 }}>
      <h3>{header}</h3>
      <p />
      <p>{description}</p>
      <div className="link-container">
        <p>
          <a href={source}>Source Code</a>
        </p>
        {liveVersion && (
          <p>
            <a href={liveVersion}>Live Version</a>
          </p>
        )}
      </div>
    </div>
  );

  return (
    <div
      className="flex-container"
      style={{
        display: "flex",
        flexDirection: "row",
        paddingBottom: "30px"
      }}
    >
      {inverse && [imageDiv, descriptionDiv]}
      {!inverse && [descriptionDiv, imageDiv]}
    </div>
  );
};
