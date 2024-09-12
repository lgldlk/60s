import { customAlphabet } from 'nanoid'

const defaultTips = ''

export const randomId = (size: number) => customAlphabet('1234567890abcdefghijklmnopqrstuvwxyz', size)

export function wrapperBaseRes(obj: object, message = defaultTips, status = 200) {
  return {
    status,
    data: obj || {},
  }
}

export function transferText(str: string, mode: 'u2a' | 'a2u') {
  if (mode === 'a2u') {
    return str.replace(/&#(\d+);/g, (_, $1) => String.fromCharCode(Number($1)))
  }
  return str.replace(/./, (_) => `&#${_.charCodeAt(0)};`)
}
