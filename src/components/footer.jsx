import React from "react";

function Footer() {
  const currentDate = new Date();
  return (
    <footer className="w-100 py-3">
      <div className="text-white text-center">Copyright {currentDate.getFullYear()}</div>
    </footer>
  );
}

export default Footer;
