import React, { useState, useEffect } from 'react';

import axios from 'axios';
import { useForm, SubmitHandler } from 'react-hook-form';

import { StrapiServiceInstance } from '../../../Service/CMSAPI';

import { CustomButton } from '../customButton/CustomButton';
import { CustomTextArea } from '../customTextArea/CustomTextArea';
import { CustomTextField } from '../customTextField/CustomTextField';

export const CustomForm = ({ buttonLabel, active, setActive }) => {
  const [formsData, setFormsData] = useState({});
  const [buttonIndicator, setButtonIndicator] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
    },
  });

  const submitForm = (data) => {
    sendEmail(data);
    setButtonIndicator(true);
    setActive && setActive(false);
    setTimeout(() => setButtonIndicator(false), 3000);
  };

  useEffect(() => {
    reset({
      name: '',
      email: '',
      message: '',
    });
  }, [isSubmitSuccessful]);

  const sendEmail = (data) => {
    axios
      .post(`${StrapiServiceInstance.baseURL}/api/email`, {
        to: `${StrapiServiceInstance._sendAddress}`,
        from: 'leto-group',
        subject: 'Заявка с сайта',
        html: `<h1>${data.name}</h1>
        <p><strong>Почта:</strong>: ${data.email}</p>
        <p><strong>Детали:</strong>: ${data.message}</p>
        `,
        text: data.message,
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const setCurrentFormData = (value, inputName) => {
    setFormsData({
      ...formsData,
      [inputName]: value,
    });
  };

  const buttonText = buttonIndicator ? 'Заявка отправлена' : buttonLabel;

  return (
    <form className="custom-form-wrapper" onSubmit={handleSubmit(submitForm)}>
      <CustomTextField
        inputName="name"
        placeholder="Ваше имя"
        isFullField={!!formsData['name']}
        setCurrentFormData={setCurrentFormData}
        type="text"
        test={register}
        style={errors.name ? { borderColor: 'red' } : null}
      />
      <CustomTextField
        inputName="email"
        placeholder="Ваш email"
        isFullField={!!formsData['email']}
        setCurrentFormData={setCurrentFormData}
        type="email"
        test={register}
        style={errors.email ? { borderColor: 'red' } : null}
      />
      <CustomTextArea
        inputName="message"
        placeholder="Ваш сообщение"
        isFullField={!!formsData['message']}
        setCurrentFormData={setCurrentFormData}
        test={register}
      />
      <CustomButton
        styles="form-button btn-text"
        label={buttonText}
        type="sumbit"
        style={buttonIndicator ? { backgroundColor: '#FF6600' } : null}
      />
    </form>
  );
};
