import React from "react";

function Toast() {
  return (
    <div>
      <div
        className="toast"
        role="alert"
        aria-live="assertive"
        aria-atomic="true"
      >
        <div className="toast-header">
          <img
            src="https://images.unsplash.com/photo-1533047218705-9d453c0e39fb?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjE2NjkwNn0"
            className="rounded mr-2"
            alt="..."
          />
          <strong className="mr-auto">Bootstrap</strong>
          <small className="text-muted">11 mins ago</small>
          <button
            type="button"
            className="ml-2 mb-1 close"
            data-dismiss="toast"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div className="toast-body">Hello, world! This is a toast message.</div>
      </div>
    </div>
  );
}

export default Toast;
