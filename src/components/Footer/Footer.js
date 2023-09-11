import FooterStyle from "../Footer/Footer.module.css";
import listItem from "../../Assets/listItem.png";
import logo from "../../Assets/Rectangle.png";

export default function Footer() {
  return (
    <main className={FooterStyle.container}>
      <div className={FooterStyle.firstContainer}>
        <h4>Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672009</h4>
        <p>binarcarrental@gmail.com</p>
        <p>081-233-334-808</p>
      </div>
      <div>
        <nav>
          <img src={logo} alt="" />
        </nav>
      </div>
      <div>
        <h3>Connect with us</h3>
        <img src={listItem} alt="" />
      </div>
      <div>
        <h3>Copyright Binar 2022</h3>
        <img src={logo} alt="" />
      </div>
    </main>
  );
}
