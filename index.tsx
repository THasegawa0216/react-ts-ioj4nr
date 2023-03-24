import * as React from 'react';
import { createRoot } from 'react-dom/client';

import HtmlRouter from './htmlRoute/BrowserRouter';

// startログ
console.log(String('-').repeat(20) + 'Start' + String('-').repeat(20));

const spaRouter = createRoot(document.getElementById('root_Router'));

// root_1にAppGoodBtnで作成したいいねボタンを配置する(JSX記法)
spaRouter.render(
  <React.StrictMode>
    <HtmlRouter />
  </React.StrictMode>
);

// endログ
console.log(String('-').repeat(20) + 'End' + String('-').repeat(20));
