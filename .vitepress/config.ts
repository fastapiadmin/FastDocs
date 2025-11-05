import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
    base: '/',
    srcDir: 'src',
    outDir: 'dist',
    lang: 'zh-CN',
    title: 'FastApiAdmin',
    description: '现代、开源、全栈融合的中后台快速开发平台',
    ignoreDeadLinks: [
        'http://localhost:8000/docs',
        'http://localhost:5173'
    ],
    head: [
        ["link",{rel: "apple-touch-icon", sizes: "180x180", href: "/favicon.png"}],
        ["link",{rel: "icon",type: "image/png", sizes: "32x32", href: "/favicon.png"}],
        ["link",{rel: "icon",type: "image/png", sizes: "16x16", href: "/favicon.png"}],
        ["link",{rel: "shortcut icon", href: "/favicon.png"}],
    ],
    locales: {
        root: { label: '简体中文' },
        en: { label: 'English' },
    },
    lastUpdated: true,
    cleanUrls: true,
    metaChunk: true,
    themeConfig: {
        logo: '/logo.png',
        nav: [
            { text: '首页', link: '/' },
            { 
                text: '指南', 
                items: [
                    { text: '项目概述', link: '/overview/overview' },
                    { text: '快速开始', link: '/quickstart/start' },
                    { text: '为什么选择FastapiAdmin?', link: '/overview/why' }
                ] 
            },
            { 
                text: '开发指南', 
                items: [
                    { text: '前端开发', link: '/development/frontend' },
                    { text: '后端开发', link: '/development/backend' }
                ] 
            },
            {
                text: '版本',
                items: [
                { text: 'master', link: 'https://github.com/1014TaoTao/FastapiAdmin', target: '_blank' },
                { text: 'V2.0.0', link: 'https://github.com/1014TaoTao/FastapiAdmin/tree/v2.0.0', target: '_blank' },
                { text: 'V1.0.0', link: 'https://github.com/1014TaoTao/FastapiAdmin/tree/v1.0.0', target: '_blank' }
                ]
            },
            { text: '关于我们', link: '/overview/about' },
        ],
        sidebar: [
            {
                text: '简介',
                collapsed: false,
                items: [
                    { text: '项目概述', link: '/overview/overview' },
                    { text: '快速开始', link: '/quickstart/start' },
                    { text: '为什么选择FastapiAdmin?', link: '/overview/why' }
                ]
            },
            {
                text: '开发指南',
                collapsed: false,
                items: [
                    { text: '前端开发指南', link: '/development/frontend' },
                    { text: '后端开发指南', link: '/development/backend' }
                ]
            },
            {
                text: '关于我们',
                items: [
                    { text: '联系我们', link: '/overview/about' }
                ]
            }
        ],
        socialLinks: [
            { icon: 'github', link: 'https://github.com/1014TaoTao/FastapiAdmin' },
            { icon: 'gitee', link: 'https://gitee.com/tao__tao/FastapiAdmin' },
            { icon: 'gitcode', link: 'https://gitcode.com/qq_36002987/FastapiAdmin' }
        ],
        footer: {
            message: '<a href="https://github.com/1014TaoTao/FastapiAdmin/blob/master/LICENSE" target="_blank">MIT License</a>',
            copyright: 'Copyright © 2025-2026 service.fastapiadmin.com 版权所有 |隐私 |条款 陕ICP备2025069493号-1'
        },
        search: {
            provider: 'local',
            options: {
                locales: {
                root: {
                    translations: {
                    button: {
                        buttonText: '搜索文档',
                        buttonAriaLabel: '搜索文档'
                    },
                    modal: {
                        footer: {
                        selectText: '选择',
                        navigateText: '切换',
                        closeText: '关闭',
                        },
                    },
                    },
                },
                },
            },
        },
        outline: {
            level: [2, 3],
            label: "页面导航",
        },
        lastUpdated: {
            text: "最后更新于",
            formatOptions: {
                dateStyle: "short",
                timeStyle: "short",
            },
        },
        langMenuLabel: "多语言",
        returnToTopLabel: "回到顶部",
        sidebarMenuLabel: "菜单",
        darkModeSwitchLabel: "主题",
        lightModeSwitchTitle: "切换到浅色模式",
        darkModeSwitchTitle: "切换到深色模式",
    },
})