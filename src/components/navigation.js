import React from 'react';

function Navigation({setPage}) {

  return (
    <div className="row Header" id="header">
      <div className=" row navigation" id="navigation">
        <button onClick={()=>setPage("about")}>About</button>
        <button onClick={()=>setPage("portfolio")}>Portfolio</button>
        <button onClick={()=>setPage("contact")}>Contact</button>
        <button onClick={()=>setPage("resume")}>Resume</button>
      </div>
    </div>
  );
}

export default Navigation;