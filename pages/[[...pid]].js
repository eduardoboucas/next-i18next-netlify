import Head from 'next/head'
import {serverSideTranslations} from 'next-i18next/serverSideTranslations'
import {useTranslation} from "next-i18next"
import config from '../next-i18next.config.js'

// const config = {
//   i18n: {
//     defaultLocale: 'fr',
//     locales: ['fr', 'en'],
//     ns: ["common"],
//     defaultNS: "common",
//   },
// }

export const getStaticProps = async ({locale}) => ({
  props: {
    ...await serverSideTranslations(locale, [], config),
  },
})


export async function getStaticPaths() {
  return {
    paths: [],
    fallback: true
  };
}



export default function Home(props) {
  const {t} = useTranslation();
  return (
    <div className="container">
      <main>
        <h1>{t("common.test")}</h1>
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      </main>

    </div>
  )
}
