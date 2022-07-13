import styled from 'styled-components'

const Container = styled.View`
  justify-content: flex-end;
  width: 100%;
  /* height: ${props => (props.height ? props.height : 64)}px; */
  padding-bottom: 8px;
  background-color: #fff;
`

const BarContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding-left: 15px;
  padding-right: 15px;
`

const AvatarContainer = styled.View``

const LocationButtonContainer = styled.View`
  margin-left: 10px;
`

const ActionsContainer = styled.View`
  flex-direction: row;
`

const Spacer = styled.View`
  flex-grow: 1;
`

export {
  Container,
  BarContainer,
  AvatarContainer,
  LocationButtonContainer,
  ActionsContainer,
  Spacer,
}
