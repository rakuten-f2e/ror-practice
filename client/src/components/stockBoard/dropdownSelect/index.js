import React from 'react';
import PropTypes from 'prop-types'

const DropdownSelect = ({ options, handleChange }) => (
	<select onChange={handleChange}>
		<option value="all" >-- ALL --</option>
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
	handleChange: PropTypes.func.isRequired
}

export default DropdownSelect
