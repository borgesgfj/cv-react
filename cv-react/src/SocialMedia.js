export default function SocialMedias(props) {
  const {socialNetwork, profileUrl, userName} = props
  return (
    <p>
      <b>{socialNetwork}</b>: <br />
      <a href= {profileUrl}>
        {userName}
      </a>
    </p>
  );
}
