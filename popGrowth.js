const popGrowthYears = (p0, percent, aug, p) => {
    for (var y = 0; p0 < p; y++) {
        p0 = p0 * (1 + percent / 100) + aug
    }
    return y
}

console.log(popGrowthYears(1500000, 2.5, 10000, 2000000))