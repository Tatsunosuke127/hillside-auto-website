/* ============================================
   Language Toggle System
   ============================================ */

(function () {
  'use strict';

  const STORAGE_KEY = 'hillside-lang';
  const DEFAULT_LANG = 'ja';
  const SUPPORTED_LANGS = ['ja', 'en'];

  function detectBrowserLang() {
    const browserLang = navigator.language || navigator.userLanguage || '';
    const primary = browserLang.split('-')[0].toLowerCase();
    return SUPPORTED_LANGS.includes(primary) ? primary : DEFAULT_LANG;
  }

  function getSavedLang() {
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved && SUPPORTED_LANGS.includes(saved)) return saved;
    } catch (e) {
      // localStorage unavailable
    }
    return null;
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch (e) {
      // localStorage unavailable
    }
  }

  function setLang(lang) {
    if (!SUPPORTED_LANGS.includes(lang)) return;

    document.body.classList.remove('lang-ja', 'lang-en');
    document.body.classList.add('lang-' + lang);
    document.documentElement.lang = lang;

    // Update toggle buttons
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.classList.toggle('active', btn.dataset.langBtn === lang);
    });

    // Update page title if bilingual titles exist
    var titleJa = document.querySelector('meta[name="title-ja"]');
    var titleEn = document.querySelector('meta[name="title-en"]');
    if (titleJa && titleEn) {
      document.title = lang === 'ja' ? titleJa.content : titleEn.content;
    }

    // Update meta description
    var descJa = document.querySelector('meta[name="desc-ja"]');
    var descEn = document.querySelector('meta[name="desc-en"]');
    var metaDesc = document.querySelector('meta[name="description"]');
    if (descJa && descEn && metaDesc) {
      metaDesc.content = lang === 'ja' ? descJa.content : descEn.content;
    }

    // Update placeholders
    document.querySelectorAll('[data-placeholder-ja][data-placeholder-en]').forEach(function (el) {
      el.placeholder = lang === 'ja' ? el.dataset.placeholderJa : el.dataset.placeholderEn;
    });

    // Update select options text
    document.querySelectorAll('[data-select-lang] option').forEach(function (opt) {
      if (opt.dataset.ja && opt.dataset.en) {
        opt.textContent = lang === 'ja' ? opt.dataset.ja : opt.dataset.en;
      }
    });

    saveLang(lang);
  }

  function init() {
    var lang = getSavedLang() || detectBrowserLang();

    // For foreigners page defaults to English
    if (document.body.dataset.defaultLang === 'en' && !getSavedLang()) {
      lang = 'en';
    }

    setLang(lang);

    // Bind toggle buttons
    document.querySelectorAll('[data-lang-btn]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        setLang(this.dataset.langBtn);
      });
    });
  }

  // Expose globally for external use
  window.HillsideLang = { setLang: setLang };

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
