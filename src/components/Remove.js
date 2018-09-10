import React from 'react';

function Remove(props){
    return(
        
            <button className="removeButton"
                onClick={props.remove}
            >Remove</button>
        
    )
}

export default Remove;