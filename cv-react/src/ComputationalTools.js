import Title from "./Title";
import skills from "./moc-academic.json";
import Tools from "./Tools";
export default function ComputationalTools() {
  const { computationalSkills } = skills;
  return (
    <article>
      <Title text="Linguagens de programação e ferramentas computacionais" />
      <table id="tabela-ferramentas">
        {Object.keys(computationalSkills).map((key) => {
          return (
            <Tools
              tool={key}
              level={computationalSkills[key]["level"]}
            />
          );
        })}
      </table>
    </article>
  );
}
