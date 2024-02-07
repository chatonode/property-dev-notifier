type TNextError = Error & { digest?: string }

type TError = TNextError & { detail: string }

export type TErrorProps = {
  error: TError
  reset: () => void
}
