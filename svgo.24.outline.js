module.exports = {
  plugins: [
    'removeDimensions',
    'sortAttrs',
    {
      name: 'removeAttrs',
      params: {
        attrs: ['stroke', 'path:stroke-width']
      }
    },
    {
      name: 'addAttributesToSVGElement',
      params: {
        attributes: {
          'stroke-width': '1.5',
          'stroke': 'currentColor',
          'aria-hidden': 'true'
        }
      }
    },
  ]
}
