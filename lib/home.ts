export const home = {
  metaTitle: 'Savvy | Home',
  metaDescription: 'Welcome to savvy!',
  heading: 'We are Savvy.',
  ingress:
    'Savvy is a new consulting firm with a clear vision. We have built this company from the ground up to make sure that our consultants are competent, ambitious, and happy. We do not believe in bread and circus, we believe in transparency, equality, and adventure.',
  clients: [
    {
      logoPath: '/images/vipps.svg',
      backgroundPath: '/images/client-background-1.svg',
      name: 'BankID'
    },
    {
      logoPath: '/images/fdir.svg',
      backgroundPath: '/images/client-background-2.svg',
      name: 'Fiskeridirektoratet'
    },
    {
      logoPath: '/images/fjordtours.svg',
      backgroundPath: '/images/client-background-3.svg',
      name: 'Fjord Tours'
    },
    {
      logoPath: '/images/Sbanken_logo.svg',
      backgroundPath: '/images/Sbanken_bakgrunn.png',
      name: 'Sbanken'
    },
    {
      logoPath: '/images/adventure_tech_logo.svg',
      backgroundPath: '/images/client-background-4.svg',
      name: 'Adventure Tech'
    }
  ],
  competence: [
    'Software development',
    'Architecture',
    'Agile',
    'Mobile',
    'Web',
    'Frontend',
    'Backend',
    'Full stack',
    'Tech Lead',
    'Java',
    '.NET',
    'Javascript',
    'React',
    'Angular'
  ]
};

export type Home = typeof home;