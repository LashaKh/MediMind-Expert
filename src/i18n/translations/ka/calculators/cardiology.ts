export default {
  // Calculator titles for navigation
  graceTitle: 'GRACE 2.0 კალკულატორი',
  hcmRiskScdTitle: 'HCM Risk-SCD კალკულატორი',
  maggicTitle: 'MAGGIC კალკულატორი',
  gwtgHfTitle: 'GWTG-HF კალკულატორი',
  heartFailureStagingTitle: 'გულის უკმარისობის ეტაპები',
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

  // ASCVD Risk Calculator
  ascvd: {
    title: 'ᲐᲡᲖᲓ რისკის კალკულატორი',
    subtitle: '10-წლიანი ათეროსკლეროზული გულ-სისხლძარღვთა დაავადების რისკის შეფასება',
    description: 'ACC/AHA გაერთიანებული კოჰორტის განტოლებები 10-წლიანი რისკის გამოსათვლელად.',
    calculate_button: "ᲐᲡᲖᲓ რისკის გამოთვლა",
    risk_category: "რისკის კატეგორია",
    recommendations: "კლინიკური რეკომენდაციები",
    low_risk: "დაბალი რისკი (<5%)",
    high_risk: "მაღალი რისკი (≥20%)",
    intermediate_risk: "საშუალო რისკი (5-20%)",
    
    age_label: 'ასაკი (წლები)',
    age_placeholder: '20-79',
    sex_label: 'სქესი',
    sex_placeholder: 'აირჩიეთ სქესი...',
    sex_male: 'მამრობითი',
    sex_female: 'მდედრობითი',
    race_label: 'რასა/ეთნიკური კუთვნილება',
    race_placeholder: 'აირჩიეთ რასა...',
    race_white: 'თეთრი',
    race_african_american: 'აფროამერიკელი',
    race_other: 'სხვა',
    total_cholesterol_label: 'საერთო ქოლესტერინი (მგ/დლ)',
    total_cholesterol_placeholder: '130-320',
    hdl_cholesterol_label: 'HDL ქოლესტერინი (მგ/დლ)',
    hdl_cholesterol_placeholder: '20-100',
    systolic_bp_label: 'სისტოლური არტერიული წნევა (მმ ვარდ.სვ.)',
    systolic_bp_placeholder: '90-200',
    on_htn_meds_label: 'ამჟამად იღებს არტერიული წნევის პრეპარატებს',
    diabetes_label: 'შაქრიანი დიაბეტი',
    smoker_label: 'ამჟამინდელი მწეველი',
    validation_age: 'ასაკი უნდა იყოს 20-79 წელი ᲐᲡᲖᲓ რისკის გამოსათვლელად',
    validation_sex: 'სქესი აუცილებელია',
    validation_race: 'რასა აუცილებელია ზუსტი რისკის გამოსათვლელად',
    validation_total_cholesterol: 'საერთო ქოლესტერინი უნდა იყოს 130-320 მგ/დლ-ს შორის',
    validation_hdl_cholesterol: 'HDL ქოლესტერინი უნდა იყოს 20-100 მგ/დლ-ს შორის',
    validation_systolic_bp: 'სისტოლური არტერიული წნევა უნდა იყოს 90-200 მმ ვარდ.სვ.-ს შორის',
    ten_year_risk: '10-წლიანი ᲐᲡᲖᲓ რისკი',
    lifetime_risk: 'სიცოცხლის განმავლობაში რისკი',
    statin_benefit: 'სტატინური თერაპიის სარგებელი',
    bp_control_benefit: 'არტერიული წნევის კონტროლის სარგებელი',
    smoking_cessation_benefit: 'მოწევის შეწყვეტის სარგებელი',
    aspirin_benefit: 'ასპირინის თერაპიის სარგებელი',
    demographics_section: "დემოგრაფია",
    lab_values_section: "ლაბორატორიული მონაცემები",
    risk_factors_section: "რისკის ფაქტორები",
    evidence_title: "მტკიცებულებები",
    evidence_description: "ეს კალკულატორი დაფუძნებულია 2013 წლის ACC/AHA სახელმძღვანელოზე კარდიოვასკულური რისკის შეფასების შესახებ და გაერთიანებულ კოჰორტულ განტოლებებზე.",
    evidence_link_text: "ნახეთ ორიგინალი კვლევითი პუბლიკაცია",
    about_creator_title: "შემქმნელის შესახებ",
    creator_name: "დოქტორი დევიდ კ. გოფ უმცროსი, MD, PhD",
    creator_bio: "დევიდ კ. გოფ უმცროსი, MD, PhD, არის ეპიდემიოლოგიის პროფესორი კოლორადოს უნივერსიტეტში და კოლორადოს საზოგადოებრივი ჯანმრთელობის სკოლის დეკანი. ის არის საჯარო პოლიტიკის ჯილდოს ყოფილი მიმღები გულის დაავადებებისა და ინსულტის პრევენციის ეროვნული ფორუმიდან და ამჟამად არის ASPPH აკრედიტაციისა და სერტიფიცირების კომიტეტის დროებითი თავმჯდომარე. მისი კვლევითი ინტერესები მოიცავს გულის დაავადებებისა და ინსულტის პრევენციას და გაგებას.",
    // დეტალური ანალიზის განყოფილება
    lifetime_risk_title: "სიცოცხლის განმავლობაში რისკი",
    lifetime_risk_description: "სავარაუდო კარდიოვასკულური რისკი სიცოცხლის განმავლობაში 20-59 წლის პაციენტებისთვის",
    risk_classification_title: "რისკის კლასიფიკაცია",
    risk_classification_low: "რისკი < 5% - ფოკუსი ცხოვრების წესის მოდიფიკაციაზე",
    risk_classification_borderline: "რისკი 5-7.4% - განიხილეთ რისკის გამაძლიერებელი ფაქტორები",
    risk_classification_intermediate: "რისკი 7.5-19.9% - სტატინური თერაპია გონივრულია",
    risk_classification_high: "რისკი ≥ 20% - რეკომენდებულია მაღალი ინტენსივობის სტატინური თერაპია",
    therapy_reduction_title: "სავარაუდო რისკის შემცირება თერაპიით",
    statin_therapy: "სტატინური თერაპია",
    bp_control: "არტერიული წნევის კონტროლი",
    smoking_cessation: "მოწევის შეწყვეტა",
    aspirin_therapy: "ასპირინი (საჭიროების შემთხვევაში)",
    // ინტერპრეტაციის შეტყობინებები
    interpretation_low: "დაბალი კარდიოვასკულური რისკი. ფოკუსირება ცხოვრების წესის მოდიფიკაციაზე და რუტინულ პრევენციულ მოვლაზე.",
    interpretation_borderline: "ზღვრული რისკი. განიხილეთ რისკის გამაძლიერებელი ფაქტორები და ერთობლივი გადაწყვეტილების მიღება პრევენციული თერაპიისთვის.",
    interpretation_intermediate: "საშუალო რისკი. საშუალო ინტენსივობის სტატინური თერაპია გონივრულია ცხოვრების წესის მოდიფიკაციასთან ერთად.",
    interpretation_high: "მაღალი კარდიოვასკულური რისკი. რეკომენდებულია მაღალი ინტენსივობის სტატინური თერაპია, თუ არ არის უკუჩვენება.",
    // ვალიდაციის შეტყობინება
    calibration_applied: "კალიბრაცია გამოყენებულია",
    // ქვედა კოლონტიტულის ტექსტი
    footer_guidelines: "დაფუძნებულია ACC/AHA 2019 პირველადი პრევენციის სახელმძღვანელოზე და გაერთიანებულ კოჰორტულ განტოლებებზე",
    footer_validated: "100% ვალიდირებული"
  },

  // GRACE 2.0 Risk Calculator
  grace: {
    title: "GRACE 2.0 რისკის კალკულატორი",
    subtitle: "მწვავე კორონარული სინდრომის რისკის შეფასება",
    description: "მწვავე კორონარული მოვლენების გლობალური რეგისტრი - რისკის სტრატიფიკაცია NSTEMI/UA და STEMI პაციენტებისთვის.",
    calculate_button: "GRACE ქულის გამოთვლა",
    risk_category: "რისკის კატეგორია",
    recommendations: "კლინიკური რეკომენდაციები",
    low_risk: "დაბალი რისკი (<109)",
    high_risk: "მაღალი რისკი (>140)",
    intermediate_risk: "საშუალო რისკი (109-140)",
    
    // Patient demographics
    age_label: "ასაკი (წლები)",
    age_placeholder: "შეიყვანეთ პაციენტის ასაკი",
    heart_rate_label: "გულისცემის სიხშირე (წუთში)",
    heart_rate_placeholder: "შეიყვანეთ გულისცემის სიხშირე",
    systolic_bp_label: "სისტოლური არტერიული წნევა (მმ ვარდ.სვ.)",
    systolic_bp_placeholder: "შეიყვანეთ სისტოლური წნევა",
    creatinine_label: "შრატის კრეატინინი (მგ/დლ)",
    creatinine_placeholder: "შეიყვანეთ კრეატინინის დონე",
    
    // Clinical characteristics
    killip_class_label: "კილიპის კლასიფიკაცია",
    killip_class_1: "კლასი I (გულის უკმარისობა არ არის)",
    killip_class_2: "კლასი II (მსუბუქი გულის უკმარისობა, შრიალები)",
    killip_class_3: "კლასი III (ფილტვის შეშუპება)",
    killip_class_4: "კლასი IV (კარდიოგენული შოკი)",
    
    cardiac_arrest_label: "გულის გაჩერება მიღების დროს",
    st_deviation_label: "ST სეგმენტის გადახრა",
    elevated_markers_label: "გულის მარკერების მომატება",
    
    // Section headers
    demographics_section: "პაციენტის დემოგრაფია",
    clinical_section: "კლინიკური სურათი",
    labs_section: "ლაბორატორიული მონაცემები",
    
    // Results
    in_hospital_mortality: "საავადმყოფოში სიკვდილობა",
    one_year_mortality: "1-წლიანი სიკვდილობა",
    invasive_strategy: "ინვაზიური სტრატეგია",
    recommendation: "მკურნალობის რეკომენდაცია",
    
    // Validation messages
    age_error: "ასაკი უნდა იყოს 18-120 წლის შორის",
    heart_rate_error: "გულისცემის სიხშირე უნდა იყოს 30-300 წუთში",
    systolic_bp_error: "სისტოლური წნევა უნდა იყოს 60-300 მმ ვარდ.სვ.-ს შორის",
    creatinine_error: "კრეატინინი უნდა იყოს 0.3-15.0 მგ/დლ-ს შორის",
    
    // Strategy and recommendation texts
    strategy_conservative: "კონსერვატიული მართვა შესაბამისია",
    strategy_early_invasive: "ადრეული ინვაზიური სტრატეგია 24-72 საათის განმავლობაში",
    strategy_urgent_invasive: "გადაუდებელი ინვაზიური სტრატეგია 2-24 საათის განმავლობაში",
    recommendation_low: "მედიკამენტოზური თერაპია, განხილეთ ინვაზიური თუ რეფრაქტერული სიმპტომები",
    recommendation_intermediate: "განხილეთ ადრეული კათეტერიზაცია და რევასკულარიზაცია",
    recommendation_high: "დაუყოვნებელი კათეტერიზაცია და რევასკულარიზაცია, თუ ნაჩვენებია",
    
    // Results section labels
    results_title: "GRACE 2.0 შედეგები",
    results_description: "გაუმჯობესებული კარდიოვასკულური რისკის შეფასება დასრულებულია",
    grace_score: "GRACE ქულა",
    short_term_risk: "მოკლევადიანი რისკის შეფასება",
    long_term_prognosis: "გრძელვადიანი პროგნოზი",
    risk_category_label: "რისკის კატეგორია",
    clinical_risk_stratification: "კლინიკური რისკის სტრატიფიკაცია",
    clinical_recommendations_title: "კლინიკური რეკომენდაციები",
    intervention_window: "ჩარევის ფანჯარა",
    
    // NEW - Missing translation keys for hardcoded text
    baseline_patient_info: "შეიყვანეთ პაციენტის ბაზისური ინფორმაცია",
    high_risk_features: "მაღალი რისკის ნიშნები",
    at_presentation: "მიღების დროს",
    on_initial_ecg: "საწყის ეკგ-ზე",
    troponin_ck_mb: "ტროპონინი/CK-MB",
    back_to_demographics: "დემოგრაფიაზე დაბრუნება",
    calculate_risk_score: "რისკის ქულის გამოთვლა",
    review_data_assessment: "მონაცემების გადახედვა და GRACE 2.0 შეფასების გენერირება",
    patient_summary: "პაციენტის რეზიუმე",
    demographics: "დემოგრაფია",
    vital_signs: "სასიცოცხლო ნიშნები",
    hr_label: "GS:",
    sbp_label: "SW:",
    labs_clinical: "ლაბ. და კლინიკური",
    creatinine_short: "კრეატინინი:",
    killip_short: "კილიპი:",
    high_risk_features_present: "მაღალი რისკის ნიშნები მოცემულია",
    cardiac_arrest: "გულის გაჩერება",
    st_deviation: "ST გადახრა",
    elevated_markers: "მომატებული მარკერები",
    no_additional_risk_factors: "დამატებითი რისკ ფაქტორები არ არის",
    back_to_clinical: "კლინიკურზე დაბრუნება",
    reset: "გადატვირთვა",
    calculating: "გამოითვლება...",
    continue_to_clinical_data: "კლინიკურ მონაცემებზე გადასვლა",
    
    // Expert insights section
    expert_insights_title: "შემქმნელთა ექსპერტ მოსაზრებები",
    expert_insights_subtitle: "დოქტორი ჯოელ გორისა და დოქტორ კით ა. ა. ფოქსისგან",
    dr_joel_gore: "დოქტორი ჯოელ გორი",
    dr_joel_gore_title: "დირექტორი, ანტიკოაგულაციური კლინიკა, UMass Memorial",
    dr_keith_fox: "დოქტორი კით ა. ა. ფოქსი",
    dr_keith_fox_title: "კარდიოლოგიის პროფესორი, ედინბურგის უნივერსიტეტი",
    
    // Facts and figures section
    facts_figures_title: "ფაქტები და ციფრები",
    facts_figures_subtitle: "GRACE ქულის ინტერპრეტაცია",
    grace_score_range: "GRACE ქულის დიაპაზონი",
    mortality_risk: "სიკვდილიანობის რისკი",
    risk_category_column: "რისკის კატეგორია",
    
    // Evidence and validation section
    evidence_validation_title: "მტკიცებულება და ვალიდაცია",
    evidence_validation_subtitle: "მეცნიერული საფუძველი",
    database_scale: "მონაცემთა ბაზის მასშტაბი",
    
    // Clinical pearls section
    clinical_pearls_title: "კლინიკური ძლიერი მხარეები და ხარვეზები",
    
    // Score interpretation table rows
    score_0_87: "0-87",
    score_88_128: "88-128",
    score_129_149: "129-149",
    score_150_173: "150-173",
    score_174_182: "174-182",
    score_183_190: "183-190",
    score_191_199: "191-199",
    score_200_207: "200-207",
    score_208_218: "208-218",
    score_219_284: "219-284",
    score_285_plus: "285+",
    
    mortality_0_2: "0-2%",
    mortality_3_10: "3-10%",
    mortality_10_20: "10-20%",
    mortality_20_30: "20-30%",
    mortality_40: "40%",
    mortality_50: "50%",
    mortality_60: "60%",
    mortality_70: "70%",
    mortality_80: "80%",
    mortality_90: "90%",
    mortality_99: "99%",
    
    risk_low: "დაბალი",
    risk_moderate: "საშუალო",
    risk_high: "მაღალი",
    risk_very_high: "ძალიან მაღალი",
    
    // PubMed links
    joel_gore_publications: "დოქტორ ჯოელ გორის პუბლიკაციები",
    keith_fox_publications: "დოქტორ კით ა. ა. ფოქსის პუბლიკაციები",
    
    // Expert quotes and detailed content
    gore_grace_quote: "GRACE 2.0 არის GRACE-ის გაუმჯობესებული და დახვეწილი შედეგების სია; ჰოსპიტალში სიკვდილიანობის შეფასებისთვის ქულათა დიაპაზონების ნაცვლად, ჩვენ რეალურად შეგვიძლია გამოვთვალოთ სიკვდილიანობა ყველა ქულისთვის. ხალხმა უნდა გამოიყენოს GRACE 2.0.",
    gore_clinical_usage: "ჩვენ ვიყენებთ ჰოსპიტალში სიკვდილიანობის რიცხვს GRACE ქულასთან ერთად. ეს გვეხმარება განვსაზღვროთ STEMI პაციენტების განაწილების დინამიკა; ვისაც ქულა 130 ან მეტი აქვს, კათეტერიზაციის შემდეგ რეანიმაციაში მიდიან, ხოლო დაბალი ქულის მქონენი შეიძლება ჩვენს step down განყოფილებაში განთავსდნენ.",
    gore_nstemi_quote: "ჩვენ ასევე ზოგჯერ ვიყენებთ GRACE ქულას ჩვენს მაღალი რისკის NSTEMI პაციენტებზე ადრეული ინვაზიური მართვის განსახილველად, დაგვიანებული ჩარევის ნაცვლად.",
    fox_development_purpose: "ჩვენ შევქმენით GRACE ACS რისკის ქულა, რადგან ვნახეთ საჭიროება უკეთესი რისკის სტრატიფიკაციისთვის ACS-ის მკურნალობის მიმართულებისთვის და 'მკურნალობა-რისკის' პარადოქსის მოგვარებისთვის.",
    fox_clinical_pearl: "მნიშვნელოვანია განიხილოთ არა მხოლოდ მთლიანი რისკი, არამედ რისკი, რომელიც შეიძლება შემცირდეს (ამაში გვეხმარება MI რისკი).",
    fox_current_research: "ჩვენ ამჟამად ვმუშაობთ მოდელების შემუშავებაზე მოდიფიცირებადი რისკისა და გრძელვადიანი რისკის იდენტიფიცირებისთვის ACS პაციენტებში.",
    
    // Section labels for expert content
    on_grace_vs_grace_2: "GRACE vs GRACE 2.0-ზე:",
    clinical_usage: "კლინიკური გამოყენება:",
    on_nstemi_patients: "NSTEMI პაციენტებზე:",
    development_purpose: "განვითარების მიზანი:",
    clinical_pearl: "კლინიკური ძლიერი მხარე:",
    current_research: "მიმდინარე კვლევა:",
    
    // Facts and figures table content
    grace_score_range_header: "GRACE ქულის დიაპაზონი",
    mortality_risk_header: "სიკვდილიანობის რისკი",
    risk_category_header: "რისკის კატეგორია",
    
    // Evidence and validation content
    database_scale_title: "მონაცემთა ბაზის მასშტაბი",
    database_scale_description: "GRACE (Global Registry of Acute Coronary Events) არის ACS-ის მასიური, საერთაშორისო მონაცემთა ბაზა 94 ჰოსპიტალში 14 ქვეყანაში, რაც მას შესანიშნავ გარე ვალიდურობას აძლევს.",
    patient_population_title: "პაციენტთა პოპულაცია",
    patient_population_description: "11,389 ACS პაციენტი შესწავლილი 98.1% ჰოსპიტალში სიკვდილიანობის სტატუსით. ჰოსპიტალში სიკვდილის 22% მოხდა მიღებიდან 24 საათის განმავლობაში, რაც ძალიან მძიმე პაციენტების კოჰორტაზე მიუთითებს.",
    grace_2_improvements_title: "GRACE 2.0 გაუმჯობესებები",
    grace_2_improvements_description: "GRACE 2.0-მ შეაფასა ცვლადები არაწრფივი სიკვდილიანობის ასოციაციებისთვის, უზრუნველყოფს უფრო ზუსტ შეფასებებს. მოიცავს სიკვდილიანობის შეფასებებს ACS მოვლენიდან 3 წლამდე.",
    validation_status_title: "ვალიდაციის სტატუსი",
    validation_status_description: "ვალიდირებულია >20,000 პაციენტში მრავალ მონაცემთა ბაზაში და ძალიან კარგადაა შესწავლილი. NICE გაიდლაინები რეკომენდაციას უწევს GRACE ქულას ACS რისკის სტრატიფიკაციისთვის.",
    
    // Clinical pearls content
    essential_clinical_insights: "მნიშვნელოვანი კლინიკური ინფორმაციები",
    purpose_limitations_title: "მიზანი და შეზღუდვები",
    purpose_limitations_description: "GRACE ქულა არის შესწავლილი ქულათა სისტემა დიაგნოსტირებული ACS-ის მქონე პაციენტების რისკის სტრატიფიკაციისთვის მათი ჰოსპიტალში და 6 თვიდან 3 წლამდე სიკვდილიანობის შეფასებისთვის. TIMI ქულის მსგავსად, ის არ იყო შექმნილი იმის შესაფასებლად, თუ რომელი პაციენტების ანგინალური სიმპტომებია გამოწვეული ACS-ით.",
    score_version_title: "ქულის ვერსია",
    score_version_description: "GRACE ქულა ახლახან გაუმჯობესდა (GRACE 2.0); ეს კალკულატორი იყენებს GRACE 2.0 ქულათა სისტემას, რომელიც უფრო ზუსტი აღმოჩნდა ვიდრე პირვანდელი ქულათა სისტემა.",
    clinical_validation_title: "კლინიკური ვალიდაცია",
    clinical_validation_description: "ეს ქულა ვალიდირებულია >20,000 პაციენტში მრავალ მონაცემთა ბაზაში და ძალიან კარგადაა შესწავლილი. NICE გაიდლაინები რეკომენდაციას უწევს GRACE ქულას ACS-ის მქონე პაციენტების რისკის სტრატიფიკაციისთვის.",
    mini_grace_title: "Mini-GRACE ალტერნატივა",
    mini_grace_description: "ალტერნატიული ვერსია, mini-GRACE, საშუალებას აძლევს Killip კლასის შეცვლას დიურეტიკის გამოყენებით და/ან შრატის კრეატინინის შეცვლას თირკმლის დისფუნქციის ანამნეზით. თუმცა, ეს პლატფორმა იყენებს სრულ ვერსიას, რომელიც მოითხოვს როგორც Killip კლასს, ასევე შრატის კრეატინინს."
  },

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



    // GWTG-HF Risk Calculator
  gwtgHf: {
    title: 'GWTG-HF რისკის კალკულატორი',
    subtitle: 'გაიდლაინები მკურნალობისთვის - გულის უკმარისობის რისკის შეფასება',
    description: 'მტკიცებულებებით დამოწმებული რისკის პროგნოზირების ინსტრუმენტი',
    
    // Alert section
    alert_title: 'GWTG-HF რისკის შეფასება',
    alert_description: 'მტკიცებულებებით დამოწმებული რისკის კალკულატორი ჰოსპიტალში',
    
    // Section headers
    section_demographics: 'დემოგრაფია და თანმხლები დაავადებები',
    section_demographics_description: 'პაციენტის დემოგრაფიული ინფორმაცია',
    vital_signs_section: 'სასიცოცხლო ნიშნები',
    vital_signs_description: 'მიმდინარე ჰემოდინამიკური სტატუსი',
    laboratory_section: 'ლაბორატორიული მონაცემები',
    laboratory_description: 'მთავარი ლაბორატორიული მარკერები',
    
    // Demographics fields
    field_age: 'ასაკი',
    field_age_placeholder: 'შეიყვანეთ ასაკი',
    field_race: 'რასა/ეთნიკური კუთვნილება',
    field_race_select: 'აირჩიეთ რასა',
    field_race_black: 'შავკანიანი ან აფროამერიკელი',
    field_race_other: 'სხვა',
    field_copd: 'ქრონიკული ფილტვების დაავადება (ქფდ)',
    field_copd_description: 'ქრონიკული ობსტრუქციული ფილტვების დაავადების ისტორია',
    
    // Vital signs fields
    systolic_bp_label: 'სისტოლური არტერიული წნევა',
    systolic_bp_placeholder: 'შეიყვანეთ სისტოლური წნევა',
    heart_rate_label: 'გულისცემის სიხშირე',
    heart_rate_placeholder: 'შეიყვანეთ გულისცემის სიხშირე',
    
    // Laboratory fields
    bun_label: 'შარდოვანა ნაწილაკები (BUN)',
    bun_placeholder: 'შეიყვანეთ BUN მნიშვნელობა',
    sodium_label: 'შრატის ნატრიუმი',
    sodium_placeholder: 'შეიყვანეთ ნატრიუმის დონე',
    
    // Button labels
    button_next_vital_signs: 'შემდეგი: ვიტალური ნიშნები',
    next_laboratory: 'შემდეგი: ლაბორატორია',
    back_button: 'უკან',
    calculate_button: 'რისკის გამოთვლა',
    
    // Results section
    results_title: 'GWTG-HF რისკის შეფასების შედეგები',
    gwtg_points: 'GWTG ქულები',
    risk_score_label: 'რისკის ქულა',
    mortality_risk_label: 'სიკვდილიანობის რისკი',
    in_hospital_mortality: 'ჰოსპიტალში მოკვდავობა',
    risk_category_label: 'რისკის კატეგორია',
    risk_stratification: 'რისკის სტრატიფიკაცია',
    
    // Risk factor breakdown
    risk_factor_contribution: 'რისკ ფაქტორების წვლილი',
    age_factor: 'ასაკი',
    systolic_bp_factor: 'სწ',
    bun_factor: 'შარდოვანა',
    sodium_factor: 'ნატრიუმი',
    race_factor: 'რასა',
    copd_factor: 'ქფდ',
    heart_rate_factor: 'გს',
    
    // Clinical management
    clinical_management: 'კლინიკური მართვის რეკომენდაციები',
    
    // Risk interpretations
    interpretation_template: 'GWTG-HF რისკის ქულა: {{score}} ქულა. {{interpretation}} სავარაუდო ჰოსპიტალური სიკვდილობა: {{mortality}}%.',
    interpretation_low: 'დაბალი რისკი ჰოსპიტალური სიკვდილობისთვის',
    interpretation_intermediate: 'საშუალო რისკი ჰოსპიტალური სიკვდილობისთვის',
    interpretation_high: 'მაღალი რისკი ჰოსპიტალური სიკვდილობისთვის',
    interpretation_very_high: 'ძალიან მაღალი რისკი ჰოსპიტალური სიკვდილობისთვის',
    
    // Clinical recommendations - Base
    recommendation_guideline_therapy: 'გაიდლაინებით ნაკარნახევი სამედიცინო თერაპიის ოპტიმიზაცია',
    recommendation_fluid_monitoring: 'სითხის ბალანსისა და ყოველდღიური წონის მონიტორინგი',
    recommendation_vital_assessment: 'სასიცოცხლო ნიშნებისა და ჟანგბადის სატურაციის რეგულარული შეფასება',
    recommendation_precipitating_factors: 'მაპროვოცირებელი ფაქტორებისა და ტრიგერების შეფასება',
    
    // Clinical recommendations - Low risk
    recommendation_standard_protocols: 'გულის უკმარისობის მართვის სტანდარტული პროტოკოლები',
    recommendation_early_discharge: 'განიხილეთ ადრეული გაწერა გულის უკმარისობის განათლებით',
    recommendation_outpatient_followup: 'ამბულატორიული კარდიოლოგიური მეთვალყურეობა 7-14 დღეში',
    recommendation_medication_reconciliation: 'მედიკამენტების შეთანხმება და ოპტიმიზაცია',
    
    // Clinical recommendations - Intermediate risk
    recommendation_enhanced_monitoring: 'გაძლიერებული სტაციონარული მონიტორინგი ხშირი შეფასებებით',
    recommendation_telemetry_consideration: 'განიხილეთ ტელემეტრიული მონიტორინგი არითმიებისთვის',
    recommendation_nurse_navigator: 'გულის უკმარისობის ექთნის ჩართულობა მოვლის კოორდინაციისთვის',
    recommendation_close_followup: 'გაწერის დაგეგმვა მჭიდრო მეთვალყურეობით 3-7 დღეში',
    recommendation_biomarker_monitoring: 'განიხილეთ BNP/NT-proBNP დინამიკის მონიტორინგი',
    
    // Clinical recommendations - High risk
    recommendation_intensive_monitoring: 'ინტენსიური მონიტორინგი უწყვეტი ტელემეტრიით',
    recommendation_early_consultation: 'ადრეული კარდიოლოგიური კონსულტაცია და თანამართვა',
    recommendation_icu_consideration: 'განიხილეთ ICU მონიტორინგი კლინიკური ჩვენებისას',
    recommendation_palliative_consult: 'პალიატიური მოვლის კონსულტაცია სიმპტომების მართვისთვის',
    recommendation_advance_directive: 'წინასწარ განკარგულებების განხილვა პაციენტთან/ოჯახთან',
    recommendation_inotropic_support: 'განიხილეთ ინოტროპული მხარდაჭერა საჭიროების შემთხვევაში',
    
    // Clinical recommendations - Very high risk
    recommendation_icu_level_care: 'რეკომენდებულია ICU დონის მონიტორინგი და მოვლა',
    recommendation_immediate_hf_consult: 'დაუყოვნებელი კონსულტაცია მოწინავე გულის უკმარისობაზე',
    recommendation_mechanical_support: 'განიხილეთ მექანიკური ცირკულაციური მხარდაჭერის შეფასება',
    recommendation_goals_of_care: 'პალიატიური მოვლის კონსულტაცია მოვლის მიზნებისთვის',
    recommendation_family_meetings: 'ოჯახური შეხვედრები სიცოცხლის ბოლოს დაგეგმვისთვის',
    recommendation_hospice_consideration: 'განიხილეთ ჰოსპისის კონსულტაცია საჭიროების შემთხვევაში',
    recommendation_multidisciplinary_team: 'მულტიდისციპლინური გუნდის ჩართულობა',
    
    // Algorithm validation
    algorithm_title: 'გაძლიერებული GWTG-HF ალგორითმი',
    algorithm_description: '✓ AHA Get With The Guidelines ვალიდირებული • გაძლიერებული რისკის სტრატიფიკაცია კომპლექსური კლინიკური რეკომენდაციებით',
    
    // Risk reference ranges
    risk_reference_title: 'GWTG-HF რისკის ქულის სახელმძღვანელო',
    low_risk_range: 'დაბალი რისკი (≤25 ქულა)',
    low_mortality: '<2% სიკვდილიანობის რისკი',
    intermediate_risk_range: 'საშუალო რისკი (26-35 ქულა)',
    intermediate_mortality: '2-4% სიკვდილიანობის რისკი',
    high_risk_range: 'მაღალი რისკი (36-45 ქულა)',
    high_mortality: '4-8% სიკვდილიანობის რისკი',
    very_high_risk_range: 'ძალიან მაღალი რისკი (>45 ქულა)',
    very_high_mortality: '>8% სიკვდილიანობის რისკი',
    
    // From the Creator section
    from_creator_title: 'შემქმნელისგან',
    creator_name: 'დოქტორი გრეგ კ. ფონაროუ, MD',
    creator_title_role: 'მედიცინის პროფესორი და აჰმანსონ-UCLA კარდიომიოპათიის ცენტრის დირექტორი',
    why_developed: 'რატომ შეიქმნა GWTG-HF',
    why_developed_text: 'რისკის მოდელები ეხმარება პაციენტების ტრიაჟში და მკურნალობის გადაწყვეტილებებში. GWTG-HF ქულა შეიქმნა თითქმის 200 აშშ საავადმყოფოს მონაცემების გამოყენებით, რათა უზრუნველყოს ობიექტური პროგნოზული ინფორმაცია, რომელიც ხელს უწყობს გულის უკმარისობის პაციენტების შესაბამის მონიტორინგსა და მკურნალობას.',
    clinical_application: 'კლინიკური გამოყენება',
    clinical_application_text: 'GWTG-HF რისკის ქულა განსაზღვრავს პაციენტის რისკს მოვლის მომენტში, რაც ხელს უწყობს პაციენტების ტრიაჟს და წაახალისებს მტკიცებულებებზე დაფუძნებულ თერაპიას ყველაზე მაღალი რისკის პაციენტებში. ეს ეხმარება გაზარდოს რეკომენდებული სამედიცინო თერაპიის გამოყენება მაღალი რისკის პაციენტებში, ამავდროულად ამცირებს რესურსების გამოყენებას დაბალი რისკის პაციენტებში.',
    view_publications: 'იხილეთ დოქტორ ფონაროუს პუბლიკაციები',
    pubmed_link_text: 'PubMed',
    
    // Evidence section
    evidence_title: 'მტკიცებულებები და ვალიდაცია',
    formula_title: 'ფორმულა',
    formula_description: 'ლაბორატორიული და დემოგრაფიული მნიშვნელობების დამატება მინიჭებული ქულების მნიშვნელობებით.',
    score_interpretation_title: 'ქულის ინტერპრეტაცია',
    score_interpretation_ranges: [
      { range: '0-33', mortality: '<1%' },
      { range: '34-50', mortality: '1-5%' },
      { range: '51-57', mortality: '5-10%' },
      { range: '58-61', mortality: '10-15%' },
      { range: '62-65', mortality: '15-20%' },
      { range: '66-70', mortality: '20-30%' },
      { range: '71-74', mortality: '30-40%' },
      { range: '75-78', mortality: '40-50%' },
      { range: '≥79', mortality: '>50%' }
    ],
    validation_cohort: 'ვალიდირებულია 39,783 პაციენტზე 198 საავადმყოფოდან GWTG-HF რეესტრში (2005-2007)',
    key_predictors: 'ძირითადი პრედიქტორები: ასაკი, სისტოლური არტერიული წნევა, BUN მიღებისას, დამატებით წვლილით გულისცემის სიხშირე, შრატის ნატრიუმი, ქფდ-ს არსებობა და რასა',
    ehealthrecords_validation: 'დამატებით ვალიდირებულია 13,163 პაციენტზე ელექტრონული ჯანდაცვის ჩანაწერების მონაცემების გამოყენებით',
    funding_note: 'GWTG-HF ნაწილობრივ მხარდაჭერილი იყო GlaxoSmithKline-ის მიერ',
    original_reference: 'ორიგინალური წყარო',
    validation_reference: 'ვალიდაციის კვლევა',
    
    // Enhanced alert section
    enhanced_alert_title: 'გაძლიერებული GWTG-HF რისკის შეფასება',
    enhanced_alert_description: 'მტკიცებულებებზე დაფუძნებული ჰოსპიტალური სიკვდილობის რისკის პროგნოზირება გულის უკმარისობის პაციენტებისთვის. ვალიდირებს რისკის სტრატიფიკაციას და ხელმძღვანელობს ინტენსიური მოვლის გადაწყვეტილებებს ოპტიმალური შედეგებისთვის.',
    enhanced_alert_badge: 'AHA Get With The Guidelines ვალიდირებული - გაძლიერებული რისკის ანალიზი',
    
    // Progress step labels
    progress_demographics: 'დემოგრაფია',
    progress_vital_signs: 'ვიტალური ნიშნები',
    progress_laboratory: 'ლაბორატორია',
    
    // Action buttons
    new_assessment: 'ახალი შეფასება',
    modify_inputs: 'მონაცემების შეცვლა',
    
    // Footer validation text
    footer_validation_text: '✓ AHA Get With The Guidelines ვალიდირებული • გაძლიერებული რისკის სტრატიფიკაცია კომპლექსური კლინიკური რეკომენდაციებით',
    footer_based_on: 'დაფუძნებულია AHA Get With The Guidelines-Heart Failure (GWTG-HF) რეესტრზე • გაძლიერებული რისკის შეფასება',
    footer_guidelines_validated: 'ვალიდირებული გაიდლაინებით'
  },

  // MAGGIC Risk Calculator - Basic Translation Implementation
  maggic: {
    title: 'MAGGIC რისკის კალკულატორი',
    subtitle: '1-წლიანი და 3-წლიანი სიკვდილობის პროგნოზი',
    description: 'გულის უკმარისობის რისკის შეფასების ვალიდური მოდელი',
    calculate_button: 'MAGGIC რისკის გამოთვლა',

    // Alert section
    alert_title: 'MAGGIC რისკის შეფასების ინსტრუმენტი',
    alert_description: 'მეტა-ანალიზი გლობალური ჯგუფისა ქრონიკული გულის უკმარისობისთვის (MAGGIC) რისკის კალკულატორი უზრუნველყოფს მტკიცებულებაზე დაფუძნებულ სიკვდილობის პროგნოზს ქრონიკული გულის უკმარისობიან პაციენტებისთვის.',
    
    // Step labels
    demographics_step: 'დემოგრაფია',
    clinical_step: 'კლინიკური შეფასება',
    therapy_step: 'თერაპიის შეფასება',
    
    // Section headers
    patient_demographics: 'პაციენტის დემოგრაფია',
    demographics_description: 'პაციენტის ძირითადი დემოგრაფიული და კლინიკური მახასიათებლები',
    clinical_assessment: 'კლინიკური შეფასება',
    clinical_description: 'მიმდინარე ვიტალური ნიშნები, ლაბორატორიული მნიშვნელობები და თანმხლები დაავადებების სტატუსი',
    therapy_assessment: 'მიმდინარე თერაპიის შეფასება',
    therapy_description: 'მიმდინარე გაიდლანებზე დაფუძნებული მედიკამენტური თერაპიის სტატუსი',
    
    // Form field labels
    lvef_label: 'მარცხენა პარკუჭის განდევნის ფრაქცია (LVEF)',
    lvef_placeholder: 'ჩაწერეთ LVEF პროცენტი',
    nyha_class_label: 'NYHA ფუნქციური კლასი',
    nyha_class_placeholder: 'აირჩიეთ NYHA კლასი',
    nyha_class_1: 'კლასი I - შეზღუდვის გარეშე',
    nyha_class_2: 'კლასი II - მცირე შეზღუდვა',
    nyha_class_3: 'კლასი III - გამოხატული შეზღუდვა',
    nyha_class_4: 'კლასი IV - მძიმე შეზღუდვა',
    systolic_bp_label: 'სისტოლური არტერიული წნევა',
    systolic_bp_placeholder: 'ჩაწერეთ სისტოლური არტერიული წნევა',
    bmi_label: 'სხეულის მასის ინდექსი (BMI)',
    bmi_placeholder: 'ჩაწერეთ BMI',
    creatinine_label: 'შრატის კრეატინინი',
    creatinine_placeholder: 'ჩაწერეთ კრეატინინის დონე',
    diabetes_label: 'შაქრიანი დიაბეტი',
    copd_label: 'ქრონიკული ობსტრუქციული ფილტვის დაავადება (COPD)',
    first_diagnosis_label: 'გულის უკმარისობის პირველი დიაგნოზი (18 თვის განმავლობაში)',
    beta_blocker_label: 'ბეტა-ბლოკატორი თერაპია',
    ace_inhibitor_label: 'ACE ინჰიბიტორი ან ARB თერაპია',
    
    // Button labels
    next_clinical_assessment: 'შემდეგი: კლინიკური შეფასება',
    next_therapy_assessment: 'შემდეგი: თერაპიის შეფასება',
    calculate_maggic_risk: 'MAGGIC რისკის გამოთვლა',
    new_assessment_button: 'ახალი შეფასება',
        
    // Risk interpretations
    interpretation_very_high: 'ძალიან მაღალი რისკი (>35% 1-წლიანი სიკვდილიანობა) - სპეციალიზებული მკურნალობა საჭიროა',
    
    // Clinical recommendations
    recommendation_optimal: 'ოპტიმალური მკურნალობა - სრული გაიდლაინ-განპირობებული თერაპია და რეგულარული მონიტორინგი',
    recommendation_intensive: 'ინტენსიური მკურნალობა - მაქსიმალური მედიკამენტური თერაპია და ხშირი შეფასება',
    recommendation_frequent_monitoring: 'ხშირი მონიტორინგი - რეგულარული კლინიკური შეფასება და ლაბორატორიული კონტროლი',
    recommendation_advanced_therapies: 'მოწინავე თერაპიული მეთოდები - განიხილეთ ICD, CRT ან გულის ტრანსპლანტაცია',
    
    // Badge for meta-analysis validation
    badge_meta_analysis: 'მეტა-ანალიზით ვალიდირებული - >39,000 პაციენტი'
  },

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
    low_risk: 'დაბალი რისკი',
    intermediate_risk: 'საშუალო რისკი',
    high_risk: 'მაღალი რისკი',
    very_high_risk: 'ძალიან მაღალი რისკი',
    
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
  shfm: {
    title: 'სიეტლის გულის უკმარისობის მოდელი (SHFM)',
    subtitle: 'სიცოცხლიანობის  პროგნოზი და თერაპიის ზეგავლენის ანალიზი',
    description: 'მტკიცებულებაზე დაფუძნებული სიცოცხლიანობის  პროგნოზის მოდელი გულის უკმარისობის პაციენტების მკურნალობის ოპტიმიზაციისთვის.',
    calculate_button: 'სიცოცხლიანობის  გამოთვლა',
    
    // Alert section
    alert_title: 'სიეტლის გულის უკმარისობის მოდელი',
    alert_description: 'ვალიდური სიცოცხლიანობის  პროგნოზის მოდელი, რომელიც აფასებს 1-, 2-, 3- და 5-წლიან სიცოცხლიანობის  მაჩვენებლებს გულის უკმარისობის პაციენტებში. ეს ინსტრუმენტი ასევე აანალიზებს სხვადასხვა თერაპიის პოტენციურ ზემოქმედებას მკურნალობის გადაწყვეტილებების ოპტიმიზაციისთვის.',
    
    // Progress steps
    demographics_step: 'დემოგრაფია',
    clinical_step: 'კლინიკური',
    laboratory_step: 'ლაბორატორია',
    therapy_step: 'თერაპია',
    
    // Step descriptions
    demographics_description: 'პაციენტის დემოგრაფიული მონაცემები და საწყისი მახასიათებლები სიცოცხლიანობის  პროგნოზისთვის',
    clinical_description: 'კრიტიკული კლინიკური პარამეტრები, მათ შორის ფუნქციური სტატუსი და ჰემოდინამიკა',
    laboratory_description: 'კრიტიკული ლაბორატორიული პარამეტრები სიცოცხლიანობის  პროგნოზისთვის',
    therapy_description: 'მიმდინარე მედიკამენტები და მოწყობილობები ზემოქმედების ანალიზისთვის',
    
    // Demographics section
    patient_demographics: 'პაციენტის დემოგრაფიული მონაცემები',
    age_label: 'ასაკი',
    age_placeholder: 'ჩაწერეთ ასაკი',
    gender_label: 'სქესი',
    gender_placeholder: 'აირჩიეთ სქესი',
    gender_male: 'მამრობითი',
    gender_female: 'მდედრობითი',
    
    // Clinical parameters
    clinical_parameters: 'კლინიკური პარამეტრები',
    lvef_label: 'მარცხენა პარკუჭის განდევნის ფრაქცია (ფვ)',
    lvef_placeholder: 'ჩაწერეთ ფვ (%)',
    nyha_class_label: 'NYHA ფუნქციური კლასი',
    nyha_class_placeholder: 'აირჩიეთ NYHA კლასი',
    nyha_class_1: 'კლასი I - შეზღუდვის გარეშე',
    nyha_class_2: 'კლასი II - მცირე შეზღუდვა',
    nyha_class_3: 'კლასი III - გამოხატული შეზღუდვა',
    nyha_class_4: 'კლასი IV - მძიმე შეზღუდვა',
    ischemic_etiology_label: 'იშემიური ეტიოლოგია',
    systolic_bp_label: 'სისტოლური არტერიული წნევა',
    systolic_bp_placeholder: '120',
    peak_vo2_label: 'პიკური VO₂',
    peak_vo2_placeholder: '14.0',
    
    // Laboratory values
    laboratory_values: 'ლაბორატორიული შეფასება',
    sodium_label: 'შრატის ნატრიუმი',
    sodium_placeholder: '140',
    cholesterol_label: 'მთლიანი ქოლესტერინი',
    cholesterol_placeholder: '180',
    hemoglobin_label: 'ჰემოგლობინი',
    hemoglobin_placeholder: '12.5',
    lymphocyte_percent_label: 'ლიმფოციტების პროცენტი',
    lymphocyte_percent_placeholder: '20',
    uric_acid_label: 'შარდმჟავა',
    uric_acid_placeholder: '7.0',
    
    // Therapy assessment
    therapy_assessment: 'მიმდინარე თერაპიის შეფასება',
    ace_inhibitor_label: 'ACE ინჰიბიტორი ან ARB',
    beta_blocker_label: 'ბეტა-ბლოკატორი',
    aldosterone_antagonist_label: 'ალდოსტერონის ანტაგონისტი',
    statin_label: 'სტატინი',
    allopurinol_label: 'ალოპურინოლი',
    icd_label: 'იმპლანტირებადი კარდიოვერტერ-დეფიბრილატორი (ICD)',
    crt_label: 'კარდიო რესინქრონიზაციის თერაპია (CRT)',
    
    // Navigation buttons
    next_clinical_data: 'შემდეგი: კლინიკური მონაცემები',
    next_laboratory_data: 'შემდეგი: ლაბორატორიული მონაცემები',
    next_therapy_data: 'შემდეგი: თერაპიული შეფასება',
    
    // Results and risk categories
    low_risk: 'დაბალი რისკი',
    intermediate_risk: 'საშუალო რისკი',
    high_risk: 'მაღალი რისკი',
    very_high_risk: 'ძალიან მაღალი რისკი',
    
    // Validation messages
    age_required: 'ასაკი აუცილებელია',
    age_invalid: 'ასაკი უნდა იყოს 18-დან 120 წლამდე',
    gender_required: 'სქესი აუცილებელია',
    lvef_required: 'ფვ აუცილებელია',
    lvef_invalid: 'ფვ უნდა იყოს 5%-დან 80%-მდე',
    nyha_class_required: 'NYHA კლასი აუცილებელია',
    systolic_bp_required: 'სისტოლური არტერიული წნევა აუცილებელია',
    systolic_bp_invalid: 'სისტოლური არტერიული წნევა უნდა იყოს 60-დან 250 მმ ვ.სვ.-მდე',
    peak_vo2_required: 'პიკური VO₂ აუცილებელია',
    peak_vo2_invalid: 'პიკური VO₂ უნდა იყოს 5-დან 50 მლ/კგ/წთ-მდე',
    sodium_required: 'შრატის ნატრიუმი აუცილებელია',
    sodium_invalid: 'ნატრიუმი უნდა იყოს 120-დან 160 მეკვ/ლ-მდე',
    cholesterol_required: 'მთლიანი ქოლესტერინი აუცილებელია',
    cholesterol_invalid: 'ქოლესტერინი უნდა იყოს 50-დან 500 მგ/დლ-მდე',
    hemoglobin_required: 'ჰემოგლობინი აუცილებელია',
    hemoglobin_invalid: 'ჰემოგლობინი უნდა იყოს 5-დან 20 გ/დლ-მდე',
    lymphocyte_percent_required: 'ლიმფოციტების პროცენტი აუცილებელია',
    lymphocyte_percent_invalid: 'ლიმფოციტების პროცენტი უნდა იყოს 1%-დან 50%-მდე',
    uric_acid_required: 'შარდმჟავა აუცილებელია',
    uric_acid_invalid: 'შარდმჟავა უნდა იყოს 2-დან 20 მგ/დლ-მდე'
  },

  // Heart Failure Staging Calculator - COMPLETE TRANSLATION IMPLEMENTATION
  heartFailureStaging: {
    title: 'გულის უკმარისობის სტადიები',
    subtitle: 'ACC/AHA გულის უკმარისობის სტადიები A-D • რისკის შეფასება და მართვა',
    description: 'ACC/AHA გულის უკმარისობის სტადიის განსაზღვრის სისტემა რისკის შეფასებისთვის და მართვის საკითხების გაგებისთვის.',
    calculate_button: 'გულის უკმარისობის სტადიის განსაზღვრა',
    risk_category: 'გულის უკმარისობის სტადია',
    recommendations: 'მართვის რეკომენდაციები',
    low_risk: 'სტადია A (რისკის ქვეშ)',
    high_risk: 'სტადია D (განვითარებული)',

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
    management_stage_d_assessment: 'პაციენტებში გულის უკმარისობით ჰოსპიტალიზებულებში, შეშუპების სიმძიმე და პერფუზიის ადეკვატურობა უნდა შეფასდეს ტრიაჟისა და საწყისი თერაპიის ხელმძღვანელობისთვის. (LOE: C-LD).'
  },

  // DAPT Score Calculator - სრული თარგმანი
  dapt: {
    title: 'DAPT ქულების კალკულატორი',
    subtitle: 'ორმაგი ანტითრომბოციტული თერაპიის ხანგრძლივობა • რისკის-სარგებლის შეფასება',
    description: "PCI-ის შემდეგ ორმაგი ანტითრომბოციტული თერაპიის ხანგრძლივობის რისკის-სარგებლის შეფასება.",
    
    // გაფრთხილების განყოფილება
    therapy_management_tool: "მკრუნალობის მენეჯმენტის ინსტრუმენტი",
    tool_description: "DAPT ქულების კალკულატორი გვეხმარება კან-გავლითი კორონარული ჩარევის (PCI) შემდეგ ორმაგი ანტითრომბოციტული თერაპიის ოპტიმალური ხანგრძლივობის განსაზღვრასა და იშემიური და სისხლდენის რისკების ბალანსის დადგენაში.",
    study_validated: "DAPT კვლევით მტკიცებულებებით დამოწმებული",
    
    // პროგრესის ნაბიჯები
    patient_profile: "პაციენტის პროფილი",
    risk_assessment: "რისკის შეფასება", 
    dapt_analysis: "DAPT ანალიზი",
    
    // ნაბიჯი 1: დემოგრაფია
    demographics_section: "პაციენტის დემოგრაფია და პროცედურის დეტალები",
    demographics_description: "შეიყვანეთ პაციენტის ძირითადი ინფორმაცია და პროცედურის დეტალები",
    age_label: "ასაკი",
    age_help: "პაციენტის ასაკი (გავლენას ახდენს სისხლდენის რისკის გამოთვლაზე)",
    age_error: "ასაკი უნდა იყოს 18-120 წლის შუალედში",
    stent_diameter_label: "სტენტის დიამეტრი",
    stent_diameter_help: "PCI პროცედურის დროს გამოყენებული უმცირესი სტენტის დიამეტრი",
    stent_diameter_error: "სტენტის დიამეტრი უნდა იყოს 1-10 მმ შუალედში",
    next_risk_factors: "შემდეგი: რისკ ფაქტორები",
    
    // ნაბიჯი 2: რისკ ფაქტორები
    risk_factors_section: "კლინიკური რისკ ფაქტორები",
    risk_factors_description: "აირჩიეთ ყველა შესაბამისი კლინიკური რისკ ფაქტორი ამ პაციენტისთვის",
    cigarette_smoking: "სიგარეტის მოწევა",
    cigarette_smoking_desc: "მიმდინარე მწეველი ან შეწყვიტა მოწება ბოლო წლის განმავლობაში",
    diabetes_mellitus: "შაქრიანი დიაბეტი",
    diabetes_mellitus_desc: "ტიპი 1 ან ტიპი 2 დიაბეტი, რომელიც საჭიროებს მედიკამენტებს",
    mi_at_presentation: "MI პრეზენტაციისას",
    mi_at_presentation_desc: "STEMI ან NSTEMI როგორც მიმდინარე PCI-ის ჩვენება",
    prior_pci_mi: "წინა PCI ან MI",
    prior_pci_mi_desc: "წინა პერკუტანული კორონარული ჩარევა ან მიოკარდიუმის ინფარქტი",
    paclitaxel_stent: "პაკლიტაქსელ-გამომყოფი სტენტი",
    paclitaxel_stent_desc: "პაკლიტაქსელ-გამომყოფი წამლით დაფარული სტენტის გამოყენება",
    chf_lvef: "CHF ან LVEF <30%",
    chf_lvef_desc: "შეგუბებითი გულის უკმარისობა ან მარცხენა პარკუჭის განდევინის ფრაქცია <30%",
    next_specialized_factors: "შემდეგი: სპეციალიზებული ფაქტორები",
    
    // ნაბიჯი 3: სპეციალიზებული ფაქტორები
    specialized_factors_section: "სპეციალიზებული პროცედურული ფაქტორები",
    specialized_factors_description: "დამატებითი პროცედურული და ანატომიური მოსაზრებები",
    vein_graft_pci: "ვენური გრაფტის PCI",
    vein_graft_pci_desc: "PCI შესრულებული ბარძაყის ვენის გრაფტზე ან სხვა ვენურ გრაფტზე",
    
    // გამოთვლის ღილაკი
    calculate_button: "DAPT ქულის გამოთვლა",
    
    // შედეგები
    score_analysis: "DAPT ქულების ანალიზი",
    score_points: "{{score}} ქულა",
    ischemic_benefit: "იშემიური სარგებელი",
    bleeding_risk: "სისხლდენის რისკი",
    net_benefit: "წმინდა კლინიკური სარგებელი",
    
    // რისკის დონეები
    high_risk: "მაღალი",
    intermediate_risk: "საშუალო", 
    low_risk: "დაბალი",
    
    // რისკის აღწერილობები
    mace_reduction: "{{reduction}}% MACE შემცირება",
    bleeding_increase: "{{increase}}% სისხლდენის ზრდა",
    
    // წმინდა სარგებლის კატეგორიები
    favorable_benefit: "ხელსაყრელი",
    uncertain_benefit: "გაურკვეველი",
    unfavorable_benefit: "არახელსაყრელი",
    benefits_outweigh_risks: "სარგებელი აღემატება რისკებს",
    requires_individual_assessment: "საჭიროებს ინდივიდუალურ შეფასებას",
    risks_outweigh_benefits: "რისკები აღემატება სარგებელს",
    assessment_required: "შეფასება საჭიროა",
    clinical_evaluation_needed: "კლინიკური შეფასება საჭიროა",
    
    // რეკომენდაციები
    recommendation_extended_strongly: "გახანგრძლივებული DAPT ძლიერ რეკომენდირებულია - მაღალი იშემიური სარგებელი მისაღები სისხლდენის რისკით",
    recommendation_extended_may_benefit: "გახანგრძლივებული DAPT შეიძლება იყოს სასარგებლო - განიხილეთ ინდივიდუალური შეფასება",
    recommendation_not_recommended_bleeding: "გახანგრძლივებული DAPT არ არის რეკომენდირებული ზედმეტი სისხლდენის რისკის გამო",
    recommendation_individualized_assessment: "ინდივიდუალური შეფასება რეკომენდირებულია - სარგებელი და რისკები დაბალანსებულია",
    recommendation_careful_consideration: "ფრთხილი განხილვა საჭიროა - გაურკვეველი სარგებელი",
    recommendation_not_recommended: "გახანგრძლივებული DAPT არ არის რეკომენდირებული - არახელსაყრელი რისკ-სარგებლის თანაფარდობა",
    recommendation_not_recommended_limited: "გახანგრძლივებული DAPT არ არის რეკომენდირებული - შეზღუდული იშემიური სარგებელი",
    
    // ხანგრძლივობის მითითებები
    duration_18_30_months: "განიხილეთ 18-30 თვიანი DAPT მჭიდრო მონიტორინგით",
    duration_18_months_monitoring: "განიხილეთ 18 თვე გაძლიერებული სისხლდენის მონიტორინგით",
    duration_12_months_early: "სტანდარტული 12 თვე, განიხილეთ ადრეული შეწყვეტა სისხლდენის შემთხვევაში",
    duration_12_18_individualized: "12-18 თვე ინდივიდუალური რისკის შეფასების საფუძველზე",
    duration_12_months_rationale: "სტანდარტული 12 თვე, გარდა იმ შემთხვევისა, თუ არის სარწმუნო საფუძველი გახანგრძლივებისთვის",
    duration_12_months_early_consideration: "სტანდარტული 12 თვე ადრეული შეწყვეტის განხილვით",
    duration_12_months_shorter: "სტანდარტული 12 თვე ან უფრო მოკლე მაღალი სისხლდენის რისკის შემთხვევაში",
    
    // კლინიკური მოსაზრებები
    consideration_advanced_age: "მოწინავე ასაკი (≥75 წელი) მნიშვნელოვნად ზრდის სისხლდენის რისკს",
    consideration_moderate_age: "საშუალო ასაკობრივი სისხლდენის რისკი (65-74 წელი)",
    consideration_diabetes: "დიაბეტი ზრდის როგორც იშემიურ, ასევე სისხლდენის რისკს",
    consideration_mi_presentation: "ბოლოდროინდელი MI ზრდის იშემიურ რისკს და DAPT სარგებელს",
    consideration_small_vessel: "მცირე სისხლძარღვის PCI (<3მმ) ზრდის სტენტის თრომბოზის რისკს",
    consideration_heart_failure: "გულის უკმარისობა ზრდის როგორც იშემიურ, ასევე სისხლდენის რისკს",
    consideration_paclitaxel_stent: "პაკლიტაქსელ-გამომყოფი სტენტები იმპლანტაციისას შეიძლება ვნახოთ სარგებელი გახანგრძლივებული DAPT-ით",
    consideration_vein_graft: "ვენური გრაფტის PCI-ს აქვს უნიკალური რისკის პროფილი, რომელიც საჭიროებს ინდივიდუალურ მიდგომას",
    
    // ხანგრძლივობის რეკომენდაციის განყოფილება
    duration_recommendation: "ხანგრძლივობის რეკომენდაცია",
    clinical_considerations: "კლინიკური მოსაზრებები",
    
    // ინტერპრეტაციის გზამკვლევი
    interpretation_guide: "DAPT ქულის ინტერპრეტაციის გზამკვლევი",
    score_high: "ქულა ≥2 (მაღალი სარგებელი)",
    score_high_desc: "სავარაუდოდ სარგებლის მომცემი იქნება გახანგრძლივებული DAPT-ი",
    score_intermediate: "ქულა 1 (საშუალო სარგებელი)", 
    score_intermediate_desc: "შეიძლება სარგებლის მომცემი იყოს გახანგრძლივებული DAPT-ი. საჭიროა ფრთხილი შეფასება",
    score_low: "ქულა ≤0 (დაბალი/არა სარგებელი)",
    score_low_desc: "შეზღუდული სარგებელი გახანგრძლივებული DAPT-დან, სისხლდენის რისკი შეიძლება აღემატებოდეს სარგებელს",
    
    // ინტერპრეტაციები
    interpretation_high: "მაღალი სარგებლის პაციენტი (ქულა: {{score}}) - გახანგრძლივებული DAPT სავარაუდოდ სასარგებლოა",
    interpretation_intermediate: "საშუალო სარგებლის პაციენტი (ქულა: {{score}}) - განიხილეთ გახანგრძლივებული DAPT",
    interpretation_low: "დაბალი სარგებლის პაციენტი (ქულა: {{score}}) - გახანგრძლივებული DAPT შეიძლება იყოს მავნე",
    
    // გაძლიერებული ალგორითმი
    enhanced_algorithm: "გაძლიერებული ალგორითმის ვალიდაცია",
    algorithm_validation: "ეს კალკულატორი მოიცავს ასაკთან მორგებულ სისხლდენის რისკის შეფასებას და DAPT კვლევიდან მიღებულ მტკიცებულებებზე დაფუძნებულ რეკომენდაციებს, ოპტიმალური კლინიკური გადაწყვეტილებების მისაღებად.",
    
    // მოქმედების ღილაკები
    new_assessment: "ახალი შეფასება",
    modify_inputs: "შეცვალეთ შესაყვანი ინფორმაცია",
    
    // Creator Insights Section
    creator_insights_title: "შემქმნელის ანალიზი",
    creator_name: "დოქტორი რობერტ ვ. იე",
    creator_bio: "ჰარვარდის სამედიცინო სკოლის მედიცინის ასოცირებული პროფესორი და ბეთ ისრაელ დიაკონესა სამედიცინო ცენტრის კარდიოლოგიაში შედეგების კვლევის რიჩარდ და სუზან სმიტ ცენტრის დირექტორი.",
    creator_insight_condensed: "კორონარული სტენტების შემდეგ ანტითრომბოციტული თერაპიის ოპტიმალური ხანგრძლივობის განსაზღვრა საჭიროებს გულის შეტევის პრევენციისა და სისხლდენის რისკის დაბალანსებას. DAPT ქულა, რომელიც განვითარებულია ყველაზე დიდი რანდომიზებული გამოცდიდან (11,648 პაციენტი) ჰარვარდის კლინიკური კვლევის ინსტიტუტში, ეხმარება კლინიკოსებს იდენტიფიცირება მოახდინონ იმ პაციენტებისა, რომლებიც სარგებლობენ გახანგრძლივებული თერაპიით, ვიდრე იმ პაციენტებისა, რომლებსაც უკეთესი შედეგი აქვთ მოკლე ხანგრძლივობით. ეს ვალიდირებული ინსტრუმენტი მართავს კლინიკურ გადაწყვეტილებებს ექიმის განსჯასთან ერთად, ეფექტურად განასხვავებს მაღალი იშემიური/დაბალი სისხლდენის რისკის პაციენტებს საპირისპირო რისკის პროფილის მქონე პაციენტებისგან. აუცილებელია რუტინულ პრაქტიკაში გაზიარებული გადაწყვეტილების მისაღებად.",
    
    // Evidence Section
    evidence_title: "მტკიცებულება და ფორმულა",
    evidence_formula_title: "DAPT ქულის ფორმულა",
    formula_description: "შერჩეული ქულების თანამგროვება:",
    age_scoring: "ასაკი: ≥75 წელი (-2 ქულა), 65-74 წელი (-1 ქულა), <65 წელი (0 ქულა)",
    risk_factors_scoring: "რისკ ფაქტორები: ყველა შერჩეული ფაქტორი ამატებს +1 ქულას (მოწევა, დიაბეტი, MI პრეზენტაციისას, წინა PCI/MI, პაკლიტაქსელ სტენტი, სტენტი <3მმ, CHF/LVEF<30%, ვენური გრაფტი)",
    interpretation_note: "ქულა ≥2: მაღალი იშემიური/დაბალი სისხლდენის რისკი - გახანგრძლივებული DAPT რეკომენდირებული | ქულა -2 დან 1-მდე: დაბალი იშემიური/მაღალი სისხლდენის რისკი - გახანგრძლივებული DAPT არ არის რეკომენდირებული",
    
    evidence_validation_title: "კვლევის ვალიდაცია",
    evidence_validation_description: "განვითარებული და ვალიდირებული DAPT კვლევის მონაცემების გამოყენებით, DAPT ხანგრძლივობის ყველაზე დიდი რანდომიზებული გამოცდა, რომელშიც მონაწილეობდა 11,648 პაციენტი. ქულა შემდგომ ვალიდირებული იქნა მრავალ დამოუკიდებელ კოჰორტში, მათ შორის იაპონური PCI კვლევებსა და რეალურ სამყაროს რეესტრებში, რაც მუდმივად აჩვენებს მის უნარს იდენტიფიკაცია გაუკეთოს პაციენტებს, რომლებიც სარგებლობენ გახანგრძლივებული DAPT-ით.",
    
    evidence_guidelines_title: "კლინიკური გაიდლაინები",
    evidence_guidelines_description: "ჩართულია 2016 წლის ACC/AHA გაიდლაინის ფოკუსირებულ განახლებაში ორმაგი ანტითრომბოციტული თერაპიის ხანგრძლივობისთვის. DAPT ქულა რეკომენდირებულია როგორც კლინიკური გადაწყვეტილების ინსტრუმენტი DAPT ხანგრძლივობის გადაწყვეტილებების ინფორმირებისთვის იმ პაციენტებში, რომლებმაც დაასრულეს 12 თვიანი DAPT სისხლდენის გართულებების გარეშე.",
    
    references_title: "ლიტერატურა",
    reference_original: "DAPT ქულის ორიგინალური განვითარება (Yeh et al. JAMA 2016)",
    reference_validation: "ვალიდაციის კვლევები (Piccolo et al. Ann Intern Med 2017)",
    reference_guidelines: "ACC/AHA გაიდლაინები (Levine et al. JACC 2016)"
  },

  // TIMI Risk Calculator
  timi: {
    title: 'TIMI რისკის კალკულატორი',
    subtitle: 'არასტაბილური ანგინა/NSTEMI • რისკის შეფასება',
    description: 'რისკის სტრატიფიკაცია არასტაბილური სტენოკარდიისა და NSTEMI-ს მქონე პაციენტებისთვის.',
    
    // Emergency alert - MISSING KEYS ADDED
    emergency_tool: 'საგანგებო რისკის შეფასების ინსტრუმენტი',
    tool_description: 'TIMI რისკის ქულა არასტაბილური სტენოკარდიისა და NSTEMI-ს მქონე პაციენტების სწრაფი შეფასებისთვის. ეს ინსტრუმენტი გვეხმარება საგანგებო პირობებში რისკის სტრატიფიკაციასა და მართვის გადაწყვეტილებების მიღებაში.',
    
    // Step navigation - MISSING KEYS ADDED
    patient_info: 'პაციენტის ინფო',
    clinical_factors: 'კლინიკური ფაქტორები',
    
    alert_title: 'TIMI რისკის შეფასება',
    alert_description: 'მტკიცებულებებით დამოწმებული რისკის ქულა მწვავე კორონარული სინდრომების დროს',
    
    demographics_section: 'პაციენტის დემოგრაფია',
    demographics_description: 'ძირითადი პაციენტის ინფორმაცია',
    
    // Clinical Assessment section - MISSING KEYS ADDED
    clinical_assessment: 'კლინიკური შეფასება',
    clinical_assessment_description: 'აირჩიეთ ყველა კლინიკური ფაქტორი, რომელიც ერგება ამ პაციენტს:',
    
    age_label: 'ასაკი',
    age_help: 'პაციენტის ასაკი წლებში',
    age_error: 'ასაკი უნდა იყოს 18-120 წლის შუალედში',
    
    clinical_section: 'კლინიკური რისკ ფაქტორები',
    clinical_description: 'კორონარული დაავადების რისკ ფაქტორები',
    cad_risk_factors: 'CAD რისკ ფაქტორები (≥3)',
    cad_risk_factors_desc: 'ოჯახური ანამნეზი, ჰიპერტენზია, ჰიპერქოლესტერინემია, დიაბეტი, ან მოწევა',
    
    // Risk factors detail explanation - MISSING KEY ADDED
    risk_factors_detail: 'რისკ ფაქტორები მოიცავს: CAD-ის ოჯახურ ანამნეზს, ჰიპერტენზიას, ჰიპერქოლესტერინემიას, შაქრიან დიაბეტს, ამჟამინდელ მოწევას',
    
    known_cad: 'ცნობილი CAD (≥50% სტენოზი)',
    known_cad_desc: 'კორონარული არტერიის დაავადება ≥50% სტენოზით',
    aspirin_use: 'ასპირინის გამოყენება ბოლო 7 დღეში',
    aspirin_use_desc: 'ასპირინის გამოყენება წინა კვირის განმავლობაში',
    severe_angina: 'მძიმე ანგინა (≥2 ეპიზოდი 24 საათში)',
    severe_angina_desc: 'მძიმე სტენოკარდიის ორი ან მეტი ეპიზოდი ბოლო 24 საათში',
    st_deviation: 'ST გადახრა ≥0.5მმ',
    st_deviation_desc: 'ST სეგმენტის გადახრა ≥0.5მმ',
    elevated_markers: 'მომატებული გულის მარკერები',
    elevated_markers_desc: 'ტროპონინი ან CK-MB მომატებული',
    
    // Additional biomarkers key - MISSING KEY ADDED
    elevated_biomarkers: 'მომატებული გულის ბიომარკერები',
    elevated_biomarkers_desc: 'მომატებული ტროპონინი, CK-MB, ან სხვა გულის მარკერები',
    
    // Navigation - MISSING KEYS ADDED
    next_clinical_factors: 'შემდეგი: კლინიკური ფაქტორები',
    
    // Results section - MISSING KEYS ADDED
    calculate_button: 'TIMI რისკის გამოთვლა',
    score_analysis: 'TIMI რისკის ანალიზი',
    timi_score: 'TIMI ქულა',
    fourteen_day_breakdown: '14-დღიანი რისკის გაანალიზება',
    fourteen_day_risk: '14-დღიანი რისკი',
    mortality: 'სიკვდილობა',
    myocardial_infarction: 'მიოკარდიუმის ინფარქტი',
    urgent_revascularization: 'სასწრაფო რევასკულარიზაცია',
    
    composite_endpoint: 'კომბინირებული ბოლო წერტილი',
    death_mi_revascularization: 'სიკვდილი, MI ან სასწრაფო რევასკულარიზაცია',
    risk_category: 'რისკის კატეგორია',
    management_strategy: 'მართვის სტრატეგია',
    management_urgency: 'მართვის სისწრაფე',
    recommended_timeframe: 'რეკომენდირებული დროის ჩარჩო:',
    
    // Time frames - MISSING KEYS ADDED
    timeframe_under_24: '< 24 საათი',
    timeframe_24_48: '24-48 საათი',
    timeframe_24_72: '24-72 საათი',
    
    // Risk categories
    low_risk: 'დაბალი რისკი (0-2 ქულა)',
    intermediate_risk: 'საშუალო რისკი (3-4 ქულა)',
    high_risk: 'მაღალი რისკი (5-7 ქულა)',
    
    // Management recommendations - MISSING KEYS ADDED
    conservative_management: 'კონსერვატული მართვა',
    routine_management: 'რუტინული მართვა',
    early_invasive_strategy: 'ადრეული ინვაზიური სტრატეგია',
    early_intervention: 'ადრეული ჩარევა',
    urgent_invasive_strategy: 'სასწრაფო ინვაზიური სტრატეგია',
    urgent_management: 'სასწრაფო მართვა',
    
    // Score components - MISSING KEYS ADDED
    score_components: 'ქულის კომპონენტები',
    age_component: 'ასაკი ≥65 წელი',
    cad_risk_factors_component: '≥3 CAD რისკ ფაქტორი',
    known_cad_component: 'ცნობილი CAD (≥50% სტენოზი)',
    aspirin_component: 'ასპირინი (წინა 7 დღე)',
    angina_component: 'მძიმე ანგინა (≥2 ეპიზოდი/24სთ)',
    st_component: 'ST გადახრა ≥0.5მმ',
    biomarkers_component: 'მომატებული გულის მარკერები',
    
    // Clinical strategy - MISSING KEY ADDED
    clinical_strategy: 'კლინიკური მართვის სტრატეგია',
    
    // Footer - MISSING KEYS ADDED
    based_on_timi: 'TIMI რისკის ქულაზე დაფუძნებული',
    clinically_validated: 'კლინიკურად ვალიდირებული რისკის შეფასების ინსტრუმენტი',
    
    // Interpretations (dynamic) - MISSING KEYS ADDED
    interpretation_low: 'დაბალი რისკის პაციენტი {{risk}}%-იანი 14-დღიანი არახელსაყრელი შედეგების რისკით',
    interpretation_intermediate: 'საშუალო რისკის პაციენტი {{risk}}%-იანი 14-დღიანი არახელსაყრელი შედეგების რისკით',
    interpretation_high: 'მაღალი რისკის პაციენტი {{risk}}%-იანი 14-დღიანი არახელსაყრელი შედეგების რისკით',
    
    // Recommendations (dynamic) - MISSING KEYS ADDED
    recommendation_low_0: 'კონსერვატული მართვა მედიკამენტური თერაპიით',
    recommendation_low_1: 'კონსერვატული მართვა მედიკამენტური თერაპიით',
    recommendation_low_2: 'კონსერვატული მართვა მჭიდრო მონიტორინგით',
    recommendation_intermediate_3: 'განიხილეთ ადრეული ინვაზიური სტრატეგია 24-48 საათის განმავლობაში',
    recommendation_intermediate_4: 'ადრეული ინვაზიური სტრატეგია რეკომენდირებულია 24 საათის განმავლობაში',
    recommendation_high_5: 'სასწრაფო ინვაზიური სტრატეგია 24 საათის განმავლობაში',
    recommendation_high_6: 'სასწრაფო ინვაზიური სტრატეგია 12-24 საათის განმავლობაში',
    recommendation_high_7: 'დაუყოვნებლივი ინვაზიური სტრატეგია - ყველაზე მაღალი რისკი',
    
    // Simplified category recommendations
    recommendation_low: 'კონსერვატული მართვა მედიკამენტური თერაპიითა და მჭიდრო მონიტორინგით. განიხილეთ ადრეული გაწერა ამბულატორიული თვალყურის დევნებით.',
    recommendation_intermediate: 'ადრეული ინვაზიური სტრატეგია 24-48 საათის განმავლობაში რეკომენდირებულია. ჰოსპიტალიზაცია კარდიოლოგის კონსულტაციით რეკომენდებულია.',
    recommendation_high: 'სასწრაფო ინვაზიური სტრატეგია 24 საათის განმავლობაში აუცილებელია. დაუყოვნებელი კარდიოლოგიური კონსულტაცია და აგრესიული მედიკამენტური თერაპია მითითებულია.',
    
    // Risk factor descriptions - MISSING KEYS ADDED
    coronary_risk_factors: 'კორონარული არტერიის დაავადების რისკ ფაქტორები',
    risk_factors_help: 'CAD რისკ ფაქტორების რაოდენობა (0-3+)',
    cad_risk_factors_label: '≥3 CAD რისკ ფაქტორი',
    known_cad_label: 'ცნობილი CAD (სტენოზი ≥50%)',
    aspirin_use_label: 'ასპირინის გამოყენება წინა 7 დღეში',
    severe_angina_label: 'მძიმე ანგინა (≥2 ეპიზოდი 24 საათში)',
    st_deviation_label: 'ST გადახრა ≥0.5მმ',
    elevated_markers_label: 'მომატებული გულის მარკერები',
    
    // Algorithm validation
    algorithm_validation: 'TIMI რისკის ქულა მტკიცებულებებით დამოწმებულია რანდომიზებულ კონტროლირებად ცდებში და ვალიდირებულია მრავალ პოპულაციაში NSTEMI/UA შეფასებისთვის.',
    
    // About the Creator
    about_creator_title: 'შემქმნის შესახებ',
    creator_name: 'დ-რ ელიოტ მ. ანტმანი',
    creator_description: 'ელიოტ მ. ანტმანი, M.D., არის პროფესორი და ასოცირებული დეკანი კლინიკური/ტრანსლაციური კვლევების მიმართულებით ჰარვარდის სამედიცინო სკოლაში. ის ასევე არის უფროსი ექიმი მასაჩუსეტსის ბრიგამისა და ქალების ჰოსპიტალის კარდიოვასკულარულ განყოფილებაში და ამერიკული გულის ასოციაციის პრეზიდენტი (2014-2015). როგორც TIMI კვლევითი ჯგუფის უფროსი მკვლევარი, დ-რ ანტმანმა გამოაქვეყნა ნაშრომები შრატის გულის მარკერების გამოყენების შესახებ არასტაბილური ანგინისა და მწვავე მიოკარდიუმის ინფარქტის მქონე პაციენტების დიაგნოზისა და პროგნოზისთვის, ციკლოოქსიგენაზისა და კარდიოვასკულარული რისკის შესახებ, და მწვავე კორონარული სინდრომების ანტითრომბოტული თერაპიის შესახებ.',
    creator_publications: 'დ-რ ელიოტ მ. ანტმანის პუბლიკაციების სანახავად, იხილეთ',
    
    // Evidence Section
    evidence_title: 'მტკიცებულება',
    formula_title: 'ფორმულა',
    formula_description: 'არჩეული ქულების დამატება:',
    variable_age: 'ასაკი ≥65',
    variable_risk_factors: '≥3 CAD რისკ ფაქტორი*',
    variable_known_cad: 'ცნობილი CAD (სტენოზი ≥50%)',
    variable_aspirin: 'ASA გამოყენება წინა 7 დღეში',
    variable_angina: 'მძიმე ანგინა (≥2 ეპიზოდი 24 საათში)',
    variable_st_changes: 'EKG ST ცვლილებები ≥0.5მმ',
    variable_st_deviation: 'ST გადახრა ≥0.5მმ',
    variable_biomarkers: 'დადებითი გულის მარკერი',
    risk_factors_note: '*CAD რისკ ფაქტორები: CAD-ის ოჯახური ანამნეზი, ჰიპერტენზია, ჰიპერქოლესტერინემია, დიაბეტი, ან ამჟამინდელი მოწევა',
    
    // Evidence Appraisal
    evidence_appraisal_title: 'მტკიცებულების შეფასება',
    evidence_appraisal_description: 'ანტმანმა და თანაავტორებმა (2000) გამოიყენეს გაერთიანებული მონაცემთა ბაზა 7,081 UA/NSTEMI პაციენტისგან TIMI 11B და ESSENCE კვლევებში ამ TIMI რისკის ქულის თავდაპირველი წარმოებისა და ვალიდაციისთვის UA/NSTEMI-სთვის. რისკის ქულა თავდაპირველად წარმოიშვა 1,957 UA/NSTEMI პაციენტისგან, რომლებიც იღებდნენ ნეფრაქციონირებულ ჰეპარინს TIMI 11B კვლევაში და შინაგანად ვალიდირდა 3 კოჰორტაში გაერთიანებული მონაცემების დანარჩენი ნაწილიდან: 1,953 პაციენტი, რომლებიც იღებდნენ ენოქსაპარინს TIMI 11B კვლევაში, 1,564 პაციენტი, რომლებიც იღებდნენ ნეფრაქციონირებულ ჰეპარინს ESSENCE კვლევაში, და 1,607 პაციენტი, რომლებიც იღებდნენ ენოქსაპარინს ESSENCE კვლევაში.',
    validation_studies: '14 დღის ბოლოს, წარმოების ჯგუფის 16.7% გარდაიცვალა, განიცადა მიოკარდიუმის ინფარქტი ან საჭიროებდა ფსიალ რევასკულარიზაციას. TIMI ქულის ზრდა კორელირებდა საერთო სიკვდილიანობის, MI ან სასწრაფო რევასკულარიზაციის ზრდასთან. იგივე მოდელი ჩანდა შინაგანად ვალიდირებულ ჯგუფებში. მისი წარმოების მომენტიდან ჩატარდა მრავალი გარე ვალიდაციური კვლევა.',
    validation_studies_title: 'ვალიდაციის კვლევები',
    external_validation: 'გარე ვალიდაციური კვლევები შირიკასა და თანაავტორების (2002), პოლაკისა და თანაავტორების (2006), და ჩეისისა და თანაავტორების (2006) მიერ მუდმივად აჩვენებს TIMI რისკის ქულის პროგნოსტულ ღირებულებას მრავალფეროვან პაციენტთა პოპულაციებში, მათ შორის განურჩევადი მკერდის ტკივილის მქონე პაციენტებში საგანგებო დახმარების განყოფილების პირობებში.',
    
    // Literature
    literature_title: 'ლიტერატურა',
    original_reference_title: 'ორიგინალური/პირველადი ცნობა',
    original_reference: 'Antman EM, Cohen M, Bernink PJLM, McCabe CH, Hoacek T, Papuchis G, Mautner B, Corbalan R, Radley D, Braunwald E. TIMI რისკის ქულა არასტაბილური ანგინა/არა-ST ასასვლელი MI-სთვის: პროგნოზირებისა და თერაპიული გადაწყვეტილების მიღების მეთოდი JAMA. 2000;284(7):835-42.',
    validation_title: 'ვალიდაცია',
    validation_pollack: 'Pollack CV, Sites FD, Shofer FS, Sease KL, Hollander JE. TIMI რისკის ქულის გამოყენება არასტაბილური ანგინისა და არა-ST ასასვლელი მწვავე კორონარული სინდრომისთვის არაგადარჩეული საგანგებო დახმარების განყოფილების მკერდის ტკივილის პოპულაციაში. Acad Emerg Med. 2006;13(1):13-18.',
    validation_scirica: 'Scirica BM, Cannon CP, Antman EM, Murphy SA, Morrow DA, Sabatine MS, McCabe CH, Gibson CM, Braunwald E. თრომბოლიზისის მიოკარდიუმის ინფარქტში (TIMI) რისკის ქულის ვალიდაცია არასტაბილური ანგინა პექტორისისა და არა-ST ასასვლელი მიოკარდიუმის ინფარქტისთვის TIMI III რეგისტრში. Am J Cardiol. 2002;90(3):303-5.',
    validation_chase: 'Chase M, Robey JL, Zogby KE, Sease KL, Shofer FS, Hollander JE. თრომბოლიზისის მიოკარდიუმის ინფარქტში რისკის ქულის პროსპექტული ვალიდაცია საგანგებო დახმარების განყოფილების მკერდის ტკივილის პოპულაციაში. Ann Emerg Med. 2006;48(3):252-9.',
    other_references_title: 'სხვა ცნობები',
    other_reference: 'Than M, Cullen L, Aldous S, et al. 2-საათიანი დაჩქარებული დიაგნოსტიკური პროტოკოლი მკერდის ტკივილის სიმპტომების მქონე პაციენტების შესაფასებლად თანამედროვე ტროპონინების გამოყენებით როგორც ერთადერთი ბიომარკერი: ADAPT კვლევა. J Am Coll Cardiol. 2012;59(23):2091-8.',
    
    new_assessment: 'ახალი შეფასება',
    modify_inputs: 'შეცვალეთ მონაცემები'
  },

  // Atrial Fibrillation Calculators
  atrial_fibrillation: {
    title: 'წინაგულების ფიბრილაციის კალკულატორები',
    subtitle: 'ინსულტის რისკი • ანტიკოაგულაციის სარგებელი • სისხლდენის რისკის შეფასება',
    description: 'კომპლექსური რისკის შეფასების ინსტრუმენტები AF პაციენტებისთვის ოპტიმალური ანტითრომბოზული თერაპიისთვის.',
    
    // Alert section
    alert_title: 'წინაგულების ფიბრილაციის რისკის შეფასება',
    alert_description: 'მტკიცებულებებით დამოწმებული ინსტრუმენტები ინსულტისა და სისხლდენის რისკის შესაფასებლად AF პაციენტებში ანტიკოაგულაციის ოპტიმიზაციისთვის.',
    alert_badge: 'ვალიდირებული კლინიკური ინსტრუმენტი',
    
    // Tab navigation
    tab_cha2ds2vasc: 'CHA₂DS₂-VASc',
    tab_cha2ds2vasc_subtitle: 'ინსულტის რისკი',
    tab_hasbled: 'HAS-BLED',
    tab_hasbled_subtitle: 'სისხლდენის რისკი',
    
    // Validation messages
    validation: {
      age_required: 'ასაკი აუცილებელია',
      age_range: 'ასაკი უნდა იყოს 18-დან 120 წლამდე',
      sex_required: 'სქესის მითითება აუცილებელია'
    },
    
    // CHA₂DS₂-VASc Calculator
    cha2ds2vasc: {
      title: 'CHA₂DS₂-VASc კალკულატორი',
      description: 'გაძლიერებული რისკის სტრატიფიკაციის ინსტრუმენტი AF პაციენტებში ინსულტის წლიური რისკის შესაფასებლად.',
      
      // Demographics
      age_label: 'ასაკი (წლები)',
      age_placeholder: 'შეიყვანეთ პაციენტის ასაკი',
      age_tooltip: 'პაციენტის ასაკი წლებში: ≥75 წელი = 2 ქულა, 65-74 წელი = 1 ქულა',
      
      sex_label: 'სქესი',
      sex_placeholder: 'აირჩიეთ სქესი',
      sex_tooltip: 'ქალი = 1 ქულა (თუ სხვა რისკ ფაქტორები არსებობს)',
      sex_male: 'მამრობითი',
      sex_female: 'მდედრობითი',
      
      // Risk factors sections
      risk_factors_title: 'რისკ ფაქტორები',
      high_risk_title: 'მაღალი რისკის ფაქტორები',
      
      // Risk factors (1 point each)
      chf_label: 'შეგუბებითი გულის უკმარისობა',
      hypertension_label: 'ჰიპერტენზია',
      diabetes_label: 'შაქრიანი დიაბეტი',
      vascular_disease_label: 'ვასკულარული დაავადება',
      
      // High risk factors (2 points)
      stroke_tia_label: 'ინსულტი, TIA, ან თრომბოემბოლია (2 ქულა)',
      
      // Results
      score_label: 'CHA₂DS₂-VASc ქულა',
      annual_stroke_risk: 'წლიური ინსულტის რისკი',
      recommendation: 'კლინიკური რეკომენდაცია',
      
      // Buttons
      calculate_button: 'CHA₂DS₂-VASc ქულის გამოთვლა',
      reset_button: 'გაწმენდა',
      
      // Recommendations
      no_anticoagulation: 'ანტიკოაგულაცია არ არის რეკომენდირებული - დაბალი ინსულტის რისკი',
      consider_anticoagulation: 'განიხილეთ ანტიკოაგულაცია - საშუალო რისკი',
      anticoagulation_recommended: 'ანტიკოაგულაცია რეკომენდირებულია - მაღალი ინსულტის რისკი',
      
      // Evidence section
      evidence_title: 'მტკიცებულება და ვალიდაცია',
      evidence_origin_title: 'ქულების შემუშავება',
      evidence_origin_description: 'CHA₂DS₂-VASc ქულა შემუშავდა 2010 წელს როგორც CHADS₂ ქულის გაუმჯობესება, დამატებითი ინსულტის რისკ ფაქტორების ჩართვით. იგი მიღებული იყო Euro Heart Survey კოჰორტისგან 5,333 პაციენტისგან, რომლეთაც ჰქონდათ წინაგულების ფიბრილაცია.',
      evidence_validation_title: 'ვალიდაციის კვლევები',
      evidence_validation_description: 'შკალა ფართოდ არის ვალიდირებული მრავალ დიდ კოჰორტაში მსოფლიო მაშტაბით, თანმიმდევრულად აჩვენებს CHADS₂-ზე უკეთეს შედეგს ნამდვილად დაბალი რისკის პაციენტების გამოვლენაში და უკეთესი ინსულტის რისკის სტრატიფიკაციის უზრუნველყოფაში.',
      evidence_guidelines_title: 'გაიდლაინების რეკომენდაციები',
      evidence_guidelines_description: 'CHA₂DS₂-VASc ქულა რეკომენდირებულია ძირითადი საერთაშორისო გაიდლაინებით, მათ შორის 2023 ACC/AHA/ACCP/HRS, 2020 ESC, და 2021 NICE გაიდლაინებით წინაგულების ფიბრილაციაში ინსულტის რისკის შეფასებისთვის.',
      
      // Clinical pearls
      clinical_pearls_title: 'კლინიკური მახასიათებლები',
      clinical_pearl_1: 'მდედრობითი სქესი ინსულტის რისკს წარმოქმნის მხოლოდ ≥1 სხვა ინსულტის რისკ ფაქტორის არსებობისას. CHA₂DS₂-VASc ქულა 1 ქალებში (მხოლოდ სქესის კატეგორია) ითვლება დაბალ რისკად.',
      clinical_pearl_2: 'შკალა საუკეთესოდ მუშაობს ნამდვილად დაბალი რისკის პაციენტების გამოსავლენად (ქულა 0 მამაკაცებში, 1 ქალებში), რომლებსაც შეიძლება არ ჭირდებოდეთ ანტიკოაგულაცია.',
      clinical_pearl_3: 'წლიური ინსულტის რისკი პროგრესულად იზრდება მაღალი ქულის შემთხვევაში, 0.2%-დან ქულა 0-ზე, >10%-მდე ქულებზე ≥7.',
      clinical_pearl_4: 'თუ უკუჩვენება არ არის (DOAC-ები) უპირატესია ვარფარინზე AF-ის მქონე პაციენტების უმრავლესობისთვის, რომლებსაც ესაჭიროებათ ანტიკოაგულაცია.'
    },
    
    // Alternative CHA₂DS₂-VASc key structure for backward compatibility
    chads_vasc: {
      no_anticoagulation: 'ანტიკოაგულაცია არ არის რეკომენდირებული - დაბალი ინსულტის რისკი',
      consider_anticoagulation: 'განიხილეთ ანტიკოაგულაცია - საშუალო რისკი',
      anticoagulation_recommended: 'ანტიკოაგულაცია რეკომენდირებულია - მაღალი ინსულტის რისკი'
    },
    
    // HAS-BLED Calculator  
    has_bled: {
      title: 'HAS-BLED კალკულატორი',
      description: 'სისხლდენის რისკის შეფასების ინსტრუმენტი ანტიკოაგულაციაზე მყოფ AF პაციენტებისთვის.',
      
      // Risk factors
      risk_factors_title: 'HAS-BLED რისკ ფაქტორები',
      
      hypertension_label: 'H - ჰიპერტენზია (არაკონტროლირებადი, >160 მმHg)',
      abnormal_renal_label: 'A - პათოლოგიური თირკმლის ფუნქცია (დიალიზი, კრეატინინი >200 μmol/L)',
      abnormal_liver_label: 'S - პათოლოგიური ღვიძლის ფუნქცია (ღვიძლის ციროზი)',
      stroke_label: 'B - ინსულტი (ანამნეზში)',
      bleeding_label: 'L - სისხლდენა (მნიშვნელოვანი სისხლდენის ანამნეზი)',
      elderly_label: 'E - ხანდაზმული (>65 წელი)',
      drugs_alcohol_label: 'D - მედიკამენტები/ალკოჰოლი (ასპირინი, ალკოჰოლი)',
      
      // Clinical recommendation
      clinical_recommendation: 'კლინიკური რეკომენდაცია',
      
      // Buttons
      calculate_button: 'HAS-BLED ქულის გამოთვლა',
      reset_button: 'გაწმენდა',
      
      // Results
      score_label: 'HAS-BLED ქულა',
      annual_bleeding_risk: 'წლიური სისხლდენის რისკი',
      risk_category: 'რისკის კატეგორია',
      recommendation: 'კლინიკური რეკომენდაცია',
      
      // Risk interpretations
      low_risk: 'დაბალი რისკი (0-1 ქულა)',
      moderate_risk: 'საშუალო რისკი (2 ქულა)',
      high_risk: 'მაღალი რისკი (≥3 ქულა)',
      
      // Clinical recommendations
      recommendation_low: 'ანტიკოაგულაცია უსაფრთხოა - დაბალი სისხლდენის რისკი',
      recommendation_moderate: 'ფრთხილი მონიტორინგი საჭიროა - საშუალო სისხლდენის რისკი',
      recommendation_high: 'ხშირი მონიტორინგი აუცილებელია - მაღალი სისხლდენის რისკი',
      
      // Algorithm validation
      algorithm_validation: 'HAS-BLED ქულა მტკიცებულებებით დამოწმებულია მრავალ კლინიკურ კვლევაში და რეკომენდირებულია ESC გაიდლაინებით ანტიკოაგულაციის სისხლდენის რისკის შესაფასებლად.',
      
      // Clinical notes
      clinical_notes: 'კლინიკური შენიშვნები',
      bleeding_risk_note: 'მაღალი HAS-BLED ქულა არ ნიშნავს ანტიკოაგულაციის უკუჩვენებას, არამედ მიუთითებს ფრთხილი მონიტორინგის საჭიროებაზე.',
      modifiable_factors: 'მოდიფიცირებადი რისკ ფაქტორების მართვა შეიძლება შეამციროს სისხლდენის რისკი.',
      
      // Action buttons
      new_assessment: 'ახალი შეფასება',
      modify_inputs: 'შეცვალეთ მონაცემები'
    },

    // Alternative HAS-BLED key structure for backward compatibility
    hasbled: {
      title: 'HAS-BLED კალკულატორი',
      description: 'სისხლდენის რისკის შეფასების ინსტრუმენტი ანტიკოაგულაციაზე მყოფ AF პაციენტებისთვის.',
      
      // Risk factors
      risk_factors_title: 'HAS-BLED რისკ ფაქტორები',
      
      hypertension_label: 'H - ჰიპერტენზია (არაკონტროლირებადი, >160 მმHg)',
      abnormal_renal_label: 'A - პათოლოგიური თირკმლის ფუნქცია (დიალიზი, კრეატინინი >200 μmol/L)',
      abnormal_liver_label: 'S - პათოლოგიური ღვიძლის ფუნქცია (ღვიძლის ციროზი)',
      stroke_label: 'B - ინსულტი (ანამნეზში)',
      bleeding_label: 'L - სისხლდენა (მნიშვნელოვანი სისხლდენის ანამნეზი)',
      labile_inr_label: 'L - არასტაბილური INR (TTR <60%)',
      elderly_label: 'E - ხანდაზმული (>65 წელი)',
      drugs_label: 'D - მედიკამენტები (antiplatelet agents, NSAIDs)',
      alcohol_label: 'D - ალკოჰოლი (≥8 ალკოჰოლის მიღება კვირაში)',
      
      // Buttons
      calculate_button: 'HAS-BLED ქულის გამოთვლა',
      reset_button: 'გაწმენდა',
      
      // Results
      score_label: 'HAS-BLED ქულა',
      annual_bleeding_risk: 'წლიური სისხლდენის რისკი',
      risk_category: 'რისკის კატეგორია',
      recommendation: 'კლინიკური რეკომენდაცია',
      
      // Risk interpretations
      low_risk: 'დაბალი რისკი (0-1 ქულა)',
      moderate_risk: 'საშუალო რისკი (2 ქულა)',
      high_risk: 'მაღალი რისკი (≥3 ქულა)',
      
      // Action buttons
      new_assessment: 'ახალი შეფასება',
      modify_inputs: 'შეცვალეთ მონაცემები',
      
      // Author Information
      author_title: 'შემქმნელისგან',
      author_name: 'დოქტორი რონ პისტერსი, MD, PhD',
      author_bio: 'დოქტორი რონ პისტერსი არის კარდიოლოგი Rijnstate საავადმყოფოში, ნიდერლანდები, სპეციალიზირებული წინაგულების ფიბრილაციისა და ანტითრომბოტული მენეჯმენტის მიმართულებით.',
      author_key_message_title: 'მთავარი კლინიკური შეტყობინება',
      author_key_message: 'HAS-BLED უნდა გამოიყენებოდეს როგორც კლინიკური ინსტრუმენტი მოდიფიცირებადი სისხლდენის რისკ ფაქტორების გამოსავლენად და მოსაგვარებლად, არა როგორც ანტიკოაგულაციის აბსოლუტური უკუჩვენება. გახსოვდეთ: AF-ის მქონე პაციენტების უმეტესობაში ინსულტის რისკი აღემატება სისხლდენის რისკს.',
      author_pubmed_link: 'იხილეთ დოქტორ რონ პისტერსის პუბლიკაციები PubMed-ზე',
      
      // Formula Section
      formula_title: 'ფორმულა',
      formula_description: 'არჩეული ქულების შეკრება:',
      formula_note: 'HAS-BLED არის აკრონიმი Hypertension (ჰიპერტენზია), Abnormal liver/renal function (ღვიძლის/თირკმლის პათოლოგიური ფუნქცია), Stroke history (ინსულტის ისტორია), Bleeding predisposition (სისხლდენისადმი მიდრეკილება), Labile INR (არასტაბილური INR), Elderly (ხანდაზმულობა), Drug/alcohol usage (წამლების/ალკოჰოლის გამოყენება).',
      
      // Risk Table
      facts_figures_title: 'ფაქტები და ციფრები',
      risk_table_title: 'HAS-BLED შკალის რისკის შეფასება',
      risk_table_score: 'ქულა',
      risk_table_group: 'რისკის ჯგუფი',
      risk_table_major_bleeding: 'დიდი სისხლდენის რისკი**',
      risk_table_bleeds_per_100: 'სისხლდენები 100 პაციენტ-წელზე***',
      risk_table_recommendation: 'რეკომენდაცია',
      
      // Risk Groups
      risk_low: 'დაბალი',
      risk_moderate: 'საშუალო', 
      risk_high: 'მაღალი',
      risk_very_high: 'ძალიან მაღალი',
      
      // Risk Recommendations
      risk_rec_0_1: 'ანტიკოაგულაცია უნდა განიხილებოდეს',
      risk_rec_2: 'ანტიკოაგულაცია შეიძლება განიხილებოდეს',
      risk_rec_3_4: 'ანტიკოაგულაციის ალტერნატივები უნდა განიხილებოდეს',
      risk_rec_5_plus: '5-ზე მეტი ქულები იყო ძალიან იშვიათი რისკის განსასაზღვრად, მაგრამ სავარაუდოდ აღემატება 10%-ს',
      
      // Evidence Section
      evidence_title: 'მტკიცებულებების შეფასება',
      evidence_development: 'HAS-BLED შკალა შემუშავდა 2010 წელს, როგორც პრაქტიკული რისკის შკალა ფირფიტების ფიბრილაციის (AF) მქონე პაციენტებში 1-წლიანი დიდი სისხლდენის რისკის შესაფასებლად. ორიგინალური კვლევა იყენებდა პროსპექტიული Euro Heart Survey on AF-ის მონაცემებს და მოიცავდა 3456 ამბულატორ და ჰოსპიტალიზებულ პაციენტს AF-ით და ერთწლიანი მიდევნების სტატუსით დიდი სისხლდენის მიმართ, და მიტრალური სარქვლის სტენოზის ან სარქვლის ქირურგიის გარეშე.',
      evidence_validation: 'HAS-BLED შკალის მრავალი გარე ვალიდაცია იქნა გამოქვეყნებული. 2020 წლის ქსელური მეტა-ანალიზმა 18 კვლევისა აჩვენა, რომ HAS-BLED არის ყველაზე დაბალანსებული პროგნოსტიკული შკალა დიდი სისხლდენისთვის მგრძნობელობისა და სპეციფიკურობის თვალსაზრისით, სხვა თანამედროვე სკალებთან შედარებით, მათ შორის ABC-bleeding score, ATRIA, European score, GARFIELD-AF, HEMORR₂HAGES, ORBIT, Shireman და mOBRI.',
      evidence_guidelines: 'HAS-BLED შკალის სიმარტივემ და ვრცელმა გარე ვალიდაციებმა გამოიწვია ფართო კლინიკური მიღება, ESC 2020 წლის გაიდლაინები სპეციალურად რეკომენდებას უწევენ HAS-BLED-ს AF პაციენტებში სისხლდენის რისკის შესაფასებლად. თუმცა, უახლესი ESC 2024 წლის გაიდლაინები და 2023 წლის ACC/AHA/ACCP/HRS გაიდლაინები ორივე არ რეკომენდებს კონკრეტულ პროგნოსტიკულ შკალას დიდი სისხლდენისთვის, მითითებით სიზუსტის უნცნობაზე და პოტენციურ ზიანზე არასწორი ანტიკოაგულაციის შემთხვევაში.',
      evidence_limitations: 'ასეთი თავშეკავება, სულ მცირე ნაწილობრივ, განპირობებული იყო იმ ფაქტით, რომ HAS-BLED-ის შკალა შემუშავდა მაშინ, როდესაც პირდაპირი მოქმედების ორალური ანტიკოაგულანტები (DOAC) ახლად შემოდიოდა გამოყენებაში, რაც ეჭვქვეშ აყენებს HAS-BLED-ის პროგნოზულ სიზუსტეს თანამედროვე, DOAC-ების მომხმარებელ პაციენტთა ჯგუფებში. გარდა ამისა, მიუხედავად იმისა, რომ ანტიკოაგულაციური თერაპიის დანიშვნისას ექიმებს ურჩევენ, დააბალანსონ სისხლდენისა და თრომბოემბოლიის რისკები წინაგულთა ფიბრილაციის მქონე პაციენტებში, რეალურ ცხოვრებაში ამ გართულებების შედეგები შესაძლოა არ იყოს თანაბარმნიშვნელოვანი.',
      
      // Reference Links
      reference_original: 'ორიგინალური კვლევა: Pisters და სხვ. (2010)',
      reference_validation: 'ვალიდაციის კვლევა: Lip და სხვ. (2011)',
      reference_guidelines_2020: '2020 ESC გაიდლაინები',
      reference_guidelines_2023: '2023 ACC/AHA/ACCP/HRS გაიდლაინები'
    }
  },

  // PRECISE-DAPT Calculator - COMPLETE GEORGIAN TRANSLATION IMPLEMENTATION
  precise_dapt: {
    title: 'PRECISE-DAPT სისხლდენის რისკის კალკულატორი',
    subtitle: 'სისხლდენის რისკის შეფასება • DAPT ხანგრძლივობის განსაზღვრა',
    description: 'ორმაგ ანტიაგრეგანტულ თერაპიასთან დაკავშირებული სისხლდენის რისკის პროგნოზირება PCI-ის შემდეგ ოპტიმალური ხანგრძლივობის განსასაზღვრათ.',
    
    // Tool description
    bleeding_assessment_tool: 'სისხლდენის რისკის შეფასების ინსტრუმენტი',
    tool_description: 'PRECISE-DAPT კალკულატორი, პროგნოზირებს ორმაგ ანტიაგრეგანტულ თერაპიასთან (DAPT) დაკავშირებულ სისხლდენის რისკებს და განსაზღვრავს PCI-ის შემდეგ ოპტიმალური DAPT თერაპიის ხანგრძლივობას. ეს ვალიდირებული ინსტრუმენტი აბალანსებს სისხლდენის უსაფრთხოებას და იშემიის რისკებს.',
    
    // Step navigation
    patient_labs: 'პაციენტის ლაბორატორიული მონაცემები',
    bleeding_history: 'სისხლდენის ანამნეზი',
    
    // Step 1: Demographics & Lab Values
    demographics_labs_section: 'პაციენტის დემოგრაფია და ლაბორატორიული მონაცემები',
    laboratory_description: 'შეიყვანეთ პაციენტის ასაკი და მთავარი ლაბორატორიული პარამეტრები, რომლებიც გავლენას ახდენენ სისხლდენის რისკზე',
    
    // Form fields
    age_label: 'ასაკი',
    age_error: 'ასაკი უნდა იყოს 18-120 წლის შორის',
    
    creatinine_label: 'შრატის კრეატინინი',
    creatinine_unit: 'მგ/დლ',
    creatinine_error: 'კრეატინინი უნდა იყოს 0.5-15.0 მგ/დლ-ს შორის',
    
    hemoglobin_label: 'ჰემოგლობინი',
    hemoglobin_unit: 'გ/დლ',
    hemoglobin_error: 'ჰემოგლობინი უნდა იყოს 5.0-20.0 გ/დლ-ს შორის',
    
    white_blood_count_label: 'თეთრი უჯრედების რაოდენობა',
    white_blood_count_unit: '×10³/μL',
    white_blood_count_error: 'თეთრი უჯრედების რაოდენობა უნდა იყოს 1.0-50.0 ×10³/μL-ს შორის',
    
    // Step 2: Bleeding History
    bleeding_history_section: 'სისხლდენის ანამნეზის შეფასება',
    bleeding_history_description: 'სისხლდენის ადრინდელი ანამნეზი არის მომავალი სისხლდენის რისკის პროგნოზის ძლიერი მანჩვენებელი',
    
    previous_bleed: 'სისხლდენის ადრინდელი ანამნეზი',
    previous_bleed_desc: 'მნიშვნელოვანი სისხლდენის ანამნეზი, რომელიც საჭიროებდა ჰოსპიტალიზაცის, ტრანსფუზიას ან ქირურგიას',
    
    // Navigation buttons
    next_bleeding_history: 'შემდეგი: სისხლდენის ანამნეზი',
    calculate_button: 'PRECISE-DAPT ქულის გამოთვლა',
    
    // Results section
    bleeding_risk_analysis: 'PRECISE-DAPT სისხლდენის რისკის ანალიზი',
    score_points: '{score} ქულა',
    
    // Risk categories and interpretations
    bleeding_risk: 'სისხლდენის რისკი',
    major_bleeding: 'მნიშვნელოვანი სისხლდენის რისკი',
    safe_duration: 'უსაფრთხო ხანგრძლივობა',
    annual_major_bleeding: 'წლიური მნიშვნელოვანი სისხლდენის რისკი',
    overall_bleeding_risk: 'საერთო სისხლდენის რისკი 12 თვეში: {{risk}}%',
    recommended_dapt_duration: 'რეკომენდირებული DAPT ხანგრძლივობა',
    
    // Risk levels
    low_risk: 'დაბალი რისკი',
    intermediate_risk: 'საშუალო რისკი',
    high_risk: 'მაღალი რისკი',
    
    // Interpretation messages
    interpretation_low: 'დაბალი სისხლდენის რისკი ({{risk}}% 12 თვეში) - შეიძლება განიხილული იქნას ხანგრძლივი DAPT-ი',
    interpretation_intermediate: 'საშუალო სისხლდენის რისკი ({{risk}}% 12 თვეში) - სტანდარტული DAPT-ი ფრთხილი მონიტორინგით',
    interpretation_high: 'მაღალი სისხლდენის რისკი ({{risk}}% 12 თვეში) - განიხილეთ მოკლე DAPT-ის ხანგრძლივობა',
    
    // Risk factors
    contributing_risk_factors: 'ხელის შემწყობი რისკის ფაქტორები',
    risk_factor_advanced_age: 'ხანდაზმულობის ასაკი (≥75 წელი) - მნიშვნელოვნად გაზრდილი სისხლდენის რისკი',
    risk_factor_elderly_age: 'ხანდაზმულობის ასაკი (65-74 წელი) - ზომიერად გაზრდილი სისხლდენის რისკი',
    risk_factor_severe_renal: 'მძიმე თირკმლის უკმარისობა (კრეატინინი ≥2.0 მგ/დლ) - მაღალი სისხლდენის რისკი',
    risk_factor_moderate_renal: 'საშუალო თირკმლის უკმარისობა (კრეატინინი 1.5-1.9 მგ/დლ) - გაზრდილი სისხლდენის რისკი',
    risk_factor_mild_renal: 'მსუბუქი თირკმლის უკმარისობა (კრეატინინი 1.2-1.4 მგ/დლ) - უმნიშვნელოდ გაზრდილი სისხლდენის რისკი',
    risk_factor_severe_anemia: 'მძიმე ანემია (ჰემოგლობინი <10 გ/დლ) - მნიშვნელოვნად გაზრდილი სისხლდენის რისკი და გართულებები',
    risk_factor_moderate_anemia: 'საშუალო ანემია (ჰემოგლობინი 10-11.9 გ/დლ) - გაზრდილი სისხლდენის რისკი',
    risk_factor_low_hemoglobin: 'დაბალი ჰემოგლობინი (ჰემოგლობინი 12-12.9 გ/დლ) - უმნიშვნელოდ გაზრდილი სისხლდენის რისკი',
    risk_factor_elevated_wbc: 'მომატებული თეთრი უჯრედების რაოდენობა (>12 ×10³/μL) - ანთების მარკერი, გაზრდილი სისხლდენის რისკი',
    risk_factor_low_wbc: 'დაბალი თეთრი უჯრედების რაოდენობა (<4 ×10³/μL) - გაზრდილი სისხლდენისა და ინფექციის რისკი',
    risk_factor_previous_bleeding: 'ადრინდელი მნიშვნელოვანი სისხლდენა - მომავალი სისხლდენის მოვლენების ყველაზე ძლიერი მაპროგნოზირებელი ფაქტორი',
    
    // Recommendations by risk level
    recommendation_low: 'ხანგრძლივი DAPT (12-30 თვე) შეიძლება უზრუნველყოს იშემიური სარგებელი მისაღები სისხლდენის რისკით',
    recommendation_intermediate: 'სტანდარტული DAPT ხანგრძლივობა (12 თვე) გაძლიერებული სისხლდენის მონიტორინგითა და რისკ ფაქტორების მოდიფიკაციით',
    recommendation_high: 'განიხილეთ მოკლე DAPT ხანგრძლივობა (3-6 თვე) მომატებული სისხლდენის რისკის გამო, მაგრამ უზრუნველყავით ადეკვატური იშემიური დაცვა',
    
    // Duration guidance
    duration_low: '12-30 თვე მონიტორინგით',
    duration_intermediate: '12 თვე ზედამხედველობით',
    duration_high: '3-6 თვე შეფასებით',
    
    // Clinical guidance
    guidance_low: 'დაბალი სისხლდენის რისკი იძლევა გახანგრძლივებული DAPT-ის განხილვის საშუალებას მაღალი იშემიური რისკის პაციენტებში',
    guidance_intermediate: 'დაბალანსეთ სისხლდენისა და იშემიური რისკები ინდივიდუალური ხანგრძლივობის შეფასებით',
    guidance_high: 'მაღალი სისხლდენის რისკი საჭიროებს მოკლე DAPT ხანგრძლივობისა და სისხლდენის რისკის მოდიფიკაციის განხილვას',
    
    // Clinical benefit
    benefit_low: 'ხელსაყრელი სისხლდენის უსაფრთხოების პროფილი მხარს უჭერს გახანგრძლივებული DAPT-ის განხილვას იშემიური სარგებლისთვის',
    benefit_intermediate: 'ზომიერი სისხლდენის რისკი საჭიროებს ფრთხილ ბალანსს იშემიური დაცვის საჭიროებებთან',
    benefit_high: 'მომატებული სისხლდენის რისკმა შეიძლება შეზღუდოს გახანგრძლივებული DAPT-ის სარგებელი, განიხილეთ ალტერნატიული ანტითრომბოციტული სტრატეგიები',
    
    // Safe duration recommendations
    safe_duration_low: '12-30 თვე მონიტორინგით',
    safe_duration_intermediate: '12 თვე ზედამხედველობით',
    safe_duration_high: '3-6 თვე შეფასებით',
    
    // Clinical sections
    clinical_recommendation: 'კლინიკური რეკომენდაცია',
    clinical_benefit_analysis: 'კლინიკური სარგებლის ანალიზი',
    
    // Score interpretation guide
    score_interpretation: 'PRECISE-DAPT ქულის ინტერპრეტაციის გზამკვლევი',
    score_low_range: 'დაბალი რისკი (<25 ქულა)',
    score_low_description: 'გახანგრძლივებული DAPT შეიძლება იყოს სასარგებლო მისაღები სისხლდენის რისკით',
    score_intermediate_range: 'საშუალო რისკი (25-35 ქულა)',
    score_intermediate_description: 'სტანდარტული DAPT გაძლიერებული მონიტორინგით რეკომენდირებულია',
    score_high_range: 'მაღალი რისკი (≥35 ქულა)',
    score_high_description: 'განიხილეთ მოკლე DAPT მომატებული სისხლდენის რისკის გამო',
    
    // Algorithm validation
    enhanced_algorithm: 'გაძლიერებული PRECISE-DAPT ალგორითმი',
    algorithm_validation: '✓ PRECISE-DAPT კვლევით ვალიდირებული • გაძლიერებული სისხლდენის რისკის შეფასება რაოდენობრივი უსაფრთხოების ანალიზით',
    based_on_precise_dapt: 'PRECISE-DAPT კვლევის საფუძველზე • სისხლდენის რისკის შეფასება DAPT ხანგრძლივობის მიმართულებისთვის',
    bleeding_safety_validated: 'სისხლდენის უსაფრთხოება ვალიდირებული',
    
    // Action buttons
    new_assessment: 'ახალი შეფასება',
    modify_inputs: 'შეცვალეთ მონაცემები'
  },

  // AHA PREVENT™ Calculator - COMPLETE GEORGIAN TRANSLATION IMPLEMENTATION  
  prevent: {
    // Core information
    title: 'AHA PREVENT™ კალკულატორი',
    subtitle: 'მომავალი თაობის კარდიოვასკულარული რისკის შეფასება • CKM ჯანმრთელობის ინტეგრაცია',
    description: 'რევოლუციური რისკის პროგნოზირება კარდიოვასკულარულ-თირკმლოვან-მეტაბოლური (CKM) ჯანმრთელობის ფაქტორების ჩართვით. გაძლიერებული ჯანმრთელობის სოციალური დეტერმინანტებით კომპლექსური 10-წლიანი და 30-წლიანი რისკის შეფასებისთვის.',
    
    // Alert section
    alert_title: 'ამერიკული გულის ასოციაცია PREVENT™',
    alert_description: 'რევოლუციური რისკის პროგნოზირება კარდიოვასკულარულ-თირკმლოვან-მეტაბოლური (CKM) ჯანმრთელობის ფაქტორების ჩართვით. გაძლიერებული ჯანმრთელობის სოციალური დეტერმინანტებით კომპლექსური 10-წლიანი და 30-წლიანი რისკის შეფასებისთვის.',
    alert_badge: 'AHA 2023 - CKM-გაძლიერებული პროგნოზირება',
    
    // Progress steps
    step_demographics: 'დემოგრაფია',
    step_clinical: 'კლინიკური',
    step_lab_values: 'ლაბ. მონაცემები',
    step_ckm_e: 'CKM-E',
    
    // Step navigation titles and descriptions
    step_1_title: 'პირადი ინფორმაცია',
    step_1_description: 'ძირითადი დემოგრაფიული და ანთროპომეტრული მონაცემები',
    step_2_title: 'ლაბორატორიული მონაცემები',
    step_2_description: 'ქოლესტერინის პროფილი და ბიომარკერები',
    step_3_title: 'კლინიკური ფაქტორები',
    step_3_description: 'არტერიული წნევა და სამედიცინო ანამნეზი',
    step_4_title: 'გაძლიერებული ფაქტორები',
    step_4_description: 'არჩევითი CKM-E პარამეტრები (არჩევითი)',
    
    // Progress indicators
    progress_complete: 'დასრულებული',
    progress_of_steps: '4 ნაბიჯიდან დასრულებული',
    
    // Step 1: Demographics
    demographics_title: 'პაციენტის დემოგრაფია',
    demographics_description: 'ძირითადი დემოგრაფიული ინფორმაცია რისკის შეფასებისთვის',
    age_label: 'ასაკი',
    age_placeholder: '45',
    age_help: 'ასაკი წლებში (30-79 PREVENT-ისთვის)',
    sex_label: 'სქესი',
    sex_placeholder: 'აირჩიეთ სქესი...',
    sex_male: 'მამრობითი',
    sex_female: 'მდედრობითი',
    race_label: 'რასა/ეთნიკური კუთვნილება',
    race_placeholder: 'აირჩიეთ რასა/ეთნიკურობა...',
    race_white: 'თეთრი',
    race_black: 'შავი/აფროამერიკელი',
    race_hispanic: 'ესპანური/ლათინო',
    race_asian: 'აზიელი',
    race_other: 'სხვა',
    height_label: 'სიმაღლე',
    height_placeholder: '170',
    weight_label: 'წონა',
    weight_placeholder: '80',
    
    // Step 2: Clinical Assessment
    clinical_title: 'კლინიკური შეფასება',
    clinical_description: 'არტერიული წნევა და კლინიკური რისკ ფაქტორები',
    systolic_bp_label: 'სისტოლური არტერიული წნევა',
    systolic_bp_placeholder: '120',
    diastolic_bp_label: 'დიასტოლური არტერიული წნევა',
    diastolic_bp_placeholder: '80',
    clinical_risk_factors_title: 'კლინიკური რისკ ფაქტორები',
    on_hypertension_meds_label: 'ჰიპერტენზიის მედიკამენტებზე',
    on_hypertension_meds_description: 'ამჟამად იღებს არტერიული წნევის პრეპარატებს',
    antihypertensive_meds_label: 'ანტიჰიპერტენზიული მედიკამენტები',
    antihypertensive_meds_description: 'ამჟამად იღებს არტერიული წნევის პრეპარატებს',
    on_statin_label: 'სტატინების თერაპიაზე',
    on_statin_description: 'ამჟამად იღებს სტატინების პრეპარატებს',
    diabetes_label: 'შაქრიანი დიაბეტი',
    diabetes_description: '1-ლი ან 2-ე ტიპის შაქრიანი დიაბეტი',
    current_smoker_label: 'ამჟამინდელი მწეველი',
    current_smoker_description: 'ამჟამად ეწევა',
    serum_creatinine_label: 'შრატის კრეატინინი',
    serum_creatinine_placeholder: '1.0',
    
    // Step 3: Laboratory Assessment
    lab_title: 'ლაბორატორიული შეფასება',
    lab_description: 'ლიპიდების პროფილი და ქოლესტერინის გაზომვები',
    total_cholesterol_label: 'საერთო ქოლესტერინი',
    total_cholesterol_placeholder: '200',
    hdl_cholesterol_label: 'HDL ქოლესტერინი',
    hdl_cholesterol_placeholder: '50',
    ldl_cholesterol_label: 'LDL ქოლესტერინი',
    ldl_cholesterol_placeholder: '130',
    
    // Step 4: CKM-E Enhanced Factors
    ckm_e_title: 'CKM-E გაძლიერებული ფაქტორები',
    ckm_e_description: 'კარდიოვასკულარულ-თირკმლოვან-მეტაბოლური ჯანმრთელობის გაძლიერების ფაქტორები',
    hba1c_label: 'HbA1c',
    hba1c_placeholder: '6.5',
    egfr_label: 'eGFR',
    egfr_placeholder: '90',
    uacr_label: 'UACR',
    uacr_placeholder: '15',
    sdi_label: 'სოციალური ნაკლებობის ინდექსი',
    sdi_placeholder: '0.3',
    
    // CKM-E Information
    ckm_e_info_title: 'CKM-E გაძლიერების ინფორმაცია',
    egfr_info: 'შეფასებული გლომერულული ფილტრაციის სიჩქარე (თირკმლის ფუნქციის მარკერი)',
    uacr_info: 'შარდში ალბუმინის კრეატინინთან თანაფარდობა (თირკმლის დაზიანების მარკერი)',
    sdi_info: 'სოციალური ნაკლებობის ინდექსი (ჯანმრთელობის სოციალური დეტერმინანტები)',
    
    // Navigation buttons
    next_clinical_factors: 'შემდეგი: კლინიკური ფაქტორები',
    next_laboratory_values: 'შემდეგი: ლაბორატორიული მონაცემები',
    next_ckm_e_factors: 'შემდეგი: CKM-E ფაქტორები',
    back_button: 'უკან',
    calculate_prevent_risk: 'PREVENT რისკის გამოთვლა',
    
    // Results section
    results_title: 'AHA PREVENT™ რისკის ანალიზი',
    ckm_e_enhanced_title: 'CKM-E გაძლიერებული შეფასება',
    ckm_e_enhanced_description: 'გაძლიერებული კარდიოვასკულარულ-თირკმლოვან-მეტაბოლური ფაქტორები აღმოჩენილია - კომპლექსური მონიტორინგი რეკომენდირებულია',
    
    // Risk predictions
    ten_year_predictions_title: '10-წლიანი რისკის პროგნოზები',
    thirty_year_predictions_title: '30-წლიანი რისკის პროგნოზები',
    total_cvd: 'მთლიანი CVD',
    ascvd: 'ASCVD',
    heart_failure: 'გულის უკმარისობა',
    
    // Risk stratification
    risk_stratification_title: 'PREVENT რისკის სტრატიფიკაცია',
    low_risk: 'დაბალი რისკი',
    low_risk_range: '<5% ASCVD',
    borderline_risk: 'საზღვრული',
    borderline_risk_range: '5-7.5% ASCVD',
    intermediate_risk: 'საშუალო',
    intermediate_risk_range: '7.5-20% ASCVD',
    high_risk: 'მაღალი რისკი',
    high_risk_range: '≥20% ASCVD',
    
    // Clinical recommendations
    clinical_recommendations_title: 'კლინიკური მართვის რეკომენდაციები',
    
    // Algorithm validation
    algorithm_title: 'AHA PREVENT™ მოდელი',
    algorithm_description: '✓ AHA 2023 გაიდლაინები • CKM-გაძლიერებული • მაშინური სწავლებით ვალიდირებული • 30-წლიანი პროგნოზები',
    algorithm_2023_title: 'AHA PREVENT™ 2023 ალგორითმი',
    algorithm_implementation_description: 'ეს კალკულატორი ახორციელებს ამერიკული გულის ასოციაციის ოფიციალურ PREVENT™ განტოლებებს (2023):',
    algorithm_feature_1: 'წარმოიშობა 6 მილიონზე მეტი მრავალფეროვანი ინდივიდისგან',
    algorithm_feature_2: 'ითვლის 10-წლიან რისკებს ASCVD, გულის უკმარისობა და საერთო CVD-სთვის',
    algorithm_feature_3: '30-59 წლის ასაკისთვის: ასევე იძლევა 30-წლიან რისკის შეფასებებს',
    algorithm_feature_4: 'შეიცავს ახალ რისკ ფაქტორებს (HbA1C, UACR, SDI) გაძლიერებული შეფასებისთვის',
    algorithm_feature_5: 'BMI და eGFR ითვლება ვალიდირებული განტოლებების გამოყენებით',
    
    // Action buttons
    new_assessment: 'ახალი შეფასება',
    modify_inputs: 'შეცვალეთ მონაცემები',
    
    // Footer
    footer_description: 'AHA PREVENT™ განტოლებების საფუძველზე CKM ჯანმრთელობის ფაქტორებით • მხოლოდ განათლების მიზნებისთვის',
    footer_guidelines: 'AHA 2023 გაიდლაინები',
    
    // Validation messages
    validation_age: 'ასაკი აუცილებელია',
    validation_age_range: 'ასაკი უნდა იყოს 30-79 წლის შორის PREVENT-ისთვის',
    validation_sex: 'სქესი აუცილებელია',
    validation_race: 'რასა/ეთნიკურობა აუცილებელია',
    validation_total_cholesterol: 'საერთო ქოლესტერინი აუცილებელია',
    validation_total_cholesterol_range: 'საერთო ქოლესტერინი უნდა იყოს 100-400 მგ/დლ-ს შორის',
    validation_hdl_cholesterol: 'HDL ქოლესტერინი აუცილებელია',
    validation_hdl_cholesterol_range: 'HDL ქოლესტერინი უნდა იყოს 20-100 მგ/დლ-ს შორის',
    validation_systolic_bp: 'სისტოლური არტ. წნევა აუცილებელია',
    validation_systolic_bp_range: 'სისტოლური არტ. წნევა უნდა იყოს 90-200 მმ ვარდ.სვ.-ს შორის',
    
    // Units
    unit_years: 'წლები',
    unit_mg_dl: 'მგ/დლ',
    unit_mmhg: 'მმ ვარდ.სვ.',
    unit_ml_min: 'მლ/წუთ/1.73მ²',
    unit_mg_g: 'მგ/გ',
    unit_score: 'ქულა',
    unit_cm: 'სმ',
    unit_kg: 'კგ',
    unit_percent: '%',
    
    // Risk categories and prevention strategies
    risk_category: 'რისკის კატეგორია',
    prevention_strategy: 'პრევენციის სტრატეგია',
    standard_prevention: 'სტანდარტული კარდიოვასკულარული პრევენციის მიდგომა',
    comprehensive_ckm: 'კომპლექსური CKM ჯანმრთელობის მიდგომა გაძლიერებული მონიტორინგით',
    
    // Recommendations content
    rec_continue_lifestyle: 'გააგრძელეთ ცხოვრების სტილის ოპტიმიზაცია',
    rec_reassess: 'ხელახალი შეფასება 4-6 წელიწადში',
    rec_risk_enhancers: 'რეკომენდირებულია რისკის გამაძლიერებელი ფაქტორების შეფასება',
    rec_cac_scoring: 'განიხილეთ CAC-ის ღონისძიება გაურკვევლობის შემთხვევაში',
    rec_lifestyle_therapy: 'ცხოვრების სტილის თერაპია აუცილებელია',
    rec_statin_therapy: 'სტატინების თერაპია რეკომენდირებულია',
    rec_cac_refinement: 'განიხილეთ CAC-ის ღონისძიება დახვეწისთვის',
    rec_high_intensity_statin: 'მაღალი ინტენსივობის სტატინების თერაპია რეკომენდირებულია',
    rec_additional_therapies: 'განიხილეთ დამატებითი თერაპიები (ეზეტიმიბი, PCSK9i)',
    rec_aggressive_lifestyle: 'აგრესიული ცხოვრების სტილის მოდიფიკაცია',
    rec_ckm_e_monitoring: 'CKM-E ფაქტორები დადგენილია - გაძლიერებული მონიტორინგი საჭიროა',
    
    // Chart visualization
    ten_year_risk_estimates: '10-წლიანი რისკის შეფასებები',
    thirty_year_risk_estimates: '30-წლიანი რისკის შეფასებები',
    risk_by_age_description: 'რისკის შეფასებები ასაკის მიხედვით იგივე რისკ ფაქტორების მქონე პირებისთვის',
    age_years: 'ასაკი (წლები)',
    risk_percentage: 'რისკი (%)',
    age: 'ასაკი',
    years: 'წლები',
    risk_insights: 'რისკის მიმოხილვა',
    current_age: 'მიმდინარე ასაკი',
    year_total_risk: 'წლიური საერთო რისკი',
    risk_increase_decade: 'რისკის ზრდა/ათწლეული'
  },

  // GWTG-HF Risk Calculator
  gwtg_hf: {
    title: 'GWTG-HF რისკის კალკულატორი',
    subtitle: 'გაიდლაინები მკურნალობისთვის - გულის უკმარისობის რისკის შეფასება'
  }
};