
const ERRORS = {
  Unauthorized: "401",
  Forbidden: "403",
  Conflict: "409",
} as const

type ErrorsType = typeof ERRORS
type ErrorNames = keyof ErrorsType
type ErrorCodes = ErrorsType[ErrorNames]

type ErrorNamesMap = { readonly [Key in ErrorNames]: Key }
const ERROR_NAMES: ErrorNamesMap = (
  Object.keys(ERRORS) as Array<ErrorNames>
).reduce<ErrorNamesMap>(
  (obj, item) => ({ ...obj, [item]: item }),
  {} as ErrorNamesMap
)