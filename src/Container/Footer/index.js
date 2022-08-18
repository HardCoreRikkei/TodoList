import React from "react";
import Link from "../../Components/Link";
import './styles.css';

const Footer = () => {
  return (
    <div className="groupbtn">
      <Link filter={"SHOW_ALL"}>All</Link>
      <Link filter={"SHOW_ACTIVE"}>Active</Link>
      <Link filter={"SHOW_COMPLETE"}>Complete</Link>
    </div>
  );
};

export default Footer;
