#!/usr/bin/env python3

euroscore_section = '''
  // EuroSCORE II Risk Calculator - Georgian translation
  euroscore_ii: {
    title: 'EuroSCORE II რისკის კალკულატორი',
    subtitle: 'ევროპული კარდიოქირურგიული რისკის შეფასების სისტემა • ვერსია 2 • 30-დღიანი მოკვდაობის პროგნოზირება',
    description: 'განახლებული ევროპული კარდიოქირურგიული რისკის შეფასების სისტემა 30-დღიანი მოკვდაობის პროგნოზირებისთვის.',
    
    // Cardiac history section
    cardiac_history_title: 'გულის ანამნეზი და მდგომარეობები',
    recent_mi_label: 'ბოლოდროული MI (90 დღის განმავლობაში)',
    recent_mi_description: 'მიოკარდიუმის ინფარქტი 90 დღის განმავლობაში',
    unstable_angina_label: 'არასტაბილური ანგინა',
    unstable_angina_description: 'მოსვენების ანგინა, რომელიც საჭიროებს IV ნიტრატებს',
    pulmonary_hypertension_label: 'ფილტვის ჰიპერტენზია',
    pulmonary_hypertension_description: 'სისტოლური PA წნევა > 60 მმ ვარდ.სვ.',
    extracardiac_arteriopathy_label: 'ექსტრაკარდიალური არტერიოპათია',
    extracardiac_arteriopathy_description: 'კლაუდიკაცია, კაროტიდული ოკლუზია ან ინსულტი',
    neurological_dysfunction_label: 'ნეირლოგიური დისფუნქცია',
    neurological_dysfunction_description: 'დაავადება, რომელიც სერიოზულად აზიანებს ამბულაციას ან ყოველდღიურ ფუნქციონირებას',
    previous_cardiac_surgery_label: 'ადრინდელი გულის ქირურგია',
    previous_cardiac_surgery_description: 'ადრინდელი გულის ქირურგიული პროცედურა',
    active_endocarditis_label: 'აქტიური ენდოკარდიტი',
    active_endocarditis_description: 'პაციენტი ჯერ კიდევ იღებს ანტიბიოტიკურ მკურნალობას ენდოკარდიტისთვის',
    
    // Additional risk factors
    additional_risk_factors_title: 'დამატებითი პაციენტის რისკის ფაქტორები',
    poor_mobility_label: 'ცუდი მობილობა',
    poor_mobility_description: 'დარღვეული მობილობა, რომელიც ზიანს აყენებს ყოველდღიურ აქტივობებს',
    diabetes_on_insulin_label: 'დიაბეტი ინსულინზე',
    diabetes_on_insulin_description: 'შაქრიანი დიაბეტი, რომელიც საჭიროებს ინსულინის თერაპიას',
    chronic_pulmonary_disease_label: 'ქრონიკული ფილტვის დაავადება',
    chronic_pulmonary_disease_description: 'COPD ან სხვა ქრონიკული ფილტვის მდგომარეობები',
    peripheral_vascular_disease_label: 'პერიფერიული ვასკულარული დაავადება',
    peripheral_vascular_disease_description: 'პერიფერიული არტერიული დაავადება ან კლაუდიკაცია',
    
    // Section titles
    section_patient_demographics: 'პაციენტის დემოგრაფია და ძირითადი ფაქტორები',
    section_patient_description: 'პაციენტის ძირითადი მახასიათებლები და ლაბორატორიული მნიშვნელობები',
    section_cardiac_factors: 'გულთან დაკავშირებული ფაქტორები',
    section_cardiac_description: 'გულის ანამნეზი, სიმპტომები და ფუნქციონალური სტატუსი',
    section_operative_factors: 'ოპერაციული ფაქტორები',
    section_operative_description: 'ქირურგიული პროცედურისა და ოპერაციული რისკის ფაქტორები',
    section_valve_procedures: 'სარქვლოვანი პროცედურები',
    section_valve_description: 'სპეციფიკური ქირურგიული პროცედურები და კომპლექსობა',
    
    // Step titles
    step_patient_factors: 'პაციენტის ფაქტორები',
    step_cardiac_status: 'გულის სტატუსი',
    step_operative_factors: 'ოპერაციული ფაქტორები',
    step_procedures: 'პროცედურები',
    
    // Input labels
    age_label: 'ასაკი',
    age_placeholder: '65',
    age_unit: 'წლები',
    gender_label: 'სქესი',
    gender_placeholder: 'აირჩიეთ სქესი...',
    gender_male: 'მამრობითი',
    gender_female: 'მდედრობითი',
    creatinine_label: 'შრატის კრეატინინი',
    creatinine_placeholder: '1.0',
    creatinine_unit: 'მგ/დლ',
    urgency_label: 'სასწრაფოება',
    urgency_placeholder: 'აირჩიეთ სასწრაფოება...',
    urgency_elective: 'არჩევითი',
    urgency_urgent: 'სასწრაფო',
    urgency_emergency: 'სასწრაფო',
    urgency_salvage: 'გადარჩენითი',
    nyha_label: 'NYHA კლასი',
    nyha_placeholder: 'აირჩიეთ NYHA კლასი...',
    nyha_class_1: 'კლასი I',
    nyha_class_2: 'კლასი II',
    nyha_class_3: 'კლასი III',
    nyha_class_4: 'კლასი IV',
    procedure_weight_label: 'პროცედურის წონა',
    procedure_weight_placeholder: 'აირჩიეთ პროცედურის ტიპი...',
    
    // Navigation buttons
    next_cardiac_status: 'შემდეგი: გულის სტატუსი',
    next_operative_factors: 'შემდეგი: ოპერაციული ფაქტორები',
    next_procedures: 'შემდეგი: პროცედურები',
    back_button: 'უკან',
    calculate_button: 'EuroSCORE II-ის გამოთვლა',
    
    // Results
    results_title: 'EuroSCORE II რისკის ანალიზი',
    mortality_risk_title: '30-დღიანი მოკვდაობის რისკი',
    risk_label: 'რისკი',
    predicted_mortality_label: 'პროგნოზირებული 30-დღიანი მოკვდაობა',
    clinical_recommendations_title: 'კლინიკური მართვის რეკომენდაციები',
    
    // Risk categories
    low_risk_label: 'დაბალი რისკი',
    intermediate_risk_label: 'საშუალო რისკი',
    high_risk_label: 'მაღალი რისკი',
    very_high_risk_label: 'ძალიან მაღალი რისკი',
    
    // Risk ranges
    low_risk_range: '< 2%',
    intermediate_risk_range: '2-5%',
    high_risk_range: '5-10%',
    very_high_risk_range: '> 10%',
    
    // Validation
    european_validation: 'ევროპული ვალიდაცია',
    validation_badge: 'ევროპული ვალიდაცია',
    
    // Footer
    footer_text: 'დაფუძნებულია EuroSCORE II-ზე Nashef et al. • მხოლოდ საგანმანათლებლო მიზნებისთვის',
    
    // Action buttons
    new_assessment: 'ახალი შეფასება',
    modify_inputs: 'მონაცემების ცვლილება'
  },
'''

with open('src/i18n/translations/ka/calculators/cardiology.ts', 'r', encoding='utf-8') as f:
    content = f.read()

# Insert the EuroSCORE section before gwtg_hf
target_line = "  // GWTG-HF Risk Calculator"
if target_line in content and "euroscore_ii:" not in content:
    content = content.replace(target_line, euroscore_section + "\n" + target_line)
    
    with open('src/i18n/translations/ka/calculators/cardiology.ts', 'w', encoding='utf-8') as f:
        f.write(content)
    print("✅ EuroSCORE II Georgian translation added successfully!")
else:
    print("❌ Target line not found or EuroSCORE section already exists") 