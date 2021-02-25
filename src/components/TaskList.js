import React, { Fragment } from 'react';

const TaskList = ({list, deleteTask}) => {
    return (
        <Fragment>
            <ul className="list-group list-group-flush task-area"> 
             {
                list.map( (item) => {
                    return <li href="/#" className="list-group-item list-group-item-action rounded-0 border text-left" 
                        key={item.label} item={item}>
                        {item.label}
                        <button type="button" className="delete-button text-right"
                            onClick={ () => deleteTask(item.id) }
                            >&times;</button>
                        </li>
                })
             }
            </ul>
           
        </Fragment>
        
    );
}

export default TaskList;