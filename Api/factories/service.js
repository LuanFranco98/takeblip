const GitService = require('../services/git')

const createGitService = () => {
    const gitService = new GitService()
    return gitService
}

module.exports = { createGitService }

// createGitService().makeGithubRequest('https://api.github.com/users','takenet').then(console.log)