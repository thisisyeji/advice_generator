import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
	width: 500px;
	height: 300px;
	background: hsl(217, 19%, 24%);
	border-radius: 15px;
	padding-top: 40px;

	position: relative;
`;

const AdviceBox = ({ children }) => {
	return <Box>{children}</Box>;
};

export default AdviceBox;
