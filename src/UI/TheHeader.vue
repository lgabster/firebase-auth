<template>
    <header>
        <nav>
            <h1>
                <router-link to="/">Vue App</router-link>
            </h1>
            <ul>
              <template v-if="isAuthenticated">
                <li>
                  <router-link to="/history">{{ $t('log') }}</router-link>
                </li>
                <li>
                  <router-link to="/map">{{ $t('google maps') }}</router-link>
                </li>
                <li>
                  <router-link to="/settings">{{ $t('settings') }}</router-link>
                </li>
                <li>
                  <button @click="signOutUser">{{ $t('signOut') }}</button>
                </li>
              </template>
              <template v-else>
                  <li>
                      <router-link to="/register">{{ $t('registration') }}</router-link>
                  </li>
                  <li>
                      <router-link to="/login">{{ $t('login') }}</router-link>
                  </li>
                </template>
            </ul>
        </nav>
    </header>
</template>

<script>
import { signOutUser, isAuthenticated } from '../auth'

export default {
  methods: {
    signOutUser
  },
  computed: {
    isAuthenticated () {
      return isAuthenticated.value
    }
  }
}
</script>


<style scoped>
header {
  width: 100%;
  height: 5rem;
  background-color: #3d008d;
  display: flex;
  justify-content: center;
  align-items: center;
}

header a,
header button {
  text-decoration: none;
  color: #f391e3;
  display: inline-block;
  padding: 0.75rem 1.5rem;
  border: 1px solid transparent;
  background: none;
}

a:active,
a:hover,
a.router-link-active {
  border: 1px solid #f391e3;
}

h1 {
  margin: 0;
}

h1 a {
  color: white;
  margin: 0;
}

h1 a:hover,
h1 a:active,
h1 a.router-link-active {
  border-color: transparent;
}

header nav {
  width: 90%;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

header ul {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

li {
  margin: 0 0.5rem;
}
</style>
