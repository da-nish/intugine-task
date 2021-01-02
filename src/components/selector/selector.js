import React from 'react';
import {} from './selector.css';

function Selector(props) {
    return(

    <React.Fragment>
        <div className="btngroup">
        {
            props.selectlist.map( el => (
                //status code buttons
                <button 
                className={props.selectedcode === el.code?'codebtn selcodebtn':'codebtn' } key={el.code} onClick={ () => props.clicked(el.code)}>
                    <p>{el.code}</p> 
                    <h3>{el.count}</h3>
                </button>
            ))
        }
        </div>
    </React.Fragment>
    )
}

export default Selector;