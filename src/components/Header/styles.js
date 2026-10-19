import styled from 'styled-components';

export const ContainerHeader = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 8px 3%;
  color: #1685FF;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 2;
  position: fixed;
  top: 0;
  left: 0;

  img {
    width: 200px;
    height: 110px;
  }
`;

export const Menu = styled.ul`
  display: flex;
  list-style: none;
  gap: 50px;
`;

export const Li = styled.li`
  font-weight: 700;
  cursor: pointer;
  font-size: 22px;
  position: relative;

  a {
    color: #EAF2FF;
    text-decoration: none;

    &::after {
      content: '';
      height: 3px;
      width: ${(props) => (props.$isActive ? '100%' : 0)};
      background-color: #0066F9;
      position: absolute;
      bottom: -10px;
      left: 50%;
      transform: translateX(-50%);
      transition: width 0.5s ease-in-out;
    }

    &:hover::after {
      width: 100%;
    }
  }
`;
