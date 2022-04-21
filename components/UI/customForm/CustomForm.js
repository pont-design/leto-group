import React, { useState } from 'react'
import { CustomTextArea } from "../customTextArea/CustomTextArea";
import { CustomTextField } from "../customTextField/CustomTextField"

export const CustomForm = () => {

  const [formsData, setFormsData] = useState({});

  const submitForm = (e) => {
    console.log(e)
    console.log(1)
  }

  const setCurrentFormData = (value, inputName) => {
    setFormsData({ ...formsData, [inputName]: value })
  }

  return (
    <form onSubmit={submitForm}>
      <CustomTextField
        inputName='name'
        placeholder='Ваше имя'
        isFullField={!!formsData['name']}
        setCurrentFormData={setCurrentFormData}
      />
      <CustomTextField
        inputName='email'
        placeholder='Ваш email'
        isFullField={!!formsData['email']}
        setCurrentFormData={setCurrentFormData}
      />
      <CustomTextField
        inputName='interesting'
        placeholder='Что вас интересует?'
        isFullField={!!formsData['interesting']}
        setCurrentFormData={setCurrentFormData}
      />
      <CustomTextArea inputName='message'
        placeholder='Ваш сообщение'
        isFullField={!!formsData['message']}
        setCurrentFormData={setCurrentFormData} />
    </form>
  )
}
