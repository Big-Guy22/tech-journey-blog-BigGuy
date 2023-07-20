import Link from 'next/link'
import Date from '@/components/Date'

import {getSortedPostsData} from '@/lib/posts'
import Image from "next/image";

type AllPostsData = {
  date: string
  title: string
  id: string
}[]

// Change this url to change the image!
const imageUrl = 'https://unsplash.com/photos/P_nM4HIeX8Y';
const imageKey = imageUrl.split('/').at(-1);

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
      <div>
        <section>
          <p className={'prose'}>
         My name is Kanye and this is Runaway      
          </p>
          <div className={'my-4'}>
            <i>
              Check out the Kanye{' '}
              <button className={'btn btn-primary'}>
                <Link href={'https://www.google.com/search?q=runaway+movie+kanye&rlz=1CARLLB_enUS1015US1015&oq=runaway+movie+kanye&aqs=chrome.0.0i355i512j46i512j0i22i30l2j0i390i650l4.6261j0j7&sourceid=chrome&ie=UTF-8&safe=active&ssui=on#:~:text=Kanye%20West%20%2D%20Runaway%20(Full%2Dlength%20Film)%20%2D%20YouTube'}>
                  <span className={'text-primary-content'}>
                    here
                  </span>
                </Link>
              </button>
            </i>
          </div>
        </section>

        <div className={'my-4'}>
          <Image className={'rounded'} src={`https://source.unsplash.com/${imageKey}`} alt={'My Image'} width={500}
                 height={500}/>
        </div>

        <section className={'prose'}>
          <h2>Blog</h2>
          <ul>
            {allPostsData.map(({id, date, title}) => (
                <li key={id}>
                  <div>
                    <Link href={`/posts/${id}`}>{title}</Link>
                    <br/>
                    <small>
                      <Date dateString={date}/>
                    </small>
                  </div>
                </li>
            ))}
          </ul>
        </section>
      </div>
  )
}
