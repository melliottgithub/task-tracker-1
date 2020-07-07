import React from "react";
import { connect } from "react-redux";
import SavedItem from "../SavedItem/SavedItem";

import './SavedList.css'

const SavedList = ({ saved }) => {
  return (
    <div>
      {saved.length === 0 ? (
        <div>Not items saved</div>
      ) : (
        <div className='saved__items'>
          {saved.map((saveItem) => (
              <SavedItem key={saveItem.id} saveItem={saveItem}/>
          ))}
        </div>
      )}
    </div>
  );
};

const getSavedFromStore = (state) => {
  return {
    saved: state.savedList.saved,
  };
};

export default connect(getSavedFromStore)(SavedList);
