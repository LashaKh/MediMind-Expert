# 🚀 Quick Translation Checklist

**Use this checklist to translate any medical calculator correctly in one go**

---

## 📁 File Setup
- [ ] Create translation files for all 3 languages (en, ru, ka)
- [ ] Use exact path: `src/i18n/translations/{lang}/calculators/ObGyn/calculator-name.ts`
- [ ] Add exports to `index.ts` files
- [ ] Match exact key structure across all languages

## 🔑 Translation Keys
- [ ] Use consistent namespace: `calculators.obgyn.calculator_name.*`
- [ ] Quote hyphenated keys: `'high-risk': 'value'`
- [ ] Structure arrays as indexed objects
- [ ] Include all result sections: categories, strategies, preparations

## ⚙️ Service Integration
- [ ] Add translation parameter: `t?: (key: string) => string`
- [ ] Pass `t` function from component to service
- [ ] Use exact key paths that match translation files
- [ ] Provide English fallbacks for robustness

## ⚛️ Component Setup
- [ ] Import `useLanguage` hook
- [ ] Add `key={currentLanguage}` to main container
- [ ] Clear results on language change with `useEffect`
- [ ] Pass `t` function to all calculation calls

## 🔄 Language Context
- [ ] Verify `setLanguage` dispatches `languageChange` event
- [ ] Check event listener handles re-renders
- [ ] Ensure localStorage is updated

## 🧪 Testing
- [ ] Switch languages - immediate text updates
- [ ] No stale content persists
- [ ] Results clear when switching languages
- [ ] All result sections translate correctly

## 🐛 Debug Issues
- [ ] Check browser console for translation warnings
- [ ] Verify translation key paths match files
- [ ] Test translation function directly: `t('key.path')`
- [ ] Check `currentLanguage` value

---

**🎯 Success:** All text updates instantly when changing languages with no Georgian text persisting!

*Based on PPH Risk Calculator debugging experience* 