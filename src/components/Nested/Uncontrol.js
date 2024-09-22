import React, { useRef } from 'react'

const Uncontrol = () => {
    const refernce = useRef()

    function hanldesubmit(e){
        e.preventDefault()
        console.log(refernce.current.value);
        
    }
  return (
    <form onSubmit={hanldesubmit}>
      <label>Name : </label>
      <input type="text" ref={refernce}/>
      <button type='submit'>submit</button>
    </form>
  )
}

export default Uncontrol