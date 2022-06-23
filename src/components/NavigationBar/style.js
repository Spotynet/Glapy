import styled from 'styled-components'

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 84px;
  padding-left: 15px;
  padding-right: 15px;
  background-color: cyan;
`

const AvatarContainer = styled.View``

const LocationButtonContainer = styled.View`
  width: 100px;
  height: 32px;
  margin-left: 10px;
  background-color: yellow;
`

const ActionsContainer = styled.View`
  width: 100px;
  height: 32px;
  background-color: purple;
`

const Spacer = styled.View`
  flex-grow: 1;
`

export {
  Container,
  AvatarContainer,
  LocationButtonContainer,
  ActionsContainer,
  Spacer,
}
