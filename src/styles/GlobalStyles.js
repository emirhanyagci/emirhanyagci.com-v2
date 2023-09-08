import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  font-family: 'josefin';
}
@media only screen and (min-width: 640px) {
  .appContainer {
    width: 100%;
  }
}
@media only screen and (min-width: 768px) {
  .appContainer {
    width: 90%;
  }
}
@media only screen and (min-width: 1024px) {
  .appContainer {
    width: 85%;
  }
}
@media only screen and (min-width: 1280px) {
  .appContainer {
    width: 90%;
	max-width: 1280px;
  }
}


`;
export default GlobalStyles;
