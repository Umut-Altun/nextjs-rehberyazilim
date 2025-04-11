import { InlineCode } from "@/once-ui/components";

const person = {
  firstName: "Rehber",
  lastName: "Yazılım",
  get name() {
    return `${this.firstName} ${this.lastName}`;
  },
  role: "Yazılım ve Web Geliştirme Şirketi",
  avatar: "/images/avatar.jpg",
  location: "Europe/Istanbul", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["İngilizce", "Türkçe"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter = {
  display: true,
  title: <>Rehber Yazılım Bültenine Abone Ol</>,
  description: (
    <>
      Yazılım, teknoloji ve dijital dönüşüm hakkında bilgilendirici içerikler ve güncel gelişmeleri sizinle paylaşıyoruz.
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
  title: `Rehber Yazılım - Web ve Yazılım Çözümleri`,
  description: `Rehber Yazılım olarak modern web ve yazılım çözümleri sunuyoruz`,
  headline: <>Modern Yazılım ve Web Çözümleri</>,
  subline: (
    <>
      <InlineCode>Rehber Yazılım</InlineCode> olarak işletmenize özel web siteleri, mobil uygulamalar ve yazılım çözümleri geliştiriyoruz. 
      Dijital dönüşüm yolculuğunuzda teknoloji çözümleriyle yanınızdayız.
    </>
  ),
};

const about = {
  label: "Hakkımızda",
  title: "Hakkımızda",
  description: `Rehber Yazılım ile tanışın - Modern teknoloji çözümleri`,
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
      Rehber Yazılım olarak, modern teknolojilerle işletmelerin dijital dönüşümüne öncülük ediyoruz. Web uygulamaları, masaüstü yazılımlar, özel geliştirme çözümleri ve e-ticaret sistemleri ile işletmenizin ihtiyaçlarına uygun çözümler sunuyoruz. Tecrübeli ekibimizle, her projeye özgün yaklaşımlar getirerek müşterilerimizin beklentilerini aşmayı hedefliyoruz.
      </>
    ),
  },
  work: {
    display: true, // set to false to hide this section
    title: "Hizmet Alanlarımız",
    experiences: [
      {
        company: "Web Geliştirme",
        timeframe: "2020 - Günümüz",
        role: "Kurumsal Web Çözümleri",
        achievements: [
          <>
            Şirketlere özel, modern ve responsive tasarımlı web siteleri geliştiriyoruz.
          </>,
          <>
            E-ticaret, rezervasyon sistemleri ve özel web uygulamaları ile işletmelerin dijital varlığını güçlendiriyoruz.
          </>,
        ],
        images: [
          // optional: leave the array empty if you don't want to display images
          {
            src: "/images/projects/project-01/cover-01.jpg",
            alt: "Web Project",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        company: "Yazılım Çözümleri",
        timeframe: "2020 - Günümüz",
        role: "Özel Yazılım Geliştirme",
        achievements: [
          <>
            İşletme ihtiyaçlarına özel otomasyon sistemleri ve yazılım çözümleri geliştiriyoruz.
          </>,
          <>
            Kullanıcı dostu arayüzler ve güçlü altyapılarla, verimliliği artıran uygulamalar sunuyoruz.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Uzmanlık Alanlarımız",
    institutions: [
      {
        name: "Web Teknolojileri",
        description: <>React, Next.js, Django ve diğer modern web teknolojileriyle profesyonel çözümler.</>,
      },
      {
        name: "Otomasyon Sistemleri",
        description: <>İşletmelere özel talep ve ihtiyaçlara göre otomasyon yazılımları.</>,
      },
    ],
  },
  technical: {
    display: true, // set to false to hide this section
    title: "Teknolojilerimiz",
    skills: [
      {
        title: "Modern Web Teknolojileri",
        description: <>React, Next.js, TypeScript ve modern front-end teknolojileri ile gelişmiş kullanıcı deneyimleri sunuyoruz.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-02.jpg",
            alt: "Modern web teknolojileri",
            width: 16,
            height: 9,
          },
          {
            src: "/images/projects/project-01/cover-03.jpg",
            alt: "Web uygulamaları",
            width: 16,
            height: 9,
          },
        ],
      },
      {
        title: "Back-end Çözümleri",
        description: <>Django, Node.js, ve SQL/NoSQL veritabanları ile güvenli ve ölçeklenebilir altyapılar kuruyoruz.</>,
        // optional: leave the array empty if you don't want to display images
        images: [
          {
            src: "/images/projects/project-01/cover-04.jpg",
            alt: "Back-end teknolojileri",
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
  title: "Yazılım ve Teknoloji Rehberi",
  description: `Rehber Yazılım'ın paylaştığı güncel teknoloji yazıları ve bilgilendirici kaynaklar`,
  // app/blog/posts'a yeni bir .mdx dosyası ekleyerek yeni blog gönderileri oluşturun
  // Tüm gönderiler /blog rotasında listelenecektir
};

const work = {
  label: "Hizmetlerimiz",
  title: "Projelerimiz ve Hizmetlerimiz",
  description: `Rehber Yazılım tarafından geliştirilen projeler ve verdiğimiz hizmetler`,
  // Yeni proje sayfaları eklemek için app/blog/posts dizinine yeni bir .mdx dosyası ekleyin
  // All projects will be listed on the /home and /work routes
};

const gallery = {
  label: "Galeri",
  title: "Proje Galerimiz",
  description: `Rehber Yazılım'ın tamamladığı projelerden görüntüler ve ekran görüntüleri`,
  // Images from example projects
  images: [
    {
      src: "/images/gallery/django.png",
      alt: "Django Projesi",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/rehberpos/adisyon-1.png",
      alt: "Rehber POS",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/rehberpos/adisyon-2.png",
      alt: "Adisyon Sistemi",
      orientation: "horizontal",
    },
    {
      src: "/images/projects/rehberpos/adisyon-3.png",
      alt: "Sipariş Ekranı",
      orientation: "horizontal", 
    },
    {
      src: "/images/projects/aicu/aicu.png",
      alt: "Üniversite Web Sitesi",
      orientation: "horizontal",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
