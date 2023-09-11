import { Button } from "react-bootstrap";
import BannerStyle from "../Banner/Banner.module.css";

export default function Banner() {
  return (
    <main className={BannerStyle.container}>
      <div className={BannerStyle.text}>
        <h2 className={BannerStyle.title}>Sewa Mobil di (Lokasimu) Sekarang</h2>
        <p>
          Exercitation qui dolore nulla ad ea sint id. Commodo occaecat irure
          occaecat consectetur aliqua nisi commodo elit magna. Cupidatat
          incididunt mollit enim cillum enim ea sint laboris ipsum nostrud sint
          pariatur irure pariatur. Magna reprehenderit esse amet non laborum
          enim
        </p>
      </div>
      <Button variant="success">Mulai Sewa Mobil</Button>
    </main>
  );
}
