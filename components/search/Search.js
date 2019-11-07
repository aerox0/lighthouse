import React, { useState, useCallback } from 'react'
import styled from 'styled-components'
import { Input } from '../form/Input'
import SearchList from './SearchList'

const Container = styled('div')`
	.search {
		&-form {
			transition: all 0.2s ease;
			opacity: 0;
			pointer-events: none;
			position: absolute;
			box-shadow: 0px 2px 4px rgba(40, 40, 40, 0.16);
			background-color: #fff;
			width: 100%;
			top: 0;
			left: 0;
			padding: 16px 20px;
			z-index: 101;

			&.active {
				opacity: 1;
				pointer-events: initial;
			}
		}
		&-icon {
			line-height: 0;
		}
		&-input {
			position: relative;
		}
		&-close {
			position: absolute;
			right: 20px;
			top: 50%;
			transform: translateY(-50%);
			width: 19;
			height: 19;

			img {
				width: 100%;
				height: 100%;
			}
		}
		&-result {
			margin-top: 18px;
			padding: 18px 0;
			padding-bottom: 0;
		}
		&-item {
			display: flex;
			align-items: flex-start;
			justify-content: space-between;

			&:not(:last-child) {
				margin-bottom: 15px;

				.search-name {
					padding-bottom: 15px;
					border-bottom: 1px solid ${p => p.theme.colors.gray};
				}
			}
		}
		&-geo {
		}
		&-name {
			flex: 1;
			line-height: 1.8em;

			span {
				font-family: 'Open Sans';
				font-size: 1.4em;
			}
		}
	}
`

const list = [
	{
		name: 'Lake Ariel, PA'
	},
	{
		name: 'Lake Arrowhead, CA'
	},
	{
		name: 'Lake Biltmore Estates, AZ'
	}
]

const Search = () => {
	const [tempList, setTempList] = useState([])
	const [isSearch, setSearch] = useState(false)

	const handleClose = useCallback(() => {
		setSearch(false)
	}, [setSearch])

	const handleOpen = useCallback(() => {
		setSearch(true)
	}, [setSearch])

	const handleSearch = useCallback(
		e => {
			const { value } = e.target
			return setTempList(
				list.filter(el =>
					el.name.toLocaleLowerCase().includes(value.toLocaleLowerCase())
				)
			)
		},
		[tempList]
	)

	return (
		<Container>
			<div className="search-icon" onClick={handleOpen}>
				<img src="/images/search.svg" alt="Search" />
			</div>

			<div className={`search-form ${isSearch ? 'active' : ''}`}>
				<div className="search-input">
					<Input
						style={{ paddingRight: 50 }}
						type="text"
						name="search"
						placeholder="Search..."
						onChange={handleSearch}
					/>
					<div className="search-close" onClick={handleClose}>
						<img src="/images/close.svg" alt="Close search" />
					</div>
				</div>

				<div className="search-result borderTop">
					<SearchList list={tempList} />
				</div>
			</div>
		</Container>
	)
}

export default Search
