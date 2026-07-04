import fs from 'node:fs'
import path from 'node:path'

const distDir = 'dist'
const assetsDir = path.join(distDir, 'static')

const requiredFiles = [
  path.join(distDir, 'index.html'),
  path.join(distDir, 'favicon.svg'),
  path.join(distDir, '_redirects'),
]

for (const file of requiredFiles) {
  if (!fs.existsSync(file)) {
    console.error(`Build verification failed: missing ${file}`)
    process.exit(1)
  }
}

if (!fs.existsSync(assetsDir)) {
  console.error('Build verification failed: missing dist/static directory')
  process.exit(1)
}

const assetFiles = fs.readdirSync(assetsDir)
if (assetFiles.length === 0) {
  console.error('Build verification failed: dist/static is empty')
  process.exit(1)
}

console.log(`Build verified: ${assetFiles.length} files in dist/static`)
