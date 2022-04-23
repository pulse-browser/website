declare namespace window {
  export const plausible: (
    name: string,
    options?: { props?: Record<string, string> }
  ) => void
}

// We need to wrap the ping function to stop it trying to call on the server
// during the rendering process
export const ping =
  typeof window !== 'undefined'
    ? window.plausible ||
      function () {
        ;((window.plausible as any).q = (window.plausible as any).q || []).push(
          arguments
        )
      }
    : (name: string, options?: { props?: Record<string, string> }) => {
        /* We don't want analytics on the server */
      }
