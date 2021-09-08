import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

import TwitchIcon from '../images/twitch_black.svg';
import TwitterIcon from '../images/twitter.svg';
import LinkedInIcon from '../images/linkedin_black.svg';

const SurveyFormContainer = styled.div`
  .error {
    border: 3px solid rgb(172, 68, 68);
  }

  form {
    background: #ffffff20;
    padding: 1rem 0 3rem;
    display: flex;
    justify-content: center;
    border-radius: 5px;
    & > div {
      width: 400px;
      display: flex;
      flex-direction: column;
    }
    input,
    select {
      height: 3rem;
      padding: 0 1rem;
      margin: 1rem 0;
      border-radius: 5px;
    }
    textarea {
      height: 10rem;
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 5px;
    }
    button {
      height: 3rem;
      background: #e72f73;
      margin: 0 3rem;
      color: white;
      cursor: pointer;
      border: none;
      border-radius: 5px;
    }
    .platform-icons-container {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
    }
    p {
      text-align: center;
    }
    .consent-container {
      display: flex;
      align-items: center;
      input {
        width: 2rem;
        height: 2rem;
      }
      p {
        margin-left: 1rem;
      }
    }
    button[type='button'] {
      height: 3.5rem;
      width: 3.5rem;
      background: white;
      margin: 0;
      img {
        width: 2rem;
        height: 2rem;
      }
      &.active {
        background: #e72f73;
        img {
          fill: white;
        }
      }
    }
    button[type='submit'] {
      font-weight: bold;
      margin-top: 1rem;
      font-size: 1.1rem;
    }
  }
`;

type Inputs = {
  role: string;
  tech: string;
  comment: string;
  age: number;
  consent: boolean;
};

function SurveyForm(): JSX.Element {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm<Inputs>();
  const [platform, setPlatform] = useState<string>('');
  const [showConsent, setShowConsent] = useState<boolean>(false);
  const watchAge = watch('age');

  useEffect(() => {
    setShowConsent(watchAge > 0 && watchAge < 18);
  }, [watchAge]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <SurveyFormContainer>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <select
            {...register('role', {
              required: true,
            })}
            className={`${errors.role ? 'error' : ''}`}
          >
            <option value=''>Role</option>
            <option value='developer'>Developer</option>
            <option value='tester'>Tester</option>
            <option value='product-manager'>Product Manger</option>
          </select>
          <select {...register('tech')}>
            <option value=''>Technology</option>
            <option value='javascript'>JavaScript</option>
            <option value='ruby'>Ruby on rails</option>
            <option value='pyton'>Python</option>
          </select>
          <textarea
            placeholder='Leave me a comment'
            {...register('comment')}
          ></textarea>
          <p className='platform-text'>
            Select in which platform you follow me
          </p>
          <div className='platform-icons-container'>
            <button
              type='button'
              onClick={() => setPlatform('twitch')}
              className={`${platform === 'twitch' ? 'active' : ''}`}
            >
              <img src={TwitchIcon} alt='Logo de Twitch' />
            </button>
            <button
              type='button'
              onClick={() => setPlatform('twitter')}
              className={`${platform === 'twitter' ? 'active' : ''}`}
            >
              <img src={TwitterIcon} alt='Logo de Twitter' />
            </button>
            <button
              type='button'
              onClick={() => setPlatform('linkedin')}
              className={`${platform === 'linkedin' ? 'active' : ''}`}
            >
              <img src={LinkedInIcon} alt='Logo de LinkedIn' />
            </button>
          </div>
          <input
            type='number'
            placeholder='Age'
            {...register('age', {
              min: 7,
              required: true,
            })}
            className={`${errors.age ? 'error' : ''}`}
          />
          {showConsent && (
            <div className='consent-container'>
              <input type='checkbox' {...register('consent')} />
              <p>I have consent of been supervised by an adult</p>
            </div>
          )}

          <button type='submit'>SUBMIT</button>
        </div>
      </form>
    </SurveyFormContainer>
  );
}

export default SurveyForm;
