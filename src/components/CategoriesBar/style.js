import styled from 'styled-components'

const Container = styled.View`
  width: 100%;
  padding-top: 4px;
  padding-bottom: 4px;
  background-color: ${props => props.theme.color.background};
`

const Separator = styled.View`
  width: 25px;
`

export { Container, Separator }
