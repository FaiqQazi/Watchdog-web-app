import React from 'react';
import { Link } from 'react-router-dom';
import Newsitem from './Newsitem';

const News = (props) => {
  const data = Array.from(props.data);
  return (
    <div className="container text-center">
      <div className="row">
      {console.log(props.data)} 
        {data.map((e) => (
          <div key={e.id} className="col">
            <Newsitem
            urlToImage={e.urlToImage}
              title={e.title}
              author={e.author}
              date={e.date}
              description={e.description}
              url={e.url}
              publishedat={e.publishedat}
              category={props.category}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;
