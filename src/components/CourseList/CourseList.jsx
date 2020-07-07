import React, { Fragment } from "react";
import { connect } from "react-redux";
import CourseItem from "../CourseItem/CourseItem";
import "./CourseList.css";
import CourseForm from "../CourseForm/CourseForm";

const CourseList = ({ courses, inputSearch }) => {
  const filtered = courses.filter((course) =>
    course.title.toLowerCase().includes(inputSearch.toLowerCase())
  );
  return (
    <Fragment>
      <CourseForm />
      <div className="courses">
        {filtered.length === 0
          ? "not items found"
          : filtered.map((course) => (
              <CourseItem key={course.id} course={course} />
            ))}
      </div>
    </Fragment>
  );
};

const getCoursesFromStore = (state) => {
  console.log(state);
  

  return {
    courses: state.coursesList.courses,
    inputSearch: state.coursesList.inputSearch,
  };
};

export default connect(getCoursesFromStore)(CourseList);
