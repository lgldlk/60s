import type { Context, Next } from 'oak'

export default async function favicon(ctx: Context, next: Next) {
  await next()
}
