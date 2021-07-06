import React from "react";
import Header from "./header";
import Note from "./note";
import Footer from "./footer";
import notes from "../notes"

function App() {
  return (
    <div>
      <Header />
      <div className="py-5 container">
      <div className="row row-cols-xs-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-2 g-lg-3">
        {notes.map(item => <Note key={item.key} title={item.title} content={item.content}/>)}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
