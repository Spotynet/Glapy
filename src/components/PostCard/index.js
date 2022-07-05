import PropTypes from 'prop-types'
import React from 'react'
import { Dimensions, Text, TouchableOpacity } from 'react-native'
import Image from 'react-native-image-progress'
import * as Progress from 'react-native-progress'
import { useTheme } from 'styled-components'
import PaperPlaneIcon from '../../assets/icons/avion-de-papel.svg'
import CommentIcon from '../../assets/icons/comentario.svg'
import HearthIcon from '../../assets/icons/corazon.svg'
import BookmarkIcon from '../../assets/icons/marcador.svg'
import ActionButton from '../ActionButton'
import CustomAvatar from '../CustomAvatar'
import * as Components from './style'

const PostCard = ({
  post,
  onAuthorPress,
  onLikePress,
  onSharePress,
  onBookmarkPress,
  onCommentsPress
}) => {
  if (!post) {
    return <Text>A post object is required.</Text>
  }

  const theme = useTheme()
  const { width } = Dimensions.get('window')
  const postImageAspect = 1.5

  return (
    <Components.Container>
      {/* Author info */}
      {post.author && (
        <Components.AuthorContainer>
          <Components.UserLabel>{post.author.name}</Components.UserLabel>
          <Components.AvatarContainer>
            <TouchableOpacity onPress={onAuthorPress}>
              <CustomAvatar size={40} imageURL={post.author.avatar || ''} />
            </TouchableOpacity>
          </Components.AvatarContainer>
        </Components.AuthorContainer>
      )}

      {/* Post date */}
      {post.date && <Components.DateLabel>{post.date}</Components.DateLabel>}

      {/* Post image */}
      {post.image && (
        <Components.ImageContainer>
          <Image
            source={{ uri: post.image }}
            indicator={Progress.Bar}
            indicatorProps={{
              size: width,
              borderWidth: 1,
              color: theme.color.primary,
            }}
            style={{ width: width, height: width / postImageAspect }}
          />
        </Components.ImageContainer>
      )}

      {/* Post actions */}
      <Components.ActionsContainer>
        <ActionButton
          iconImage={<HearthIcon width={20} height={20} />}
          onPress={onLikePress}
          style={{ marginRight: 12 }}
        />
        <ActionButton
          iconImage={<PaperPlaneIcon width={20} height={20} />}
          onPress={onSharePress}
          style={{ marginRight: 12 }}
        />
        <ActionButton
          iconImage={<BookmarkIcon width={20} height={20} />}
          onPress={onBookmarkPress}
        />
      </Components.ActionsContainer>

      {/* Post stats */}
      <Components.LikesLabel>{`${post.likes} Likes`}</Components.LikesLabel>

      {/* Post description */}
      <Components.DescriptionLabel>{post.caption}</Components.DescriptionLabel>

      {/* Post comments */}
      <TouchableOpacity onPress={onCommentsPress}>
        <Components.CommentsContainer>
          <Components.CommentsIconContainer>
            <CommentIcon width={20} height={20} />
          </Components.CommentsIconContainer>
          <Components.CommentsInfoContainer>
            <Components.CommentsCTA>{`Ver los ${10} comentarios`}</Components.CommentsCTA>
            <Components.Comment>
              <Components.CommentUsername>clara_07</Components.CommentUsername>{'  '}
              Lorem ipsum dolor sit amet a lacus massa aliquet duis.
            </Components.Comment>
          </Components.CommentsInfoContainer>
        </Components.CommentsContainer>
      </TouchableOpacity>
    </Components.Container>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
}

export default PostCard
