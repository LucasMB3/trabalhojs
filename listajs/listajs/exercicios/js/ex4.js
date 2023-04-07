document.write(
  "<h1><center>Os Primeiros 15 numeros da sequencia fibonacci</center></h1>"
)

n1 = 0
n2 = 1

for (var i = 0; i <= 15; i++) {
  soma = n1 + n2
  n1 = n2
  n2 = soma
  document.write("<b>Número: </b>", n1, "<br><br>")
}
document.write('<br> <img src="js/panhanha.png" alt="Cade?">')
