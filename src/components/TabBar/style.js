import styled from 'styled-components'

const Container = styled.View`
  width: 150px;
  min-height: 50px;
  background-color: ${props => (props.bgColor ? props.bgColor : '#fff')};
  border-top-left-radius: 25px;
  border-top-right-radius: 25px;
  box-shadow: 0px 3px 16px rgba(0, 0, 0, 0.5);
`

const ItemsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 15px 0px;
`

export { Container, ItemsContainer }
