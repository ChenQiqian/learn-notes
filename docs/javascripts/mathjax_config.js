window.MathJax = {
    tex: {
        inlineMath: [
            ["\\(", "\\)"]
        ],
        displayMath: [
            ["\\[", "\\]"]
        ],
        packages: {
            '[+]': ['boldsymbol','mathtools']
        },
        macros: {
            R: "{\\bf R}",
            bm: ["{\\boldsymbol #1}", 1]
        },
        processEscapes: true,
        processEnvironments: true
    },
    options: {
        ignoreHtmlClass: ".*|",
        processHtmlClass: "arithmatex"
    },
    loader: {load: ['[tex]/boldsymbol','[tex]/mathtools']}
};
