import GLSLX from 'glslx'

let dev = process.env.NODE_ENV != 'production'

export default (/** @type {import('glslx').CompileArgs} */ args) =>
  /** @type {import('rollup').Plugin} */
  ({
    name: 'glslx',

    transform(code, id) {
      if (!/\.((glslx?)|(vert)|(frag))$/.test(id)) return code

      let glslx = id.endsWith('x')

      args = args || {
        format: 'js',
        renaming: dev || !glslx ? 'none' : 'all',
        disableRewriting: dev,
        prettyPrint: dev,
        keepSymbols: dev,
      }

      let result = GLSLX.compile({ name: id, contents: code }, args)

      if (!result.output) throw result.log

      return glslx
        ? result.output
        : result.output + '\nexport default GLSLX_SOURCE_MAIN\n'
    },
  })
