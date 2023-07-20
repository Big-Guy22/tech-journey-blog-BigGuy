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
const imageUrl = 'https://unsplash.com/photos/UOGFqFfUD0A';
const imageKey = imageUrl.split('/').at(-1);

export default function Home() {
  const allPostsData: AllPostsData = getSortedPostsData()

  return (
      <div>
        <section>
          <p className={'prose'}>
         "I Feel Like I'm To Busy Writing History To Read It"-KanYe West
          </p>
          <div className={'my-4'}>
            <i>
              Check out the Kanye{' '}
              <button className={'btn btn-primary'}>
                <Link href={'https://media.tenor.com/HsNBVVKfYSsAAAAC/kanye-kanye-west.gif'}>
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
