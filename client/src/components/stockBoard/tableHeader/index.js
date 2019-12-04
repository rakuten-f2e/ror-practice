import React from 'react';
import PropTypes from 'prop-types'

const HEADERS = ['日期', '排', '代號', '名稱', '開盤價', '最高價', '最低價', '昨收盤', '今收盤', '成交量','漲跌', '漲跌幅']

const TableHeader = ({ onClick }) => (
	<thead>
		<tr>
			{
				HEADERS.map((header, i) => (
					<td className="tableHeader" key={header} onClick={() => {onClick(i)}}>{header}</td>
				))
			}
		</tr>
	</thead>
)

TableHeader.propTypes = {
	onClick: PropTypes.func.isRequired
}

export default TableHeader

