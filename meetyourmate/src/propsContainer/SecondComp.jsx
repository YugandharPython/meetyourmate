import React from 'react'

const SecondComp = (props) => {
    const{name2,age2,gender2,salary2}=props.scData
    console.log('bbbbbb   ' + props.scData)
  return (
    <div>
      <h3>Second Component Starts Here</h3>
            <h3> {name2}</h3>
            <h3> {age2}</h3>
            <h3> {gender2}</h3>
            <h3> {salary2} </h3>
            <h3>Second Component ends Here</h3>
            <hr style={{ backgroundColor: '#ccc', height: '2px', border: 'none' }} />
            <br/><br/>
    </div>
  )
}

export default SecondComp
