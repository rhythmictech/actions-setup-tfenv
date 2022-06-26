import {run} from '../src/main'
import * as process from 'process'
import fs from 'fs'
import * as path from 'path'
import {expect, test} from '@jest/globals'

const HOME = process.env.HOME || '/opt'
const INSTALL_PATH = path.join(HOME, '.tfenv')

test('wait 500 ms', async () => {
  await run()
  const installed = fs.existsSync(INSTALL_PATH)
  expect(installed).toBeTruthy()
})
