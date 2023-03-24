import * as React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <React.Fragment>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
      <h1>お探しのページは見つかりませんでした。</h1>
    </React.Fragment>
  );
};

export default NotFound;
