import React from 'react'

const Counter = ({result, substract, add, total}) => {
  return (
    <div>
      <button onClick={substract}>-</button>
      <input type="number" value={total}/>
      <button onclick={add}>+</button>
      {result}
    </div>
  )
}

export default Counter
