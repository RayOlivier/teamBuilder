import React from 'react';

function List(props){
    let team = props.arr.map((e,i,a)=>{
        return <div className="listItem"
        key={i}>{e}</div>
    })
    
    return(
        <div className="fullList">{team}</div>
    )
}


export default List;