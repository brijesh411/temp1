import React, { useEffect } from 'react';

const Toast = ({ msg, handleShow, bgColor }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      handleShow(); // Call the handleShow function to hide the toast
    }, 5000);

    return () => {
      clearTimeout(timer); // Clear the timer when the component unmounts
    };
  }, [handleShow]);

  return (
    <div
      className={`toast show position-fixed text-light ${bgColor}`}
      style={{ top: '5px', right: '5px', minWidth: '200px', zIndex: 50 }}
    >
      <div className={`toast-header text-light ${bgColor}`}>
        <strong className="mr-auto text-light">{msg.title}</strong>
        <button
          className="ml-2 mb-1 close text-light"
          data-dismiss="toast"
          style={{ outline: 'none' }}
          onClick={handleShow}
        >
          &times;
        </button>
      </div>
      <div className="toast-body">{msg.body}</div>
    </div>
  );
};

export default Toast;
