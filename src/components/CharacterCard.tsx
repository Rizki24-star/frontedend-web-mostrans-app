import { useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

type CharacterCardProps = {
  id: string;
  name: string;
  status: string;
  species: string;
  gender: string;
  image: string;
};

const CharacterCard = (characterCardProps: CharacterCardProps) => {
  const { id, name, gender, image, species, status } = characterCardProps;

  return (
    <Card>
      <Row noGutters>
        <Col md={4}>
          <Link to={`/${id}`}>
            <Card.Img src={image} />
          </Link>
        </Col>
        <Col md={8}>
          <Card.Body className="d-flex flex-column justify-content-between h-100">
            <Card.Title className="font-black fs-4">
              <Link className="link text-dark" to={`/${id}`}>
                {name}
              </Link>
            </Card.Title>
            <Card.Text className="d-flex align-items-center gap-1">
              <div
                className={`rounded-circle ${status === "Alive" ? "bg-success" : status === "Dead" ? "bg-danger text-decoration-line-through" : "bg-secondary"}`}
                style={{ width: "12px", height: "12px" }}
              />
              {status} - <strong>{species}</strong>
            </Card.Text>
            <Card.Text>{gender}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CharacterCard;
