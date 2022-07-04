import { readdirSync, readFileSync } from 'fs'
import MarkdownIt from 'markdown-it'
import Link from 'next/link'
import { parse } from 'yaml'
import { Footer, Nav } from '../../components'

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
      <Nav />

      <div className="flex">
        <div className="w-80 p-4">
          {pages.map((page) => (
            <Link key={page} href={page}>
              <div
                className={` hover:bg-gray-200 py-2 px-4 capitalize cursor-pointer`}
              >
                {page.replace('/legal/', '').replace('-', ' ')}
              </div>
            </Link>
          ))}
        </div>
        <div className="max-w-4xl">
          <h1 className="text-6xl pb-8 font-bold">{title}</h1>
          <div
            dangerouslySetInnerHTML={{
              __html: content
                .replaceAll('<h2>', '<h2 class="text-3xl pt-4 pb-7 font-bold">')
                .replaceAll('<h3>', '<h3 class="text-2xl pt-4 pb-6 font-bold">')
                .replaceAll('<ul>', '<ul class="list-disc pl-5">')
                .replaceAll(
                  '<a',
                  '<a class="text-blue-800 underline underline-offset-2" '
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
