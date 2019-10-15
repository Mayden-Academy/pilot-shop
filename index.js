
fetch('data.json')
    .then(data => data.json())
    .then(data => {

        fetch('hand.hbs')
            .then(template => template.text())
            .then(template => {
                console.log(template)
                var hbsTemplate = Handlebars.compile(template)
                var html = hbsTemplate(data)
                document.querySelector('.product-container').innerHTML = html
            })

    })
