declare namespace window {
  export const plausible: (
    name: string,
    options?: { props?: Record<string, string> }
  ) => void
}

export const ping =
  window.plausible ||
  function () {
    ;((window.plausible as any).q = (window.plausible as any).q || []).push(
      arguments
    )
  }
