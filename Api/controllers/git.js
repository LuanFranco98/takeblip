const { omit } = require('../utils/utils')

class GitController {
    constructor(gitReader) {
        this.gitReader = gitReader
    }

    async list(request) {
        const { user, lang } = request.params
        const n = isNaN(request.params.n) ? request.params.n : Number(request.params.n)
        let params = omit({user, n, lang})
        if (JSON.stringify(params) === '{}') params = undefined
        const rsp = await this.gitReader.listOldestNRepos(params) 
        return {
            statusCode:200,
            body: rsp
        }
    }
}

module.exports = GitController
