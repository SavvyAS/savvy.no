export const agency = {
  metaTitle: 'Savvy | Agency',
  metaDescription: 'This is our agency!',
  heading: 'We are savvy people',
  ingress:
    'Savvy was founded by experienced consultants from the software industry in an attempt at creating a company that empowers its employees.',
  text: '',
  guilty: {
    heading: 'Savvy & guilty',
    text: 'Together with our friends and fellows in Guilty, we’ve gathered a heavy and experienced group of people. We like to call us a big savvy family, guilty of great talents.',
    webpageUrl: 'http://guilty.no'
  },
  list: {
    heading: "Whats's important to us;",
    items: [
      {
        name: 'Transparency',
        modalContent:
          "We do not believe in making deals behind closed doors. All of our employees have full access to information about how the company is run. They have access to every single contract between Savvy AS and any other party, and that includes each other's employment contracts. We do not make deals that we can not justify to our employees."
      },
      {
        name: 'Equality',
        modalContent:
          'We do not want to, nor do we have to differentiate between our employees. All of our consultants have the same lucrative conditions in their contract of employment and they are all shareholders.'
      },
      {
        name: 'Adventurous',
        modalContent:
          'We want to go on an adventure and we want you to come along. We believe we are building a company that represents something new and exciting, and we want to help our clients do the same.'
      }
    ]
  },
  team: [
    {
      imagePath: '/images/people/hakon.png',
      name: 'Håkon Gimnes Kaurel',
      title: 'CEO / Consultant',
      about:
        'Håkon is a full stack developer with a broad set of skills. He is comfortable working on just about any platform and has multiple years of experience working with both Java and .NET. Above all else Håkon considers himself a pragmatic software developer who will work hard to make sure that his work generates value for his clients.',
      email: 'hakon@savvy.no'
    },
    {
      imagePath: '/images/people/joachim.png',
      name: 'Joachim Carlsen',
      title: 'Consultant',
      about:
        'Joachim is a developer with multiple years of experiece working with well known brands such as Vipps, TV2 and Altibox. During his career Joachim has worked with multiple technologies and has built solid competence on the Java platform and as an iOS developer.',
      email: 'joachim@savvy.no'
    },
    {
      imagePath: '/images/people/erlend.png',
      name: 'Erlend Rekve',
      title: 'Consultant',
      about:
        'Erlend is a full stack developer with a master’s degree in computer science. He has several years of experience working with complex systems primarily on the .NET platform. He is known by his colleagues for being a thorough and innovative developer.',
      email: 'erlend@savvy.no'
    },
    {
      imagePath: '/images/people/abdullah.png',
      name: 'Abdullah Shaheen',
      title: 'Consultant',
      about:
        'Abdullah is a developer with experience from working with large and complex systems. He has experience from working on the .NET platform as well as several different frontend technologies.',
      email: 'abdullah@savvy.no'
    },
    {
      imagePath: '/images/people/trandal.png',
      name: 'Håkon Trandal',
      title: 'Consultant',
      about:
        'Håkon is a full stack developer with 9 years of .NET experience. He has worked on everything from small websites to computer games and large enterprise systems. Håkon works well in teams and is well respected for his ability to explain concepts.',
      email: 'hakon.trandal@savvy.no'
    },
    {
      imagePath: '/images/people/sindre.png',
      name: 'Sindre Møgster Braaten',
      title: 'Consultant',
      email: 'sindre@savvy.no',
      about:
        'Sindre is a system developer who enjoys working with the backend as well as working with the frontend, during the development of systems. He has always had a fascination for finding out how systems actually work, regardless of whether it concerns how to efficiently perform heavy operations on a server, or how a user interface should behave as smoothly as possible.'
    },
    {
      imagePath: '/images/header-image-1.png',
      name: 'Ole Eskild Steensen',
      title: 'Consultant',
      email: 'ole@savvy.no',
      about:
        'Ole Eskild has experience with a number of technologies and methodologies and has worked with everything from API services and cloud infrastructure to complex frontend applications. He thrives with ownership of the entire technology stack, but also likes to brush up on pure backend or frontend projects.'
    },
    {
      imagePath: '/images/people/asbjorn.png',
      name: 'Asbjørn Rekve',
      title: 'Consultant',
      email: 'asbjorn@savvy.no',
      about:
        'Asbjørn is a versatile developer with broad experience in the development of web solutions. Through projects at Sbanken, the Norwegian Armed Forces, Equinor, and previously as CTO for Powerzeek, he has faced challenging tasks and is used to a great deal of responsibility. He has experience of working both independently and in collaboration with others.'
    },
    {
      imagePath: '/images/header-image-1.png',
      name: 'New employee',
      title: 'Consultant',
      email: '',
      about: 'We have a new employee starting in February of 2023!'
    }
  ]
};

export type Agency = typeof agency;
