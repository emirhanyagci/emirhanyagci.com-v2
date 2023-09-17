import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
*{
  font-family: 'josefin';
}
html{
  scroll-behavior: smooth;

    font-size: 16px;
  }
:root{
	--color-brand-blue-1:#1D1D2B;
	--color-brand-blue-2:rgba(30, 41, 59);
	--color-logo:#39E9F4;
  --card-bg:rgba(30, 41, 59,.5);
  --card-border:#1A3A54;
	--color-brand-orange-1 : #D1A124;
	--color-brand-orange-2 : #C89D2A;
  --section-padding-y:5rem;
  --section-padding-x:5rem;

  --layout-item-radius : 12px;
}


@media only screen and (min-width: 640px) {
  .appContainer {
    width: 100%;
  }
  html{
    font-size: 13px;
  }
}
@media only screen and (min-width: 768px) {
  .appContainer {
    width: 100%;
  }
  html{
    font-size: 14px;
  }

}
@media only screen and (min-width: 1024px) {
  .appContainer {
    width: 85%;
  }
  html{
    font-size: 15px;
  }
}
@media only screen and (min-width: 1280px) {
  .appContainer {
    width: 90%;
	max-width: 1280px;
  }
  html{
    font-size: 16px;
  }

}

`;
export default GlobalStyles;
