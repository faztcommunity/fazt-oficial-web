import React from 'react';
import styled from '@Styles/styled';
import CardGroupProjects from '@Organisms/CardGroupProjects';
import Subtitle from '@Atoms/Subtitle';
import Description from '@Atoms/Description';
import Imagen1 from '@Assets/images/CircuitoLeft.svg';
import Imagen2 from '@Assets/images/CircuitoRight.svg';
import { screen } from '@Styles/theme';

const StyleProjects = styled.section`
  width: 100%;
  min-height: calc(100vh - 90px);
  height: max-content;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.light.color.secondary};
  .backgroundImages {
    z-index: 0;
    position: absolute;
    width: 100vw;
    display: none;
    justify-content: space-between;

    ${screen('xl')} {
      display: flex;
    }
  }
  .descripcion {
    z-index: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 50px 0px 50px 0px;

    &-ContainerTitle {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: max-content;

      h2 {
        padding-top: 100px;
        width: max-content;
        @media (max-width: 1140px) {
          padding-top: 64px;
        }
        @media (max-width: 720px) {
          width: 300px;
          padding-top: 0px;
        }
      }
      p {
        width: 650px;
        @media (max-width: 720px) {
          width: 300px;
        }
        padding-bottom: 42px;
      }
    }
  }
`;

const Projects: React.FC = () => (
  <StyleProjects>
    <div className="backgroundImages">
      <Imagen1 />
      <Imagen2 />
    </div>
    <div className="descripcion">
      <div className="descripcion-ContainerTitle">
        <Subtitle align="center" white size="sub1">
          Proyectos de la comunidad
        </Subtitle>
        <Description size="xl" align="center" white>
          En la comunidad podrás encontrar distintos proyectos para colaborar en diferentes tecnologias.
          Tenemos 4 proyectos principales que son:
        </Description>
      </div>
      <CardGroupProjects />
    </div>
  </StyleProjects>
);

export default Projects;