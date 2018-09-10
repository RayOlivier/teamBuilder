import React from 'react';
import Remove from './Remove';

function List(props){
    
    
    let team = props.arr.map((e,i,a)=>{
        return <div 
        className="listItem"
        key={i}>
        {e}<button className="removeButton"
        onClick={()=>{props.remove(i)}}>Remove</button>
        </div>
    })

    
    
    return(
        
        <div className="fullList">
        {team}
        </div>
    )
}


export default List;