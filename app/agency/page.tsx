import { Pages } from '@/lib/content'
import { pages } from '@/lib/content.json'

export default function Page() {
  const { agency } = pages as Pages
  return (
    <div className="">
      <div className="">
        {agency.team.map((employee) => {
          return (
            <div key={employee.name} className="">
              <div className="">
                {employee.name}
              </div>
              <div className="">
                <p>{employee.about}</p>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}
