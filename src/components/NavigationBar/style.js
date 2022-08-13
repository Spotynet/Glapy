import styled from 'styled-components'

const Container = styled.View`
  justify-content: flex-end;
  background-color: ${props => props.theme.color.background};
`

const BarContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 4px 16px;
`

const AvatarContainer = styled.View`
  margin-left: 16px;
`

const LocationButtonContainer = styled.View`
  flex: 1;
`

export { Container, BarContainer, AvatarContainer, LocationButtonContainer }
