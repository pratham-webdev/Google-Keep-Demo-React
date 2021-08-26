import React from "react";
import Note from "./note";

function NotesCollection(props) {
  return (
    <div className="py-5 container">
      <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-3">
        {props.notesArray.map((item, index) => (
          <Note
            key={index}
            id={index}
            title={item.title}
            content={item.content}
            deleteNotes={props.deleteNotes}
          />
        ))}
      </div>
    </div>
  );
}

export default NotesCollection;
