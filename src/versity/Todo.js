import React from 'react';


function Todo({filterItem,catItem}) {
  return (
    <>
    {
      catItem.map((currElm)=>{
        return(
          <button className="btn btn-secondary" onClick={()=>filterItem(currElm)}>{currElm}</button>
        )
      })
    }
   
  
      
    </>
  );
}

export default Todo;
