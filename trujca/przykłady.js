// typy
undefined
1234
123.123

true
false

"string"

null
NaN

["Tablica", 123, false]

obiekt = {
  właściwość: "wartość",
  a: 123,
  b: true,
  d: {
    inny: "obiekt",
    w: "obiekcie",
    lista: ["asdasd", "AS", "ASDAsd"]
  }
}

// funkcje

function nazwa(argument, drugi, trzeci){

  return argument + drugi
}

nazwa(12, 21) // 33
nazwa('as', 'df') // "asdf"

// zmienne

var zmienna // undefined
var inna = 1  // 1
var d = "aaaaaa"

(function(){
  return 'funkcja anonimowa'
})

var duzo,
  zmiennych = 1,
  naraz,
  auu = 'aa';

globalnaZmienna = 2312  // tak nie robimy, ale sie da

// stringi

"string"
'też string'
`ciągle string`

`string z włożonym czymś ${123}`

"połączony" + "string"

// operatory
zmienna = 'asd' // przypisanie
zmienna == 'co' // porównanie zawartości
123 === '123' // porównanie zawartości i typu

  // nie jest równe
'nie' != 'tak' // true
12 !== '12' // true

  // negacja
!true // false
!(2 == 3) // true

  // większy/mniejszy lub równy
5 < 10  // true
6 > 6  // false
6 >= 6  // true

2 + 2 // dodawanie
6 - 3 // odejmowanie
3 * 4 // mnożenie
12 / 2  // dzielenie

4-- // dekrementacja
2++ // incrementacja

++4 // preinkrementacja

// html

// wstawia tekst/elementy w miejscu gdzie skrypt został wstawiony
document.write(znaczniki)

// obiekt znacznika "body" w aktualnym dokumencie
document.body

// dodaje elementy do body
document.body.append('aaaaaaa')

// funkcja wywołana po załadowaniu dokumentu
document.body.onload = function(){
  // pokazuje okno dialogowe z podanym tekstem
  alert('aaaa')

  // pokazuje okno dialogowe z możliwością podania tekstu
  prompt('wiadomość', 'domyślna wartość') // zwraca tekst podany przez użytkownika
}