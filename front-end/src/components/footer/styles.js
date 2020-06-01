import styled from 'styled-components';

export const Container = styled.div`
  
  display: flex;

  flex-direction: column;

  justify-content: center;
  align-items: center;

  margin-top: 10px;

  height: 80px;
  width: 100vw;

  p{
    color: #6d7680;
  }
`;

export const LogoContainer = styled.div`

  height: 40px;
  width: 30px;

  margin-bottom: 10px;

  background-image: url(${props => props.img});
  background-position: 50% 50%;
  background-size: cover;
`
