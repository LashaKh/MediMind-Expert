import common from './common';
import cardiology from './cardiology';
import obgyn from './obgyn';
import eurscoreII from './euroscore-ii';

export default {
  common,
  cardiology,
  obgyn,
  eurscoreII,
  
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
  
  hcm_risk_scd: {
    title: 'HCM რისკ-SCD კალკულატორი',
    subtitle: 'უეცარი კარდიაკული სიკვდილის რისკი ჰიპერტროფიულ კარდიომიოპათიაში'
  },
  
  hcm_af_risk: {
    title: 'HCM-AFR კალკულატორი',
    subtitle: 'წინაგულების ფიბრილაციის რისკი ჰიპერტროფიულ კარდიომიოპათიაში'
  },
  
  categories_label: 'კატეგორიები',
  calculator_categories: 'კალკულატორების კატეგორიები',
  back_to: 'უკან',
  view_grid: 'ბადე',
  view_list: 'სია'
};

export {
  eurscoreII
}; 