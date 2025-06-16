import common from './common';
import cardiology from './cardiology';
import eurscoreII from './euroscore-ii';
import hcmRiskSCD from './hcm-risk-scd';
import hcmAFRisk from './hcm-af-risk';
import { 
  gestationalAgeCalculator,
  eddCalculator,
  preeclampsiaRiskCalculator,
  pretermBirthRiskCalculator,
  gdmScreeningCalculator,
  bishopScoreCalculator
} from './ObGyn';

export default {
  common,
  cardiology,
  eurscoreII,
  
  // Individual OB/GYN calculators with direct access
  gestational_age: gestationalAgeCalculator,
  edd: eddCalculator,
  preeclampsia_risk: preeclampsiaRiskCalculator,
  preterm_birth_risk: pretermBirthRiskCalculator,
  gdm_screening: gdmScreeningCalculator,
  bishop_score: bishopScoreCalculator,
  
  // Top-level keys for Calculator landing page
  specialty: {
    cardiology: {
      title: 'კარდიოლოგიური კალკულატორები',
      description: 'პროფესიონალური გულ-სისხლძარღვთა რისკის შეფასება და კლინიკური გადაწყვეტილების მხარდაჭერის ხელსაწყოები',
      status: 'მზად არის წარმოებისთვის', 
      message: '✅ 16 კალკულატორი • 100% ვალიდირებული • 6 კატეგორია'
    },
    obgyn: {
      title: 'მეან-გინეკოლოგიური კალკულატორები',
      description: 'ყოვლისმომცველი მეანობისა და გინეკოლოგიის შეფასების ხელსაწყოები',
      status: 'მზად არის განხორციელებისთვის',
      message: '⚠️ 14 კალკულატორი • განხორციელების ეტაპი • პროფესიონალური ხარისხი'
    }
  },
  
  stats: {
    calculators: 'კალკულატორები',
    validated: 'ვალიდირებული', 
    categories: 'კატეგორიები'
  },
  
  categories: {
    risk_assessment: 'რისკის შეფასება',
    acute_care: 'მწვავე მდგომარეობა',
    therapy_management: 'თერაპიის მართვა',
    heart_failure: 'გულის უკმარისობა',
    surgical_risk: 'ქირურგიული რისკი',
    cardiomyopathy: 'კარდიომიოპათია',
    pregnancy_dating: 'ორსულობის თარიღი',
    antenatal_risk: 'ანტენატალური რისკი',
    labor_management: 'მშობიარობის მართვა',
    assessment_tools: 'შეფასების ხელსაწყოები',
    gynecologic_oncology: 'გინეკოლოგიური ონკოლოგია',
    reproductive_health: 'რეპროდუქციული ჯანმრთელობა'
  },
  
  // Calculator title/subtitle shortcuts for cards
  dapt: {
    title: 'DAPT ქულების კალკულატორი',
    subtitle: 'ორმაგი ანტითრომბოციტული თერაპიის ხანგრძლივობა • რისკ-სარგებლობის შეფასება'
  },
  
  precise_dapt: {
    title: 'PRECISE-DAPT კალკულატორი',
    subtitle: 'სისხლდენის რისკის შეფასება • DAPT ხანგრძლივობის ოპტიმიზაცია'
  },
  
  prevent: {
    title: 'AHA PREVENT™ კალკულატორი',
    subtitle: 'გულ-სისხლძარღვთა რისკის შეფასება • CKM-E გაძლიერებული'
  },
  
  ascvd: {
    title: 'ASCVD რისკის კალკულატორი',
    subtitle: '10-წლიანი ათეროსკლეროზული გულ-სისხლძარღვთა დაავადების რისკი'
  },
  
  atrial_fibrillation: {
    title: 'წინაგულების ფიბრილაციის კალკულატორები',
    subtitle: 'CHA₂DS₂-VASc • HAS-BLED • ყოვლისმომცველი AF შეფასება'
  },
  
  timi_risk: {
    title: 'TIMI რისკის კალკულატორი',
    subtitle: 'მიოკარდის ინფარქტში თრომბოლიზის რისკის შეფასება'
  },
  
  grace_acs: {
    title: 'GRACE ACS კალკულატორი',
    subtitle: 'მწვავე კორონარული მოვლენების გლობალური რეესტრის რისკის შეფასება'
  },
  
  heart_failure_staging: {
    title: 'გულის უკმარისობის სტადიები',
    subtitle: 'ACC/AHA სტადიების კლასიფიკაცია • კლინიკური შეფასება'
  },
  
  gwtg_hf: {
    title: 'GWTG-HF კალკულატორი',
    subtitle: 'მიიღე სახელმძღვანელოებთან ერთად - გულის უკმარისობის რისკის ქულა'
  },
  
  maggic: {
    title: 'MAGGIC კალკულატორი',
    subtitle: 'ქრონიკული გულის უკმარისობის მეტა-ანალიზის გლობალური ჯგუფი'
  },
  
  shfm: {
    title: 'SHFM კალკულატორი',
    subtitle: 'სიეტლის გულის უკმარისობის მოდელი • გადარჩენის პროგნოზი'
  },
  
  sts: {
    title: 'STS კალკულატორი',
    subtitle: 'ქირურგიული საზოგადოების რისკის შეფასება'
  },
  
  euroscore: {
    title: 'EuroSCORE II კალკულატორი',
    subtitle: 'ევროპული კარდიაკური ოპერაციების რისკის შეფასების სისტემა'
  },
  
  hcm_risk_scd: hcmRiskSCD,
  
  hcmAFRisk,
  hcm_af_risk: hcmAFRisk,
  
  categories_label: 'კატეგორიები',
  calculator_categories: 'კალკულატორების კატეგორიები',
  back_to: 'უკან',
  view_grid: 'ბადე',
  view_list: 'სია',
};

export {
  eurscoreII
}; 