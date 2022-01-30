const button = document.querySelector('button')
button.addEventListener('click', () => {
    console.log('hello')
    fetch('http://localhost:8080', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({})
    }).then(() => {
        console.log('final')
    })
})