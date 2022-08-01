const { createGitService } = require('./service')
const GitReader = require('../usecases/git')

const createGitReader = () => {
    const gitReader = new GitReader(createGitService())
    return gitReader
}

module.exports = { createGitReader }

// createGitReader().listOldestNRepos().then(console.log)