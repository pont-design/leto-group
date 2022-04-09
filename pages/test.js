import React, { useState } from "react";
import Head from "next/head";
import { StrapiServiceInstance } from "../Service/CMSAPI";
import { CustomRadioButton } from "./UI/CustomRadioButton/CustomRadioButton";
import { CustomDropDown } from "./UI/CustomDropDown/CustomDropDown";
import { CustomButton } from "./UI/CustomButton/CustomButton";

export const getStaticProps = async () => {

  const res = await StrapiServiceInstance.getImages()

  const imagesUrls = []

  for (let i = 0; i < res.length; i++) {
    imagesUrls.push(`${StrapiServiceInstance.baseURL}${res[i].image[0].formats.medium.url}`)
  }

  return {
    props: {
      imagesStrapi: imagesUrls,
    },
    revalidate: StrapiServiceInstance.timeToRebuild
  };

}

export default function Test({ imagesStrapi }) {
  const [count, setCount] = useState(0)

  const CustomRadioButtonHandler = (value) => {
    setCount(value)
  }

  return (
    <div>
      <Head>
      </Head>
      <div >
        {imagesStrapi.map((img) => (
          <div >
            <img src={img}></img>
          </div>
        ))}
        <CustomRadioButton handleValue={CustomRadioButtonHandler} buttonsLabels={['5л', '10л', '13л']} />
      </div>
      <div>{count}</div>
      <button onClick={() => setCount(count => count + 1)}>increment</button>
      <CustomDropDown label={'test'} buttonsLabels={['1', '2', '3']} />
      <CustomButton label={'test2'} onClick={() => { }} />
    </div>
  );
}
