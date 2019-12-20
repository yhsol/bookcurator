import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import SectionColumn from "../../Components/SectionColumn";
import Loader from "../../Components/Loader";
import ErrorMessage from "../../Components/ErrorMessage";
import PosterSmall from "../../Components/PosterSmall";
import Helmet from "react-helmet";

const Container = styled.div`
 width: 75%;
  margin: 20px auto;
  display: flex;
  justify-content: center;
`;

const Form = styled.form`
  margin: 20px 0 50px;
  width: 100%;
  padding: 0 20px;
`;

const InputForm = styled.div``;

const Input = styled.input`
  all: unset;
  font-size: 24px;
  padding: 5px 20px;
  background: white;
  box-shadow: 0 1px 6px 0 rgba(32, 33, 36, 0.28);
  box-sizing: border-box;
  font-size: 16px;
  line-height: 21px;
  max-width: 584px;
  transition: none;
  border-radius: 22px;
  cursor: text;
  width: 80vw;
  height: 44px;
`;

const FrontSearchPre = ({
  searchResults,
  searchTerm,
  error,
  loading,
  handleSubmit,
  updateTerm
}) => (
  <React.Fragment>
    <Helmet>
      <title>Search | Bookcurator</title>
    </Helmet>
    <Container>
      <Form onSubmit={handleSubmit}>
        <Input
          placeholder="Search Content!"
          value={searchTerm}
          onChange={updateTerm}
        />
        {/* 자바스크립트로부터 value 를 가져오기 위해 value 값을 지정한다. */}
      </Form>
      {searchResults && searchResults.length > 0 && (
        <SectionColumn title="Search Results">
          {searchResults.map(movie => (
            <PosterSmall
              key={movie.id}
              id={movie.id}
              title={movie.title}
              imageUrl={movie.poster_path}
              rating={movie.vote_average}
              // 아래와 같은 경우, substring 이나 slice 같은 메서드를 쓰는 경우 앞의 값이 null일 경우 에러가 생길 수 있어서 그 값을 확인하는 것이 필요.
              year={movie.release_Date}
              isBook={true}
            />
          ))}
        </SectionColumn>
      )}
      {error && <ErrorMessage text={error} color="#ff8906" />}
      {searchResults && searchResults.length === 0 && (
        <ErrorMessage text="Nothing Found" color="#82ccdd" />
      )}
    </Container>
  </React.Fragment>
);

FrontSearchPre.propTypes = {
  searchResults: PropTypes.array,
  searchTerm: PropTypes.string,
  error: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  updateTerm: PropTypes.func.isRequired
};

export default FrontSearchPre;
