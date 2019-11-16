import React, { useState, useCallback } from 'react'
import styled from 'styled-components'

const Container = styled('div')`
	background-color: ${({ theme }) => theme.colors.gray1};
	max-width: 195px;
	width: 100%;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	position: relative;

	&.active {
		.line {
			border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
		}
	}

	.dropdown {
		&__toggle {
			cursor: pointer;
			padding: 16px 16px 20px 16px;
			display: flex;
			align-items: center;
			justify-content: space-between;
			span {
				font-size: 1.2em;
				font-weight: bold;
				color: ${({ theme }) => theme.colors.black};
			}
			img {
				margin-left: 15px;
				width: 14px;
			}
		}

		&__body {
			border: 1px solid ${({ theme }) => theme.colors.darkGray};
			border-top-right-radius: 4px;
			border-bottom-left-radius: 4px;
			border-bottom-right-radius: 4px;
			padding: 23px 16px;
			position: absolute;
			top: 100%;
			left: 0;
			background-color: ${({ theme }) => theme.colors.gray1};
			min-width: 240px;
			width: auto;
			display: block;

			.title {
				font-size: 0.8em;
				line-height: 1;
				font-weight: bold;
				color: ${({ theme }) => theme.colors.black};
			}
		}
	}
`

const Dropdown = ({ children, label }) => {
	const [open, setOpen] = useState(true)

	const handleToggle = useCallback(() => {
		setOpen(s => !s)
	}, [open])

	return (
		<Container className={`dropdown ${open && 'active'}`}>
			<div className="dropdown__toggle" onClick={handleToggle}>
				<span>{label}</span>
				{open ? (
					<>
						<img src="/images/sort-up.svg" alt="Sort up" />
					</>
				) : (
					<img src="/images/sort-down.svg" alt="Sort down" />
				)}
			</div>
			{open ? (
				<div className="dropdown__body">
					{typeof children == 'function'
						? children({ setOpen, open })
						: children}
				</div>
			) : null}
		</Container>
	)
}

export default Dropdown
