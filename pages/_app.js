import { Header } from "../Components/Common/Header";

import '../styles/base.scss';
import '../styles/global.scss';

import '../styles/CustomRadioButtonStyle.scss';
import '../styles/CustomDropDown.scss';
import '../styles/CustomButton.scss';
import '../styles/CustomLink.scss';
import '../styles/productCard.scss';
import '../styles/CustomAccordeonStyles.scss';
import '../styles/BaseCardStyles.scss';
import '../styles/CustomOutlinedButton.scss'
import '../styles/CustomLanguageSwitcher.scss'
import '../styles/Header.scss'
import '../styles/Footer.scss'

import { Footer } from "../components/Common/Footer";



function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <div className="container">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}

export default MyApp;
