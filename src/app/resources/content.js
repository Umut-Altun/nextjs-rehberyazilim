import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Umut",
  lastName: "Altun",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Yazılım ve Web Geliştiricisi",
  avatar: "/images/avatar.jpg",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["İngilizce", "Türkçe"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>{person.firstName}'un Bültenine Abone Ol</>,
  description: (
    <>
      Tasarım, teknoloji hakkında yazıyor ve yaratıcılık ile mühendisliğin kesişimi 
      üzerine düşüncelerimi paylaşıyorum.
    </>
  ),
};

const social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/Umut-Altun",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/umut-altun-bb4918284",
  },
  {
    name: "X",
    icon: "x",
    link: "",
  },
  {
    name: "Email",
    icon: "email",
    link: "altunumut7@gmail.com",
  },
  {
    name: "YouTube",
    icon: "youtube",
    link: "https://www.youtube.com/@yapayrehber",
  },
];

const home = {
  label: "Ana Sayfa",
  title: `${person.name}'un Portfolyosu`,
  description: `${person.role} olarak çalışmalarımı sergileyen portfolyo web sitesi`,
  headline: <>Yazılım Geliştirici ve İçerik Üreticisi</>,
  subline: (
    <>
      Ben Umut, <InlineCode>Yapay Rehber</InlineCode>'in kurucusu ve baş geliştiricisiyim. Web teknolojileri ve yapay zeka alanında 4+ yıllık deneyimimle, 
      modern yazılım çözümleri geliştiriyor ve dijital dönüşüm süreçlerine öncülük ediyorum. 
    </>
  ),
};

const about = {
  label: "Hakkımda",
  title: "Hakkımda",
  description: `${person.location}'dan ${person.role} ${person.name} ile tanışın`,
  tableOfContent: {
    display: true,
    subItems: false,
  },
  avatar: {
    display: true,
  },
  calendar: {
    display: true,
    link: "https://www.youtube.com/@yapayrehber",
  },
  intro: {
    display: true,
    title: "Giriş",
    description: (
      <>
      Yazılım geliştirme alanında deneyimli bir geliştirici ve içerik üreticisiyim. Web tabanlı projeler, masaüstü uygulamalar, otomasyon sistemleri ve kullanıcı dostu arayüzler geliştirerek, ihtiyaçlara özel çözümler sunuyorum. 
      Farklı teknolojilerle gerçek dünyaya uygun projeler üretiyor; aynı zamanda bu süreçleri YouTube kanalımda paylaşarak öğrenmek isteyenlere rehberlik ediyorum.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Proje ve İş Deneyimi",
    experiences: [
      {
        company: "RehberAdisyon",
        timeframe: "2022 - Present",
        role: "Yazılım Geliştiricisi",
        achievements: [
          <>
            Restoran yönetimi ve dijital adisyon sistemleri geliştirerek işletmelerin operasyonel verimliliğini artırdım.
          </>,
          <>
            Python ve Django kullanarak ölçeklenebilir web uygulamaları geliştirip müşteri memnuniyetine katkıda bulundum.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Once UI Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "University Projects",
        timeframe: "2018 - 2020",
        role: "Girişimci Geliştirici",
        achievements: [
          <>
            Üniversite projeleri kapsamında öğrencilere yönelik öğrenme yönetim sistemleri ve etkileşimli web uygulamaları geliştirdim.
          </>,
          <>
            Açık kaynak projelerde aktif rol alarak topluluk katkıları sağladım.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Eğitim",
    institutions: [
      {
        name: "Boğaziçi Üniversitesi",
        description: <>Bilgisayar Mühendisliği alanında lisans eğitimi aldım.</>,
      },
      {
        name: "Coursera / Udemy",
        description: <>Modern yazılım teknolojileri, metodolojileri ve proje yönetimi konularında online kurslar tamamladım.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Teknik Beceriler",
    skills: [
      {
        title: "Figma",
        description: <>Once UI ile Figma'da olağanüstü hızda prototip oluşturabiliyorum.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Next.js",
        description: <>Next.js + Once UI + Supabase ile yeni nesil uygulamalar geliştiriyorum.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Project image",
            width: 16,
            height: 9,
          },
        ],
      },
    ],
  },
};

const blog = {
  label: "Blog",
  title: "Yazılım ve teknoloji hakkında yazılar...",
  description: `${person.name}'in son zamanlarda neler yaptığını okuyun`,
  // app/blog/posts'a yeni bir .mdx dosyası ekleyerek yeni blog gönderileri oluşturun
  // Tüm gönderiler /blog rotasında listelenecektir
};

const work = {
  label: "Çalışmalar",
  title: "Projelerim",
  description: `${person.name} tarafından tasarlanan ve geliştirilen projeler`,
  // Yeni proje sayfaları eklemek için app/blog/posts dizinine yeni bir .mdx dosyası ekleyin
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Galeri",
  title: "Fotoğraf galerim",
  description: `${person.name} tarafından oluşturulan fotoğraf koleksiyonu`,
  // Images from https://pexels.com
  images: [
    {
      src: "/images/gallery/django.png",
      alt: "django",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
