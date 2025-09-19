import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  outDir: "../../../owncdn/website/wwwroot/docs",
  base: "/docs/",
  //srcExclude: "**/parts/*",  
  cleanUrls:true,
  title: "OwnCDN",
  description: "OwnCDN documentation",
  themeConfig: {
    search: {provider:'local'},
    logo: { light: '/images/logo-blue-64.png', dark: '/images/logo-white-64.png' },
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'OwnCDN.com', link: 'https://owncdn.com' }
    ],

    sidebar: [
      { text: 'Introduction', link: '/' },
      { text: 'What is OwnCDN', link: '/what-is-owncdn' },

      { text:'Service Types', collapsed:false, items: [
                { text: "Storage", link:'/service-types/storage'},
                { text: "Disk Cache", link:'/service-types/disk-cache'},
                { text: "Memory Cache", link:'/service-types/memory-cache'},
                { text: "File System", link:'/service-types/file-system'},
                { text: "HTTP Fetcher", link:'/service-types/http-fetcher'},
                { text: "Image Optimizer", link:'/service-types/image-optimizer'},
                { text: "Public HTTP Binding", link:'/service-types/public-http-binding'},
                { text: "HTTP UI", link:'/service-types/ui'},
                { text: "HTTP API", link:'/service-types/http-api'}
                ]},

      { text: 'UI', collapsed: false, items: [
          { text: 'HTTP Stats', link: '/ui/http-stats' },
          { text: 'Services', link: '/ui/services',collapsed:false, items: [
            { text:"Service Status", collapsed:false, link:'/ui/service-status/index.md', items: [
                { text: "Storage", link:'/ui/service-status/storage'},
                { text: "Disk Cache", link:'/ui/service-status/disk-cache'},
                { text: "Memory Cache", link:'/ui/service-status/memory-cache'},
                { text: "File System", link:'/ui/service-status/file-system'},
                { text: "HTTP Fetcher", link:'/ui/service-status/http-fetcher'},
                { text: "Image Optimizer", link:'/ui/service-status/image-optimizer'},
                { text: "Public HTTP Binding", link:'/ui/service-status/public-http-binding'},
                { text: "HTTP UI", link:'/ui/service-status/ui'},
                { text: "HTTP API", link:'/ui/service-status/http-api'},
                
            ]},
            { text:"Edit Service", collapsed:false, link: '/ui/edit-service/index.md', items: [
                { text: "Storage", link:'/ui/edit-service/storage'},
                { text: "Disk Cache", link:'/ui/edit-service/disk-cache'},
                { text: "Memory Cache", link:'/ui/edit-service/memory-cache'},
                { text: "File System", link:'/ui/edit-service/file-system'},
                { text: "HTTP Fetcher", link:'/ui/edit-service/http-fetcher'},
                { text: "Image Optimizer", link:'/ui/edit-service/image-optimizer'},
                { text: "Public HTTP Binding", link:'/ui/edit-service/public-http-binding'},
                { text: "HTTP UI", link:'/ui/edit-service/ui'},
                { text: "HTTP API", link:'/ui/edit-service/http-api'},
            ]},        
            { text: "Last 100 HTTP Requests", link:'/ui/last100'}
          ]},
          { text: 'HTTP Binding Order', link: '/ui/http-binding-order' },
          { text: 'Storage Sync Status', link: '/ui/storage-sync-status' },
          { text: 'API Keys', link: '/ui/api-keys',collapsed:false, items: [
              {text:'Edit API Key',link:'/ui/edit-api-key'}
            ] },
          { text: 'Replication Sources', link: '/ui/replication-sources',collapsed:false, items: [
                  {text:'Edit Replication Source',link:'/ui/edit-replication-source'}
              ] },
          { text: 'Settings', link: '/ui/settings' },
          { text: 'About / License', link: '/ui/about' },
        ]
      }, 
      { text:"Miscellaneous", collapsed:false, items: [
        { text: "Command line options (point-in-time restore)", link:"/misc/commandline" },
        { text:"Discord webhook",link:"/misc/discord"}
      ]}
      

    ],

  }
})
