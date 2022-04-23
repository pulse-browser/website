export const HeaderContent = ({ path }: { path: string }) => (
  <>
    <link rel="icon" href="/favicon.ico" />
    <link rel="canonical" href={`https://pulsebrowser.app/${path}`} />

    <script
      defer
      data-domain="pulsebrowser.app"
      src="https://pulsebrowser.app/pa/js/script.js"
    ></script>
  </>
)
