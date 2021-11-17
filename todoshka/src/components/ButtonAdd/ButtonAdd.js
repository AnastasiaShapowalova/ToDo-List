import React from "react";
import { AiOutlinePlus } from 'react-icons/ai'

const ButtonAdd = ( props ) => {
const { setArr } = props

	return (
			<button 
				className='btn-sumbit'
				onClick={ setArr }
			>
				<AiOutlinePlus />
			</button>
	)
}

export default ButtonAdd