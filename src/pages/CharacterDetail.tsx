import { gql, useQuery } from "@apollo/client";
import { Link, useParams } from "react-router-dom";
import { Button, Card, Col, Container, Form, Row } from "react-bootstrap";
import { useRecoilState } from "recoil";
import { characterState } from "../recoil/atom";
import { useEffect } from "react";

const GET_CHARACTER = gql(`
query GetCharacter($characterId: ID!) {
  character(id: $characterId) {
    id
    name
    status
    species
    type
    gender
    image
  }
}

  `);

const CharacterDetailPage = () => {
  const { id } = useParams();
  const [character, setCharacter] = useRecoilState(characterState);
  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { characterId: id },
  });

  useEffect(() => {
    if (data) {
      setCharacter(data);
    }
  }, [data, character]);

  return (
    <div className="character-detail mt-4">
      <Container>
        <Row noGutters className="d-flex justify-content-center">
          <Col md={3}>
            <Card.Img src={character?.character?.image!} />
          </Col>
          <Col
            md={5}
            className="h-full  flex flex-column justify-content-between gap-4"
          >
            <div>
              <h4 className="font-bold fs-2"> {character?.character?.name!}</h4>
              <div className="d-flex align-items-center gap-2 fw-bold">
                <div
                  className={`rounded-circle ${character.character?.status === "Alive" ? "bg-success" : character.character?.status === "Dead" ? "bg-danger text-decoration-line-through" : "bg-secondary"}`}
                  style={{ width: "12px", height: "12px" }}
                />
                {character.character?.status} - {character.character?.species}
              </div>
            </div>
            <div className="mt-2">
              <span className="text-secondary fs-6">status</span>
              <h5> {character?.character?.status!}</h5>
            </div>
            <div className="mt-2">
              <span className="text-secondary fs-6">status</span>
              <h5> {character?.character?.gender!}</h5>
            </div>

            <div>
              <Form>
                <Form.Group
                  className="mb-3"
                  controlId="exampleForm.ControlInput1"
                >
                  <Form.Label>Location</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="name@example.com"
                    required
                  />
                </Form.Group>
                <div className="d-flex justify-content-end">
                  <Button type="submit">Create Location</Button>
                </div>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default CharacterDetailPage;
