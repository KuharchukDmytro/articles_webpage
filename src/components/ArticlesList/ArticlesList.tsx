import { useEffect, useState } from "react";
import { getAllArticles } from '../../api/fetchingArticles';
import { Button, Card, Spinner } from "react-bootstrap";
import './ArticlesList.scss';
import { Article } from "../../types/Article";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actions } from "../../features/articles";

export const ArticlesList = () => {
  const articles = useAppSelector(state => state.articles);
  const [articlesFromServer, setArticlesFromServer] = useState<Article[]>([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getArticlesFromServer = async() => {
      try {
        const serverArticles = await getAllArticles();

        setArticlesFromServer(serverArticles.articles);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getArticlesFromServer();
  }, []);

  const handleClick = (article: Article) => {
    if (articles.some(art => art.urlToImage === article.urlToImage)) {
      dispatch(actions.remove(article.urlToImage));

      return;
    }

    dispatch(actions.add(article));
  }

  return (
    <div className='articles-list'>
      {isLoading && (
        <Spinner />
      )}

      {hasError && (
        <p style={{ color: 'red' }}>Error occured when data loading</p>
      )}

      {(!hasError && !isLoading && articlesFromServer.length > 0)
        && articlesFromServer.map((article) => (
          <Card className='card'>
            <Card.Img variant="top" src={article.urlToImage} />
            <Card.Body>
              <Card.Title>{article.title}</Card.Title>
              <Card.Text>
                {article.description}
              </Card.Text>
            </Card.Body>

            <Button
              variant="primary"
              className="card__pin-btn"
              onClick={() => handleClick(article)}
            >
              {articles.some(art => art.urlToImage === article.urlToImage)
                ? 'Added'
                : 'Add'}
            </Button>

            <Card.Text className='card__author'>
              {`by ${article.author
                ? article.author
                : 'Unknown'}`}
            </Card.Text>
          </Card>
        ))}
    </div>
  );
};
