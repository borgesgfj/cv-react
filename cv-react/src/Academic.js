import TableRow from "./TableRow";
import Title from "./Title";
import ocupationData from "./moc-academic.json";

export default function Academic() {
  const { dataCv } = ocupationData;
  return (
    <article id="formacao">
      <Title text="Formação" />
      <table id="tabela-formacao">
        {Object.keys(dataCv).map((key) => {
          return (
            <TableRow
              period={dataCv[key]["period"]}
              occupation={key}
              institution={dataCv[key]["institution"]}
            />
          );
        })}
      </table>
    </article>
  );
}
