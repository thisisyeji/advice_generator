import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	color: hsl(218, 23%, 16%);
	font-size: 40px;
	text-shadow: -1px 0 hsl(193, 38%, 86%), 0 1px hsl(193, 38%, 86%),
		1px 0 hsl(193, 38%, 86%), 0 -1px hsl(193, 38%, 86%);
	font-family: 'Leckerli One', cursive;
	text-align: center;
	margin-bottom: 30px;
`;

const Box = styled.div`
	width: 500px;
	height: 100%;
	min-height: 300px;
	background: hsl(217, 19%, 24%);
	border-radius: 15px;
	padding: 40px 0 30px;

	position: relative;
	transition: 0.5s;

	@media screen and (max-width: 525px) {
		width: 90%;
		margin: 0 auto;
	}

	@media screen and (max-width: 375px) {
	}
`;

const AdviceBox = ({ children }) => {
	return (
		<>
			<Title>Do you need any advice?</Title>
			<Box>{children}</Box>
		</>
	);
};

export default AdviceBox;
