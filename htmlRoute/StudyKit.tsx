import * as React from 'react';
import { Link } from 'react-router-dom';

import AppGoodBtn from '../components/LikeButtonComp';
import GoodMsgComp from '../components/GoodMsgComp';
import ColofulMessage1 from '../components/PropsSample1';
import ColofulMessage2 from '../components/PropsSample2';

const StudyKit = () => {
  return (
    <React.Fragment>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
      <h1>自己学習用お試しページ</h1>
      <div>
        <div>-----------------------------</div>
        <AppGoodBtn />
        <div>-----------------------------</div>
        <GoodMsgComp />
        <div>-----------------------------</div>
        <ColofulMessage1 color="blue" message="文字色blue" />
        <div>-----------------------------</div>
        <ColofulMessage2 color="red" message="文字色red" />
      </div>
    </React.Fragment>
  );
};

export default StudyKit;
