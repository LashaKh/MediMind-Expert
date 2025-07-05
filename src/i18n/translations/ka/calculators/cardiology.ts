import maggicTranslations from './maggic';
import riskAssessmentTranslations from './risk-assessment';
import { timiRiskScoreTranslations } from './timi-risk-score';
import { grace2Translations } from './grace-2';
import daptTranslations from './dapt';
import preciseDaptTranslations from './precise-dapt';
import ahaPreventTranslations from './aha-prevent';
import shfmTranslations from './shfm';
import gwtgHfRiskTranslations from './gwtg-hf-risk';
import { heartFailureStagingTranslations } from './heart-failure-staging';

export default {
  ...riskAssessmentTranslations,
  
  // Calculator titles for navigation
  graceTitle: 'GRACE 2.0 კალკულატორი',
  hcmRiskScdTitle: 'HCM Risk-SCD კალკულატორი',
  maggicTitle: maggicTranslations.title,
  gwtgHfTitle: 'GWTG-HF კალკულატორი',
  heartFailureStagingTitle: 'გულის უკმარისობის ეტაპები',
  heartFailureStaging: heartFailureStagingTranslations,
  shfmTitle: 'SHFM რისკის კალკულატორი',
  stsTitle: 'STS რისკის კალკულატორი',
  euroScoreTitle: 'EuroSCORE II კალკულატორი',
  timiTitle: 'TIMI რისკის კალკულატორი',
  preventTitle: 'AHA PREVENT კალკულატორი',
  hcmAfTitle: 'HCM-AF კალკულატორი',
  chadsVascTitle: 'CHA2DS2-VASc კალკულატორი',
  hasBleedTitle: 'HAS-BLED კალკულატორი',
  chads2Title: 'CHADS2 კალკულატორი',
  ascvdTitle: 'ᲐᲡᲖᲓ რისკის კალკულატორი',

  // Calculator references used by main calculator list
  timi_risk: {
    title: 'TIMI რისკის კალკულატორი',
    subtitle: 'არასტაბილური ანგინა/NSTEMI რისკის შეფასება'
  },
  
  grace_acs: {
    title: 'GRACE ACS რისკის კალკულატორი',
    subtitle: 'მწვავე კორონარული სინდრომის სიკვდილობის რისკი'
  },



  // GRACE 2.0 Risk Calculator
  grace: grace2Translations,

  // HCM Risk-SCD Calculator
  hcm_risk_scd: {
    title: "ᲒᲙᲛᲞ რისკ-ვგს კალკულატორი",
    subtitle: "უეცარი გულის სიკვდილის რისკის შეფასება • ჰიპერტროფიული კარდიომიოპათია",
    description: "5-წლიანი უეცარი გულის სიკვდილის რისკის პროგნოზირება ჰიპერტროფიული კარდიომიოპათიის მქონე პაციენტებში ICD-ის გადაწყვეტისთვის.",
    calculate_button: "ᲒᲙᲛᲞ რისკ-ვგს-ის გამოთვლა",
    risk_category: "რისკის კატეგორია",
    recommendations: "კლინიკური რეკომენდაციები",
    low_risk: "დაბალი რისკი (<4%)",
    high_risk: "მაღალი რისკი (≥6%)",
    intermediate_risk: "საშუალო რისკი (4-6%)",
    
    demographics: "დემოგრაფია",
    age_label: "ასაკი (წლები)",
    age_placeholder: "შეიყვანეთ პაციენტის ასაკი (16-80 წელი)",
    gender_label: "სქესი",
    gender_male: "მამრობითი",
    gender_female: "მდედრობითი",
    clinical_features: "კლინიკური ნიშნები",
    max_wall_thickness: "კედლის მაქსიმალური სისქე (მმ)",
    max_wall_thickness_placeholder: "შეიყვანეთ სისქე (10-50 მმ)",
    left_atrial_size: "მარცხენა წინაგულის ზომა (მმ)",
    left_atrial_size_placeholder: "შეიყვანეთ ზომა (25-70 მმ)",
    max_lvot_gradient: "LVOT-ის მაქსიმალური გრადიენტი (მმ ვარდ.სვ.)",
    max_lvot_gradient_placeholder: "შეიყვანეთ გრადიენტი (0-200 მმ ვარდ.სვ.)",
    risk_factors: "რისკის ფაქტორები",
    family_history_scd: "უეცარი გულით სიკვდილის ოჯახური ანამნეზი",
    non_sustained_vt: "არამდგრადი პარკჭოვანი ტაქიკარდია",
    unexplained_syncope: "აუხსნელი სინკოპე",
    additional_factors: "დამატებითი რისკ-ფაქტორები",
    apical_aneurysm: "აპიკალური ანევრიზმა",
    extensive_lge: "ვრცელი გვიანი გადოლინიუმის გაძლიერება (>15% LV მასის)",
    exclusions: "გამორიცხვის კრიტერიუმები",
    prior_scd: "ადრინდელი უეცარი გულის სიკვდილი",
    prior_icd: "ადრინდელი ICD",
    concurrent_vhd: "თანმხლები მნიშვნელოვანი სარქვლოვანი გულის დაავადება",
    infiltrative_disease: "ინფილტრაციული კარდიომიოპათია",
    validation_age: "ასაკი უნდა იყოს 16-80 წლის შორის",
    validation_gender: "სქესი აუცილებელია",
    validation_wall_thickness: "კედლის სისქე უნდა იყოს 10-50 მმ-ს შორის",
    validation_atrial_size: "მარცხენა წინაგულის ზომა უნდა იყოს 25-70 მმ-ს შორის",
    validation_lvot_gradient: "LVOT გრადიენტი უნდა იყოს 0-200 მმ ვარდ.სვ.-ს შორის",
    five_year_risk: "5-წლიანი VGS რისკი",
    icd_recommendation: "ICD რეკომენდაცია",
    not_indicated: "არ არის ნაჩვენები",
    consider: "განიხილეთ",
    reasonable: "გონივრული",
    indicated: "ნაჩვენები"
  },



  // GWTG-HF Risk Calculator - Extracted to standalone file
  gwtgHf: gwtgHfRiskTranslations,

  // MAGGIC Risk Calculator - Extracted to standalone file
  maggic: maggicTranslations,

  // SHFM Calculator
  // STS Adult Cardiac Surgery Risk Calculator - სრული თარგმანი
  sts: {
    title: 'STS ზრდასრულთა გულის ქირურგიის რისკის კალკულატორი',
    subtitle: 'პერიოპერაციული რისკის შეფასება • მტკიცებულებაზე დაფუძნებული ქირურგიული დაგეგმვა',
    description: 'თორაკალური ქირურგების საზოგადოების რისკის შეფასება პერიოპერაციული სიკვდილიანობისა და ავადობისთვის გულის ქირურგიაში.',
    
    // გაფრთხილების სექცია
    alert_title: 'STS ეროვნული მონაცემთა ბაზა - მტკიცებულებაზე დაფუძნებული რისკის შეფასება',
    alert_description: 'ვალიდირებული რისკის პროგნოზირების მოდელი, რომელიც დაფუძნებულია >4 მილიონ გულის ქირურგიულ პროცედურაზე STS ეროვნული მონაცემთა ბაზიდან.',
    
    // ნაბიჯების ნავიგაცია
    demographics_step: 'დემოგრაფია',
    procedure_step: 'პროცედურა',
    clinical_step: 'კლინიკური სტატუსი',
    comorbidities_step: 'თანმხლები დაავადებები',
    
    // ნაბიჯი 1: დემოგრაფია და ანთროპომეტრია
    patient_demographics: 'პაციენტის დემოგრაფია და ანთროპომეტრია',
    demographics_description: 'პაციენტის ძირითადი მახასიათებლები ქირურგიული რისკის შეფასებისთვის',
    age_label: 'ასაკი',
    age_placeholder: '65',
    age_unit: 'წელი',
    gender_label: 'სქესი',
    gender_placeholder: 'აირჩიეთ სქესი...',
    gender_male: 'მამრობითი',
    gender_female: 'მდედრობითი',
    race_label: 'რასა/ეთნიკური კუთვნილება',
    race_placeholder: 'აირჩიეთ რასა/ეთნიკური კუთვნილება...',
    race_white: 'თეთრი',
    race_black: 'შავი/აფროამერიკელი',
    race_hispanic: 'ესპანური/ლათინოამერიკელი',
    race_asian: 'აზიური',
    race_other: 'სხვა',
    height_label: 'სიმაღლე',
    height_placeholder: '170',
    height_unit: 'სმ',
    weight_label: 'წონა',
    weight_placeholder: '70',
    weight_unit: 'კგ',
    
    // ნაბიჯი 2: პროცედურის დეტალები და სისწრაფე
    procedure_details: 'პროცედურის დეტალები და სისწრაფე',
    procedure_description: 'გულის ქირურგიული პროცედურის ტიპი და სისწრაფის სტატუსი',
    procedure_type_label: 'პროცედურის ტიპი',
    procedure_placeholder: 'აირჩიეთ პროცედურა...',
    cabg_only: 'მხოლოდ CABG',
    valve_only: 'მხოლოდ სარქველი',
    cabg_valve: 'CABG + სარქველი',
    urgency_label: 'სისწრაფე',
    urgency_placeholder: 'აირჩიეთ სისწრაფე...',
    elective: 'გეგმიური',
    urgent: 'სასწრაფო',
    emergent: 'გადაუდებელი',
    
    // სარქველის შეფასება
    valve_assessment: 'სარქველის შეფასება (თუ გამოიყენება)',
    mitral_insufficiency_label: 'მიტრალური უკმარისობა',
    mitral_insufficiency_placeholder: 'აირჩიეთ სიმძიმე...',
    tricuspid_insufficiency_label: 'ტრიკუსპიდალური უკმარისობა',
    tricuspid_insufficiency_placeholder: 'აირჩიეთ სიმძიმე...',
    severity_none: 'არ არის (0)',
    severity_mild: 'მსუბუქი (1+)',
    severity_moderate: 'ზომიერი (2+)',
    severity_moderate_severe: 'ზომიერ-მძიმე (3+)',
    severity_severe: 'მძიმე (4+)',
    aortic_stenosis_label: 'აორტალური სტენოზი',
    mitral_stenosis_label: 'მიტრალური სტენოზი',
    previous_cardiac_surgery_label: 'წინა გულის ქირურგია',
    
    // ნაბიჯი 3: კლინიკური სტატუსი და ლაბორატორიული მონაცემები
    clinical_status: 'კლინიკური სტატუსი და ლაბორატორიული მაჩვენებლები',
    clinical_description: 'გულის ფუნქცია და ძირითადი ლაბორატორიული პარამეტრები',
    ejection_fraction_label: 'მარცხენა პარკუჭის განდევნის ფრაქცია',
    ejection_fraction_placeholder: '55',
    ejection_fraction_unit: '%',
    nyha_class_label: 'NYHA ფუნქციური კლასი',
    nyha_class_placeholder: 'აირჩიეთ NYHA კლასი...',
    nyha_class_1: 'კლასი I - შეზღუდვის გარეშე',
    nyha_class_2: 'კლასი II - მცირე შეზღუდვა',
    nyha_class_3: 'კლასი III - გამოხატული შეზღუდვა',
    nyha_class_4: 'კლასი IV - მძიმე შეზღუდვა',
    creatinine_label: 'შრატის კრეატინინი',
    creatinine_placeholder: '1.0',
    creatinine_unit: 'მგ/დლ',
    hematocrit_label: 'ჰემატოკრიტი',
    hematocrit_placeholder: '40',
    hematocrit_unit: '%',
    cardiogenic_shock_label: 'კარდიოგენული შოკი',
    dialysis_label: 'დიალიზი',
    
    // ნაბიჯი 4: თანმხლები დაავადებები
    comorbidities_title: 'თანმხლები დაავადებები და რისკის ფაქტორები',
    comorbidities_description: 'დამატებითი სამედიცინო მდგომარეობები, რომლებიც გავლენას ახდენენ ქირურგიულ რისკზე',
    diabetes_label: 'შაქრიანი დიაბეტი',
    hypertension_label: 'ჰიპერტენზია',
    immunosuppression_label: 'იმუნოსუპრესია',
    pvd_label: 'პერიფერიული სისხლძარღვთა დაავადება',
    cerebrovascular_disease_label: 'ცერებროვასკულარული დაავადება',
    chronic_lung_disease_label: 'ფილტვების ქრონიკული დაავადება',
    
    // ნავიგაციის ღილაკები
    next_procedure: 'შემდეგი: პროცედურის დეტალები',
    next_clinical: 'შემდეგი: კლინიკური სტატუსი',
    next_comorbidities: 'შემდეგი: თანმხლები დაავადებები',
    back_button: 'უკან',
    calculate_button: 'STS რისკის გამოთვლა',
    reset_button: 'კალკულატორის გადატვირთვა',
    
    // შედეგების სექცია
    results_title: 'STS რისკის შეფასების შედეგები',
    risk_analysis: 'ყოვლისმომცველი რისკის ანალიზი',
    predicted_outcomes: 'პროგნოზირებული შედეგები',
    mortality_risk: 'ოპერაციული სიკვდილიანობა',
    morbidity_combined: 'ძირითადი ავადობა',
    stroke_risk: 'ინსულტის რისკი',
    renal_failure_risk: 'თირკმლის უკმარისობის რისკი',
    reoperation_risk: 'ხელახალი ოპერაციის რისკი',
    prolonged_ventilation: 'ხანგრძლივი ვენტილაცია',
    sternal_infection: 'მკერდის ღრმა ინფექცია',
    
    // რისკის კატეგორიები
    risk_category: 'რისკის კატეგორია',
    sts_low_risk: 'დაბალი რისკი',
    sts_intermediate_risk: 'საშუალო რისკი',
    sts_high_risk: 'მაღალი რისკი',
    sts_very_high_risk: 'ძალიან მაღალი რისკი',
    
    // რისკის ინტერპრეტაციები
    interpretation_low: 'დაბალი ქირურგიული რისკი - შესანიშნავი კანდიდატი გულის ქირურგიისთვის მოსალოდნელი ხელსაყრელი შედეგებით',
    interpretation_intermediate: 'საშუალო ქირურგიული რისკი - კარგი კანდიდატი ფრთხილი პერიოპერაციული მართვით',
    interpretation_high: 'მაღალი ქირურგიული რისკი - საჭიროებს სპეციალიზებულ მოვლას და ალტერნატიული მკურნალობის განხილვას',
    interpretation_very_high: 'ძალიან მაღალი ქირურგიული რისკი - განიხილეთ მდგომარეობის მულტიდისციპლინარული გულის გუნდის მიერ შეფასება და ალტერნატიული თერაპიები',
    
    // კლინიკური რეკომენდაციები
    recommendation_low: 'გააგრძელეთ სტანდარტული პერიოპერაციული მოვლა და მონიტორინგი',
    recommendation_intermediate: 'გაძლიერებული პერიოპერაციული მონიტორინგი და მულტიდისციპლინარული მოვლის კოორდინაცია',
    recommendation_high: 'სპეციალიზებული გულის ქირურგიული გუნდი ინტენსიური პერიოპერაციული მართვით',
    recommendation_very_high: 'მულტიდისციპლინარული გულის გუნდის შეფასება რეკომენდებულია - განიხილეთ ალტერნატიული თერაპიები ან მაღალი რისკის პროტოკოლები',
    
    // ვალიდაციის შეტყობინებები
    age_required: 'ასაკი აუცილებელია',
    age_invalid: 'ასაკი უნდა იყოს 18-120 წლის შორის',
    gender_required: 'სქესი აუცილებელია',
    procedure_required: 'პროცედურის ტიპი აუცილებელია',
    height_required: 'სიმაღლე აუცილებელია',
    height_invalid: 'სიმაღლე უნდა იყოს 100-250 სმ-ს შორის',
    weight_required: 'წონა აუცილებელია',
    weight_invalid: 'წონა უნდა იყოს 30-300 კგ-ს შორის',
    ejection_fraction_required: 'განდევნის ფრაქცია აუცილებელია',
    ejection_fraction_invalid: 'განდევნის ფრაქცია უნდა იყოს 10-80%-ს შორის',
    nyha_class_required: 'NYHA კლასი აუცილებელია',
    urgency_required: 'სისწრაფე აუცილებელია',
    creatinine_required: 'კრეატინინი აუცილებელია',
    creatinine_invalid: 'კრეატინინი უნდა იყოს 0.5-15 მგ/დლ-ს შორის',
    hematocrit_required: 'ჰემატოკრიტი აუცილებელია',
    hematocrit_invalid: 'ჰემატოკრიტი უნდა იყოს 15-60%-ს შორის',
    
    // ვალიდაციის ნიშანი
    badge_sts_database: 'STS ეროვნული მონაცემთა ბაზა - >4მ პროცედურა',
  
    select_gender: 'აირჩიეთ სქესი...',
    select_race: 'აირჩიეთ რასა/ეთნიკური კუთვნილება...',
    select_procedure: 'აირჩიეთ პროცედურა...',
    select_urgency: 'აირჩიეთ სისწრაფე...',
    select_nyha: 'აირჩიეთ NYHA კლასი...',
    select_severity: 'აირჩიეთ სიმძიმე...',
    nyha_1: 'კლასი I - შეზღუდვების გარეშე',
    nyha_2: 'კლასი II - მცირე შეზღუდვები',
    nyha_3: 'კლასი III - მკვეთრი შეზღუდვები',
    nyha_4: 'კლასი IV - მძიმე შეზღუდვები',
    validation_age_required: 'ასაკი აუცილებელია',
    validation_age_range: 'ასაკი უნდა იყოს 18-დან 120 წლამდე',
    validation_gender_required: 'სქესი აუცილებელია',
    validation_procedure_required: 'პროცედურის ტიპი აუცილებელია',
    validation_height_required: 'სიმაღლე აუცილებელია',
    validation_height_range: 'სიმაღლე უნდა იყოს 100-დან 250 სმ-მდე',
    validation_weight_required: 'წონა აუცილებელია',
    validation_weight_range: 'წონა უნდა იყოს 30-დან 300 კგ-მდე',
    validation_ef_required: 'განდევნის ფრაქცია აუცილებელია',
    validation_ef_range: 'განდევნის ფრაქცია უნდა იყოს 10-დან 80%-მდე',
    validation_nyha_required: 'NYHA კლასი აუცილებელია',
    validation_urgency_required: 'სისწრაფე აუცილებელია',
    validation_creatinine_required: 'კრეატინინი აუცილებელია',
    validation_creatinine_range: 'კრეატინინი უნდა იყოს 0,5-დან 15 მგ/დლ-მდე',
    validation_hematocrit_required: 'ჰემატოკრიტი აუცილებელია',
    validation_hematocrit_range: 'ჰემატოკრიტი უნდა იყოს 15-დან 60%-მდე',
    recommendation_preop_optimization: 'ოპერაციამდელი ოპტიმიზაციის პროტოკოლები',
    recommendation_standard_protocols: 'სტანდარტული ქირურგიული პროტოკოლები',
    recommendation_postop_monitoring: 'გაძლიერებული ოპერაციის შემდგომი მონიტორინგი',
    recommendation_standard_approach: 'სტანდარტული პერიოპერაციული მიდგომა',
    recommendation_fast_track: 'სწრაფი აღდგენის პროტოკოლები შესაბამისობისას',
    recommendation_early_discharge: 'განიხილეთ ადრეული გაწერის დაგეგმვა',
    recommendation_enhanced_assessment: 'გაძლიერებული ოპერაციამდელი შეფასება',
    recommendation_cardiology_consult: 'რეკომენდებულია კარდიოლოგის კონსულტაცია',
    recommendation_discuss_risks: 'რისკისა და სარგებლის ღრმა განხილვა',
    recommendation_standard_icu: 'სტანდარტული ინტენსიური თერაპიის პროტოკოლები',
    recommendation_multidisciplinary: 'მულტიდისციპლინარული გუნდური მიდგომა',
    recommendation_alternative_therapies: 'განიხილეთ ალტერნატიული თერაპიები',
    recommendation_extended_icu: 'გახანგრძლივებული ინტენსიური თერაპიის მონიტორინგი',
    recommendation_informed_consent: 'დეტალური ინფორმირებული თანხმობის პროცესი',
    recommendation_heart_team: 'მულტიდისციპლინარული გულის გუნდის შეფასება',
    recommendation_heart_team_mandatory: 'სავალდებულო მულტიდისციპლინარული გულის გუნდის შეფასება',
    recommendation_nonsurgical_alternatives: 'განიხილეთ არაქირურგიული ალტერნატივები',
    recommendation_palliative_care: 'ერჩიოს პალიატიური მოვლა',
    recommendation_family_meeting: 'ოჯახთან შეხვედრა მკურნალობის მიზნების განსასაზღვრათ',
    recommendation_alternative_access: 'განიხილეთ ალტერნატიული წვდომის გზები',
    recommendation_high_risk_programs: 'მაღალი რისკის ქირურგიული პროგრამები',
    badge_evidence_based: 'მტკიცებულებაზე დაფუძნებული რისკის შეფასება',
    aortic_stenosis_description: 'აორტული სტენოზის სიმძიმე',
    mitral_stenosis_description: 'მიტრალური სტენოზის სიმძიმე',
    diabetes_description: 'შაქრიანი დიაბეტი, რომელიც საჭიროებს მედიკამენტს',
    hypertension_description: 'არტერიული ჰიპერტენზიის ისტორია',
    pvd_description: 'პერიფერიული სისხლძარღვთა დაავადება',
    cerebrovascular_description: 'ინსულტის ან TIA-ს ისტორია',
    chronic_lung_description: 'ქრონიკული ფილტვის დაავადება, რომელიც საჭიროებს მედიკამენტს',
    immunosuppression_description: 'მიმდინარე იმუნოსუპრესიული თერაპია',
    previous_cardiac_surgery_description: 'წინა კარდიოქირურგიული ჩარევა',
    cardiogenic_shock_description: 'კარდიოგენური შოკი შემოსვლისას',
    dialysis_description: 'ამჟამად დიალიზზე',    
    // ძირითადი ვარიანტების ღილაკები STS კალკულატორისთვის
    male: 'მამრობითი',
    female: 'მდედრობითი',
    white: 'თეთრი',
    black: 'შავი/აფროამერიკელი',
    hispanic: 'ესპანური/ლათინური',
    asian: 'აზიური',
    other: 'სხვა'
  },

  // Heart Failure Staging Calculator - COMPLETE TRANSLATION IMPLEMENTATION
  heartFailureStaging: {
    title: 'გულის უკმარისობის სტადიები',
    subtitle: 'ACC/AHA გულის უკმარისობის სტადიები A-D • რისკის შეფასება და მართვა',
    description: 'ACC/AHA გულის უკმარისობის სტადიის განსაზღვრის სისტემა რისკის შეფასებისთვის და მართვის საკითხების გაგებისთვის.',
    calculate_button: 'გულის უკმარისობის სტადიის განსაზღვრა',
    risk_category: 'გულის უკმარისობის სტადია',
    recommendations: 'მართვის რეკომენდაციები',
    stage_a_risk: 'სტადია A (რისკის ქვეშ)',
    stage_d_risk: 'სტადია D (განვითარებული)',

    // Alert section
    alert_title: 'ACC/AHA გულის უკმარისობის სტადიის განსაზღვრა',
    alert_description: 'ყოვლისმომცველი სტადიის განმსაზღვრავი სისტემა, გულის უკმარისობის რისკ ფაქტორებიდან დაავადების განვითარებამდე. ეს კლასიფიკაცია გვეხმარება მტკიცებულებებზე დაყრდნობით ვმართოთ და გავაკეთოთ დაავადების პროგნოზირება.',

    // Step navigation
    step_risk_factors: 'რისკ ფაქტორები',
    step_structural_disease: 'სტრუქტურული დაავადება',
    step_symptoms: 'სიმპტომები',
    step_advanced_hf: 'განვითარებული',

    // Section headers
    section_stage_a: 'სტადია A - რისკ ფაქტორების შეფასება',
    section_stage_a_description: 'გულის უკმარისობის მაღალი რისკი, მაგრამ სტრუქტურული გულის დაავადების ან სიმპტომების გარეშე',
    section_stage_b: 'სტადია B - სტრუქტურული დაავადების შეფასება', 
    section_stage_b_description: 'სტრუქტურული გულის დაავადება გულის უკმარისობის ნიშნების ან სიმპტომების გარეშე',
    section_stage_c: 'სტადია C - სიმპტომური გულის უკმარისობის შეფასება',
    section_stage_c_description: 'სტრუქტურული გულის დაავადება წინა ან მიმდინარე გულის უკმარისობის სიმპტომებით',
    section_stage_d: 'სტადია D - განვითარებული გულის უკმარისობის შეფასება',
    section_stage_d_description: 'რეფრაქტორული გულის უკმარისობა სპეციალიზებული ჩარევების საჭიროებით',

    // Stage A fields
    field_hypertension: 'ჰიპერტენზია',
    field_hypertension_description: 'მაღალი არტერიული წნევის ანამნეზი',
    field_diabetes: 'შაქრიანი დიაბეტი',
    field_diabetes_description: '1-ლი ან 2-ე ტიპის შაქრიანი დიაბეტი',
    field_cad: 'კორონარული არტერიის დაავადება',
    field_cad_description: 'კორონარული არტერიის დაავადების ანამნეზი',
    field_metabolic_syndrome: 'მეტაბოლური სინდრომი',
    field_metabolic_syndrome_description: 'მეტაბოლური რისკ ფაქტორების კლასტერი',
    field_family_history_hf: 'გულის უკმარისობის ოჯახური ანამნეზი',
    field_family_history_hf_description: 'კარდიომიოპათიის ოჯახური ანამნეზი',
    field_cardiotoxic_therapy: 'კარდიოტოქსიური თერაპიის ანამნეზი',
    field_cardiotoxic_therapy_description: 'ქიმიოთერაპია ან სხივური თერაპია',
    field_alcohol_abuse: 'ალკოჰოლის ბოროტად გამოყენების ანამნეზი',
    field_alcohol_abuse_description: 'ქრონიკული ალკოჰოლის მოხმარება',

    // Stage B fields
    field_lvef_reduced: 'მარცხენა პარკუჭის შემცირებული განდევნის ფრაქცია',
    field_lvef_reduced_description: 'მ.პ. განდევნის ფრაქცია <50% სიმპტომების გარეშე',
    field_wall_motion_abnormalities: 'რეგიონალური კედლის მოძრაობის დარღვევები',
    field_wall_motion_abnormalities_description: 'სეგმენტური კედლის მოძრაობის დეფექტები',
    field_lv_hypertrophy: 'მარცხენა პარკუჭის ჰიპერტროფია',
    field_lv_hypertrophy_description: 'მ.პ. კედლის გახანგრძლივებული სისქე',
    field_valvular_disease: 'მნიშვნელოვანი სარქვლოვანი დაავადება',
    field_valvular_disease_description: 'საშუალო ან მძიმე ხარისხის სარქვლოვანი დაავადება',

    // Stage C fields
    field_current_hf_symptoms: 'მიმდინარე გულის უკმარისობის სიმპტომები',
    field_current_hf_symptoms_description: 'აქტიური ქოშინი, დაღლილობა ან შეშუპება',
    field_previous_hf_symptoms: 'წინა გულის უკმარისობის სიმპტომები',
    field_previous_hf_symptoms_description: 'წინა გულის უკმარისობის სიმპტომები, ახლა გამოსწორებული',
    field_hf_hospitalizations: 'წინა გულის უკმარისობის ჰოსპიტალიზაციები',
    field_hf_hospitalizations_description: 'ქინა გულის უკმარისობის გამო მოთავსება',

    // Stage D fields
    field_refractory_symptoms: 'რეფრაქტორული სიმპტომები ოპტიმალური თერაპიის მიუხედავად',
    field_refractory_symptoms_description: 'სიმპტომები გრძელდება მაქსიმალური მედიკამენტური თერაპიის მიუხედავად',
    field_recurrent_hospitalizations: 'განმეორებითი ჰოსპიტალიზაციები',
    field_recurrent_hospitalizations_description: 'მრავალი ახალი გულის უკმარისობის ჰოსპიტალიზაცია',
    field_chronic_inotropic_support: 'ქრონიკული ინოტროპული მხარდაჭერა',
    field_chronic_inotropic_support_description: 'მუდმივი ინოტროპული მედიკამენტების საჭიროება',
    field_mechanical_support: 'მექანიკური ცირკულაციის მხარდაჭერა',
    field_mechanical_support_description: 'LVAD, ECMO ან ბალონური კონტრპულსაცია',
    field_transplant_evaluation: 'გულის ტრანსპლანტაციის შეფასება',
    field_transplant_evaluation_description: 'ჩართულია ან შეფასების პროცესში ტრანსპლანტაციის პროგრამაში',

    // Button labels
    button_next_structural: 'შემდეგი: სტრუქტურული დაავადება',
    button_next_symptoms: 'შემდეგი: სიმპტომები',
    button_next_advanced_hf: 'შემდეგი: განვითარებული',
    button_back: 'უკან',
    button_new_assessment: 'ახალი შეფასება',
    button_modify_inputs: 'მონაცემების შეცვლა',

    // Results section
    results_title: 'გულის უკმარისობის სტადიის ანალიზი',
    results_stage: 'სტადია',
    results_stage_classification: 'სტადიის კლასიფიკაცია',
    results_risk_level: 'რისკის დონე',
    results_current_progression_risk: 'მიმდინარე პროგრესირების რისკის შეფასება',
    results_management_focus: 'მართვის ფოკუსი',
    results_prevention: 'პრევენციის სტრატეგიები',
    results_monitoring: 'მონიტორინგი და ადრეული ჩარევა',
    results_treatment: 'საკითხების მიხედვით მედიკამენტური თერაპია',
    results_advanced_care: 'განვითარებული გულის უკმარისობის მკურნალობა',
    results_primary_management_approach: 'ძირითადი მართვის მიდგომა',
    results_management_recommendations: 'მართვის რეკომენდაციები',
    results_next_steps: 'შემდეგი ნაბიჯები',
    results_staging_system_reference: 'ACC/AHA გულის უკმარისობის სტადიის განსაზღვრის სახელმძღვანელო',
    
    // Stage reference results
    results_stage_a_reference: 'სტადია A - რისკის ქვეშ',
    results_stage_a_description_reference: 'რისკ ფაქტორების მოდიფიკაცია და პრევენცია',
    results_stage_b_reference: 'სტადია B - სტრუქტურული დაავადება',
    results_stage_b_description_reference: 'სტრუქტურული გულის დაავადება სიმპტომების გარეშე',
    results_stage_c_reference: 'სტადია C - სიმპტომური',
    results_stage_c_description_reference: 'სტრუქტურული დაავადება გულის უკმარისობის სიმპტომებით',
    results_stage_d_reference: 'სტადია D - განვითარებული',
    results_stage_d_description_reference: 'რეფრაქტორული გულის უკმარისობა სპეციალიზებული მკურნალობის საჭიროებით',

    // Footer
    results_algorithm_validation_title: 'ACC/AHA გულის უკმარისობის სტადიის განსაზღვრა',
    results_algorithm_validation_description: '✓ ACC/AHA გაიდლაინებით ვალიდირებული • მტკიცებულებებზე დაფუძნებული სტადიის განსაზღვრის სისტემა',
    footer_info: 'ACC/AHA გულის უკმარისობის გაიდლაინებზე დაფუძნებული • მტკიცებულებებზე დაფუძნებული სტადიის განსაზღვრის სისტემა',
    footer_validated: 'ACC/AHA ვალიდირებული',

    // Creator Section
    creator_insights_title: 'შემქმნელის შესახებ',
    creator_name: 'დოქტორი შარონ ჰანტი',
    creator_bio: 'შარონ ჰანტი, MD, არის სტენფორდის უნივერსიტეტის მედიცინის პროფესორი და სამედიცინო ცენტრის წარმომადგენელი. ის წევრია კარდიოვასკულარული ინსტიტუტის. დოქტორ ჰანტის კვლევა ფოკუსირებულია კარდიოვასკულარულ დაავადებებზე, მათ შორის გულის უკმარისობასა და მიოკარდიუმის ინფარქტზე და თანაავტორია მრავალი ACC/AHA გაიდლაინის.',
    creator_publications_link: 'დოქტორ შარონ ჰანტის პუბლიკაციების სანახავად ეწვიეთ',

    // Evidence Section
    evidence_title: 'მტკიცებულება და ფორმულა',
    evidence_formula_title: 'ფორმულა',
    evidence_stage_a_title: 'სტადია A (გულის უკმარისობის რისკის ქვეშ)',
    evidence_stage_a_definition: 'განისაზღვრება როგორც პაციენტი სიმპტომების, სტრუქტურული გულის დაავადების ან გულის ბიომარკერების გარეშე, მაგრამ ქრონიკული მდგომარეობებით რომლებიც ზრდის რისკს. ეს მდგომარეობები მოიცავს ჰიპერტენზიას, დიაბეტს, ათეროსკლეროზულ კარდიოვასკულარულ დაავადებას, მეტაბოლურ სინდრომს და სიმსუქნეს, კარდიოტოქსიური წამლების ზეგავლენას, კარდიომიოპათიის გენეტიკურ ვარიანტს ან კარდიომიოპათიის დადებით ოჯახურ ანამნეზს.',
    
    evidence_stage_b_title: 'სტადია B (წინა-გულის უკმარისობა)',
    evidence_stage_b_definition: 'განისაზღვრება როგორც ერთ-ერთი შემდეგი მტკიცებულება და გულის უკმარისობის სიმპტომების ან ნიშნების გარეშე.',
    evidence_stage_b_structural: '1. სტრუქტურული გულის დაავადება მოიცავს:',
    evidence_stage_b_structural_items: 'მარცხენა ან მარჯვენა პარკუჭის შემცირებულ სისტოლური ფუნქციას (იგულისხმება შემცირებული განდევნის ფრაქცია ან შემცირებული დაძაბულობა)\nპარკუჭის ჰიპერტროფიას\nკამერის გაფართოებას\nკედლის მოძრაობის დარღვევებს\nსარქვლოვან გულის დაავადებას',
    evidence_stage_b_filling: '2. გაზრდილი შევსების წნევის მტკიცებულება შეიძლება დადასტურდეს:',
    evidence_stage_b_filling_items: 'ინვაზიური ჰემოდინამიკური გაზომვებით ან\nარაინვაზიური გამოსახულებით, როგორიცაა ექოკარდიოგრაფია',
    evidence_stage_b_biomarkers: '3. პაციენტები რისკ ფაქტორებით და ან',
    evidence_stage_b_biomarkers_items: 'გაზრდილი BNP ან\nმუდმივად ამაღლებული გულის ტროპონინი',

    evidence_stage_c_title: 'სტადია C (სიმპტომური გულის უკმარისობა)',
    evidence_stage_c_definition: 'განისაზღვრება როგორც სტრუქტურული გულის დაავადება გულის უკმარისობის მიმდინარე ან წინა სიმპტომებით.',

    evidence_stage_d_title: 'სტადია D (განვითარებული გულის უკმარისობა)',
    evidence_stage_d_definition: 'განისაზღვრება როგორც გულის უკმარისობის გამოხატული სიმპტომები რომლებიც ხელს უშლის ყოველდღიურ ცხოვრებას და იწვევს განმეორებით ჰოსპიტალიზაციებს, მიზნობრივი წამლოვანი თერაპიის (GDMT) მიუხედავად.',

    evidence_appraisal_title: 'მტკიცებულების შეფასება',
    evidence_appraisal_text: 'ACC/AHA გულის უკმარისობის სტადიები შემუშავდა ერთობლივად ამერიკული კარდიოლოგიის კოლეჯის (ACC) და ამერიკული გულის ასოციაციის (AHA) მიერ ექსპერტთა კონსენსუსით. ისინი უნდა ავსებდეს, მაგრამ არ შეცვლიდეს ნიუ-იორკის გულის ასოციაციის (NYHA) ფუნქციური კლასიფიკაციას, რადგან თანამედროვე მკურნალობის რეკომენდაციები არ განსხვავდებოდა კლასის მიხედვით.',

    evidence_literature_title: 'ლიტერატურა',
    evidence_guidelines_title: 'კლინიკური პრაქტიკის გაიდლაინები',
    evidence_research_title: 'სამეცნიერო ნაშრომი',
    evidence_research_citation: 'Heidenreich PA, Bozkurt B, Aguilar D, et al. 2022 AHA/ACC/HFSA Guideline for the Management of Heart Failure: A Report of the American College of Cardiology/American Heart Association Joint Committee on Clinical Practice Guidelines. Circulation. 2022;145(18):e895-e1032.',

    // Management Section
    management_title: 'მართვა',
    management_summary: 'ქვემოთ მოცემულია I კლასის რეკომენდაციული განცხადებების შეჯამება. ეს სია ფოკუსირებულია მიზნობრივ წამლოვან თერაპიაზე (GDMT) და არ შეიცავს გაიდლაინის ყველა განცხადებას. მართვის დამატებითი დეტალებისა და ოფციების გამოსაყენებლად მიმართეთ გაიდლაინის სრულ ტექსტს.',

    management_stage_a_title: 'სტადია A: პაციენტები მაღალი რისკით გულის უკმარისობის განვითარებისთვის მდგომარეობების არსებობის გამო რომლებიც ძლიერ ასოცირდება გულის უკმარისობის განვითარებასთან.',
    management_stage_a_htn: 'პაციენტებში ჰიპერტენზიით, არტერიული წნევა უნდა იყოს კონტროლირებული GDMT-ით ჰიპერტენზიისთვის სიმპტომური გულის უკმარისობის თავიდან აცილების მიზნით. (LOE: A)',
    management_stage_a_dm: 'პაციენტებში 2-ე ტიპის შაქრიანი დიაბეტით და ან დადგენილი კარდიოვასკულარული დაავადებით ან მაღალი კარდიოვასკულარული რისკით, SGLT2i უნდა გამოიყენოს გულის უკმარისობის გამო ჰოსპიტალიზაციების თავიდან აცილების მიზნით. (LOE: A)',
    management_stage_a_lifestyle: 'ჯანსაღი ცხოვრების წესის ჩვევები როგორიცაა რეგულარული ფიზიკური აქტივობა, ნორმალური წონის შენარჩუნება, ჯანსაღი დიეტის დაცვა და მოწევის თავიდან აცილება სასარგებლოა გულის უკმარისობის მომავალი რისკის შესამცირებლად. (LOE: B-NR)',
    management_stage_a_cvd: 'პაციენტებში კარდიოვასკულარული დაავადებით, ოპტიმალური მართვა რეკომენდირებულია.',
    management_stage_a_cardiotoxic: 'პაციენტებში კარდიოტოქსიური აგენტების ზემოქმედებით, მულტიდისციპლინარული მართვა რეკომენდირებულია.',
    management_stage_a_genetic: 'პაციენტებისთვის რომელთაც აქვთ პირველი ხარისხის ნათესავები გენეტიკური ან მემკვიდრეობითი კარდიომიოპათიებით, გენეტიკური სკრინინგი და კონსულტირება რეკომენდირებულია.',

    management_stage_b_title: 'სტადია B: პაციენტები რომლებმაც განავითარეს სტრუქტურული გულის დაავადება რომელიც ძლიერ ასოცირდება გულის უკმარისობის განვითარებასთან მაგრამ რომლებსაც არასოდეს ჰქონდათ გულის უკმარისობის ნიშნები ან სიმპტომები.',
    management_stage_b_ace: 'პაციენტებში LVEF <40%-ით, მკურნალობა ACEi-ით რეკომენდირებულია სიმპტომური გულის უკმარისობის თავიდან აცილებისა და სიკვდილობის შემცირების მიზნით. (LOE: A)',
    management_stage_b_statin: 'პაციენტებში ახალი ან შორეული MI ან ACS-ის ანამნეზით, სტატინები უნდა გამოიყენოს სიმპტომური გულის უკმარისობისა და არახელსაყრელი კარდიოვასკულარული მოვლენების თავიდან აცილების მიზნით. (LOE: B-R)',
    management_stage_b_arb: 'პაციენტებში ახალი MI-ით და LVEF <40%-ით, მკურნალობა ARB-ით რეკომენდირებულია თუ ACEI არ იტანება. (LOE: A)',
    management_stage_b_beta: 'პაციენტებში LVEF <40%-ით და ახალი ან შორეული MI ან ACS-ის ანამნეზით, მტკიცებულებზე დაფუძნებული ბეტა-ბლოკერი თერაპია რეკომენდირებულია. (LOE: B-R)',
    management_stage_b_icd: 'პაციენტებში LVEF <30%-ით, >1 წელი გადარჩენით, > 40 დღე MI-ის შემდეგ, მკურნალობა ICD-ით რეკომენდირებულია სიკვდილობის შემცირებისა და უეცარი გულის სიკვდილის პირველადი პრევენციისთვის. (LOE: B-R)',
    management_stage_b_beta_prevent: 'პაციენტებში LVEF <40%-ით, ბეტა-ბლოკერები უნდა გამოიყენოს სიმპტომური გულის უკმარისობის თავიდან აცილების მიზნით. (LOE: C-LD)',

    management_stage_c_title: 'სტადია C: პაციენტები რომლებსაც აქვთ მიმდინარე ან წინა გულის უკმარისობის სიმპტომები ასოცირებული ძირითად სტრუქტურულ გულის დაავადებასთან.',
    management_stage_c_diuretics: 'პაციენტებში რომლებსაც აქვთ სითხის დაკავება, დიურეტიკები რეკომენდირებულია შეშუპების შემსუბუქებისთვის, სიმპტომების გაუმჯობესებისთვის და გულის უკმარისობის გაუარესების თავიდან აცილების მიზნით. (მტკიცებულების დონე: B-NR)',
    management_stage_c_arni: 'პაციენტებში HFrEF-ით და NYHA II ან III კლასის სიმპტომებით, ARNi-ის გამოყენება რეკომენდირებულია ავადობისა და სიკვდილობის შემცირების მიზნით. (LOE: A)',
    management_stage_c_ace: 'ACEi-ის გამოყენება სასარგებლოა ავადობისა და სიკვდილობის შემცირების მიზნით როდესაც ARNi-ის გამოყენება შეუძლებელია. (LOE: A)',
    management_stage_c_arb: 'ARB-ის გამოყენება რეკომენდირებულია მხოლოდ ACEi ან ARNi-ის შეუტანლობის შემთხვევაში. (LOE: A)',
    management_stage_c_arni_switch: 'პაციენტებში ქრონიკული სიმპტომური HFrEF NYHA II ან III კლასით რომლებიც ეტანებიან ACEi ან ARB-ს, შეცვლა ARNi-ით რეკომენდირებულია ავადობისა და სიკვდილობის შემდგომი შემცირების მიზნით. (LOE: B-R)',
    management_stage_c_beta_blocker: 'თუ ბეტა-ბლოკერი ინდიცირებულია, ბისოპროლოლის, კარვედილოლის ან მეტოპროლოლ სუქცინატის გამოყენება რეკომენდირებულია სიკვდილობისა და ჰოსპიტალიზაციების შემცირების მიზნით. (LOE: A)',
    management_stage_c_mra: 'პაციენტებში HFrEF-ით და NYHA II-IV კლასის სიმპტომებით, სპირონოლაქტონი ან ეპლერენონი რეკომენდირებულია ავადობისა და სიკვდილობის შემცირების მიზნით. (LOE: A) eGFR უნდა იყოს >30 ml/min/1.73m2 და შრატის კალიუმი უნდა იყოს <5.0 mEq/L.',
    management_stage_c_sglt2i: 'პაციენტებში სიმპტომური ქრონიკული HFrEF-ით, SGLT2i რეკომენდირებულია გულის უკმარისობის გამო ჰოსპიტალიზაციებისა და კარდიოვასკულარული სიკვდილობის შემცირების მიზნით, მეორე ტიპის დიაბეტის არსებობისა თუ არარსებობის მიუხედავად. (LOE: A)',
    management_stage_c_hydralazine: 'პაციენტებისთვის რომლებიც იდენტიფიცირებენ თავს აფროამერიკელებად, რომლებსაც აქვთ NYHA III-IV კლასის HFrEF და იღებენ ოპტიმალურ მედიკამენტურ თერაპიას, ჰიდრალაზინისა და იზოსორბიდ დინიტრატის კომბინაცია რეკომენდირებულია სიმპტომების გაუმჯობესებისა და ავადობისა და სიკვდილობის შემცირების მიზნით. (LOE: A)',

    management_stage_d_title: 'სტადია D: პაციენტები განვითარებული სტრუქტურული გულის დაავადებით და გულის უკმარისობის გამოხატული სიმპტომებით დასვენებისას მაქსიმალური მედიკამენტური თერაპიის მიუხედავად და რომლებიც საჭიროებენ სპეციალიზებულ ჩარევებს.',
    management_stage_d_referral: 'პაციენტებში განვითარებული გულის უკმარისობით, დროული მიმართვა გულის უკმარისობის სპეციალისტურ მეოს რეკომენდირებულია (თუ შეესაბამება პაციენტის მიზნებს) მართვისა და განვითარებული გულის უკმარისობის თერაპიების გადასახედად. (LOE: C-LD)',
    management_stage_d_lvad: 'შერჩეულ პაციენტებში განვითარებული HFrEF-ით NYHA IV კლასის სიმპტომებით რომლებიც მიჩნეულია რომ დამოკიდებულები არიან უწყვეტ ინტრავენურ ინოტროპებზე ან დროებით MCS-ზე, გამძლე LVAD იმპლანტაცია ეფექტურია ფუნქციური სტატუსის, ცხოვრების ხარისხისა და გადარჩენის გასაუმჯობესებლად. (LOE: A)',
    management_stage_d_transplant: 'შერჩეული პაციენტებისთვის განვითარებული გულის უკმარისობით GDMT-ის მიუხედავად, გულის ტრანსპლანტაცია მითითებულია გადარჩენისა და ცხოვრების ხარისხის გასაუმჯობესებლად. (LOE: C-LD)',
    management_stage_d_assessment: 'პაციენტებში გულის უკმარისობით ჰოსპიტალიზებულებში, შეშუპების სიმძიმე და პერფუზიის ადეკვატურობა უნდა შეფასდეს ტრიაჟისა და საწყისი თერაპიის ხელმძღვანელობისთვის. (LOE: C-LD).',

    // Results nested structure for stages
    results: {
      stageA: {
        title: 'სტადია A - რისკის ქვეშ',
        description: 'გულის უკმარისობის განვითარების მაღალი რისკი, მაგრამ სტრუქტურული გულის დაავადების ან სიმპტომების გარეშე',
        recommendations: [
          'ჰიპერტენზიის ოპტიმალური მართვა მიმდინარე რეკომენდაციების მიხედვით',
          'შაქრიანი დიაბეტის კომპლექსური მართვა მიზნობრივი HbA1c <7%-ით',
          'მტკიცებულებებზე დაფუძნებული ლიპიდების მართვა და სტატინოთერაპია',
          'მოწევის შეწყვეტის კონსულტაცია და მხარდაჭერის პროგრამები',
          'რეგულარული აერობული ვარჯიშები და წონის კონტროლი',
          'ალკოჰოლის ზომიერება და დიეტაში ნატრიუმის შეზღუდვა'
        ],
        nextSteps: [
          'პირველადი მეოობის ოპტიმიზაცია კარდიოვასკულარული რისკის ფოკუსით',
          'რისკ ფაქტორების მოდიფიკაციის კომპლექსური პროგრამა',
          'პაციენტის განათლება კარდიოვასკულარული ჯანმრთელობის შესახებ',
          'რეგულარული მონიტორინგი წლიური შეფასებებით',
          'საბაზისო ექოკარდიოგრამა მრავალი მაღალი რისკის ფაქტორის არსებობისას'
        ]
      },
      stageB: {
        title: 'სტადია B - სტრუქტურული დაავადება',
        description: 'სტრუქტურული გულის დაავადება გულის უკმარისობის ნიშნების ან სიმპტომების გარეშე, პრევენციული თერაპიის საჭიროებით',
        recommendations: [
          'ACE ინჰიბიტორის ან ARB თერაპია გულის დაცვისთვის',
          'ბეტა-ბლოკერი თერაپია წინა MI-ის ან შემცირებული განდევნის ფრაქციის შემთხვევაში',
          'ძირითადი კარდიოვასკულარული დაავადებების მკურნალობა',
          'რისკ ფაქტორების მოდიფიკაციის კომპლექსური პროგრამა',
          'პროგრესირების რეგულარული ექოკარდიოგრაფიული მონიტორინგი',
          'სიმპტომების ზედამხედველობა და პაციენტის განათლება'
        ],
        nextSteps: [
          'კარდიოლოგიური შეფასება სტრუქტურული გულის დაავადების მართვისთვის',
          'წლიური ან ნახევარწლიური ექოკარდიოგრამის მონიტორინგი',
          'ოპტიმალური მედიკამენტური თერაპიის დაწყება და ტიტრაცია',
          'პაციენტის განათლება გულის უკმარისობის სიმპტომების აღიარებაზე',
          'რისკ ფაქტორების აგრესიული მართვა და ცხოვრების წესის მოდიფიკაცია'
        ]
      },
      stageC: {
        title: 'სტადია C - სიმპტომური გულის უკმარისობა',
        description: 'სიმპტომური გულის უკმარისობა სტრუქტურული გულის დაავადებით, რეკომენდაციებზე დაფუძნებული მედიკამენტური თერაპიის საჭიროებით',
        recommendations: [
          'რეკომენდაციებზე დაფუძნებული მედიკამენტური თერაპიის კომპლექსური ოპტიმიზაცია',
          'ACE ინჰიბიტორი/ARB/ARNI თერაპია მაქსიმალურად ატანად დოზაში',
          'მტკიცებულებებზე დაფუძნებული ბეტა-ბლოკერი თერაპიის დაწყება და ტიტრაცია',
          'დიურეტიკები ოპტიმალური მოცულობის მართვისა და სიმპტომების კონტროლისთვის',
          'მოწყობილობის თერაპიის შეფასება (ICD/CRT) მიმდინარე რეკომენდაციების მიხედვით',
          'რეგულარული მონიტორინგი და მედიკამენტების ოპტიმიზაცია'
        ],
        nextSteps: [
          'კარდიოლოგთან მიმართვა სპეციალიზებული გულის უკმარისობის მართვისთვის',
          'კომპლექსური ექოკარდიოგრაფიული შეფასება და მონიტორინგი',
          'ლაბორატორიული მონიტორინგი და მედიკამენტების კორექცია',
          'პაციენტის განათლება და თვითდახმარების მენეჯმენტის ტრენინგი',
          'მოწყობილობის თერაპიის განხილვა და ელექტროფიზიოლოგის კონსულტაცია'
        ]
      },
      stageD: {
        title: 'სტადია D - განვითარებული გულის უკმარისობა',
        description: 'განვითარებული გულის უკმარისობა რეფრაქტორული სიმპტომებით რეკომენდაციებზე დაფუძნებული მედიკამენტური თერაპიის მიუხედავად, სპეციალიზებული ჩარევების საჭიროებით',
        recommendations: [
          'განვითარებული გულის უკმარისობის თერაპიები და სპეციალიზებული მეოობის კოორდინაცია',
          'მექანიკური სისხლის მიმოქცევის მხარდაჭერის შეფასება გულის გუნდის კონსულტაციით',
          'გულის ტრანსპლანტაციის შეფასება კვალიფიციურ ცენტრში',
          'პალიატიური მეოობის კონსულტაცია სიმპტომების მართვისთვის',
          'სპეციალიზებულ გულის უკმარისობის ცენტრში მიმართვა კომპლექსური მეოობისთვის',
          'კლინიკური კვლევების განხილვა ექსპერიმენტული თერაპიებისთვის'
        ],
        nextSteps: [
          'განვითარებული გულის უკმარისობის სპეციალისტის დაუყოვნებელი კონსულტაცია',
          'კომპლექსური ჰემოდინამიკური და ფუნქციური შეფასება',
          'მულტიდისციპლინარული გულის გუნდის შეფასება',
          'ცხოვრების დასასრულის დაგეგმვა და წინასწარი დირექტივების განხილვა'
        ]
      }
    }
  },

  // DAPT Score Calculator - imported from standalone file
  dapt: daptTranslations,

  // TIMI Risk Calculator - imported from standalone file
  timi: timiRiskScoreTranslations,

  // PRECISE-DAPT Calculator - imported from standalone file
  precise_dapt: preciseDaptTranslations,

  // AHA PREVENT™ Calculator - Extracted to standalone file
  prevent: ahaPreventTranslations,

  // SHFM Risk Calculator - Extracted to standalone file
  shfm: shfmTranslations,

  // Atrial Fibrillation section moved to risk-assessment.ts

  // GWTG-HF Risk Calculator
  gwtg_hf: {
    title: 'GWTG-HF რისკის კალკულატორი',
    subtitle: 'გაიდლაინები მკურნალობისთვის - გულის უკმარისობის რისკის შეფასება'
  }
};