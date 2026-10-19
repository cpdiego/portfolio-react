import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 40px;
  width: 100%;
  min-height: 100vh;
`;

export const ContainerImage = styled.div`
  z-index: 1;
  padding: 20px;
  width: 50%;
  display: flex;
  justify-content: center;

  img {
    width: 60%;
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    border: 4px solid transparent;
    object-fit: contain;
    box-shadow: 0px 0px 25px 8px rgb(234 242 255 / 100%);
  }
`;

export const ContainerInfo = styled.div`
  z-index: 1;
  padding: 20px;
  width: 50%;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 5rem;
    font-weight: 700;
    color: #EAF2FF;
  }

  h3 {
    font-size: 2rem;
    font-weight: 700;
    background: linear-gradient(90deg,rgba(0, 102, 249, 1) 0%, rgba(234, 242, 255, 1) 50%);
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    color: transparent;
  }

  p {
    font-size: 17px;
    color: #EAF2FF;
    width: 65%;
    margin-top: 20px;
  }
`;
