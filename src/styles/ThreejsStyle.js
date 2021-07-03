import { createGlobalStyle } from 'styled-components';

const ThreejsStyles = createGlobalStyle`*
{
    margin: 0;
    padding: 0;
}

.dg{
    z-index:1000!important;
}

html,
body
{
    height: 100vh;
}
.webgl
{   
    position: fixed;
    top: 0;
    left: 0;
    outline: none;
    z-index: -1000;
}`;
export default ThreejsStyles;
