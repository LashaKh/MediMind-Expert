import React, { useState, useMemo } from 'react';
import { Search, BookOpen, FileText, ChevronDown, ChevronRight, Filter, Grid, List } from 'lucide-react';
import { useSpecialty } from '../../contexts/SpecialtyContext';
import { MedicalSpecialty } from '../../contexts/SpecialtyContext';

// Knowledge base data structure
interface KnowledgeBaseResource {
  id: string;
  title: string;
  category: 'book' | 'guideline';
  year?: number;
  authors?: string[];
  organization?: string;
  description?: string;
  tags?: string[];
}

// Cardiology Knowledge Base Data
const cardiologyResources: KnowledgeBaseResource[] = [
  // Books
  {
    id: 'cardio-book-1',
    title: "Braunwald's Heart Disease: A Textbook of Cardiovascular Medicine, Eleventh Edition",
    category: 'book',
    authors: ['Douglas L. Mann', 'Douglas P. Zipes', 'Peter Libby', 'Robert O. Bonow'],
    description: 'The definitive textbook on cardiovascular medicine',
    tags: ['comprehensive', 'textbook', 'reference']
  },
  {
    id: 'cardio-book-2',
    title: 'Clinical Cardiology: Current Practice Guidelines',
    category: 'book',
    description: 'Current practice guidelines for clinical cardiology',
    tags: ['guidelines', 'clinical', 'practice']
  },
  {
    id: 'cardio-book-3',
    title: 'The ESC Textbook of Intensive and Acute Cardiovascular Care THIRD EDITION',
    category: 'book',
    organization: 'European Society of Cardiology',
    description: 'Comprehensive guide to intensive and acute cardiovascular care',
    tags: ['intensive care', 'acute care', 'ESC']
  },
  {
    id: 'cardio-book-4',
    title: 'Practical Cardiovascular Medicine',
    category: 'book',
    authors: ['Elias B. Hanna'],
    year: 2022,
    description: 'Practical approach to cardiovascular medicine',
    tags: ['practical', 'clinical']
  },
  {
    id: 'cardio-book-5',
    title: 'Manual of Cardiovascular Medicine First edition',
    category: 'book',
    year: 2021,
    description: 'Manual of cardiovascular medicine',
    tags: ['manual', 'reference']
  },
  {
    id: 'cardio-book-6',
    title: 'Cardiology Secrets, 6th Edition',
    category: 'book',
    authors: ['Glenn N. Levine'],
    year: 2022,
    description: 'Secrets series for cardiology',
    tags: ['secrets', 'review', 'Q&A']
  },
  {
    id: 'cardio-book-7',
    title: 'Hemodynamic Rounds: Interpretation of Cardiac Pathophysiology from Pressure Waveform Analysis',
    category: 'book',
    authors: ['Goldstein, James A.', 'Kern, Morton J.', 'Lim, Michael J'],
    year: 2018,
    description: 'Hemodynamic interpretation and cardiac pathophysiology',
    tags: ['hemodynamics', 'pathophysiology', 'waveforms']
  },
  {
    id: 'cardio-book-8',
    title: 'The ESC Textbook of Cardiovascular Medicine [2 Volume Set]',
    category: 'book',
    authors: ['A. John Camm', 'Thomas F. Lüscher', 'Gerald Maurer', 'Patrick W. Serruys'],
    year: 2019,
    organization: 'European Society of Cardiology',
    description: 'Comprehensive ESC textbook on cardiovascular medicine',
    tags: ['ESC', 'comprehensive', 'textbook']
  },
  {
    id: 'cardio-book-9',
    title: "Goldberger's Clinical Electrocardiography: A Simplified Approach",
    category: 'book',
    authors: ['Ary L. Goldberger', 'Zachary D. Goldberger', 'Alexei Shvilkin'],
    year: 2024,
    description: 'Simplified approach to clinical electrocardiography',
    tags: ['ECG', 'electrocardiography', 'clinical']
  },
  {
    id: 'cardio-book-10',
    title: 'Interventional Cardiology: Principles and Practice',
    category: 'book',
    authors: ['George D. Dangas', 'Carlo Di Mario', 'Holger Thiele', 'Peter Barlis'],
    year: 2022,
    description: 'Principles and practice of interventional cardiology',
    tags: ['interventional', 'catheterization', 'procedures']
  },
  {
    id: 'cardio-book-11',
    title: "ASE's Comprehensive Echocardiography",
    category: 'book',
    authors: ['American Society of Echocardiography'],
    year: 2021,
    organization: 'American Society of Echocardiography',
    description: 'Comprehensive guide to echocardiography',
    tags: ['echocardiography', 'imaging', 'ASE']
  },
  {
    id: 'cardio-book-12',
    title: 'Clinical Electrocardiography: A Textbook',
    category: 'book',
    authors: ['Antoni Bayés de Luna', 'Miguel Fiol-Sala', 'Antoni Bayés-Genís', 'Adrian Baranchuk'],
    year: 2022,
    description: 'Clinical electrocardiography textbook',
    tags: ['ECG', 'electrocardiography', 'textbook']
  },

  // Guidelines
  {
    id: 'cardio-guideline-1',
    title: '2020 ESC Guidelines for the diagnosis and management of atrial fibrillation developed in collaboration with the European Association for Cardio-Thoracic Surgery (EACTS)',
    category: 'guideline',
    year: 2020,
    organization: 'European Society of Cardiology',
    description: 'Comprehensive guidelines for atrial fibrillation management',
    tags: ['atrial fibrillation', 'ESC', 'EACTS', 'arrhythmia']
  },
  {
    id: 'cardio-guideline-2',
    title: '2021 ESC Guidelines on cardiac pacing and cardiac resynchronization therapy',
    category: 'guideline',
    year: 2021,
    organization: 'European Society of Cardiology',
    description: 'Guidelines for cardiac pacing and CRT',
    tags: ['pacing', 'CRT', 'ESC', 'device therapy']
  },
  {
    id: 'cardio-guideline-3',
    title: '2022 ESC Guidelines for the management of patients with ventricular arrhythmias and the prevention of sudden cardiac death',
    category: 'guideline',
    year: 2022,
    organization: 'European Society of Cardiology',
    description: 'Ventricular arrhythmias and sudden cardiac death prevention',
    tags: ['ventricular arrhythmias', 'sudden cardiac death', 'ESC']
  },
  {
    id: 'cardio-guideline-4',
    title: '2023 ESC Guidelines for the management of cardiovascular disease in patients with diabetes',
    category: 'guideline',
    year: 2023,
    organization: 'European Society of Cardiology',
    description: 'Cardiovascular disease management in diabetic patients',
    tags: ['diabetes', 'cardiovascular disease', 'ESC']
  },
  {
    id: 'cardio-guideline-5',
    title: '2023 ESC Guidelines for the management of endocarditis',
    category: 'guideline',
    year: 2023,
    organization: 'European Society of Cardiology',
    description: 'Management of endocarditis',
    tags: ['endocarditis', 'infection', 'ESC']
  },
  {
    id: 'cardio-guideline-6',
    title: '2018 ESC Guidelines for the diagnosis and management of syncope',
    category: 'guideline',
    year: 2018,
    organization: 'European Society of Cardiology',
    description: 'Diagnosis and management of syncope',
    tags: ['syncope', 'ESC', 'diagnosis']
  },
  {
    id: 'cardio-guideline-7',
    title: '2023 Focused Update of the 2021 ESC Guidelines for the diagnosis and treatment of acute and chronic heart failure',
    category: 'guideline',
    year: 2023,
    organization: 'European Society of Cardiology',
    description: 'Updated guidelines for heart failure management',
    tags: ['heart failure', 'ESC', 'update']
  },
  {
    id: 'cardio-guideline-8',
    title: '2020 ESC Guidelines for the management of adult congenital heart disease',
    category: 'guideline',
    year: 2020,
    organization: 'European Society of Cardiology',
    description: 'Management of adult congenital heart disease',
    tags: ['congenital heart disease', 'adult', 'ESC']
  },
  {
    id: 'cardio-guideline-9',
    title: '2019 ESC Guidelines for the management of patients with supraventricular tachycardia',
    category: 'guideline',
    year: 2019,
    organization: 'European Society of Cardiology',
    description: 'Management of supraventricular tachycardia',
    tags: ['supraventricular tachycardia', 'arrhythmia', 'ESC']
  },
  {
    id: 'cardio-guideline-10',
    title: '2023 ESC Guidelines for the management of cardiomyopathies',
    category: 'guideline',
    year: 2023,
    organization: 'European Society of Cardiology',
    description: 'Management of cardiomyopathies',
    tags: ['cardiomyopathies', 'ESC']
  }
];

