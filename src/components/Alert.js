import React from "react";

function Alert(props) {
  return (
    <div>
      {props.alert && (
        <div
          className={`alert alert-${props.alert.type} alert-dismissible fade show`}
          role="alert"
        >
          <strong>{props.alert.msg}</strong>
          {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> <=> this is for cross button <=>*/}
        </div>
      )}
    </div>
  );
}

export default Alert;
