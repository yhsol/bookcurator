import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import SectionRows from '../../Components/SectionRows';
import Loader from '../../Components/Loader';
import ErrorMessage from '../../Components/ErrorMessage';
import Poster from '../../Components/Poster';

const Container = styled.div`
	width: 75%;
	margin-right: auto;
	margin-left: auto;
`;

const SSpan = styled.span`
	border-top: 1px solid rgba(0, 0, 0, 0.3);
	padding-top: 20px;
`;

const RecentPresenter = ({ upcoming, error, loading }) =>
	loading ? (
		<Loader />
	) : (
		<Container>
			{upcoming &&
			upcoming.length > 0 && (
				<SectionRows title="Recent">
					{upcoming.map((movie) => (
						<Poster
							key={movie.id}
							id={movie.id}
							title={movie.title}
							imageUrl={movie.poster_path}
							rating={movie.vote_average}
							// 아래와 같은 경우, substring 이나 slice 같은 메서드를 쓰는 경우 앞의 값이 null일 경우 에러가 생길 수 있어서 그 값을 확인하는 것이 필요.
							year={movie.release_date && movie.release_date.substring(0, 4)}
							isBook={true}
							overview={movie.overview && `${movie.overview.substring(0, 110)}...`}
						/>
					))}
				</SectionRows>
			)}
			{error && <ErrorMessage text={error} color="#ff8906" />}
		</Container>
	);

RecentPresenter.propTypes = {
	upcoming: PropTypes.array,
	error: PropTypes.string,
	loading: PropTypes.bool.isRequired
};

export default RecentPresenter;
