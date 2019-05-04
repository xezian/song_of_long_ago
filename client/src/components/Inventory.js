import React, { useState } from "react";

const Inventory = props => {
  const [open, setOpen] = useState(false);
  function handleInv(e) {
    setOpen(!open);
  }
  return (
    <div className="inventory">
      {open && <div>inventory</div>}
      <button onClick={handleInv}>Inventory</button>
    </div>
  );
};

export default Inventory;
