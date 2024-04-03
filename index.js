const convertButton = document.querySelector(".convert-button")
const currencySelect = document.querySelector(".currency-select")


async function convertValue() {
    const inputCurrencyValue = document.querySelector(".input-currecy").value

    const currecyValueToConvert = document.querySelector(".corrency-value-to-convert") //valor em real

    const currecyValueConverted = document.querySelector(".currency-value") // outras moedas


    const data = await fetch(' https://economia.awesomeapi.com.br/last/USD-BRL,EUR-BRL,BTC-BRL').then(Response => Response.json())

    const dolarToday = data.USDBRL.high
    const euroToday = data.EURBRL.high
    const bitcoinToday = data.BTCBRL.high


    if (currencySelect.value == "dolar") {
        currecyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday
        )
    }

    if (currencySelect.value == "euro") {
        currecyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday)
    }

    if (currencySelect.value == "bitcoin") {
        currecyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "BTC"
        }).format(inputCurrencyValue / bitcoinToday)
    }



    currecyValueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue)


}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar Americano"
        currencyImg.src = "/assets/dolar.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/Euro logo.png"
    }

    if (currencySelect.value == "bitcoin") {
        currencyName.innerHTML = "Bitcoin"
        currencyImg.src = "./assets/bitcoin.png"
    }



    convertValue()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValue)