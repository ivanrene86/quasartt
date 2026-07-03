<script setup>
import { useRouter } from 'vue-router'
</script>

<template>
  <div id="app">
    <header>
      <h1>Gimnasio - Entrena tu cuerpo</h1>
      <nav>
        <router-link to="/">Inicio</router-link>
        <router-link to="/brazo">Brazo</router-link>
        <router-link to="/pecho">Pecho</router-link>
        <router-link to="/pierna">Pierna</router-link>
        <router-link to="/espalda">Espalda</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>

    <footer>
      <small>Hecho con ❤️ — Gimnasio demo</small>
    </footer>
  </div>
</template>
