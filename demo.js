const git = require('simple-git')

git('./local-repo').clone('https://github.com/freewind-demos/javascript-frontend-hello-world-demo.git', 'demo-project')
    .exec(function () {
        console.log('cloned to: local-repo/demo-project')

        const demoGit = git('./local-repo/demo-project')
        demoGit.log(['HEAD'], (error, result) => {
            console.log('----------------- git log HEAD -------------')
            console.log(JSON.stringify(result, null, 2))
        })

    })
