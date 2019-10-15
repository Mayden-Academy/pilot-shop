var source = document.querySelector("#product").innerHTML

// tell handlebars about the template
var template = Handlebars.compile(source)

// define data to be used in template
fetch('data.json')
    .then(data => data.json())
    .then(data => {
        let html = template(data)
        document.querySelector('.product-container').innerHTML = html
    })

