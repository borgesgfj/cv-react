/* import logo from './logo.svg'; */
import './App.css';
import Header from './Header';
import profile from "./utils/profile.jpg"

function App() {
  return (
    <div>
      <Header name="Gilberto" lastName ="Ferreira Borges Jr."/>
      <section id="maincontent">
        <article id="aboutme">
          <h1>Sobre mim</h1>
          <p>
            Meu nome é Gilberto, possuo formação em física (graduação, mestrado
            e doutorado) e atualmente sou estudante de programação da PodCodar
            School. Meus estudos em programação possuem como foco
            desenvolvimento web Front-End. Além dos estudos em computação tenho
            interesse em informação e computação quântica.
          </p>
          <p>
            Sou uma pessoa dedicada aos estudos e gosto de aprofundar nos temas
            relacionados aos trabalhos nos quais me envolvo, afim de buscar
            soluções para os problemas. Gosto de trabalhar em equipe e de trocar
            conhecimentos. Estou iniciando na área de programação em busca de
            novos desafios pessoais e profissionais.
          </p>
        </article>
        <article id="formacao">
          <h1>Formação</h1>
          <table id="tabela-formacao">
            <tr>
              <td class="c1">06/2021 - Atual.</td>
              <td class="c2">Desenvolvedor Front-End</td>
              <td class="c3">PodCodar School</td>
            </tr>
            <tr>
              <td class="c1">03/2014 - 04/2018</td>
              <td class="c2">Doutorado em Física</td>
              <td class="c3">Universidade Federal de Minas Gerais</td>
            </tr>
            <tr>
              <td class="c1">03/2011 - 06/2013</td>
              <td class="c2">Mestrado em Física</td>
              <td class="c3">Universidade Federal de Minas Gerais</td>
            </tr>
            <tr>
              <td class="c1">03/2007 - 12/2010</td>
              <td class="c2">Bacharelado em Física de Materiais</td>
              <td class="c3">Universidade Federal de Uberlândia</td>
            </tr>
          </table>
        </article>
        <article id="experiencias">
          <h1>Experiências profissionais</h1>
          <table id="tabela-experiencias">
            <tr>
              <td class="c1">02/2019 - 01/2021</td>
              <td class="c2">Professor substituto de Física</td>
              <td class="c3">Universidade Federal de Uberlândia</td>
            </tr>
            <tr>
              <td class="c1">08/2018 - 12/2018</td>
              <td class="c2">Professor de Matemática</td>
              <td class="c3">Centro Educacional Rogêdo</td>
            </tr>
            <tr>
              <td class="c1">03/2013 - 02/2014</td>
              <td class="c2">Professor substituto de Física</td>
              <td class="c3">Universidade Federal de Uberlândia</td>
            </tr>
          </table>
        </article>
        <article>
          <h1>Linguagens de programação e ferramentas computacionais</h1>
          <table id="tabela-ferramentas">
            <tr>
              <td class="ce">HTML</td>
              <td class="cd">Iniciante</td>
            </tr>
            <tr>
              <td class="ce">CSS</td>
              <td class="cd">Iniciante</td>
            </tr>
            <tr>
              <td class="ce">JavaScript</td>
              <td class="cd">Iniciante</td>
            </tr>
            <tr>
              <td class="ce">Git</td>
              <td class="cd">Iniciante</td>
            </tr>
            <tr>
              <td class="ce">Phyton</td>
              <td class="cd">Básico</td>
            </tr>
            <tr>
              <td class="ce">Latex</td>
              <td class="cd">Intermediário</td>
            </tr>
            <tr>
              <td class="ce">MatLab</td>
              <td class="cd">Intermediário</td>
            </tr>
          </table>
        </article>
        </section>
      <aside id="lateral">
          <img
            id="fotocv"
            src= {profile}
            alt="..."
          />
          <h1>Informações Pessoais</h1>
          <p>
            33 anos, doutor em física, desenvolvedor Front-End iniciante,
            brasileiro
          </p>
          <h1>Contato e redes sociais</h1>
          <p>borgesgfj@gmail.com</p>
          <p>
            <b>Twitter</b>:<a
              href="https://twitter.com/gil_physics"
            >
              @gil_physics</a
            >
          </p>
          <h1>Idiomas</h1>
          <p><b>Português</b></p>
          <p class="idiomas-skills">(nativo)</p>
          <p><b> Inglês </b></p>
          <p class="idiomas-skills">
            (Compreende bem, lê bem, escreve bem, fala bem)
          </p>
          <p><b>Espanhol</b></p>
          <p class="idiomas-skills">
            (Compreende bem, lê bem, escreve razoável, fala razoável)
          </p>
        </aside>
    </div>
  );
}

export default App;
