import ContactInformation from "./Contact";
import Avatar from "./Avatar";
import profile from "./utils/profile.jpg";
import SocialMedias from "./SocialMedia";
export default function PersonalInformations() {
  return (
    <div className="PersonalInfos">
      <Avatar
        profilePicUrl={profile}
        briefDescription="33 anos, doutor em Física, desenvolvedor Front-End Iniciante, brasileiro"
      />
      <ContactInformation mailAdress="borgesgfj@gmail.com" />
      <SocialMedias
        socialNetwork="LinkedIn"
        profileUrl="https://www.linkedin.com/in/gilberto-borges-a048439a/"
        userName ="Gilberto Borges"
      />
    </div>
  );
}
