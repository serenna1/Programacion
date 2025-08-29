/*El nombre de la variable de JavaScript no admite caracteres o símbolos
especiales, excepto $ o _. Escriba una función isValidVariable que verifique si
una variable es una variable válida o no válida. */
//funciona por mi y sin metedos
const noPermitidas = [
  "break",
  "case",
  "catch",
  "class",
  "const",
  "continue",
  "debugger",
  "default",
  "delete",
  "do",
  "else",
  "export",
  "extends",
  "finally",
  "for",
  "function",
  "if",
  "import",
  "in",
  "instanceof",
  "new",
  "return",
  "super",
  "switch",
  "this",
  "throw",
  "try",
  "typeof",
  "var",
  "void",
  "while",
  "with",
  "yield",
  "false",
  "true",
  "null",
  "let",
  "static",
  "enum",
  "await",
];
const numerosDelCeroAlNueve = [
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
];
const caracteresNoPermitidos = [
  " ",
  "!",
  "@",
  "#",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "-",
  "+",
  "=",
  "{",
  "}",
  "[",
  "]",
  "|",
  "\\",
  ":",
  ";",
  '"',
  "'",
  "<",
  ">",
  ",",
  ".",
  "?",
  "/",
  "~",
  "`",
];
function isValidVariable(nombreDeLaVariable) {
  for (let i = 0; i < noPermitidas.length; i++) {
    if (noPermitidas[i] === nombreDeLaVariable) {
      return `El nombre de la variable: "${nombreDeLaVariable}", no es valida
        ya que es una palabra reservada:  ${false}`;
    }
  }
  for (let e = 0; e < numerosDelCeroAlNueve.length; e++) {
    if (numerosDelCeroAlNueve[e] === nombreDeLaVariable[0]) {
      return `El nombre de la variable: "${nombreDeLaVariable}", no es valida
      ya que empieza por un numero: ${false}`;
    }
  }
  for (let a = 0; a < nombreDeLaVariable.length; a++) {
    for (let e = 0; e < caracteresNoPermitidos.length; e++) {
      if (caracteresNoPermitidos[e] === nombreDeLaVariable[a]) {
        return `El nombre de la variable: "${nombreDeLaVariable}", no es valido 
        ya que tiene un caracter no permitido: ${false}`;
      }
    }
  }
  if (nombreDeLaVariable[0] === "$" || nombreDeLaVariable[0] === "_") {
    return `El nombre de la variable: "${nombreDeLaVariable}", no es valida
    ya qye empieza con signos que no estan permitidos: ${false}`;
  }
  for (pos of nombreDeLaVariable) {
    if (pos === " ") {
      return `El nombre dela variable: "${nombreDeLaVariable}", no es valida
      ya que tiene espacios: ${false}`;
    }
  }
  console.log(`El nombre de la variable: "${nombreDeLaVariable}" es valido `);
}
console.log(isValidVariable("1variable"));
console.log(isValidVariable("variable"));
console.log(isValidVariable("var:able"));
console.log(isValidVariable("$varable"));
console.log(isValidVariable("return"));
console.log(isValidVariable("varia+ble"));
console.log(isValidVariable("vari able"));
