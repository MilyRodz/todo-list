import React, { Fragment } from 'react';
import Card from 'react-bootstrap/Card';

const TodoForm = ({newItem, updateInput, handleEnter}) => {
    
    return (
        <Fragment>
        {/* <Card style={{ width: '100%' }}> */}
            <ul className="list-group list-group-flush border task-area">  
                {newItem.length === ' ' ? <p className="alerta-error">This field is mandatory</p>
                : null }
                <input 
                    className="list-group-item task-list-padding" 
                    type="text" 
                    placeholder="What needs to be done?" 
                    value={newItem} 
                    onChange={(e) => updateInput("newItem", e.target.value)} 
                    onKeyPress={(e) => handleEnter(e)} 
                /> 
            </ul>
        {/* </Card> */}
        </Fragment>
    );
}

export default TodoForm;