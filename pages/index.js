import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import useTranslate from "next-translate/useTranslation";
import Link from 'next/link';
import {useRouter} from 'next/router';

export default function Home() {
  const router=useRouter();
  const {t,lang} =useTranslate();
  return (
    
    <div>
      <h1>{t('common:example')}</h1>
      <ul>
        {router.locales.map(loc=>
          <li key={loc}><Link href={router.asPath} locale={loc} >
            {loc}
            </Link>  
            </li>
          )}
      </ul>
    </div>
  )
}
