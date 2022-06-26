[![Check dist/](https://github.com/rhythmictech/actions-setup-tfenv/actions/workflows/check-dist.yml/badge.svg)](https://github.com/rhythmictech/actions-setup-tfenv/actions/workflows/check-dist.yml)
[![CodeQL](https://github.com/rhythmictech/actions-setup-tfenv/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/rhythmictech/actions-setup-tfenv/actions/workflows/codeql-analysis.yml)
[![build-test](https://github.com/rhythmictech/actions-setup-tfenv/actions/workflows/test.yml/badge.svg)](https://github.com/rhythmictech/actions-setup-tfenv/actions/workflows/test.yml)

# Setup Tfenv

Set up your GitHub Actions workflow with tfenv

## Usage

```
name: Terrafy with tfenv
on: [push]
jobs:
  build:
    runs-on: ubuntu-latest
    steps:
    - uses: actions/checkout@v2
    - uses: rhythmictech/actions-setup-tfenv@v0.0.2
```
