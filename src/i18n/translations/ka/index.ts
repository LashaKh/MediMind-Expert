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
  common,
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
    profileInfo: 'პროფილის ინფორმაცია',
    fullName: 'სრული სახელი',
    saveChanges: 'ცვლილებების შენახვა',
    closeMenu: 'მენიუს დახურვა'
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
}; 