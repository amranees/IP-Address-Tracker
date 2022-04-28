async function apiFun() {
    let api = await fetch('https://geo.ipify.org/api/v2/country?apiKey=at_vkKNjmHf1B4PEw9nn5e18FhwUyU57&ipAddress=8.8.8.8'getComputedStyle);
    await console.log(api)

}

apiFun();