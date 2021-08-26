import React, { useState } from "react";

function Input(props) {
  const [todo, addTodo] = useState({
    title: "",
    content: "",
  });

  function detectState(event) {
    const { name, value } = event.target;
    addTodo((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className="pt-5 container">
      <div className="row">
        <div className="col-12">
          <div className="border-lt rounded">
            <div className="p-3">
              <input
                onChange={detectState}
                placeholder="Enter Title"
                name="title"
                type="text"
                className="form-control"
                value={todo.title}
              />
            </div>
            <div className="px-3">
              <textarea
                onChange={detectState}
                className="form-control"
                name="content"
                placeholder="Enter Text"
                rows="3"
                value={todo.content}
              ></textarea>
            </div>
            <div className="p-3 text-center">
              <button
                onClick={() => {
                    props.updateNotes(todo);
                  addTodo({
                    title: "",
                    content: "",
                  });
                }}
                className="btn btn-main"
              >
                Enter
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
