import { useState } from 'react'
import efoodImg from '../../assets/images/efood.png'
import jwImg from '../../assets/images/john_wick.png'
import conviteImg from '../../assets/images/convite_niver.png'
import disneyImg from '../../assets/images/clone_disney.png'
import agendaImg from '../../assets/images/agenda_contato.png'
import lojaImg from '../../assets/images/loja_games.png'
import twitterImg from '../../assets/images/twitter_generic.png'
import close from '../../assets/images/close.png'
import {
  LinkList,
  Modal,
  ModalContent,
  ModalLinks,
  ModalList,
  ModalText,
  ProjectContainer,
  ProjectImage,
  ProjectText
} from './styles'

type Project = {
  title: string
  image: string
  description: string
  techs: string[]
  links: string[]
}

const projectsList: Project[] = [
  {
    title: 'Projeto Twitter Genérico',
    image: twitterImg,
    techs: ['React', 'HTML', 'Styled-Components', 'Yup', 'Formik', 'API'],
    description:
      'Projeto de página de pedidos de comida online, listando restaurantes e seus respectivos menu através de requisição de API.',
    links: [
      'https://github.com/Kleber-JF/projeto-final-twitter',
      'https://kleberjhunf.pythonanywhere.com/'
    ]
  },
  {
    title: 'Projeto Efood',
    image: efoodImg,
    techs: ['React', 'HTML', 'Styled-Components', 'Yup', 'Formik', 'API'],
    description:
      'Projeto de página de pedidos de comida online, listando restaurantes e seus respectivos menu através de requisição de API.',
    links: [
      'https://github.com/Kleber-JF/projetofinal',
      'https://projetofinal-pi.vercel.app/'
    ]
  },
  {
    title: 'John Wick Fan Page',
    image: jwImg,
    techs: ['Gulp', 'HTML', 'Sass'],
    description:
      'Projeto de fan page dos filmes de John Wick, com todos os personagens listados por filme.',
    links: [
      'https://github.com/Kleber-JF/M21_exercicio/tree/main',
      'https://m21-exercicio.vercel.app/'
    ]
  },
  {
    title: 'Convite de aniversário',
    image: conviteImg,
    techs: ['JavaScript', 'HTML', 'Sass'],
    description:
      'Projeto de um convite de evento, com contador regressivo para a data, imagens responsivas e animações',
    links: [
      'https://github.com/Kleber-JF/exercicio_M22/tree/main',
      'https://exercicio-m22-rho.vercel.app/'
    ]
  },
  {
    title: 'Clone landing page da Disney+',
    image: disneyImg,
    techs: ['Gulp', 'Sass', 'JavaScript', 'HTML'],
    description:
      'Projeto de clone da landing page da Disney +, para praticar minhas habilidades.',
    links: [
      'https://github.com/Kleber-JF/clone_disneyplus',
      'https://clone-disneyplus-gamma-neon.vercel.app/'
    ]
  },
  {
    title: 'Agenda de contatos',
    image: agendaImg,
    techs: ['React', 'HTML', 'Styled-Components', 'Redux', 'TypeScript'],
    description:
      'Projeto de agenda de contatos, com funções de registro, ordem alfabética, edição e exlusão de contatos',
    links: [
      'https://github.com/Kleber-JF/exercicio_M32',
      'https://agenda-contatos-kjf.vercel.app/'
    ]
  },
  {
    title: 'Landing page de uma loja de games',
    image: lojaImg,
    techs: ['React', 'HTML', 'Styled-Components', 'Yup', 'Formik', 'API'],
    description:
      'Projeto de fan page dos filmes de John Wick, feito com Gulp e Sass',
    links: [
      'https://github.com/Kleber-JF/Projeto03',
      'https://projeto03-mauve.vercel.app/'
    ]
  }
]

export const Projects = () => {
  const [projectIndex, setProjectIndex] = useState(0)
  const [modal, setModal] = useState(false)

  const handleProjectClick = (index: number) => {
    setProjectIndex(index)
  }

  return (
    <div className="container">
      <h2>Projects</h2>
      <ProjectContainer>
        <div>
          <ProjectImage
            src={projectsList[projectIndex].image}
            alt={projectsList[projectIndex].title}
          />
          <ProjectText>
            <h3>{projectsList[projectIndex].title}</h3>
            <p>{projectsList[projectIndex].description}</p>
            <button onClick={() => setModal(true)}>+ Info</button>
          </ProjectText>
        </div>
        <Modal className={modal ? 'visible' : ''}>
          <ModalContent>
            <img
              src={close}
              alt="icone fechar"
              onClick={() => setModal(false)}
            />
            <ModalText>
              <img src={projectsList[projectIndex].image} />
              <ModalLinks>
                <a
                  className="devicon-github-original-wordmark"
                  href={projectsList[projectIndex].links[0]}
                  target="blank"
                >
                  GitHub
                </a>
                <a
                  className="devicon-vercel-original-wordmark"
                  href={projectsList[projectIndex].links[1]}
                  target="blank"
                >
                  Vercel
                </a>
              </ModalLinks>
              <div>
                <h4>{projectsList[projectIndex].title}</h4>
                <p>{projectsList[projectIndex].description}</p>
              </div>
              <ModalList>
                <h4>Techs:</h4>
                <ul>
                  {projectsList[projectIndex].techs.map((tech, index) => (
                    <li key={index}>{tech}</li>
                  ))}
                </ul>
              </ModalList>
            </ModalText>
          </ModalContent>
          <div className="overlay" onClick={() => setModal(false)}></div>
        </Modal>
        <div>
          <nav>
            <LinkList>
              {projectsList.map((project, index) => (
                <li key={project.title}>
                  <button
                    type="button"
                    onClick={() => handleProjectClick(index)}
                  >
                    {project.title}
                  </button>
                </li>
              ))}
            </LinkList>
          </nav>
        </div>
      </ProjectContainer>
    </div>
  )
}

export default Projects
