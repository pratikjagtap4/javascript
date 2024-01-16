// 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.

const maskedEmail = function(userEmail)
{
    let avg , splitted , part1, part2

    splitted = userEmail.split("@")

    part1 = splitted[0]
    avg = part1.length / 2

    part1 = part1.slice(0, avg)

    part2 = splitted[1]

    return part1 + "...@" + part2
}

console.log(maskedEmail("pratikjagtap@email.com"));
