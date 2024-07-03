import logo1 from '../assets/icons/partners/Logo 1.svg';
import logo2 from '../assets/icons/partners/Logo 2.svg';
import logo3 from '../assets/icons/partners/Logo 3.svg';
import logo4 from '../assets/icons/partners/Logo 4.svg';
import logo5 from '../assets/icons/partners/Logo 5.svg';
import logo6 from '../assets/icons/partners/Logo 6.svg';

export default function Partners() {
  return (
    <section
      id="partners-section"
      className="p-12 flex justify-between backdrop-blur-sm"
      style={{
        background:
          "linear-gradient(97deg, rgba(23, 39, 64, 0.10) 7%, rgba(44, 189, 255, 0.56) 65%, rgba(94, 244, 178, 0.36) 100%)",
      }}
    >
      <img src={logo1} alt="Logo 1" />
      <img src={logo2} alt="Logo 2" />
      <img src={logo3} alt="Logo 3" />
      <img src={logo4} alt="Logo 4" />
      <img src={logo5} alt="Logo 5" />
      <img src={logo6} alt="Logo 6" />
    </section>
  );
}
