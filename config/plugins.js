module.exports = ({ env }) => ({
    "content-versioning": {
        enabled: true,
    },
    // Strapi ChatGPT plugin
    "strapi-chatgpt": {
        enabled: true,
    },
    // Video field plugin
    "video-field": {
        enabled: true
    },
    // Migration plugin
    'migrations': {
        enabled: true,
        config: {
            autoStart: true,
            migrationFolderPath: 'migrations'
        },
    },
    // Encryptable field plugin  
    'encryptable-field': {
        enabled: true,
    },
    // Duplicate button plugin
    'duplicate-button': true,
    // Drag and drop content types plugin
    'drag-drop-content-types': {
        enabled: true
    },
});