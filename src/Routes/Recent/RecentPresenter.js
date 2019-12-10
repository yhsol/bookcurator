import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SectionRows from "../../Components/SectionRows";
import Loader from "../../Components/Loader";
import ErrorMessage from "../../Components/ErrorMessage";
import Poster from "../../Components/Poster";
import Helmet from "react-helmet";

const Container = styled.div`
  /* width: 75%;			 */
  margin: 20px auto;
`;

const RecentPresenter = ({ upcoming, error, loading }) => (
  <React.Fragment>
    <Helmet>
      <title>Recent | Bookcurator</title>
    </Helmet>
    {loading ? (
      <Loader />
    ) : (
      <Container>
        {upcoming && upcoming.length > 0 && (
          <SectionRows title="Recent">
            {upcoming.map(movie => (
              <Poster
                key={movie.id}
                id={movie.id}
                title={movie.title}
                imageUrl={movie.poster_path}
                rating={movie.vote_average}
                // 아래와 같은 경우, substring 이나 slice 같은 메서드를 쓰는 경우 앞의 값이 null일 경우 에러가 생길 수 있어서 그 값을 확인하는 것이 필요.
                year={movie.release_date}
                isBook={true}
                overview={movie.overview}
              />
            ))}
          </SectionRows>
        )}
        {error && <ErrorMessage text={error} color="#ff8906" />}
      </Container>
    )}
    ;
  </React.Fragment>
);

RecentPresenter.propTypes = {
  upcoming: PropTypes.array,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired
};

export default RecentPresenter;
