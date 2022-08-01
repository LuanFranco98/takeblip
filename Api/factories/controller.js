const { createGitReader } = require('./usecase')
const GitController = require('../controllers/git')

const createGitController = () => {
    const gitController = new GitController(createGitReader())
    return gitController
}

module.exports = { createGitController }


// createGitController().list({params: {}}).then(console.log)