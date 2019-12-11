import React, { useState, useEffect } from "react";
import { movieApi, tvApi } from "../Api";
import Section from "../Components/Section";
import DetailPresenter from "./DetailPresenter";

const Detail = props => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const {
    match: {
      params: { id }
    },
    location: { pathname }
  } = props;
  const parsedID = parseInt(id);
  const isMovie = pathname.includes("/movie/");

  const FetchData = async () => {
    try {
      if (isMovie) {
        const { data: result } = await movieApi.movieDetail(parsedID);
        setResult(result);
        console.log(result);
      } else {
        const { data: result } = await tvApi.tvDetail(parsedID);
        setResult(result);
        console.log(result);
      }
    } catch (error) {
      setError("Can't find infomation");
    } finally {
      setLoading(false);
      console.log(result);
    }
  };

  useEffect(() => {
    FetchData();
  }, []);

  console.log(result);

  return <DetailPresenter loading={loading} error={error} result={result} />;
};

export default Detail;
