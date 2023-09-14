import { CirclesFirst, CirclesSecond, CirclesThird } from "./about-circles/AboutCircles";
import "./About.scss";
import { Fade } from 'react-awesome-reveal'
const AboutSection = () => {
  return (
    <div className="about">
      <div className="about__container">
        <div className="about__block">
          <div className="about__content">
            <h2 className="about__content-header">o nas</h2>
            <Fade cascade duration={1500} triggerOnce={true}>
            <p className="about__content-paragraph">
              Nazywam się Aleksandra Korczyk, szkoleniem psów metodą naturalną
              zajmuje się od 2010 roku, przez moje ręce przewinęło się już
              dziesiątki psów wielu ras i z różnymi problemami.
            </p>
            <p className="about__content-paragraph">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ultricies odio quis euismod blandit. Vestibulum a luctus metus.
            </p>
            <p className="about__content-paragraph">
              Prywatnie jestem hodowcą i właścicielem 7 psów rasy Boston
              Terrier, nie jednego z nich będziecie mieli okazje poznać na
              zajęciach.
            </p>
            </Fade>        
          </div>
          <div className="about__image-container about__image-first">
            <img
              className="about__image"
              src="assets\HomePage\about_img-1.jpg"
              alt="Piesek"
            ></img>
            <div className="about__image-circles">
            <CirclesFirst />
            </div>
          </div>
        </div>
        <div className="about__block">
          <div className="about__image-container about__image-second">

            <img
              className="about__image"
              src="assets\HomePage\about_img-2.jpg"
              alt="Piesek"
            ></img>
            <div className="about__image-circles">
            <CirclesSecond />
            </div>
          </div>
          <div className="about__content">
          
            <h2 className="about__content-header">szkolenie</h2>
            <Fade cascade duration={1500} triggerOnce={true}>
            <p className="about__content-paragraph">
              Zajęcia odbywają się w mieście Trzebnica w różnych lokacjach.
            </p>
            <p className="about__content-paragraph">
              Kursy miesięczne odbywają się również w Obornikach Śląskich i
              Miliczu po zebraniu grupy min 5 psów.
            </p>
            <p className="about__content-paragraph">
              1 cykl szkoleniowy to 8 zajęć po 45 min.
            </p>
            </Fade>
          </div>
        </div>
        <div className="about__block">
        
          <div className="about__content">
          <Fade cascade duration={1500} triggerOnce={true}>
          <p className="about__content-paragraph">
              Na zajęcia możesz dołączyć w dowolnej chwili już z
              kilkumiesięcznym szczeniakiem jeśli posiada szczepienie na
              wściekliznę, które ukazujesz na pierwszych zajęciach.
            </p>
            <p className="about__content-paragraph">
              Na zajęcia indywidualne zapraszam już szczenięta nawet od 10
              tygodnia życia, ustalimy plan działania, wprowadzimy zasady domowe
              a po szczepieniu na wściekliznę maluch będzie już gotowy by
              dołączyć do zajęć grupowych.
            </p>
          </Fade>
          </div>
          <div className="about__image-container about__image-third">
            <img
              className="about__image"
              src="assets\HomePage\about_img-3.jpg"
              alt="Piesek"
            ></img>
            <div className="about__image-circles">
            <CirclesThird />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
