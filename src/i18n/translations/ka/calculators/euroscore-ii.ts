export default {
  title: 'EuroSCORE II რისკის კალკულატორი',
  subtitle: 'ევროპული კარდიოქირურგიული რისკის შეფასების სისტემა • ვერსია 2 • 30-დღიანი მოკვდაობის პროგნოზირება',
  description: 'განახლებული ევროპული კარდიოქირურგიული რისკის შეფასების სისტემა, რომელიც უზრუნველყოფს 30-დღიანი მოკვდაობის პროგნოზირებას. ვალიდირებულია ევროპულ ცენტრებში გაუმჯობესებული კალიბრაციით ორიგინალურ EuroSCORE მოდელთან შედარებით.',
  
  // Validation messages
  validation: {
    age_required: 'ასაკი აუცილებელია',
    age_range: 'ასაკი უნდა იყოს 18-დან 120 წლამდე',
    gender_required: 'სქესი აუცილებელია',
    urgency_required: 'სასწრაფოება აუცილებელია',
    nyha_required: 'NYHA კლასი აუცილებელია',
    procedure_weight_required: 'პროცედურის წონა/სირთულე აუცილებელია',
    creatinine_required: 'კრეატინინი აუცილებელია',
    creatinine_range: 'კრეატინინი უნდა იყოს 0.5-დან 15 მგ/დლ-მდე'
  },
  
  // Alert section
  alert_title: 'EuroSCORE II - ევროპული კარდიოქირურგიული რისკის მოდელი',
  alert_description: 'განახლებული ევროპული კარდიოქირურგიული რისკის შეფასების სისტემა, რომელიც უზრუნველყოფს 30-დღიანი მოკვდაობის პროგნოზირებას. ვალიდირებულია ევროპულ ცენტრებში გაუმჯობესებული კალიბრაციით ორიგინალურ EuroSCORE მოდელთან შედარებით.',
  alert_validation: 'Nashef და სხვები - ევროპული ვალიდაცია - განახლებული ალგორითმი',
  
  // Progress steps
  step_patient_factors: 'პაციენტის ფაქტორები',
  step_cardiac_status: 'გულის მდგომარეობა',
  step_operative_factors: 'ოპერაციული ფაქტორები',
  step_procedures: 'პროცედურები',
  
  // Section headers
  section_patient_demographics: 'პაციენტის დემოგრაფია და ძირითადი ფაქტორები',
  section_patient_description: 'პაციენტის ძირითადი მახასიათებლები და ლაბორატორიული მნიშვნელობები',
  section_cardiac_factors: 'გულთან დაკავშირებული ფაქტორები',
  section_cardiac_description: 'გულის ანამნეზი, სიმპტომები და ფუნქციური მდგომარეობა',
  section_operative_factors: 'ოპერაციული ფაქტორები',
  section_operative_description: 'პროცედურის სირთულე და კრიტიკული პრეოპერაციული მდგომარეობები',
  section_valve_procedures: 'სარქვლოვანი პროცედურები',
  section_specific_cardiac_procedures: 'სპეციფიკური გულის პროცედურები',
  section_specific_procedures_description: 'ინდივიდუალური სარქვლოვანი და ქირურგიული პროცედურების სპეციფიკაციები',
  
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
  additional_risk_factors: 'დამატებითი პაციენტის რისკის ფაქტორები',
  poor_mobility_label: 'გაუარესებული მობილობა',
  poor_mobility_description: 'გაუარესებული მობილობა ყოველდღიური აქტივობების დროს',
  diabetes_insulin_label: 'შაქრიანი დიაბეტი ინსულინზე',
  diabetes_insulin_description: 'შაქრიანი დიაბეტი ინსულინური თერაპიის საჭიროებით',
  chronic_pulmonary_label: 'ქრონიკული ფილტვის დაავადება',
  chronic_pulmonary_description: 'COPD ან სხვა ქრონიკული ფილტვის მდგომარეობები',
  pvd_label: 'პერიფერიული სისხლძარღვოვანი დაავადება',
  pvd_description: 'პერიფერიული არტერიული დაავადება ან კლაუდიკაცია',
  
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
  cardiac_history_title: 'გულის ანამნეზი და მდგომარეობები',
  recent_mi_label: 'ბოლოდროინდელი MI (90 დღის განმავლობაში)',
  recent_mi_description: 'მიოკარდიუმის ინფარქტი 90 დღის განმავლობაში',
  unstable_angina_label: 'არასტაბილური ანგინა',
  unstable_angina_description: 'მოსვენების ანგინა IV ნიტრატების საჭიროებით',
  pulmonary_hypertension_label: 'ფილტვის ჰიპერტენზია',
  pulmonary_hypertension_description: 'სისტოლური PA წნევა > 60 მმ ვარდ.სვ.',
  extracardiac_arteriopathy_label: 'ექსტრაკარდიული არტერიოპათია',
  extracardiac_arteriopathy_description: 'კლაუდიკაცია, კაროტიდული ოკლუზია, ან ინსულტი',
  neurological_dysfunction_label: 'ნევროლოგიური დისფუნქცია',
  neurological_dysfunction_description: 'დაავადება რომელიც მძიმედ აზიანებს მოძრაობას ან ყოველდღიურ ფუნქციონირებას',
  previous_cardiac_surgery_label: 'ადრინდელი გულის ქირურგია',
  previous_cardiac_surgery_description: 'ადრინდელი გულის ქირურგიული პროცედურა',
  active_endocarditis_label: 'აქტიური ენდოკარდიტი',
  active_endocarditis_description: 'პაციენტი ჯერ კიდევ იღებს ანტიბიოტიკურ მკურნალობას ენდოკარდიტისთვის',
  
  // Operative factors
  procedure_weight_label: 'პროცედურის წონა/სირთულე',
  procedure_weight_placeholder: 'აირჩიეთ პროცედურის სირთულე...',
  procedure_weight_low: 'დაბალი სირთულე (მხოლოდ CABG, ერთი სარქველი)',
  procedure_weight_medium: 'საშუალო სირთულე (CABG + სარქველი, ორმაგი სარქველი)',
  procedure_weight_high: 'მაღალი სირთულე (მრავალი პროცედურა, რთული რეპარაცია)',
  
  critical_preoperative_label: 'კრიტიკული პრეოპერაციული მდგომარეობა',
  critical_preoperative_description: 'ვენტრიკულური ტაქიკარდია ან ვენტრიკულური ფიბრილაცია ან შეწყვეტილი უეცარი სიკვდილი, პრეოპერაციული გულის მასაჟი, პრეოპერაციული ვენტილაცია ანესთეზიის ოთახამდე, პრეოპერაციული ინოტროპული მხარდაჭერა, ინტრა-აორტული ბალონური კონტრაპულსაცია ან პრეოპერაციული მწვავე თირკმლის უკმარისობა (ანურია ან ოლიგურია < 10 მლ/საათი)',
  
  critical_conditions_header: 'კრიტიკული პრეოპერაციული მდგომარეობები',
  
  // Procedure complexity info box
  complexity_info_title: 'EuroSCORE II პროცედურის სირთულე',
  complexity_low_info: '• დაბალი: ერთი სარქვლის ჩანაცვლება, მხოლოდ CABG',
  complexity_medium_info: '• საშუალო: CABG + სარქველი, ორმაგი სარქვლოვანი პროცედურები',
  complexity_high_info: '• მაღალი: მრავალი სარქველი + CABG, რთული აორტული ქირურგია, საგადარებო პროცედურები',
  
  // Valve procedures
  aortic_surgery_label: 'აორტული ქირურგია',
  aortic_surgery_description: 'აორტული სარქვლის ჩანაცვლება ან რეპარაცია',
  mitral_surgery_label: 'მიტრალური ქირურგია',
  mitral_surgery_description: 'მიტრალური სარქვლის ჩანაცვლება ან რეპარაცია',
  tricuspid_surgery_label: 'ტრიკუსპიდალური ქირურგია',
  tricuspid_surgery_description: 'ტრიკუსპიდალური სარქვლის ჩანაცვლება ან რეპარაცია',
  pulmonary_surgery_label: 'ფილტვის სარქვლის ქირურგია',
  pulmonary_surgery_description: 'ფილტვის სარქვლის ჩანაცვლება ან რეპარაცია',
  
  // Risk assessment info
  risk_assessment_title: 'EuroSCORE II რისკის შეფასება',
  risk_assessment_complexity: '• ყოველი სპეციფიკური პროცედურა ამატებს საერთო ქირურგიულ სირთულეს',
  risk_assessment_multiple: '• მრავალი სარქვლოვანი პროცედურა მნიშვნელოვნად ზრდის ოპერაციულ რისკს',
  risk_assessment_combined: '• განიხილეთ კომბინირებული პროცედურები საბოლოო რისკის გამოთვლისას',
  
  // Navigation buttons
  next_cardiac_status: 'შემდეგი: გულის მდგომარეობა',
  next_operative_factors: 'შემდეგი: ოპერაციული ფაქტორები',
  next_specific_procedures: 'შემდეგი: სპეციფიკური პროცედურები',
  back_button: 'უკან',
  calculate_euroscore_ii: 'EuroSCORE II-ის გამოთვლა',
  
  // Results section
  results_title: 'EuroSCORE II შეფასების შედეგები',
  mortality_risk_30day: '30-დღიანი მოკვდაობის რისკი',
  predicted_mortality: 'პროგნოზირებული 30-დღიანი მოკვდაობა',
  risk_stratification: 'EuroSCORE II რისკის სტრატიფიკაცია',
  
  // Risk categories and interpretations
  risk_low: 'დაბალი რისკი',
  risk_intermediate: 'საშუალო',
  risk_high: 'მაღალი რისკი',
  risk_very_high: 'ძალიან მაღალი',
  
  mortality_low: '< 2% მოკვდაობა',
  mortality_intermediate: '2-5% მოკვდაობა',
  mortality_high: '5-10% მოკვდაობა',
  mortality_very_high: '> 10% მოკვდაობა',
  
  interpretation_low: 'დაბალი ოპერაციული რისკი (EuroSCORE II <2%)',
  interpretation_intermediate: 'საშუალო ოპერაციული რისკი (EuroSCORE II 2-5%)',
  interpretation_high: 'მაღალი ოპერაციული რისკი (EuroSCORE II 5-10%)',
  interpretation_very_high: 'ძალიან მაღალი ოპერაციული რისკი (EuroSCORE II >10%)',
  
  // STS Comparison
  sts_comparison_title: 'STS რისკის მოდელებთან შედარება',
  sts_comparison_low: 'ზოგადად კორელირებს STS დაბალ რისკთან (<2%). ორივე მოდელი მხარს უჭერს სტანდარტულ ქირურგიულ მიდგომას.',
  sts_comparison_intermediate: 'STS საშუალო რისკის მსგავსი (2-5%). გაძლიერებული მონიტორინგი და ოპტიმიზაცია რეკომენდირებულია.',
  sts_comparison_high: 'STS მაღალ რისკთან შედარებადი (5-10%). განიხილეთ გულის გუნდის შეფასება და ალტერნატივები.',
  sts_comparison_very_high: 'STS ძალიან მაღალ რისკთან შესაბამისი (>10%). ძლიერი მიზეზი არაქირურგიული ვარიანტებისთვის.',
  sts_comparison_default: 'რისკის შეფასების შედარება STS მოდელებთან რეკომენდირებულია.',
  
  // Clinical recommendations
  clinical_recommendations: 'კლინიკური მართვის რეკომენდაციები',
  
  // Base recommendations
  recommendation_team_evaluation: 'მულტიდისციპლინარული გულის გუნდის შეფასება',
  recommendation_preop_optimization: 'პრეოპერაციული ოპტიმიზაცია როგორც ნაჩვენებია',
  recommendation_counseling: 'პაციენტისა და ოჯახის კონსულტაცია რისკებზე',
  
  // Low risk recommendations
  recommendation_standard_approach: 'სტანდარტული ქირურგიული მიდგომა მისაღებია',
  recommendation_fast_track: 'განიხილეთ სწრაფი ტრეკის პროტოკოლები',
  recommendation_routine_care: 'რუტინული პოსტოპერაციული მზრუნველობა',
  
  // Intermediate risk recommendations
  recommendation_enhanced_assessment: 'გაძლიერებული პრეოპერაციული შეფასება',
  recommendation_additional_imaging: 'განიხილეთ დამატებითი ვიზუალიზაციის კვლევები',
  recommendation_standard_icu: 'სტანდარტული ICU მონიტორინგი',
  recommendation_risk_modification: 'რისკის ფაქტორების მოდიფიკაციის განხილვა',
  
  // High risk recommendations
  recommendation_alternative_approaches: 'განიხილეთ ალტერნატიული მიდგომები (TAVI, მედიკამენტური თერაპია)',
  recommendation_extensive_optimization: 'ვრცელი პრეოპერაციული ოპტიმიზაცია',
  recommendation_extended_icu: 'გაფართოებული ICU მონიტორინგი დაგეგმილია',
  recommendation_informed_consent: 'დეტალური ინფორმირებული თანხმობის განხილვა',
  recommendation_less_invasive: 'განიხილეთ ნაკლებად ინვაზიური ალტერნატივები',
  
  // Very high risk recommendations
  recommendation_non_surgical: 'მტკიცედ განიხილეთ არაქირურგიული ალტერნატივები',
  recommendation_palliative_care: 'პალიატიური მზრუნველობის კონსულტაცია',
  recommendation_goals_care: 'მზრუნველობის მიზნების განხილვა',
  recommendation_high_risk_protocols: 'თუ ქირურგია იხმარება, მაღალი რისკის პროტოკოლები',
  recommendation_transcatheter: 'განიხილეთ ტრანსკათეტერული მიდგომები',
  recommendation_family_meeting: 'ოჯახური შეხვედრა აუცილებელია',
  
  // Validation status
  validation_status_title: 'EuroSCORE II ვალიდაციის სტატუსი',
  validation_status_text: '✓ ევროპული ვალიდაცია • Nashef და სხვები 2012 • განახლებული ალგორითმი • გაუმჯობესებული კალიბრაცია',
  
  // Action buttons
  new_assessment: 'ახალი შეფასება',
  modify_inputs: 'შესატანი მონაცემების შეცვლა',
  calculate_button: 'EuroSCORE II-ის გამოთვლა',
  new_assessment_button: 'ახალი შეფასება',
  modify_inputs_button: 'შესატანი მონაცემების შეცვლა',
  
  // Results display labels
  mortality_risk_title: '30-დღიანი მოკვდაობის რისკი',
  risk_stratification_title: 'EuroSCORE II რისკის სტრატიფიკაცია',
  clinical_recommendations_title: 'კლინიკური მართვის რეკომენდაციები',
  predicted_mortality_label: 'პროგნოზირებული 30-დღიანი მოკვდაობა',
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
  footer_info: 'დაფუძნებულია EuroSCORE II Nashef და სხვების მიერ • მხოლოდ საგანმანათლებლო მიზნებისთვის',
  
  // Footer
  footer_text: 'დაფუძნებულია EuroSCORE II Nashef და სხვების მიერ • მხოლოდ საგანმანათლებლო მიზნებისთვის',
  european_validation: 'ევროპული ვალიდაცია'
}; 