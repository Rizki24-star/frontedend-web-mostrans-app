import { useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";

type CharacterCardProps = {
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  image: string;
};

const CharacterCard = (characterCardProps: CharacterCardProps) => {
  const { name, gender, image, species, status, type } = characterCardProps;

  return (
    <Card>
      <Row noGutters>
        <Col md={4}>
          <Card.Img src={image} />
        </Col>
        <Col md={8}>
          <Card.Body>
            <Card.Title>{name}</Card.Title>
            <Card.Text className="d-flex align-items-center gap-1">
              <div
                className={`rounded-circle ${status === "Alive" ? "bg-success" : status === "Dead" ? "bg-danger text-decoration-line-through" : "bg-secondary"}`}
                style={{ width: "12px", height: "12px" }}
              />
              {status} - <strong>{species}</strong>
            </Card.Text>
            <Card.Text>{species}</Card.Text>
            <Card.Text>{type}</Card.Text>
            <Card.Text>{gender}</Card.Text>
          </Card.Body>
        </Col>
      </Row>
    </Card>
  );
};

export default CharacterCard;
