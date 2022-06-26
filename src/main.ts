import * as core from '@actions/core'
import * as exec from '@actions/exec'
import * as path from 'path'
import fs from 'fs'

const HOME = process.env.HOME || '/opt'
const INSTALL_PATH = path.join(HOME, '.tfenv')

export async function run(): Promise<void> {
  try {
    core.debug(new Date().toTimeString())

    if (!fs.existsSync(INSTALL_PATH)) {
      await exec.exec('git', [
        'clone',
        'https://github.com/tfutils/tfenv.git',
        INSTALL_PATH
      ])
    } else {
      core.debug(`tfenv already exists at ${INSTALL_PATH}`)
    }

    const tfenv_path = path.join(INSTALL_PATH, 'bin')

    core.debug(`Adding to path: ${tfenv_path}`)

    core.addPath(tfenv_path)

    core.debug(new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
