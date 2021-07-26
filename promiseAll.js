var urls = ['http://127.0.0.1:5500/index.html', 'http://127.0.0.1:5500/index.html', 'http://127.0.0.1:5500/index.html'];

var promises = urls.map(url => fetch(url).then(y => y.url));

Promise.all(promises).then(results => {
    console.log(results)
});
