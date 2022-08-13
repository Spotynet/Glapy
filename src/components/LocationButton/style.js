import styled from 'styled-components'

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: ${props => props.theme.color.backgroundAlt};
  border-radius: 20px;
  height: 40px;
`

const LeftContainer = styled.View`
  margin: 7px 8px;
`

const RightContainer = styled.View`
  margin: 12px 8px;
`

const TitleGroup = styled.View`
  padding-top: 4px;
  padding-bottom: 4px;
  flex: 1;
`

const Title = styled.Text`
  font-family: ${props => props.theme.font.primary};
  font-size: 14px;
  line-height: 14px;
  font-weight: 700;
  color: ${props => props.theme.color.textAlt};
`

const Subtitle = styled.Text`
  font-family: ${props => props.theme.font.primary};
  font-size: 10px;
  line-height: 10px;
  font-weight: 400;
  color: ${props => props.theme.color.textAlt};
`

export { Container, LeftContainer, RightContainer, TitleGroup, Title, Subtitle }
