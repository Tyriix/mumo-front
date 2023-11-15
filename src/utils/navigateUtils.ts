import { HomepageSections } from '../models/enums.app';
import { scrollToSection } from './scrollUtils';

export const onNavbarLinkClick = (
  section: HomepageSections,
  toggleMobileNavbar?: () => void
) => {
  if (toggleMobileNavbar) toggleMobileNavbar();
  scrollToSection(section);
};

export const onNavbarAsyncClick = async (
  section: HomepageSections,
  navigateNotHome: () => Promise<void>,
  toggleMobileNavbar?: () => void
) => {
  if (toggleMobileNavbar) toggleMobileNavbar();
  try {
    await navigateNotHome();
    scrollToSection(section);
  } catch (error) {
    console.error('Navigation:', error);
  }
};
