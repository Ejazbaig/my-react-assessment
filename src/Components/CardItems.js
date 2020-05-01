import React from "react";

function CardItems(props) {
  const { episode } = props;
  return (
    <div className="itemContainer">
      <div id={episode.id}>
        <h5>{episode.name}</h5>
        <p>Id: {episode.id}</p>
        <p>Date: {episode.air_date}</p>
      </div>
    </div>
  );
}

export default CardItems;
