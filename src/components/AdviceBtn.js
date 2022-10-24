import React from 'react';
import styled from 'styled-components';

const DiceBtn = styled.button`
	width: 55px;
	height: 55px;
	border-radius: 50%;
	border: none;
	background: hsl(150, 100%, 66%);
	cursor: pointer;

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
	}

	img {
		width: 22px;
		position: relative;
		z-index: 3;
	}

	&:hover {
		&::after {
			content: '';
			display: block;
			position: absolute;
		}
	}
`;

const AdviceBtn = () => {
	return (
		<DiceBtn>
			<img src={process.env.PUBLIC_URL + 'images/icon-dice.svg'} alt='dice' />
		</DiceBtn>
	);
};

export default AdviceBtn;
