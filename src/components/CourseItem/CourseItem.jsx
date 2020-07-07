import React from "react";

import { connect } from "react-redux";
import { addSavedItem, removeSavedItem } from "../../Actions/actions";

import "./CourseItem.css";

const CourseItem = ({ course, addSavedItem, saved, removeSavedItem }) => {
  return (
    <div className="course">
      <div className="img__container">
        <img
          className="course__img"
          src={course.courseImage}
          alt={course.title}
        />
      </div>

      <span className="course__author m-left bold">{course.title}</span>
      <span className="course__author m-left">By: {course.author}</span>
      <div className="course__price">
        <span className="price__number">{course.price}</span>
        <span>$</span>
      </div>

      <span className={course.isHot ? "course__status" : ""}>
        {course.isHot ? "Hot" : null}
      </span>
      <span
        onClick={
          saved.includes(course)
            ? () => removeSavedItem(course.id)
            : () => addSavedItem(course)
        }
        className="add"
      >
        {saved.includes(course) ? "Remove" : "Add"}
      </span>
    </div>
  );
};

const getSavedFromStore = (state) => {
  return {
    saved: state.savedList.saved,
  };
};

export default connect(getSavedFromStore, { removeSavedItem, addSavedItem })(
  CourseItem
);
