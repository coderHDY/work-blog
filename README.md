# 使用流程
* `fork`到个人仓库
    ```shell

    npm i
    npm i pm2 --g

    npm run start
    ```
* http://localhost:8089

# 部署流程
* `deploy.sh`文件这一行改成自己仓库信息
    ```shell
    git push -f git@github.com:<USERNAME>/work-blog.git master:gh-pages
    ```
* 执行命令：
    ```shell
    bash deploy.sh
    ```
# 其他插件
* 配置到`docs/.vuepress/config.js`文件夹下`plugins`
* [官方插件](https://vuepress.vuejs.org/zh/plugin/official/plugin-pwa.html)
* [其他插件](https://github.com/vuepress/awesome-vuepress/blob/main/v1.md)