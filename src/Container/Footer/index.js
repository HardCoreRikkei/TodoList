import React, { useCallback } from "react";
import { connect } from "react-redux";

import './styles.css';

const Footer = ({filter,filterTodo}) => {
    const onClick = useCallback((e) => {
        filter(e.target.id);
    },[filter])

    return (
        <div className="groupbtn">
        <button id={"SHOW_ALL"} className={filterTodo === "SHOW_ALL" ? "active" : " none"}  onClick={onClick}>All</button>
        <button id={"SHOW_ACTIVE"} className={filterTodo === "SHOW_ACTIVE"  ? "active" : " none"}  onClick={onClick}>Active</button>
        <button id={"SHOW_COMPLETE"} className={filterTodo === "SHOW_COMPLETE"  ? "active" : " none"}  onClick={onClick}>Complete</button>
        </div>
    );
};

const mapStateToProps = (state) => ({
    filterTodo: state.filterTodo
});
const mapDispatchToProps = (dispatch) => {
    return {
        filter: (filter) => dispatch({
            type: "FILTER_TODO",
            filter
        })
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
