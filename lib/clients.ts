export const clients = {
  metaTitle: 'Savvy | Clients',
  metaDescription: 'These are our clients!',
  heading: 'Our clients',
  ingress:
    'We are proud of our clients and the work we have done for them. Due to the quality of our consultants we have had high profile clients from day one of our journey.',
  clients: [
    {
      logoPath: '/images/vipps.svg',
      backgroundPath: '/images/client-background-1-wide.svg',
      name: 'BankID',
      text: 'BankID is Norways most preferred solution for ID services, trusted by public services, banks, insurance, among many others. Savvy is contributing to the next generation of the BankID solutions.',
      websiteUrl: 'https://bankid.no'
    },
    {
      logoPath: '/images/adventure_tech_logo.svg',
      backgroundPath: '/images/client-background-4.svg',
      name: 'Adventure Tech',
      text: 'Adventure Tech is a Norwegian tech company providing software for the adventure travel business.',
      websiteUrl: 'https://adventuretech.no/'
    },
    {
      logoPath: '/images/fjordtours.svg',
      backgroundPath: '/images/client-background-2-wide.svg',
      name: 'Fjord Tours',
      text: 'Fjord Tours, founded in 1982, offers package tours, activities and hotels throughout Norway on both the Norwegian and international market. Savvy is aiding development of their core platform.',
      websiteUrl: 'https://fjordtours.com'
    },
    {
      logoPath: '/images/fdir.svg',
      backgroundPath: '/images/client-background-2.svg',
      name: 'Fiskeridirektoratet',
      text: "The Directorate of Fisheries is a branch of the Norwegian government that is responsible for managing Norway's marine resources. Savvy has been a part of a team that's been developing a new system for managing fishing quotas.",
      websiteUrl: 'https://fiskeridir.no'
    },
    {
      logoPath: '/images/Sbanken_logo.svg',
      backgroundPath: '/images/Sbanken_bakgrunn.png',
      name: 'Sbanken',
      text: 'Sbanken is a bank with their main offices in Bergen, and is Norways first pure online bank. Savvy is a part of a team developing the next generation of online banking solutions.',
      websiteUrl: 'https://sbanken.no'
    },
    {
      logoPath: '/images/imove_logo.svg',
      backgroundPath: '/images/imove_bakgrunn.png',
      name: 'imove',
      text: 'Imove is a new and innovative electric car subscription service, and often gets compared to Spotify for music and Netflix for film. Savvy is contributing to their core platform.',
      websiteUrl: 'https://imove.no'
    }
  ]
};

export type Clients = typeof clients;
