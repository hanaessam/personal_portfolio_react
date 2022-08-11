import {
  Col,
  Container,
  Row,
  Nav,
  TabContainer,
  TabContent,
  TabPane,
} from "react-bootstrap";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "BMI Calculator",
      description: "Flutter App",
      imgUrl: projImg1,
    },
    {
      title: "Quizzles",
      description: "Flutter Game",
      imgUrl: projImg2,
    },
    {
      title: "Clima",
      description: "Flutter Weather App",
      imgUrl: projImg3,
    },
  ];
  return (
    <section className="projects" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
              itaque, aliquam velit corrupti quis voluptatum repellendus
              nesciunt fuga sint eveniet ipsam provident nisi reprehenderit
              saepe magnam dignissimos! A, quis ex?
            </p>
            <TabContainer id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Flutter</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="second">Web Dev</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                  <Nav.Link eventKey="third">UI/UX</Nav.Link>
                </Nav.Item>
              </Nav>
              <TabContent>
                <TabPane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </TabPane>
                <TabPane eventKey="second">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae iure hic voluptatem officiis, sint molestias, quia reprehenderit corporis placeat error corrupti dolore exercitationem a fugiat, in nam dolores quos doloremque?</TabPane>
                <TabPane eventKey="third">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente ad quaerat dignissimos alias pariatur facere, voluptates dolores! Repellat aliquam itaque mollitia maiores officiis, placeat in doloremque iste culpa rem quod!</TabPane>
              </TabContent>
            </TabContainer>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="csjkdjh"/>
    </section>
  );
};
