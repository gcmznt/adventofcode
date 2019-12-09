const imgToLetter = {
  '111  1  1 111  1  1 1  1 111  ': 'B',
  '1111 1    111  1    1    1111 ': 'E',
  '111  1  1 1  1 111  1 1  1  1 ': 'R',
  '1  1 1  1 1  1 1  1 1  1  11  ': 'U',
  '1111    1   1   1   1    1111 ': 'Z'
}

function prepareInput (input, layerSize) {
  return input
    .trim()
    .match(new RegExp('.{1,' + layerSize + '}', 'g'))
}

function counter (layer) {
  return {
    layer: layer.split(''),
    c0: layer.split('').filter(v => v === '0').length,
    c1: layer.split('').filter(v => v === '1').length,
    c2: layer.split('').filter(v => v === '2').length
  }
}

function byZeros (a, b) {
  return a.c0 - b.c0
}

function checksum (layer) {
  return layer.c1 * layer.c2
}

function overlap (result, layer) {
  return result.split('').map((v, i) => v === '2' ? layer[i] : v).join('')
}

function toString (picture, w, h) {
  const elements = picture.replace(/0/gm, ' ').match(new RegExp('.{1,' + w + '}', 'g')).map(r => r.match(/.{1,5}/g))
  return elements[0].map((w, i) => {
    for (let j = 1; j < h; j++) {
      w += elements[j][i]
    }
    return imgToLetter[w]
  }).join('')
}

module.exports = (input, w = 25, h = 6) => {
  const picture = prepareInput(input, w * h)

  // console.log(toString(picture.reduce(overlap), w, h))

  return {
    part1: () => checksum(picture.map(counter).sort(byZeros)[0]),
    part2: () => picture.reduce(overlap)
  }
}
