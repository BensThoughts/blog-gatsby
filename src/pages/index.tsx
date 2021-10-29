import * as React from "react";

import MaxWidthWrapper from '@app/components/MaxWidthWrapper';
import GridWrapper from '@app/components/GridWrapper';
import AvatarCard from '@app/components/Home/AvatarCard';
import ProjectsCard from '@app/components/Home/ProjectsCard';
import SectionTitle from '@app/components/SectionTitle';
import {Projects} from '@app/components/Home/ProjectsCard/projects';
import Technologies from '@app/components/Home/Technologies';
import TechnologiesBox from '@app/components/Home/Technologies/TechnologiesBox';
import NetlifyForm from '@app/components/Home/NetlifyForm';
import App from '@app/components/Layout/App';
import SEO from '@app/components/Layout/SEO';

export default function IndexPage() {
  return (
    <>
      <SEO 
        title="Home"
      />
      <App>
        <MaxWidthWrapper>
          <GridWrapper charWidth={100}>
            {/* About Section */}
            <SectionTitle id="about-section">
              <span className="text-icon-secondary">[</span>
                    &nbsp;01. About Me&nbsp;
              <span className="text-icon-secondary">]</span>
            </SectionTitle>
            <AvatarCard />
    
            {/* Technologies Section */}
            <SectionTitle id="technologies-section">
              <span className="text-icon-secondary">[</span>
                    &nbsp;02. Technologies&nbsp;
              <span className="text-icon-secondary">]</span>
            </SectionTitle>
            <div className="flex items-center justify-center">
              <TechnologiesBox />
            </div>
            <div className="flex items-center justify-center">
              <Technologies />
            </div>
    
            {/* Projects Section */}
            <SectionTitle id="projects-section">
              <span className="text-icon-secondary">[</span>
                    &nbsp;03. Projects&nbsp;
              <span className="text-icon-secondary">]</span>
            </SectionTitle>
            {Projects.map((project, idx) => (
              <ProjectsCard
                key={project.title}
                title={project.title}
                description={project.description}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
                cloudinaryImgPath={project.cloudinaryImgPath}
                imgAlt={project.imgAlt}
                technologies={project.technologies}
                reversed={idx % 2 === 0 ? false : true}
              />
            ))}
    
            <SectionTitle id="contact-section">
              <span className="text-icon-secondary">[</span>
                    &nbsp;04. Contact&nbsp;
              <span className="text-icon-secondary">]</span>
            </SectionTitle>
            <NetlifyForm />
          </GridWrapper>
        </MaxWidthWrapper>
      </App>
    </>
  );
};


// markup
// const IndexPage = () => {
//   return (
//     <main>
//       <title>Home Page</title>

//     </main>
//   )
// }

// export default IndexPage
