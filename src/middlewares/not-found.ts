import type { Context, Next } from 'oak'

export default async function notFound(ctx: Context, next: Next) {
  await next()

  return
}
