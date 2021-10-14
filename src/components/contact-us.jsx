import React, { useState } from 'react';
import SectionLayout from '../layouts/section-layout';
import { sectionLayoutChildAnimation } from '../utils/animations';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { navigate } from 'gatsby';
import ReCAPTCHA from 'react-google-recaptcha';

export default function ContactUs() {
  const AWS_API_GATEWAY = process.env.GATSBY_ENV_AWS_CONTACT_FORM_API_GATEWAY;
  const reCAPTCHA_KEY = process.env.GATSBY_ENV_RECAPTCHA_KEY;
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm();
  const [capcha, setCaptcha] = useState(false);

  const onSubmit = async (data) => {
    if (!capcha) {
      return;
    } else {
      try {
        fetch(AWS_API_GATEWAY, {
          method: 'POST',
          mode: 'cors',
          cache: 'no-cache',
          body: JSON.stringify(data),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        });
        navigate('/thank-you');
      } catch (error) {
        setError('submit', 'submitError', `Doh! ${error.message}`);
      }
    }
  };

  return (
    <SectionLayout noBottomBorder={true}>
      <div className="pb-16 mb-16 ">
        <motion.div
          variants={sectionLayoutChildAnimation}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="my-1 text-3xl  text-gray-600 font-bold">Contact Us</p>
          <p className="my-1  text-lg  font-normal text-gray-700 ">
            We’re here to help
          </p>
        </motion.div>
        <form onSubmit={handleSubmit(onSubmit)} method="post">
          <motion.div variants={sectionLayoutChildAnimation}>
            <div className=" max-w-lg mx-auto py-6  ">
              <div className="input_wrapper my-3">
                <input
                  {...register('name', {
                    required: true,
                    maxLength: 30,
                    minLength: 2,
                  })}
                  type="text"
                  className={`flex-1  appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-accuterraBlue-500 focus:border-transparent ${
                    errors.name
                      ? 'border-2 border-red-500 '
                      : 'border border-gray-300'
                  }`}
                  placeholder="Name"
                />
                {errors.name && (
                  <div className="text-left text-xs text-red-500">
                    Your name is required
                  </div>
                )}
              </div>
              <div className="input_wrapper my-3">
                <input
                  {...register('organization', {
                    required: false,
                    maxLength: 30,
                    minLength: 2,
                  })}
                  type="text"
                  className="border border-gray-300 flex-1  appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-accuterraBlue-500 focus:border-transparent "
                  placeholder="Organization"
                />
              </div>
              <div className="input_wrapper my-3">
                <input
                  {...register('email', {
                    required: true,
                    maxLength: 30,
                    pattern: /^\w+[\w-\.]*\@\w+((-\w+)|(\w*))\.[a-z]{2,3}$/i,
                  })}
                  type="text"
                  className={`flex-1  appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-accuterraBlue-500 focus:border-transparent ${
                    errors.email
                      ? 'border-2 border-red-500 '
                      : 'border border-gray-300'
                  }`}
                  placeholder="Email"
                />
                {errors.email && (
                  <div className="text-left text-xs text-red-500">
                    A valid email is required.
                  </div>
                )}
              </div>
              <div className="input_wrapper my-3">
                <textarea
                  rows="5"
                  {...register('desc', {
                    required: true,
                    maxLength: 100,
                    minLength: 10,
                  })}
                  type="text"
                  className={`flex-1  appearance-none  w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-accuterraBlue-500 focus:border-transparent ${
                    errors.desc
                      ? 'border-2 border-red-500 '
                      : 'border border-gray-300'
                  }`}
                  placeholder="How can we help?"
                />
                {errors.desc && (
                  <div className="text-left text-xs text-red-500">
                    A message is required
                  </div>
                )}
              </div>
            </div>
          </motion.div>
          <motion.div
            variants={sectionLayoutChildAnimation}
            className="flex justify-center flex-col"
          >
            <div
              className={`mx-auto ${
                errors.desc
                  ? 'border-2 border-red-500 '
                  : 'border border-gray-300'
              }`}
            ></div>
            <div className="flex flex-col items-center justify-center">
              <div>
                <ReCAPTCHA
                  sitekey={reCAPTCHA_KEY}
                  onChange={() => setCaptcha(true)}
                />
                <button
                  disabled={!capcha}
                  type="submit"
                  className="disabled:opacity-50 py-2 px-4 m-4 bg-accuterraBlue-500 hover:bg-accuterraBlue-700 focus:ring-accuterraBlue-500 focus:ring-offset-indigo-200 text-white  transition ease-in duration-200 text-center text-sm font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg "
                >
                  <p className="uppercase text-sm text-white font-normal">
                    Submit
                  </p>
                </button>
              </div>
            </div>
          </motion.div>
        </form>
      </div>
    </SectionLayout>
  );
}
