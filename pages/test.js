import React, { useState } from "react";
import Head from "next/head";
import { StrapiServiceInstance } from "../Service/CMSAPI";
import { CustomRadioButton } from "../components/UI/customRadioButton/CustomRadioButton";
import { CustomDropDown } from "../components/UI/customDropDown/CustomDropDown";
import { CustomButton } from "../components/UI/customButton/CustomButton";
import { CustomLink } from "../components/UI/customLink/customLink";
import { CustomOutlinedButton } from "../components/UI/customOutlinedButton/CustomOutlinedButton";
import { CustomLanguageSwitcher } from "../components/UI/сustomLanguageSwitcher/CustomLanguageSwitcher";
import { CustomAccordionNumerable } from "../components/UI/customAccordionNumerable/CustomAccordionNumerable";
import { CustomSlider } from "../components/UI/customSlider/CustomSlider";


import mockProduct from '../public/images/mock/mock-img-with-color.jpg';
import { CustomForm } from "../components/UI/customForm/customForm";
import { CustomAccordionPure } from "../components/UI/customAccordionPure/CustomAccordionPure";
import { SliderWrapper } from "../components/SliderWrapper/SliderWrapper";

export const getStaticProps = async () => {
  const res = await StrapiServiceInstance.getImages();

  const imagesUrls = [];

  for (let i = 0; i < res.length; i++) {
    imagesUrls.push(
      `${StrapiServiceInstance.baseURL}${res[i].image[0].formats.medium.url}`
    );
  }

  return {
    props: {
      imagesStrapi: imagesUrls,
    },
    revalidate: StrapiServiceInstance.timeToRebuild,
  };
};

export default function Test({ imagesStrapi }) {
  const [count, setCount] = useState(0);

  const CustomRadioButtonHandler = (value) => {
    setCount(value);
  };

  const qualitySliderBreakPoint = {
    gapxl: 24,
    slidesPerViewXl: 30,
    slidesPerViewMd: 2.2,
    slidesPerViewXs: 1.2,
  };

  const listSwiper = [{ imgSrc: mockProduct.src, description: <p>123</p> },
  { imgSrc: mockProduct.src, description: <p>456</p> }]

  return (
    <div>
      <Head></Head>
      <div>
        {imagesStrapi.map((img) => (
          <div>
            <img src={img}></img>
          </div>
        ))}
        <CustomRadioButton
          handleValue={CustomRadioButtonHandler}
          buttonsLabels={['5л', '10л', '13л']}
        />
      </div>
      <div>{count}</div>
      <button onClick={() => setCount((count) => count + 1)}>increment</button>
      <CustomDropDown label={'test'} buttonsLabels={['1', '2', '3']} />
      <CustomButton label={'test2'} onClick={() => { }} />
      <CustomLink label={'test'} />
      <CustomOutlinedButton isButtonSmall={false} label="Оставить заявку" />
      <CustomLanguageSwitcher />
      <CustomAccordionNumerable
        list={[
          { title: '123', content: '321' },
          { title: '789', content: '3987' },
        ]}
      />
      <CustomForm />
      <CustomAccordionPure
        accordionList={[{ title: '11 Accordion', content: 'test test' }, { title: 'Second Accordion', content: 'test test' }, { title: 'Third Accordion', content: 'test test' }]}
      />
    </div>
  );
}
