import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div``;

const Image = styled.div`
	background-image: url(${(props) => `https://image.tmdb.org/t/p/w500/${props.bgUrl}`});
	height: 170px;
	background-size: cover;
	background-position: center center;
`;

const ImageForm = styled.div`
	margin-bottom: 5px;
	position: relative;
	&:hover {
		background-color: black;
		${Image} {
			opacity: 0.6;
		}
	}
`;

const Title = styled.span`
	display: block;
	font-size: 14px;
`;

const YearRating = styled.span`
	position: absolute;
	bottom: 8px;
	right: 6px;
	left: 6px;
	color: rgba(200, 200, 200, 5);
	opacity: 0;
	transition: opacity 0.1s linear;
	display: grid;
	grid-template-columns: 1fr 1fr;
`;

const ImageContainer = styled.div`
	&:hover {
		${YearRating} {
			opacity: 1;
		}
	}
`;

const Rating = styled.span`text-align: right;`;

const Year = styled.span`text-align: left;`;

const PosterSmall = ({ id, imageUrl, title, rating, year, isBook = false }) => (
	// Link 값으로 boolean을 설정해서 그게 참일 때, 설정해 둔 url로 이동할 수 있게 설정. 아래의 경우 해당 값의 디테일 페이지로 간다.
	<Link to={isBook && `/detail/${id}`}>
		<Container>
			<ImageContainer>
				<ImageForm>
					<Image bgUrl={imageUrl} />
					<YearRating>
						<Year>{year}</Year>
						<Rating>
							<span role="img" aria-label="rating">
								★
							</span>
							{rating}/10
						</Rating>
					</YearRating>
				</ImageForm>
				<Title>{title}</Title>
			</ImageContainer>
		</Container>
	</Link>
);

PosterSmall.propTypes = {
	id: PropTypes.number.isRequired,
	imageUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number,
	year: PropTypes.string,
	isBook: PropTypes.bool
};

export default PosterSmall;
