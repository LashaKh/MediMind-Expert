export const vbacSuccessCalculator = {
  title: 'VBAC წარმატების კალკულატორი',
  subtitle: 'ვაგინალური მშობიარობის წარმატების პროგნოზი კეისრული კვეთის შემდეგ',
  assessment_tool: 'პროგნოზის ხელსაწყო',
  tool_description: 'შეაფასეთ კეისრული კვეთის შემდეგ წარმატებული ვაგინალური მშობიარობის (VBAC) ალბათობა მტკიცებულებებზე დაფუძნებული კლინიკური ფაქტორებისა და ვალიდირებული პროგნოზული მოდელების გამოყენებით.',
  based_on_acog: 'ACOG პრაქტიკის ბიულეტენი № 205-ზე დაფუძნებული',
  obstetric_safety_validated: 'სამშობიარო უსაფრთხოება ვალიდირებული',
  about_title: 'VBAC წარმატების პროგნოზის შესახებ',
  
  // Form Labels and Help Text
  maternal_age_label: 'დედის ასაკი',
  maternal_age_unit: 'წლები',
  maternal_age_help: 'დედის მიმდინარე ასაკი წლებში',
  maternal_age_error: 'დედის ასაკი უნდა იყოს 15-55 წლის ფარგლებში',
  maternal_age_placeholder: '25',
  
  bmi_label: 'სხეულის მასის ინდექსი (BMI)',
  bmi_unit: 'კგ/მ²',
  bmi_help: 'ორსულობამდე ან ადრეული ორსულობის BMI',
  bmi_error: 'BMI უნდა იყოს 15-60 კგ/მ² ფარგლებში',
  bmi_placeholder: '24.5',
  
  gestational_age_label: 'ორსულობის ვადა',
  gestational_age_unit: 'კვირები',
  gestational_age_help: 'მშობიარობის დროს ორსულობის მიმდინარე ვადა',
  gestational_age_error: 'ორსულობის ვადა უნდა იყოს 34-42 კვირის ფარგლებში',
  gestational_age_placeholder: '39',
  
  cervical_dilation_label: 'საშვილოსნოს ყელის დილატაცია',
  cervical_dilation_unit: 'სმ',
  cervical_dilation_help: 'საშვილოსნოს ყელის მიმდინარე დილატაცია, თუ ცნობილია',
  cervical_dilation_error: 'საშვილოსნოს ყელის დილატაცია უნდა იყოს 0-10 სმ ფარგლებში',
  cervical_dilation_placeholder: '3',
  
  estimated_fetal_weight_label: 'ნაყოფის სავარაუდო წონა',
  estimated_fetal_weight_unit: 'გ',
  estimated_fetal_weight_help: 'ულტრაბგერითი გამოკვლევით ნაყოფის სავარაუდო წონა',
  estimated_fetal_weight_error: 'ნაყოფის სავარაუდო წონა უნდა იყოს 1000-6000 გრამის ფარგლებში',
  estimated_fetal_weight_placeholder: '3500',
  
  previous_vaginal_delivery_label: 'წინა ვაგინალური მშობიარობა',
  previous_vaginal_delivery_help: 'კეისრული კვეთამდე ან შემდეგ წარმატებული ვაგინალური მშობიარობის ისტორია',
  
  indication_previous_cd_label: 'წინა კეისრული კვეთის ინდიკაცია',
  indication_previous_cd_help: 'წინა კეისრული კვეთის ძირითადი ინდიკაცია',
  indication_non_recurring: 'არაგამეორებადი (მაგ., ягოდичное предлежание, ნაყოფის სტრესი)',
  indication_recurring: 'გამეორებადი (მაგ., ცეფალო-მუჭუნაობის შეუთავსებლობა)',
  indication_unknown: 'უცნობი',
  
  // Step Titles
  maternal_demographics: 'დედის დემოგრაფიული მონაცემები',
  obstetric_history: 'სამშობიარო ისტორია',
  current_pregnancy: 'მიმდინარე ორსულობა',
  
  // Results
  vbac_success_analysis: 'VBAC წარმატების ანალიზი',
  success_probability: 'წარმატების ალბათობა',
  vbac_likelihood: 'VBAC ალბათობა',
  clinical_recommendation: 'კლინიკური რეკომენდაცია',
  uterine_rupture_risk: 'საშვილოსნოს დარღვევის რისკი',
  category: 'კატეგორია',
  recommendation: 'რეკომენდაცია',
  
  // Categories
  excellent_candidate: 'შესანიშნავი VBAC კანდიდატი მაღალი წარმატების ალბათობით',
  good_candidate: 'კარგი VBAC კანდიდატი ხელსაყრელი წარმატების ალბათობით',
  moderate_candidate: 'ზომიერი VBAC კანდიდატი ფრთხილი განხილვის საჭიროებით',
  poor_candidate: 'ცუდი VBAC კანდიდატი - განიხილეთ ელექტიური კეისრული კვეთა',
  
  // Buttons
  calculate_button: 'VBAC წარმატების გამოთვლა',
  new_assessment: 'ახალი შეფასება',
  modify_inputs: 'ინფუთების შეცვლა',
  
  // Risk Categories
  low: 'დაბალი რისკი',
  moderate: 'ზომიერი რისკი', 
  high: 'მაღალი რისკი',
  
  // Recommendation Values
  candidate: 'VBAC კანდიდატი',
  'relative-contraindication': 'ფარდობითი უკუჩვენება',
  contraindication: 'უკუჩვენება',
  
  // Interpretation Templates
  interpretation_template: 'VBAC წარმატების ალბათობა {successProbability}% მიუთითებს {categoryText}. საშვილოსნოს დარღვევის რისკი შეფასებულია {uterineRuptureRisk}%-ზე. ეს პროგნოზი ეყრდნობა ვალიდირებულ კლინიკურ ფაქტორებს, რომლებიც მოიცავს დედის მახასიათებლებს, სამშობიარო ისტორიასა და მიმდინარე მშობიარობის პარამეტრებს.',
  interpretation_high_success: 'წარმატებული ვაგინალური მშობიარობის მაღალი ალბათობა',
  interpretation_moderate_success: 'წარმატების ზომიერი ალბათობა, რაც მოითხოვს ფრთხილ მონიტორინგს',
  interpretation_low_success: 'წარმატების დაბალი ალბათობა - განიხილეთ ინდივიდუალური ფაქტორები და პაციენტის უპირატესობა',
  
  // Counseling Points
  counseling_success_probability: 'წარმატების ალბათობა: {percentage}%',
  counseling_uterine_rupture_risk: 'საშვილოსნოს დარღვევის რისკი: {percentage}%',
  counseling_rupture_signs: 'საშვილოსნოს დარღვევის ნიშნები: მწვავე მუცლის ტკივილი, ნაყოფის გულისცემის არანორმალური რიტმი',
  counseling_emergency_cesarean: 'გადაუდებელი კეისრული მშობიარობა შეიძლება აუცილებელი გახდეს',
  counseling_complications_risk: 'სისხლის გადასხმისა და ჰისტერექტომიის რისკი დარღვევის შემთხვევაში',
  
  // Recommendations
  rec_vbac_strongly_recommended: 'VBAC მცდელობა მნიშვნელოვნად რეკომენდებულია - წარმატების მაღალი ალბათობა',
  rec_continuous_monitoring: 'მუდმივი ნაყოფის მონიტორინგი მშობიარობის დროს',
  rec_emergency_access: 'უზრუნველყავით გადაუდებელი კეისრულ მშობიარობაზე წვდომა',
  rec_epidural_anesthesia: 'განიხილეთ ეპიდურალური ანესთეზია ოპტიმალური ტკივილის მართვისთვის',
  rec_regular_assessment: 'მშობიარობის პროგრესის რეგულარული შეფასება',
  rec_vbac_reasonable: 'VBAC მცდელობა გონივრული ვარიანტია შესაბამისი კონსულტაციით',
  rec_detailed_discussion: 'რისკებისა და სარგებლის დეტალური განხილვა პაციენტთან',
  rec_close_monitoring: 'მშობიარობის პროგრესისა და ნაყოფის მდგომარეობის მჭიდრო მონიტორინგი',
  rec_low_threshold: 'დაბალი ბარიერი განმეორებითი კეისრულისთვის გართულებების შემთხვევაში',
  rec_operating_room: 'უზრუნველყავით ოპერაციული ოთახის ხელმისაწვდომობა მშობიარობის განმავლობაში',
  rec_elective_repeat: 'განიხილეთ ელექტიური განმეორებითი კეისრული მშობიარობა',
  rec_enhanced_monitoring: 'VBAC მცდელობის შემთხვევაში საჭიროა გაძლიერებული მონიტორინგი',
  rec_informed_consent: 'დეტალური ინფორმირებული თანხმობა გაზრდილი რისკების შესახებ',
  rec_surgical_team: 'ქირურგიული გუნდის დაუყოვნებელი ხელმისაწვდომობა',
  rec_tertiary_center: 'განიხილეთ გადაყვანა მესამე დონის ცენტრში საჭიროების შემთხვევაში',
  rec_type_screen: 'სისხლის ჯგუფის განსაზღვრა და სკრინინგი აუცილებელია',
  rec_iv_access: 'ვენური ხაზის დაყენება მიღებისას',
  rec_anesthesia_consult: 'ანესთეზიოლოგის კონსულტაცია მშობიარობის დაგეგმვისთვის',
  rec_pediatric_team: 'პედიატრიული გუნდის შეტყობინება მშობიარობისთვის',
  rec_document_counseling: 'კონსულტაციისა და პაციენტის უპირატესობების დოკუმენტირება',
  rec_shoulder_dystocia: 'კეფის დისტოციის რისკის გაძლიერებული მონიტორინგი მაკროსომიის შემთხვევაში',
  rec_cesarean_macrosomia: 'განიხილეთ კეისრული მშობიარობა ნაყოფის სავარაუდო წონის ≥4500გ შემთხვევაში',
  rec_obesity_anesthesia: 'ანესთეზიოლოგის კონსულტაცია სიმსუქნესთან დაკავშირებული კონსიდერაციებისთვის',
  rec_obesity_complications: 'სიმსუქნესთან დაკავშირებული გართულებების გაძლიერებული მონიტორინგი',
  rec_advanced_age_surveillance: 'გაძლიერებული ზედამხედველობა მოწინავე მატერნალური ასაკისთვის',
  rec_maternal_monitoring: 'მჭიდრო მატერნალური მონიტორინგი ასაკთან დაკავშირებული გართულებებისთვის',
  
  clinical_considerations: 'კლინიკური განსაზღვრებები',
  consideration_1: 'ინდივიდუალური პაციენტის კონსულტაცია უნდა მოიცავდეს პირად უპირატესობებსა და რისკის შემწყნარებლობას',
  consideration_2: 'მშობიარობის მცდელობა მოითხოვს შესაბამის მონიტორინგსა და კეისრული მშობიარობის დაუყოვნებელ შესაძლებლობას',
  consideration_3: 'წარმატების მაჩვენებლები განსხვავდება ინსტიტუციური ფაქტორებისა და მიმწოდებლის გამოცდილების მიხედვით',
  consideration_4: 'ეს ხელსაწყო უზრუნველყოფს, მაგრამ არ ცვლის ყოვლისმომცველ კლინიკურ შეფასებას',
  
  // Professional Guidelines
  professional_guidelines: 'პროფესიული გაიდლაინები',
  acog_practice_bulletin: 'ACOG პრაქტიკის ბიულეტენი № 205: კეისრული კვეთის შემდეგ ვაგინალური მშობიარობა',
  maternal_fetal_medicine: 'დედა-ნაყოფის მედიცინის საზოგადოების კონსენსუსის განცხადებები',
  validation_studies: 'გრობმანის და სხვ. VBAC პროგნოზის მოდელის ვალიდაციის კვლევები',
  
  clinical_validation: 'კლინიკური ვალიდაცია',
  clinical_validation_description: 'ფართოდ ვალიდირებული პროგნოზული მოდელი მტკიცებულებიანი სიზუსტით მრავალფეროვან პაციენტთა პოპულაციებსა და კლინიკურ პირობებში VBAC წარმატების პროგნოზისთვის.',
  
  // References
  ref_acog_bulletin: 'ACOG პრაქტიკის ბიულეტენი № 205: კეისრული კვეთის შემდეგ ვაგინალური მშობიარობა',
  ref_grobman_model: 'გრობმანი WA, და სხვ. კეისრული კვეთის შემდეგ ვაგინალური მშობიარობის პროგნოზის ნომოგრამის განვითარება. Obstet Gynecol. 2007;109(4):806-12',
  ref_cochrane_review: 'კოქრეინის მიმოხილვა: დაგეგმილი კეისრული კვეთა ქალებისთვის კეისრული ნაწიბურით',
  ref_who_recommendations: 'WHO განცხადება კეისრული კვეთის მაჩვენებლების შესახებ',
}; 