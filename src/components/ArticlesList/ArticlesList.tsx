import { useEffect, useState } from "react";
import { getAllArticles } from '../../api/fetchingArticles';
// import { Card } from "../Card";
import { Card } from "react-bootstrap";
import './ArticlesList.scss';

export const ArticlesList = () => {
  const [articles, setArticles] = useState<any>([]);

  useEffect(() => {
    const getArticlesFromServer = async() => {
      try {
        const articlesFromServer = await getAllArticles();

        setArticles(articlesFromServer.articles);
      } catch (error) {
        console.log(error);
      }
    }

    getArticlesFromServer();
  }, []);

  return (
    <div className='articles-list'>
      {articles.length > 0 && articles.map((article: any) => (
        // <Card
        //   author={article.author}
        //   title={article.title}
        //   description={article.description}
        //   imgUrl={article.urlToImage}
        //   date={article.publishedAt}
        // />
        <Card style={{ width: '18rem' }}>
          <Card.Img variant="top" src={article.urlToImage} />
          <Card.Body>
            <Card.Title>{article.title}</Card.Title>
            <Card.Text>
              {article.description}
            </Card.Text>
          </Card.Body>

          <div className='card__bottom-section'>
            <Card.Text>
              {new Date(article.publishedAt).toDateString()}
            </Card.Text>
            <Card.Text>
              {article.author
                ? article.author
                : 'Unknown'}
            </Card.Text>
          </div>
        </Card>
      ))}
    </div>
  );
};
