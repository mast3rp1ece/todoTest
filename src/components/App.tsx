import { useState, useEffect, useRef} from 'react';
import TodoList from './TodoList';
import { ITodo } from '../types/data';
import '../App.css';



const App: React.FC = () => {
	const [value, setValue] = useState('');
	const [todos, setTodos] = useState<ITodo[]>([]);

	const inputRef = useRef<HTMLInputElement>(null);
	
	const handleChange: React.ChangeEventHandler<HTMLInputElement> = (e) => {
		setValue(e.target.value)
	}

	const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (e) => {
		if (e.key === 'Enter') {
			addTodo();
		}
	}

	const addTodo = () => {
		if (value) {
			setTodos([...todos, {
				id: Date.now(),
				title: value,
				complete: false,
			}])
			setValue('')
		}
	}

	const removeTodo = (id: number): void => {
		setTodos(todos.filter(todo => todo.id !== id))
	}

	const toggleTodo = (id: number): void => {
		setTodos(todos.map(todo => {
			if (todo.id !== id) return todo;

			return {
				...todo, 
				complete: !todo.complete,
			}
		}))
	}
	useEffect(() => {
		inputRef.current?.focus();
	})

	return (
		<div className='app_container'>
			<div className='input_container'>
				<input className='add_input' value={value} onChange={handleChange} onKeyDown={handleKeyDown} type="text" ref={inputRef} placeholder='type new todo' />
				<button onClick={addTodo}>Add</button>
			</div>
			<TodoList items={todos} removeTodo={removeTodo} toggleTodo={toggleTodo} />
		</div>
	)
}

export default App;  