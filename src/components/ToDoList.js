import React from 'react'
import ToDoItem  from './ToDoItem'


function ToDoList (props){

	let toDos = props.tasks.map( (task,idx) => {

		return ( 
			<div>
				<ToDoItem value={task} id={idx} deleteTask={props.deleteTask}/>
		 	</div>
		)

	})

	return(
	
	<div> {toDos} </div>

	)
}


export default ToDoList;