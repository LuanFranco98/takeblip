const GitService = require('../services/git')

const createGitService = () => {
    const gitService = new GitService()
    return gitService
}

module.exports = { createGitService }
