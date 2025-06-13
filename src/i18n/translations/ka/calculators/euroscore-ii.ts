export default {
  title: 'EuroSCORE II რისკის კალკულატორი',
  subtitle: 'ევროპული კარდიოქირურგიული რისკის შეფასების სისტემა • ვერსია 2 • 30-დღიანი მოკვდაობის პროგნოზირება',
  description: 'განახლებული ევროპული კარდიოქირურგიული რისკის შეფასების სისტემა 30-დღიანი მოკვდაობის პროგნოზირებისთვის.',
  
  // Validation messages
  validation: {
    age_required: 'ასაკი აუცილებელია',
    age_range: 'ასაკი უნდა იყოს 18-დან 120 წლამდე',
    gender_required: 'სქესი აუცილებელია',
    urgency_required: 'სასწრაფოება აუცილებელია',
    nyha_required: 'NYHA კლასი აუცილებელია',
    procedure_weight_required: 'პროცედურის წონა აუცილებელია',
    creatinine_required: 'კრეატინინი აუცილებელია',
    creatinine_range: 'კრეატინინი უნდა იყოს 0.5-დან 15 მგ/დლ-მდე'
  },
  
  // Alert section
  alert_title: 'EuroSCORE II - ევროპული კარდიოქირურგიული რისკის მოდელი',
  alert_description: 'განახლებული ევროპული კარდიოქირურგიული რისკის შეფასების სისტემა',
  alert_validation: 'Nashef et al. - ევროპული ვალიდაცია - განახლებული ალგორითმი',
  
  // Progress steps
  step_patient_factors: 'პაციენტის ფაქტორები', // TODO: translate
  step_cardiac_status: 'გულის მდგომარეობა', // TODO: translate
  step_operative_factors: 'ოპერაციული ფაქტორები', // TODO: translate
  step_procedures: 'პროცედურები', // TODO: translate
  
  // Section headers
  section_patient_demographics: 'პაციენტის დემოგრაფია და ძირითადი ფაქტორები', // TODO: translate
  section_patient_description: 'პაციენტის ძირითადი მახასიათებლები და ლაბორატორიული მნიშვნელობები', // TODO: translate
  section_cardiac_factors: 'გულთან დაკავშირებული ფაქტორები', // TODO: translate
  section_cardiac_description: 'გულის ანამნეზი, სიმპტომები და ფუნქციური მდგომარეობა', // TODO: translate
  section_operative_factors: 'ოპერაციული ფაქტორები', // TODO: translate
  section_operative_description: 'პროცედურის სირთულე და კრიტიკული პრეოპერაციული მდგომარეობები', // TODO: translate
  section_valve_procedures: 'სარქვლოვანი პროცედურები', // TODO: translate
  section_specific_cardiac_procedures: 'სპეციფიკური გულის პროცედურები', // TODO: translate
  section_specific_procedures_description: 'ინდივიდუალური სარქვლოვანი და ქირურგიული პროცედურების სპეციფიკაციები', // TODO: translate
  
  // Demographics fields
  age_label: 'ასაკი',
  age_placeholder: '65',
  age_unit: 'წელი',
  gender_label: 'სქესი',
  gender_placeholder: 'აირჩიეთ სქესი...',
  gender_male: 'მამრობითი',
  gender_female: 'მდედრობითი',
  creatinine_label: 'შრატის კრეატინინი',
  creatinine_placeholder: '1.0',
  creatinine_unit: 'მგ/დლ',
  
  // Additional risk factors section
  additional_risk_factors: 'დამატებითი პაციენტის რისკის ფაქტორები', // TODO: translate
  poor_mobility_label: 'გაუარესებული მობილობა', // TODO: translate
  poor_mobility_description: 'გაუარესებული მობილობა ყოველდღიური აქტივობების დროს', // TODO: translate
  diabetes_insulin_label: 'შაქრიანი დიაბეტი ინსულინზე', // TODO: translate
  diabetes_insulin_description: 'შაქრიანი დიაბეტი ინსულინური თერაპიის საჭიროებით', // TODO: translate
  chronic_pulmonary_label: 'ქრონიკული ფილტვის დაავადება', // TODO: translate
  chronic_pulmonary_description: 'COPD ან სხვა ქრონიკული ფილტვის მდგომარეობები', // TODO: translate
  pvd_label: 'პერიფერიული სისხლძარღვოვანი დაავადება', // TODO: translate
  pvd_description: 'პერიფერიული არტერიული დაავადება ან კლაუდიკაცია', // TODO: translate
  
  // NYHA and cardiac factors
  nyha_label: 'NYHA ფუნქციური კლასი',
  nyha_placeholder: 'აირჩიეთ NYHA კლასი...',
  nyha_class_1: 'კლასი I - სიმპტომები არ არის',
  nyha_class_2: 'კლასი II - მცირე შეზღუდვა',
  nyha_class_3: 'კლასი III - მნიშვნელოვანი შეზღუდვა',
  nyha_class_4: 'კლასი IV - მძიმე შეზღუდვა',
  
  urgency_label: 'სასწრაფოება',
  urgency_placeholder: 'აირჩიეთ სასწრაფოების დონე...',
  urgency_elective: 'ჩვეულებრივი',
  urgency_urgent: 'სასწრაფო',
  urgency_emergency: 'გადაუდებელი',
  
  // Cardiac conditions
  cardiac_history_title: 'გულის ანამნეზი და მდგომარეობები', // TODO: translate
  recent_mi_label: 'ბოლოდროინდელი MI (90 დღის განმავლობაში)', // TODO: translate
  recent_mi_description: 'მიოკარდიუმის ინფარქტი 90 დღის განმავლობაში', // TODO: translate
  unstable_angina_label: 'არასტაბილური ანგინა', // TODO: translate
  unstable_angina_description: 'მოსვენების ანგინა IV ნიტრატების საჭიროებით', // TODO: translate
  pulmonary_hypertension_label: 'ფილტვის ჰიპერტენზია', // TODO: translate
  pulmonary_hypertension_description: 'სისტოლური PA წნევა > 60 მმ ვარდ.სვ.', // TODO: translate
  extracardiac_arteriopathy_label: 'ექსტრაკარდიული არტერიოპათია', // TODO: translate
  extracardiac_arteriopathy_description: 'კლაუდიკაცია, კაროტიდული ოკლუზია, ან ინსულტი', // TODO: translate
  neurological_dysfunction_label: 'ნევროლოგიური დისფუნქცია', // TODO: translate
  neurological_dysfunction_description: 'დაავადება რომელიც მძიმედ აზიანებს მოძრაობას ან ყოველდღიურ ფუნქციონირებას', // TODO: translate
  previous_cardiac_surgery_label: 'ადრინდელი გულის ქირურგია', // TODO: translate
  previous_cardiac_surgery_description: 'ადრინდელი გულის ქირურგიული პროცედურა', // TODO: translate
  active_endocarditis_label: 'აქტიური ენდოკარდიტი', // TODO: translate
  active_endocarditis_description: 'პაციენტი ჯერ კიდევ იღებს ანტიბიოტიკურ მკურნალობას ენდოკარდიტისთვის', // TODO: translate
  
  // Operative factors
  procedure_weight_label: 'პროცედურის წონა/სირთულე', // TODO: translate
  procedure_weight_placeholder: 'აირჩიეთ პროცედურის სირთულე...', // TODO: translate
  procedure_weight_low: 'დაბალი სირთულე (მხოლოდ CABG, ერთი სარქველი)', // TODO: translate
  procedure_weight_medium: 'საშუალო სირთულე (CABG + სარქველი, ორმაგი სარქველი)', // TODO: translate
  procedure_weight_high: 'მაღალი სირთულე (მრავალი პროცედურა, რთული რეპარაცია)', // TODO: translate
  
  critical_preoperative_label: 'კრიტიკული პრეოპერაციული მდგომარეობა', // TODO: translate
  critical_preoperative_description: 'ვენტრიკულური ტაქიკარდია ან ვენტრიკულური ფიბრილაცია ან შეწყვეტილი უეცარი სიკვდილი, პრეოპერაციული გულის მასაჟი, პრეოპერაციული ვენტილაცია ანესთეზიის ოთახამდე, პრეოპერაციული ინოტროპული მხარდაჭერა, ინტრა-აორტული ბალონური კონტრაპულსაცია ან პრეოპერაციული მწვავე თირკმლის უკმარისობა (ანურია ან ოლიგურია < 10 მლ/საათი)', // TODO: translate
  
  critical_conditions_header: 'კრიტიკული პრეოპერაციული მდგომარეობები', // TODO: translate
  
  // Procedure complexity info box
  complexity_info_title: 'EuroSCORE II პროცედურის სირთულე', // TODO: translate
  complexity_low_info: '• დაბალი: ერთი სარქვლის ჩანაცვლება, მხოლოდ CABG', // TODO: translate
  complexity_medium_info: '• საშუალო: CABG + სარქველი, ორმაგი სარქვლოვანი პროცედურები', // TODO: translate
  complexity_high_info: '• მაღალი: მრავალი სარქველი + CABG, რთული აორტული ქირურგია, საგადარებო პროცედურები', // TODO: translate
  
  // Valve procedures
  aortic_surgery_label: 'აორტული ქირურგია', // TODO: translate
  aortic_surgery_description: 'აორტული სარქვლის ჩანაცვლება ან რეპარაცია', // TODO: translate
  mitral_surgery_label: 'მიტრალური ქირურგია', // TODO: translate
  mitral_surgery_description: 'მიტრალური სარქვლის ჩანაცვლება ან რეპარაცია', // TODO: translate
  tricuspid_surgery_label: 'ტრიკუსპიდალური ქირურგია', // TODO: translate
  tricuspid_surgery_description: 'ტრიკუსპიდალური სარქვლის ჩანაცვლება ან რეპარაცია', // TODO: translate
  pulmonary_surgery_label: 'ფილტვის სარქვლის ქირურგია', // TODO: translate
  pulmonary_surgery_description: 'ფილტვის სარქვლის ჩანაცვლება ან რეპარაცია', // TODO: translate
  
  // Risk assessment info
  risk_assessment_title: 'EuroSCORE II რისკის შეფასება', // TODO: translate
  risk_assessment_complexity: '• ყოველი სპეციფიკური პროცედურა ამატებს საერთო ქირურგიულ სირთულეს', // TODO: translate
  risk_assessment_multiple: '• მრავალი სარქვლოვანი პროცედურა მნიშვნელოვნად ზრდის ოპერაციულ რისკს', // TODO: translate
  risk_assessment_combined: '• განიხილეთ კომბინირებული პროცედურები საბოლოო რისკის გამოთვლისას', // TODO: translate
  
  // Navigation buttons
  next_cardiac_status: 'შემდეგი: გულის მდგომარეობა', // TODO: translate
  next_operative_factors: 'შემდეგი: ოპერაციული ფაქტორები', // TODO: translate
  next_specific_procedures: 'შემდეგი: სპეციფიკური პროცედურები', // TODO: translate
  back_button: 'უკან',
  calculate_euroscore_ii: 'EuroSCORE II-ის გამოთვლა',
  
  // Results section
  results_title: 'EuroSCORE II შეფასების შედეგები', // TODO: translate
  mortality_risk_30day: '30-დღიანი მოკვდაობის რისკი', // TODO: translate
  predicted_mortality: 'პროგნოზირებული 30-დღიანი მოკვდაობა', // TODO: translate
  risk_stratification: 'EuroSCORE II რისკის სტრატიფიკაცია', // TODO: translate
  
  // Risk categories and interpretations
  risk_low: 'დაბალი რისკი',
  risk_intermediate: 'საშუალო',
  risk_high: 'მაღალი რისკი',
  risk_very_high: 'ძალიან მაღალი',
  
  mortality_low: '< 2% მოკვდაობა',
  mortality_intermediate: '2-5% მოკვდაობა',
  mortality_high: '5-10% მოკვდაობა',
  mortality_very_high: '> 10% მოკვდაობა',
  
  interpretation_low: 'დაბალი ოპერაციული რისკი (EuroSCORE II <2%)', // TODO: translate
  interpretation_intermediate: 'საშუალო ოპერაციული რისკი (EuroSCORE II 2-5%)', // TODO: translate
  interpretation_high: 'მაღალი ოპერაციული რისკი (EuroSCORE II 5-10%)', // TODO: translate
  interpretation_very_high: 'ძალიან მაღალი ოპერაციული რისკი (EuroSCORE II >10%)', // TODO: translate
  
  // STS Comparison
  sts_comparison_title: 'STS რისკის მოდელებთან შედარება', // TODO: translate
  sts_comparison_low: 'ზოგადად კორელირებს STS დაბალ რისკთან (<2%). ორივე მოდელი მხარს უჭერს სტანდარტულ ქირურგიულ მიდგომას.', // TODO: translate
  sts_comparison_intermediate: 'STS საშუალო რისკის მსგავსი (2-5%). გაძლიერებული მონიტორინგი და ოპტიმიზაცია რეკომენდირებულია.', // TODO: translate
  sts_comparison_high: 'STS მაღალ რისკთან შედარებადი (5-10%). განიხილეთ გულის გუნდის შეფასება და ალტერნატივები.', // TODO: translate
  sts_comparison_very_high: 'STS ძალიან მაღალ რისკთან შესაბამისი (>10%). ძლიერი მიზეზი არაქირურგიული ვარიანტებისთვის.', // TODO: translate
  sts_comparison_default: 'რისკის შეფასების შედარება STS მოდელებთან რეკომენდირებულია.', // TODO: translate
  
  // Clinical recommendations
  clinical_recommendations: 'კლინიკური მართვის რეკომენდაციები', // TODO: translate
  
  // Base recommendations
  recommendation_team_evaluation: 'მულტიდისციპლინარური გულის გუნდის შეფასება', // TODO: translate
  recommendation_preop_optimization: 'პრეოპერაციული ოპტიმიზაცია როგორც ნაჩვენებია', // TODO: translate
  recommendation_counseling: 'პაციენტისა და ოჯახის კონსულტაცია რისკებზე', // TODO: translate
  
  // Low risk recommendations
  recommendation_standard_approach: 'სტანდარტული ქირურგიული მიდგომა მისაღებია', // TODO: translate
  recommendation_fast_track: 'განიხილეთ სწრაფი ტრეკის პროტოკოლები', // TODO: translate
  recommendation_routine_care: 'რუტინული პოსტოპერაციული მზრუნველობა', // TODO: translate
  
  // Intermediate risk recommendations
  recommendation_enhanced_assessment: 'გაძლიერებული პრეოპერაციული შეფასება', // TODO: translate
  recommendation_additional_imaging: 'განიხილეთ დამატებითი ვიზუალიზაციის კვლევები', // TODO: translate
  recommendation_standard_icu: 'სტანდარტული ICU მონიტორინგი', // TODO: translate
  recommendation_risk_modification: 'რისკის ფაქტორების მოდიფიკაციის განხილვა', // TODO: translate
  
  // High risk recommendations
  recommendation_alternative_approaches: 'განიხილეთ ალტერნატიული მიდგომები (TAVI, მედიკამენტური თერაპია)', // TODO: translate
  recommendation_extensive_optimization: 'ვრცელი პრეოპერაციული ოპტიმიზაცია', // TODO: translate
  recommendation_extended_icu: 'გაფართოებული ICU მონიტორინგი დაგეგმილია', // TODO: translate
  recommendation_informed_consent: 'დეტალური ინფორმირებული თანხმობის განხილვა', // TODO: translate
  recommendation_less_invasive: 'განიხილეთ ნაკლებად ინვაზიური ალტერნატივები', // TODO: translate
  
  // Very high risk recommendations
  recommendation_non_surgical: 'მტკიცედ განიხილეთ არაქირურგიული ალტერნატივები', // TODO: translate
  recommendation_palliative_care: 'პალიატიური მზრუნველობის კონსულტაცია', // TODO: translate
  recommendation_goals_care: 'მზრუნველობის მიზნების განხილვა', // TODO: translate
  recommendation_high_risk_protocols: 'თუ ქირურგია იხმარება, მაღალი რისკის პროტოკოლები', // TODO: translate
  recommendation_transcatheter: 'განიხილეთ ტრანსკათეტერული მიდგომები', // TODO: translate
  recommendation_family_meeting: 'ოჯახური შეხვედრა აუცილებელია', // TODO: translate
  
  // Validation status
  validation_status_title: 'EuroSCORE II ვალიდაციის სტატუსი', // TODO: translate
  validation_status_text: '✓ ევროპული ვალიდაცია • Nashef et al. 2012 • განახლებული ალგორითმი • გაუმჯობესებული კალიბრაცია', // TODO: translate
  
  // Action buttons
  new_assessment: 'ახალი შეფასება',
  modify_inputs: 'შეყვანების მოდიფიკაცია',
  calculate_button: 'EuroSCORE II-ის გამოთვლა',
  new_assessment_button: 'ახალი შეფასება',
  modify_inputs_button: 'შეყვანების მოდიფიკაცია',
  
  // Results display labels
  mortality_risk_title: '30-დღიანი მოკვდაობის რისკი', // TODO: translate
  risk_stratification_title: 'EuroSCORE II რისკის სტრატიფიკაცია', // TODO: translate
  clinical_recommendations_title: 'კლინიკური მართვის რეკომენდაციები', // TODO: translate
  predicted_mortality_label: 'პროგნოზირებული 30-დღიანი მოკვდაობა', // TODO: translate
  risk_label: 'რისკი',
  
  // Risk category labels for display
  low_risk_label: 'დაბალი რისკი',
  intermediate_risk_label: 'საშუალო რისკი', 
  high_risk_label: 'მაღალი რისკი',
  very_high_risk_label: 'ძალიან მაღალი რისკი',
  
  // Risk category ranges
  low_risk_range: '< 2%',
  intermediate_risk_range: '2-5%',
  high_risk_range: '5-10%',
  very_high_risk_range: '> 10%',
  
  // Validation status
  validation_badge: 'ევროპული ვალიდაცია',
  footer_info: 'დაფუძნებულია EuroSCORE II-ზე Nashef et al.-ის მიერ • მხოლოდ საგანმანათლებლო მიზნებისთვის',
  
  // Footer
  footer_text: 'EuroSCORE II Nashef et al.-ის საფუძველზე • მხოლოდ საგანმანათლებლო მიზნებისთვის',
  european_validation: 'ევროპული ვალიდაცია'
}; 