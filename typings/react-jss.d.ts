declare module 'react-jss' {
  export function createUseStyles<
    TStyle extends (theme: unknown) => Record<Extract<ReturnType<TStyle>, string>, string>
  >(
    style: TStyle,
    options?: { name?: string }
  ): (data?: any) => Record<Extract<keyof ReturnType<TStyle>, string>, string>;

  export function createUseStyles<TStyle>(
    style: TStyle
  ): (data?: any, options?: { name?: string }) => Record<Extract<keyof TStyle, string>, string>;
}
export * from 'react-jss';