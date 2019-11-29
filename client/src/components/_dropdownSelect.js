import React from 'react';

export default function DropdownSelect(props) {
	const { options, optionKey } = props

	const dropdown = options.map( option => {
		if (typeof option === 'string') {
			return (
				<option value = {option} key = {option}>{option}</option>
			)
		}
		return (
			<option value = {option[optionKey]} key = {option[optionKey]}>
				{Object.values(option).join(' ')}
			</option>
		)
	})
	
	return(
		<select onChange={props.onChange} >
			<option value= "all" > -- ALL --</option>
			{dropdown}
		</select>
	)
}

