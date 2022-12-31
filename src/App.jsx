import emotionReset from 'emotion-reset';
import {Global, css} from '@emotion/react';
import {Feed} from '@/features/tweets/pages/Feed';
import {PostTweet} from '@/features/post/pages/PostTweet';

function App() {
  return (
    <>
      <Global styles={globalReset} />
      <div className="App">
        <PostTweet />
      </div>
    </>
  );
}

export default App;

const globalReset = css`
  ${emotionReset}
  *, *::after, *::before {
    box-sizing: border-box;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: #000000;
    text-decoration: none;
  }
`;
