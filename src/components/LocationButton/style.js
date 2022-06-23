import styled from 'styled-components'

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  /* width: 100px; */
  /* height: 18px; */
  background-color: #f4f4f4;
  border-radius: 9px;
  padding: 4px 8px;
`

const LeftContainer = styled.View`
  margin-right: 4px;
`

const RightContainer = styled.View`
  margin-left: 4px;
  transform: rotateZ(180deg);
`

const Title = styled.Text`
  font-size: 12px;
  line-height: 12px;
  font-weight: 600;
`

export { Container, LeftContainer, RightContainer, Title }
