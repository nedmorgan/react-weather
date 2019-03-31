import styled from 'styled-components'

export const HeaderContainer = styled.div`
  position: static;
  margin-top: 2vw;
  display: flex;
  justify-content: center;
  background-color: #fafafa;
  margin: 0;
  border-bottom: 1px solid black;

  .header {
    color: black;
    font-family: 'Satisfy', cursive;
    font-size: 3em;
  }

  a:hover {
    cursor: pointer;
  }

  @media (max-width: 768px) {
  .header {
    font-size: 1.25em;
  }
}
`