// OB/GYN Knowledge Base Data  
const obgynResources: KnowledgeBaseResource[] = [
  {
    id: 'obgyn-guideline-1',
    title: 'Systemic Treatment of Patients with Metastatic Breast Cancer: ASCO Resource-Stratified Guideline',
    category: 'guideline',
    authors: ['Al-Sukhun et al.'],
    year: 2024,
    organization: 'ASCO',
    description: 'Guidelines for metastatic breast cancer treatment',
    tags: ['breast cancer', 'metastatic', 'ASCO', 'oncology']
  },
  {
    id: 'obgyn-guideline-2',
    title: 'Diagnosis and Treatment of Non-Muscle Invasive Bladder Cancer: AUA SUO Guideline 2024 Amendment',
    category: 'guideline',
    authors: ['Holzbeierlein et al.'],
    year: 2024,
    organization: 'AUA SUO',
    description: 'Guidelines for non-muscle invasive bladder cancer',
    tags: ['bladder cancer', 'AUA', 'urology']
  },
  {
    id: 'obgyn-guideline-3',
    title: 'Cardiovascular Disease in Pregnancy and Postpartum Algorithm',
    category: 'guideline',
    description: 'Algorithm for cardiovascular disease management in pregnancy and postpartum',
    tags: ['cardiovascular', 'pregnancy', 'postpartum', 'algorithm']
  },
  {
    id: 'obgyn-guideline-4',
    title: 'Hypertension Algorithm (America College of Ob Gym)',
    category: 'guideline',
    year: 2023,
    organization: 'ACOG',
    description: 'Hypertension management algorithm for obstetrics',
    tags: ['hypertension', 'ACOG', 'pregnancy']
  },
  {
    id: 'obgyn-guideline-5',
    title: 'Eclampsia Algorithm (America College of Ob Gym)',
    category: 'guideline',
    year: 2023,
    organization: 'ACOG',
    description: 'Eclampsia management algorithm',
    tags: ['eclampsia', 'ACOG', 'pregnancy', 'emergency']
  },
  {
    id: 'obgyn-guideline-6',
    title: 'Caesarean Birth NICE',
    category: 'guideline',
    year: 2025,
    organization: 'NICE',
    description: 'NICE guidelines for caesarean birth',
    tags: ['caesarean', 'NICE', 'birth', 'delivery']
  },
  {
    id: 'obgyn-guideline-7',
    title: 'Permanent Contraception Ethical Issues and Considerations ACOG',
    category: 'guideline',
    year: 2024,
    organization: 'ACOG',
    description: 'Ethical considerations for permanent contraception',
    tags: ['contraception', 'sterilization', 'ethics', 'ACOG']
  },
  {
    id: 'obgyn-guideline-8',
    title: 'Influenza in Pregnancy Prevention and Treatment ACOG',
    category: 'guideline',
    year: 2023,
    organization: 'ACOG',
    description: 'Influenza management during pregnancy',
    tags: ['influenza', 'pregnancy', 'ACOG', 'infection']
  },
  {
    id: 'obgyn-guideline-9',
    title: 'ESGOeESMOeESP Consensus Conference Recommendations on Ovarian Cancer: Pathology and Molecular Biology and Early, Advanced and Recurrent Disease',
    category: 'guideline',
    organization: 'ESGO/ESMO/ESP',
    description: 'Consensus recommendations on ovarian cancer management',
    tags: ['ovarian cancer', 'ESGO', 'ESMO', 'ESP', 'consensus', 'oncology']
  },
  {
    id: 'obgyn-guideline-10',
    title: 'Guideline on Haemoglobin Cutoffs to Define Anaemia in Individuals and Populations WHO',
    category: 'guideline',
    year: 2023,
    organization: 'WHO',
    description: 'WHO guidelines for anaemia definition',
    tags: ['anaemia', 'hemoglobin', 'WHO']
  },
  {
    id: 'obgyn-guideline-11',
    title: 'British Association for Sexual Health and HIV National Guideline for the Management of Anogenital Warts in Adults',
    category: 'guideline',
    year: 2024,
    organization: 'BASHH',
    description: 'National guideline for anogenital warts management',
    tags: ['anogenital warts', 'BASHH', 'sexual health', 'HIV']
  },
  {
    id: 'obgyn-guideline-12',
    title: 'Ovarian Cancer: Identifying and Managing Familial and Genetic Risk NICE Guideline',
    category: 'guideline',
    year: 2024,
    organization: 'NICE',
    description: 'Guidelines for ovarian cancer genetic risk management',
    tags: ['ovarian cancer', 'genetic', 'NICE', 'oncology', 'familial']
  },
  {
    id: 'obgyn-guideline-13',
    title: 'EUROGUIDERM GUIDELINE LICHEN SCLEROSUS Version [1]',
    category: 'guideline',
    year: 2023,
    organization: 'EUROGUIDERM',
    description: 'European guideline for lichen sclerosus management',
    tags: ['lichen sclerosus', 'EUROGUIDERM', 'dermatology']
  },
  {
    id: 'obgyn-guideline-14',
    title: 'The AUA/SUFU Guideline on the Diagnosis and Treatment of Idiopathic Overactive Bladder',
    category: 'guideline',
    year: 2024,
    organization: 'AUA/SUFU',
    description: 'Guidelines for overactive bladder diagnosis and treatment',
    tags: ['overactive bladder', 'AUA', 'SUFU', 'urology']
  },
  {
    id: 'obgyn-guideline-15',
    title: 'ESHRE Guideline: Number of Embryos to Transfer During IVF/ICSI',
    category: 'guideline',
    year: 2024,
    organization: 'ESHRE',
    description: 'Guidelines for embryo transfer in IVF',
    tags: ['IVF', 'embryo transfer', 'ESHRE', 'fertility']
  },
  {
    id: 'obgyn-guideline-16',
    title: '2024 Canadian Urological Association Guideline: Female Stress Urinary Incontinence',
    category: 'guideline',
    year: 2024,
    organization: 'CUA',
    description: 'Canadian guidelines for female stress urinary incontinence',
    tags: ['stress incontinence', 'CUA', 'urology', 'Canadian']
  },
  {
    id: 'obgyn-guideline-17',
    title: 'EMAS Position Statement: Thyroid Disease and Menopause',
    category: 'guideline',
    year: 2024,
    organization: 'EMAS',
    description: 'Position statement on thyroid disease in menopause',
    tags: ['thyroid', 'menopause', 'EMAS', 'endocrine']
  },
  {
    id: 'obgyn-guideline-18',
    title: 'SIGN171 Management of Diabetes in Pregnancy: A National Clinical Guideline',
    category: 'guideline',
    year: 2024,
    organization: 'SIGN',
    description: 'Scottish guidelines for diabetes management in pregnancy',
    tags: ['diabetes', 'pregnancy', 'SIGN', 'Scottish']
  },
  {
    id: 'obgyn-guideline-19',
    title: 'Guideline for the Management of Conception and Pregnancy in Thalassaemia Syndromes: A British Society for Haematology Guideline',
    category: 'guideline',
    year: 2023,
    organization: 'BSH',
    description: 'Guidelines for thalassaemia management in pregnancy',
    tags: ['thalassaemia', 'pregnancy', 'BSH', 'haematology']
  },
  {
    id: 'obgyn-guideline-20',
    title: 'SAGES Guidelines for the Use of Laparoscopy During Pregnancy',
    category: 'guideline',
    year: 2023,
    organization: 'SAGES',
    description: 'Guidelines for laparoscopic surgery during pregnancy',
    tags: ['laparoscopy', 'pregnancy', 'SAGES', 'surgery']
  },
  {
    id: 'obgyn-guideline-21',
    title: 'European Society of Endocrinology and Endocrine Society Joint Clinical Guideline: Diagnosis and Therapy of Glucocorticoid-induced Adrenal Insufficiency',
    category: 'guideline',
    year: 2024,
    organization: 'ESE/Endocrine Society',
    description: 'Joint guidelines for glucocorticoid-induced adrenal insufficiency',
    tags: ['adrenal insufficiency', 'glucocorticoid', 'ESE', 'endocrine']
  },
  {
    id: 'obgyn-guideline-22',
    title: 'Clinical Practice Guidelines for the Care of Girls and Women with Turner Syndrome: Proceedings from the 2023 Aarhus International Turner Syndrome Meeting',
    category: 'guideline',
    year: 2023,
    description: 'Guidelines for Turner syndrome care',
    tags: ['Turner syndrome', 'genetic', 'international']
  },
  {
    id: 'obgyn-guideline-23',
    title: 'Society for Endocrinology Guideline for Understanding, Diagnosing and Treating Female Hypogonadism',
    category: 'guideline',
    year: 2023,
    organization: 'Society for Endocrinology',
    description: 'Guidelines for female hypogonadism',
    tags: ['hypogonadism', 'endocrine', 'female']
  },
  {
    id: 'obgyn-guideline-24',
    title: 'Society for Immunotherapy of Cancer (SITC) Clinical Practice Guideline on Immunotherapy for the Treatment of Gynecologic Cancer',
    category: 'guideline',
    year: 2024,
    organization: 'SITC',
    description: 'Guidelines for immunotherapy in gynecologic cancer',
    tags: ['immunotherapy', 'gynecologic cancer', 'SITC', 'oncology']
  },
  {
    id: 'obgyn-guideline-25',
    title: 'British HIV Association Guidelines on the Management of Opportunistic Infection in People Living with HIV: Considerations in Pregnancy',
    category: 'guideline',
    year: 2024,
    organization: 'BHIVA',
    description: 'HIV opportunistic infection management in pregnancy',
    tags: ['HIV', 'pregnancy', 'BHIVA', 'opportunistic infection']
  },
  {
    id: 'obgyn-guideline-26',
    title: 'CETARS/CAR Practice Guideline on Imaging the Pregnant Trauma Patient',
    category: 'guideline',
    year: 2024,
    organization: 'CETARS/CAR',
    description: 'Guidelines for imaging pregnant trauma patients',
    tags: ['trauma', 'pregnancy', 'imaging', 'CETARS', 'CAR']
  },
  {
    id: 'obgyn-guideline-27',
    title: 'Dyslipidemia Management in Women of Reproductive Potential: An Expert Clinical Consensus from the National Lipid Association',
    category: 'guideline',
    year: 2024,
    organization: 'NLA',
    description: 'Consensus on dyslipidemia in reproductive-age women',
    tags: ['dyslipidemia', 'reproductive health', 'NLA', 'lipids']
  },
  {
    id: 'obgyn-guideline-28',
    title: 'Vitamin D for the Prevention of Disease: An Endocrine Society Clinical Practice Guideline',
    category: 'guideline',
    year: 2024,
    organization: 'Endocrine Society',
    description: 'Clinical practice guideline for vitamin D',
    tags: ['vitamin D', 'prevention', 'endocrine']
  },
  {
    id: 'obgyn-guideline-29',
    title: 'Update on Criteria for Suspected Diagnosis of Intraamniotic Infection ACOG',
    category: 'guideline',
    year: 2024,
    organization: 'ACOG',
    description: 'Updated criteria for intraamniotic infection diagnosis',
    tags: ['intraamniotic infection', 'ACOG', 'pregnancy', 'infection']
  },
  {
    id: 'obgyn-guideline-30',
    title: 'The Use of Cannabis Products for the Management of Pain Associated With Gynecologic Conditions ACOG',
    category: 'guideline',
    year: 2024,
    organization: 'ACOG',
    description: 'Guidelines for cannabis use in gynecologic pain management',
    tags: ['cannabis', 'gynecologic pain', 'ACOG', 'pain management']
  },
  {
    id: 'obgyn-guideline-31',
    title: 'National Cervical Screening Program Guidelines. - Cancer Council Australia',
    category: 'guideline',
    year: 2024,
    organization: 'Cancer Council Australia',
    description: 'Australian cervical screening guidelines',
    tags: ['cervical screening', 'Australia', 'cancer screening']
  },
  {
    id: 'obgyn-guideline-32',
    title: 'Recommendations for the treatment of Trichomonas vaginalis, Mycoplasma genitalium, Candida albicans, bacterial vaginosis and human papillomavirus (anogenital warts) © World Health Organization',
    category: 'guideline',
    year: 2024,
    organization: 'WHO',
    description: 'WHO treatment recommendations for common gynecologic infections',
    tags: ['trichomonas', 'mycoplasma', 'candida', 'bacterial vaginosis', 'HPV', 'WHO']
  },
  {
    id: 'obgyn-guideline-33',
    title: 'Identification and Management of Ankyloglossia and Its Effect on Breastfeeding in Infants: Clinical Report -FROM THE AMERICAN ACADEMY OF PEDIATRICS',
    category: 'guideline',
    year: 2024,
    organization: 'AAP',
    description: 'AAP clinical report on ankyloglossia and breastfeeding',
    tags: ['ankyloglossia', 'breastfeeding', 'AAP', 'pediatrics']
  },
  {
    id: 'obgyn-guideline-34',
    title: 'U.S. Selected Practice Recommendations for Contraceptive Use',
    category: 'guideline',
    year: 2024,
    organization: 'CDC',
    description: 'U.S. recommendations for contraceptive use',
    tags: ['contraception', 'CDC', 'family planning']
  },
  {
    id: 'obgyn-guideline-35',
    title: 'AGA Clinical Practice Update on Pregnancy-Related Gastrointestinal and Liver Disease: Expert Review',
    category: 'guideline',
    year: 2024,
    organization: 'AGA',
    description: 'Update on GI and liver disease in pregnancy',
    tags: ['gastrointestinal', 'liver disease', 'pregnancy', 'AGA']
  },
  {
    id: 'obgyn-guideline-36',
    title: 'Society of Family Planning Clinical Recommendation: Induction of Fetal Asystole Before Abortion Jointly developed with the Society for Maternal-Fetal Medicine',
    category: 'guideline',
    year: 2024,
    organization: 'SFP/SMFM',
    description: 'Clinical recommendations for fetal asystole induction',
    tags: ['fetal asystole', 'abortion', 'SFP', 'SMFM']
  },
  {
    id: 'obgyn-guideline-37',
    title: 'WHO Recommendation on Screening of Pregnant Women for Intrapartum Antibiotic Prophylaxis for the Prevention of Early Onset Group B Streptococcus Disease in Newborns',
    category: 'guideline',
    year: 2024,
    organization: 'WHO',
    description: 'WHO recommendations for GBS screening and prophylaxis',
    tags: ['group B streptococcus', 'GBS', 'pregnancy', 'WHO', 'antibiotic prophylaxis']
  },
  {
    id: 'obgyn-guideline-38',
    title: 'BASHH UK Guidelines for the Management of Syphilis',
    category: 'guideline',
    year: 2024,
    organization: 'BASHH',
    description: 'UK guidelines for syphilis management',
    tags: ['syphilis', 'BASHH', 'sexual health', 'STI']
  },
  {
    id: 'obgyn-guideline-39',
    title: 'Joint British Association for Sexual Health and HIV and Royal College of Obstetricians and Gynaecologists National UK Guideline for the Management of Herpes Simplex Virus (HSV) in Pregnancy and the Neonate (2024 update)',
    category: 'guideline',
    year: 2024,
    organization: 'BASHH/RCOG',
    description: 'UK guidelines for HSV management in pregnancy',
    tags: ['herpes simplex', 'HSV', 'pregnancy', 'BASHH', 'RCOG']
  },
  {
    id: 'obgyn-guideline-40',
    title: 'Neuroendocrine Neoplasms of Head and Neck, Genitourinary and Gynaecological Systems, Unknown Primaries, Parathyroid Carcinomas and Intrathyroid Thymic Neoplasms: ESMO Clinical Practice Guideline',
    category: 'guideline',
    year: 2024,
    organization: 'ESMO',
    description: 'ESMO guidelines for neuroendocrine neoplasms',
    tags: ['neuroendocrine', 'ESMO', 'oncology', 'genitourinary', 'gynecological']
  }
];

