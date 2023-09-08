import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root{
	--color-brand-blue-1:#1D1D2B;
	--color-brand-blue-2:rgba(33, 33, 62, 0.5);
	--color-logo:#39E9F4;
	--color-brand-orange-100 : #D1A124;
	--color-brand-orange-200 : #C89D2A;
}
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
