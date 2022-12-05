import { readdirSync, readFileSync } from 'fs'
import MarkdownIt from 'markdown-it'
import Head from 'next/head'
import Link from 'next/link'
import { parse } from 'yaml'
import { Footer, HeaderContent, Nav } from '../../components'

function Page({
  content,
  title,
  pages,
  page,
}: {
  content: string
  title: string
  page: string
  pages: string[]
}) {
  return (
    <div className="container m-auto">
      <Head>
        <title>{title} | Pulse Browser</title>

        <HeaderContent path={page} />
      </Head>

      <Nav />

      <div className="md:flex">
        <div className="min-w-max p-4">
          {pages.map((page) => (
            <Link key={page} href={page}>
              <a
                className={`block hover:bg-pulse-grey-800 transition border-lg py-2 px-4 capitalize cursor-pointer`}
              >
                {page.replace('/legal/', '').replace('-', ' ')}
              </a>
            </Link>
          ))}
        </div>
        <div className="p-4 md:p-0 max-w-4xl">
          <h1 className="text-6xl pb-8 font-bold">{title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: content
                .replaceAll('<h2>', '<h2 class="text-3xl pt-4 pb-7 font-bold">')
                .replaceAll('<h3>', '<h3 class="text-2xl pt-4 pb-6 font-bold">')
                .replaceAll('<ul>', '<ul class="list-disc pl-5">')
                .replaceAll(
                  '<a',
                  '<a class="text-pulse-secondary-200 underline underline-offset-2" '
                )
                .replaceAll('<p>', '<p class="pb-4 leading-relaxed">'),
            }}
          ></div>
        </div>
      </div>

      <Footer />
    </div>
  )
}

// This function gets called at build time
export async function getStaticPaths() {
  const paths = readdirSync('./pages/legal')
    .filter((file) => file.endsWith('.md'))
    .map((file) => file.replace('.md', ''))
    .map((file) => `/legal/${file}`)

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false }
}

export async function getStaticProps(params: { params: { page: string } }) {
  let props: Record<string, string | string[]> = params.params

  const md = new MarkdownIt().use(
    require('markdown-it-front-matter'),
    (fm: string) => {
      const contents = parse(fm)
      props.title = contents.title
    }
  )

  props.pages = (await getStaticPaths()).paths
  props.content = md.render(
    readFileSync(`./pages/legal/${props.page}.md`, 'utf8')
  )

  return {
    props,
  }
}

export default Page
