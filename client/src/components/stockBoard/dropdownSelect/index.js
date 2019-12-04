import React from 'react';

export default function DropdownSelect({ options, onChange }) { 
	return(
		<select onChange={onChange} >
			<option value="all" > -- ALL --</option>
			{
				options.map(option => (
					<option value={option.value} key={option.value}>
						{option.text}
					</option>
				))
			}
		</select>
	)
}


