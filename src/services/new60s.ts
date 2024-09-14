const api = 'http://www.wudada.online/Api/ScD'

// 初始化缓存对象
const cache = new Map()

// 获取今天6点的时间戳
function getToday6AM() {
  const now = new Date()
  const fourAM = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 6, 0, 0, 0) // 今天6点
  return fourAM.getTime()
}

// 检查是否需要更新缓存
function shouldUpdateCache() {
  const now = new Date().getTime()
  const lastUpdate = cache.get('lastUpdate') || 0 // 从缓存中获取上次更新时间

  const today6AM = getToday6AM()

  // 如果当前时间大于今天6点，并且缓存的更新时间小于今天6点，则更新缓存
  return now > today6AM && lastUpdate < today6AM
}

// 更新缓存数据
function updateCache(value: any) {
  const now = new Date().getTime()

  // 模拟缓存的数据
  const cacheData = {
    value: value,
    timestamp: now,
  }

  // 更新 Map 中的数据
  cache.set('data', cacheData)
  cache.set('lastUpdate', now)
}

export async function fetchNew60s() {
  const cacheVal = cache.get('data')?.value
  if (shouldUpdateCache() || !cacheVal) {
    const response = await fetch(api)
    const value = await response.json()
    updateCache(value) // 如果需要更新，则更新缓存
    return value
  } else {
    return cacheVal
  }
}
