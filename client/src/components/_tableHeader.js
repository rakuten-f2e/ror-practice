import React from 'react';

export default function TableHeader(props) {
	const headers = ['日期', '排', '代號', '名稱', '開盤價', '最高價', '最低價', '昨收盤', '今收盤', '成交量','漲跌', '漲跌幅']
	const tableHeader = headers.map( (header, i) => {
		return <td className="tableHeader" key={header} onClick={() => { props.onClick(i) }}>{header}</td>
	})

	return (
		<thead>
			<tr>
				{tableHeader}
			</tr>
		</thead>
	)
	
}

