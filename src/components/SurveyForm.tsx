import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import styled from 'styled-components';

import TwitchSvg from './svg-components/TwitchSvg';
import TwitterSvg from './svg-components/TwitterSvg';
import LinkedInSvg from './svg-components/LinkedInSvg';

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
      font-size: 1rem;
      border: none;
    }
    textarea {
      height: 10rem;
      padding: 1rem;
      margin: 1rem 0;
      border-radius: 5px;
      font-size: 1rem;
      border: none;
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
    .platform-text {
      margin-bottom: 0;
    }
    .platform-icons-container {
      display: flex;
      justify-content: space-between;
      margin: 1rem 0;
      button {
        svg {
          width: 2rem;
          height: 2rem;
        }
        &:hover {
          background: #e72f7258;
          svg {
            fill: white;
          }
        }
        &.active {
          background: #e72f73;
          svg {
            fill: white;
          }
        }
      }
    }
    p {
      text-align: center;
      &.error-msg {
        text-align: left;
        margin-top: 0;
      }
    }
    .consent-container {
      display: flex;
      align-items: center;
      input {
        width: 2rem;
        height: 2rem;
      }
      label {
        margin-left: 1rem;
        text-align: left;
      }
    }
    button[type='button'] {
      height: 3.5rem;
      width: 3.5rem;
      background: white;
      margin: 0;
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
  const [age, role] = watch(['age', 'role']);

  useEffect(() => {
    setShowConsent(age > 0 && age < 18);
  }, [age, role]);

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    if (data.role !== 'developer') data.tech = '';
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
            <option value="">Role</option>
            <option value="developer">Developer</option>
            <option value="tester">Tester</option>
            <option value="product-manager">Product Manger</option>
          </select>
          {errors.role && <p className="error-msg">* Role field is required</p>}
          {role === 'developer' && (
            <select {...register('tech')}>
              <option value="">Technology</option>
              <option value="javascript">JavaScript</option>
              <option value="ruby">Ruby on rails</option>
              <option value="pyton">Python</option>
              <option value="pyton">C#</option>
              <option value="pyton">PHP</option>
              <option value="pyton">Java</option>
            </select>
          )}
          <p placeholder="Leave me a comment" {...register('comment')} />
          <p className="platform-text">Select in which platform you follow me</p>
          <div className="platform-icons-container">
            <button
              className={`${platform === 'twitch' ? 'active' : ''}`}
              type="button"
              onClick={() => setPlatform('twitch')}
            >
              <TwitchSvg />
            </button>
            <button
              className={`${platform === 'twitter' ? 'active' : ''}`}
              type="button"
              onClick={() => setPlatform('twitter')}
            >
              <TwitterSvg />
            </button>
            <button
              className={`${platform === 'linkedin' ? 'active' : ''}`}
              type="button"
              onClick={() => setPlatform('linkedin')}
            >
              <LinkedInSvg />
            </button>
          </div>
          <input
            placeholder="Age"
            type="number"
            {...register('age', {
              min: 17,
              required: true,
            })}
            className={`${errors.age ? 'error' : ''}`}
          />
          {errors.age && <p className="error-msg">* Age field is required</p>}
          {showConsent && (
            <>
              <div className="consent-container">
                <input
                  id="consent-input"
                  type="checkbox"
                  {...register('consent', {
                    validate: (value) => {
                      console.log(value);

                      return value === true;
                    },
                  })}
                  className={`${errors.consent ? 'error' : ''}`}
                />
                <label htmlFor="consent-input">I have consent of been supervised by an adult</label>
              </div>
              {errors.consent && (
                <p className="error-msg">
                  * You have to check the consent in order to submit the form
                </p>
              )}
            </>
          )}

          <button type="submit">SUBMIT</button>
        </div>
      </form>
    </SurveyFormContainer>
  );
}

export default SurveyForm;
