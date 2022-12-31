import emotionReset from 'emotion-reset';
import {Global, css} from '@emotion/react';
import {Text, Box} from '@/components/atoms';
import {Feed} from './features/tweets/pages/Feed';

function App() {
  return (
    <>
      <Global styles={globalReset} />
      <div className="App">
        <Box align="center">
          <Text>Twitter Trace</Text>
          <Feed />
        </Box>
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
