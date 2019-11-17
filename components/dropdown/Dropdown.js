import React, { useState, useCallback, useRef, useEffect } from 'react'
import styled from 'styled-components'

const Container = styled('div')`
	min-width: 185px;
	width: auto;
	border-top-left-radius: 4px;
	border-top-right-radius: 4px;
	position: relative;

	&:not(:last-child) {
		margin-right: 16px;
	}

	&.active {
		.line {
			border-bottom: 1px solid ${({ theme }) => theme.colors.darkGray};
		}
	}

	.dropdown {
		&__toggle {
			background-color: ${({ theme }) => theme.colors.gray1};
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
			bottom: 0;
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
	const [open, setOpen] = useState(false)
	const [bodyHeight, setBodyHeight] = useState(0)
	const bodyRef = useRef(null)

	const handleToggle = useCallback(() => {
		setOpen(s => !s)
	}, [open])

	useEffect(() => {
		setBodyHeight(bodyRef.current ? bodyRef.current.clientHeight + 3 : 0)
	}, [open])

	return (
		<Container
			className={`dropdown ${open && 'active'}`}
			style={{
				paddingBottom: bodyHeight
			}}
		>
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
				<div className="dropdown__body" ref={bodyRef}>
					{typeof children == 'function'
						? children({ setOpen, open })
						: children}
				</div>
			) : null}
		</Container>
	)
}

export default Dropdown
