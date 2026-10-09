import React from 'react'

const FirtstComp = (props) => {
    const { name1, age1, gender1, salary1 } = props.fcData
    console.log('aaaaaa   ' + props.fcData)
    return (
        <div>
            <h3>First Component Starts Here</h3>
            <h3> {name1}</h3>
            <h3> {age1}</h3>
            <h3> {gender1}</h3>
            <h3> {salary1} </h3>
            <h3>First Component ends Here</h3>
            <hr style={{ backgroundColor: '#ccc', height: '2px', border: 'none' }} />
            <br/>
        </div>
    )
}

export default FirtstComp
