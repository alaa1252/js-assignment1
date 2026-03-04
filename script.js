function card() {

  const name = document.getElementById("name").value
  let age = Number(document.getElementById("age").value)
  var message = ""

  console.log(typeof name)
  console.log(typeof age)

  let adult = age >= 18
  let valid = name !== "" && age > 0

  if (!valid) {
    document.getElementById("output").textContent = "Invalid input"
    return
  }

  message = "Hello " + name
  message += `\nAge: ${age}`
  message += `\nAdult: ${adult}`

  document.getElementById("output").textContent = message
}

function calc() {

  let n1 = Number(document.getElementById("num1").value)
  let n2 = Number(document.getElementById("num2").value)
  const out = document.getElementById("output")
  var result = ""

  console.log(typeof n1)
  console.log(typeof n2)

  if (isNaN(n1) || isNaN(n2)) {
    out.textContent = "Enter numbers"
    return
  }

  let sum = n1 + n2
  sum += 0

  let sub = n1 - n2
  let mul = n1 * n2
  let div = n2 != 0 ? n1 / n2 : "No division"
  let mod = n1 % n2

  let bigger = n1 > n2
  let equal = n1 === n2
  let positive = n1 > 0 && n2 > 0

  result =
`Sum: ${sum}
Sub: ${sub}
Mul: ${mul}
Div: ${div}
Mod: ${mod}

Bigger: ${bigger}
Equal: ${equal}
Both Positive: ${positive}`

  out.textContent = result
}