#!/usr/bin/env node

const { program } = require('commander')
const chalk = require('chalk')

const main = async() => {

    program.option('--verbose', 'verbose logs', false)
    program.parse(process.argv)

    const log = console.log
    const logVerbose = (msg) => program.verbose ? log(`${chalk.green('Verbose')}\t${msg}`) : undefined
    const logError = (msg) => log(`${chalk.white.bgRedBright.bold('Error')}\t${msg}`)

    try {
        logVerbose(program.args[0])
        throw new Error('Hi!')
    }
    catch(e) {
        logError(e.message)
    }
}

if (require.main === module) {
    main()
}
