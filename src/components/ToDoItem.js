import React from 'react';




function ToDoItem( props ){

	const {value,id} = props;

	let callback = () => props.deleteTask(id)

	return (
		
		<div className="">{value} <i onClick={callback} class="trash icon"></i></div>
		
		)
}


export default ToDoItem;