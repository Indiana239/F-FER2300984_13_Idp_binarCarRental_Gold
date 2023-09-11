import { Col, Container, Image, Row } from "react-bootstrap";
import photo2 from "../../Assets/img_service.png";
import checklist from "../../Assets/Checklist.png";
import ServiceStyle from "../OurService/OurService.module.css";

const dataService = [
  {
    image: checklist,
    description: "Sewa Mobil Dengan Supir di Bali 12 Jam",
  },
  {
    image: checklist,
    description: "Sewa Mobil Lepas Kunci di Bali 24 Jam",
  },
  {
    image: checklist,
    description: "Sewa Mobil Jangka Panjang Bulanan",
  },
  {
    image: checklist,
    description: "Gratis Antar - Jemput Mobil di Bandara",
  },
  {
    image: checklist,
    description: "Layanan Airport Transfer / Drop In Out",
  },
];

export default function OurService() {
  return (
    <main className={ServiceStyle.container}>
      <Container className={ServiceStyle.image}>
        <Row>
          <Col xs={6} md={4}>
            <Image src={photo2} rounded />
          </Col>
        </Row>
      </Container>
      <div className={ServiceStyle.description}>
        <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
        <p>
          Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
          murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
          pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting,
          dll.
        </p>
        <div>
          {dataService.map((item, index) => (
            <div className={ServiceStyle.list} key={index}>
              <img
                className={ServiceStyle.check}
                src={item.image}
                alt={`gambar ke ${index}`}
              />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
