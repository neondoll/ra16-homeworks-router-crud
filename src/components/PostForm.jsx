import Card from "react-bootstrap/Card";
import CloseButton from "react-bootstrap/CloseButton";
import Button from "react-bootstrap/Button";
import formatDate from "../functions/formatDate";
import Image from "react-bootstrap/Image";
import PropTypes from "prop-types";
import { Form } from "react-router-dom";

function PostForm({ method, post, submitBtnLabel, onCloseClick }) {
  return (
    <Card as={Form} className="post-form" method={method}>
      {
        post
          ? (
              <Card.Header className="post__header">
                <Image className="post__image" roundedCircle src={post.image} />
                <Card.Title className="post__name">{post.name}</Card.Title>
                <Card.Subtitle className="post__created">{formatDate(post.created)}</Card.Subtitle>
              </Card.Header>
            )
          : <></>
      }
      <Card.Body>
        <textarea className="form-control" defaultValue={post ? post.content : ""} name="content" required rows={3} />
      </Card.Body>
      <Card.Footer>
        <Button type="submit" variant="primary">{submitBtnLabel}</Button>
        <CloseButton onClick={onCloseClick} />
      </Card.Footer>
    </Card>
  );
}

PostForm.propTypes = {
  method: PropTypes.string,
  post: PropTypes.object,
  submitBtnLabel: PropTypes.string,
  onCloseClick: PropTypes.func,
};

export default PostForm;
