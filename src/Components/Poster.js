import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
	display: grid;
	grid-template-columns: 3fr 2fr;
	padding: 20px;
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	font-size: 15px;
	color: rgba(0, 0, 0, 0.6);
	font-weight: 500;
`;

const TextContainer = styled.span`
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

const InfoSection = styled.div`
	display: flex;
	align-items: baseline;
`;

const SubInfoSection = styled.div``;
const ImageContainer = styled.div``;

const Title = styled.span`
	font-size: 33px;
	margin-bottom: 5px;
	margin-right: 10px;
	color: rgba(0, 0, 0, 0.8);
	transition: color 0.1s linear;
	font-weight: 500;
`;

const Rating = styled.span``;
const Year = styled.span``;

const Overview = styled.div`line-height: 125%;`;

const Image = styled.div`
	background-image: url(${(props) => `https://image.tmdb.org/t/p/w500/${props.bgUrl}`});
	height: 260px;
	width: 177px;
	background-size: cover;
	margin: 0 auto;
	background-position: center center;
	transition: border-bottom 0.2s linear;
`;

const SLink = styled(Link)`
	&:hover {
		${Image} {
			border-bottom: 6px solid #ff8906;
		}
		${Title} {
			color: #ff8906;
		}
	}
`;

const Poster = ({ id, imageUrl, title, rating, year, overview, isBook = false }) => (
	// Link 값으로 boolean을 설정해서 그게 참일 때, 설정해 둔 url로 이동할 수 있게 설정. 아래의 경우 해당 값의 디테일 페이지로 간다.
	<Container>
		<TextContainer>
			<InfoSection>
				<SLink to={isBook && `/detail/${id}`}>
					<Title>{title}</Title>
				</SLink>
				<SubInfoSection>
					<Year>{year}</Year>
					<Rating>
						{' '}
						<span role="img" aria-label="rating">
							★
						</span>
						{rating}/10
					</Rating>
				</SubInfoSection>
			</InfoSection>
			<Overview>{overview}</Overview>
		</TextContainer>
		<ImageContainer>
			<SLink to={isBook && `/detail/${id}`}>
				<Image bgUrl={imageUrl} />
			</SLink>
		</ImageContainer>
	</Container>
);

Poster.propTypes = {
	id: PropTypes.number.isRequired,
	imageUrl: PropTypes.string,
	title: PropTypes.string.isRequired,
	rating: PropTypes.number,
	year: PropTypes.string,
	overview: PropTypes.string,
	isBook: PropTypes.bool
};

export default Poster;
