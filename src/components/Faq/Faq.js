import Accordion from "react-bootstrap/Accordion";
import FaqStyle from "../Faq/Faq.module.css";

const dataFaq = [
  {
    q: "Apa saja syarat yang dibutuhkan?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam",
  },
  {
    q: "Berapa hari minimal sewa mobil lepas kunci?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam",
  },
  {
    q: "Berapa hari sebelumnya sebaiknya booking sewa mobil?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam",
  },
  {
    q: "Apakah ada biaya antar-jemput?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam",
  },
  {
    q: "Bagaimana jika terjadi kecelakaan?",
    a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed doeiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim adminim veniam",
  },
];

function Faq() {
  return (
    <main className={FaqStyle.container}>
      <div className={FaqStyle.text}>
        <h3>Frequently Asked Question</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
      </div>
      <div>
        <Accordion className={FaqStyle.faq} defaultActiveKey="0">
          {dataFaq.map((item, index) => (
            <Accordion.Item eventKey={index}>
              <Accordion.Header>{item.q}</Accordion.Header>
              <Accordion.Body>{item.a}</Accordion.Body>
            </Accordion.Item>
          ))}
        </Accordion>
      </div>
    </main>
  );
}

export default Faq;
