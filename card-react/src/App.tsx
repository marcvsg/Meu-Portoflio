import './App.css'
import { LinkedinLogo, InstagramLogo, GithubLogo } from '@phosphor-icons/react'

function App() {
console.log("Olá dev!");

  return (
    <>
      <div className='header'>
        <img className='pfp' src="/img/me.jpeg" alt="Foto de Marcus" />
        <h1>Marcus Gomes</h1>
         <p>27 Anos, Rio de Janeiro - Brasil</p>
        <ul className='list-socials'>
          <li><a href="https://www.linkedin.com/in/marcusvsgomes/"><LinkedinLogo /></a></li>
          <li><a href="https://www.instagram.com/marcvsg/"><InstagramLogo /></a></li>
          <li><a href="https://github.com/marcvsg"><GithubLogo /></a></li>
          </ul>

        <ul className='list-skills'>
          <li>Python</li>
          <li>React</li>
          <li>HTML/CSS</li>

        </ul>

      <div className="divider"></div>
          <h2>Meus Projetos</h2>
        <div className="content">
          <p>Aqui estão alguns dos meus projetos recentes em desenvolvimento web e automação.</p>

          <div className='Projeto'>
            <h3>1. Comparador de Textos</h3>
            <p>Uma aplicação web que compara dois textos e destaca as diferenças entre eles, linhas adicionadas, linhas removidas, linhas alteradas.</p>
          </div>

          <div className='Projeto'>
            <h3>2. Automação de leitura com Web Scraping 🤖 (API BOT Discord)</h3>
            <p>Um bot criado em Python que monitora alterações de um determinado site e sempre quando houver uma atualização, ele detecta e avisa ao cliente.</p>
          </div>

          <div className='Projeto'>
            <h3>3. Sistema de Verificação 🤖 (API BOT Discord)</h3>
            <p>Um bot criado em Python que verifica usuários novos, puxando dados de uma API.</p>
          </div>

          <div className='Projeto'>
            <h3>4. Automação (Jupyter Notebook) de arquivos em um diretório. <a style={{color: "inherit", textDecoration: "none" }} href='https://github.com/marcvsg/Organizador'><GithubLogo /></a></h3>
            <p>Uma automação que ajuda muito na organização da pasta Download. Um simples clique e ela organiza arquivos.</p>
              <br></br>
              Aqui vai uma breve exemplo de como a automação organiza os arquivos:
              <br></br>
              {/* Aqui vai o card de código html */}

            <div className="card">
            <div className="code-editor">
              <code>
                Downloads/
                <br></br>
                ├── Documentos
                <br></br>
                ├── Compactados
                <br></br>
                ├── Imagens
                <br></br>
                ├── Documentos
                <br></br>
                └── Executáveis
                <br></br>

                </code>
            </div>
            </div>
          </div>

          <div className='Projeto'>
            <h3>5. Sistema de cadastro de Clientes <a style={{color: "inherit", textDecoration: "none" }} href='https://github.com/marcvsg/mc-backend'><GithubLogo /></a></h3>
            <p>Uma aplicação web simples para cadastrar e gerenciar informações de clientes, incluindo nome, email e telefone.</p>
          </div>
        </div>

      </div>
    </>
  )
}

export default App