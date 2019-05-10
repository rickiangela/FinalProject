import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { addComment } from '../../actions/post';

const CommentForm = ({ postId, addComment }) => {
  const [text, setText] = useState('');

  return (
    <div class='post-form' style={{ borderRadius: "5px" }}>
      <div style={{ borderRadius: "5px" }} class='bg-primary p'>
        <h3 style={{ borderRadius: "5px" }}>Comment</h3>
      </div>
      <form
        class='form my-1'
        style={{ borderRadius: "5px" }}
        onSubmit={e => {
          e.preventDefault();
          addComment(postId, { text });
          setText('');
        }}
      >
        <textarea
          name='text'
          cols='30'
          rows='5'
          placeholder='Say something...'
          style={{ borderRadius: "5px" }}
          value={text}
          onChange={e => setText(e.target.value)}
          required
        />
        <input type='submit' class='btn btn-dark my-1' value='Submit' />
      </form>
    </div>
  );
};

CommentForm.propTypes = {
  addComment: PropTypes.func.isRequired
};

export default connect(
  null,
  { addComment }
)(CommentForm);
