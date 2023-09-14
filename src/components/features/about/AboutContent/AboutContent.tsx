import "./AboutContent.scss";
import { Fade } from 'react-awesome-reveal'
const AboutContent = () => {
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="42"
                height="43"
                viewBox="0 0 42 43"
                fill="none"
                className="about__image-circle"
              >
                <ellipse
                  cx="21"
                  cy="21.5"
                  rx="21"
                  ry="21.5"
                  fill="#B1E8DF"
                  fill-opacity="0.66"
                />
                <ellipse
                  cx="12.4628"
                  cy="12.7492"
                  rx="12.4628"
                  ry="12.7492"
                  transform="matrix(0.990965 0.134118 -0.128056 0.991767 10.3838 7.28809)"
                  fill="white"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="75"
                height="74"
                viewBox="0 0 75 74"
                fill="none"
                className="about__image-circle"
              >
                <ellipse
                  cx="37.5"
                  cy="37"
                  rx="37.5"
                  ry="37"
                  fill="#B1E8DF"
                  fill-opacity="0.92"
                />
                <ellipse
                  cx="22.2407"
                  cy="21.9543"
                  rx="22.2407"
                  ry="21.9543"
                  transform="matrix(0.991601 0.129335 -0.132793 0.991144 18.5427 12.542)"
                  fill="white"
                />
              </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="43"
              viewBox="0 0 42 43"
              fill="none"
              className="about__image-circle"
            >
              <ellipse
                cx="21"
                cy="21.5"
                rx="21"
                ry="21.5"
                fill="#B1E8DF"
                fill-opacity="0.66"
              />
              <ellipse
                cx="12.4628"
                cy="12.7492"
                rx="12.4628"
                ry="12.7492"
                transform="matrix(0.990965 0.134118 -0.128056 0.991767 10.3838 7.28809)"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="42"
              height="43"
              viewBox="0 0 42 43"
              fill="none"
              className="about__image-circle"
            >
              <ellipse
                cx="21"
                cy="21.5"
                rx="21"
                ry="21.5"
                fill="#B1E8DF"
                fill-opacity="0.66"
              />
              <ellipse
                cx="12.4628"
                cy="12.7492"
                rx="12.4628"
                ry="12.7492"
                transform="matrix(0.990965 0.134118 -0.128056 0.991767 10.3838 7.28809)"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="75"
              height="74"
              viewBox="0 0 75 74"
              fill="none"
              className="about__image-circle"
            >
              <ellipse
                cx="37.5"
                cy="37"
                rx="37.5"
                ry="37"
                fill="#B1E8DF"
                fill-opacity="0.92"
              />
              <ellipse
                cx="22.2407"
                cy="21.9543"
                rx="22.2407"
                ry="21.9543"
                transform="matrix(0.991601 0.129335 -0.132793 0.991144 18.5425 12.5425)"
                fill="white"
              />
            </svg>
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="32"
              viewBox="0 0 31 32"
              fill="none"
              className="about__image-circle"
            >
              <ellipse
                cx="15.5779"
                cy="15.9112"
                rx="14.9333"
                ry="15.2889"
                fill="#B1E8DF"
                fill-opacity="0.66"
              />
              <ellipse
                cx="8.86242"
                cy="9.0661"
                rx="8.86242"
                ry="9.0661"
                transform="matrix(0.990965 0.134118 -0.128056 0.991767 8.02832 5.80493)"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="55"
              height="54"
              viewBox="0 0 55 54"
              fill="none"
              className="about__image-circle"
            >
              <ellipse
                cx="27.3781"
                cy="26.867"
                rx="26.6667"
                ry="26.3111"
                fill="#B1E8DF"
                fill-opacity="0.92"
              />
              <ellipse
                cx="15.8156"
                cy="15.6119"
                rx="15.8156"
                ry="15.6119"
                transform="matrix(0.991601 0.129335 -0.132793 0.991144 13.897 9.47498)"
                fill="white"
              />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="31"
              height="32"
              viewBox="0 0 31 32"
              fill="none"
              className="about__image-circle"
            >
              <ellipse
                cx="15.4226"
                cy="16.0225"
                rx="14.9333"
                ry="15.2889"
                fill="#B1E8DF"
                fill-opacity="0.66"
              />
              <ellipse
                cx="8.86242"
                cy="9.0661"
                rx="8.86242"
                ry="9.0661"
                transform="matrix(0.990965 0.134118 -0.128056 0.991767 7.87305 5.91626)"
                fill="white"
              />
            </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
