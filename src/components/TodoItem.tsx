import { ITodo } from "../types/data";

interface ITodoItem extends ITodo {
	removeTodo: (id: number) => void;
	toggleTodo: (id: number) => void;
}

const TodoItem: React.FC<ITodoItem> = (props) => {
	const {id, title, complete, toggleTodo, removeTodo} = props;

	return <div className='item'>
		<input readOnly type="checkbox" checked={complete} onChange={() => toggleTodo(id)}/>
		<span className={`title ${complete ? 'completed' : ''}`}>{title}</span>
		<button className="remove_button" onClick={() => removeTodo(id)}>x</button>
	</div>
}

export default TodoItem;