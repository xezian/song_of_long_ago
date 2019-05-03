import React, { useState } from "react";

const Inventory = props => {
  const [open, setOpen] = useState(false);
  function handleInv(e) {
    setOpen(!open);
  }
  return (
    <div className="inventory">
      <button onClick={handleInv}>Inventory</button>
      {open && <div>inventory</div>}
    </div>
  );
};

export default Inventory;
