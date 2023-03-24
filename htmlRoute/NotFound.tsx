import * as React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <React.Fragment>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
      <h1>お探しのページは見つかりませんでした。</h1>
      <h1>システム管理者にお問い合わせください。</h1>
      <h1>問い合わせ先電話番号：0120-999-999</h1>
    </React.Fragment>
  );
};

export default NotFound;
