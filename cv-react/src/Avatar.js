import Title from "./Title";
export default function Avatar(props) {
  const {profilePicUrl, briefDescription} = props
  return (
    <div>
      <img id="fotocv" src={profilePicUrl} alt="..." />
      <Title text="Informações Pessoais"/>
      <p>
        {briefDescription}
      </p>
    </div>
  );
}
