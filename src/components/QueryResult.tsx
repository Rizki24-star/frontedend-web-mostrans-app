import React, { PropsWithChildren } from "react";
import { ApolloError } from "@apollo/client";
import { Spinner } from "react-bootstrap";

interface QueryResultProps {
  loading: boolean;
  error?: ApolloError | undefined;
  data?: unknown;
}

const QueryResult: React.FC<PropsWithChildren<QueryResultProps>> = ({
  loading,
  error,
  data,
  children,
}): React.ReactElement<any, any> | null => {
  if (error) {
    return <p>ERROR: {error.message}</p>;
  }
  if (loading) {
    return (
      <Spinner
        animation="border"
        role="status"
        className="m-auto h-full w-full"
      >
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    );
  }
  if (data) {
    return <>{children}</>;
  }

  return <p>Nothing to show...</p>;
};

export default QueryResult;
