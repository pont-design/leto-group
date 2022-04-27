import { Header } from '../Components/Common/Header';
import { Footer } from '../components/Common/Footer';

import '../styles/base.scss';
import '../styles/global.scss';

import '../styles/CustomSlider.scss';
import '../styles/CustomTextArea.scss';
import '../styles/CustomTextField.scss';
import '../styles/CustomButton.scss';
import '../styles/CustomLink.scss';
import '../styles/ContactsStyles.scss';
import '../styles/QualityPage.scss';
import '../styles/StatisticBlockStyles.scss';
import '../styles/CustomAccordeonNumerable.scss';
import '../styles/CustomAccordeonStyles.scss';
import '../styles/CustomDropDown.scss';
import '../styles/CustomFiltersStyles.scss';
import '../styles/CustomFormStyles.scss';
import '../styles/CustomLanguageSwitcher.scss';
import '../styles/CustomOutlinedButton.scss';
import '../styles/CustomRadioButtonStyle.scss';
import '../styles/BaseCardStyles.scss';

import '../styles/Footer.scss';
import '../styles/Header.scss';

import '../styles/ProductCard.scss';
import '../styles/Technologies.scss';
import '../styles/AboutStyles.scss';
import '../styles/Сatalog.scss';
import '../styles/StartPageStyles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <Component {...pageProps} />
      {/* <Footer /> */}
    </>
  );
}

export default MyApp;
