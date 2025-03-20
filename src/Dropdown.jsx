import { useState } from "react";

function Dropdown ({title, content}){



  const [isClosed, setIsClosed] = useState(true);



  return(
    <div>
    <p onClick={() => {
        setIsClosed(!isClosed);
    }}>{title}</p>
    <p className={isClosed ? 'hidden' : ''}>{content}</p>
    </div>
  )
}




export default Dropdown;