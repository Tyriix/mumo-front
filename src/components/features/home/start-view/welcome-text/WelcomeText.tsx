import { FC } from 'react'
import './welcome-text.scss'

const WelcomeText: FC = () => {
  return (
    <div className="welcome-section">
      <div className="welcome-section__text">
        <h3 className="welcome-section__header">Witaj!</h3>
        <p className="welcome-section__paragraph">
          Zrobiłeś już pierwszy krok do naprawienia lub stworzenia relacji ze
          swoim psem.
        </p>
        <p className="welcome-section__paragraph">
          Od dawna wiadomo, że przemoc fizyczna lub psychiczna w wychowaniu
          zwierząt przynosi tylko negatywne skutki. Jeśli pracujesz ze strachu,
          to jesteś kiepsko motywowany, a praca kojarzy Ci się źle, jeśli
          motywacja jest pozytywna, to praca przestaje być pracą, tylko staje
          się wyzwaniem i zabawą, której skutki są trwałe.
        </p>
        <p className="welcome-section__paragraph">
          W Metodzie Naturalnej pracy ze zwierzętami wykorzystuje się po
          pierwsze wzmocnienia pozytywne ("marchewka zamiast kija") a po drugie
          komunikaty zrozumiałe dla przedstawicieli innych gatunków.
        </p>
        <p className="welcome-section__paragraph">
          Ludzie mogą się bowiem nauczyć języka psów, ale psy nie potrafią się
          nauczyć języka ludzi. Jeśli więc nauczysz się psiego języka
          komunikacji, zdobędziesz nie tylko zaufanie swojego psa, ale też
          wypracujesz tę unikatową więź, która spowoduje że staniecie się
          przyjaciółmi.
        </p>
      </div>
    </div>
  )
}

export default WelcomeText
