/* eslint-disable import/no-extraneous-dependencies, global-require, no-template-curly-in-string */
import { resolve } from 'path'

require('dotenv').config()

const srcDir = resolve(__dirname, 'src')

export default function (config, env, helpers) {
  config.output.globalObject = 'self'

  config.resolve.alias['~'] = srcDir

  const { definitions } = helpers.getPluginsByName(config, 'DefinePlugin')[0].plugin

  // add a PRERENDER global:
  definitions.process = {
    env: {
      SSR: String(env.ssr === true),
    },
  }
}
