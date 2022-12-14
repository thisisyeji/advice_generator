import React from 'react';
import styled from 'styled-components';

const Title = styled.h2`
	color: hsl(150, 100%, 66%);
	letter-spacing: 4px;
	font-size: 11px;
	text-align: center;
	margin-bottom: 30px;
`;

const Content = styled.p`
	color: hsl(193, 38%, 86%);
	font-size: 28px;
	letter-spacing: 1px;
	line-height: 1.3;
	text-align: center;
	padding: 0 40px;
`;

const Divider = styled.img`
	display: block;
	margin: 30px auto;

	&.mobileBorder {
		display: none;
	}

	@media screen and (max-width: 525px) {
		&.mobileBorder {
			display: block;
		}

		&.webBorder {
			display: none;
		}
	}
`;

const AdviceContent = ({ advice, id }) => {
	return (
		<>
			<Title>ADVICE #{id}</Title>
			<Content>“{advice}”</Content>
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
