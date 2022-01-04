window.MathJax = {
    tex: {
        inlineMath: [
            ["\\(", "\\)"]
        ],
        displayMath: [
            ["\\[", "\\]"]
        ],
        packages: {'[+]': ['boldsymbol']},
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
    loader: {load: ['[tex]/boldsymbol']}
};

document$.subscribe(() => {
    MathJax.typesetPromise()
})
