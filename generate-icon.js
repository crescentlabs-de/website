const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// Crescent geometry scaled to 512x512
// Based on logo-dark.svg: main circle cx=50,cy=50,r=40 / cutout cx=68,cy=32,r=32
// Scaled ×5.12: main cx=256,cy=256,r=205 / cutout cx=348,cy=164,r=164

const svg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="512" height="512">
  <rect width="512" height="512" rx="110" fill="#050508"/>
  <defs>
    <mask id="m">
      <circle cx="256" cy="256" r="205" fill="white"/>
      <circle cx="348" cy="164" r="164" fill="black"/>
    </mask>
  </defs>
  <circle cx="256" cy="256" r="205" fill="white" mask="url(#m)"/>
  <circle cx="412" cy="102" r="12" fill="white" opacity="0.8"/>
  <circle cx="456" cy="214" r="9"  fill="white" opacity="0.6"/>
  <circle cx="408" cy="324" r="10" fill="white" opacity="0.7"/>
  <circle cx="376" cy="52"  r="7"  fill="white" opacity="0.5"/>
</svg>`

const tmpSvg = '/tmp/cl_icon_512.svg'
const tmpPng = '/tmp/cl_icon_512.png'
const outPath = path.join(__dirname, 'app', 'icon.png')

fs.writeFileSync(tmpSvg, svg)
execSync(`sips -s format png "${tmpSvg}" --out "${tmpPng}"`)

const result = execSync(`sips -g pixelWidth -g pixelHeight "${tmpPng}"`).toString()
console.log('Generated:', result.trim())

fs.copyFileSync(tmpPng, outPath)
console.log('✓ app/icon.png saved')
