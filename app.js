const btn = document.querySelector('.btn')
btn.onclick = () => {
    const request = new XMLHttpRequest()
    request.open('GET', 'peoples.json')
    request.setRequestHeader("Content-type", "application/json")
    request.send()
    request.onload = () => {
        const data = JSON.parse(request.response)
        data.forEach(people => {
            console.log(request.response)
            const div = document.createElement('div')
            div.innerHTML = people.name
            document.body.append(div)
        })
    }
}