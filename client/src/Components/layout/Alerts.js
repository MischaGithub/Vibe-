import React, { useContext } from "react";
import AlertContext from "../../context/alerts/alertContext";

const Alerts = () => {
  // alert Context
  const alertContext = useContext(AlertContext);
  return (
    // Check to see if there are any alerts in the array
    alertContext.alerts.length > 0 &&
    alertContext.alerts.map((alert) => (
      <div key={alert.id} className={`alert alert-${alert.type}`}>
        <i className="fa fa-exclamation-circle" /> {alert.msg}
      </div>
    ))
  );
};

export default Alerts;
