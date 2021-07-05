import React from "react";
import Header from "./header";
import Note from "./note";
import Footer from "./footer";

function App() {
  return (
    <div>
      <Header />
      <div className="py-5 container h-100">
        <Note />
      </div>
      <Footer />
    </div>
  );
}

export default App;
