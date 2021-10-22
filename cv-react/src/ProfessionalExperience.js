import TableRow from "./TableRow";
import Title from "./Title";
import professionalData from "./moc-academic.json";

export default function ProfessioinalExperiences() {
  const { professionalExp } = professionalData;
  return (
    <article id="experiencias">
      <Title text="Experiências Profissionais" />
      <table id="tabela-experiencias">
        {Object.keys(professionalExp).map((key) => {
          return (
            <TableRow
              period={professionalExp[key]["period"]}
              occupation={key}
              institution={professionalExp[key]["institution"]}
            />
          );
        })}
      </table>
    </article>
  )
}
