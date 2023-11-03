import { FC } from "react";
import "./clients-section.scss";
import ClientCard from "./clients-card/ClientCard";

const ClientSection: FC = () => {
  return (
    <>
      <ClientCard
        name="Dominika i Azorek"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ultricies odio quis euismod blandit. Vestibulum a luctus metus. "
        pictureURL="src\assets\images\client-dog1.png"
        pictureAlt="A corgi staring to the front with it's tongue out."
      ></ClientCard>
    </>
  );
};

export default ClientSection;
