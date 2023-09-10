import "./AboutParagraphs.scss";

const AboutParagraphs = () => {
  return (
    <div className="about">
      <div className="about__paragraphs">
        <div className="about__paragraph">
          <div className="about__paragraph-text">
            <h2 className="about__paragraph__header">o nas</h2>
            <p>
              Nazywam się Aleksandra Korczyk, szkoleniem psów metodą naturalną
              zajmuje się od 2010 roku, przez moje ręce przewinęło się już
              dziesiątki psów wielu ras i z różnymi problemami.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              ultricies odio quis euismod blandit. Vestibulum a luctus metus.
            </p>
            <p>
              Prywatnie jestem hodowcą i właścicielem 7 psów rasy Boston
              Terrier, nie jednego z nich będziecie mieli okazje poznać na
              zajęciach.
            </p>
          </div>
          <div className="about__paragraph-image">
            <img src="assets\HomePage\placeholder.png" alt="Piesek"></img>
          </div>
        </div>
        <div className="about__paragraph">
          <div className="about__paragraph-image">
            <img src="assets\HomePage\placeholder.png" alt="Piesek"></img>
          </div>
          <div className="about__paragraph-text">
            <h2 className="about__paragraph__header">szkolenie</h2>

            <p>Zajęcia odbywają się w mieście Trzebnica w różnych lokacjach.</p>
            <p>
              Kursy miesięczne odbywają się również w Obornikach Śląskich i
              Miliczu po zebraniu grupy min 5 psów.
            </p>
            <p>1 cykl szkoleniowy to 8 zajęć po 45 min.</p>
          </div>
        </div>
        <div className="about__paragraph">
          <div className="about__paragraph-text">
            <p>
              Na zajęcia możesz dołączyć w dowolnej chwili już z
              kilkumiesięcznym szczeniakiem jeśli posiada szczepienie na
              wściekliznę, które ukazujesz na pierwszych zajęciach.
            </p>
            <p>
              Na zajęcia indywidualne zapraszam już szczenięta nawet od 10
              tygodnia życia, ustalimy plan działania, wprowadzimy zasady domowe
              a po szczepieniu na wściekliznę maluch będzie już gotowy by
              dołączyć do zajęć grupowych.
            </p>
          </div>
          <div className="about__paragraph-image">
            <img src="assets\HomePage\placeholder.png" alt="Piesek"></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutParagraphs;
