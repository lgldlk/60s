import { wrapperBaseRes } from '../utils.ts'

export async function fetchMoYu() {
  const { data = {} } = await fetch('https://api.vvhan.com/api/moyu', { responseType: 'arraybuffer' })

  return data
}
