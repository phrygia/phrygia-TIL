## Deployment

First of all, we need set the correct `base` in `config.js`

```bash
 base: '/vuepress-boilerplate/',
```

then, run the deploy script to trigger the build and push the generated static pages to GitHub `gh-pages`

```bash
 bash deploy.sh
```

```bash
## deploy.sh
## ------------------

#!/usr/bin/env sh
set -e

# build
npm run build

cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy with vuepress'


git push -f <repo_url> master:gh-pages

cd -

```
