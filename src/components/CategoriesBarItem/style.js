import styled from 'styled-components'

const Container = styled.View`
  align-items: center;
`

const Title = styled.Text`
  font-family: ${props => props.theme.font.primary};
  font-size: 12px;
  font-weight: 400;
  margin-top: 5px;
  color: ${props =>
    props.active ? props.theme.color.primary : props.theme.color.text};
`

// const Indicator = styled.View`
//   width: 100%;
//   height: 2px;
//   background-color: red;
//   margin-top: 2px;
// `

export { Container, Title }
