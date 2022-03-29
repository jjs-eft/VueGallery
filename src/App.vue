<template>
  <div>
    <h1>Vue Gallery</h1>

    <div id="nav"><router-link to="/">Home</router-link></div>
    <div id="nav_2">
      <router-link to="/htmlcss">HTML/CSS</router-link> |
      <router-link to="/javascript">JavaScript</router-link> |
      <router-link to="/vue">Vue</router-link>
    </div>
    <router-view />
  </div>
</template>

<style>
h1 {
  font-size: 50px;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

#nav_2 {
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
}

#nav_2 a {
  font-weight: bold;
  color: #2c3e50;
}

#nav_2 a.router-link-exact-active {
  color: #42b983;
}
</style>
