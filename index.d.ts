import * as glslx from 'glslx'
import * as rollup from 'rollup'

declare function glslxPlugin(args: glslx.CompileArgs): rollup.Plugin

export = glslxPlugin
