import React from "react";
import { Comment } from "semantic-ui-react";
import PropTypes from "prop-types";

import { TextType, ImageType, AudioType } from "./filetypes";

class Message extends React.Component {
  constructor(props) {
    super(props);
    this.renderFile = this.renderFile.bind(this);
  }

  renderFile = message => {
    if (message.filetype.startsWith("image/")) {
      return <ImageType url={message.url} alt="image" />;
    }
    if (message.filetype === "text/plain") {
      return <TextType url={message.url} />;
    }
    if (message.filetype.startsWith("audio/")) {
      return <AudioType url={message.url} filetype={message.filetype} />;
    }
    return null;
  };

  render() {
    const { message } = this.props;
    return (
      <Comment>
        <Comment.Avatar src={message.avatarurl} />
        <Comment.Content>
          <Comment.Author as="a">{message.username}</Comment.Author>
          <Comment.Metadata>
            <span>{message.created_at}</span>
          </Comment.Metadata>
          <br />
          {message.url ? (
            <React.Fragment>
              {this.renderFile(message)}
              <br />
            </React.Fragment>
          ) : (
            <Comment.Text>{message.text}</Comment.Text>
          )}
        </Comment.Content>
      </Comment>
    );
  }
}
Message.propTypes = {};

export default Message;
