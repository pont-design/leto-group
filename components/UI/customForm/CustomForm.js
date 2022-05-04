import axios from 'axios';
import React, { useState } from 'react';
import { StrapiServiceInstance } from '../../../Service/CMSAPI';
import { CustomButton } from '../customButton/CustomButton';
import { CustomTextArea } from '../customTextArea/CustomTextArea';
import { CustomTextField } from '../customTextField/CustomTextField';

export const CustomForm = ({ buttonLabel }) => {
  const [formsData, setFormsData] = useState({});

  const submitForm = (e) => {
    e.preventDefault();
    sendEmail(formsData);
  };

  const sendEmail = (form) => {
    axios
      .post(`${StrapiServiceInstance.baseURL}/api/email`, {
        to: `${StrapiServiceInstance._sendAddress}`,
        from: 'leto-group',
        subject: 'Заявка с сайта',
        html: `<h1>${form.name}</h1>
        <p><strong>Почта:</strong>: ${form['email']}</p>
        <p><strong>Интересует:</strong>: ${form.interesting}</p>
        <p><strong>Детали:</strong>: ${form.message}</p>
        `,
        text: form.message,
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setCurrentFormData = (value, inputName) => {
    setFormsData({ ...formsData, [inputName]: value });
  };

  return (
    <form className="custom-form-wrapper">
      <CustomTextField
        inputName="name"
        placeholder="Ваше имя"
        isFullField={!!formsData['name']}
        setCurrentFormData={setCurrentFormData}
        type="text"
      />
      <CustomTextField
        inputName="email"
        placeholder="Ваш email"
        isFullField={!!formsData['email']}
        setCurrentFormData={setCurrentFormData}
        type="email"
      />
      <CustomTextField
        inputName="interesting"
        placeholder="Что вас интересует?"
        isFullField={!!formsData['interesting']}
        setCurrentFormData={setCurrentFormData}
        type="text"
      />
      <CustomTextArea
        inputName="message"
        placeholder="Ваш сообщение"
        isFullField={!!formsData['message']}
        setCurrentFormData={setCurrentFormData}
      />
      <CustomButton
        styles="form-button btn-text"
        label={buttonLabel}
        onClick={(e) => {
          submitForm(e);
        }}
      />
    </form>
  );
};
