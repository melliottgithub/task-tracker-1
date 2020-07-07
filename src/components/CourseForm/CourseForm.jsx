import React from "react";
import { connect } from "react-redux";
import { searchCourses } from "../../Actions/actions";
import "./CourseForm.css";

const CourseForm = ({ searchCourses, inputSearch }) => {
  return (
    <form className="search__form">
      <input
        value={inputSearch}
        onChange={(event) => searchCourses(event.target.value)}
        type="text"
        className="seach_input"
        placeholder="search course..."
      />
    </form>
  );
};

const getInputSearch = (state) => {
  return {
    inputSearch: state.coursesList.inputSearch,
  };
};

export default connect(getInputSearch, { searchCourses })(CourseForm);
