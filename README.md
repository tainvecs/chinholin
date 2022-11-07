# Personal Website

<div>
  <a href="https://github.com/tainvecs/chinholin/actions/workflows/pages/pages-build-deployment">
    <img src="https://img.shields.io/github/deployments/tainvecs/chinholin/github-pages?label=deployment&style=for-the-badge" alt="GitHub Pages Deployment">
  </a>
  <a href="https://www.chinholin.com/">
    <img src="https://img.shields.io/website?label=chinholin.com&down_color=red&down_message=offline&up_color=brightgreen&up_message=online&url=https%3A%2F%2Fwww.chinholin.com&style=for-the-badge" alt="Website Check">
  </a>
  <img src="https://img.shields.io/github/repo-size/tainvecs/chinholin?style=for-the-badge" alt="Repo Size">
</div>

This repo is the source code of my website for blog posts, projects documentation, and demo.

The website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.


## Installation
```
$ yarn
```

## Local Development
```
$ yarn start
```
This command starts a local development server and opens up a browser window.
Most changes are reflected live without having to restart the server.


## Build
```
$ yarn build
```
This command generates static content into the `build` directory and can be served using any static contents hosting service.


## Deployment
```
$ GIT_USER=<Your GitHub username> USE_SSH=true yarn deploy
```
If you are using GitHub pages for hosting, this command is a convenient way to build the website and push to the `gh-pages` branch.


## License
- **Docusaurus** is [MIT licensed](https://github.com/facebook/docusaurus/blob/main/LICENSE).

- All themes, codes and configs are [MIT Licensed](https://github.com/tainvecs/chinholin/blob/main/LICENSE-codes).

- Subfolders `static` and `blog`
  - Files such as logos, images, etc., collected from the internet are all rights reserved to the original creator. If there is any copyright infringement, please [contact me by email](mailto:chinho.lin@mailbox.org). I apologize in advance and will remove it from my site.
  - Other files and contents are all rights reserved to [Chin-Ho Lin](https://github.com/tainvecs).
