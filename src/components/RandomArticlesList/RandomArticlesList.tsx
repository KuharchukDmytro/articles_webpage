import { useEffect, useState } from "react";

import { Button, Card, Spinner } from "react-bootstrap";
import './RandomArticlesList.scss';

import { getAllArticles } from '../../api/fetchingArticles';
import { Article } from "../../types/Article";

import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { actions } from "../../features/randomArticlesCache";

export const RandomArticlesList = () => {
  const randomArticlesCache = useAppSelector(state => state.randomArticlesCache);
  const [articlesFromServer, setArticlesFromServer] = useState<Article[]>([]);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [loadCounter, setLoadCounter] = useState(0);
  const dispatch = useAppDispatch();

  useEffect(() => {
    const getArticlesFromServer = async() => {
      try {
        const { articles } = await getAllArticles();

        const tenRandomArticles = articles.filter(
          (article: Article) => !randomArticlesCache.some(
            cacheArticle => JSON.stringify(cacheArticle) === JSON.stringify(article)
          ),
        ).slice(0, 10);

        if (tenRandomArticles.length < 10) {
          dispatch(actions.clear());
        } else {
          dispatch(actions.add(tenRandomArticles));
        }

        setArticlesFromServer(tenRandomArticles);
        setHasError(false);
      } catch (error) {
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getArticlesFromServer();
  }, [loadCounter]);

  console.log(loadCounter, randomArticlesCache);

  return (
    <>
      {!isLoading && (
        <Button
          style={{
            position: 'fixed',
            bottom: '15px',
            right: '15px',
            width: '120px',
            zIndex: '1'
          }}
          variant="primary"
          onClick={() => setLoadCounter(prev => prev + 1)}
        >
          {articlesFromServer.length < 10 || hasError
            ? 'Load articles again'
            : 'Load more articles'}
        </Button>
      )}

      <div className='random-articles-list'>
        {isLoading && (
          <div className='random-articles-list__loader-container'>
            <Spinner />
          </div>
        )}

        {hasError && (
          <p style={{ color: 'red' }}>Error occured when data loading</p>
        )}

        {(!articlesFromServer.length && !hasError && !isLoading) && (
          <h3>Random articles ended</h3>
        )}

        {(!hasError && !isLoading && articlesFromServer.length > 0)
          && articlesFromServer.map((article, ind) => (
            <Card className='card' key={article.title + ind}>
              <Card.Img variant="top" src={article.urlToImage} />

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
            </Card>
          ))}
      </div>
    </>
  );
};
