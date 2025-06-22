import common from './common';
import auth from './auth';
import navigation from './navigation';
import chat from './chat';
import medical from './medical';
import validation from './validation';
import documents from './documents';
import knowledgeBase from './knowledgeBase';
import calculators from './calculators';

export default {
  common: {
    ...common,
    getStarted: 'დაწყება',
    evidenceBased: 'მტკიცებულებებზე დაფუძნებული',
    clinicallyValidated: 'კლინიკურად დამტკიცებული',
    hipaaCompliant: 'HIPAA შესაბამისი'
  },
  navigation,
  auth,
  calculators,
  chat,
  documents,
  medical,
  validation,
  knowledgeBase,
  
  // Additional sections
  profile: {
    language: 'ენა',
    profileInfo: 'პროფილის ინფორმაცია',
    security: 'უსაფრთხოება',
    preferences: 'პარამეტრები',
    fullName: 'სრული სახელი',
    medicalSpecialty: 'სამედიცინო სპეციალობა',
    aboutMe: 'ჩემს შესახებ / პროფესიული კონტექსტი',
    editProfile: 'პროფილის რედაქტირება',
    saveChanges: 'ცვლილებების შენახვა',
    cancel: 'გაუქმება',
    saving: 'ინახება...',
    noNameSet: 'სახელი არ არის მითითებული',
    notSet: 'არ არის მითითებული',
    unknown: 'უცნობი',
    memberSince: 'წევრი',
    enterFullName: 'შეიყვანეთ თქვენი სრული სახელი',
    aboutMeDesc: 'ეს ინფორმაცია დაეხმარება AI-ს უზრუნველყოს უფრო პერსონალიზებული დახმარება თქვენი გამოცდილებისა და ცოდნის საფუძველზე.',
    aboutMePlaceholder: 'მოგვითხარით თქვენი სამედიცინო განათლების, გამოცდილების, ინტერესების სფეროების ან ნებისმიერი სხვა კონტექსტის შესახებ, რაც დაეხმარება AI-ს უკეთ დაგეხმაროთ...',
    selectSpecialty: 'აირჩიეთ სპეციალობა',
    cardiology: 'კარდიოლოგია',
    obgyn: 'მეან-გინეკოლოგია',
    internalMedicine: 'შინაგანი მედიცინა',
    emergencyMedicine: 'გადაუდებელი მედიცინა',
    pediatrics: 'პედიატრია',
    surgery: 'ქირურგია',
    familyMedicine: 'საოჯახო მედიცინა',
    psychiatry: 'ფსიქიატრია',
    radiology: 'რადიოლოგია',
    anesthesiology: 'ანესთეზიოლოგია',
    other: 'სხვა',
    nameMinLength: 'სრული სახელი უნდა შეიცავდეს მინიმუმ 2 სიმბოლოს',
    updateSuccess: 'პროფილი წარმატებით განახლდა!',
    updateError: 'პროფილის განახლება ვერ მოხერხდა. სცადეთ თავიდან.',
    passwordUpdateSuccess: 'პაროლი წარმატებით განახლდა!',
    comingSoon: 'მალე',
    preferencesDesc: 'გაფართოებული პარამეტრები, მათ შორის შეტყობინებები, თემები, ენის პარამეტრები და AI ასისტენტის მორგება მალე იქნება ხელმისაწვდომი.',
    closeMenu: 'მენიუს დახურვა',
    
    // Enhanced profile page elements
    personalInformation: 'პირადი ინფორმაცია',
    professionalDetails: 'პროფესიული დეტალები',
    quickActions: 'სწრაფი მოქმედებები',
    viewAnalytics: 'ანალიტიკის ნახვა',
    achievements: 'მიღწევები',
    securitySettings: 'უსაფრთხოების პარამეტრები',
    keepAccountSecure: 'უზრუნველყავით თქვენი ანგარიშის უსაფრთხოება ძლიერი ავთენტიფიკაციით',
    profileStats: 'პროფილის სტატისტიკა',
    profileComplete: 'პროფილის სისრულე',
    securityScore: 'უსაფრთხოების ქულა',
    lastActive: 'ბოლო აქტივობა',
    now: 'ახლა',
    uploadNewPhoto: 'ახალი ფოტოს ატვირთვა',
    changePhoto: 'ფოტოს შეცვლა',
    photoGuidelines: 'ფოტოს სახელმძღვანელო',
    squareImageRecommended: 'რეკომენდირებულია კვადრატული სურათი, მინიმუმ 200×200 პიქსელი',
    maxFileSize: 'ფაილის მაქსიმალური ზომა: 5მბ',
    supportedFormats: 'მხარდაჭერილი ფორმატები: JPG, PNG, GIF',
    settings: 'პარამეტრები',
    systemStatus: 'სისტემის სტატუსი',
    online: 'ონლაინ',
    mediMindExpert: 'MediMind Expert v2.0',
    medicalAiAssistant: 'სამედიცინო AI ასისტენტი',
    display: 'ჩვენება',
    themeLayout: 'თემა და განლაგება',
    notifications: 'შეტყობინებები',
    alertsUpdates: 'გაფრთხილებები და განახლებები',
    aiAssistant: 'AI ასისტენტი',
    personalization: 'პერსონალიზაცია',
    
    // Password change form
    changePassword: 'პაროლის შეცვლა',
    currentPassword: 'მიმდინარე პაროლი',
    newPassword: 'ახალი პაროლი',
    confirmNewPassword: 'დაადასტურეთ ახალი პაროლი',
    enterCurrentPassword: 'შეიყვანეთ თქვენი მიმდინარე პაროლი',
    enterNewPassword: 'შეიყვანეთ თქვენი ახალი პაროლი',
    confirmNewPasswordPlaceholder: 'დაადასტურეთ თქვენი ახალი პაროლი',
    passwordRequirements: 'პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს დიდი, პატარა ასოებითა და ციფრით',
    updatePassword: 'პაროლის განახლება',
    updating: 'განახლება...',
    
    // Password validation messages
    currentPasswordRequired: 'მიმდინარე პაროლი აუცილებელია',
    newPasswordRequired: 'ახალი პაროლი აუცილებელია',
    newPasswordMinLength: 'ახალი პაროლი უნდა შეიცავდეს მინიმუმ 8 სიმბოლოს',
    newPasswordDifferent: 'ახალი პაროლი უნდა განსხვავდებოდეს მიმდინარე პაროლისგან',
    passwordsDoNotMatch: 'ახალი პაროლი და დადასტურება არ ემთხვევა',
    passwordComplexity: 'ახალი პაროლი უნდა შეიცავდეს მინიმუმ ერთ დიდ ასოს, ერთ პატარა ასოს და ერთ ციფრს',
    noAuthenticatedUser: 'ავთენტიფიცირებული მომხმარებელი ვერ მოიძებნა',
    passwordUpdateFailed: 'პაროლის განახლება ვერ მოხერხდა. სცადეთ თავიდან.'
  },
  ui: {
    save: 'შენახვა',
    cancel: 'გაუქმება',
    close: 'დახურვა',
    openMenu: 'მენიუს გახსნა',
    closeMenu: 'მენიუს დახურვა'
  },
  case: {
    title: 'კლინიკური შემთხვევები',
    newCase: 'ახალი შემთხვევა',
    createNewCase: 'ახალი შემთხვევის შექმნა',
    caseTitle: 'შემთხვევის სათაური',
    caseDescription: 'შემთხვევის აღწერა',
    anonymizedInfo: 'ანონიმიზებული პაციენტის ინფორმაცია',
    anonymizedPatientInfo: 'ანონიმიზებული პაციენტის ინფორმაცია',
    patientInfo: 'პაციენტის ინფორმაცია',
    category: 'კატეგორია',
    complexity: 'სირთულე',
    complexityLevel: 'სირთულის დონე',
    tags: 'ტეგები',
    creating: 'იქმნება...',
    creatingCase: 'შემთხვევა იქმნება...',
    cancel: 'გაუქმება',
    save: 'შენახვა',
    
    // Privacy and validation
    privacyNotice: 'კონფიდენციალობის შეტყობინება',
    privacyMessage: 'გთხოვთ, დარწმუნდეთ, რომ პაციენტის ყველა ინფორმაცია სრულად ანონიმიზებულია. ამოიღეთ სახელები, თარიღები, კონკრეტული ადგილები და ნებისმიერი იდენტიფიცირების დეტალები.',
    privacyNoticeDetailed: 'ჩართეთ რელევანტური სამედიცინო ისტორია, სიმპტომები, ტესტის შედეგები და სხვა კლინიკური ინფორმაცია. დარწმუნდეთ, რომ ყველა იდენტიფიცირების დეტალი ამოღებულია.',
    anonymizationHelp: 'ჩართეთ რელევანტური სამედიცინო ისტორია, სიმპტომები, ტესტის შედეგები და სხვა კლინიკური ინფორმაცია. დარწმუნდეთ, რომ ყველა იდენტიფიცირების დეტალი ამოღებულია.',
    
    // Form placeholders
    titlePlaceholder: 'მოკლე აღწერითი სათაური ამ შემთხვევისთვის',
    descriptionPlaceholder: 'შემთხვევის მოკლე მიმოხილვა და რისი განხილვა გინდათ',
    patientInfoPlaceholder: 'პაციენტის ასაკი, სქესი, სიმპტომები, სამედიცინო ისტორია, ტესტის შედეგები და ა.შ. (სრულად ანონიმიზებული)',
    tagsPlaceholder: 'მაგ., ჰიპერტენზია, დიაბეტი, გაგრძელება',
    tagsHint: 'გამოაცალეთ მრავალი ტეგი მძიმეებით',
    categoryHint: 'არჩევითი - ეხმარება თქვენი შემთხვევების ორგანიზებაში',
    
    // Validation errors
    titleRequired: 'შემთხვევის სათაური აუცილებელია',
    descriptionRequired: 'შემთხვევის აღწერა აუცილებელია',
    patientInfoRequired: 'პაციენტის ინფორმაცია აუცილებელია',
    patientInfoTooShort: 'გთხოვთ, მიაწოდოთ უფრო დეტალური ინფორმაცია პაციენტის შესახებ (მინიმუმ 50 სიმბოლო)',
    sensitiveInfoDetected: 'გთხოვთ, ამოიღოთ ნებისმიერი სახელი, თარიღი ან იდენტიფიცირების ნომრები პაციენტის ინფორმაციიდან',
    
    // Categories
    selectCategory: 'აირჩიეთ კატეგორია (არჩევითი)',
    diagnosisCategory: 'დიაგნოსტიკა',
    treatment: 'მკურნალობა',
    consultation: 'კონსულტაცია',
    
    // Cardiology specific
    interventionalCardiology: 'ინტერვენციული კარდიოლოგია',
    electrophysiology: 'ელექტროფიზიოლოგია',
    heartFailure: 'გულის უკმარისობა',
    preventiveCardiology: 'პრევენციული კარდიოლოგია',
    
    // OB/GYN specific
    obstetrics: 'მეანობა',
    gynecology: 'გინეკოლოგია',
    reproductiveHealth: 'რეპროდუქციული ჯანმრთელობა',
    maternalFetalMedicine: 'დედა-ნაყოფის მედიცინა',
    
    // Complexity levels
    lowComplexity: 'დაბალი სირთულე',
    mediumComplexity: 'საშუალო სირთულე',
    highComplexity: 'მაღალი სირთულე',
    
    // Specialty titles
    cardiologySpecialty: 'კარდიოლოგიის სპეციალობა',
    obgynSpecialty: 'მეანობა-გინეკოლოგიის სპეციალობა',
    
    // Character count
    charactersMinimum: '{count}/50 სიმბოლო მინიმუმ',
    
    // Case management
    activeCase: 'აქტიური შემთხვევა',
    caseDiscussion: 'შემთხვევის განხილვა',
    resetCase: 'შემთხვევის გადატვირთვა',
    viewCases: 'შემთხვევების ნახვა',
    noCases: 'შემთხვევები ჯერ არ შეიქმნა',
    caseCreated: 'შემთხვევა წარმატებით შეიქმნა',
    caseSaved: 'შემთხვევა შენახულია',
    caseDeleted: 'შემთხვევა წაიშალა',
    
    // Legacy fields
    chiefComplaint: 'მთავარი ჩივილი',
    history: 'ანამნეზი',
    examination: 'გამოკვლევა',
    investigations: 'კვლევები',
    diagnosisField: 'დიაგნოზი',
    followUp: 'კვალდაკვალ',
    notes: 'შენიშვნები',
    anonymize: 'ანონიმიზება',
    share: 'გაზიარება',
    delete: 'წაშლა',
    
    // Case list and filters
    all: 'ყველა',
    active: 'აქტიური',
    archived: 'არქივირებული',
    newestFirst: 'ჯერ ახალი',
    oldestFirst: 'ჯერ ძველი',
    alphabetical: 'ანბანის მიხედვით',
    noCasesFound: 'შემთხვევები ვერ მოიძებნა',
    noCasesYet: 'შემთხვევები ჯერ არ არის',
    adjustFilters: 'სცადეთ ძებნის ან ფილტრების შეცვლა.',
    createFirstCase: 'შექმენით თქვენი პირველი შემთხვევა, რომ დაიწყოთ შემთხვევების განხილვა.',
    
    // Knowledge base additional
    curated: 'კურირებული',
    personal: 'პირადი'
  },
  
  // Conversation management
  conversations: {
    title: 'საუბრები',
    newChat: 'ახალი ჩატი',
    searchPlaceholder: 'საუბრების ძებნა...',
    allSpecialties: 'ყველა სპეციალობა',
    cardiology: 'კარდიოლოგია',
    obgyn: 'მეანობა-გინეკოლოგია',
    recent: 'ბოლოდროინდელი',
    byName: 'სახელით',
    byMessages: 'შეტყობინებით',
    noConversationsFound: 'საუბრები ვერ მოიძებნა',
    deleteConversation: 'საუბრის წაშლა',
    editTitle: 'სათაურის შეცვლა',
    save: 'შენახვა',
    cancel: 'გაუქმება',
    message: 'შეტყობინება',
    messages: 'შეტყობინება',
    conversation: 'საუბარი',
    conversations: 'საუბრები',
    totalMessages: 'სულ შეტყობინებები',
    tryAdjustingSearchOrFilters: 'სცადეთ ძებნის ან ფილტრების შეცვლა',
    deleteConfirmation: 'დარწმუნებული ხართ, რომ გსურთ ამ საუბრის წაშლა? ეს მოქმედება ვერ გაუქმდება.',
    delete: 'წაშლა'
  },
  
  // Onboarding process
  onboarding: {
    welcome: 'მოგესალმებით MediMind Expert-ში',
    setupMessage: 'მოდით შევქმნათ თქვენი პერსონალიზებული სამედიცინო სამუშაო სივრცე',
    settingUpWorkspace: 'სამუშაო სივრცის დაყენება...',
    steps: {
      selectSpecialty: 'სპეციალობის არჩევა',
      aboutYou: 'თქვენ შესახებ'
    },
    specialty: {
      title: 'აირჩიეთ თქვენი სამედიცინო სპეციალობა',
      subtitle: 'აირჩიეთ თქვენი ძირითადი პრაქტიკის სფერო პერსონალიზებული AI დახმარებისა და რესურსებისთვის',
      featuresTitle: 'რას მიიღებთ:',
      note: 'თქვენ შეგიძლიათ წვდომა მიიღოთ ორივე სპეციალობის რესურსებზე, მაგრამ თქვენი სამუშაო სივრცე ოპტიმიზებული იქნება თქვენი ძირითადი არჩევისთვის',
      cardiology: {
        name: 'კარდიოლოგია',
        description: 'გულისა და გულ-სისხლძარღვთა სისტემის მოვლა',
        features: {
          cardiac: 'გულის შეფასების ინსტრუმენტები',
          ecg: 'EKG ინტერპრეტაციის სახელმძღვანელოები',
          heartFailure: 'გულის უკმარისობის პროტოკოლები',
          interventional: 'ინტერვენციული კარდიოლოგიის რესურსები'
        }
      },
      obgyn: {
        name: 'მეანობა-გინეკოლოგია',
        description: 'მეანობა და გინეკოლოგია',
        features: {
          prenatal: 'ღვიძლისშობამდელი მოვლის რეკომენდაციები',
          gynecological: 'გინეკოლოგიური პროცედურები',
          obstetric: 'მეანობის კალკულატორები',
          reproductive: 'რეპროდუქციული ჯანმრთელობის რესურსები'
        }
      }
    },
    aboutMe: {
      title: 'მოგვიყევით თქვენ შესახებ',
      subtitle: 'დაგვეხმარეთ ჩვენი AI ასისტენტის პერსონალიზებაში, გაუზიარეთ კონტექსტი თქვენი პრაქტიკისა და გამოცდილების შესახებ',
      label: 'გაუზიარეთ თქვენი პროფესიული ისტორია',
      placeholder: 'მე ვარ კარდიოლოგი 8 წლიანი გამოცდილებით, რომელიც მუშაობს სამედიცინო ცენტრში. ვსპეციალიზირებულვარ ინტერვენციულ კარდიოლოგიაში და განსაკუთრებით ვინტერესდები კომპლექსური კორონარული ინტერვენციებით. ჩავატარე სტაჟირება...',
      
      // პროგრესის ინდიკატორები
      wordCount: '{{count}} სიტყვა',
      progressMessages: {
        gettingStarted: 'ვიწყებთ...',
        goodProgress: 'კარგი პროგრესი!',
        lookingGreat: 'შესანიშნავად გამოიყურება!',
        perfectDetail: 'დეტალების იდეალური დონე!'
      },
      charactersCount: '{{count}} სიმბოლო',
      recommended: 'რეკომენდებული: 50-200 სიტყვა',
      keepConcise: 'განიხილეთ მოკლედ დატოვება საუკეთესო შედეგებისთვის',
      
      // წინადადებების სექცია
      suggestionsTitle: 'სწრაფი მინიშნებები დასაწყებად',
      suggestionsSubtitle: 'დააჭირეთ ქვემოთ მოცემულ ნებისმიერ თემას თქვენს პროფილში დასამატებლად. ეს ეხმარება ჩვენს AI-ს უფრო რელევანტური დახმარების მიწოდებაში.',
      
      // წინადადების ბარათები
      suggestions: {
        experience: {
          title: 'თქვენი გამოცდილება',
          description: 'პრაქტიკის წლები, სპეციალიზაციები, სერტიფიკატები',
          prompt: 'გაუზიარეთ თქვენი სამედიცინო გამოცდილება და მომზადება'
        },
        practiceSetting: {
          title: 'პრაქტიკის გარემო',
          description: 'საავადმყოფო, კლინიკა, კერძო პრაქტიკა, აკადემიური',
          prompt: 'აღწერეთ თქვენი ამჟამინდელი სამუშაო გარემო'
        },
        clinicalInterests: {
          title: 'კლინიკური ინტერესები',
          description: 'ექსპერტიზის სფეროები, კვლევითი ინტერესები, ქვესპეციალობები',
          prompt: 'რა არის თქვენი ძირითადი კლინიკური ფოკუსის სფეროები?'
        },
        patientPopulation: {
          title: 'პაციენტთა პოპულაცია',
          description: 'დემოგრაფია, შემთხვევის სირთულე, პაციენტთა ტიპები',
          prompt: 'მოგვიყევით იმ პაციენტების შესახებ, რომლებსაც ჩვეულებრივ მკურნალობთ'
        },
        clinicalApproach: {
          title: 'კლინიკური მიდგომა',
          description: 'მკურნალობის ფილოსოფია, გადაწყვეტილების მიღების სტილი',
          prompt: 'აღწერეთ თქვენი მიდგომა პაციენტთა მოვლისადმი'
        },
        education: {
          title: 'განათლება და ტრენინგი',
          description: 'სამედიცინო სკოლა, რეზიდენტურა, სტაჟირებები, განგრძობადი განათლება',
          prompt: 'გაუზიარეთ თქვენი საგანმანათლებლო გამოცდილება'
        }
      },
      
      // მაგალითის სექცია
      exampleTitle: 'პროფესიული პროფილის მაგალითი',
      exampleText: '"მე ვარ სერტიფიცირებული კარდიოლოგი 10 წლიანი გამოცდილებით დიდ აკადემიურ სამედიცინო ცენტრში. ვსპეციალიზირებულვარ ინტერვენციულ კარდიოლოგიაში კომპლექსური კორონარული ინტერვენციებისა და სტრუქტურული გულის დაავადებების ფოკუსით. ჩავატარე სტაჟირება ჯონს ჰოპკინსში და მაქვს განსაკუთრებული ექსპერტიზა TAVR პროცედურებში. ვნახულობ დიდ მოცულობას მწვავე კორონარული სინდრომის პაციენტებს და მიყვარს სტუდენტებისა და რეზიდენტების სწავლება."',
      
      // ღილაკები და მოქმედებები
      back: 'უკან',
      skipForNow: 'ჯერჯერობით გამოტოვება',
      completeSetup: 'დაყენების დასრულება',
      creatingWorkspace: 'სამუშაო სივრცის შექმნა...',
      
      // წარმატების ანიმაცია
      profileCreated: 'პროფილი შეიქმნა!',
      settingUpPersonalized: 'თქვენი პერსონალიზებული სამუშაო სივრცის დაყენება...'
    }
  },
}; 