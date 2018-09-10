import React from 'react';
import Remove from './Remove';

function List(props){
    
    function removePlayer(i){
        team.splice(i,1);
    }

    let team = props.arr.map((e,i,a)=>{
        return <div 
        className="listItem"
        key={i}>
        {e}<Remove name={e} remove={removePlayer} />
        </div>
    })

    
    
    return(
        <div className="fullList">{team}</div>
    )
}


export default List;