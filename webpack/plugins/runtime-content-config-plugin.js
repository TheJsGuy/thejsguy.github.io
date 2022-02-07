const HtmlWebpackPlugin = require('html-webpack-plugin');
const directoryTree = require('directory-tree');

const dashCase = input => {
    return input.toLowerCase().replace(/\s(.)/g, function (match, group1) {
        return '-' + group1;
    });
}

const extractFileName = fileName => {
    const fileMetaArr = fileName.split('.');
    fileMetaArr.pop();
    return fileMetaArr.join(' ').split('-').join(' ');
}

const extractDirName = fileName => {
    return fileName.split('-').join(' ');
}

const buildNav = tree => {
    return tree.children?.map(item => {
        if (item.children) {
            const label = extractDirName(item.name);
            return {
                label,
                children: buildNav(item),
                key: dashCase(label)
            };
        }
        const label = extractFileName(item.name);
        return {
            label,
            key: dashCase(label)
        };
    })
}

class RuntimeContentConfigPlugin {
    constructor({
        contentPath
    }) {
        this.contentPath = contentPath;
    }
    apply(compiler) {
        compiler.hooks.compilation.tap('RuntimeContentConfigPlugin', (compilation) => {
            HtmlWebpackPlugin.getHooks(compilation).alterAssetTagGroups.tapAsync(
                'RuntimeContentConfigPlugin', (data, callback) => {
                    const dir = directoryTree(this.contentPath);
                    const nav = buildNav(dir);
                    console.log(nav);
                    data.bodyTags.push({
                        attributes: {},
                        tagName: 'script',
                        meta: {
                            plugin: 'RuntimeContentConfigPlugin'
                        },
                        innerHTML: `
                        window.config = {
                                nav: {
                                    links: ${JSON.stringify(nav)}
                                }
                            };
                        `
                    })
                    callback(null, data)
                }
            )
        });
    }
};

module.exports = RuntimeContentConfigPlugin;