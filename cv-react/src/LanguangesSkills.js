import Title from "./Title";
import idioms from "./moc-academic.json";

function NativeLanguage(props) {
  return (
    <div id="nativeIdiomContainer">
      <p>
        <b>{props.nativeLanguage}</b>
      </p>
      <p className="idiomas-skills">(nativo)</p>
    </div>
  );
}

function ForeignIdiom(props) {
  const { foreignLanguage, comprehension, read, write, speak } = props;
  return (
    <div>
      <p>
        <b> {foreignLanguage} </b>
      </p>
      <p className="idiomas-skills">
        ({comprehension}, {read}, {write}, {speak})
      </p>
    </div>
  );
}

export default function Idioms() {
  const { languageSkills } = idioms;
  return (
    <div>
      <Title text="Idiomas" />
      <NativeLanguage nativeLanguage="Português" />
      {Object.keys(languageSkills).map((key) => {
        return (
          <ForeignIdiom
            foreignLanguage={key}
            comprehension={languageSkills[key]["comprehension"]}
            read={languageSkills[key]["read"]}
            write={languageSkills[key]["write"]}
            speak={languageSkills[key]["speak"]}
          />
        );
      })}
    </div>
  );
}
