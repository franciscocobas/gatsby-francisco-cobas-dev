import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';

import SEO from '../components/seo';
import '../global.scss';
import logo from '../images/fc-logo.svg';
import TwitterImg from '../images/twitter_white.svg';
import TwitchSvg from '../images/twitch_white.svg';

const StyledTimerPageComponent = styled.div`
  background: black;
  color: white;
  min-height: 100vh;
  p {
    margin: 0;
    padding: 0;
    font-family: 'IBMPlexExtraLight';
  }
  .italic {
    font-family: 'IBMPlexExtraLightItalic';
  }
  .main-container {
    max-width: 1100px;
    margin: 0 auto;
  }
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
  .header .logo {
    width: 9rem;
    height: 9rem;
  }
  .header form input {
    width: 4rem;
    height: 4rem;
    border-radius: 5px;
    font-size: 1.5rem;
    -webkit-appearance: none;
    -moz-appearance: textfield;
    padding: 0 1rem;
    text-align: center;
  }
  .header form span {
    font-size: 2rem;
    margin: 0 0.5rem;
  }
  .header form button {
    border-radius: 50%;
    width: 4.5rem;
    height: 4.5rem;
    border: 1px solid gray;
    cursor: pointer;
    margin-left: 2rem;
    font-size: 1.2rem;
    background: rgb(177, 177, 177);
  }

  .timer-container {
    font-size: 3.5rem;
    font-family: 'IBMPlexExtraLight';
  }
  .clock {
    font-size: 9rem;
  }

  .timer-and-social-networks-container {
    display: grid;
    grid-template-columns: 3fr 1fr;
  }

  .social-networks-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .social-networks-container > div {
    display: flex;
    align-items: center;
    margin: 1rem 0;
  }
  .social-networks-container a {
    margin-left: 1rem;
    font-size: 1.2rem;
    cursor: pointer;
    color: white;
    text-decoration: none;
    font-family: 'IBMPlex';
  }
  .social-networks-container img {
    width: 3.5rem;
    height: 3.5rem;
  }
`;

const DEFAULT_TIMER_TIME = new Date(0, 0, 0, 0, 15, 0);

const IndexPage = () => {
  const interval = useRef<any>(null);
  const [timer, setTimer] = useState<Date>(DEFAULT_TIMER_TIME);
  const { register, handleSubmit, watch, getValues } = useForm();
  const [isTimerRunning, setIsTimerRunning] = useState<boolean>(false);
  const [timerFinished, setTimerFinished] = useState<boolean>(false);

  useEffect(() => {
    const hours = watch(({ hours, minutes, seconds }) => {
      setTimer(new Date(0, 0, 0, hours, minutes, seconds));
    });

    return () => hours.unsubscribe();
  }, [watch]);

  const onSubmit = ({
    hours,
    minutes,
    seconds,
  }: {
    hours: number;
    minutes: number;
    seconds: number;
  }) => {
    setTimer(new Date(0, 0, 0, hours, minutes, seconds));
  };

  const startOrStopTimer = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (isTimerRunning) {
      setIsTimerRunning(false);
      clearInterval(interval.current);

      return;
    }
    setIsTimerRunning(true);
    interval.current = setInterval(() => {
      setTimer((cTimer) => {
        let newSecond = cTimer.getSeconds();

        newSecond--;
        if (cTimer.getHours() === 0 && cTimer.getMinutes() === 0 && newSecond === 0) {
          setTimerFinished(true);
          clearInterval(interval.current);

          return new Date(0, 0, 0, 0, 0, 0);
        }

        return new Date(
          cTimer.getFullYear(),
          cTimer.getMonth(),
          cTimer.getDate(),
          cTimer.getHours(),
          cTimer.getMinutes(),
          newSecond,
        );
      });
    }, 1000);
  };

  const resetTimer = () => {
    setTimer(new Date(0, 0, 0, getValues('hours'), getValues('minutes'), getValues('seconds')));
  };

  return (
    <>
      <SEO />
      <StyledTimerPageComponent>
        <div className="main-container">
          <div className="header">
            <img alt="Logo de Francisco Cobas" className="logo" src={logo} />
            <form onSubmit={handleSubmit(onSubmit)}>
              <input
                type="number"
                {...register('hours', { max: 2 })}
                defaultValue={DEFAULT_TIMER_TIME.getHours()}
                disabled={isTimerRunning}
              />
              <span>:</span>
              <input
                type="number"
                {...register('minutes', { max: 2 })}
                defaultValue={DEFAULT_TIMER_TIME.getMinutes()}
                disabled={isTimerRunning}
              />
              <span>:</span>
              <input
                type="number"
                {...register('seconds', { max: 2 })}
                defaultValue={DEFAULT_TIMER_TIME.getSeconds()}
                disabled={isTimerRunning}
              />
              <button onClick={startOrStopTimer}>{isTimerRunning ? 'Stop' : 'Start'}</button>
              <button onClick={resetTimer}>Reset</button>
            </form>
          </div>
          <div className="timer-and-social-networks-container">
            <div className="timer-container">
              <p>Faltan</p>
              <p className={`${timerFinished ? 'finished' : ''} clock`}>
                {timer.getHours() < 10 ? `0${timer.getHours()}` : timer.getHours()}:
                {timer.getMinutes() < 10 ? `0${timer.getMinutes()}` : timer.getMinutes()}:
                {timer.getSeconds() < 10 ? `0${timer.getSeconds()}` : timer.getSeconds()}
              </p>
              <p>para que empecemos</p>
              <p className="italic">...stay tuned</p>
            </div>
            <div className="social-networks-container">
              <div>
                <img alt="Icono de Twitter" src={TwitterImg} />
                <a href="https://twitter.com/MrRobotUy" rel="noreferrer" target="_blank">
                  @MrRobotUy
                </a>
              </div>
              <div>
                <img alt="Icono de Twitch" src={TwitchSvg} />
                <a href="https://www.twitch.tv/franciscodev_uy" rel="noreferrer" target="_blank">
                  @franciscoDEV_uy
                </a>
              </div>
            </div>
          </div>
        </div>
      </StyledTimerPageComponent>
    </>
  );
};

export default IndexPage;
