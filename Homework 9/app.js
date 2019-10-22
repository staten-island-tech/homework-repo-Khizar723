async function go() {
    const p1 = fetch('https://api.github.com/users/khizar723').then (r => r.json())
    const p2 = fetch('https://api.github.com/users/dejonkurti').then(r => r.json())
    //wait for both to come back
    const res = await Promise.all([p1, p2])
    const dataPromises = res.map(r => r.json())
    console.log(dataPromises)
    console.log(res)
    const khizarAndDejon = await Promise.all(dataPromises)
    console.log(khizarAndDejon)
}

go()

