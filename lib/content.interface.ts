export interface Content {
  pages: Pages
  globals: Globals
}

export interface Globals {
  footer: FooterContent
}

export interface FooterContent {
  address: string
  postal: string
  email: string
  telephone: string
}

export interface Pages {
  home: Home
  clients: Clients
  agency: Agency
  contact: Contact
}

export interface Home {
  metaTitle: string
  metaDescription: string
  heading: string
  ingress: string
  clients: Client[]
}

export interface Clients {
  metaTitle: string
  metaDescription: string
  heading: string
  ingress: string
  clients: Client[]
}

export interface Agency {
  metaTitle: string
  metaDescription: string
  heading: string
  ingress: string
  text: string
  guilty: Guilty
  list: CoreValues
  team: Employees[]
}

export interface Contact {
  metaTitle: string
  metaDescription: string
  text: string
}

export interface Client {
  logoPath: string
  backgroundPath: string
  name: string
  text?: string
  websiteUrl?: string
}

export interface Guilty {
  heading: string
  text: string
  webpageUrl: string
}

export interface CoreValues {
  heading: string
  items: CoreValue[]
}

export interface CoreValue {
  name: string
  modalContent: string
}

export interface Employees {
  imagePath: string
  name: string
  title: string
  about: string
  email: string,
  cvPartnerId?: string;
}
