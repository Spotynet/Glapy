import styled from 'styled-components'

const Container = styled.View`
  flex: 1;
  background-color: #fff;
`

const Header = styled.View`
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  z-index: 99;
`

const Body = styled.View`
  flex: 1;
`

const TabBarContainer = styled.View`
  position: absolute;
  bottom: 0;
  width: 100%;
  align-items: center;
`

export { Container, Header, Body, TabBarContainer }
