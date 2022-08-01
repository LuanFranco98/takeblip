class GitReader {
    constructor(gitService) {
        this.gitService = gitService
        this.gitUrl = 'https://api.github.com/users'
    }
    
    filterByLanguage(repos) {
        const reposByLanguage = repos.filter((repo) => {
            return repo.language === this.lang
        })
        return reposByLanguage
    }

    formatResponse(repos) { 
        //https://forum.blip.ai/t/acessando-dados-de-um-array-de-objetos/11860
        let formatedResponse = {}
        let cnt = 0
        repos.forEach(repo => {
            formatedResponse[cnt] = {
                name: repo.full_name,
                desc: repo.description,
                img: repo.owner.avatar_url
            }
            cnt++
        });
        return formatedResponse
    }

    async listOldestNRepos(params = {user:'takenet' , n: 5, lang:'C#'}) {
        const {user, n, lang} = params
        this.lang = lang

        const repos = await this.gitService.makeGithubRequest(this.gitUrl, user)
        const reposByLanguage = this.filterByLanguage(repos)
        const oldestNRepos = reposByLanguage.slice(0, n)  

        return this.formatResponse(oldestNRepos)
    }
}

module.exports = GitReader
