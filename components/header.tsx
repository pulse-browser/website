export const HeaderContent = ({ path }: { path: string }) => (
  <>
    <link rel="icon" href="/favicon.ico" />
    <link rel="canonical" href={`https://pulsebrowser.app/${path}`} />

    <script
      defer
      data-domain="pulsebrowser.app"
      data-api="https://pa-pulse-browser.trickypr.workers.dev/pa/api/event"
      src="https://pa-pulse-browser.trickypr.workers.dev/pa/js/script.js"
    ></script>
  </>
)
