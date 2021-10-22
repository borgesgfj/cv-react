import Title from "./Title";

export default function ContactInformation(props) {
  return (
    <div className="contactContainer">
      <Title
        text="Contato e redes sociais"
      />
      <p>
        <b>e-mail</b>: <br/>
        <span>{props.mailAdress}</span>
      </p>

    </div>
  );
}
