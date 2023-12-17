import { FC, useRef, useState } from 'react';
import ArrowChevron from '../../../../components/shapes/arrows/ArrowChevron';
import { Direction } from '../../../../models/enums/enums.app';
import classnames from 'classnames';
import './welcome-text.scss';

const WelcomeText: FC = () => {
  const [clamped, setClamped] = useState(true);
  const ref = useRef<null | HTMLDivElement>(null);

  const handleClick = () => {
    setClamped(!clamped);
    if (!clamped) ref.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className='welcome-section'>
      <div
        ref={ref}
        className={classnames('welcome-section__content', !clamped && 'open')}
      >
        <h3 className='welcome-section__header'>Witaj!</h3>
        <p className={classnames('welcome-section__text', clamped && 'clamp')}>
          Zrobiłeś już pierwszy krok do naprawienia lub stworzenia relacji ze
          swoim psem.
          <br /> <br />
          Od dawna wiadomo, że przemoc fizyczna lub psychiczna w wychowaniu
          zwierząt przynosi tylko negatywne skutki. Jeśli pracujesz ze strachu,
          to jesteś kiepsko motywowany, a praca kojarzy Ci się źle, jeśli
          motywacja jest pozytywna, to praca przestaje być pracą, tylko staje
          się wyzwaniem i zabawą, której skutki są trwałe.
          <br /> <br />
          W Metodzie Naturalnej pracy ze zwierzętami wykorzystuje się po
          pierwsze wzmocnienia pozytywne ("marchewka zamiast kija") a po drugie
          komunikaty zrozumiałe dla przedstawicieli innych gatunków.
          <br /> <br />
          Ludzie mogą się bowiem nauczyć języka psów, ale psy nie potrafią się
          nauczyć języka ludzi. Jeśli więc nauczysz się psiego języka
          komunikacji, zdobędziesz nie tylko zaufanie swojego psa, ale też
          wypracujesz tę unikatową więź, która spowoduje że staniecie się
          przyjaciółmi.
        </p>
      </div>
      <button
        className='welcome-section__button'
        onClick={handleClick}
        aria-label={clamped ? 'Read more' : 'Read less'}
      >
        <ArrowChevron
          direction={clamped ? Direction.Down : Direction.Up}
          color={'#ffffff'}
        />
      </button>
    </div>
  );
};

export default WelcomeText;
