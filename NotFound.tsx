import * as React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <React.Fragment>
      <h1>お探しのページは見つかりませんでした。</h1>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </React.Fragment>
  );
};

export default NotFound;
