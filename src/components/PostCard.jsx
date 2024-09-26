import Card from "react-bootstrap/Card";
import formatDate from "../functions/formatDate";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function PostLink({ children, to }) {
  return to
    ? <Link className="post__link" to={to}>{children}</Link>
    : <>{children}</>;
}

PostLink.propTypes = { children: PropTypes.string, to: PropTypes.string };

function PostCard({ post, to }) {
  return (
    <Card className="post">
      <Card.Header className="post__header">
        <Image className="post__image" roundedCircle src={post.image} />
        <Card.Title className="post__name">
          <PostLink to={to}>{post.name}</PostLink>
        </Card.Title>
        <Card.Subtitle className="post__created">{formatDate(post.created)}</Card.Subtitle>
      </Card.Header>
      <Card.Body className="post__body">
        <Card.Text className="post__content">{post.content}</Card.Text>
      </Card.Body>
    </Card>
  );
}

PostCard.propTypes = { post: PropTypes.object, to: PropTypes.string };

export default PostCard;
