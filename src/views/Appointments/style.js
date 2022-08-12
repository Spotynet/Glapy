import styled from 'styled-components'

const Container = styled.View`
  flex: 1;
  height: 190px;
  background-color: ${props => props.theme.color.background};
`

const Header = styled.View`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 99;
`

const Body = styled.View`
  flex: 1;
`

const Separator = styled.View`
  height: 30px;
`

export { Container, Header, Body, Separator }
