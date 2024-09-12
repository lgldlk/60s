import { wrapperBaseRes } from '../utils.ts'

export async function fetchMoYu(type = 'json') {
  const { data = {} } = await fetch('https://api.vvhan.com/api/moyu', { responseType: 'arraybuffer' })

  return data
}
