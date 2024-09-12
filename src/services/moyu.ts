import { wrapperBaseRes } from '../utils.ts'

export async function fetchMoYu() {
  const response = await fetch('https://api.vvhan.com/api/moyu')

  return await response.arrayBuffer()
}
