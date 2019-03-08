import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Loader from '../../Components/Loader';

const Container = styled.div`
	width: 100vw;
	height: calc(100vh - 64px);
	position: relative;
	margin: 0 auto;
	background-color: black;
	font-size: 15px;
	color: rgba(255, 255, 255, 0.8);
`;

const BackDrop = styled.div`
	width: 100%;
	height: 100%;
	position: absolute;
	top: 0;
	left: 0;
	background-image: url(${(props) => props.bgImage});
	background-position: center center;
	background-size: cover;
	filter: blur(3px);
	opacity: 0.5;
	z-index: 0;
`;

const Content = styled.div`
	display: flex;
	position: relative;
	padding: 50px 120px;
	width: 100%;
	height: 100%;
`;

const CoverSection = styled.div`
	width: 30%;
	height: 100%;
	background-image: url(${(props) => props.bgImage});
	background-size: cover;
	background-position: center center;
`;

const InfoSection = styled.div`
	width: 70%;
	height: 100%;
	margin-left: 20px;
	padding: 14px 0;
`;

const InfoTitle = styled.h3`
	font-size: 35px;
	margin-bottom: 20px;
`;

const InfoItemContainer = styled.div``;

const InfoItem = styled.span`
	color: rgba(255, 255, 255, 0.6);
	font-weight: 600;
`;

const InfoDivider = styled.span`
	margin: 0 10px;
	color: rgba(255, 255, 255, 0.6);
	font-weight: 600;
`;

const InfoVideos = styled.div`
	margin: 50px 0;
	line-height: 190%;
`;

const InfoOverview = styled.p`
	line-height: 125%;
	font-size: 17px;
`;

const Comments = styled.div`
	width: 75vw;
	margin: 30px auto;
	font-size: 24px;
`;

const DetailPresenter = ({ result, error, loading }) =>
	loading ? (
		<Loader />
	) : (
		<React.Fragment>
			<Container>
				<BackDrop bgImage={`https://image.tmdb.org/t/p/original/${result.backdrop_path}`} />
				<Content>
					<CoverSection
						bgImage={
							result.poster_path ? (
								`https://image.tmdb.org/t/p/original/${result.poster_path}`
							) : (
								require('../../assets/noPoster.jpg')
							)
						}
					/>
					<InfoSection>
						<InfoItemContainer>
							<InfoTitle>{result.title}</InfoTitle>
							<InfoItem>
								{result.release_date ? result.release_date.substring(0, 4) : '! Release Date'}
							</InfoItem>
							<InfoDivider>/</InfoDivider>
							<InfoItem>{result.runtime ? `${result.runtime} min` : '! Run Time'}</InfoItem>
							<InfoDivider>/</InfoDivider>
							<InfoItem>{result.vote_average ? `★ ${result.vote_average}` : '! Vote Average'}</InfoItem>
							<InfoDivider>/</InfoDivider>
							<InfoItem>
								{/* result.genres 에다가 map 을 하면 각각의 Array 는 genre 라는 새로운 Array들로 구성된다. 그리고 새롭게 구성된 genre라는 Array들에서 name값을 찾는것. */}
								{result.genres && result.genres.length !== 0 ? (
									result.genres.map(
										(genre, index) =>
											result.genres.length === index + 1 ? genre.name : `${genre.name} · `
									)
								) : (
									'! Genres'
								)}
							</InfoItem>
							<InfoVideos>
								{result.videos ? (
									result.videos.results.map(
										(video, index) =>
											index < 3 ? (
												<a
													href={`https://www.youtube.com/watch?v=${video.key}`}
													target={`_blank`}
												>
													<div>{video.name}</div>
												</a>
											) : null
									)
								) : null}
							</InfoVideos>
						</InfoItemContainer>
						<InfoOverview>{result.overview ? result.overview : 'Nothing Found'}</InfoOverview>
					</InfoSection>
				</Content>
			</Container>
			<Comments>It's comment area</Comments>
		</React.Fragment>
	);

DetailPresenter.propTypes = {
	result: PropTypes.object,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default DetailPresenter;
