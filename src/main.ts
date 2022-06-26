import * as core from '@actions/core'
import * as tc from '@actions/tool-cache'
import fetch from 'node-fetch'

const TFENV_REPO_OWNER = 'tfutils'
const TFENV_REPO_NAME = 'tfenv'
const TFENV_VERSION = 'latest'
const RELEASE_URL = `https://api.github.com/repos/${TFENV_REPO_OWNER}/${TFENV_REPO_NAME}/releases/${TFENV_VERSION}`

async function run(): Promise<void> {
  try {
    core.debug(new Date().toTimeString())

    const release_response = await fetch(RELEASE_URL)
    const release_json = await release_response.json()
    core.debug(JSON.stringify(release_json))
    const tarball_url = release_json['tarball_url']

    const tfenv_path = await tc.downloadTool(tarball_url)
    const tfenv_extracted_folder = await tc.extractTar(tfenv_path)
    core.addPath(tfenv_extracted_folder + '/bin')

    core.debug(new Date().toTimeString())
  } catch (error) {
    if (error instanceof Error) core.setFailed(error.message)
  }
}

run()
