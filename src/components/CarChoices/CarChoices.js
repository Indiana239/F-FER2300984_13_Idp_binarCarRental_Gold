import { Button, Dropdown, Form, InputGroup } from "react-bootstrap";
import service from "../../service";
import { useState } from "react";
import CarChoicesStyles from "../CarChoices/CarChoices.module.css";

const DataCar = [
  {
    title: "kategori",
    options: ["2-4 orang", "4-6 orang", "6-8 orang"],
  },
  {
    title: "Harga",
    options: ["< Rp 400.000", "Rp 400.000-Rp600.000", "> Rp 600.000"],
  },
  {
    title: "Status",
    options: ["Disewa", "Tidak Disewa"],
  },
];

export default function CarChoices() {
  const [data, setData] = useState();
  const [name, setName] = useState();
  const [category, setCategory] = useState();
  const [isRented, setIsRented] = useState();

  const handleClick = async () => {
    try {
      const response = await service.car.get(
        `/admin/v2/car?name=${name}&category=${category}&isRented=${isRented}`
      );

      if (response) setData(response.data);
    } catch (error) {
      console.error(error?.message);
    }
  };

  return (
    <main className={CarChoicesStyles.container}>
      <section className={CarChoicesStyles.carType}>
        <p>Nama Mobil</p>
        <Form>
          <InputGroup size="sm" className="mb-3">
            <Form.Control
              placeholder="Ketik nama/tipe mobil"
              aria-label="Small"
              aria-describedby="inputGroup-sizing-sm"
            />
          </InputGroup>
        </Form>
      </section>

      {DataCar.map((item) => (
        <section className={CarChoicesStyles.secondContainer}>
          <section>
            <p>{item.title}</p>
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Dropdown Button
              </Dropdown.Toggle>

              <Dropdown.Menu>
                {item.options.map((option) => (
                  <Dropdown.Item href="#/action-1">{option}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
          </section>
        </section>
      ))}
      <Button variant="success" onClick={handleClick}></Button>
    </main>
  );
}
