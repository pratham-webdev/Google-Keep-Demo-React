import React from 'react';

function Note() {
  return (
    <div className="card text-white bg-dark mb-3 border-lt" style={{ maxWidth : "18rem" }}>
      <div className="card-body">
        <h5 className="card-title">Dark card title</h5>
        <p className="card-text">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
      </div>
    </div>
  );
}

export default Note;
