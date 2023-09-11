import { Card } from "react-bootstrap";
import car from "../Assets/CarImage.png";

const carData = [
  {
    image: car,
    title: "Inova",
    price: "Rp 500.000 / hari",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
  },
];

export default function CarCards() {
  return (
    <main>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
        </Card.Body>
      </Card>
    </main>
  );
}
