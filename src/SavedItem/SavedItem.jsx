import React from "react";
import { connect } from "react-redux";
import { removeSavedItem } from "../Actions/actions";

import "./SavedItem.css";

const SavedItem = ({ saveItem, removeSavedItem }) => {
  return (
    <div className="saved__item">
      <div className="saved__img--container">
        <img src={saveItem.courseImage} alt="img" className="saved__img" />
      </div>
      <h3 className="saved__title">{saveItem.title}</h3>
      <p className="saved__author">{saveItem.author}</p>
      <div className="saved__price">
        <span className="saved__number">{saveItem.price}</span>
        <span>$</span>
      </div>
      <span className={saveItem.isHot ? "saved__status" : ""}>
        {saveItem.isHot && "Hot"}
      </span>
      <span
        onClick={() => removeSavedItem(saveItem.id)}
        className="remove__item"
      >
        Remove
      </span>
    </div>
  );
};

export default connect(null, { removeSavedItem })(SavedItem);
