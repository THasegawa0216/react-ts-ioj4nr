import * as React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <React.Fragment>
      <h1>ホーム</h1>
      <div>
        新規登録は<Link to={`/register/`}>こちら</Link>
      </div>
    </React.Fragment>
  );
};

export default Home;
