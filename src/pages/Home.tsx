import React, { useEffect } from "react";
import { gql } from "../__generated__";
import { useQuery } from "@apollo/client";
import { useRecoilState } from "recoil";
import { characterListState } from "../recoil/atom";
import QueryResult from "../components/QueryResult";
import CharacterCard from "../components/CharacterCard";
import { Col, Container, Row } from "react-bootstrap";

const GET_CHARACTERS = gql(`
query GetCharacters {
characters{
  results{
    id
    name
    status
    species
    type
    gender
    image
    __typename @skip(if: true) 
  }
}
}
  `);

const HomePage = () => {
  const [characters, setCharacters] = useRecoilState(characterListState);
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  useEffect(() => {
    if (data) {
      setCharacters(data);
    }
  }, [data, characters]);

  return (
    <div className="h-full py-4">
      <Container>
        <QueryResult
          loading={loading}
          error={error}
          data={data?.characters?.results}
        >
          <Row className="gap-3 justify-content-center ">
            {data?.characters?.results?.map((character) => (
              <Col lg={5} md={10}>
                <CharacterCard
                  key={character?.id}
                  id={character?.id!}
                  name={character?.name!}
                  gender={character?.gender!}
                  image={character?.image!}
                  species={character?.species!}
                  status={character?.status!}
                />
              </Col>
            ))}
          </Row>
        </QueryResult>
      </Container>
    </div>
  );
};

export default HomePage;
