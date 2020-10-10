import { Button } from '@material-ui/core'
import React from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
const Index = ({ todos, markDone, deleteTodo }) => {

    const handleMarkDone = (event, index) => {
        markDone(index)
    }

    const handleDeleteTodo = (event, index) => {
        deleteTodo(index)
    }

    return (
        <div>
            <br></br>
            <Table border="1">
                <TableBody>
                    {todos.map((todo, i) => {
                        return (
                            <TableRow key={i} style={{backgroundColor: todo.status === 'pending' ? 'white' : 'grey'}}>
                                <TableCell align="center">#{i+1}</TableCell>
                                <TableCell align="center">{todo.description}</TableCell>
                                <TableCell align="center">
                                    {todo.status === 'pending' && (
                                        
                                        <Button variant="contained" color="primary" onClick={(e) => handleMarkDone(e, i)}>Done</Button>
                                       
                                    )}
                                    <Button variant="contained" color="secondary" onClick={(e) => handleDeleteTodo(e, i)}>Delete</Button>
                                </TableCell>
                            </TableRow>
                        )
                    })}
                </TableBody>
            </Table>
        </div>
    )
}

export default Index