import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Container = styled.div`
	:not(:last-child) {
		margin-bottom: 50px;
	}
	padding: 0 20px;
	color: rgba(0, 0, 0, 0.8);
`;

const Title = styled.span`
	font-size: 24px;
	font-weight: 600;
`;

const Grid = styled.div`
	margin: 20px auto;
	display: grid;
	grid-template-columns: repeat(auto-fill, 116px);
	grid-gap: 20px;
	justify-content: center;
`;

const SectionColumn = ({ title, children }) => (
	<Container>
		<Title>{title}</Title>
		<Grid>{children}</Grid>
	</Container>
);

SectionColumn.propTypes = {
	title: PropTypes.string.isRequired,
	children: PropTypes.oneOfType([ PropTypes.arrayOf(PropTypes.node), PropTypes.node ])
};

export default SectionColumn;
