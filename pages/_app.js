import '../styles/base.scss';
import '../styles/global.scss';

import '../styles/CustomRadioButtonStyle.scss';
import '../styles/CustomDropDown.scss';
import '../styles/CustomButton.scss';
import '../styles/CustomLink.scss';
import '../styles/productCard.scss';
import '../styles/CustomAccordeonStyles.scss';

function MyApp({ Component, pageProps }) {
  return (
    <div className="container">
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
