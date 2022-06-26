import * as core from '@actions/core'
import * as exec from '@actions/exec'
import fs from 'fs'

const INSTALL_PATH = `${process.env.HOME}/.tfenv`

async function run(): Promise<void> {
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

    const tfenv_path = INSTALL_PATH + '/bin'

    core.debug(`Adding to path: ${tfenv_path}`)

    core.addPath(tfenv_path)

    core.debug(new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
