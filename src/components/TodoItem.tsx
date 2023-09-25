import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
	removeTodo: (id: number) => void;
	toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
	const {id, title, complete, toggleTodo, removeTodo} = props;

	return <div className='item'>
		<div className="item_subcont">
			<input id={`checkbox_${id}`} type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
			<label htmlFor={`checkbox_${id}`} className={`title ${complete ? 'completed' : ''}`}>{title}</label>
		</div>
		<button className="remove_button" onClick={() => removeTodo(id)}></button>
	</div>
}

export default TodoItem;