import styled from 'styled-components'

const Container = styled.View`
  padding-top: 20px;
`

const ImageContainer = styled.View`
  background-color: #d9d9d9;
  border-radius: 15px;
  overflow: hidden;
`

const LogoContainer = styled.View`
  position: absolute;
  top: 0;
  align-self: center;
`

const FavButtonContainer = styled.View`
  position: absolute;
  top: 32px;
  right: 12px;
  width: 28px;
  height: 25px;
`

const PageIndicatorContainer = styled.View`
  position: absolute;
  bottom: 12px;
  align-self: center;
  width: 100%;
  height: 10px;
`

const CTAContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  left: 0;
  right: 0;
  margin-top: 8px;
`

const RatingContainer = styled.View`
  flex-direction: row;
  align-items: center;
`

const RatingIconContainer = styled.View`
  width: 15px;
  height: 15px;
`

const RatingLabel = styled.Text`
  font-family: ${props => props.theme.font.primary};
  font-size: 17px;
  font-weight: 500;
  color: ${props => props.theme.color.text};
  margin-left: 5px;
  padding-top: 4px;
`

const Name = styled.Text`
  margin-top: 10px;
  font-family: ${props => props.theme.font.primary};
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: ${props => props.theme.color.text};
`

const Description = styled.Text`
  margin-top: 6px;
  font-family: ${props => props.theme.font.primary};
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: ${props => props.theme.color.text};
`

export {
  Container,
  ImageContainer,
  LogoContainer,
  FavButtonContainer,
  PageIndicatorContainer,
  CTAContainer,
  RatingContainer,
  RatingIconContainer,
  RatingLabel,
  Name,
  Description,
}
