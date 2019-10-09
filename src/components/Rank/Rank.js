import React from "react";

const Rank = ({ name, entries }) => {
  /* jshint ignore:start */
  return (
    <div>
      <div className="white f3">{`${name}, your picture count is..`}</div>
      <div className="white f1">{entries}</div>
    </div>
  );
  /* jshint ignore:end */
};

export default Rank;
