import { CvPartnerCv, CvPartnerUser, ICvPartnerClient } from "./cvpartner.interface";

export class CvPartnerClientFactory {
    public static Create(): ICvPartnerClient {

        const instance = (global as any)[Symbol.for("global_cv_partner_instance")];

        if (instance != null)
            return instance;

        if (!process.env.CV_PARTNER_URL) {
            throw new Error("CV_PARTNER_URL must be defined")
        }

        if (!process.env.CV_PARTNER_AUTHORIZATION) {
            throw new Error("CV_PARTNER_AUTHORIZATION must be defined")
        }

        const new_instance = new CvPartnerClient(
            process.env.CV_PARTNER_URL,
            process.env.CV_PARTNER_AUTHORIZATION
        );

        (global as any)[Symbol.for("global_cv_partner_instance")] = new_instance;

        return new_instance;
    }
}


class CvPartnerClient implements ICvPartnerClient {
    public constructor(private baseUrl: string, private authorization: string) {

        console.log("instance")
    }


    private getCvCache: Map<string, CvPartnerCv> = new Map<string, CvPartnerCv>();
    async getCv(userId: string, cvId: string): Promise<CvPartnerCv> {
        const cacheKey = `${userId}-${cvId}`;
        const cached = this.getCvCache.get(cacheKey);
        if (cached)
            return cached;

        console.log("Fetching cv from Cv partner", userId, cvId);

        const url = new URL(`/api/v3/cvs/${userId}/${cvId}`, this.baseUrl)
        const response = await fetch(url.href, {
            headers: {
                "Authorization": this.authorization
            }
        })
        const body = await response.json() as CvPartnerCv;
        this.getCvCache.set(cacheKey, body);
        return body;
    }

    private getUsersCache: CvPartnerUser[] | undefined;
    async getUsers(): Promise<CvPartnerUser[]> {
        if (this.getUsersCache)
            return this.getUsersCache;

        console.log("Fetching users from Cv partner")
        const url = new URL("/api/v1/users", this.baseUrl)
        const response = await fetch(url.href, {
            headers: {
                "Authorization": this.authorization
            }
        })
        const body = await response.json() as CvPartnerUser[];
        this.getUsersCache = body;
        return body;
    }
}
