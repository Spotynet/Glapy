import styled from 'styled-components'

const Container = styled.View`
  background-color: ${props => props.bgColor || 'gray'};
  border-radius: 12px;
  flex-direction: row;
  align-items: center;
  padding: 5px;
`

const IconContainer = styled.View`
  width: 15px;
  height: 15px;
`

const Title = styled.Text`
  font-family: 'LeagueSpartan-Regular';
  font-size: 13px;
  font-weight: 400;
  color: ${props => props.textColor || '#fff'};
  padding-left: 10px;
  padding-right: 10px;
`

export { Container, IconContainer, Title }
