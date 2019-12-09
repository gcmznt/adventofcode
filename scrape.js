const puppeteer = require('puppeteer')
const Europa = require('node-europa')
const fs = require('fs')
const path = require('path')

const day = process.env.DAY
const year = process.env.YEAR

var europa = new Europa();

(async () => {
  try {
    const browser = await puppeteer.launch()
    const page = await browser.newPage()
    await page.goto(`https://adventofcode.com/${year}/day/${day}`)
    await page.waitForSelector('.day-desc', { timeout: 1000 })

    const description = await page.evaluate(() => {
      return document.querySelector('.day-desc').innerHTML
    })

    fs.writeFile(path.join(__dirname, year, `day-${day}`, 'README.md'), europa.convert(description), 'utf8', function (err) {
      if (err) {
        console.log('An error occured while writing README.')
        return console.log(err)
      }
    })

    await browser.close()
  } catch (error) {
    console.log(error)
  }
})()
