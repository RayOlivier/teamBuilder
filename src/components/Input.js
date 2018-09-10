import React from 'react';

function Input(props){
    return(
        <div>
            <input
                value={props.input}
                placeholder={`Add player to ${props.teamName}...`}
                onChange={(e)=>props.add(e.target.value)}/>
        </div>
    )
}


export default Input;