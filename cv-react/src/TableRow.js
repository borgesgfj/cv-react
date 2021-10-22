export default function TableRow(props) {
  const {period, occupation, institution} = props
  return (
    <tr>
      <td className="c1">{period}</td>
      <td className="c2">{occupation}</td>
      <td className="c3">{institution}</td>
    </tr>
  )
}