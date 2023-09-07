#!/usr/bin/env node -r esbuild-register

// outputs the path to an Arduino to stdout or an error to stderror

import { autoDetect } from '../lib'

autoDetect().list().then(ports => {
  console.log(ports)
  // const port = ports.find(port => /arduino/i.test(port.manufacturer))
  // if (!port) {
  //   console.error('Arduino Not found')
  //   process.exit(1)
  // }
  // console.log(port.path)
})
