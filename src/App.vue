<template>
  <div id="app">
    <NavBar />
    <NuxtPage />
  </div>
</template>

<style>

/* ===== Scrollbar CSS ===== */
  /* Firefox */
  * {
    scrollbar-width: thin;
    scrollbar-color: #006fc3;
  }

  /* Chrome, Edge, and Safari */
  *::-webkit-scrollbar {
    width: 6px;
  }

  *::-webkit-scrollbar-track {
    background: #111;
  }

  *::-webkit-scrollbar-thumb {
    background: linear-gradient(180deg, #00f8ff, #006fc3);
    border-radius: 0;
    border: 0px solid #ffffff;
  }
/* ===== END Scrollbar CSS ===== */


a, a:visited {
  color: #006fc3 !important;
}

a:active, a:hover {
  color: #00f8ff !important;
}

body {
	background: #191C23;
}

#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.title {
  color: white !important;
  font-size: 3rem !important;
  font-family: 'Rajdhani', 'sans-serif';
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.24em;
  word-wrap: break-word;
  margin-bottom: 50px;
}

.subtitle {
  color: #e2e2e2 !important;
  font-size: 0.8rem !important;
  font-weight: 400;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding-bottom: 4px;
}

.justified {
  text-align: justify;
}

</style>
