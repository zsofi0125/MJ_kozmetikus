import { initHeader } from './components/header.js';
import { initAnimations } from './components/animations.js';
import { initGallery } from './components/gallery.js';
import { initI18n } from './utils/translations.js';

document.addEventListener('DOMContentLoaded', () => {
  initHeader();
  initAnimations();
  initGallery();
  initI18n();
});
