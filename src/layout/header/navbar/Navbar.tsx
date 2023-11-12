import { FC } from "react";
import MainButton from "../../../components/buttons/MainButton";
import classNames from "classnames";
import { scrollToSection } from "../../../utils/scrollUtils";
import { HomepageSections } from "../../../models/enums.app";
import "./navbar.scss";
import { useLocation, useNavigate } from "react-router-dom";
interface Props {
  className?: string;
  toggleMobileNavbar?: () => void;
}

const Navbar: FC<Props> = ({ className, toggleMobileNavbar }) => {
  const navigate = useNavigate();
  const location = useLocation();

  const onNavbarLinkClick = (section: string) =>{
    if (toggleMobileNavbar) toggleMobileNavbar();
    scrollToSection(section);
  }
  async function onNavbarAsyncClick(section:string){
    if(toggleMobileNavbar) toggleMobileNavbar();
    let isResolved: boolean = false;
    await navigateNotHome().then(function() {isResolved = true})
    if(isResolved)
    scrollToSection(section);
  } 
  async function navigateNotHome(){
    const res = navigate('/');
    return res;
  }
 
  return (
    <div className={classNames("navbar", className)}>
      <div className="navbar__element">
        {}
        <a
          className="navbar__element-link"
          onClick={() => location.pathname != '/' ? onNavbarAsyncClick(HomepageSections.About) : onNavbarLinkClick(HomepageSections.About)}
          tabIndex={0}
        >
          Główna
        </a>
      </div>
      <div className="navbar__element">
        <a
          className="navbar__element-link"
          onClick={() => location.pathname != '/' ? onNavbarAsyncClick(HomepageSections.About) : onNavbarLinkClick(HomepageSections.About)}
          tabIndex={0}
        >
          O nas
        </a>
      </div>
      <div className="navbar__element">
        <a
          className="navbar__element-link"
          // onClick={() => onNavbarLinkClick(HomepageSections.Offer)}
          onClick={() => location.pathname != '/' ? onNavbarAsyncClick(HomepageSections.Offer) : onNavbarLinkClick(HomepageSections.Offer)}
          tabIndex={0}
          id="navbar__anchor"
        >
          Oferta
        </a>
      </div>
      <div className="navbar__element">
        <a
          className="navbar__element-link"
          onClick={() => location.pathname != '/' ? onNavbarAsyncClick(HomepageSections.Clients) : onNavbarLinkClick(HomepageSections.Clients)}
          tabIndex={0}
        >
          Nasi Klienci
        </a>
      </div>
      <div className="navbar__element">
        <a
          className="navbar__element-link"
          onClick={() => location.pathname != '/' ? onNavbarAsyncClick(HomepageSections.Contact) : onNavbarLinkClick(HomepageSections.Contact)}
          tabIndex={0}
        >
          Kontakt
        </a>
      </div>
      <MainButton
        className="navbar__login-button"
        content={"Zaloguj się"}
        onClick={() => navigate("/login")}
      />
    </div>
  );
};

export default Navbar;
