export const documents = {
  title: 'დოკუმენტები',
  upload: {
    title: 'დოკუმენტის ატვირთვა',
    description: 'ატვირთეთ სამედიცინო დოკუმენტები AI ანალიზისთვის',
    dragDrop: 'გადმოიტანეთ ფაილები აქ ან დააწკაპუნეთ არჩევისთვის',
    selectFiles: 'ფაილების არჩევა',
    maxSize: 'მაქსიმალური ზომა: {{size}}MB',
    allowedTypes: 'ნებადართული ტიპები: PDF, DOC, DOCX, TXT, JPG, PNG',
    uploading: 'იტვირთება...',
    processing: 'მუშავდება...',
    success: 'დოკუმენტი წარმატებით აიტვირთა',
    error: 'დოკუმენტის ატვირთვა ვერ მოხერხდა',
    retry: 'ხელახლა ცდა'
  },
  library: {
    title: 'დოკუმენტების ბიბლიოთეკა',
    empty: 'დოკუმენტები ჯერ არ არის',
    search: 'დოკუმენტების ძებნა...',
    filter: 'ფილტრი',
    sort: 'დალაგება',
    sortBy: {
      name: 'სახელით',
      date: 'თარიღით',
      size: 'ზომით',
      type: 'ტიპით'
    },
    actions: {
      view: 'ნახვა',
      download: 'ჩამოტვირთვა',
      delete: 'წაშლა',
      share: 'გაზიარება',
      analyze: 'ანალიზი'
    }
  },
  viewer: {
    loading: 'დოკუმენტი იტვირთება...',
    error: 'დოკუმენტის ჩატვირთვა ვერ მოხერხდა',
    unsupported: 'ფაილის ფორმატი არ არის მხარდაჭერილი',
    download: 'ჩამოტვირთვა',
    print: 'ბეჭდვა',
    fullscreen: 'მთელ ეკრანზე',
    zoom: {
      in: 'გადიდება',
      out: 'დაპატარავება',
      fit: 'ეკრანზე მოთავსება',
      actual: 'რეალური ზომა'
    },
    pages: {
      previous: 'წინა გვერდი',
      next: 'შემდეგი გვერდი',
      goto: 'გვერდზე გადასვლა',
      of: '{{total}}-დან'
    }
  },
  categories: {
    all: 'ყველა',
    reports: 'ანგარიშები',
    images: 'სურათები',
    notes: 'ჩანაწერები',
    research: 'კვლევა',
    guidelines: 'სახელმძღვანელო',
    protocols: 'პროტოკოლები',
    forms: 'ფორმები',
    other: 'სხვა'
  },
  metadata: {
    fileName: 'ფაილის სახელი',
    fileSize: 'ფაილის ზომა',
    fileType: 'ფაილის ტიპი',
    uploadDate: 'ატვირთვის თარიღი',
    lastModified: 'ბოლო ცვლილება',
    author: 'ავტორი',
    description: 'აღწერა',
    tags: 'ტეგები',
    category: 'კატეგორია'
  },
  analysis: {
    title: 'დოკუმენტის ანალიზი',
    summary: 'რეზიუმე',
    keyPoints: 'მთავარი პუნქტები',
    recommendations: 'რეკომენდაციები',
    relatedDocuments: 'დაკავშირებული დოკუმენტები',
    confidence: 'საიმედოობის დონე',
    processing: 'ანალიზი მიმდინარეობს...',
    failed: 'ანალიზი ვერ მოხერხდა',
    noAnalysis: 'ანალიზი არ არის ხელმისაწვდომი'
  },
  sharing: {
    title: 'დოკუმენტის გაზიარება',
    link: 'გაზიარების ლინკი',
    generateLink: 'ლინკის გენერირება',
    copyLink: 'ლინკის კოპირება',
    linkCopied: 'ლინკი კოპირებულია',
    expiration: 'ვადის გასვლა',
    permissions: 'ნებართვები',
    viewOnly: 'მხოლოდ ნახვა',
    edit: 'რედაქტირება',
    download: 'ჩამოტვირთვა',
    revoke: 'ლინკის გაუქმება'
  },
  errors: {
    uploadFailed: 'ატვირთვა ვერ მოხერხდა',
    fileTooLarge: 'ფაილი ძალიან დიდია',
    invalidFileType: 'ფაილის ტიპი არ არის ნებადართული',
    networkError: 'ქსელის შეცდომა',
    serverError: 'სერვერის შეცდომა',
    notFound: 'დოკუმენტი ვერ მოიძებნა',
    accessDenied: 'წვდომა აკრძალულია',
    corruptedFile: 'ფაილი დაზიანებულია'
  }
};

export default documents; 