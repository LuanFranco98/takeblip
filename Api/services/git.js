const axios = require('axios')

class GitService {
    constructor(){}

    // https://docs.github.com/en/rest/repos/repos
    async makeGithubRequest(gitUrl, user) {
        const response = await axios.get(`${gitUrl}/${user}/repos`,
        {
            params: {
                sort: 'created',
                direction: 'asc'
            }
        })
        return response.data
    }
}

module.exports = GitService