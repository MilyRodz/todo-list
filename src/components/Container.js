import React, { Fragment, useState } from 'react';
import TaskList from './TaskList';
import TodoForm from './TodoForm'


const Container = () => {

    const [task, setTask] = useState({
        newItem: "",      
        list: []
    });


    const updateInput = (key, value) => {         
        setTask({
            ...task,
            [key]: value            
        });
    }

    const deleteTask = label => {
        const updateList = task.list.filter(value => value.label !== label ); 
        setTask({
            ...task,
            list: updateList
        }); 
    }

    const addItem = () => {      

        const list = [...task.list];
        
        if(task.newItem.trim() !== ''){

            const newItem = {
              label: task.newItem,                                                                                        
            } 
            list.push(newItem);  
             
            setTask({
                list,
                newItem: ""
            }); 
        }
    } 

    const handleEnter = (e) => {

        if(e.which === 13){
           console.log("key pressed enter");
           addItem();
        }else{
            console.log("writing");
        }
    }

    // const title = task.list.length === 0 ? ' ' : 'Add new tasks';
 
    return( 
        <Fragment>
            <div className=" container center-content">
                <div className="">  
                    <h1 className="todos-h1" >todos</h1>
                    {/* <h4 className="conditional-message">{title}</h4> */}
                    <TodoForm 
                        newItem={task.newItem}
                        handleEnter={handleEnter} 
                        updateInput={updateInput}  
                    />
                </div>
                <div className=""> 
                    <TaskList 
                        list={task.list} 
                        deleteTask={deleteTask}
                    />
                </div>
                    <div className="paper list-group-item text-left p-3 items-left">                        
                            {task.list.length}
                            {task.list.length === 1 ? " Item left" : " Items left"}                                  
                    </div>
            </div>
        </Fragment>
    );
}

export default Container;