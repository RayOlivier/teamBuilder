import React from 'react';

function Button(props){
    return(
        <div>
            <button className="button"
                onClick={props.add}
            >Add</button>
        </div>
    )
}

export default Button;