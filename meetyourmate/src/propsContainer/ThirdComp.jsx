import React from 'react'

const ThirdComp = (props) => {
    const{name3,age3,gender3,salary3}=props.tcData
    console.log('ccccc   ' + props.tcData)
    return (
        <div>
            <h3>Third Component Starts Here</h3>
            <h3> {name3}</h3>
            <h3> {age3}</h3>
            <h3> {gender3}</h3>
            <h3> {salary3} </h3>
            <h3>Third Component ends Here</h3>
            <hr style={{ backgroundColor: '#ccc', height: '2px', border: 'none' }} />
            <br /><br/>
        </div>
    )
}

export default ThirdComp
