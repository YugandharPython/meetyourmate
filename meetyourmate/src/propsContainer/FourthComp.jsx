import React from 'react'

const FourthComp = (props) => {
    const{name4,age4,gender4,salary4}=props.frthcData
    console.log('ddddd   ' + props.frthcData)
    return (
        <div>
            <h3>Fourth Component Starts Here</h3>
            <h3> {name4}</h3>
            <h3> {age4}</h3>
            <h3> {gender4}</h3>
            <h3> {salary4} </h3>
            <h3>Fourth Component ends Here</h3>
            <hr style={{ backgroundColor: '#ccc', height: '2px', border: 'none' }} />
            <br /><br/>
        </div>
    )
}

export default FourthComp
