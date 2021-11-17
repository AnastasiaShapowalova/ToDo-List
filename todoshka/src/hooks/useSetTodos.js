import { useState } from "react";

const useSetTodos = (input) => {
  const [todos, setTodos] = useState([]);

	const setArr = () => {
		setTodos([...todos, input])
	}

	return { todos, setArr }
}

export default useSetTodos