import logo from "../assets/logo.png";

const Footer = () => {
  return (
    <div className="footer-container">
      <div>
        <img src={logo} alt="logo" className="logo" />
        <div>Home | Blog | Pricing | About| FAQ | Contact</div>
      </div>
      <div>
        <p>55 rue Faubourg Saint Honoré, 75008 Paris</p>
        <p>+33 1 42 92 81 00</p>
        <p>contact@escape-game.com</p>
      </div>
      <div>
        <p>A propos</p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
          doloremque illum temporibus maxime non aut vitae est quas. Temporibus
          cum rerum molestias aut perspiciatis, at odit exercitationem velit
          necessitatibus iusto.
        </p>
      </div>
    </div>
  );
};

export default Footer;
