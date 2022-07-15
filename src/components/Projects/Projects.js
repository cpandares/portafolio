import { Slide } from "react-slideshow-image";


import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionDivider,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <Section nopadding id="projects">
    <SectionDivider />
    <SectionTitle main>Projects</SectionTitle>

    <GridContainer className="slide-container">
      <Slide autoplay transitionDuration={500}>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <Img src={p.image} />
              <TitleContent>
                <HeaderThree title>{p.title}</HeaderThree>
                <Hr />
              </TitleContent>
              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Stack</TitleContent>
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                {p.source != "" && (
                  <ExternalLinks href={p.source} target="_blank">
                    Source
                  </ExternalLinks>
                )}
                {p.visit != "" && (
                  <ExternalLinks href={p.visit} target="_blank">
                    Visit
                  </ExternalLinks>
                )}
              </UtilityList>
            </BlogCard>
          );
        })}
      </Slide>
    </GridContainer>
  </Section>
);

export default Projects;
