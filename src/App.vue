<template>
  <div id="app">
    <header>
      <section id="screen1">
        <div id="logo">
          <img src="images/planetssmall.jpg" alt="From Mars to Earth ">
        </div>
        <nav id="navbar">
          <ul>
            <li>
              <a href="https://kamilabartnik.github.io/terraformacja/index.html">Home</a>
            </li>
            <li>
              <a href="https://kamilabartnik.github.io/terraformacja/kalendarz.html">Kalendarz</a>
            </li>
            <li>
              <a href="https://kamilabartnik.github.io/terraformacja/rozgrywki.html">Nowe Rozgrywki</a>
            </li>
            <li>
              <a href="https://kamilabartnik.github.io/terraformacja/faq.html">FAQ</a>
            </li>
            <li>
              <a href="https://kamilabartnik.github.io/terraformacja/mini-gry.html">Mini Gry</a>
            </li>
          </ul>
        </nav>
        <div id="welcome">
          <h1>Terraformacja Marsa</h1>
          <h2>Strona fanów poznańskiej ligii Terraformacji Marsa</h2>
        </div>
      </section>
    </header>
    <div>
      <section id="screen2">
        <div id="sidebar">
          <p>Ranking:</p>
          <ol>
            <li>Łukasz 'Schalonny' Przybylak - 1389</li>
            <li>Iwona "Makota" Pytlak - 1316</li>
            <li>Tomasz 'Niewodnik' Jankowski - 1309</li>
            <li>Krzysztof Kaczmarek - 1274</li>
            <li>Anna 'Kidi' Czerwińska - 1262</li>
            <li>Agata Kurkiewicz - 1258</li>
            <li>Bartosz Witczak - 1254</li>
            <li>Andrzej Krajna - 1251</li>
            <li>Kamila Bartnik - 1245</li>
            <li>Jakub Ratulowski - 1236</li>
            <li>Karol Ziółkiewicz - 1222</li>
            <li>Marcin Ruta - 1219</li>
            <li>Olgierd Łuców - 1217</li>
            <li>Zuzi Ciocia - 1211</li>
            <li>Anna Sławek - 1208</li>
            <li>Wojciech 'Taifun' Chrzan - 1206</li>
            <li>Kasia - 1204</li>
            <li>Zuzia Bednarek - 1204</li>
            <li>Kornelia 'Nela' Kątna - 1204</li>
            <li>Kajetan Strzyżewski - 1202</li>
            <li>Karol Smolarek - 1202</li>
            <li>Szymon Sobiepanek - 1202</li>
            <li>Ewa Krajna - 1201</li>
            <li>Piotr Cieślak - 1201</li>
            <li>Michał Bednarek - 1201</li>
            <li>Franciszek Pawlicki - 1201</li>
            <li>Ewa Morawska - 1201</li>
          </ol>
        </div>
        <div id="content">
          <!-- <button title="Toggle sidebar"> Ranking</button> -->

          <p>Spędź swoje życie na Terraformowaniu Marsa!</p>
          <p>
            1
            <br>Rozgrywka ligowa
            <br>Każda gra musi zostać ogłoszona na min. 36 godz. wcześniej.
            Do rozgrywki ligowej liczy się dowolna partia w której udział bierze co
            najmniej dwóch zawodników ligowych.
            <br>2
            <br>Zwycięzca Ligii
            <br>Co 3 miesiące ogłaszamy zwycięzcę naszej Poznańskiej Ligii,
            jest to osoba, która wygra rozgrywkę pucharową. Dla tej osoby chwała i
            splendor, chyba, że zorganizujemy wpisowe to i nagroda będzie!
            <br>3
            <br>Dokumentacja i relacja z gier
            <br>Pod każdym postem z ogłoszeniem o zamiarze gry śmiało
            wrzucajcie zdjęcia, relacje i uwagi. Proszę o zedytowanie posta głównego
            o wyniki danego spotkania.
            <br>4
            <br>BAWMY SIĘ JAK NIKT NIGDY
            <br>Przede wszystkim świetnie się bawimy :). Mam nadzieję, że
            taka forma rozgrywek Wam przypasuje i dostarczy mnóstwa emocji i
            satysfakcji oraz da okazję do zagrania z wieloma Maniakami
            Terraformowania :)
          </p>

          <p>Spędź swoje życie na Terraformowaniu Marsa!</p>
        </div>
        <div style="clear: both"></div>
      </section>
    </div>
    <section id="screen3">
      <footer id="footer">
        <div id="foot">
          <p>Spędź swoich znajomych do Terraformowania Marsa</p>
        </div>
        <div id="foot2">
          <a href="mailto: kbartnik@g.pl">
            <i class="icon-mail-alt"></i>
          </a>
          <a href="https://www.facebook.com/groups/297283600980143/?fref=nf" target="_blank">
            <i class="icon-facebook-rect"></i>
          </a>
        </div>
        <div style="clear: both"></div>
      </footer>
      <!-- <script src="scripts/main.js"></script> -->
    </section>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<style>
#app {
  font-family: "Gruppo", cursive;
  color: #757575;
  max-width: 1200px;
  margin: 0 auto;
}

#footer {
  clear: both;
  /* position: fixed; */
  bottom: 0;
  text-align: center;
  font-size: 15px;
  padding: 10px;
}

#foot,
#foot2 {
  float: left;
}

#foot2 {
  margin-left: 10px;
  text-align: center;
}

h1 {
  font-size: 60px;
  text-align: center;
  margin: 0;
  padding: 20px 0;
  color: #303030;
  text-shadow: 3px 3px 1px grey;
}

h2 {
  font-size: 30 px;
  margin-bottom: 5%;
  text-align: center;
}

h3 {
  margin-top: 20px;
  text-align: center;
}

#logo img {
  display: inline;
  margin-left: auto;
  margin-right: auto;
  width: 100%;
}

* {
  margin: 0;
  padding: 0;
}

a {
  text-decoration: none;
}

/* This class is added on scroll */
.fixed {
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 70px;
  z-index: 1;
  max-width: 1200px;
}

/* Navigation Settings */
#navbar {
  bottom: 0;
  width: 100%;
  height: 70px;
  background: #fff;
  text-align: center;
  font-size: 120%;
}

#navbar li {
  display: inline-block;
  padding: 24px 10px;
}

#navbar li a {
  color: #757575;
  text-transform: uppercase;
}

#navbar li a:hover {
  background-color: #f7f5f5;
}

@media only screen and (max-width: 520px) {
  nav li {
    padding: 24px 4px;
  }

  nav li a {
    font-size: 14px;
  }
}
</style>
