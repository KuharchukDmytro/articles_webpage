import { useAppDispatch, useAppSelector, useLocalStorage } from '../../app/hooks';
import { actions as articlesActions } from '../../features/articles';
import { actions as pinnedArticleActions } from '../../features/pinnedArticle';

import { Button, Card } from 'react-bootstrap';
import './ArticlesList.scss';

import { Article } from '../../types/Article';


export const ArticlesList = () => {
  const [user] = useLocalStorage('user');
  const articles = useAppSelector(state => state.articles);
  const pinnedArticle = useAppSelector(state => state.pinnedArticle);
  const dispatch = useAppDispatch();

  const handleClick = (article: Article) => {
    dispatch(articlesActions.remove(article));
  }

  const handlePin = (article: Article) => {
    if (JSON.stringify(article) === JSON.stringify(pinnedArticle.pinnedArticle)) {
      dispatch(pinnedArticleActions.unpin());

      return;
    }

    dispatch(pinnedArticleActions.pin(article));
    dispatch(articlesActions.update(article))
  }

  return (
    <div className='articles-list'>
      {(articles.length > 0)
        && articles.map((article, ind) => {
          const isArticlePinned = JSON.stringify(article) === JSON.stringify(pinnedArticle.pinnedArticle);

          return (
            <Card className='home-card' key={article.title + ind}>
              <Card.Body>
                <Card.Title>{article.title}</Card.Title>
                <Card.Text>
                  {article.description}
                </Card.Text>
              </Card.Body>

              <Card.Text style={{ marginBottom: '8px' }} className='card__author'>
                {`by ${article.author
                  ? article.author
                  : 'Unknown'}`}
              </Card.Text>

              <div className='home-card__btn-container'>
                <Button
                  variant={isArticlePinned ? 'warning' : 'primary'}
                  className='home-card__pin-btn'
                  onClick={() => handlePin(article)}
                >
                  {isArticlePinned
                    ? 'Unpin'
                    : 'Pin'}
                </Button>

                {article.author === user && (
                  <Button
                    variant='danger'
                    className='home-card__pin-btn'
                    onClick={() => handleClick(article)}
                  >
                    Remove
                  </Button>
                )}
              </div>
            </Card>
          );
        })}
    </div>
  );
};
