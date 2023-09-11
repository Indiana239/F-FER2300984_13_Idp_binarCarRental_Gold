export default function Anchor() {
  const service = () => {
    window.location.href = "#OurService";
  };
  const why = () => {
    window.location.href = "#WhyUs";
  };

  return <a href="#OurService">Our Service</a>;
}
