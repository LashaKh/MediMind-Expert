export const obgynCalculators = {
  // VBAC წარმატების კალკულატორი
  vbac_success: {
    title: 'VBAC წარმატების კალკულატორი',
    subtitle: 'საკეისროსექციის შემდეგ ვაგინალური მშობიარობის წარმატების პროგნოზირება',
    description: 'VBAC-ის წარმატების მტკიცებულებებზე დაფუძნებული პროგნოზირება დედობრივი და აკუშერული ფაქტორების გამოყენებით',
    
    // დემოგრაფია
    maternal_demographics: 'დედობრივი დემოგრაფია',
    maternal_age_label: 'დედის ასაკი (წლები)',
    maternal_age_placeholder: 'შეიყვანეთ დედის ასაკი',
    maternal_age_help: 'დედის ასაკი VBAC-ის წარმატების მნიშვნელოვანი ფაქტორია',
    
    // აკუშერული ისტორია
    obstetric_history: 'აკუშერული ანამნეზი',
    prior_cesareans_label: 'წინა საკეისროკვეთების რაოდენობა',
    prior_cesareans_placeholder: 'შეიყვანეთ რაოდენობა (1-3)',
    prior_cesareans_help: 'წინა საკეისროსექციების რაოდენობა აფასებს რისკს',
    
    indication_previous_cd_label: 'წინა საკეისროკვეთის ჩვენება',
    indication_ftp: 'პროგრესის არარსებობა',
    indication_breech: 'ჰანდახან წარდგენა',
    indication_fetal_distress: 'ნაყოფის დისტრესი',
    indication_other: 'სხვა ჩვენება',
    
    prior_vaginal_delivery_label: 'წინა ვაგინალური მშობიარობა',
    vbac_history_label: 'წინა წარმატებული VBAC',
    
    // მიმდინარე ორსულობა
    current_pregnancy: 'მიმდინარე ორსულობა',
    gestational_age_label: 'გესტაციური ასაკი (კვირები)',
    gestational_age_placeholder: 'შეიყვანეთ გესტაციური ასაკი',
    gestational_age_help: 'მიმდინარე ორსულობის გესტაციური ასაკი',
    
    estimated_fetal_weight_label: 'ნაყოფის სავარაუდო წონა (გრამი)',
    estimated_fetal_weight_placeholder: 'შეიყვანეთ სავარაუდო წონა',
    estimated_fetal_weight_help: 'ნაყოფის წონა გავლენას ახდენს VBAC-ის წარმატებაზე',
    
    // მშობიარობის მახასიათებლები
    labor_characteristics: 'მშობიარობის მახასიათებლები',
    spontaneous_labor_label: 'სპონტანური მშობიარობის დაწყება',
    cervical_dilation_label: 'საშვილოსნოს ყელის გაფართოება მიღებისას (სმ)',
    cervical_dilation_placeholder: 'შეიყვანეთ გაფართოება (0-10 სმ)',
    cervical_dilation_help: 'საშვილოსნოს ყელის გაფართოება მიღებისას',
    
    // შედეგები
    vbac_success_probability: 'VBAC წარმატების ალბათობა',
    risk_assessment: 'რისკის შეფასება',
    counseling_points: 'კონსულტირების პუნქტები',
    
    low_success: 'დაბალი წარმატების ალბათობა (<60%)',
    moderate_success: 'საშუალო წარმატების ალბათობა (60-80%)',
    high_success: 'მაღალი წარმატების ალბათობა (>80%)',
    
    detailed_counseling: 'დეტალური კონსულტირება რეკომენდებულია',
    appropriate_candidate: 'შესაფერისი VBAC კანდიდატი',
    consider_risks_benefits: 'განიხილეთ ინდივიდუალური რისკები და სარგებელი',
    
    // ღილაკები
    calculate_button: 'VBAC წარმატების გამოთვლა',
    new_assessment: 'ახალი შეფასება',
    modify_inputs: 'შეცვლა',
    
    // ვალიდაცია
    age_error: 'დედის ასაკი უნდა იყოს 15-50 წლის შორის',
    cesareans_error: 'წინა საკეისროკვეთები უნდა იყოს 1-3-ს შორის',
    gestational_age_error: 'გესტაციური ასაკი უნდა იყოს 24-42 კვირის შორის',
    fetal_weight_error: 'ნაყოფის სავარაუდო წონა უნდა იყოს 500-6000 გრამს შორის',
    dilation_error: 'საშვილოსნოს ყელის გაფართოება უნდა იყოს 0-10 სმ-ს შორის'
  },
  
  // ბიშოპის ქულების კალკულატორი
  bishop_score: {
    title: 'ბიშოპის ქულების კალკულატორი',
    subtitle: 'საშვილოსნოს ყელის შეფასება მშობიარობის ინდუქციისთვის',
    description: 'საშვილოსნოს ყელის მზაობის შეფასება ბიშოპის სისტემის გამოყენებით მშობიარობის ინდუქციისთვის',
    
    // საშვილოსნოს ყელის შეფასება
    cervical_assessment: 'საშვილოსნოს ყელის შეფასება',
    
    cervical_dilation_label: 'საშვილოსნოს ყელის გაფართოება (სმ)',
    cervical_dilation_help: 'საშვილოსნოს ყელის გაღების ხარისხი სანტიმეტრებში',
    cervical_dilation_error: 'გაფართოება უნდა იყოს 0-10 სმ-ს შორის',
    cervical_dilation_0: 'დახურული (0 სმ)',
    cervical_dilation_1_2: '1-2 სმ',
    cervical_dilation_3_4: '3-4 სმ',
    cervical_dilation_5_plus: '5+ სმ',
    
    cervical_effacement_label: 'საშვილოსნოს ყელის ეფასმენტი (%)',
    cervical_effacement_help: 'საშვილოსნოს ყელის გათხელების პროცენტი',
    cervical_effacement_error: 'ეფასმენტი უნდა იყოს 0-100%-ს შორის',
    cervical_effacement_0_30: '0-30%',
    cervical_effacement_40_50: '40-50%',
    cervical_effacement_60_70: '60-70%',
    cervical_effacement_80_plus: '80%+',
    
    cervical_consistency_label: 'საშვილოსნოს ყელის კონსისტენცია',
    cervical_consistency_help: 'საშვილოსნოს ყელის ქსოვილის სიმკვრივე',
    cervical_consistency_firm: 'მყარი',
    cervical_consistency_medium: 'საშუალო',
    cervical_consistency_soft: 'რბილი',
    
    cervical_position_label: 'საშვილოსნოს ყელის პოზიცია',
    cervical_position_help: 'საშვილოსნოს ყელის ანატომიური მდგომარეობა',
    cervical_position_posterior: 'უკანა',
    cervical_position_mid: 'შუა მდგომარეობა',
    cervical_position_anterior: 'წინა',
    
    fetal_station_label: 'ნაყოფის სადგური',
    fetal_station_help: 'ნაყოფის წარმომადგენელი ნაწილის მდგომარეობა იშიაკურ ხერხემლის თანაფარდობაში',
    fetal_station_error: 'ნაყოფის სადგური უნდა იყოს -3-დან +3-მდე',
    fetal_station_unit: 'სადგური',
    
    // შედეგები
    bishop_score_analysis: 'ბიშოპის ქულების ანალიზი',
    total_score: 'სრული ქულა',
    score_points: '{score}/13 ქულა',
    induction_success: 'ინდუქციის წარმატება',
    labor_likelihood: 'მშობიარობის ალბათობა',
    cesarean_risk: 'საკეისროკვეთის რისკი',
    clinical_recommendation: 'კლინიკური რეკომენდაცია',
    evidence_base: 'მტკიცებულების ბაზა',
    
    // კატეგორიები
    unfavorable_cervix: 'არახელსაყრელი საშვილოსნოს ყელი',
    intermediate_cervix: 'შუალედური საშვილოსნოს ყელი',
    favorable_cervix: 'ხელსაყრელი საშვილოსნოს ყელი',
    very_favorable_cervix: 'ძალიან ხელსაყრელი საშვილოსნოს ყელი',
    
    // ღილაკები
    calculate_button: 'ბიშოპის ქულების გამოთვლა',
    new_assessment: 'ახალი შეფასება',
    modify_inputs: 'შეცვლა'
  },
  
  // საშვილოსნოს კიბოს რისკის კალკულატორი
  endometrial_cancer_risk: {
    title: 'საშვილოსნოს კიბოს რისკის კალკულატორი',
    subtitle: 'საშვილოსნოს კიბოს სიცოცხლისმანძილზე რისკის შეფასება',
    description: 'მტკიცებულებებზე დაფუძნებული საშვილოსნოს კიბოს სიცოცხლისმანძილზე რისკის გამოთვლა კლინიკური რისკ-ფაქტორებისა და სამედიცინო ლიტერატურის გამოყენებით',
    
    // დემოგრაფია
    demographics: 'დემოგრაფია',
    age_label: 'ასაკი (წლები)',
    age_placeholder: 'შეიყვანეთ პაციენტის ასაკი (18-100 წელი)',
    age_help: 'ასაკი მნიშვნელოვანი რისკ-ფაქტორია საშვილოსნოს კიბოსთვის',
    
    // ფიზიკური მახასიათებლები
    physical_characteristics: 'ფიზიკური მახასიათებლები',
    bmi_label: 'სხეულის მასის ინდექსი (BMI)',
    bmi_placeholder: 'შეიყვანეთ BMI (15-60 კგ/მ²)',
    bmi_help: 'სიმსუქნე მნიშვნელოვანი რისკ-ფაქტორია საშვილოსნოს კიბოსთვის',
    
    // რეპროდუქციული ისტორია
    reproductive_history: 'რეპროდუქციული ანამნეზი',
    parity_label: 'პარიტეტი (ცოცხალი დაბადებების რაოდენობა)',
    parity_placeholder: 'შეიყვანეთ ცოცხალი დაბადებების რაოდენობა',
    nulliparous: 'ნულიპარა (ცოცხალი დაბადებების გარეშე)',
    parous: 'პარა (ერთი ან მეტი ცოცხალი დაბადება)',
    nulliparity_label: 'ნულიპარიტეტი',
    nulliparity_help: 'ცოცხალი დაბადების არარსებობა ზრდის რისკს',
    
    // სამედიცინო ისტორია
    medical_history: 'სამედიცინო ანამნეზი',
    diabetes_label: 'შაქრიანი დიაბეტი',
    diabetes_help: 'დიაბეტი ზრდის საშვილოსნოს კიბოს რისკს',
    hypertension_label: 'ჰიპერტენზია',
export const obgynCalculators = {
  // VBAC წარმატების კალკულატორი
  vbac_success: {
    title: 'VBAC წარმატების კალკულატორი',
    subtitle: 'საკეისროსექციის შემდეგ ვაგინალური მშობიარობის წარმატების პროგნოზირება',
    description: 'VBAC-ის წარმატების მტკიცებულებებზე დაფუძნებული პროგნოზირება დედობრივი და აკუშერული ფაქტორების გამოყენებით',
    
    // დემოგრაფია
    maternal_demographics: 'დედობრივი დემოგრაფია',
    maternal_age_label: 'დედის ასაკი (წლები)',
    maternal_age_placeholder: 'შეიყვანეთ დედის ასაკი',
    maternal_age_help: 'დედის ასაკი VBAC-ის წარმატების მნიშვნელოვანი ფაქტორია',
    
    // აკუშერული ისტორია
    obstetric_history: 'აკუშერული ანამნეზი',
    prior_cesareans_label: 'წინა საკეისროკვეთების რაოდენობა',
    prior_cesareans_placeholder: 'შეიყვანეთ რაოდენობა (1-3)',
    prior_cesareans_help: 'წინა საკეისროსექციების რაოდენობა აფასებს რისკს',
    
    indication_previous_cd_label: 'წინა საკეისროკვეთის ჩვენება',
    indication_ftp: 'პროგრესის არარსებობა',
    indication_breech: 'ჰანდახან წარდგენა',
    indication_fetal_distress: 'ნაყოფის დისტრესი',
    indication_other: 'სხვა ჩვენება',
    
    prior_vaginal_delivery_label: 'წინა ვაგინალური მშობიარობა',
    vbac_history_label: 'წინა წარმატებული VBAC',
    
    // მიმდინარე ორსულობა
    current_pregnancy: 'მიმდინარე ორსულობა',
    gestational_age_label: 'გესტაციური ასაკი (კვირები)',
    gestational_age_placeholder: 'შეიყვანეთ გესტაციური ასაკი',
    gestational_age_help: 'მიმდინარე ორსულობის გესტაციური ასაკი',
    
    estimated_fetal_weight_label: 'ნაყოფის სავარაუდო წონა (გრამი)',
    estimated_fetal_weight_placeholder: 'შეიყვანეთ სავარაუდო წონა',
    estimated_fetal_weight_help: 'ნაყოფის წონა გავლენას ახდენს VBAC-ის წარმატებაზე',
    
    // მშობიარობის მახასიათებლები
    labor_characteristics: 'მშობიარობის მახასიათებლები',
    spontaneous_labor_label: 'სპონტანური მშობიარობის დაწყება',
    cervical_dilation_label: 'საშვილოსნოს ყელის გაფართოება მიღებისას (სმ)',
    cervical_dilation_placeholder: 'შეიყვანეთ გაფართოება (0-10 სმ)',
    cervical_dilation_help: 'საშვილოსნოს ყელის გაფართოება მიღებისას',
    
    // შედეგები
    vbac_success_probability: 'VBAC წარმატების ალბათობა',
    risk_assessment: 'რისკის შეფასება',
    counseling_points: 'კონსულტირების პუნქტები',
    
    low_success: 'დაბალი წარმატების ალბათობა (<60%)',
    moderate_success: 'საშუალო წარმატების ალბათობა (60-80%)',
    high_success: 'მაღალი წარმატების ალბათობა (>80%)',
    
    detailed_counseling: 'დეტალური კონსულტირება რეკომენდებულია',
    appropriate_candidate: 'შესაფერისი VBAC კანდიდატი',
    consider_risks_benefits: 'განიხილეთ ინდივიდუალური რისკები და სარგებელი',
    
    // ღილაკები
    calculate_button: 'VBAC წარმატების გამოთვლა',
    new_assessment: 'ახალი შეფასება',
    modify_inputs: 'შეცვლა',
    
    // ვალიდაცია
    age_error: 'დედის ასაკი უნდა იყოს 15-50 წლის შორის',
    cesareans_error: 'წინა საკეისროკვეთები უნდა იყოს 1-3-ს შორის',
    gestational_age_error: 'გესტაციური ასაკი უნდა იყოს 24-42 კვირის შორის',
    fetal_weight_error: 'ნაყოფის სავარაუდო წონა უნდა იყოს 500-6000 გრამს შორის',
    dilation_error: 'საშვილოსნოს ყელის გაფართოება უნდა იყოს 0-10 სმ-ს შორის'
  },
  
  // ბიშოპის ქულების კალკულატორი
  bishop_score: {
    title: 'ბიშოპის ქულების კალკულატორი',
    subtitle: 'საშვილოსნოს ყელის შეფასება მშობიარობის ინდუქციისთვის',
    description: 'საშვილოსნოს ყელის მზაობის შეფასება ბიშოპის სისტემის გამოყენებით მშობიარობის ინდუქციისთვის',
    
    // საშვილოსნოს ყელის შეფასება
    cervical_assessment: 'საშვილოსნოს ყელის შეფასება',
    
    cervical_dilation_label: 'საშვილოსნოს ყელის გაფართოება (სმ)',
    cervical_dilation_help: 'საშვილოსნოს ყელის გაღების ხარისხი სანტიმეტრებში',
    cervical_dilation_error: 'გაფართოება უნდა იყოს 0-10 სმ-ს შორის',
    cervical_dilation_0: 'დახურული (0 სმ)',
    cervical_dilation_1_2: '1-2 სმ',
    cervical_dilation_3_4: '3-4 სმ',
    cervical_dilation_5_plus: '5+ სმ',
    
    cervical_effacement_label: 'საშვილოსნოს ყელის ეფასმენტი (%)',
    cervical_effacement_help: 'საშვილოსნოს ყელის გათხელების პროცენტი',
    cervical_effacement_error: 'ეფასმენტი უნდა იყოს 0-100%-ს შორის',
    cervical_effacement_0_30: '0-30%',
    cervical_effacement_40_50: '40-50%',
    cervical_effacement_60_70: '60-70%',
    cervical_effacement_80_plus: '80%+',
    
    cervical_consistency_label: 'საშვილოსნოს ყელის კონსისტენცია',
    cervical_consistency_help: 'საშვილოსნოს ყელის ქსოვილის სიმკვრივე',
    cervical_consistency_firm: 'მყარი',
    cervical_consistency_medium: 'საშუალო',
    cervical_consistency_soft: 'რბილი',
    
    cervical_position_label: 'საშვილოსნოს ყელის პოზიცია',
    cervical_position_help: 'საშვილოსნოს ყელის ანატომიური მდგომარეობა',
    cervical_position_posterior: 'უკანა',
    cervical_position_mid: 'შუა მდგომარეობა',
    cervical_position_anterior: 'წინა',
    
    fetal_station_label: 'ნაყოფის სადგური',
    fetal_station_help: 'ნაყოფის წარმომადგენელი ნაწილის მდგომარეობა იშიაკურ ხერხემლის თანაფარდობაში',
    fetal_station_error: 'ნაყოფის სადგური უნდა იყოს -3-დან +3-მდე',
    fetal_station_unit: 'სადგური',
    
    // შედეგები
    bishop_score_analysis: 'ბიშოპის ქულების ანალიზი',
    total_score: 'სრული ქულა',
    score_points: '{score}/13 ქულა',
    induction_success: 'ინდუქციის წარმატება',
    labor_likelihood: 'მშობიარობის ალბათობა',
    cesarean_risk: 'საკეისროკვეთის რისკი',
    clinical_recommendation: 'კლინიკური რეკომენდაცია',
    evidence_base: 'მტკიცებულების ბაზა',
    
    // კატეგორიები
    unfavorable_cervix: 'არახელსაყრელი საშვილოსნოს ყელი',
    intermediate_cervix: 'შუალედური საშვილოსნოს ყელი',
    favorable_cervix: 'ხელსაყრელი საშვილოსნოს ყელი',
    very_favorable_cervix: 'ძალიან ხელსაყრელი საშვილოსნოს ყელი',
    
    // ღილაკები
    calculate_button: 'ბიშოპის ქულების გამოთვლა',
    new_assessment: 'ახალი შეფასება',
    modify_inputs: 'შეცვლა'
  },
  
  // საშვილოსნოს კიბოს რისკის კალკულატორი
  endometrial_cancer_risk: {
    title: 'საშვილოსნოს კიბოს რისკის კალკულატორი',
    subtitle: 'საშვილოსნოს კიბოს სიცოცხლისმანძილზე რისკის შეფასება',
    description: 'მტკიცებულებებზე დაფუძნებული საშვილოსნოს კიბოს სიცოცხლისმანძილზე რისკის გამოთვლა კლინიკური რისკ-ფაქტორებისა და სამედიცინო ლიტერატურის გამოყენებით',
    
    // დემოგრაფია
    demographics: 'დემოგრაფია',
    age_label: 'ასაკი (წლები)',
    age_placeholder: 'შეიყვანეთ პაციენტის ასაკი (18-100 წელი)',
    age_help: 'ასაკი მნიშვნელოვანი რისკ-ფაქტორია საშვილოსნოს კიბოსთვის',
    
    // ფიზიკური მახასიათებლები
    physical_characteristics: 'ფიზიკური მახასიათებლები',
    bmi_label: 'სხეულის მასის ინდექსი (BMI)',
    bmi_placeholder: 'შეიყვანეთ BMI (15-60 კგ/მ²)',
    bmi_help: 'სიმსუქნე მნიშვნელოვანი რისკ-ფაქტორია საშვილოსნოს კიბოსთვის',
    
    // რეპროდუქციული ისტორია
    reproductive_history: 'რეპროდუქციული ანამნეზი',
    parity_label: 'პარიტეტი (ცოცხალი დაბადებების რაოდენობა)',
    parity_placeholder: 'შეიყვანეთ ცოცხალი დაბადებების რაოდენობა',
    nulliparous: 'ნულიპარა (ცოცხალი დაბადებების გარეშე)',
    parous: 'პარა (ერთი ან მეტი ცოცხალი დაბადება)',
    nulliparity_label: 'ნულიპარიტეტი',
    nulliparity_help: 'ცოცხალი დაბადების არარსებობა ზრდის რისკს',
    
    // სამედიცინო ისტორია
    medical_history: 'სამედიცინო ანამნეზი',
    diabetes_label: 'შაქრიანი დიაბეტი',
    diabetes_help: 'დიაბეტი ზრდის საშვილოსნოს კიბოს რისკს',
    hypertension_label: 'ჰიპერტენზია',
    hypertension_help: 'მაღალი არტერიული წნევა',
    pcos_label: 'პოლიკისტოზური საკვერცხე სინდრომი (PCOS)',
    pcos_help: 'PCOS ზრდის ჰორმონალურ რისკს',
    endometrial_hyperplasia_label: 'საშვილოსნოს ჰიპერპლაზიის ისტორია',
    endometrial_hyperplasia_help: 'საშვილოსნოს ჰიპერპლაზია პრეკანცერული მდგომარეობაა',
    late_menopause_label: 'გვიანი მენოპაუზა (>55 წელი)',
    late_menopause_help: 'გვიანი მენოპაუზა ზრდის ესტროგენის ზემოქმედებას',
    
    // ოჯახური ისტორია
    family_history: 'ოჯახური ანამნეზი',
    family_history_endometrial_label: 'საშვილოსნოს კიბოს ოჯახური ისტორია',
    family_history_endometrial_help: 'ოჯახში საშვილოსნოს კიბოს შემთხვევები',
    family_history_colorectal_label: 'კოლორექტალური კიბოს ოჯახური ისტორია',
    family_history_colorectal_help: 'ლინჩის სინდრომის ინდიკატორი',
    lynch_syndrome_label: 'ცნობილი ლინჩის სინდრომი',
    lynch_syndrome_help: 'მემკვიდრეობითი ღია უჯრედის კიბოს სინდრომი',
    family_history_label: 'ოჯახური ისტორია (საშვილოსნოს ან კოლორექტალური კიბო)',
    
    // ჰორმონალური ფაქტორები
    hormonal_factors: 'ჰორმონალური ფაქტორები',
    hrt_use_label: 'ჰორმონალური შემცვლელი თერაპიის გამოყენება',
    hrt_use_help: 'ესტროგენის შემცვლელი თერაპია',
    tamoxifen_use_label: 'ტამოქსიფენის გამოყენება',
    tamoxifen_use_help: 'ტამოქსიფენი ზრდის საშვილოსნოს კიბოს რისკს',
    oral_contraceptive_use_label: 'ორალური კონტრაცეპტივების გამოყენება',
    oral_contraceptive_use_help: 'ხანგრძლივი გამოყენება იცავს რისკისგან',
    unopposed_estrogen_label: 'ოპოზიციური ესტროგენი',
    unopposed_estrogen_help: 'ესტროგენი პროგესტეროლის გარეშე',
    
    // შედეგები
    lifetime_risk: 'სიცოცხლისმანძილზე რისკი',
    risk_category: 'რისკის კატეგორია',
    risk_assessment: 'რისკის შეფასება',
    recommendations: 'კლინიკური რეკომენდაციები',
    screening_recommendations: 'სკრინინგის რეკომენდაციები',
    clinical_management: 'კლინიკური მენეჯმენტი',
    
    // რისკის კატეგორიები
    average_risk: 'საშუალო რისკი',
    increased_risk: 'გაზრდილი რისკი',
    high_risk: 'მაღალი რისკი',
    very_high_risk: 'ძალიან მაღალი რისკი (ლინჩის სინდრომი)',
    
    // რეკომენდაციები
    routine_screening: 'რუტინული სკრინინგი გაიდლაინების მიხედვით',
    enhanced_surveillance: 'განძლიერებული ზედამხედველობის განხილვა',
    genetic_counseling: 'გენეტიკური კონსულტირება რეკომენდებულია',
    specialist_referral: 'სპეციალისტთან მიმართვა რეკომენდებულია',
    lifestyle_modifications: 'ცხოვრების წესის მოდიფიკაციები',
    weight_management: 'წონის მენეჯმენტი',
    
    // ღილაკები
    calculate_button: 'რისკის გამოთვლა',
    calculate_risk: 'რისკის გამოთვლა',
    new_assessment: 'ახალი შეფასება',
    modify_inputs: 'მონაცემების შეცვლა',
    
    // ვალიდაცია
    age_error: 'ასაკი უნდა იყოს 18-100 წლის შორის',
    bmi_error: 'BMI უნდა იყოს 15-60 კგ/მ²-ს შორის',
    parity_error: 'პარიტეტი უნდა იყოს 0 ან მეტი',
    
    // დამატებითი ინფორმაცია
    risk_factors_analysis: 'რისკ-ფაქტორების ანალიზი',
    modifiable_factors: 'ცვლადი ფაქტორები',
    non_modifiable_factors: 'უცვლელი ფაქტორები',
    evidence_base: 'მტკიცებულების ბაზა',
    clinical_guidelines: 'კლინიკური გაიდლაინები',
    
    // About სექცია
    about_title: 'საშვილოსნოს კიბოს რისკის კალკულატორის შესახებ',
    about_subtitle: 'მტკიცებულებებზე დაფუძნებული რისკის შეფასება • კლინიკური გაიდლაინები • სამედიცინო სიზუსტე',
    clinical_purpose: 'კლინიკური დანიშნულება',
    clinical_purpose_description: 'საშვილოსნოს კიბოს რისკის კალკულატორი უზრუნველყოფს მტკიცებულებებზე დაფუძნებულ სიცოცხლისმანძილზე რისკის შეფასებას ცნობილი რისკ-ფაქტორების გამოყენებით. ზუსტი რისკის შეფასება აუცილებელია შესაფერისი სკრინინგისა და პრევენციული ღონისძიებების დასაგეგმად.',
    
    evidence_based_calculation: 'მტკიცებულებებზე დაფუძნებული გამოთვლა',
    comprehensive_risk_factors: 'ყოვლისმომცველი რისკ-ფაქტორების შეფასება',
    
    // კლინიკური გაიდლაინები
    guidelines_compliance: 'გაიდლაინების შესაბამისობა',
    sgo_guidelines: '• SGO (გინეკოლოგიური ონკოლოგების საზოგადოება) კლინიკური პრაქტიკის განცხადება',
    acog_guidelines: '• ACOG კომიტეტის აზრი №734: ლინჩის სინდრომი',
    nccn_guidelines: '• NCCN გაიდლაინები საშვილოსნოს კიბოს სკრინინგისთვის',
    
    important_note: 'მნიშვნელოვანი შენიშვნა',
    calculator_limitation: 'ეს კალკულატორი არის საგანმანათლებლო ინსტრუმენტი და არ ანაცვლებს პროფესიონალურ სამედიცინო რჩევას. ყოველთვის გაიარეთ კონსულტაცია ჯანდაცვის პროვაიდერთან რისკის შეფასებისა და სკრინინგის რეკომენდაციებისთვის.'
  },
  
  // EDD კალკულატორი (მოსალოდნელი მშობიარობის თარიღი)
  edd_calculator: {
    title: 'მოსალოდნელი მშობიარობის თარიღის კალკულატორი',
    subtitle: 'ზუსტი ორსულობის დათარიღება • ACOG-ის მტკიცებულებებზე დაფუძნებული მეთოდები',
    about_title: 'EDD კალკულატორის შესახებ',
    tool_description: 'მრავალი დათარიღების მეთოდებზე დაფუძნებული ზუსტი ორსულობის გამოთვლა',
    assessment_tool: 'დათარიღების ინსტრუმენტი',
    multiple_dating_methods: 'მრავალი დათარიღების მეთოდი',
    acog_evidence_based: 'ACOG-ის მტკიცებულებებზე დაფუძნებული',
    
    // სექციები
    dating_methods: 'დათარიღების მეთოდები',
    lmp_method: 'ბოლო მენსტრუაციის მეთოდი',
    ultrasound_method: 'ულტრაბგერითი მეთოდი',
    art_method: 'ART მეთოდი (ასისტირებული რეპროდუქციული ტექნოლოგია)',
    
    // ღილაკები და ნავიგაცია
    next_clinical_review: 'შემდეგი: კლინიკური მიმოხილვა',
    back: 'უკან',
    calculate_due_date: 'მოსალოდნელი თარიღის გამოთვლა',
    new_assessment: 'ახალი შეფასება',
    modify_inputs: 'მონაცემების შეცვლა',
    
    // კლინიკური მიმოხილვა
    clinical_data_review: 'კლინიკური მონაცემების მიმოხილვა',
    review_dating_parameters: 'დათარიღების პარამეტრების მიმოხილვა ზუსტობის შეფასებისთვის',
    selected_dating_method: 'არჩეული დათარიღების მეთოდი',
    expected_accuracy: 'მოსალოდნელი სიზუსტე',
    
    // დათარიღების მეთოდების სიზუსტე
    ultrasound_crl_accuracy: 'ულტრაბგერითი CRL: ±3-5 დღე (ყველაზე მაღალი სიზუსტე)',
    art_dating_accuracy: 'ART დათარიღება: ±1-2 დღე (ყველაზე მაღალი სიზუსტე)',
    lmp_dating_accuracy: 'LMP დათარიღება: ±7-10 დღე (საშუალო სიზუსტე)',
    
    // ACOG გაიდლაინები
    acog_guidelines: 'ACOG გაიდლაინები',
    acog_guideline_1: '• პირველი ტრიმესტრის ულტრაბგერა ყველაზე ზუსტი მეთოდია ორსულობის დათარიღებისთვის',
    acog_guideline_2: '• დათარიღების განსხვავება >7 დღე LMP-სა და ულტრაბგერას შორის მოითხოვს ულტრაბგერითი დადასტურებას',
    acog_guideline_3: '• ART ორსულობები ყველაზე მაღალი დათარიღების ზუსტობით ხასიათდება ცნობილი კონცეფციის თარიღის გამო',
    acog_guideline_4: '• რეგულარული ციკლები (28±3 დღე) უზრუნველყოფს უფრო სანდო LMP-ზე დაფუძნებულ დათარიღებას',
    
    // LMP მეთოდი
    lmp_date_label: 'ბოლო მენსტრუაციის პირველი დღე (LMP)',
    lmp_date_help: 'ბოლო მენსტრუაციის პირველი დღე - უმნიშვნელოვანესი ფაქტორი EDD გამოთვლისთვის',
    lmp_date_error: 'LMP თარიღი არ შეიძლება იყოს მომავალში',
    lmp_date_far_past_error: 'LMP თარიღი ძალიან შორეულ წარსულში იქნება (>300 დღე)',
    
    cycle_days_label: 'მენსტრუალური ციკლის ხანგრძლივობა',
    cycle_days_help: 'ჩვეულებრივი მენსტრუალური ციკლის ხანგრძლივობა დღეებში',
    cycle_days_error: 'ციკლის ხანგრძლივობა უნდა იყოს 21-35 დღის შორის',
    cycle_days_unit: 'დღე',
    
    // ულტრაბგერითი მეთოდი
    first_trimester_crl_label: 'CRL (Crown-Rump Length) - პირველი ტრიმესტრი',
    first_trimester_crl_help: 'ემბრიონის თავიდან კუდამდე ზომა მილიმეტრებში - ყველაზე ზუსტი მეთოდი',
    first_trimester_crl_error: 'CRL უნდა იყოს 15-95 მმ-ს შორის ზუსტი დათარიღებისთვის',
    first_trimester_crl_unit: 'მმ',
    
    // ART მეთოდი  
    art_transfer_date_label: 'ემბრიონის ტრანსფერის თარიღი',
    art_transfer_date_help: 'ემბრიონის საშვილოსნოში ტრანსფერის თარიღი',
    art_days_to_transfer_label: 'ტრანსფერამდე დღეები',
    art_days_to_transfer_help: 'ემბრიონის ზრდის დღეები ტრანსფერამდე',
    art_days_to_transfer_error: 'ტრანსფერამდე დღეები უნდა იყოს 3-6 დღის შორის',
    art_days_to_transfer_required: 'ტრანსფერამდე დღეები საჭიროა ART დათარიღების გამოყენებისას',
    
    // ART ვარიანტები
    day_3_cleavage: 'მე-3 დღე (გაყოფის სტადია)',
    day_5_blastocyst: 'მე-5 დღე (ბლასტოცისტი)',
    day_6_expanded_blastocyst: 'მე-6 დღე (გაფართოებული ბლასტოცისტი)',
    
    // ვალიდაცია
    general_error: 'გთხოვთ, მიუთითოთ მინიმუმ ერთი დათარიღების მეთოდი (LMP, ულტრაბგერა ან ART)',
    
    // შედეგები
    edd_analysis: 'მოსალოდნელი მშობიარობის თარიღის ანალიზი',
    estimated_due_date: 'მოსალოდნელი მშობიარობის თარიღი',
    gestational_age: 'გესტაციური ასაკი',
    dating_method_used: 'გამოყენებული დათარიღების მეთოდი',
    confidence_level: 'სანდოობის დონე',
    weeks_days: '{weeks} კვირა {days} დღე',
    
    // შედეგების ლეიბლები
    dating_method_label: 'დათარიღების მეთოდი:',
    confidence_label: 'სანდოობა:',
    forty_weeks_gestation: '40 კვირა გესტაცია',
    current_status: 'მიმდინარე მდგომარეობა',
    current_gestational_age: 'მიმდინარე გესტაციური ასაკი',
    clinical_recommendations: 'კლინიკური რეკომენდაციები',
    evidence_base: 'მტკიცებულების ბაზა',
    
    // სანდოობის დონეები
    high_confidence: 'მაღალი სანდოობა',
    moderate_confidence: 'საშუალო სანდოობა',
    low_confidence: 'დაბალი სანდოობა',
    
    // მეთოდები
    lmp_based: 'LMP-ზე დაფუძნებული',
    ultrasound_based: 'ულტრაბგერაზე დაფუძნებული',
    art_based: 'ART-ზე დაფუძნებული',
    
    // About გვერდი
    about_edd_calculator: 'EDD კალკულატორის შესახებ',
    about_subtitle: 'მტკიცებულებებზე დაფუძნებული ორსულობის დათარიღება • ACOG გაიდლაინები • კლინიკური დოკუმენტაცია',
    clinical_purpose: 'კლინიკური დანიშნულება',
    clinical_purpose_description: 'მოსალოდნელი მშობიარობის თარიღის (EDD) კალკულატორი უზრუნველყოფს ზუსტ ორსულობის დათარიღებას მრავალი მტკიცებულებებზე დაფუძნებული მეთოდის გამოყენებით. ზუსტი დათარიღება აუცილებელია შესაფერისი პრენატალური მოვლისთვის, სკრინინგის დროისთვის და მშობიარობის დაგეგმვისთვის. ეს კალკულატორი მიყვება ACOG კომიტეტის აზრს №700 სტანდარტიზებული ორსულობის დათარიღების მეთოდოლოგიისთვის.',
    
    evidence_based_dating_methods: 'მტკიცებულებებზე დაფუძნებული დათარიღების მეთოდები',
    multiple_approaches_accuracy: 'მრავალი მიდგომა ორსულობის დათარიღების ოპტიმალური ზუსტობისთვის',
    
    // LMP მეთოდის აღწერა
    last_menstrual_period_lmp: 'ბოლო მენსტრუაციის პერიოდი (LMP)',
    moderate_accuracy_days: 'საშუალო სიზუსტე: ±7-10 დღე',
    naegele_rule_description: 'იყენებს ნეგელეს წესს: LMP + 280 დღე. არეგულირებს ციკლის ხანგრძლივობის ვარიაციებს. ყველაზე ხელმისაწვდომი მეთოდი, მაგრამ ვარაუდობს რეგულარულ ოვულაციას.',
    standard_28_day_cycle: '• სტანდარტული 28-დღიანი ციკლის ვარაუდი',
    cycle_length_adjustments: '• ციკლის ხანგრძლივობის კორექტირება მხარდაჭერილია',
    requires_accurate_lmp: '• მოითხოვს LMP-ის ზუსტ გახსენებას',
    
    // ულტრაბგერითი მეთოდის აღწერა
    high_confidence_accuracy: 'მაღალი სანდოობა: ±3-5 დღე',
    crl_most_accurate: 'ყველაზე ზუსტი მეთოდი crown-rump length (CRL) გაზომვის გამოყენებით. იყენებს რობინსონ-ფლემინგის ფორმულას გესტაციური ასაკის შეფასებისთვის.',
    crl_range_weeks: '• CRL რანგი: 15-95მმ (6-13.6 კვირა)',
    robinson_fleming_formula: '• რობინსონ-ფლემინგის ფორმულა',
    gold_standard_dating: '• ოქროს სტანდარტი დათარიღებისთვის',
    
    // ART მეთოდის აღწერა
    highly_accurate_known_conception: 'ყვალიან ზუსტი მეთოდი ემბრიონის ტრანსფერიდან ცნობილი კონცეფციის თარიღის გამოყენებით. ითვალისწინებს ემბრიონის განვითარების სტადიას ტრანსფერისას.',
    transfer_day_options: '• მე-3, მე-5, ან მე-6 დღის ტრანსფერის ვარიანტები',
    known_conception_timing: '• ცნობილი კონცეფციის დრო',
    precise_developmental_stage: '• ზუსტი განვითარების სტადია',
    
    // კლინიკური გაიდლაინები და მტკიცებულება
    clinical_guidelines_evidence: 'კლინიკური გაიდლაინები და მტკიცებულება',
    acog_guidelines_section: 'ACOG გაიდლაინები',
    acog_committee_700: '• ACOG კომიტეტის აზრი №700: მოსალოდნელი თარიღის შეფასების მეთოდები',
    acog_practice_175: '• ACOG პრაქტიკის ბიულეტენი №175: ულტრაბგერა ორსულობისას',
    first_trimester_preferred: '• პირველი ტრიმესტრის ულტრაბგერა სასურველია ხელმისაწვდომობისას (6-13.6 კვირა)',
    discrepancy_ultrasound: '• დათარიღების განსხვავება >7 დღე მოითხოვს ულტრაბგერითი დადასტურებას',
    
    clinical_applications: 'კლინიკური გამოყენება',
    prenatal_care_scheduling: '• პრენატალური მზრუნველობა',
    screening_test_timing: '• სკრინინგ ტესტების შესაფერისი დრო',
    labor_delivery_planning: '• მშობიარობის მენეჯმენტი და მშობიარობის დაგეგმვა',
    fetal_growth_baselines: '• ნაყოფის ზრდის შეფასების საბაზისო ხაზები',
    
    // მნიშვნელოვანი კლინიკური გაფრთხილებები
    important_clinical_considerations: 'მნიშვნელოვანი კლინიკური მოსაზრებები',
    clinical_calculator_notice: 'ეს კალკულატორი გასცემს შეფასებულ თარიღებს დადგენილი სამედიცინო ფორმულებისა და ACOG გაიდლაინების საფუძველზე. კლინიკური განსჯა ყოველთვის უნდა გამოიყენებოდეს, და რეალური მშობიარობა შეიძლება მოხდეს EDD-დან 2-3 კვირით ადრე ან გვიან.',
    statistical_reality: 'სტატისტიკური რეალობა',
    five_percent_exact_date: 'ბავშვების მხოლოდ 5% იბადება მათი ზუსტ მოსალოდნელ თარიღზე',
    clinical_range: 'კლინიკური რანგი',
    normal_delivery_weeks: 'ნორმალური მშობიარობა ხდება 37-42 კვირის გესტაციურ ასაკში',
    
    // ქვედა ინფორმაცია
    based_on_acog_700: 'დაფუძნებულია ACOG კომიტეტის აზრზე №700',
    educational_purposes_only: 'მხოლოდ საგანმანათლებლო მიზნებისთვის',
    acog_2017_guidelines: 'ACOG 2017 გაიდლაინები',
    
    // ღილაკები
    calculate_button: 'EDD-ის გამოთვლა',
    calculate_edd: 'მოსალოდნელი თარიღის გამოთვლა',
    new_calculation: 'ახალი გამოთვლა',
    modify_dates: 'თარიღების შეცვლა'
  },

  // აფგარის ქულების კალკულატორი
  apgar_score: {
    title: 'აფგარის ქულების კალკულატორი',
    subtitle: 'ახალშობილთა შეფასება • მყისიერი შეფასება • რეანიმაციის მითითებები • კლინიკური დოკუმენტაცია',
    description: 'სტანდარტიზებული ახალშობილთა შეფასების ინსტრუმენტი მდგომარეობის შეფასებისთვის 1, 5 და 10 წუთში დაბადების შემდეგ',
    
    // ძირითადი ინფორმაცია
    apgar_alert_title: 'აფგარის ქულების შეფასების სისტემა',
    apgar_alert_description: 'სტანდარტიზებული ახალშობილთა შეფასების ინსტრუმენტი ახალშობილის მდგომარეობის შეფასებისთვის 1, 5 და 10 წუთში დაბადების შემდეგ. იძლევა მყისიერ მითითებს რეანიმაციის საჭიროებებისა და კლინიკური ჩარევისთვის.',
    aap_acog_guidelines: 'AAP/ACOG კომიტეტის მითითებები',
    
    // დროის პერიოდი
    assessment_time_point: 'შეფასების დროის პერიოდი',
    time_point_description: 'აირჩიეთ დროის პერიოდი აფგარის ქულების შეფასებისთვის',
    time_1_min: '1 წუთი',
    time_5_min: '5 წუთი',
    time_10_min: '10 წუთი',
    time_1_min_description: 'მყისიერი შეფასება',
    time_5_min_description: 'ყველაზე პროგნოსტიკური',
    time_10_min_description: 'გაფართოებული შეფასება',
    
    // გულისცემის სიხშირე
    heart_rate_assessment: 'გულისცემის სიხშირის შეფასება',
    heart_rate_label: 'გულისცემის სიხშირე',
    heart_rate_description: 'ახალშობილის გულისცემის სიხშირის შეფასება',
    heart_rate_absent: 'არ არის (0 bpm)',
    heart_rate_slow: 'ნელი (<100 bpm)',
    heart_rate_normal: 'ნორმალური (≥100 bpm)',
    heart_rate_absent_score: '0 ქულა - არ არის',
    heart_rate_slow_score: '1 ქულა - ნელი',
    heart_rate_normal_score: '2 ქულა - ნორმალური',
    
    // სუნთქვითი ძალისხმევა
    respiratory_effort_assessment: 'სუნთქვითი ძალისხმევის შეფასება',
    respiratory_effort_label: 'სუნთქვითი ძალისხმევა',
    respiratory_effort_description: 'ახალშობილის სუნთქვის ღირსებისა და ეფექტურობის შეფასება',
    respiratory_effort_absent: 'არ არის',
    respiratory_effort_weak: 'სუსტი, არარეგულარული',
    respiratory_effort_strong: 'მძლავრი, ტირილი',
    respiratory_effort_absent_score: '0 ქულა - არ არის',
    respiratory_effort_weak_score: '1 ქულა - სუსტი',
    respiratory_effort_strong_score: '2 ქულა - მძლავრი',
    
    // კუნთის ტონუსი
    muscle_tone_assessment: 'კუნთის ტონუსის შეფასება',
    muscle_tone_label: 'კუნთის ტონუსი',
    muscle_tone_description: 'ახალშობილის კუნთის ტონუსისა და აქტივობის შეფასება',
    muscle_tone_limp: 'სუსტი, შეუძლებელი მოძრაობა',
    muscle_tone_some_flexion: 'გარკვეული ფლექსია',
    muscle_tone_active: 'აქტიური მოძრაობა',
    muscle_tone_limp_score: '0 ქულა - სუსტი',
    muscle_tone_some_flexion_score: '1 ქულა - გარკვეული ფლექსია',
    muscle_tone_active_score: '2 ქულა - აქტიური',
    
    // რეფლექსური პასუხი
    reflex_response_assessment: 'რეფლექსური პასუხის შეფასება',
    reflex_response_label: 'რეფლექსური პასუხი (გრძნობადობა)',
    reflex_response_description: 'ახალშობილის რეფლექსური პასუხის შეფასება სტიმულაციაზე',
    reflex_response_none: 'არ არის პასუხი',
    reflex_response_grimace: 'გრიმასი',
    reflex_response_cry: 'ტირილი/კაშვლი',
    reflex_response_none_score: '0 ქულა - არ არის პასუხი',
    reflex_response_grimace_score: '1 ქულა - გრიმასი',
    reflex_response_cry_score: '2 ქულა - ტირილი',
    
    // ფერი/გარეგნობა
    color_assessment: 'ფერის/გარეგნობის შეფასება',
    color_label: 'კანის ფერი და გარეგნობა',
    color_description: 'ახალშობილის კანის ფერისა და ოქსიგენაციის შეფასება',
    color_blue_pale: 'ცისფერი/ღია',
    color_acrocyanotic: 'აკროციანოზი (ხელები/ფეხები ცისფერი)',
    color_pink: 'ვარდისფერი (ნორმალური)',
    color_blue_pale_score: '0 ქულა - ცისფერი/ღია',
    color_acrocyanotic_score: '1 ქულა - აკროციანოზი',
    color_pink_score: '2 ქულა - ვარდისფერი',
    
    // შედეგები
    apgar_score_title: 'აფგარის ქულა',
    total_score: 'მთლიანი ქულა',
    assessment_category: 'შეფასების კატეგორია',
    clinical_interpretation: 'კლინიკური ინტერპრეტაცია',
    recommendations: 'რეკომენდაციები',
    
    // ქულის კატეგორიები
    excellent_condition: 'შესანიშნავი მდგომარეობა',
    moderately_depressed: 'ზომიერად დაქვეითებული',
    severely_depressed: 'მძიმედ დაქვეითებული',
    
    // ქულის ინტერპრეტაცია
    score_7_10_interpretation: 'ახალშობილი შესანიშნავ მდგომარეობაშია. ჩვეულებრივი მზრუნველობა საკმარისია.',
    score_4_6_interpretation: 'ახალშობილი ზომიერად დაქვეითებულ მდგომარეობაშია. შესაძლოა საჭირო იყოს რეანიმაციული ღონისძიებები.',
    score_0_3_interpretation: 'ახალშობილი მძიმედ დაქვეითებულ მდგომარეობაშია. მყისიერი რეანიმაცია აუცილებელია.',
    
    // რეკომენდაციები
    routine_care: 'ჩვეულებრივი მზრუნველობა',
    gentle_stimulation: 'ნაზი სტიმულაცია და მონიტორინგი',
    immediate_resuscitation: 'მყისიერი რეანიმაცია აუცილებელია',
    
    // დამატებითი ინფორმაცია
    about_title: 'აფგარის ქულების კალკულატორის შესახებ',
    clinical_purpose: 'კლინიკური დანიშნულება',
    clinical_purpose_description: 'აფგარის ქულების სისტემა არის სტანდარტიზებული მეთოდი ახალშობილის მდგომარეობის შეფასებისთვის დაბადების დროს. ეს ინსტრუმენტი მიზნად ისახავს სწრაფი შეფასების ჩატარებას და რეანიმაციის საჭიროების განსაზღვრას.',
    
    assessment_components: 'შეფასების კომპონენტები',
    heart_rate_component: 'გულისცემის სიხშირე - ყველაზე მნიშვნელოვანი ინდიკატორი',
    respiratory_component: 'სუნთქვითი ძალისხმევა - სუნთქვის ადეკვატურობის შეფასება',
    muscle_tone_component: 'კუნთის ტონუსი - ნერვული სისტემის ფუნქციის ინდიკატორი',
    reflex_component: 'რეფლექსური პასუხი - ნერვული სისტემის მომწიფების ჩვენება',
    color_component: 'კანის ფერი - ოქსიგენაციის მდგომარეობის ინდიკატორი',
    
    timing_importance: 'შეფასების დროის მნიშვნელობა',
    timing_1_min: '1 წუთი: მყისიერი მდგომარეობის შეფასება',
    timing_5_min: '5 წუთი: ყველაზე პროგნოსტიკურად მნიშვნელოვანი',
    timing_10_min: '10 წუთი: გაგრძელებული რეანიმაციის შემდეგ',
    
    clinical_guidelines: 'კლინიკური მითითებები',
    aap_guidelines: 'ამერიკის პედიატრთა აკადემიის (AAP) მითითებები',
    acog_guidelines: 'ამერიკის აკუშერ-გინეკოლოგთა კოლეჯის (ACOG) მითითებები',
    nrp_guidelines: 'ახალშობილთა რეანიმაციის პროგრამის (NRP) მითითებები',
    
    important_considerations: 'მნიშვნელოვანი განსაზღვრები',
    not_predictive_alone: 'აფგარის ქულა მარტოდენ არ არის პროგნოსტიკური ინსტრუმენტი გრძელვადიანი შედეგებისთვის',
    serial_assessment: 'სერიული შეფასება უფრო ინფორმაციულია ვიდრე ერთჯერადი ქულა',
    gestational_age_factor: 'გესტაციური ასაკი გავლენას ახდენს აფგარის ქულაზე',
    
    // ღილაკები
    calculator: 'კალკულატორი',
    about: 'შესახებ',
    calculate_button: 'გამოთვლა',
    calculate_apgar_score: 'აფგარის ქულის გამოთვლა',
    new_assessment: 'ახალი შეფასება',
    reset_form: 'ფორმის გაუქმება',
    calculating: 'გამოთვლა...',
    
    // შეცდომები
    heart_rate_required: 'გულისცემის სიხშირის შეფასება აუცილებელია',
    respiratory_effort_required: 'სუნთქვითი ძალისხმევის შეფასება აუცილებელია',
    muscle_tone_required: 'კუნთის ტონუსის შეფასება აუცილებელია',
    reflex_response_required: 'რეფლექსური პასუხის შეფასება აუცილებელია',
    color_appearance_required: 'ფერის/გარეგნობის შეფასება აუცილებელია',
    calculation_error: 'გამოთვლის შეცდომა',
  },
  
  // საშვილოსნოს კიბოს რისკის კალკულატორი
  gestational_age: {
    title: 'გესტაციური ასაკის კალკულატორი',
    subtitle: 'ზუსტი გესტაციური ასაკის შეფასება • ACOG-ის მტკიცებულებებზე დაფუძნებული მეთოდები • მრავალი დათარიღების მიდგომა',
    
    // Progress Steps
    progress: {
      dating_method: 'დათარიღების მეთოდი',
      reference_setup: 'სარეფერენციო კონფიგურაცია',
      calculation: 'გამოთვლა'
    },

    // ACOG Alert Section
    system_title: 'ACOG-ის მტკიცებულებებზე დაფუძნებული გესტაციური ასაკის შეფასება',
    system_description: 'გამოთვალეთ ზუსტი გესტაციური ასაკი ნებისმიერ სარეფერენციო თარიღზე ბოლო მენსტრუაციის (LMP), პირველი ტრიმესტრის ულტრაბგერითი გაზომვების ან დადგენილი მშობიარობის შესაძლო თარიღის (EDD) გამოყენებით.',
    guidelines: 'ACOG კომიტეტის აზრი №700 - გესტაციური ასაკის დათარიღება',

    // Dating Method Selection
    method_selection: {
      title: 'აირჩიეთ დათარიღების მეთოდი',
      description: 'აირჩიეთ ყველაზე სანდო ხელმისაწვდომი დათარიღების მეთოდი',
      
      lmp: {
        title: 'ბოლო მენსტრუაცია',
        accuracy: 'ზომიერი სიზუსტე',
        description: 'გამოთვალეთ GA ბოლო მენსტრუაციის პირველი დღიდან. იგულისხმება რეგულარული 28-დღიანი ციკლები.',
        features: {
          accessible: 'ფართოდ ხელმისაწვდომი მეთოდი',
          recall: 'მოითხოვს LMP-ის ზუსტ გახსენებას',
          regular: 'საუკეთესოა რეგულარული ციკლებისთვის'
        },
        label: 'ბოლო მენსტრუაციის თარიღი',
        placeholder: 'აირჩიეთ LMP თარიღი...',
        help: 'თქვენი ბოლო მენსტრუაციის პირველი დღე'
      },

      ultrasound: {
        title: 'პირველი ტრიმესტრის ულტრაბგერა',
        accuracy: 'მაღალი სიზუსტე',
        description: 'ყველაზე ზუსტი მეთოდი თავისა-კუდის სიგრძის (CRL) გაზომვისა და სარეფერენციო თარიღის გამოყენებით.',
        features: {
          range: 'CRL დიაპაზონი: 15-95მმ',
          formula: 'რობინსონ-ფლემინგის ფორმულა',
          standard: 'ოქროს სტანდარტი დათარიღებისთვის'
        },
        crl_label: 'თავისა-კუდის სიგრძე (CRL)',
        crl_placeholder: '45',
        crl_unit: 'მმ',
        crl_help: 'მოქმედი დიაპაზონი: 15-95მმ',
        crl_error: 'თავისა-კუდის სიგრძე უნდა იყოს 15-95მმ შორის ზუსტი დათარიღებისთვის'
      },

      edd: {
        title: 'მშობიარობის შესაძლო თარიღი',
        accuracy: 'უკუღმა გამოთვლა',
        description: 'გამოთვალეთ GA უკუღმა მუშაობით ადრე დადგენილი მშობიარობის შესაძლო თარიღიდან.',
        features: {
          established: 'იყენებს დადგენილ მშობიარობის თარიღს',
          reverse: 'უკუღმა გამოთვლის მეთოდი',
          consistent: 'თანმიმდევრული წინა დათარიღებასთან'
        },
        label: 'მშობიარობის შესაძლო თარიღი',
        placeholder: 'აირჩიეთ მშობიარობის თარიღი...',
        help: 'ადრე დადგენილი მშობიარობის შესაძლო თარიღი'
      }
    },

    // Reference Date Setup
    reference: {
      title: 'სარეფერენციო თარიღის დაყენება',
      description: 'მიუთითეთ რა თარიღისთვის გსურთ გესტაციური ასაკი',
      date_label: 'სარეფერენციო თარიღი',
      date_help: 'თარიღი, რომლისთვისაც იანგარიშება გესტაციური ასაკი',
      current_pregnancy: 'მიმდინარე ორსულობისთვის',
      historical: 'ისტორიული შეფასებისთვის',
      future: 'მომავალი გეგმვისთვის'
    },

    // Validation Messages
    validation: {
      reference_date_required: 'სარეფერენციო თარიღი აუცილებელია',
      method_required: 'გთხოვთ, მიუთითოთ მინიმუმ ერთი დათარიღების მეთოდი (LMP, ულტრაბგერა, ან EDD)',
      lmp_after_reference: 'LMP თარიღი არ შეიძლება იყოს სარეფერენციო თარიღის შემდეგ',
      lmp_too_far: 'LMP თარიღი ძალიან შორეული წარსულში ჩანს (>300 დღე სარეფერენციოს წინ)',
      edd_before_reference: 'EDD თარიღი ჩვეულებრივ უნდა იყოს სარეფერენციო თარიღის შემდეგ მიმდინარე ორსულობისთვის',
      calculation_error: 'გამოთვლის შეცდომა'
    },

    // Button Labels
    buttons: {
      continue: 'გაგრძელება',
      calculate: 'გესტაციური ასაკის გამოთვლა',
      new_calculation: 'ახალი გამოთვლა',
      modify_calculation: 'გამოთვლის შეცვლა'
    },

    // Results Section
    results: {
      title: 'გესტაციური ასაკის შედეგები',
      gestational_age: 'გესტაციური ასაკი',
      reference_date: 'სარეფერენციო თარიღზე',
      calculation_method: 'გამოთვლის მეთოდი',
      confidence_level: 'სარწმუნოების დონე',
      trimester: 'ტრიმესტრი',
      
      confidence: {
        high: 'მაღალი',
        moderate: 'ზომიერი', 
        low: 'დაბალი'
      },

      method_names: {
        lmp: 'ბოლო მენსტრუაცია (LMP)',
        crl: 'პირველი ტრიმესტრის ულტრაბგერა (CRL)',
        edd: 'მშობიარობის შესაძლო თარიღი (EDD)'
      },

      trimester_names: {
        first: 'პირველი ტრიმესტრი',
        second: 'მეორე ტრიმესტრი',
        third: 'მესამე ტრიმესტრი'
      },

      weeks_days: 'კვირა + დღე',
      estimated_due_date: 'მშობიარობის შესაძლო თარიღი',
      key_milestones: 'მთავარი ეტაპები'
    },

    // About Section
    about: {
      title: 'გესტაციური ასაკის კალკულატორის შესახებ',
      subtitle: 'ზუსტი ორსულობის დათარიღება კლინიკური გადაწყვეტილებებისთვის',

      // Clinical Purpose
      clinical_purpose: {
        title: 'კლინიკური მიზანი',
        description: 'ეს კალკულატორი უზრუნველყოფს ACOG-ის გაიდლაინებზე დაფუძნებულ ზუსტ გესტაციური ასაკის შეფასებას მრავალი ორსულობის დათარიღების მეთოდის გამოყენებით. ზუსტი გესტაციური ასაკის შეფასება არსებითია პრენატალური მზრუნველობის განრიგისთვის, სკრინინგის დროისთვის და კლინიკური გადაწყვეტილებებისთვის მთელი ორსულობის განმავლობაში.'
      },

      // Methods Section
      methods: {
        title: 'მტკიცებულებებზე დაფუძნებული გამოთვლის მეთოდები',
        description: 'მრავალი მიდგომა ოპტიმალური გესტაციური ასაკის შეფასებისთვის',

        lmp_method: {
          title: 'ბოლო მენსტრუაცია (LMP)',
          accuracy: 'ზომიერი სიზუსტე: ±7-10 დღე',
          description: 'თვლის გესტაციურ ასაკს ბოლო მენსტრუაციის პირველი დღიდან. იგულისხმება 28-დღიანი ციკლი ოვულაციით მე-14 დღეს.',
          features: {
            accessible: 'ფართოდ ხელმისაწვდომი მეთოდი',
            recall: 'მოითხოვს LMP-ის ზუსტ გახსენებას',
            regular: 'საუკეთესოა რეგულარული ციკლებისთვის'
          }
        },

        ultrasound_method: {
          title: 'პირველი ტრიმესტრის ულტრაბგერა',
          accuracy: 'მაღალი სიზუსტე: ±3-5 დღე',
          description: 'იყენებს თავისა-კუდის სიგრძის (CRL) გაზომვას გესტაციური ასაკის დასადგენად. ყველაზე ზუსტი მეთოდი რობინსონ-ფლემინგის ფორმულის გამოყენებით.',
          features: {
            range: 'CRL დიაპაზონი: 15-95მმ',
            formula: 'რობინსონ-ფლემინგის ფორმულა',
            standard: 'ოქროს სტანდარტი დათარიღებისთვის'
          }
        },

        edd_method: {
          title: 'მშობიარობის შესაძლო თარიღი (EDD)',
          accuracy: 'უკუღმა გამოთვლა: ±5-7 დღე',
          description: 'მუშაობს უკუღმა ადრე დადგენილი EDD-დან მიმდინარე გესტაციური ასაკის გამოსათვლელად. სასარგებლოა, როდესაც EDD განისაზღვრა მრავალი წყაროდან.',
          features: {
            established: 'იყენებს დადგენილ მშობიარობის თარიღს',
            reverse: 'უკუღმა გამოთვლის მეთოდი',
            consistent: 'თანმიმდევრული წინა დათარიღებასთან'
          }
        }
      },

      // Clinical Applications
      applications: {
        title: 'კლინიკური გამოყენებები',
        prenatal_care: {
          title: 'პრენატალური მზრუნველობა',
          scheduling: 'პრენატალური ვიზიტებისა და სკრინინგის ტესტების განრიგი',
          genetic: 'გენეტიკური სკრინინგისთვის შესაფერისი დროის განსაზღვრა',
          delivery: 'მშობიარობის დროისა და ჩარევის გადაწყვეტილებების დაგეგმვა',
          growth: 'ნაყოფის ზრდისა და განვითარების ეტაპების შეფასება'
        },
        clinical_management: {
          title: 'კლინიკური მენეჯმენტი',
          medication: 'მედიკამენტის დოზირების გამოთვლა გესტაციური ასაკის მიხედვით',
          viability: 'სიცოცხლისუნარიანობისა და პროგნოზის შეფასებები',
          specialized: 'სპეციალიზებული მზრუნველობისა და კონსულტაციების დაგეგმვა',
          decisions: 'სარეფერენციო თარიღზე სპეციფიკური კლინიკური გადაწყვეტილებები'
        }
      },

      // Guidelines
      guidelines: {
        title: 'კლინიკური გაიდლაინები და მტკიცებულებები',
        acog: {
          title: 'ACOG გაიდლაინები',
          opinion_700: 'ACOG კომიტეტის აზრი №700: მშობიარობის თარიღის შეფასების მეთოდები',
          bulletin_175: 'ACOG პრაქტიკის ბიულეტენი №175: ულტრაბგერა ორსულობაში',
          opinion_611: 'ACOG კომიტეტის აზრი №611: მშობიარობის თარიღის შეფასების მეთოდი',
          first_trimester: 'პირველი ტრიმესტრის ულტრაბგერაა ყველაზე ზუსტი გესტაციური ასაკის განსაზღვრისთვის'
        },
        best_practices: {
          title: 'საუკეთესო პრაქტიკები',
          early_dating: 'დათარიღება უნდა განისაზღვროს ორსულობის ადრეულ ეტაპზე, როდესაც ყველაზე ზუსტია',
          flexibility: 'სარეფერენციო თარიღის მოქნილობა იძლევა კონკრეტული კლინიკური შეფასებების საშუალებას',
          comparison: 'რამდენიმე მეთოდის შედარება აუმჯობესებს სიზუსტეს',
          judgment: 'კლინიკური განსჯის ინტეგრაცია გამოთვლილ შედეგებთან'
        }
      },

      // Trimester Definitions
      trimesters: {
        title: 'ორსულობის ტრიმესტრების განმარტება',
        first: {
          title: 'პირველი ტრიმესტრი',
          weeks: '0-13 კვირა + 6 დღე',
          description: 'ადრეული განვითარება და ორგანოების ფორმირება'
        },
        second: {
          title: 'მეორე ტრიმესტრი',
          weeks: '14-27 კვირა + 6 დღე',
          description: 'სწრაფი ზრდა და განვითარება'
        },
        third: {
          title: 'მესამე ტრიმესტრი',
          weeks: '28 კვირა - ვადა',
          description: 'მომწიფება და მშობიარობისთვის მომზადება'
        }
      },

      // Clinical Considerations
      considerations: {
        title: 'მნიშვნელოვანი კლინიკური მოსაზრებები',
        description: 'ეს კალკულატორი უზრუნველყოფს შეფასებით გესტაციურ ასაკს დადგენილი სამედიცინო ფორმულებისა და ACOG გაიდლაინების საფუძველზე. ყოველთვის უნდა იქნეს გამოყენებული კლინიკური განსჯა. გესტაციური ასაკის სიზუსტე დამოკიდებულია გამოყენებული დათარიღების მეთოდის სანდოობაზე. პირველი ტრიმესტრის ულტრაბგერა უზრუნველყოფს ყველაზე ზუსტ დათარიღებას.',
        flexibility: {
          title: 'სარეფერენციო თარიღის მოქნილობა',
          description: 'გამოთვალეთ GA ნებისმიერი კონკრეტული თარიღისთვის - წარსული, აწმყო, ან მომავალი'
        },
        integration: {
          title: 'კლინიკური ინტეგრაცია',
          description: 'ყოველთვის შეაერთეთ კლინიკურ შეფასებასთან და პაციენტის ისტორიასთან'
        }
      }
    },

    // Footer
    footer: {
      guidelines: 'ACOG 2017 გაიდლაინების საფუძველზე',
      educational: 'საგანმანათლებლო მიზნებისთვის მხოლოდ'
    }
  },

  // Fetal Weight Estimation Calculator - Georgian Implementation
  fetalWeightEstimation: {
    title: 'ნაყოფის წონის შეფასების კალკულატორი',
    subtitle: 'ნაყოფის წონის ზუსტი შეფასება ულტრაბგერითი ბიომეტრიით',
    description: 'ნაყოფის განაპირა წონის შეფასება ულტრაბგერითი ბიომეტრიული გაზომვების საფუძველზე რამდენიმე დადასტურებული ფორმულის გამოყენებით',
    
    // Demographic Information
    demographic_title: 'დემოგრაფიული ინფორმაცია',
    gestational_age: {
      label: 'გესტაციური ასაკი',
      placeholder: 'მიუთითეთ გესტაციური ასაკი კვირებში...',
      help: 'გესტაციური ასაკი ზუსტი ბიომეტრიისთვის (20-42 კვირა)'
    },
    
    // Biometric Measurements
    measurements_title: 'ბიომეტრიული გაზომვები',
    measurements_subtitle: 'ულტრაბგერითი ფეტალური ბიომეტრია',
    
    bpd: {
      label: 'ბიპარიეტალური დიამეტრი (BPD)',
      placeholder: 'მიუთითეთ BPD მმ-ში...',
      help: 'ტალღისებრი პარიეტალური კონტურები (20-110 მმ)',
      unit: 'მმ'
    },
    
    hc: {
      label: 'თავის გარშემოწერილობა (HC)',
      placeholder: 'მიუთითეთ HC მმ-ში...',
      help: 'ოვალური თავის გარშემოწერილობა (70-400 მმ)',
      unit: 'მმ'
    },
    
    ac: {
      label: 'მუცლის გარშემოწერილობა (AC)',
      placeholder: 'მიუთითეთ AC მმ-ში...',
      help: 'კუჭსა და ღვიძლის დონეზე (50-400 მმ)',
      unit: 'მმ'
    },
    
    fl: {
      label: 'ბარძაყის ძვლის სიგრძე (FL)',
      placeholder: 'მიუთითეთ FL მმ-ში...',
      help: 'დიაფიზური ბარძაყის ძვლის სიგრძე (10-85 მმ)',
      unit: 'მმ'
    },
    
    // Estimation Methods
    method_title: 'შეფასების მეთოდები',
    estimation_formula: {
      label: 'შეფასების ფორმულა',
      placeholder: 'აირჩიეთ შეფასების ფორმულა...',
      help: 'სხვადასხვა ფორმულების სიზუსტე განსხვავებულია'
    },
    
    formula_options: {
      hadlock1: 'ჰედლოკი 1 (BPD, HC, AC, FL)',
      hadlock2: 'ჰედლოკი 2 (BPD, AC, FL)',
      hadlock3: 'ჰედლოკი 3 (HC, AC, FL)',
      hadlock4: 'ჰედლოკი 4 (AC, FL)',
      shepard: 'შეფარდი (BPD, AC)',
      warsof: 'ვარსოფი (BPD, AC)',
      combs: 'კომბსი (HC, AC)'
    },
    
    // Validation Messages
    validation: {
      gestational_age_required: 'გესტაციური ასაკი აუცილებელია',
      gestational_age_range: 'გესტაციური ასაკი უნდა იყოს 20-42 კვირის ფარგლებში',
      bpd_required: 'BPD აუცილებელია ამ ფორმულისთვის',
      hc_required: 'HC აუცილებელია ამ ფორმულისთვის',
      ac_required: 'AC აუცილებელია ამ ფორმულისთვის',
      fl_required: 'FL აუცილებელია ამ ფორმულისთვის',
      bpd_range: 'BPD უნდა იყოს 20-110 მმ ფარგლებში',
      hc_range: 'HC უნდა იყოს 70-400 მმ ფარგლებში',
      ac_range: 'AC უნდა იყოს 50-400 მმ ფარგლებში',
      fl_range: 'FL უნდა იყოს 10-85 მმ ფარგლებში',
      formula_required: 'ფორმულის არჩევა აუცილებელია'
    },
    
    // Results
    results: {
      title: 'ნაყოფის წონის შეფასების შედეგები',
      estimated_weight: 'განაპირა ფეტალური წონა',
      confidence_interval: 'სარწმუნოების ინტერვალი (95%)',
      percentile: 'გესტაციური ასაკის პერცენტილი',
      formula_used: 'გამოყენებული ფორმულა',
      accuracy: 'მოსალოდნელი სიზუსტე',
      margin_error: 'შეცდომის ზღვარი',
      
      // Weight Categories
      categories: {
        title: 'წონის კატეგორია',
        sga: 'მცირე გესტაციური ასაკისთვის (SGA)',
        aga: 'შესაფერისი გესტაციური ასაკისთვის (AGA)',
        lga: 'დიდი გესტაციური ასაკისთვის (LGA)',
        macrosomia: 'მაკროსომია'
      },
      
      // Percentile Ranges
      percentile_ranges: {
        below_10: '<10-ე პერცენტილი (SGA)',
        normal_10_90: '10-90-ე პერცენტილი (AGA)',
        above_90: '>90-ე პერცენტილი (LGA)',
        above_97: '>97-ე პერცენტილი (მაკროსომია)'
      }
    },
    
    // Clinical Recommendations
    recommendations: {
      title: 'კლინიკური რეკომენდაციები',
      sga_management: {
        title: 'SGA მენეჯმენტი',
        monitoring: 'ზრდის მონიტორინგი და დოპლერის შეფასება',
        delivery: 'ადრეული მშობიარობის განხილვა',
        follow_up: 'ყოველკვირეული ულტრაბგერითი კონტროლი'
      },
      aga_management: {
        title: 'AGA მენეჯმენტი',
        routine: 'რუტინული პრენატალური მზრუნველობა',
        monitoring: 'სტანდარტული ზრდის მონიტორინგი',
        delivery: 'ვადაზე მშობიარობის მოლოდინი'
      },
      lga_management: {
        title: 'LGA/მაკროსომია მენეჯმენტი',
        glucose: 'მშობლის გლუკოზის ტოლერანტობის ტესტი',
        delivery: 'მშობიარობის გზის განხილვა',
        monitoring: 'ინტრაპარტუმ მონიტორინგი',
        complications: 'დისტოციისა და კომპლიკაციების ყურადღება'
      }
    },
    
    // About Section
    about: {
      title: 'ნაყოფის წონის შეფასების შესახებ',
      subtitle: 'ზუსტი ფეტალური ზრდის შეფასება კლინიკური მენეჯმენტისთვის',
      
      clinical_purpose: {
        title: 'კლინიკური მიზანი',
        description: 'ნაყოფის წონის ზუსტი შეფასება გადამწყვეტია ფეტალური ზრდის დარღვევების გამოვლენისთვის, მშობიარობის გეგმავისთვის და ნეონატალური გართულებების რისკის შეფასებისთვის. ეს კალკულატორი იყენებს დადასტურებულ ულტრაბგერითი ბიომეტრიის ფორმულებს მრავალფეროვანი წონის შეფასებისთვის.'
      },
      
      formulas: {
        title: 'შეფასების ფორმულები',
        description: 'დადასტურებული ალგორითმები ოპტიმალური სიზუსტისთვის',
        
        hadlock_formula: {
          title: 'ჰედლოკის ფორმულები',
          description: 'ყველაზე ფართოდ გამოყენებული და დადასტურებული ფორმულები',
          accuracy: 'სიზუსტე: ±10-15% (95% CI)',
          hadlock1: 'ჰედლოკი 1: ყველა 4 პარამეტრი (BPD, HC, AC, FL)',
          hadlock2: 'ჰედლოკი 2: BPD + AC + FL',
          hadlock3: 'ჰედლოკი 3: HC + AC + FL',
          hadlock4: 'ჰედლოკი 4: AC + FL (უმარტივესი)'
        },
        
        alternative_formulas: {
          title: 'ალტერნატიული ფორმულები',
          shepard: 'შეფარდი: BPD + AC (ისტორიული)',
          warsof: 'ვარსოფი: BPD + AC (მოდიფიცირებული)',
          combs: 'კომბსი: HC + AC (თავის ფოკუსით)'
        }
      },
      
      clinical_applications: {
        title: 'კლინიკური გამოყენებები',
        growth_assessment: {
          title: 'ზრდის შეფასება',
          description: 'ფეტალური ზრდის დარღვევების (FGR) და მაკროსომიის გამოვლენა'
        },
        delivery_planning: {
          title: 'მშობიარობის დაგეგმვა',
          description: 'მშობიარობის გზისა და დროის გადაწყვეტილებები'
        },
        risk_stratification: {
          title: 'რისკის სტრატიფიკაცია',
          description: 'მშობიარობისა და ნეონატალური გართულებების რისკის შეფასება'
        }
      },
      
      limitations: {
        title: 'შეზღუდვები და მიკერძოება',
        general_limitations: 'ულტრაბგერითი შეფასება ზუსტია ±10-20%-ის ფარგლებში',
        operator_dependent: 'სიზუსტე დამოკიდებულია ოპერატორის უნარებზე',
        late_pregnancy: 'სიზუსტე ნაკლებია მესამე ტრიმესტრის ბოლოს',
        population_specific: 'ფორმულები შეიძლება საჭიროებდეს პოპულაციაზე ადაპტაციას'
      }
    },
    
    // Footer
    footer: {
      guidelines: 'ACOG/ISUOG 2020 გაიდლაინების საფუძველზე',
      educational: 'საგანმანათლებლო მიზნებისთვის მხოლოდ'
    }
  },

  // Cervical Length Calculator - Georgian Implementation  
  cervicalLength: {
    title: 'საშვილოსნოს ყელის სიგრძის კალკულატორი',
    subtitle: 'ადრეული მშობიარობის რისკის შეფასება ტრანსვაგინალური ულტრაბგერით',
    description: 'საშვილოსნოს ყელის სიგრძის შეფასება ადრეული მშობიარობისა და საშვილოსნოს ყელის უკმარისობის რისკის განსასაზღვრად',
    
    // Patient Information
    patient_info_title: 'პაციენტის ინფორმაცია',
    gestational_age: {
      label: 'გესტაციური ასაკი',
      placeholder: 'მიუთითეთ გესტაციური ასაკი კვირებში...',
      help: 'გესტაციური ასაკი ზუსტი რისკის შეფასებისთვის (14-32 კვირა)'
    },
    
    pregnancy_history: {
      label: 'ორსულობის ისტორია',
      placeholder: 'აირჩიეთ ორსულობის ისტორია...',
      help: 'წინა ორსულობების ისტორია რისკის შეფასებისთვის'
    },
    
    history_options: {
      nulliparous: 'პირველყოფილა (პირველი ორსულობა)',
      previous_term: 'წინა ვადიანი მშობიარობები',
      previous_preterm: 'წინა ადრეული მშობიარობები',
      previous_loss: 'წინა ორსულობის მიწყვეტა II ტრიმესტრში',
      cervical_surgery: 'საშვილოსნოს ყელზე ქირურგიული ჩარევა'
    },
    
    // Measurement Details
    measurement_title: 'გაზომვის დეტალები',
    cervical_length_measurement: {
      label: 'საშვილოსნოს ყელის სიგრძე',
      placeholder: 'მიუთითეთ სიგრძე მმ-ში...',
      help: 'ტრანსვაგინალური ულტრაბგერა (10-60 მმ)',
      unit: 'მმ'
    },
    
    measurement_technique: {
      label: 'გაზომვის ტექნიკა',
      placeholder: 'აირჩიეთ გაზომვის ტექნიკა...',
      help: 'გაზომვის მეთოდი სიზუსტისთვის'
    },
    
    technique_options: {
      transvaginal: 'ტრანსვაგინალური ულტრაბგერა',
      transabdominal: 'ტრანსაბდომინალური ულტრაბგერა',
      digital_exam: 'ციფრული გამოცდა'
    },
    
    funneling: {
      label: 'ღია საშვილოსნოს შიდა ღია',
      placeholder: 'აირჩიეთ ღიობის არსებობა...',
      help: 'ღია საშვილოსნოს შიდა ღია (ღრუბელი)'
    },
    
    funneling_options: {
      none: 'ღია არ არის',
      minimal: 'მინიმალური ღია (<5მმ)',
      moderate: 'ზომიერი ღია (5-10მმ)',
      severe: 'მნიშვნელოვანი ღია (>10მმ)'
    },
    
    // Risk Factors
    risk_factors_title: 'დამატებითი რისკის ფაქტორები',
    multiple_gestation: {
      label: 'მრავალნაყოფიანი ორსულობა',
      help: 'ტყუპები ან უფრო მეტი'
    },
    
    cervical_surgery_history: {
      label: 'საშვილოსნოს ყელზე ქირურგია',
      help: 'LEEP, კონიზაცია, ტრაქელექტომია'
    },
    
    smoking: {
      label: 'მოწევა ორსულობაში',
      help: 'მიმდინარე ან ბოლოდროინდელი მოწევა'
    },
    
    infections: {
      label: 'გენიტალური ინფექციები',
      help: 'BV, ქლამიდია, სხვა STI'
    },
    
    // Validation Messages
    validation: {
      gestational_age_required: 'გესტაციური ასაკი აუცილებელია',
      gestational_age_range: 'გესტაციური ასაკი უნდა იყოს 14-32 კვირის ფარგლებში',
      pregnancy_history_required: 'ორსულობის ისტორია აუცილებელია',
      cervical_length_required: 'საშვილოსნოს ყელის სიგრძე აუცილებელია',
      cervical_length_range: 'საშვილოსნოს ყელის სიგრძე უნდა იყოს 10-60 მმ ფარგლებში',
      measurement_technique_required: 'გაზომვის ტექნიკა აუცილებელია',
      funneling_required: 'ღიობის ინფორმაცია აუცილებელია'
    },
    
    // Results
    results: {
      title: 'საშვილოსნოს ყელის სიგრძის შეფასების შედეგები',
      cervical_length: 'საშვილოსნოს ყელის სიგრძე',
      preterm_risk: 'ადრეული მშობიარობის რისკი',
      risk_category: 'რისკის კატეგორია',
      percentile: 'გესტაციური ასაკის პერცენტილი',
      
      // Risk Categories
      risk_categories: {
        low: 'დაბალი რისკი',
        moderate: 'ზომიერი რისკი', 
        high: 'მაღალი რისკი',
        very_high: 'ძალიან მაღალი რისკი'
      },
      
      // Risk Percentages
      risk_percentages: {
        before_32_weeks: 'რისკი <32 კვირამდე',
        before_34_weeks: 'რისკი <34 კვირამდე', 
        before_37_weeks: 'რისკი <37 კვირამდე'
      },
      
      // Length Interpretation
      length_interpretation: {
        normal: 'ნორმალური სიგრძე (≥25მმ)',
        borderline: 'ზღვრული სიგრძე (20-24მმ)',
        short: 'მოკლე სიგრძე (15-19მმ)',
        very_short: 'ძალიან მოკლე სიგრძე (<15მმ)'
      }
    },
    
    // Clinical Recommendations
    recommendations: {
      title: 'კლინიკური რეკომენდაციები',
      
      low_risk: {
        title: 'დაბალი რისკის მენეჯმენტი',
        routine_care: 'რუტინული პრენატალური მზრუნველობა',
        follow_up: 'სტანდარტული უზრუნველყოფა',
        education: 'ადრეული მშობიარობის ნიშნებზე განათლება'
      },
      
      moderate_risk: {
        title: 'ზომიერი რისკის მენეჯმენტი',
        monitoring: 'გაძლიერებული მონიტორინგი',
        repeat_scan: 'გამეორებითი სკანირება 2-4 კვირაში',
        education: 'ინტენსიური პაციენტის განათლება',
        lifestyle: 'ცხოვრების წესის მოდიფიკაცია'
      },
      
      high_risk: {
        title: 'მაღალი რისკის მენეჯმენტი', 
        specialist_referral: 'მატერნალ-ფეტალური სპეციალისტთან კონსულტაცია',
        serial_monitoring: 'სერიული მონიტორინგი',
        progesterone: 'პროგესტერონის თერაპიის განხილვა',
        cerclage: 'ცერკლაჟის განხილვა',
        activity_restriction: 'აქტივობის შეზღუდვა'
      },
      
      very_high_risk: {
        title: 'ძალიან მაღალი რისკის მენეჯმენტი',
        immediate_specialist: 'დაუყოვნებელი სპეციალისტის კონსულტაცია',
        cerclage_urgent: 'ცერკლაჟის გადაუდებელი განხილვა',
        hospitalization: 'ჰოსპიტალიზაციის განხილვა',
        steroids: 'ანტენატალური სტეროიდების განხილვა',
        delivery_planning: 'ადრეული მშობიარობის გეგმავა'
      }
    },
    
    // About Section  
    about: {
      title: 'საშვილოსნოს ყელის სიგრძის შეფასების შესახებ',
      subtitle: 'ადრეული მშობიარობის რისკის განსაზღვრა ულტრაბგერითი შეფასებით',
      
      clinical_purpose: {
        title: 'კლინიკური მიზანი',
        description: 'საშვილოსნოს ყელის სიგრძის გაზომვა არის ყველაზე ეფექტური მეთოდი ადრეული მშობიარობის რისკის შესაფასებლად. მოკლე საშვილოსნოს ყელი (<25მმ) მიუთითებს გაზრდილ რისკზე, რაც საშუალებას იძლევა პრევენციული ღონისძიებები განხორციელდეს.'
      },
      
      measurement_technique: {
        title: 'ზუსტი გაზომვის ტექნიკა',
        description: 'ტრანსვაგინალური ულტრაბგერა ყველაზე ზუსტი მეთოდია',
        
        optimal_conditions: {
          title: 'ოპტიმალური პირობები',
          timing: 'მოვლენა: 16-24 კვირა (ოპტიმალური)',
          preparation: 'მომზადება: ნაწლავის დაცლა',
          technique: 'ტექნიკა: საშვილოსნოს ყელის სრული ვიზუალიზაცია'
        },
        
        measurement_criteria: {
          title: 'გაზომვის კრიტერიუმები',
          visualization: 'სრული საშვილოსნოს ყელის ვიზუალიზაცია',
          pressure: 'უნდა ავირიდოთ ძლიერი წნევა',
          landmarks: 'შიდა და გარე ღიების იდენტიფიკაცია'
        }
      },
      
      risk_stratification: {
        title: 'რისკის სტრატიფიკაცია',
        description: 'რისკის კატეგორიები საშვილოსნოს ყელის სიგრძის მიხედვით',
        
        normal_length: {
          title: 'ნორმალური სიგრძე (≥25მმ)',
          risk: 'ადრეული მშობიარობის რისკი: <5%',
          management: 'რუტინული მზრუნველობა'
        },
        
        short_cervix: {
          title: 'მოკლე საშვილოსნოს ყელი (<25მმ)',
          mild: '20-24მმ: ზომიერი რისკი (10-15%)',
          moderate: '15-19მმ: მაღალი რისკი (25-35%)',
          severe: '<15მმ: ძალიან მაღალი რისკი (50%+)'
        }
      },
      
      interventions: {
        title: 'ჩარევის ღონისძიებები',
        description: 'მტკიცებულებაზე დაფუძნებული პრევენციული ღონისძიებები',
        
        progesterone: {
          title: 'პროგესტერონის თერაპია',
          indication: 'მიუთითება: მოკლე საშვილოსნოს ყელი + ერთბიჭვიანი ორსულობა',
          dosage: 'დოზირება: ვაგინალური 200მგ ყოველღამ',
          timing: 'დრო: 16-36 კვირამდე'
        },
        
        cerclage: {
          title: 'ცერკლაჟი',
          indication: 'მიუთითება: ძალიან მოკლე საშვილოსნოს ყელი <15მმ',
          timing: 'დრო: 14-24 კვირა',
          success: 'წარმატების მაჩვენებელი: 60-80%'
        }
      },
      
      limitations: {
        title: 'შეზღუდვები',
        operator_dependent: 'ოპერატორზე დამოკიდებული ტექნიკა',
        gestational_age: 'გესტაციური ასაკის სიზუსტე მნიშვნელოვანია',
        individual_variation: 'ინდივიდუალური ცვალებადობა',
        prediction_limitations: 'პროგნოზირება არა 100%-ით ზუსტია'
      }
    },
    
    // Footer
    footer: {
      guidelines: 'ACOG/SMFM 2021 გაიდლაინების საფუძველზე',
      educational: 'საგანმანათლებლო მიზნებისთვის მხოლოდ'
    }
  },

  // ორსულობაში წონის მატების კალკულატორი
  pregnancyWeightGain: {
    title: 'ორსულობაში წონის მატების კალკულატორი',
    subtitle: 'ჯანსაღი წონის მატების მონიტორინგი',
    description: 'ორსულობაში რეკომენდებული წონის მატების გამოთვლა სხეულის მასის ინდექსისა და IOM რეკომენდაციების საფუძველზე',
    
    // საწყისი მონაცემები
    baseline_data: 'საწყისი მონაცემები',
    pre_pregnancy_weight_label: 'წონა ორსულობამდე (კგ)',
    pre_pregnancy_weight_placeholder: 'შეიყვანეთ წონა ორსულობამდე',
    pre_pregnancy_weight_help: 'ქალის წონა ორსულობის დაწყებამდე',
    pre_pregnancy_weight_error: 'წონა უნდა იყოს 35-200 კგ-ს შორის',
    
    height_label: 'სიმაღლე (სმ)',
    height_placeholder: 'შეიყვანეთ სიმაღლე',
    height_help: 'ქალის სიმაღლე სანტიმეტრებში',
    height_error: 'სიმაღლე უნდა იყოს 140-220 სმ-ს შორის',
    
    pregnancy_type_label: 'ორსულობის ტიპი',
    singleton_pregnancy: 'ერთნაყოფიანი ორსულობა',
    twin_pregnancy: 'ტყუპები',
    triplet_pregnancy: 'სამეული',
    
    // მიმდინარე მონაცემები
    current_data: 'მიმდინარე მონაცემები',
    current_gestational_age_label: 'მიმდინარე გესტაციური ასაკი',
    current_gestational_age_weeks: 'კვირები',
    current_gestational_age_days: 'დღეები',
    current_gestational_age_error: 'გესტაციური ასაკი უნდა იყოს 4-42 კვირის შორის',
    
    current_weight_label: 'მიმდინარე წონა (კგ)',
    current_weight_placeholder: 'შეიყვანეთ მიმდინარე წონა',
    current_weight_help: 'მიმდინარე წონა ორსულობის დროს',
    current_weight_error: 'მიმდინარე წონა უნდა იყოს 35-250 კგ-ს შორის',
    
    // BMI ანალიზი
    bmi_analysis: 'BMI ანალიზი',
    pre_pregnancy_bmi: 'BMI ორსულობამდე',
    bmi_category: 'BMI კატეგორია',
    
    underweight: 'წონაკლებულობა',
    underweight_range: '<18.5 კგ/მ²',
    normal_weight: 'ნორმალური წონა',
    normal_weight_range: '18.5-24.9 კგ/მ²',
    overweight: 'ზედმეტი წონა',
    overweight_range: '25.0-29.9 კგ/მ²',
    obese: 'სიმსუქნე',
    obese_range: '≥30.0 კგ/მ²',
    
    // წონის მატების რეკომენდაციები
    weight_gain_recommendations: 'წონის მატების რეკომენდაციები',
    total_recommended_gain: 'საერთო რეკომენდებული მატება',
    weekly_recommended_gain: 'კვირეული მატება II-III ტრიმესტრში',
    
    // წონის მატება BMI კატეგორიების მიხედვით
    underweight_gain: '12.5-18 კგ',
    normal_weight_gain: '11.5-16 კგ',
    overweight_gain: '7-11.5 კგ',
    obese_gain: '5-9 კგ',
    
    underweight_weekly: '0.5 კგ/კვირა',
    normal_weight_weekly: '0.4 კგ/კვირა',
    overweight_weekly: '0.3 კგ/კვირა',
    obese_weekly: '0.2 კგ/კვირა',
    
    // მრავალნაყოფიანი ორსულობა
    twin_gain_normal: '17-25 კგ (ნორმალური BMI)',
    twin_gain_overweight: '14-23 კგ (ზედმეტი წონა)',
    twin_gain_obese: '11-19 კგ (სიმსუქნე)',
    
    // მიმდინარე პროგრესი
    current_progress: 'მიმდინარე პროგრესი',
    total_weight_gained: 'საერთო წონის მატება',
    expected_weight_range: 'მოსალოდნელი დიაპაზონი ამ ვადაზე',
    weight_gain_assessment: 'წონის მატების შეფასება',
    
    appropriate_gain: 'ადეკვატური მატება',
    insufficient_gain: 'არასაკმარისი მატება',
    excessive_gain: 'ზედმეტი მატება',
    
    // ტრიმესტრული დანაწილება
    trimester_breakdown: 'ტრიმესტრული დანაწილება',
    first_trimester_gain: 'I ტრიმესტრი (1-13 კვირა)',
    first_trimester_expected: '1-2 კგ საერთო მატება',
    second_trimester_gain: 'II ტრიმესტრი (14-27 კვირა)',
    third_trimester_gain: 'III ტრიმესტრი (28-40 კვირა)',
    
    // კვების რეკომენდაციები
    nutritional_recommendations: 'კვების რეკომენდაციები',
    caloric_needs: 'კალორიულობა',
    first_trimester_calories: 'I ტრიმესტრი: +0 კკალ/დღე',
    second_trimester_calories: 'II ტრიმესტრი: +340 კკალ/დღე',
    third_trimester_calories: 'III ტრიმესტრი: +450 კკალ/დღე',
    
    balanced_diet: 'დაბალანსებული დიეტა',
    protein_needs: 'ცილები: +25გ/დღე',
    folate_needs: 'ფოლიუმის მჟავა: 400-800 მკგ/დღე',
    iron_needs: 'რკინა: 27 მგ/დღე',
    calcium_needs: 'კალციუმი: 1000 მგ/დღე',
    
    // გაფრთხილებები
    weight_gain_warnings: 'მნიშვნელოვანი მომენტები',
    rapid_weight_gain: 'სწრაფი წონის მატება შეიძლება მიუთითებდეს პრეეკლამფსიაზე',
    weight_loss_concern: 'წონის დაკლება საჭიროებს სამედიცინო შეფასებას',
    individual_factors: 'გაითვალისწინეთ ინდივიდუალური თავისებურებები',
    medical_consultation: 'რეგულარულად კონსულტაცია ექიმთან',
    
    // ღილაკები
    calculate_button: 'წონის მატების გამოთვლა',
    track_progress: 'პროგრესის თვალყურდევნება',
    new_assessment: 'ახალი შეფასება',
    
    // ვალიდაცია
    all_fields_required: 'შეავსეთ ყველა სავალდებულო ველი',
    valid_gestational_age: 'მიუთითეთ სწორი გესტაციური ასაკი',
    weight_increase_only: 'მიმდინარე წონა უნდა იყოს საწყისზე მეტი'
  }
  ,

  // ორსული ქალებისთვის BMI კალკულატორი
  pregnancyBmi: {
    title: 'ორსული ქალებისთვის BMI კალკულატორი',
    subtitle: 'ორსულობაში სხეულის მასის ინდექსი',
    description: 'ორსული ქალებისთვის BMI-ის გამოთვლა და ინტერპრეტაცია წონის მატებისა და კვების რეკომენდაციებით',
    
    // ძირითადი ზომები
    basic_measurements: 'ძირითადი ზომები',
    height_label: 'სიმაღლე (სმ)',
    height_placeholder: 'შეიყვანეთ სიმაღლე სანტიმეტრებში',
    height_help: 'ქალის სიმაღლე (140-220 სმ)',
    height_error: 'სიმაღლე უნდა იყოს 140-220 სმ-ს შორის',
    
    pre_pregnancy_weight_label: 'წონა ორსულობამდე (კგ)',
    pre_pregnancy_weight_placeholder: 'შეიყვანეთ წონა ორსულობამდე',
    pre_pregnancy_weight_help: 'წონა ორსულობის დაწყებამდე',
    pre_pregnancy_weight_error: 'წონა უნდა იყოს 35-200 კგ-ს შორის',
    
    current_weight_label: 'მიმდინარე წონა (კგ)',
    current_weight_placeholder: 'შეიყვანეთ მიმდინარე წონა',
    current_weight_help: 'მიმდინარე წონა ორსულობის დროს (არასავალდებულო)',
    current_weight_error: 'მიმდინარე წონა უნდა იყოს 35-250 კგ-ს შორის',
    
    gestational_age_label: 'გესტაციური ასაკი',
    gestational_age_weeks: 'კვირები',
    gestational_age_days: 'დღეები',
    gestational_age_help: 'ორსულობის მიმდინარე ვადა',
    gestational_age_error: 'გესტაციური ასაკი უნდა იყოს 4-42 კვირის შორის',
    
    // BMI შედეგები
    bmi_results: 'BMI შედეგები',
    pre_pregnancy_bmi: 'BMI ორსულობამდე',
    current_bmi: 'მიმდინარე BMI',
    bmi_category: 'BMI კატეგორია',
    bmi_interpretation: 'ინტერპრეტაცია',
    
    // BMI კატეგორიები
    underweight: 'წონაკლებულობა',
    underweight_range: '< 18.5 კგ/მ²',
    underweight_description: 'დაბალი წონა შეიძლება ნეგატიურად იმოქმედოს ნაყოფის განვითარებაზე',
    
    normal_weight: 'ნორმალური წონა',
    normal_weight_range: '18.5 - 24.9 კგ/მ²',
    normal_weight_description: 'ოპტიმალური წონა ჯანსაღი ორსულობისთვის',
    
    overweight: 'ზედმეტი წონა',
    overweight_range: '25.0 - 29.9 კგ/მ²',
    overweight_description: 'ორსულობის გართულებების გაზრდილი რისკი',
    
    obese_class1: 'I ხარისხის სიმსუქნე',
    obese_class1_range: '30.0 - 34.9 კგ/მ²',
    obese_class1_description: 'ზომიერი სიმსუქნე, საჭიროებს სამედიცინო ზედამხედველობას',
    
    // ღილაკები
    calculate_bmi: 'BMI-ის გამოთვლა',
    reset_calculator: 'გასუფთავება',
    
    // ვალიდაცია
    height_required: 'მიუთითეთ სიმაღლე',
    weight_required: 'მიუთითეთ წონა ორსულობამდე'
  }

  // ედინბურგის მშობიარობის შემდგომი დეპრესიის სკრინინგი (EPDS)
  epds: {
    title: 'ედინბურგის მშობიარობის შემდგომი დეპრესიის სკრინინგი',
    subtitle: 'EPDS კითხვარი',
    description: 'მშობიარობის შემდგომი დეპრესიისა და შფოთვის შეფასების სკრინინგი 10 კითხვით',
    
    // ინსტრუქციები
    instructions: 'ინსტრუქციები',
    instruction_text: 'გთხოვთ აირჩიოთ პასუხი, რომელიც ყველაზე კარგად აღწერს თქვენს გრძნობებს ბოლო 7 დღის განმავლობაში:',
    timing_note: 'გამოიყენება 6 კვირიდან მშობიარობის შემდეგ',
    
    // ღილაკები
    calculate_button: 'ქულების გამოთვლა',
    reset_button: 'თავიდან დაწყება',
    
    // შედეგები
    results: {
      total_score: 'საერთო ქულა',
      score_interpretation: 'ქულების ინტერპრეტაცია',
      risk_level: 'რისკის დონე',
      recommendations: 'რეკომენდაციები'
    },
    
    // ვალიდაცია
    all_questions_required: 'გთხოვთ უპასუხოთ ყველა კითხვას',
    complete_assessment: 'შეავსეთ შეფასება'
  },

  // პრეეკლამპსიის რისკის კალკულატორი
  preeclampsiaRisk: {
    title: 'პრეეკლამპსიის რისკის კალკულატორი',
    subtitle: 'პრეეკლამპსიის განვითარების რისკის შეფასება',
    description: 'პრეეკლამპსიის განვითარების რისკის კომპლექსური შეფასება დედის რისკის ფაქტორებისა და კლინიკური მონაცემების საფუძველზე',
    
    // დემოგრაფიული ფაქტორები
    demographic_factors: 'დემოგრაფიული ფაქტორები',
    maternal_age_label: 'დედის ასაკი (წლები)',
    maternal_age_placeholder: 'შეიყვანეთ დედის ასაკი',
    maternal_age_help: 'დედის ასაკი გავლენას ახდენს პრეეკლამპსიის რისკზე',
    maternal_age_error: 'ასაკი უნდა იყოს 15-50 წლის შორის',
    
    // BMI
    pre_pregnancy_bmi_label: 'BMI ორსულობამდე (კგ/მ²)',
    pre_pregnancy_bmi_placeholder: 'შეიყვანეთ BMI ორსულობამდე',
    pre_pregnancy_bmi_help: 'სხეულის მასის ინდექსი ორსულობის დაწყებამდე',
    pre_pregnancy_bmi_error: 'BMI უნდა იყოს 15-50 კგ/მ²-ს შორის',
    
    // აკუშერული ანამნეზი
    obstetric_history: 'აკუშერული ანამნეზი',
    previous_preeclampsia_label: 'პრეეკლამპსია ანამნეზში',
    previous_preeclampsia_options: {
      none: 'ანამნეზში პრეეკლამპსია არ ყოფილა',
      mild: 'მსუბუქი პრეეკლამპსია ანამნეზში',
      severe: 'მძიმე პრეეკლამპსია ანამნეზში',
      eclampsia: 'ეკლამპსია ანამნეზში',
      hellp: 'HELLP-სინდრომი ანამნეზში'
    },
    
    // სამედიცინო ანამნეზი
    medical_history: 'სამედიცინო ანამნეზი',
    chronic_hypertension_label: 'ქრონიკული არტერიული ჰიპერტენზია',
    diabetes_mellitus_label: 'შაქრიანი დიაბეტი',
    kidney_disease_label: 'თირკმლის დაავადებები',
    
    // მიმდინარე ორსულობა
    current_pregnancy: 'მიმდინარე ორსულობა',
    gestational_age_label: 'გესტაციური ასაკი (კვირები)',
    gestational_age_placeholder: 'შეიყვანეთ გესტაციური ასაკი',
    gestational_age_help: 'ორსულობის მიმდინარე ვადა',
    gestational_age_error: 'გესტაციური ასაკი უნდა იყოს 6-42 კვირის შორის',
    
    multiple_pregnancy_label: 'მრავალნაყოფიანი ორსულობა',
    multiple_pregnancy_options: {
      singleton: 'ერთნაყოფიანი ორსულობა',
      twins: 'ტყუპები',
      triplets: 'სამეული და მეტი'
    },
    
    // მიმდინარე კლინიკური მონაცემები
    current_clinical_data: 'მიმდინარე კლინიკური მონაცემები',
    current_bp_label: 'მიმდინარე არტერიული წნევა',
    systolic_bp_label: 'სისტოლური წნევა (მმ ვწყალბ)',
    diastolic_bp_label: 'დიასტოლური წნევა (მმ ვწყალბ)',
    bp_help: 'ბოლო გაზომვების საშუალო მნიშვნელობა',
    bp_error: 'წნევა უნდა იყოს 80-250 მმ ვწყალბ დიაპაზონში',
    
    proteinuria_label: 'პროტეინურია',
    proteinuria_options: {
      none: 'არ არის',
      trace: 'ცილის კვალი',
      mild: 'მსუბუქი პროტეინურია (1+)',
      moderate: 'ზომიერი პროტეინურია (2+)',
      severe: 'გამოხატული პროტეინურია (3-4+)'
    },
    
    // შედეგები
    risk_assessment_results: 'რისკის შეფასების შედეგები',
    overall_risk_level: 'საერთო რისკის დონე',
    risk_percentage: 'რისკის პროცენტული მაჩვენებელი',
    
    // რისკის კატეგორიები
    low_risk: 'პრეეკლამპსიის დაბალი რისკი',
    low_risk_percentage: '5%-ზე ნაკლები',
    low_risk_description: 'ორსულობის სტანდარტული დაკვირვება',
    
    moderate_risk: 'პრეეკლამპსიის ზომიერი რისკი',
    moderate_risk_percentage: '5-15%',
    moderate_risk_description: 'გაძლიერებული დაკვირვება და პროფილაქტიკა',
    
    high_risk: 'პრეეკლამპსიის მაღალი რისკი',
    high_risk_percentage: '15-25%',
    high_risk_description: 'ინტენსიური დაკვირვება და პროფილაქტიკა',
    
    very_high_risk: 'პრეეკლამპსიის ძალიან მაღალი რისკი',
    very_high_risk_percentage: '25%-ზე მეტი',
    very_high_risk_description: 'მაქსიმალური დაკვირვება და აგრესიული პროფილაქტიკა',
    
    // კლინიკური რეკომენდაციები
    clinical_recommendations: 'კლინიკური რეკომენდაციები',
    
    low_risk_management: 'რეკომენდაციები დაბალი რისკის შემთხვევაში',
    moderate_risk_management: 'რეკომენდაციები ზომიერი რისკის შემთხვევაში',
    high_risk_management: 'რეკომენდაციები მაღალი რისკის შემთხვევაში',
    
    // პროფილაქტიკა
    prevention_strategies: 'პროფილაქტიკის სტრატეგიები',
    aspirin_prophylaxis: 'ასპირინით პროფილაქტიკა',
    low_dose_aspirin: 'ასპირინის დაბალი დოზები (75-150 მგ/დღეში)',
    
    // მონიტორინგი
    monitoring_protocol: 'მონიტორინგის პროტოკოლი',
    bp_monitoring: 'არტერიული წნევის მონიტორინგი',
    laboratory_monitoring: 'ლაბორატორიული მონიტორინგი',
    
    // ღილაკები
    calculate_button: 'რისკის გამოთვლა',
    reset_button: 'თავიდან დაწყება',
    
    // ვალიდაცია
    all_fields_required: 'შეავსეთ ყველა სავალდებულო ველი',
    invalid_values: 'არასწორი მნიშვნელობები',
    complete_assessment: 'შეავსეთ შეფასება'
  },

  // მშობიარობის პროგრესის კალკულატორი
  laborProgress: {
    title: 'მშობიარობის პროგრესის კალკულატორი',
    subtitle: 'მშობიარობის მსვლელობის შეფასება',
    description: 'მშობიარობის პროგრესის მონიტორინგი და შეფასება პარტოგრამისა და კლინიკური პარამეტრების გამოყენებით',
    
    // მშობიარის ინფორმაცია
    maternal_information: 'მშობიარის მონაცემები',
    maternal_age_label: 'მშობიარის ასაკი (წლები)',
    maternal_age_placeholder: 'შეიყვანეთ მშობიარის ასაკი',
    maternal_age_help: 'ასაკი გავლენას ახდენს მშობიარობის მსვლელობაზე',
    maternal_age_error: 'ასაკი უნდა იყოს 15-50 წლის შორის',
    
    gestational_age_label: 'გესტაციური ასაკი (კვირები)',
    gestational_age_placeholder: 'შეიყვანეთ გესტაციური ასაკი',
    gestational_age_help: 'ორსულობის ვადა მშობიარობის დროს',
    gestational_age_error: 'გესტაციური ასაკი უნდა იყოს 24-42 კვირის შორის',
    
    parity_label: 'პარიტეტი',
    parity_help: 'წინა მშობიარობების რაოდენობა',
    nulliparous: 'პირველშობილი',
    primiparous: 'მეორემშობილი',
    multiparous: 'მრავალშობილი',
    grand_multiparous: 'მრავალშობილი (5+ მშობიარობა)',
    
    // მშობიარობის დაწყება
    labor_onset: 'მშობიარობის დაწყება',
    labor_onset_time_label: 'რეგულარული შეკუმშვების დაწყების დრო',
    labor_onset_time_help: 'როდის დაიწყო რეგულარული ტკივილიანი შეკუმშვები',
    
    labor_type_label: 'მშობიარობის დაწყების ტიპი',
    labor_type_options: {
      spontaneous: 'სპონტანური დაწყება',
      induced_medical: 'მედიკამენტოზური ინდუქცია',
      induced_amniotomy: 'ამნიოტომია',
      induced_combined: 'კომბინირებული ინდუქცია'
    },
    
    membrane_status_label: 'ნაყოფისა და გაჭიანურების მდგომარეობა',
    membrane_options: {
      intact: 'მთლიანი',
      ruptured_spontaneous: 'სპონტანური გახევა',
      ruptured_artificial: 'ხელოვნური ამნიოტომია',
      high_rupture: 'მაღალი გვერდითი გახევა'
    },
    
    // საშვილოსნოს ყელის შეფასება
    cervical_assessment: 'საშვილოსნოს ყელის შეფასება',
    
    cervical_dilation_label: 'საშვილოსნოს ყელის გახსნა (სმ)',
    cervical_dilation_placeholder: 'შეიყვანეთ გახსნა სმ-ში',
    cervical_dilation_help: 'საშვილოსნოს ყელის შიდა ღია ნაწილის დიამეტრი',
    cervical_dilation_error: 'გახსნა უნდა იყოს 0-10 სმ-ს შორის',
    
    cervical_effacement_label: 'საშვილოსნოს ყელის გატონვა (%)',
    cervical_effacement_placeholder: 'შეიყვანეთ გატონვის პროცენტი',
    cervical_effacement_help: 'საშვილოსნოს ყელის მოკლების ხარისხი',
    cervical_effacement_error: 'გატონვა უნდა იყოს 0-100%-ს შორის',
    
    // ნაყოფის პრეზენტაცია და პოზიცია
    fetal_presentation: 'ნაყოფის პრეზენტაცია და მდებარეობა',
    
    presentation_label: 'ნაყოფის პრეზენტაცია',
    presentation_options: {
      vertex: 'თავის პრეზენტაცია',
      breech: 'მწვერვალის პრეზენტაცია',
      shoulder: 'განივი მდებარეობა',
      face: 'სახის პრეზენტაცია',
      brow: 'შუბლის პრეზენტაცია'
    },
    
    station_label: 'თავის მდგომარეობის სიმაღლე (სტაცია)',
    station_placeholder: 'შეიყვანეთ სტაცია (-3-დან +3-მდე)',
    station_help: 'წამყვანი ნაწილის შეფარდება მისჯილოვან ქანცებთან',
    station_error: 'სტაცია უნდა იყოს -5-დან +5-მდე',
    
    // შეკუმშვების შეფასება
    contraction_assessment: 'შეკუმშვების შეფასება',
    
    contraction_frequency_label: 'შეკუმშვების სიხშირე (10 წუთში)',
    contraction_frequency_placeholder: 'შეიყვანეთ შეკუმშვების რაოდენობა',
    contraction_frequency_help: '10 წუთში შეკუმშვების რაოდენობა',
    contraction_frequency_error: 'სიხშირე უნდა იყოს 0-8 შეკუმშვა/10წთ',
    
    contraction_duration_label: 'შეკუმშვების ხანგრძლივობა (წამი)',
    contraction_duration_placeholder: 'შეიყვანეთ ხანგრძლივობა',
    contraction_duration_help: 'ერთი შეკუმშვის საშუალო ხანგრძლივობა',
    contraction_duration_error: 'ხანგრძლივობა უნდა იყოს 15-120 წამის შორის',
    
    contraction_strength_label: 'შეკუმშვების სიძლიერე',
    contraction_strength_options: {
      mild: 'სუსტი შეკუმშვები',
      moderate: 'საშუალო სიძლიერის შეკუმშვები',
      strong: 'ძლიერი შეკუმშვები'
    },
    
    // მშობიარობის ხანგრძლივობა
    labor_duration: 'მშობიარობის ხანგრძლივობა',
    hours_in_labor_label: 'მშობიარობაში გატარებული დრო (საათები)',
    hours_in_labor_placeholder: 'შეიყვანეთ საათების რაოდენობა',
    hours_in_labor_help: 'რეგულარული შეკუმშვების დაწყებიდან დრო',
    hours_in_labor_error: 'დრო უნდა იყოს 0-48 საათის შორის',
    
    // მშობიარობის ფაზები
    labor_phases: 'მშობიარობის ფაზები',
    current_phase: 'მშობიარობის მიმდინარე ფაზა',
    latent_phase: 'ლატენტური ფაზა (0-6 სმ)',
    active_phase: 'აქტიური ფაზა (6-10 სმ)',
    transition_phase: 'გარდამავალი ფაზა (8-10 სმ)',
    second_stage: 'გამოდევნის პერიოდი',
    
    // გახსნის პროგრესი
    dilation_progress: 'გახსნის პროგრესი',
    expected_dilation_rate: 'მოსალოდნელი გახსნის სისწრაფე',
    nulliparous_rate: 'პირველშობილი: 1.2 სმ/საათ (აქტიური ფაზა)',
    multiparous_rate: 'მეორემშობილი: 1.5 სმ/საათ (აქტიური ფაზა)',
    
    // მშობიარობის ანომალიები
    labor_abnormalities: 'მშობიარობის ანომალიები',
    protracted_labor: 'გახანგრძლივებული მშობიარობა',
    arrested_labor: 'მშობიარობის შეჩერება',
    precipitous_labor: 'სწრაფი მშობიარობა',
    
    // რისკის შეფასება
    risk_assessment: 'რისკის შეფასება',
    normal_progress: 'მშობიარობის ნორმალური პროგრესი',
    slow_progress: 'მშობიარობის ნელი პროგრესი',
    arrested_progress: 'მშობიარობის პროგრესის შეჩერება',
    rapid_progress: 'მშობიარობის სწრაფი პროგრესი',
    
    // მართვის რეკომენდაციები
    management_recommendations: 'მართვის რეკომენდაციები',
    normal_management: 'ნორმალური მშობიარობის მართვა',
    slow_labor_management: 'ნელი მშობიარობის მართვა',
    
    // ღილაკები
    calculate_button: 'პროგრესის გამოთვლა',
    reset_button: 'თავიდან დაწყება',
    monitor_button: 'მონიტორინგის გაგრძელება',
    
    // ვალიდაცია
    all_fields_required: 'შეავსეთ ყველა სავალდებულო ველი',
    invalid_measurements: 'არასწორი ზომები',
    complete_assessment: 'შეავსეთ შეფასება'
  },

  // საკვერცხეების კიბოს რისკის კალკულატორი
  ovarianCancerRisk: {
    title: 'საკვერცხეების კიბოს რისკის კალკულატორი',
    subtitle: 'საკვერცხეების კიბოს განვითარების რისკის შეფასება',
    description: 'საკვერცხეების კიბოს განვითარების რისკის კომპლექსური შეფასება გენეტიკური, ოჯახური და რეპროდუქციული რისკის ფაქტორების საფუძველზე',
    
    // ძირითადი ინფორმაცია
    cancer_risk_overview: 'საკვერცხეების კიბოს რისკის ზოგადი ინფორმაცია',
    ovarian_cancer_facts: 'საკვერცხეების კიბო - კიბოსგან სიკვდილის მეხუთე მიზეზი ქალებში',
    risk_assessment_importance: 'რისკის შეფასების მნიშვნელობა ადრეული გამოვლენისთვის',
    genetic_component: 'მნიშვნელოვანი გენეტიკური კომპონენტი',
    
    // დემოგრაფიული ფაქტორები
    demographic_factors: 'დემოგრაფიული ფაქტორები',
    patient_age_label: 'პაციენტის ასაკი (წლები)',
    patient_age_placeholder: 'შეიყვანეთ პაციენტის ასაკი',
    patient_age_help: 'ასაკი არის ძირითადი რისკის ფაქტორი',
    patient_age_error: 'ასაკი უნდა იყოს 18-90 წლის შორის',
    
    // გენეტიკური ფაქტორები
    genetic_factors: 'გენეტიკური ფაქტორები',
    brca_mutation_label: 'BRCA1/BRCA2 მუტაციები',
    brca_options: {
      unknown: 'უცნობია',
      negative: 'ტესტირება უარყოფითი',
      brca1_positive: 'BRCA1 მუტაცია გამოვლენილია',
      brca2_positive: 'BRCA2 მუტაცია გამოვლენილია',
      both_positive: 'ორივე მუტაცია გამოვლენილია'
    },
    
    lynch_syndrome_label: 'ლინჩის სინდრომი',
    lynch_options: {
      unknown: 'უცნობია',
      negative: 'გამორიცხულია',
      positive: 'დადასტურებულია'
    },
    
    // ოჯახური ანამნეზი
    family_history: 'ოჯახური ანამნეზი',
    family_ovarian_cancer_label: 'საკვერცხეების კიბო ნათესავებში',
    family_ovarian_options: {
      none: 'არ არის',
      one_relative: 'ერთი ნათესავი',
      multiple_relatives: 'რამდენიმე ნათესავი',
      first_degree: 'პირველი ხარისხის ნათესავი'
    },
    
    family_breast_cancer_label: 'ძუძუს კიბო ნათესავებში',
    family_breast_options: {
      none: 'არ არის',
      one_relative: 'ერთი ნათესავი',
      multiple_relatives: 'რამდენიმე ნათესავი',
      early_onset: 'ადრეული ასაკი (<50 წელი)'
    },
    
    // რეპროდუქციული ფაქტორები
    reproductive_factors: 'რეპროდუქციული ფაქტორები',
    parity_label: 'მშობიარობების რაოდენობა',
    parity_options: {
      nulliparous: 'არამშობიარე',
      one_birth: 'ერთი მშობიარობა',
      two_three_births: '2-3 მშობიარობა',
      four_plus_births: '4+ მშობიარობა'
    },
    
    breastfeeding_duration_label: 'ძუძუთი კვების მთლიანი ხანგრძლივობა',
    breastfeeding_options: {
      never: 'არასოდეს',
      less_6_months: '6 თვეზე ნაკლები',
      six_12_months: '6-12 თვე',
      more_12_months: '12 თვეზე მეტი'
    },
    
    // შედეგები და რეკომენდაციები
    risk_assessment_results: 'რისკის შეფასების შედეგები',
    lifetime_risk: 'სიცოცხლის განმავლობაში რისკი (%)',
    
    low_risk: 'დაბალი რისკი (<5%)',
    moderate_risk: 'ზომიერი რისკი (5-20%)',
    high_risk: 'მაღალი რისკი (20-40%)',
    very_high_risk: 'ძალიან მაღალი რისკი (>40%)',
    
    // კლინიკური რეკომენდაციები
    screening_recommendations: 'სკრინინგის რეკომენდაციები',
    calculate_risk: 'საკვერცხეების კიბოს რისკის გამოთვლა'
  },

  // საშვილოსნოს ყელის კიბოს სკრინინგის კალკულატორი
  cervicalCancerScreening: {
    title: 'საშვილოსნოს ყელის კიბოს სკრინინგის კალკულატორი',
    subtitle: 'საშვილოსნოს ყელის კიბოს სკრინინგის რეკომენდაციები',
    description: 'საშვილოსნოს ყელის კიბოს სკრინინგის პერსონალიზებული რეკომენდაციები ასაკის, ანამნეზისა და წინა კვლევების შედეგების საფუძველზე',
    
    // ძირითადი ინფორმაცია
    screening_overview: 'სკრინინგის ზოგადი ინფორმაცია',
    cervical_cancer_prevention: 'სკრინინგი - საშვილოსნოს ყელის კიბოს პროფილაქტიკის საფუძველი',
    early_detection: 'წინაკიბოური ცვლილებების ადრეული გამოვლენა',
    evidence_based: 'რეკომენდაციები საერთაშორისო სტანდარტებზეა დაფუძნებული',
    
    // პაციენტის დემოგრაფიული მონაცემები
    patient_demographics: 'პაციენტის მონაცემები',
    patient_age_label: 'პაციენტის ასაკი (წლები)',
    patient_age_placeholder: 'შეიყვანეთ პაციენტის ასაკი',
    patient_age_help: 'ასაკი განსაზღვრავს სკრინინგის მეთოდებს და სიხშირეს',
    patient_age_error: 'ასაკი უნდა იყოს 16-80 წლის შორის',
    
    sexual_activity_age_label: 'სქესობრივი ცხოვრების დაწყების ასაკი',
    sexual_activity_placeholder: 'შეიყვანეთ სქესობრივი აქტივობის დაწყების ასაკი',
    sexual_activity_help: 'გავლენას ახდენს HPV ინფექციის რისკზე',
    
    // სკრინინგის ანამნეზი
    screening_history: 'სკრინინგის ანამნეზი',
    previous_pap_label: 'წინა ციტოლოგიური კვლევები',
    previous_pap_options: {
      never: 'არასოდეს არ ჩატარებულა',
      normal_recent: 'ნორმალური შედეგები (ბოლო 3 წელი)',
      normal_old: 'ნორმალური შედეგები (3 წელზე მეტი)',
      abnormal_treated: 'არანორმალური შედეგები (განკურნებული)',
      abnormal_untreated: 'არანორმალური შედეგები (არ განკურნებულა)'
    },
    
    last_pap_date_label: 'ბოლო ციტოლოგიური კვლევის თარიღი',
    last_pap_help: 'როდის ჩატარდა ბოლო კვლევა',
    
    hpv_testing_label: 'HPV ტესტირება',
    hpv_testing_options: {
      never: 'არასოდეს არ ჩატარებულა',
      negative: 'უარყოფითი შედეგი',
      positive_hr: 'დადებითი მაღალი რისკის HPV',
      positive_16_18: 'დადებითი HPV 16/18',
      unknown: 'შედეგი უცნობია'
    },
    
    // რისკის ფაქტორები
    risk_factors: 'რისკის ფაქტორები',
    smoking_status_label: 'მოწევა',
    smoking_options: {
      never: 'არასოდეს არ უმწევია',
      former: 'მწეველი იყო წარსულში',
      current: 'ამჟამად მწეველია'
    },
    
    immunosuppression_label: 'იმუნოსუპრესია',
    immunosuppression_options: {
      none: 'არ არის',
      hiv_positive: 'HIV დადებითი',
      organ_transplant: 'ორგანოს ტრანსპლანტაცია',
      immunosuppressive_drugs: 'იმუნოსუპრესული თერაპია'
    },
    
    // შედეგები და რეკომენდაციები
    screening_recommendations: 'სკრინინგის რეკომენდაციები',
    
    age_21_29: 'ასაკი 21-29 წელი',
    age_30_65: 'ასაკი 30-65 წელი',
    age_over_65: 'ასაკი 65 წელზე მეტი',
    
    high_risk_recommendations: 'მაღალი რისკის ჯგუფების რეკომენდაციები',
    
    // ღილაკები
    calculate_recommendations: 'რეკომენდაციების გამოთვლა',
    reset_button: 'თავიდან დაწყება',
    
    // ვალიდაცია
    all_fields_required: 'შეავსეთ ყველა სავალდებულო ველი',
    invalid_age: 'არასწორი ასაკი',
    complete_assessment: 'შეავსეთ შეფასება'
  }
};

export default obgynCalculators; 