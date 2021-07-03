import { createGlobalStyle } from 'styled-components';
import GingerBold from '../assets/fonts/GingerPro-Bold.otf';
import GingerRegular from '../assets/fonts/GingerPro-Regular.otf';
import GingerLight from  '../assets/fonts/GingerPro-Light.otf'
import GingerThin from '../assets/fonts/GingerPro-Thin.otf';

const Typography = createGlobalStyle`
  @font-face {
    font-family: 'Ginger Bold';
    src: url(${GingerBold});
    font-style: normal;
  }
  @font-face {
    font-family: 'Ginger Regular';
    src: url(${GingerRegular});
    font-style: normal;
  }
  @font-face {
    font-family: 'Ginger Light';
    src: url(${GingerLight});
    font-style: normal;
  }
  @font-face {
    font-family: 'Ginger Thin';
    src: url(${GingerThin});
    font-style: normal;
  }
  html{
    font-family: 'Ginger Regular';
    color: var(--gray-1);
  }
  *{
    font-family: 'Ginger Thin';
    color: var(--gray-1);
  }
  h1,h2,h3,h4,h5,h6{
    font-family: 'Ginger Regular'
  }
`;

export default Typography;
