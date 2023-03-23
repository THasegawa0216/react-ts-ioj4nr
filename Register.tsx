import * as React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <React.Fragment>
      <h1>新規登録ページ</h1>
      <div>
        ログインは<Link to={`/login/`}>こちら</Link>
      </div>
      <div>
        <Link to={`/`}>ホームに戻る</Link>
      </div>
    </React.Fragment>
  );
};

export default Register;
