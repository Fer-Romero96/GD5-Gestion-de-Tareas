import { Button } from '@material-ui/core';
import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';

const CreateTask = ({addTodo}) => {

    const [todo, setTodo] = useState('')

    const handleTodoChange = (event) => {
        let val = event.target.value;
        setTodo(val)
    }

    const handleCreateClick = (event) => {
        addTodo(todo)
        setTodo('')
    }

    return (
        <div>

            <form >
                <TextField id="create-form"  value={todo} label="Task" onChange={handleTodoChange}/>
            </form>
            <br></br>
            <Button variant="contained" color="primary" onClick={handleCreateClick}>Create</Button>
            
        </div>
    )
}

export default CreateTask