import React,{useEffect} from 'react';
const Child = ({ number })=>{
    useEffect(()=>{
        console.log("component child mounted")
    })
    return (
        <div>
            <h1> My number {number}</h1>
        </div>
    );
}
  function areEqual(prevProps, nextProps) {
    return true;
  }
  export default React.memo(Child, areEqual);
