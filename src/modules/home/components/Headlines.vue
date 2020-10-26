<template>
  <section class="relative">
    <!-- statistics section -->
    <div class="relative mb-24 lg:mb-48">
      <h1 class="mb-10 text-4xl text-blue-500 lg:mb-16">Statistics</h1>
      <article class="sm:flex sm:justify-center sm:space-x-3">
        <div
          v-for="(stat, key) in statistics"
          :key="key"
          class="flex items-center justify-center h-32 mx-auto mb-6 bg-white shadow-lg sm:w-48 sm:h-40 md:mx-0 rounded-xl"
        >
          <h1 class="text-xl text-3xl text-green-600 md:text-4xl">
            {{ stat }} <br />
            <span
              class="font-serif text-lg italic font-light text-green-900 uppercase sm:text-base md:text-lg"
              >{{ key }}</span
            >
          </h1>
        </div>
      </article>
    </div>

    <!-- statistics section -->
    <div class="container relative z-10 mx-auto mb-24 lg:px-40 lg:mb-40">
      <h1 class="mb-16 text-4xl text-blue-500">Testimonials</h1>
      <article class="justify-center md:flex md:space-x-12 xl:space-x-24">
        <div class="w-64 mx-auto mb-12 text-center md:w-1/3">
          <img
            class="w-32 h-32 mx-auto mb-6 rounded-full"
            src="/src/modules/home/assets/foto-laura.png"
            alt="Foto de laura"
          />
          <p class="mb-5 italic font-light text-blue-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            aperiam architecto dignissimos dolorem doloribus eaque eligendi eum
            excepturi!
          </p>
          <div class="w-20 mx-auto mb-5 bg-green-600" style="height: 3px" />
          <h2 class="text-base font-semibold text-indigo-900 uppercase">
            Laura Barbosa <br />
            <span class="text-base italic font-normal normal-case">
              Volunteer
            </span>
          </h2>
        </div>
        <div class="w-64 mx-auto mb-12 text-center md:w-1/3">
          <img
            class="w-32 h-32 mx-auto mb-6 rounded-full"
            src="/src/modules/home/assets/foto-francisco.png"
            alt="Foto de Francisco"
          />
          <p class="mb-5 italic font-light text-blue-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            aperiam architecto dignissimos dolorem doloribus eaque eligendi eum
            excepturi!
          </p>
          <div class="w-20 mx-auto mb-5 bg-green-600" style="height: 3px" />
          <h2 class="text-base font-semibold text-indigo-900 uppercase">
            Francisco Ribeiro <br />
            <span class="text-base italic font-normal normal-case">
              Owner
            </span>
          </h2>
        </div>
        <div class="w-64 mx-auto mb-12 text-center md:w-1/3">
          <img
            class="w-32 h-32 mx-auto mb-6 rounded-full"
            src="/src/modules/home/assets/foto-andre.png"
            alt="Foto de André"
          />
          <p class="mb-5 italic font-light text-blue-500">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
            aperiam architecto dignissimos dolorem doloribus eaque eligendi eum
            excepturi!
          </p>
          <div class="w-20 mx-auto mb-5 bg-green-600" style="height: 3px" />
          <h2 class="text-base font-semibold text-indigo-900 uppercase">
            André Trevor <br />
            <span class="text-base italic font-normal normal-case">
              Volunteer
            </span>
          </h2>
        </div>
      </article>
    </div>

    <!-- decoration -->
    <img
      class="absolute top-0 hidden md:block left"
      style="margin-left: 72%; margin-top: -300px; height: 700px; width: 700px"
      src="../assets/how-to-shape-3.svg"
      alt="Decoration"
    />
    <img
      class="absolute top-0 right-0 hidden mt-20 md:block"
      style="margin-right: 72%; height: 750px"
      src="../assets/how-to-shape-4.svg"
      alt="Decoration"
    />
    <img
      class="absolute bottom-0 hidden -mb-32 md:block left"
      style="margin-left: 85%; margin-top: -300px; height: 310px"
      src="../assets/how-to-shape-5.svg"
      alt="Decoration"
    />
  </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'Headlines',
  data() {
    return {
      statistics: {
        volunteers: 1.111,
        projects: 251,
        countries: 24,
        associations: 35
      }
    }
  }
})
</script>
<style scoped>
h1 {
  @apply font-bold leading-none text-center font-serif2;
}

a:focus,
a:hover {
  @apply text-blue-500 outline-none;
}
</style>
