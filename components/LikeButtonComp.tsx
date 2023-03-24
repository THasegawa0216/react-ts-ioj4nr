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
  /* React のイベントは小文字でなく、キャメルケース(onClick)で記述する
    例）
    onClick：クリックされた時、button タグなど
    onSubmit：送信された時、form タグなど
    onChange：入力や削除が行われた時、input タグなど
    onMouseOver：マウスカーソルが上に置かれた時
    onMouseOut：マウスカーソルが外れた時
  */
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
