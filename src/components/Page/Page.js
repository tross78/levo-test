import React, { useState, useEffect } from 'react';
// eslint-disable-next-line import/no-named-as-default
import NewsService from '../../services/NewsService/NewsService';
import Card from '../Card/Card';
import Config from '../../config';
import './Page.scss';

const Page = () => {
  // eslint-disable-next-line no-unused-vars
  const [news, setNews] = useState([]);
  const [page, setPage] = useState(1);

  function getData() {
    NewsService.getData(Config.API_KEY, 3, page).then((data) => {
      setNews([...news, ...data.articles]);
    });
  }

  const handleClick = () => {
    setPage(page + 1);
  };

  useEffect(() => {
    getData();
  }, [page]);

  return (
    <div className="container w-75">
      <h1 className="mt-4 mb-4 text-danger">Related Articles</h1>
      <p className="mb-5">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in voluptate velit esse
        cillum dolore eu fugiat nulla pariatur.
        Excepteur sint occaecat cupidatat non proident,
        sunt in culpa qui officia deserunt mollit anim id est laborum.
      </p>
      <div className="row row-cols-md-3 g-4">

        {news.map((article) => (
          <div className="col" key={article.url}>
            <Card date={new Date(Date.parse(article.publishedAt))} title={article.title} description={article.description} text={article.content} colorName="primary" />
          </div>
        ))}
        <div className="w-100 d-flex align-items-end flex-column">
          <button type="button" className="btn btn-danger" onClick={handleClick}>Read More</button>
        </div>
      </div>
    </div>
  );
};
// Page.propTypes = {
//   newsData: Object,
// };
Page.defaultProps = {
  news: null,
};

export default Page;
