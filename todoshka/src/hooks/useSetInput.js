import { useState } from "react";

const useSetInput = (e) => {
  const [input, setInput] = useState("")

	const resetInputValue = (e) => {
		setInput(e.currentTarget.value)
	}

	return {input, resetInputValue}
}

export default useSetInput