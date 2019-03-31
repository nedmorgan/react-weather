import styled from 'styled-components'

export const SearchContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: 35vw;
justify-content: center;

label {
  color: whitesmoke;
  font-size: 5vw;
}

.button-div {
  display: flex;
  justify-content: center;
}

button {
  font-size: 3vw !important;
}

@media (max-width: 768px) {
  height: 50vw;
}

.form-container {
  width: 75%;
}
`