(function() {
    // Data Blob
    // =============================================================================
    // The main "blob" of site data constructed by liquid
    // We cherry pick to minimize size
    // Also because jsonify doesn't work quite right and collapses the page objects
    // into just strings when we jsonify the whole site
    var pages = [{
                name: "index.md",
                title: "Index",
                url: "/opendoc-isomer-guide/new-folder/",
                escapedPath: "new-folder/index.md",
                dir: "/new-folder/",
                tocId: "toc_/new-folder/",
                documentInfo: ["New-folder",null,null]
            },
            
        {
                name: "index.md",
                title: "Tutorial",
                url: "/opendoc-isomer-guide/tutorial/",
                escapedPath: "tutorial/index.md",
                dir: "/tutorial/",
                tocId: "toc_/tutorial/",
                documentInfo: ["Tutorial",null,null]
            },
            
        {
                name: "index.md",
                title: "Sample page",
                url: "/opendoc-isomer-guide/",
                escapedPath: "index.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Isomer Guide","A guide on how to use Isomer",["get-started.md","introduction.md","configuration.md","resource.md","updates.md","faq.md"]]
            },
            
        
        
        {
                name: "faq.md",
                title: "Frequently Asked Questions",
                url: "/opendoc-isomer-guide/faq.html",
                escapedPath: "faq.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Isomer Guide","A guide on how to use Isomer",["get-started.md","introduction.md","configuration.md","resource.md","updates.md","faq.md"]]
            },
            
        {
                name: "get-started.md",
                title: "Welcome to Isomer!",
                url: "/opendoc-isomer-guide/get-started.html",
                escapedPath: "get-started.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Isomer Guide","A guide on how to use Isomer",["get-started.md","introduction.md","configuration.md","resource.md","updates.md","faq.md"]]
            },
            
        {
                name: "introduction.md",
                title: "Get started",
                url: "/opendoc-isomer-guide/introduction.html",
                escapedPath: "introduction.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Isomer Guide","A guide on how to use Isomer",["get-started.md","introduction.md","configuration.md","resource.md","updates.md","faq.md"]]
            },
            
        {
                name: "resource.md",
                title: "More about Github, Markdown",
                url: "/opendoc-isomer-guide/resource.html",
                escapedPath: "resource.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Isomer Guide","A guide on how to use Isomer",["get-started.md","introduction.md","configuration.md","resource.md","updates.md","faq.md"]]
            },
            
        {
                name: "sample.md",
                title: "Test document",
                url: "/opendoc-isomer-guide/sample.html",
                escapedPath: "sample.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Isomer Guide","A guide on how to use Isomer",["get-started.md","introduction.md","configuration.md","resource.md","updates.md","faq.md"]]
            },
            
        {
                name: "introduction.md",
                title: "Introduction",
                url: "/opendoc-isomer-guide/tutorial/introduction.html",
                escapedPath: "tutorial/introduction.md",
                dir: "/tutorial/",
                tocId: "toc_/tutorial/",
                documentInfo: ["Tutorial",null,null]
            },
            
        {
                name: "your-first-edit.md",
                title: "YourFirstEdit",
                url: "/opendoc-isomer-guide/tutorial/your-first-edit.html",
                escapedPath: "tutorial/your-first-edit.md",
                dir: "/tutorial/",
                tocId: "toc_/tutorial/",
                documentInfo: ["Tutorial",null,null]
            },
            
        {
                name: "updates.md",
                title: "Updates",
                url: "/opendoc-isomer-guide/updates.html",
                escapedPath: "updates.md",
                dir: "/",
                tocId: "toc_/",
                documentInfo: ["Isomer Guide","A guide on how to use Isomer",["get-started.md","introduction.md","configuration.md","resource.md","updates.md","faq.md"]]
            },
            
        
    ]

    var pageIndex = {}
    var documentList = {}

    pages.forEach(function(page) {
        pageIndex[page.url] = page
        var documentTitle = page.documentInfo ? page.documentInfo[0] : 'root'
        if (documentList[documentTitle]) {
            documentList[documentTitle].push(page)
        } else {
            documentList[documentTitle] = [page]
        }
    })

    // Expose as global var
    root = typeof exports !== 'undefined' && exports !== null ? exports : this

    root.pageIndex = pageIndex;
    root.documentList = documentList;
})()