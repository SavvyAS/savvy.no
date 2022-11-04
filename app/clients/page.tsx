import { Pages } from '@/lib/content'
import { pages } from '@/lib/content.json'
import Link from 'next/link'

export default function Page() {
  const { clients } = pages as Pages

  return (
    <div className="">
      <div className="">
        {clients.clients.map((client) => {
          return (
            <div key={client.name} className="">
              <div className="">
                {client.name}
              </div>

              <div className="">
                <p>{client.text}</p>

                {client.websiteUrl && (
                  <Link href={client.websiteUrl}>
                    <button>Visit {client.name}</button>
                  </Link>
                )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
