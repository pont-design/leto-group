import axios from 'axios';
import React, { useState } from 'react';
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
      .post('http://188.225.45.114:1337/api/email', {
        to: form.name,
        from: form.email,
        subject: form.interesting,
        text: form.message,
      })
      .then((res) => {
        console.log(res);
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
      />
      <CustomTextField
        inputName="email"
        placeholder="Ваш email"
        isFullField={!!formsData['email']}
        setCurrentFormData={setCurrentFormData}
      />
      <CustomTextField
        inputName="interesting"
        placeholder="Что вас интересует?"
        isFullField={!!formsData['interesting']}
        setCurrentFormData={setCurrentFormData}
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
