import { CompileArgs } from 'glslx'
import { Plugin } from 'rollup'

declare function glslxPlugin(args: CompileArgs): Plugin

export = glslxPlugin
