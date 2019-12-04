import React from 'react';

const HEADERS = ['日期', '排', '代號', '名稱', '開盤價', '最高價', '最低價', '昨收盤', '今收盤', '成交量','漲跌', '漲跌幅']

export default function TableHeader({ onClick }) {
	return (
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
}

