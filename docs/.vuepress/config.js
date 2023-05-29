const fs = require('fs')
const path = require('path')

const notes_path = path.resolve(__dirname, '../notes')

let sidebar = []
const dirs = fs.readdirSync(notes_path)
dirs.forEach(dir => {
    let files = fs.readdirSync(path.join(notes_path, dir))
    let children = []
    files.forEach(file => {
        if (file !== 'README.md') {
            children.push({
                title: file.replace('.md', ''),
                path: `/notes/${dir}/${file.replace('.md', '')}`
            })
        }
    })
    console.log("目录：", dir)
    console.log("children: ", children)
    sidebar.push({
        title: dir,
        collapsable: false,
        path: `/notes/${dir}/`,
        children: children
    })
})

module.exports = {
    title: 'DancingSnow的博客',
    description: 'DancingSnow的个人博客',
    theme: 'reco',
    themeConfig: {
        nav: [
            {
                text: '首页',
                link: '/'
            },
            {
                text: '崩坏：星穹铁道抽卡导出工具',
                link: 'https://dancingsnow0517.github.io/StarRail-gacha'
            }
        ],
        subSidebar: 'auto',
        sidebar: sidebar
    },
    locales: {
        '/': {
            lang: 'zh-CN'
        }
    }
}