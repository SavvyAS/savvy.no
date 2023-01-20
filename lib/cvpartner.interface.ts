export interface ICvPartnerClient {
    getCv(userId: string, cvId: string): Promise<CvPartnerCv | null>
    getUsers(): Promise<CvPartnerUser[]>
}

export interface CvPartnerUser {
    id: string,
    office_name: string
    office_id: string
    email: string
    default_cv_id: string
    telephone: string
    name: string
    image?: { url?: string }
}

export interface CvRole {
    _id: string;
    created_at: Date;
    disabled: boolean;
    diverged_from_master: boolean;
    name: TranslatedString;
    order: number;
    starred: boolean;
    years_of_experience: number;
    years_of_experience_offset: number;
}

export interface Education {
    _id: string;
    created_at: Date;
    degree: TranslatedString;
    description: TranslatedString;
    disabled: boolean;
    diverged_from_master: boolean;
    month_from: string;
    month_to: string;
    order: number;
    owner_updated_at: Date;
    recently_added: boolean;
    school: TranslatedString;
    starred: boolean;
    updated_at: Date;
    version: number;
    year_from: string;
    year_to: string;
}

export interface KeyQualification {
    _id: string;
    created_at: Date;
    disabled: boolean;
    diverged_from_master: boolean;
    label: TranslatedString;
    long_description: TranslatedString;
    order: number;
    owner_updated_at: Date;
    recently_added: boolean;
    starred: boolean;
    updated_at: Date;
    version: number;
}

export interface Language {
    _id: string;
    created_at: Date;
    disabled: boolean;
    diverged_from_master: boolean;
    level: TranslatedString;
    name: TranslatedString;
    order: number;
    owner_updated_at: Date;
    recently_added: boolean;
    starred: boolean;
    updated_at: Date;
    version: number;
}

export interface Role {
    _id: string;
    created_at: Date;
    cv_role_id: string;
    disabled: boolean;
    diverged_from_master: boolean;
    long_description: TranslatedString;
    name: TranslatedString;
    order: number;
    recently_added: boolean;
    starred: boolean;
    updated_at: Date;
    version: number;
}

export interface ProjectExperienceSkill {
    _id: string;
    base_duration_in_years: number;
    offset_duration_in_years: number;
    order: number;
    proficiency: number;
    tags?: TranslatedString;
    total_duration_in_years: number;
    version: number;
}

export interface ProjectExperience2 {
    _id: string;
    created_at: Date;
    customer: TranslatedString;
    customer_selected: string;
    description: TranslatedString;
    disabled: boolean;
    diverged_from_master: boolean;
    extent_hours: string;
    industry: TranslatedString;
    long_description: TranslatedString;
    month_from: string;
    month_to: string;
    order: number;
    owner_updated_at: Date;
    percent_allocated: string;
    project_extent_amt: string;
    project_extent_currency: string;
    project_extent_hours: string;
    project_type: TranslatedString;
    recently_added: boolean;
    roles: Role[];
    starred: boolean;
    total_extent_amt: string;
    total_extent_currency: string;
    total_extent_hours: string;
    updated_at: Date;
    version: number;
    year_from: string;
    year_to: string;
    project_experience_skills: ProjectExperienceSkill[];
}

export interface TechnologySkill {
    _id: string;
    base_duration_in_years: number;
    offset_duration_in_years: number;
    order: number;
    proficiency: number;
    tags?: TranslatedString;
    total_duration_in_years: number;
}

export interface Technology {
    _id: string;
    technology_skills: TechnologySkill[];
}

export interface TranslatedString {
    no?: string,
    en?: string
}


export interface WorkExperience {
    _id: string;
    created_at: Date;
    description: TranslatedString;
    disabled: boolean;
    diverged_from_master: boolean;
    employer: TranslatedString;
    long_description: TranslatedString;
    month_from: string;
    month_to: string;
    order: number;
    owner_updated_at: Date;
    recently_added: boolean;
    starred: boolean;
    updated_at: Date;
    version: number;
    year_from: string;
    year_to: string;
}

export interface CustomTagCategory {
    _id: string;
    id: string;
    values: TranslatedString;
    external_unique_id: string;
    can_be_used_for_cvs: boolean;
    can_be_used_for_references: boolean;
    can_be_used_for_customers: boolean;
    allow_filtering: boolean;
}

export interface CustomTag {
    _id: string;
    id: string;
    values: TranslatedString;
    external_unique_id: string;
    custom_tag_category_id: string;
    category_ids: string[];
    custom_tag_category: CustomTagCategory;
}

export interface Url {
    url: string;
}

export interface Image {
    url: string;
    thumb: Url;
    fit_thumb: Url;
    large: Url;
    small_thumb: Url;
}

export interface CvPartnerCv {
    _id: string;
    born_day: number;
    born_month: number;
    born_year: number;
    created_at: Date;
    custom_tag_ids: string[];
    cv_roles: CvRole[];
    default: boolean;
    educations: Education[];
    key_qualifications: KeyQualification[];
    languages: Language[];
    nationality: TranslatedString;
    navn: string;
    place_of_residence: TranslatedString;
    project_experiences: ProjectExperience2[];
    technologies: Technology[];
    telefon: string;
    title: TranslatedString;
    updated_at: Date;
    work_experiences: WorkExperience[];
    name: string;
    user_id: string;
    email: string;
    country_code: string;
    language_code: string;
    language_codes: string[];
    custom_tags: CustomTag[];
    image?: Image;
}
