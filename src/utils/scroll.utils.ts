export const scrollToSection = async (sectionId: string) => {
  const section = document.getElementById(sectionId);
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};

export const scrollToTop = async () => {
  const section = document.getElementById('header');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
