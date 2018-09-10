import React from 'react';

function List(props){
    let team = props.arr.map((e,i,a)=>{
        return <div key={i}>{e}</div>
    })
    
    return(
        <div>{team}</div>
    )
}


export default List;