import { FormEvent, useContext, useState } from 'react';
import { UserContext } from '../../context/UserContext';
import './AddForm.scss';
import { Button, Form } from 'react-bootstrap';
import { Article } from '../../types/Article';
import { useAppDispatch } from '../../app/hooks';
import { actions } from '../../features/articles';

export const AddForm = () => {
  const dispatch = useAppDispatch();
  const { user, setUser } = useContext(UserContext);
  const [userName, setUserName] = useState('');
  const [articleTitle, setArticleTitle] = useState('');
  const [articleDescription, setArticleDescription] = useState('');

  const handleSubmitUser = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    setUser(userName);
  }

  const handleSubmitArticle = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const article: Article = {
      title: articleTitle,
      description: articleDescription,
      author: user,
      urlToImage: '',
    };

    dispatch(actions.add(article));
    setArticleTitle('');
    setArticleDescription('');
  }

  return (
    <div className='add-form'>
      {!user && (
        <Form onSubmit={handleSubmitUser}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Author name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={userName}
              onChange={(event) => setUserName(event.target.value)}
            />
          </Form.Group>

          <Button
            variant="primary"
            type="submit"
          >
            Submit
          </Button>
        </Form>
      )}

      {user && (
        <Form onSubmit={handleSubmitArticle}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title</Form.Label>

            <Form.Control
              type="text"
              value={articleTitle}
              onChange={(event) => setArticleTitle(event.target.value)}
              placeholder="Enter article title"
              required
            />
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Description</Form.Label>

            <Form.Control
              type="text"
              value={articleDescription}
              onChange={(event) => setArticleDescription(event.target.value)}
              placeholder="Enter article description"
              required
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};
