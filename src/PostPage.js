import React, { useState } from 'react';
import { Form, Radio, Button } from 'semantic-ui-react';

const PostPage = () => {
  const [postType, setPostType] = useState('question');

  const handlePostTypeChange = (e, { value }) => setPostType(value);

  return (
    <div className="post-page">
      <h2>New Post</h2>
      <Form>
        <Form.Field>
          <label>Select Post Type:</label>
          <div className="post-type-options">
            <Radio
              label='Question'
              name='postType'
              value='question'
              checked={postType === 'question'}
              onChange={handlePostTypeChange}
            />
            <Radio
              label='Article'
              name='postType'
              value='article'
              checked={postType === 'article'}
              onChange={handlePostTypeChange}
            />
          </div>
        </Form.Field>

        <div className="post-content-section">
          <h3>What do you want to ask or share</h3>
          <p className="description">
            This section is designed based on the type of the post. It could be developed by conditional rendering. 
            <span className="question-only">For post a question, the following section would be appeared.</span>
          </p>
        </div>

        {postType === 'question' && (
          <div>
            <Form.Field>
              <label>Title</label>
              <input placeholder='Start your question with how, what, why, etc.' />
            </Form.Field>
            <Form.Field>
              <label>Describe your problem</label>
              <textarea placeholder='Describe your problem here...' />
            </Form.Field>
          </div>
        )}

        {postType === 'article' && (
          <div>
            <Form.Field>
              <label>Title</label>
              <input placeholder='Enter a descriptive title' />
            </Form.Field>
            <Form.Field>
              <label>Abstract</label>
              <textarea placeholder='Enter a 1-paragraph abstract' />
            </Form.Field>
            <Form.Field>
              <label>Article Text</label>
              <textarea placeholder='Enter the full article text here...' />
            </Form.Field>
          </div>
        )}

        <Form.Field>
          <label>Tags</label>
          <input placeholder='Please add up to 3 tags to describe...' />
        </Form.Field>

        <Button type='submit'>Post</Button>
      </Form>
    </div>
  );
};

export default PostPage;
