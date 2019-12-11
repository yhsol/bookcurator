import React, { useState, useEffect } from "react";
import DetailPresenter from "./DetailPresenter";
import { withRouter } from "react-router-dom";
import { bookApi } from "../../api";

const Detail = props => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const {
    match: {
      params: { id }
    }
  } = props;
  const parsedID = parseInt(id);

  const FetchData = async () => {
    try {
      const { data: result } = await bookApi.detail(parsedID);
      setResult(result);
      console.log(result);
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

export default withRouter(Detail);
