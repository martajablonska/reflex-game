# Gra "Reflex" - JavaScript

##### Założenia
1)    Gra rozpoczyna się od wciśnięcia przycisku ”Start”
2)    Rozgrywka trwa 60 sekund lub do straty ostatniego życia (gracz ma trzy „życia”)
3)    Czas widoczny w prawym górnym rogu
4)    Na środku gry wyświetlone są kwadraty (liczba podawana z parametru)
5)    Co 3 sekundy losowo wybrany kwadrat zapala się na zielono
6)    Kwadrat jest zapalony na zielono przez 2 sekundy i w tym czasie gracz musi go kliknąć
7)    Jeśli graczowi uda się kliknąć zielony kwadrat, dostaje 1 punkt
8)    Gracz traci życie, jeśli w trafi w inny kwadrat lub jeśli podświetlenie zielonego kwadratu zniknie po 2 sekundach. Pojawia się alert „straciłeś życie”
9)    Grę można zresetować – wyzerowany zostaje licznik czasu i punktów, a licznik „życia” wraca do stanu początkowego

##### Instalacja

Instalacja projektu sprowadza się do zainstalowania niezbędnych zależności za pomocą polecenia `yarn install` lub `npm install`.

##### Praca nad projektem

Za pomocą komendy `yarn start` lub `npm start` uruchom serwer developerski, który będzie dostępny pod adresem [http://localhost:9000](http://localhost:9000).

Plikiem wejściowym będzie plik `src/index.js`. 

Pliki statyczne serwowane są z folderu `dist`, do którego z kolei automatycznie trafia zawartość folderu `src/static`. Oznacza to, że np. plik `src/static/style.css` będzie dostępny pod adresem [http://localhost:9000/style.css](http://localhost:9000/style.css).

Uruchomienie projektu: `yarn start` lub `npm start`.
