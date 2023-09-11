import { Button, Col, Container, Image, Row } from "react-bootstrap";
import car from "../../Assets/img_car.png";
import HeaderStyle from "../Header/Header.module.css";

export default function Header() {
  return (
    <main className={HeaderStyle.container}>
      <div className={HeaderStyle.text}>
        <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
        <p>
          Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas
          terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu
          untuk sewa mobil selama 24 jam.
        </p>
        <Button className={HeaderStyle.button} variant="success">
          Mulai Sewa Mobil
        </Button>
      </div>
      <div>
        <img className={HeaderStyle.image} src={car} alt="" />
      </div>
    </main>
  );
}
