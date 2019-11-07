import React from 'react'

const SearchList = ({ list }) => {
	return list.map((el, i) => {
		return (
			<div key={i} className="search-item">
				<div className="search-geo" style={{ marginRight: 12 }}>
					<img src="/images/geo.svg" alt="Geolocation Icon" />
				</div>
				<div className="search-name">
					<span>{el.name}</span>
				</div>
			</div>
		)
	})
}

export default React.memo(SearchList)
