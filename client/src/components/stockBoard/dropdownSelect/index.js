import React from 'react';
import PropTypes from 'prop-types'

const DropdownSelect = ({ options, onChange }) => (
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

DropdownSelect.propTypes = {
	options: PropTypes.array.isRequired,
	onChange: PropTypes.func.isRequired
}

export default DropdownSelect

