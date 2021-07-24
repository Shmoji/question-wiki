import DefaultLayout from 'components/layouts/DefaultLayout'
import A from 'components/A'

export default function Home() {
  if (process.env.NEXT_PUBLIC_IS_DEMO === 'true') {
    return (
      <div className="text-center">
        <p>What is Question Wiki? Watch the video below.</p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/4k7Zbnlp07s"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="mx-auto my-4"
        />
        <p>In development...stay up to date on <A href="https://twitter.com/QuestionWiki">Twitter</A> and <A href="https://discord.gg/DNkj7keQQM">Discord</A></p>
      </div>
    )
  } else {
    return (
      <div>Full site</div>
    )
  }
}

Home.layoutProps = {
  Layout: DefaultLayout,
}
