window.MathJax = {
    tex: {
        inlineMath: [
            ["\\(", "\\)"]
        ],
        displayMath: [
            ["\\[", "\\]"]
        ],
        packages: {'[+]': ['boldsymbol']},
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
