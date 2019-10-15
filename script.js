var source = document.querySelector("#product").innerHTML

// tell handlebars about the template
var template = Handlebars.compile(source)

// define data to be used in template
fetch('data.json')
    .then(data => data.json())
    .then(data => {
        data.products.forEach(product => {
            let html = template(product)
            document.querySelector('.product-container').innerHTML += html
        })
    })

