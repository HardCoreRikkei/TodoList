import React, { useCallback } from "react";
import Link from "../../Components/Link";
import './styles.css';

const Footer = () => {
    const active = {
        SHOW_ALL: "active",
        SHOW_ACTIVE:"none",
        SHOW_COMPLETE: "none"
    };

    const onclickSwitchActive = useCallback((e) => {
        // console.log(e.currentTarget);
    },[])
  return (
    <div className="groupbtn">
      <Link filter={"SHOW_ALL"} className={active["SHOW_ALL"] } onclickSwitchActive={onclickSwitchActive}>All</Link>
      <Link filter={"SHOW_ACTIVE"} className={active["SHOW_ACTIVE"]} onclickSwitchActive={onclickSwitchActive}>Active</Link>
      <Link filter={"SHOW_COMPLETE"} className={active["SHOW_COMPLETE"]} onclickSwitchActive={onclickSwitchActive}>Complete</Link>
    </div>
  );
};

export default Footer;
