import { pages } from '../public/content.json';
import Link from 'next/link';

export default function Page() {
  return (
    <div className='space-y-6'>
      <div className='space-y-8 text-white'>
        {pages.clients.clients.map(client => {
          return (
            <div key={client.name} className='space-y-3'>
              <div className='text-xs font-semibold uppercase tracking-wider text-zinc-500'>{client.name}</div>

              <div className=''>
                <p>{client.text}</p>

                <Link href={client.websiteUrl}>
                  <button>Visit {client.name}</button>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
