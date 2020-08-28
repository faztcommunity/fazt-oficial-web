import React from 'react';
import styled from '@Styles/styled';
import Description from '@Atoms/Description';
import Button from '@Atoms/Button';
import Subtitle from '@Atoms/Subtitle';

const StyledHowToJoinContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin-bottom: 16px;
    @media (max-width: 536px) {
      font-size: 32px;
      line-height: 35px;
    }
  }
  button {
    margin-top: 32px;
  }
  margin: auto;
  .descriptionClassName {
    color: ${({ theme }) => theme.neutrale.gray[600]};
    text-align: center;
    font-family: ${({ theme }) => theme.fontFamily.body};
    font-size: 24px;
    line-height: 37px;
    width: 42vw;
    @media (max-width: 1024px) and (min-width: 535px) {
      width: 68vw;
    }
    @media (max-width: 536px) {
      font-size: 18px;
      line-height: 24px;
      width: 90vw;
    }
  }
`;

const StyledHowToJoin = styled.div`
  background: #ffffff;
  width: 100%;
  height: 80vh;
  justify-content: space-between;
  display: flex;
  align-items: center;
  @media (max-width: 1024px) {
    svg {
      display: none;
    }
  }
  .containerPasos {
    margin-top: 32px;
    h3 {
      font-weight: 700;
      font-size: 24px;
      @media (max-width: 536px) {
        font-size: 18px;
        line-height: 20px;
      }
      color: ${({ theme }) => theme.neutrale.gray[600]};
    }
    &-Image {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-top: 24px;
      &-Right {
        margin-right: 91px;
        @media (max-width: 536px) {
          margin-right: 30px;
        }
      }
      &-Left {
        margin-left: 91px;
        @media (max-width: 536px) {
          margin-left: 30px;
        }
      }
      &-Line {
        width: 400px;
        height: 2.5px;
        background-color: #d9d9d9;
        position: absolute;
        transform: translate(-5px, -15px);
        z-index: 1;
        @media (max-width: 536px) {
          width: 250px;
        }
      }
      &-container {
        z-index: 2;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        @media (max-width: 536px) {
          p {
            font-size: 13px;
            line-height: 18px;
          }
        }
        &-circulo {
          margin-bottom: 12px;
          display: flex;
          align-items: center;
          justify-content: center;
          font-family: 'Open Sans';
          font-size: 20px;
          font-weight: 700;
          background-color: #d9d9d9;
          border-radius: 100px;
          width: 57px;
          height: 57px;
          @media (max-width: 536px) {
            width: 39px;
            height: 39px;
            padding: 14px;
          }
        }
      }
    }
  }
`;

const HowToJoin: React.FC = () => {
  return (
    <StyledHowToJoin>
      <img src="/images/CircuitoLeft.svg" alt="" />
      <StyledHowToJoinContainer>
        <Subtitle size="sub1" as="h2" white={false} align="center">
          ¿Que esperas para unirte?
        </Subtitle>
        <span className="descriptionClassName">
          En Fazt Community somos más de 15,000 personas. Donde aprendemos juntos, trabajamos en equipo y a
          cambio obtienes experiencias y conocimientos en proyectos.
        </span>
        <div className="containerPasos">
          <Subtitle size="sub1" as="h3" white={false} align="center">
            Crece como profesional en 3 pasos
          </Subtitle>
          <div className="containerPasos-Image">
            <div className="containerPasos-Image-container containerPasos-Image-Right">
              <div className="containerPasos-Image-container-circulo">
                <span>1</span>
              </div>
              <Description>Unete</Description>
            </div>
            <span className="containerPasos-Image-Line" />
            <div className="containerPasos-Image-container">
              <div className="containerPasos-Image-container-circulo">
                <span>2</span>
              </div>
              <Description>Encuentra un proyecto</Description>
            </div>
            <div className="containerPasos-Image-container containerPasos-Image-Left">
              <div className="containerPasos-Image-container-circulo">
                <span>3</span>
              </div>
              <Description>Participa</Description>
            </div>
          </div>
        </div>
        <a href="https://discord.com/invite/37PHuNw">
          <Button text="Unirme a la comunidad" size="md" />
        </a>
      </StyledHowToJoinContainer>
      <img src="/images/CircuitoRight.svg" alt="" />
    </StyledHowToJoin>
  );
};
export default HowToJoin;
