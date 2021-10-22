export default function Header(props) {
  const {name, lastName} = props
  return (
    <header id="cabecalho">
      <h1>
        <span> {name} </span> {lastName}
      </h1>
    </header>
  )
}