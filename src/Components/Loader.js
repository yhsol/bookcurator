import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	justify-content: center;
	margin-top: 30px;
	font-size: 30px;
	font-weight: 500;
	color: rgba(0, 0, 0, 0.5);
`;

export default () => <Container>Loading...</Container>;
