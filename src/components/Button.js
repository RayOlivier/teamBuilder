import React from 'react';

function Button(props){
    return(
        <div>
            <button className="addButton"
                onClick={props.add}
            >Add</button>
        </div>
    )
}

export default Button;