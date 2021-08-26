import React from "react";

function Note(props) {
  return (
    <div className="col">
      <div className="card text-white bg-dark border-lt">
        <div className="card-body">
         <div className="d-flex justify-content-between align-items-baseline pb-2">
         <h5 className="card-title m-0 ">{props.title}</h5>
          <button
            onClick={() => {
              props.deleteNotes(props.id);
            }}
            className="btn btn-sm btn-main"
          >
           ✖
          </button>
         </div>
          <p className="card-text">{props.content}</p>
          
        </div>
      </div>
    </div>
  );
}

export default Note;
