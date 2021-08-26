import React, { useState } from "react";
import Header from "./header";
import Input from "./input";
import NotesCollection from "./notes-collection";
import Footer from "./footer";
import notes from "../notes";

function App() {

  const [notesArray, addNotes] = useState(notes);

  function updateNotes(inputItem) {
    addNotes([...notesArray, inputItem]);
  }

  function deleteNotes(id){
    addNotes(prevalue =>{
      return prevalue.filter((el,index) => {
        return index !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <Input updateNotes={updateNotes} />
      <NotesCollection notesArray={notesArray} deleteNotes={deleteNotes} />
      <Footer />
    </div>
  );
}

export default App;
