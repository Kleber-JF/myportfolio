import { Card, CardsContainer } from './styles'

export const SkillCards = () => {
  return (
    <div className="container">
      <h2>Skills</h2>
      <CardsContainer>
        <Card>
          <h3>Front-End:</h3>
          <ul>
            <li>
              <span className="devicon-html5-plain colored" />
              <span>HTML5</span>
            </li>
            <li>
              <span className="devicon-css3-plain colored" />
              <span>CSS</span>
            </li>
            <li>
              <span className="devicon-javascript-plain colored" />
              <span>JavaScript</span>
            </li>
            <li>
              <span className="devicon-typescript-plain colored" />
              <span>TypeScript</span>
            </li>
            <li>
              <span className="devicon-react-original colored" />
              <span>React</span>
            </li>
            <li>
              <span className="devicon-vuejs-plain colored" />
              <span>Vue.JS</span>
            </li>
            <li>
              <span className="devicon-bootstrap-plain colored" />
              <span>Bootstrap</span>
            </li>
            <li>
              <span className="devicon-sass-original colored" />
              <span>Sass</span>
            </li>
            <li>
              <span className="devicon-jquery-plain-wordmark colored" />
              <span>JQuery</span>
            </li>
          </ul>
        </Card>
        <Card>
          <h3>Back-End:</h3>
          <ul>
            <li>
              <span className="devicon-python-plain colored" />
              <span>Python</span>
            </li>
            <li>
              <span className="devicon-poetry-plain colored" />
              <span>Poetry</span>
            </li>
            <li>
              <span className="devicon-django-plain" />
              <span>Django</span>
            </li>
            <li>
              <span className="devicon-djangorest-line" />
              <span>Django Rest Framework</span>
            </li>
            <li>
              <span className="devicon-docker-plain colored" />
              <span>Docker</span>
            </li>
            <li>
              <span className="devicon-postgresql-plain colored" />
              <span>PostgreSQL</span>
            </li>
            <li>
              <span className="devicon-mysql-plain-wordmark colored" />
              <span>mySQL</span>
            </li>
            <li>
              <span className="devicon-flask-original-wordmark" />
              <span>Flask</span>
            </li>
            <li>
              <span className="devicon-pytest-plain-wordmark colored" />
              <span>Pytest</span>
            </li>
            <li>
              <span className="devicon-githubactions-plain colored" />
              <span>Git Actions</span>
            </li>
          </ul>
        </Card>
        <Card>
          <h3>Learning:</h3>
          <ul>
            <li>
              <span className="devicon-java-plain colored" />
              <span>JAVA</span>
            </li>
            <li>
              <span className="devicon-angular-plain colored" />
              <span>Angular</span>
            </li>
            <li>
              <span className="devicon-salesforce-plain colored" />
              <span>Salesforce</span>
            </li>
            <li>
              <span className="devicon-azure-plain colored" />
              <span>Azure</span>
            </li>
          </ul>
        </Card>
      </CardsContainer>
    </div>
  )
}

export default SkillCards
