import React, { useState } from 'react';

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
import '../styles/CustomBreadCrumb.scss';
import '../styles/BaseCardStyles.scss';
import '../styles/CustomModal.scss';

import '../styles/Footer.scss';
import '../styles/Header.scss';

import '../styles/ProductCard.scss';
import '../styles/Technologies.scss';
import '../styles/AboutStyles.scss';
import '../styles/Сatalog.scss';
import '../styles/StartPageStyles.scss';

import '../styles/CustomAccordionPure.scss';

import '../styles/Scroll.css';

import {
  AnimatePresence,
  domAnimation, LazyMotion, m
} from "framer-motion"

export const FiltersValueContext = React.createContext(null); //TODO: context should be in separate file

function MyApp({ Component, pageProps }) {

  const [filterValue, setFilterValue] = useState({
    Категория: '', //TODO : this fields should come from backend
    Консистенция: '',
  });

  return (
    <FiltersValueContext.Provider value={{ filterValue, setFilterValue }}>
      <Header />
      <LazyMotion features={domAnimation}>
        <AnimatePresence exitBeforeEnter={false} >
          <m.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Component {...pageProps} />
          </m.div>
        </AnimatePresence>
      </LazyMotion>
      <Footer />
    </FiltersValueContext.Provider>
  );
}

export default MyApp;
