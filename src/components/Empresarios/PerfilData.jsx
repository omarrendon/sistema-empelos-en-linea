import React, { useEffect } from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import useFetch from '../../Hooks/useFetch';

function PerfilData() {
  const data = useFetch("http://localhost:4000/api/empresario/", {});
  // const usuario = data.data;

  console.log(data);


  // useEffect(() => {
  //   console.log(data);
  // }, [data]);

  return (
    <>
      <Card >
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href="#">Card Link</Card.Link>
          <Card.Link href="#">Another Link</Card.Link>
        </Card.Body>
      </Card>
    </>
  );
}

export default PerfilData;
