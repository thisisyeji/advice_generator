import React from 'react';
import styled from 'styled-components';

const Title = styled.h1`
	color: hsl(150, 100%, 66%);
	letter-spacing: 4px;
	font-size: 11px;
	text-align: center;
	margin-bottom: 30px;
`;

const Content = styled.p`
	color: hsl(193, 38%, 86%);
	font-size: 28px;
	text-align: center;
`;

const Divider = styled.img`
	display: block;
	margin: 30px auto;

	&.mobileBorder {
		display: none;
	}
`;

const AdviceContent = () => {
	return (
		<>
			<Title>ADVICE #117</Title>
			<Content>Advice</Content>
			<Divider
				src={process.env.PUBLIC_URL + '/images/divider-desktop.svg'}
				alt='divider'
				className='webBorder'
			/>
			<Divider
				src={process.env.PUBLIC_URL + '/images/divider-mobile.svg'}
				alt='divider'
				className='mobileBorder'
			/>
		</>
	);
};

export default AdviceContent;
