import Idioms from "./LanguangesSkills";
import PersonalInformations from "./Personal";

export default function SideBar() {
  return (
    <aside id="lateral">
      <PersonalInformations />
      <Idioms/>
    </aside>
  );
}
