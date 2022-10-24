import React from 'react';
import styled from 'styled-components';

const LoadingBox = styled.div`
	width: 70%;
	height: 100%;
	margin: 0 auto;

	img {
		width: 100%;
	}
`;

const Loading = () => {
	return (
		<LoadingBox>
			<img src={process.env.PUBLIC_URL + '/images/loading.gif'} alt='loading' />
		</LoadingBox>
	);
};

export default Loading;
