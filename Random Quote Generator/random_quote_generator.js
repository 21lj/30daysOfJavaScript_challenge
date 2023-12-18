async function getRandomQuote(){
    const response = await fetch('https://api.quotable.io/random')
    const data = await response.json()

    document.getElementById('quote-text').innerText=data.content
    document.getElementById('quote-author').innerText=`${data.author}`
}

getRandomQuote()