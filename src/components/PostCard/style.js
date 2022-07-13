import styled from 'styled-components'

const Container = styled.View`
  width: 100%;
  padding-top: 18px;
  background-color: #fff;
`

const AuthorContainer = styled.View`
  position: absolute;
  top: 18px;
  width: 100%;
  align-items: center;
  z-index: 9999;
`

const UserLabel = styled.Text`
  font-family: 'LeagueSpartan-Regular';
  font-size: 12px;
  font-weight: 700;
  line-height: 12px;
  margin-bottom: 2px;
`

const DateLabel = styled.Text`
  align-self: flex-end;
  padding-right: 8px;
  margin-top: 20px;
  font-family: 'LeagueSpartan-Regular';
  font-size: 9px;
  font-weight: 500;
  line-height: 9px;
  text-align: right;
`

const AvatarContainer = styled.View``

const ImageContainer = styled.View`
  margin-top: 4px;
  background-color: #d9d9d9;
`

const ActionsContainer = styled.View`
  flex-direction: row;
  margin: 8px;
`

const LikesLabel = styled.Text`
  font-family: 'LeagueSpartan-Regular';
  font-size: 10px;
  font-weight: 600;
  margin-left: 8px;
  margin-right: 8px;
`

const DescriptionLabel = styled.Text`
  font-family: 'LeagueSpartan-Regular';
  font-size: 12px;
  font-weight: 400;
  margin: 8px;
`

const CommentsContainer = styled.View`
  flex-direction: row;
  margin: 8px;
`

const CommentsIconContainer = styled.View``

const CommentsInfoContainer = styled.View`
  flex: 1;
  margin-left: 12px;
`

const CommentsCTA = styled.Text`
  font-family: 'LeagueSpartan-Regular';
  font-size: 8px;
  font-weight: 400;
  line-height: 8px;
  margin-bottom: 2px;
`

const Comment = styled.Text`
  font-family: 'LeagueSpartan-Regular';
  font-size: 12px;
  font-weight: 300;
  line-height: 16px;
`

const CommentUsername = styled(Comment)`
  font-weight: 700;
`

export {
  Container,
  AuthorContainer,
  UserLabel,
  DateLabel,
  AvatarContainer,
  ImageContainer,
  ActionsContainer,
  LikesLabel,
  DescriptionLabel,
  CommentsContainer,
  CommentsIconContainer,
  CommentsInfoContainer,
  CommentsCTA,
  Comment,
  CommentUsername,
}
