import React from 'react';

export default function DropdownSelect({ options, onChange }) { 
	const dropdown = options.map(option => {
		return (
			<option value={option.value} key={option.value}>
				{option.text}
			</option>
		)
	})
	
	return(
		<select onChange={onChange} >
			<option value="all" > -- ALL --</option>
			{dropdown}
		</select>
	)
}


