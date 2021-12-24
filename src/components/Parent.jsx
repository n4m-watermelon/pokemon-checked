import React,{useState} from 'react';
import Child from './Child'
function Parent() {
    let [num,setNum] = useState(6);
    const handlePlusNumber = ()=> setNum(num+=1)
    console.log(num)
    return (
        <div>
              <Child number={num}/>
              <button onClick={() => handlePlusNumber()}>Clicked</button>
        </div>
    );
}

export default Parent;