import { CvPartnerCv, CvPartnerUser, ICvPartnerClient } from "./cvpartner.interface";

export class CvPartnerClient implements ICvPartnerClient {
    private baseUrl: string
    private authorization: string

    public constructor() {
        if (process.env.CV_PARTNER_URL) {
            this.baseUrl = process.env.CV_PARTNER_URL;
        } else {
            throw new Error("CV_PARTNER_URL must be defined")
        }

        if (process.env.CV_PARTNER_AUTHORIZATION) {
            this.authorization = process.env.CV_PARTNER_AUTHORIZATION
        } else {
            throw new Error("CV_PARTNER_AUTHORIZATION must be defined")
        }
    }
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