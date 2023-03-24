import * as React from 'react';
import { Link } from 'react-router-dom';

const StudyKit = () => {
  return (
    <React.Fragment>
      <h1>自己学習用お試しページ</h1>
      <div></div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </React.Fragment>
  );
};

export default StudyKit;
