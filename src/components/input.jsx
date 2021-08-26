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

  const [isClicked, updateClicked] = useState(false);

  function clickUpdate(){
      updateClicked(prevalue =>{
          return prevalue = true;
      })
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
                style={{display: isClicked === true ? '' : 'none'}}
              />
            </div>
            <div className="px-3">
              <textarea
                onChange={detectState}
                onClick={clickUpdate}
                className="form-control"
                name="content"
                placeholder="Enter Text"
                rows={isClicked === true ? '3' : '1'}
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
                style={{display: isClicked === true ? '' : 'none'}}
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
