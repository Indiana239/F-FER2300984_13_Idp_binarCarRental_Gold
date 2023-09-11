import Card from "react-bootstrap/Card";
import perfect from "../../Assets/icon_complete.png";
import price from "../../Assets/icon_price.png";
import hours from "../../Assets/icon_24hrs.png";
import profesional from "../../Assets/icon_professional.png";
import WhyUsStyle from "../WhyUs/WhyUs.module.css";

const dataWhy = [
  {
    image: perfect,
    title: "Mobil Lengkap",
    details:
      "Tersedia banyak pilihan mobil, kondisi masih baru, bersih dan terawat",
  },
  {
    image: price,
    title: "Harga Murah",
    details:
      "Harga murah dan bersaing, bisa bandingkan harga kami dengan rental mobil lain",
  },
  {
    image: hours,
    title: "Layanan 24 Jam",
    details:
      "Siap  melayani kebutuhan Anda selama 24 jam nonstop. Kami juga tersedia di akhir minggu",
  },
  {
    image: profesional,
    title: "Sopir Profesional",
    details:
      "Sopir yang profesional, berpengalaman, jujur, ramah dan selalu tepat waktu",
  },
];

function WhyUs() {
  return (
    <main className={WhyUsStyle.container}>
      <div className={WhyUsStyle.text}>
        <h2 className={WhyUsStyle.title}>Why Us?</h2>
        <p>Mengapa harus pilih Binar Car Rental?</p>
      </div>

      <div className={WhyUsStyle.list}>
        {dataWhy.map((item) => (
          <Card style={{ width: "18rem" }}>
            <Card.Img
              className={WhyUsStyle.image}
              variant="top"
              src={item.image}
            />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>{item.details}</Card.Text>
            </Card.Body>
          </Card>
        ))}
      </div>
    </main>
  );
}

export default WhyUs;
