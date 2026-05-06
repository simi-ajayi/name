import { appImageUrls } from '../data/imageManifest'

const IMAGE_LOAD_TIMEOUT_MS = 12000
const IMAGE_CONCURRENCY = 8

type ProgressListener = (loadedCount: number, totalCount: number) => void

let preloadPromise: Promise<void> | null = null
let loadedCount = 0
const totalCount = appImageUrls.length
const progressListeners = new Set<ProgressListener>()

function notifyProgress() {
  progressListeners.forEach((listener) => {
    listener(loadedCount, totalCount)
  })
}

function preloadImage(src: string): Promise<void> {
  return new Promise((resolve) => {
    const image = new Image()
    let settled = false

    const finish = () => {
      if (settled) {
        return
      }

      settled = true
      window.clearTimeout(timeoutId)
      image.onload = null
      image.onerror = null
      resolve()
    }

    const timeoutId = window.setTimeout(finish, IMAGE_LOAD_TIMEOUT_MS)

    image.decoding = 'async'
    image.loading = 'eager'
    image.onload = finish
    image.onerror = finish
    image.src = src

    if (image.complete) {
      finish()
    }
  })
}

async function preloadWorker(urls: string[], workerOffset: number) {
  for (let index = workerOffset; index < urls.length; index += IMAGE_CONCURRENCY) {
    await preloadImage(urls[index])
    loadedCount += 1
    notifyProgress()
  }
}

async function preloadInParallel(urls: string[]) {
  const workerCount = Math.min(IMAGE_CONCURRENCY, urls.length)

  await Promise.all(
    Array.from({ length: workerCount }, (_, index) => preloadWorker(urls, index)),
  )
}

export function preloadAllAppImages() {
  if (!preloadPromise) {
    loadedCount = 0
    notifyProgress()

    preloadPromise = preloadInParallel(appImageUrls).then(() => {
      loadedCount = totalCount
      notifyProgress()
    })
  }

  return preloadPromise
}

export function subscribeImagePreloadProgress(listener: ProgressListener) {
  progressListeners.add(listener)
  listener(loadedCount, totalCount)

  return () => {
    progressListeners.delete(listener)
  }
}

export function getImagePreloadSnapshot() {
  return {
    loadedCount,
    totalCount,
  }
}
