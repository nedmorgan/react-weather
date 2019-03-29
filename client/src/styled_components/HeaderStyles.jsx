import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: static;
  margin-top: 2vw;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  margin: 0;
  border-bottom: 1px solid black;

  a {
    color: black;
    font-family: 'Fira Sans', sans-serif;
    font-size: 4vw;
  }

  a:hover {
    cursor: pointer;
  }
`