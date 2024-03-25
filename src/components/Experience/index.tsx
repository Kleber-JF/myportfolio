import { useState } from 'react'
import { DetailText, ExperienceContainer } from './styles'

type JobExperience = {
  title: string
  location: string
  descriptions: string[]
}

type DetailState = {
  isVisible: boolean
}

const jobs: JobExperience[] = [
  {
    title: 'Machine Operator',
    location: 'Murata Manufacturing (Echizen/Fukui/Japão) 03/18-09/22',
    descriptions: [
      'Trabalho em equipe, para organizar e separar todo o serviço do dia.',
      'Facilidade em absorver novos conhecimentos e habilidades, em menos de um ano, me tornei treinador do setor. Sendo responsável pelo preparo de novos integrantes da equipe, onde desenvolvi a comunicação, empatia e flexibilidade.'
    ]
  },
  {
    title: 'Sushi Chef',
    location: 'Iruca Sushi (São Paulo/São Paulo) 01/17-12/17',
    descriptions: [
      'Organização e otimização do tempo, para realizar todas as tarefas necessárias, como limpeza completa do estabelecimento, preparação dos alimentos e atendimento dos clientes.',
      'Facilidade de adaptação, com foco e determinação, em um mês me tornei o responsável por todo o preparo dos pratos frios.'
    ]
  },
  {
    title: 'Teacher of Geometry and Optical Physics',
    location:
      'CUCA(UNESP) - Curso Unificado do Campus Araraquara (Araraquara/São Paulo) 04/12-12/12',
    descriptions: [
      'Organização e preparo dos materiais, aulas e exercicios a serem ministradas.',
      'Considerado o melhor professor pelos alunos no ano de 2012.'
    ]
  },
  {
    title: 'Machine Operator',
    location: 'Murata Manufacturing (Echizen/Fukui/Japão) 10/07-12/08',
    descriptions: [
      'Responsável pela produção de circuitos impressos e verificação das mesmas, utlizando microscópio.',
      'Sub-líder da seção, responsável por repassar o serviço do dia para os membros da equipe, traduzindo o que o chefe do setor queria.'
    ]
  }
]

export const Experience = () => {
  const [detailStates, setDetailStates] = useState<DetailState[]>(
    jobs.map(() => ({ isVisible: false }))
  )
  const toggleDetail = (index: number) => {
    setDetailStates((prevStates) => {
      const newStates = [...prevStates]
      newStates[index] = { isVisible: !newStates[index].isVisible }
      return newStates
    })
  }

  return (
    <div className="container">
      <h2>Experience</h2>
      {jobs.map((job, index) => (
        <ExperienceContainer key={job.title}>
          <button type="button" onClick={() => toggleDetail(index)}>
            <h3>{job.title}</h3>
          </button>
          <DetailText
            className={detailStates[index].isVisible ? 'viewDetail' : ''}
          >
            <br />
            <span>{job.location}</span>
            <hr />
            <ul>
              {job.descriptions.map((description) => (
                <li key={description}>{description}</li>
              ))}
            </ul>
          </DetailText>
        </ExperienceContainer>
      ))}
    </div>
  )
}

export default Experience
