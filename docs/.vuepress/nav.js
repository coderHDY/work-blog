const home = {
    text: 'Home',
    link: '/',
    icon: 'reco-home'
};
const study = {
    text: '网络笔记',
    ariaLabel: 'reading and thinking',
    items: [
        {
            text: '路由交换',
            link: '/net/'
        },
    ]
}
const timeline = {
    text: '时间线',
    link: '/timeline/',
    icon: 'reco-date'
}
module.exports = [
    home,
    study,
    timeline,
]