export const scrollToSection = (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export const scrollToTop = () => {
  const section = document.getElementById('header');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
