import * as React from 'react';
import '../style.css';

export default function LikeButtonComp() {
  return (
    <div>
      <LikeButtonFunc />
    </div>
  );
}

function LikeButtonFunc() {
  const onClickCountUp = () => {
    setCount(count + 1);
  };
  const [count, setCount] = React.useState(0);

  return (
    <React.Fragment>
      <p>LikeButtonCompです</p>
      <span className="likeButton" onClick={onClickCountUp}>
        いいね♥{count}
      </span>
    </React.Fragment>
  );
}
