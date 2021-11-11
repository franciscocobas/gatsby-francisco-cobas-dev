import React, { useEffect, useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';

import TwitchSvg from './svg-components/TwitchSvg';
import TwitterSvg from './svg-components/TwitterSvg';
import LinkedInSvg from './svg-components/LinkedInSvg';

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
    <div>
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
    </div>
  );
}

export default SurveyForm;
