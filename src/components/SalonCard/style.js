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
  background-color: red;
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
  background-color: red;
`

const RatingLabel = styled.Text`
  font-family: 'LeagueSpartan-Regular';
  font-size: 15px;
  font-weight: 500;
  color: #000;
  margin-left: 5px;
`

const Name = styled.Text`
  margin-top: 10px;
  font-family: 'LeagueSpartan-Regular';
  font-size: 20px;
  font-weight: 700;
  line-height: 20px;
  color: #000;
`

const Description = styled.Text`
  margin-top: 6px;
  font-family: 'LeagueSpartan-Regular';
  font-size: 16px;
  font-weight: 400;
  line-height: 16px;
  color: #000;
`

export {
  Container,
  ImageContainer,
  LogoContainer,
  FavButtonContainer,
  CTAContainer,
  RatingContainer,
  RatingIconContainer,
  RatingLabel,
  Name,
  Description,
}
