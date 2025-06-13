# MediMind Expert - Modular Translation System

## 🌍 Overview

This directory contains the internationalization (i18n) translations for MediMind Expert, organized in a modular structure for better maintainability and scalability.

## 📁 Directory Structure

```
src/i18n/translations/
├── en/                    # English translations
│   ├── index.ts          # Main entry point
│   ├── common.ts         # Basic UI elements
│   ├── navigation.ts     # Navigation and menus
│   ├── auth.ts          # Authentication
│   ├── chat.ts          # Chat system
│   ├── documents.ts     # Knowledge base
│   ├── medical.ts       # Medical terminology
│   ├── validation.ts    # Validation & errors
│   └── calculators/
│       ├── index.ts     # Calculator exports
│       ├── common.ts    # Shared calculator UI
│       ├── cardiology.ts # Cardiology calculators
│       └── obgyn.ts     # OB/GYN calculators
├── ka/                  # Georgian translations (same structure)
├── ru/                  # Russian translations (same structure)
└── README.md           # This file
```

## 🔧 Module Structure

### Core Modules

- **`common.ts`** - Basic UI elements, buttons, actions
- **`navigation.ts`** - Navigation menus, sidebar, routing
- **`auth.ts`** - Authentication, login, signup
- **`chat.ts`** - AI chat interface, messaging
- **`documents.ts`** - Knowledge base, file upload, document management
- **`medical.ts`** - Medical terminology, units, basic medical terms
- **`validation.ts`** - Form validation, error messages, feedback

### Calculator Modules

- **`calculators/common.ts`** - Shared calculator UI elements
- **`calculators/cardiology.ts`** - Cardiology-specific calculators
- **`calculators/obgyn.ts`** - OB/GYN-specific calculators

## 🚀 Usage

### Importing Translations

```typescript
// In components, import the main translation object
import { useTranslation } from '../../hooks/useTranslation';

const MyComponent = () => {
  const { t } = useTranslation();
  
  return (
    <div>
      <h1>{t('common.save')}</h1>
      <p>{t('chat.welcomeMessage')}</p>
      <button>{t('calculators.common.calculate')}</button>
    </div>
  );
};
```

### Adding New Translations

1. **For existing modules**: Add the key to the appropriate module file
2. **For new features**: Create a new module file and import it in `index.ts`

## 📝 Translation Key Structure

### Dot Notation
Use dot notation to organize translations hierarchically:

```typescript
// ✅ Good
{
  auth: {
    signIn: 'Sign In',
    signUp: 'Sign Up',
    forgot: {
      title: 'Forgot Password',
      subtitle: 'Reset your password'
    }
  }
}

// ❌ Avoid flat structure
{
  authSignIn: 'Sign In',
  authSignUp: 'Sign Up',
  authForgotTitle: 'Forgot Password'
}
```

### Interpolation
For dynamic content, use interpolation:

```typescript
{
  welcomeMessage: 'Welcome back, {name}!',
  fileCount: 'You have {count} files'
}
```

## 🔄 Migration from Monolithic Structure

### Before (Old Structure)
```typescript
// Single large file: en.ts
export default {
  // 1000+ lines of mixed translations
  signIn: 'Sign In',
  calculatorTitle: 'Calculator',
  chatMessage: 'Type message...',
  // ... hundreds more lines
};
```

### After (New Structure)
```typescript
// Multiple focused files
// auth.ts
export default {
  signIn: 'Sign In',
  signUp: 'Sign Up',
  // ... auth-related only
};

// calculators/common.ts
export default {
  calculate: 'Calculate',
  result: 'Result',
  // ... calculator-related only
};
```

## 💡 Best Practices

### 1. Module Organization
- Keep related translations together
- Create new modules for major features
- Use consistent naming conventions

### 2. Key Naming
- Use camelCase for keys
- Be descriptive but concise
- Group related keys under objects

### 3. Content Guidelines
- Write clear, professional medical language
- Maintain consistency across languages
- Consider context for medical professionals

### 4. File Management
- Keep individual files under 200 lines
- Split large modules into sub-modules
- Update all language files when adding keys

## 🌐 Language Support

Currently supported languages:
- **English (en)** - Primary language
- **Georgian (ka)** - Secondary language
- **Russian (ru)** - Secondary language

### Adding a New Language

1. Create new language directory: `src/i18n/translations/[language-code]/`
2. Copy the structure from `en/` directory
3. Translate all content while maintaining the same key structure
4. Update the main i18n configuration

## 🧪 Testing Translations

### Verification Checklist
- [ ] All translation keys exist in all language files
- [ ] No missing interpolation variables
- [ ] Consistent terminology across modules
- [ ] Professional medical language maintained
- [ ] Build passes without TypeScript errors

### Testing Commands
```bash
# Build and verify translations
npm run build

# Type check
npm run type-check

# Test specific language
npm run test:i18n
```

## 🔧 Maintenance

### Regular Tasks
1. **Weekly**: Check for unused translation keys
2. **Monthly**: Review and update medical terminology
3. **Quarterly**: Audit translation consistency across languages

### Adding New Features
1. Create translations in `en/` first
2. Add corresponding keys to `ka/` and `ru/`
3. Test all language versions
4. Update this README if new modules are added

## 📊 Benefits of Modular Structure

- ✅ **Maintainability**: Easier to find and update specific translations
- ✅ **Collaboration**: Team members can work on different modules simultaneously
- ✅ **Performance**: Smaller bundle sizes and potential for lazy loading
- ✅ **Organization**: Clear separation of concerns
- ✅ **Scalability**: Easy to add new features and languages
- ✅ **Type Safety**: Better TypeScript support and error detection

## 🚀 Future Enhancements

- **Lazy Loading**: Load translation modules on-demand
- **Pluralization**: Enhanced plural form support
- **Context**: Context-aware translations for medical terms
- **Validation**: Automated translation key validation
- **Tooling**: Custom tools for translation management

---

*For questions or suggestions about the translation system, please refer to the development team.* 