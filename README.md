# Fakultet
Projekt na przedmiot realizowany z Software Hut

Notatki:
1. Projektowanie w node.js:
Typy danych, zmiennych, operatory operacje warunkowe, pętle, funckje, funkcje wbudowane w silnik js'a

Typy zmiennych takie jak np. var

var tekst= 'test'; //po lewej typ danych po prawej typ zmiennej w tym przypadku string

var let const; // nie istnieje

le const tekst = 'tekst' // od var rozni sie głownie zasięgiem a typ zmiennej let można redeklarować np.

let tekst ='test';
>tekst
<"test"
>tekst='test123'
<"test123"

odwrotnie gdy spóbujemy zrobić to samo dla typu const

const tekst_2='test2'
>tekst_2='test2'

Funkcje wbudowane do wykorzystania da typy 'string'
Jest ich dość sporo aby zobaczyć liste dostepnych funkcji wystarczy postawić kropke i zobaczy co środowisko podpowie (działa nawet w przeglądarce) nie są to wszytskie funkcje, a raczej najczęsciej używane

np 
>tekst.lenght
<4

ciekawy przykład funkcji:

>tekst.charAt(2); // zwraca dany znak z danej zamiennej ze wskazanej pozycji
<"s" //numerowanie oczywiscie od 0


>tekst.charCodeAt(2);
<115 //zwraca unicode 

----------------------------------------------------------------------------
Najczęsciej uzywane funkcje: String
>tekst
<"test123"
>tekst. includes('st'); // sprawdza czy dany string zawiera się w podanej zmiennej
<true 


>let zmienna = 'hello world';
<undefined
>zmienna.split(' '); // wrtosc po której ma podzielic stringa
<(2) ["hello", "world"]
     0: "hello"
     1: "world"
     lenght: 2
     __proto__: Array(0)
>zmienna.split('1');
< (4) ["he", "", "o war", "d"] // wycina równiez wyznacznik wyciecia


>zmienna.trim(); //wycina wsyztskie biale znaki ztekstu na poczatku lub na koncu zmiennej
<"hello world"

//dosc czesta funkcja i przydatna

>zmienna.toUpperCase(); // zwieksza czcionke
<"HELLO WORLD     "
>zmienna.toLowerCase(); //zmniejsza
<"hello world 


//Laczenie stringów w tekscie
>zmienna = "kota";
<"kota";
>console.log('Ala ma ' + zmienna);
<"Ala ma kota"
>`Ala ma ${zmienna}` //tak tez polaczy jest to szybszy sposob troche jak w bashu


//Mozna robic tez breakliny i tu jets przewaga nad popredznim sposobem

>`Ala ma

  ${zmienna}`
< "Ala ma
  
  kota"
-----------------------------------------------------------------------------------------
Najczęsciej uzywane funkcje: liczby

>let number = 2,5 //moze byc zmienna przecinkowa, moze byc zwykly "int"
<undefined
>number =1;
<1
let number = 99999999999999;
<undefined

>number
<99999999999999

>let number = 999999999999999; //gdy wrzucimy jeszcze jeden znak  juz sie moze zmienic liczba
<1000000000000000

W JS moga być własnie problemy z niektórymi opracjami na zmiennych np zmiennoprzeicnkowych, dużych liczbach itp 
Trzeba na to zwracac uwagę. Mozna korzytsac z zewnetrznych bibliotek do rozwiazywania takich problemow


>const x =new Number(10); //konstruktor
<undefined
>const y =10; //przypisanie do zminnej
<undefined

>x===y
<false

Potrójny znak "=" porównuje typy

>x==y
<true
 
Daje true po niejawnej konwersji na stringa i porownalo wartosci


Funkcje:
>Number.isFinite(120); //czy liczba jest liczba skonczona;
<true

>Number.isFinite(-12.23); 
<true

>Number.isFinite(1/3); 
<true

>Number.isFinite(Math.PI); 
<true

>Number.isFinite(0/0); 
<false

>Number.isFinite(Infinity); 
<false


Przydaje sie gyd chcemy np sprawdzic czy wynik jakiegos działania matematycznego, czy przypadkiem nie zrobilismy czegoś źle; czy coś sie nie popsuło

>let liczba =1.123456;
<undefined

>liczba.toFixed(2); //obcina do podanej wartosci zamiast zaokraglac
<"1.12";

>liczba.toFixed(4);
<"1.125";


przyklad stałych

Math.E
Math.PI
Math.cos
Math.sin itp

>Math.floor(3.16);
<3
>Math.pow(2,4);
<16
>Math random(); //bardzo przydatna, wartosci od 0 do 1
<0.345645677658765

-----------------------------------------------------------------------------------------
Wartości Boolowskie

>let boolean =true;
<undefined
>boolean
<true
>boolean = false;
<false


Można sprawdzić czy coś jest boolem
>Boolean(5) //funkcja
<true

>Boolean('test')
<true
>Boolean('')
<false
>Boolean({});
<true

>Boolean(0);
<false

>Boolean(1);
<true

>Boolean(-1);
<true

