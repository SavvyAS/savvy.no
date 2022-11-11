import { CvPartnerCv, CvPartnerUser, ICvPartnerClient } from "./cvpartner.interface";

export class CvPartnerClientFactory {
    public static Create(): ICvPartnerClient {
        if (process.env.FEATURE_CV_PARTNER_INTEGRATION_ENABLED === "true") {

            if (!process.env.CV_PARTNER_URL) {
                throw new Error("CV_PARTNER_URL must be defined")
            }

            if (!process.env.CV_PARTNER_AUTHORIZATION) {
                throw new Error("CV_PARTNER_AUTHORIZATION must be defined")
            }

            return new CvPartnerClient(
                process.env.CV_PARTNER_URL,
                process.env.CV_PARTNER_AUTHORIZATION
            )
        }

        return new MockedCvPartnerClient()
    }
}

class CvPartnerClient implements ICvPartnerClient {
    public constructor(private baseUrl: string, private authorization: string) { }

    async getCv(userId: string, cvId: string): Promise<CvPartnerCv> {
        const url = new URL(`/api/v3/cvs/${userId}/${cvId}`, this.baseUrl)
        const response = await fetch(url.href, {
            headers: {
                "Authorization": this.authorization
            }
        })
        const body = await response.json()

        return body as CvPartnerCv
    }
    async getUsers(): Promise<CvPartnerUser[]> {
        const url = new URL("/api/v1/users", this.baseUrl)
        const response = await fetch(url.href, {
            headers: {
                "Authorization": this.authorization
            }
        })
        const body = await response.json()

        return body as CvPartnerUser[]
    }
}

class MockedCvPartnerClient implements ICvPartnerClient {

    async getCv(userId: string, cvId: string): Promise<CvPartnerCv | null> {
        return {
            _id: cvId,
            born_day: 20,
            born_month: 10,
            born_year: 1990,
            created_at: new Date(),
            custom_tag_ids: [],
            cv_roles: [],
            default: true,
            educations: [],
            key_qualifications: [],
            languages: [],
            nationality: { no: "Norsk" },
            navn: "Test Testersen",
            place_of_residence: { no: "Bergen" },
            project_experiences: [],
            technologies: [{
                _id: "123",
                technology_skills: [
                    {
                        _id: "321",
                        base_duration_in_years: 1,
                        offset_duration_in_years: 1,
                        order: 0,
                        proficiency: 1,
                        total_duration_in_years: 2,
                        tags: {
                            no: "Java"
                        }
                    },
                    {
                        _id: "321",
                        base_duration_in_years: 1,
                        offset_duration_in_years: 1,
                        order: 0,
                        proficiency: 1,
                        total_duration_in_years: 2,
                        tags: {
                            no: "Javascript"
                        }
                    },
                    {
                        _id: "321",
                        base_duration_in_years: 1,
                        offset_duration_in_years: 1,
                        order: 0,
                        proficiency: 1,
                        total_duration_in_years: 2,
                        tags: {
                            no: "Typescript"
                        }
                    },
                    {
                        _id: "321",
                        base_duration_in_years: 1,
                        offset_duration_in_years: 1,
                        order: 0,
                        proficiency: 1,
                        total_duration_in_years: 2,
                        tags: {
                            no: "NodeJS"
                        }
                    },
                    {
                        _id: "321",
                        base_duration_in_years: 1,
                        offset_duration_in_years: 1,
                        order: 0,
                        proficiency: 1,
                        total_duration_in_years: 2,
                        tags: {
                            no: ".NET"
                        }
                    },
                ]
            }],
            telefon: "45674567",
            title: { no: "Test Testersen" },
            updated_at: new Date(),
            work_experiences: [],
            name: "Test Testersen",
            user_id: userId,
            email: "test.testersen@savvy.no",
            country_code: "no",
            language_code: "no-NB",
            language_codes: ["no-NB"],
            custom_tags: []
        }
    }

    async getUsers(): Promise<CvPartnerUser[]> {
        return [
            {
                id: "123123",
                office_name: "Savvy",
                office_id: "321321",
                email: "hakon@savvy.no",
                default_cv_id: "789789",
                telephone: "45674567"
            }
        ]
    }

}