import React from "react";
import { connect } from "react-redux";
import { filter } from "../../Actions/TodoList";

const Link = ({ active, children, onClick }) => {
  return (
    <button onClick={onClick} disabled={active} >
      {children}
    </button>
  );
};
const mapStateToProps = (state, ownProps) => ({
  active: ownProps.filter === state.visibilityFilter
});
const mapDispatchToProps = (dispatch, ownProps) => ({
  onClick: () => {
    dispatch(filter(ownProps.filter));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Link);