Gdy bedziemy iterowac lub sprawdzac wielkosci, wartosci tablic łatwo jest wtedy weryfikowac czy nie jest pusta, dużo latwiej sie pisze logike dzięki takiemu rozwiazaniu np piszac jakies warunki


>let tablica =[1,2,3,4,5,"six",false] //deklaracja tablicy []
< (7) [1,2,3,4,5,"six",false] // nie ma prblemu z mieszaniem danych w tablicy

>tablica.length
<7
>if(1){console.log('test')}
 test

>if(0){console.log('test')}
<undefined

>if(tablica.length){console.log('test')} //jesli dlugosc nie jest zerowa to ma wykonac sie ta logika czyli wypusanie w tym wypadku
 test

PRZYKŁADOWE FUNKCJE:

>tablica.join()
<"1,2,3,4,5,"six", false" // skleja wsyztsko w stringa, nie ma problemu z typem danych

>let tablica = [1,2,3,4,5];
<undefined
>tablica = [1,2,3,4,5];
< (5) [1,2,3,4,5];
>const tablica2 = tablica.map((wartosc,index)=>{return wartosc+index});
<undefined
>tablica2
< (5) [1,3,5,7,9]

 //mapowanie tablic zmiana i przypisanie, mapowanie słuzy do 				//zmiany wartosci tablicy w powyzszym przypadku dodaje do kazdej wartosci tablicy jej index
W petli mozna uzyskac to samo tylko wczensiej trzeba by bylo zaloczyc zmienna przechowujaca
Foreach moze polaczyc jedno i drugie

tablica.forEach((wartosc)=>{console.log(wartosc)});
1
2
3
4
5

>tablica
< (5) [1,2,3,4,5]


>tablica[0]=10
< (5) [10,2,3,4,5] //podmienianie wartosci w tablicy


>tablica[0]="milion";
< (5) ["milion",2,3,4,5] // znowu nie ma problemu z dowolnymi typami 

Obiekty zapisujemy w klamrach {}

>let obiekt = {};
<undefined

>obiekt
<{} //pusty obiekt

>obiekt = {
 autor: 'Jan Kowalski'
}
< {autor: 'Jan Kowalski'}

>obiekt = {
 autor: 'Jan Kowalski',
 tytul: "KsiegiJana'
}
<{autor: 'Jan Kowalski',tytul: "KsiegiJana'}

Obiekty sa na tyle złozone że mozna w nim zapisac wszytsko co w zwykłych zmiennych

Funkcje:
>function test(){} //funckja nazwana; wchodzi do zasobu
 const test = functio(){} //referencja do funkcji; mozna korzystac po zadeklarowaniu

Róznica: Gdy tworzymy funkcje nazwaną, to w dowolnym miejscu w kodzie gdzie ja zadeklarujemy 
bedziemy mogli z niej korzystac

> function(parametr){return xyx}
	(parametr)=>{return xyx} //trzeci sposob zapisu

>const funkcja = (parametr)=>{return parametr}
<undefined

>funkcja('test')
<"test"

To chyba najprzyjemniejszy sposob wykorzystania funkcji

Najczesciej:

const funckja2 = (parametr)=>parametr;
<undefined
>funckja2
<(parametr)=> parametr
>funckja2('test');
<"test"

>let funkcja3(parametr)=>(parametr);
<undefined
>let funkcja3('test');
<"test"

kiedy zwracamy obiekt: musza byc te 2 nawiasy
funkcja3 = (parametr)=> {return {obiekt:parametr}};


>funkcja3 = (parametr)=> ({obiekt:parametr});
<(parametr)=>({obiekt:parametr})
>funckja3('test');
<{obiekt: "test"}
--------------------------------------------------------------------------------------------
SWITCH CASE

switch uzywamy do 'przerzucania' roznych alternatyw zmiennej 

let zmienna = 10;
switch(zmienna){
	case 0;
	//kod;
	break;
	case 1;
	//kod;
	break;
	default;  //pamietac zeby dorzucic wartosc zawsze kiedy wariancje zmiennej nie bedzie 			//siepokrywac
	//kod domyslny 

}

3 rodzaje Pętli w JS:


Zwykly for o ktorym mozna zapomniec lepszy jest forEach
>const tablica_1 = ['jeden', 'dwa', 'trzy'];
<undefined

>for (let index = 0 ; index <tablica_1.length; index++) {
	console.log(tablica_1[index]);
 }
<undefined
>for (let index = 0 ; index <tablica_1.length; index++) {
	console.log(tablica_1[index]);
 }
 jeden
 dwa
 trzy

>tablica_1.forEach() //szybszy i prostszy sposob
 jeden
 dwa 
 trzy

>obiekt
< {autor: "Jan Kowalski:, tytul: "KsiegiJana"}

Pętla do iterowania po właściwosciach obiektu, albo elementach iterowalnych zmiennej

>for(let index in obiekt{
 console.log(index);
 console.log(obiekt[index]); //wyciagniecie obiektu po selektorze
 }

 autor
 Jan Kowalski
 tytul
 KsiegiJana


>const string ='test';
<undefined
>for (let znak of string){
 	console.log(znak);
 }

 t
 e 
 s 
 t

To jest lepsze do tablic