type ViewMode = 'grid' | 'list';
type SortBy = 'title' | 'year' | 'category' | 'organization';

export const CuratedKnowledgeBasePage: React.FC = () => {
  const { specialty } = useSpecialty();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'book' | 'guideline'>('all');
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [viewMode, setViewMode] = useState<ViewMode>('grid');
  const [sortBy, setSortBy] = useState<SortBy>('title');
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    books: true,
    guidelines: true
  });

  // Get resources based on specialty
  const resources = specialty === MedicalSpecialty.CARDIOLOGY ? cardiologyResources : obgynResources;

  // Filter and search resources
  const filteredResources = useMemo(() => {
    let filtered = resources.filter(resource => {
      // Search filter
      const searchLower = searchTerm.toLowerCase();
      const matchesSearch = !searchTerm || 
        resource.title.toLowerCase().includes(searchLower) ||
        resource.description?.toLowerCase().includes(searchLower) ||
        resource.organization?.toLowerCase().includes(searchLower) ||
        resource.authors?.some(author => author.toLowerCase().includes(searchLower)) ||
        resource.tags?.some(tag => tag.toLowerCase().includes(searchLower));

      // Category filter
      const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;

      // Year filter
      const matchesYear = selectedYear === 'all' || 
        (selectedYear === 'recent' && resource.year && resource.year >= 2020) ||
        (selectedYear === 'older' && resource.year && resource.year < 2020) ||
        resource.year?.toString() === selectedYear;

      return matchesSearch && matchesCategory && matchesYear;
    });

    // Sort resources
    filtered.sort((a, b) => {
      switch (sortBy) {
        case 'title':
          return a.title.localeCompare(b.title);
        case 'year':
          return (b.year || 0) - (a.year || 0);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'organization':
          return (a.organization || '').localeCompare(b.organization || '');
        default:
          return 0;
      }
    });

    return filtered;
  }, [resources, searchTerm, selectedCategory, selectedYear, sortBy]);

  // Group resources by category
  const groupedResources = useMemo(() => {
    const books = filteredResources.filter(r => r.category === 'book');
    const guidelines = filteredResources.filter(r => r.category === 'guideline');
    return { books, guidelines };
  }, [filteredResources]);

  // Get available years for filtering
  const availableYears = useMemo(() => {
    const years = resources
      .map(r => r.year)
      .filter((year): year is number => year !== undefined)
      .sort((a, b) => b - a);
    return [...new Set(years)];
  }, [resources]);

  const toggleCategory = (category: string) => {
    setExpandedCategories(prev => ({
      ...prev,
      [category]: !prev[category]
    }));
  };

  const specialtyName = specialty === MedicalSpecialty.CARDIOLOGY ? 'Cardiology' : 'OB/GYN';
  const specialtyColor = specialty === MedicalSpecialty.CARDIOLOGY ? 'blue' : 'pink';

  return (
    <div className="h-full bg-gray-50 overflow-auto">
      <div className="max-w-7xl mx-auto px-4 lg:px-6 py-6">
        {/* Search and Filter Controls */}
        <div className="space-y-4 mb-6">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <input
              type="text"
              placeholder="Search resources, authors, organizations..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-purple-500 bg-white"
            />
          </div>

          {/* Filter and View Controls */}
          <div className="flex flex-col sm:flex-row gap-4 justify-between items-start sm:items-center">
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setSelectedCategory('all')}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === 'all'
                    ? `bg-${specialtyColor} text-white`
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                All Categories
              </button>
              {['book', 'guideline'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category as any)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors capitalize ${
                    selectedCategory === category
                      ? `bg-${specialtyColor} text-white`
                      : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                  }`}
                >
                  {category}s ({filteredResources.filter(r => r.category === category).length})
                </button>
              ))}
            </div>

            {/* View Mode and Sort Controls */}
            <div className="flex items-center gap-3">
              {/* Sort Control */}
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as SortBy)}
                className="px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:ring-2 focus:ring-purple-500 focus:border-purple-500"
              >
                <option value="title">Sort by Title</option>
                <option value="year">Sort by Year</option>
                <option value="category">Sort by Category</option>
                <option value="organization">Sort by Organization</option>
              </select>

              {/* View Mode Toggle */}
              <div className="flex items-center bg-gray-200 rounded-lg p-1">
                <button
                  onClick={() => setViewMode('grid')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'grid' ? 'bg-white shadow-sm' : 'hover:bg-gray-300'
                  }`}
                  aria-label="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('list')}
                  className={`p-2 rounded transition-colors ${
                    viewMode === 'list' ? 'bg-white shadow-sm' : 'hover:bg-gray-300'
                  }`}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Results Summary */}
        <div className="mb-6 flex items-center justify-between">
          <div className="text-gray-600">
            <span className="font-medium text-gray-900">{filteredResources.length}</span> {specialty} resources
          </div>
          
          {/* Quick Filter Tags */}
          {searchTerm && (
            <div className="text-sm text-gray-500">
              Searching for: <span className="font-medium">"{searchTerm}"</span>
            </div>
          )}
        </div>

        {/* Resources Grid/List */}
        {filteredResources.length > 0 ? (
          <div className={
            viewMode === 'grid' 
              ? 'grid gap-6 md:grid-cols-2 lg:grid-cols-3' 
              : 'space-y-4'
          }>
            {filteredResources.map((resource) => (
              <ResourceCard
                key={resource.id}
                resource={resource}
                viewMode={viewMode}
                specialtyColor={specialtyColor}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <BookOpen className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">
              {searchTerm 
                ? `No resources match your search "${searchTerm}"`
                : 'No resources available for the selected filters'
              }
            </p>
            {searchTerm && (
              <button
                onClick={() => setSearchTerm('')}
                className="mt-4 px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

// Resource Card Component
interface ResourceCardProps {
  resource: KnowledgeBaseResource;
  viewMode: ViewMode;
  specialtyColor: string;
}

const ResourceCard: React.FC<ResourceCardProps> = ({ resource, viewMode, specialtyColor }) => {
  if (viewMode === 'list') {
    return (
      <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <div className="flex items-center space-x-2 mb-2">
              {resource.category === 'book' ? (
                <BookOpen className="w-4 h-4 text-blue-600" />
              ) : (
                <FileText className="w-4 h-4 text-green-600" />
              )}
              <span className={`px-2 py-1 bg-${resource.category === 'book' ? 'blue' : 'green'}-100 text-${resource.category === 'book' ? 'blue' : 'green'}-800 rounded text-xs font-medium`}>
                {resource.category === 'book' ? 'Book' : 'Guideline'}
              </span>
              {resource.year && (
                <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                  {resource.year}
                </span>
              )}
            </div>
            <h3 className="font-semibold text-gray-900 mb-1 line-clamp-2">
              {resource.title}
            </h3>
            {resource.authors && (
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Authors:</span> {resource.authors.join(', ')}
              </p>
            )}
            {resource.organization && (
              <p className="text-sm text-gray-600 mb-1">
                <span className="font-medium">Organization:</span> {resource.organization}
              </p>
            )}
            {resource.description && (
              <p className="text-sm text-gray-600 mb-2">{resource.description}</p>
            )}
            {resource.tags && (
              <div className="flex flex-wrap gap-1">
                {resource.tags.map(tag => (
                  <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                    {tag}
                  </span>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow h-full flex flex-col">
      <div className="flex items-center justify-between mb-2">
        <div className="flex items-center space-x-2">
          {resource.category === 'book' ? (
            <BookOpen className="w-4 h-4 text-blue-600" />
          ) : (
            <FileText className="w-4 h-4 text-green-600" />
          )}
          <span className={`px-2 py-1 bg-${resource.category === 'book' ? 'blue' : 'green'}-100 text-${resource.category === 'book' ? 'blue' : 'green'}-800 rounded text-xs font-medium`}>
            {resource.category === 'book' ? 'Book' : 'Guideline'}
          </span>
        </div>
        {resource.year && (
          <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
            {resource.year}
          </span>
        )}
      </div>

      <h3 className="font-semibold text-gray-900 mb-2 line-clamp-3 flex-1">
        {resource.title}
      </h3>

      {resource.authors && (
        <p className="text-sm text-gray-600 mb-1">
          <span className="font-medium">Authors:</span> {resource.authors.slice(0, 2).join(', ')}{resource.authors.length > 2 && '...'}
        </p>
      )}

      {resource.organization && (
        <p className="text-sm text-gray-600 mb-2">
          <span className="font-medium">Org:</span> {resource.organization}
        </p>
      )}

      {resource.description && (
        <p className="text-sm text-gray-600 mb-3 line-clamp-2">{resource.description}</p>
      )}

      {resource.tags && (
        <div className="flex flex-wrap gap-1 mt-auto">
          {resource.tags.slice(0, 3).map(tag => (
            <span key={tag} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
              {tag}
            </span>
          ))}
          {resource.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
              +{resource.tags.length - 3} more
            </span>
          )}
        </div>
      )}
    </div>
  );
}; 