import profileImage from '../../assets/images/profile_photo.jpg'
import { ProfileAbout, ProfileText } from './styles'

export const About = () => {
  return (
    <div className="container">
      <h2>About Me</h2>
      <ProfileAbout>
        <img src={profileImage} alt="my photo" />
        <ProfileText>
          <p>
            Estou em busca de reiniciar minha carreira profissional, recomecei
            meus estudos recentemente na área da programação e posso dizer que
            achei algo que realmente gosto de fazer.
          </p>
          <p>
            Tenho um perfil bem versátil pois trabalhei em áreas bem diferentes
            uma da outra, gosto de aprender rápido o sistema de trabalho e o
            trabalho em si para que eu possa render melhor no meu trabalho.
          </p>
          <p>
            Estou ansioso para recomeçar minha carreira nessa área, e
            entusiasmado para fazer parte de uma ótima equipe!
          </p>
        </ProfileText>
      </ProfileAbout>
    </div>
  )
}

export default About
