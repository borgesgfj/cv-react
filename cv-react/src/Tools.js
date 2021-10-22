export default function Tools(props) {
  const {tool, level} = props
  return (
    <tr>
      <td className="ce">{tool}</td>
      <td className="cd">{level}</td>
    </tr>
  )
}