import React from 'react';
import styled from 'styled-components';

const DiceBtn = styled.button`
	width: 55px;
	height: 55px;
	border-radius: 50%;
	border: none;
	background: hsl(150, 100%, 66%);
	cursor: pointer;
	transition: 1s;

	position: absolute;
	bottom: calc(-55px / 2);
	left: calc(50% - 55px / 2);

	display: flex;
	justify-content: center;
	align-items: center;

	&::after {
		content: '';
		display: none;
		clear: both;
		width: 70px;
		height: 70px;
		border-radius: 50px;
		background: rgba(82, 255, 168, 0.5);
		filter: blur(15px);
		transition: 0.5s;
	}

	span {
		font-size: 30px;
		position: relative;
		z-index: 3;
	}

	/* img {
		width: 22px;
		position: relative;
		z-index: 3;
	} */

	&:hover {
		&::after {
			content: '';
			display: block;
			position: absolute;
		}
		transform: rotate(360deg);
	}
`;

const AdviceBtn = ({ onUpdate }) => {
	return (
		<DiceBtn onClick={() => onUpdate()}>
			<span>🎲</span>
			{/* <img src={process.env.PUBLIC_URL + 'images/icon-dice.svg'} alt='dice' /> */}
		</DiceBtn>
	);
};

export default AdviceBtn;
