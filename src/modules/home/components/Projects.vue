<template>
  <section class="container mx-auto mt-24 lg:flex lg:space-x-3">
    <!-- left half -->
    <div class="lg:w-1/2">
      <!-- first row -->
      <section class="sm:flex sm:space-x-3">
        <div
          class="h-48 text-center bg-white shadow-lg rounded-xl sm:w-1/2 sm:py-5"
        >
          <h1 class="mb-2 text-4xl font-bold text-blue-500 font-serif2">
            Projects
          </h1>
          <div class="pl-4 text-left sm:pl-16 lg:pl-8 xl:pl-16">
            <a href="/" class="flex items-center mb-4 text-3xl font-bold">
              <icon class="w-6 h-6 mr-3" type="profile"></icon>
              Recruiting
            </a>
            <a href="/" class="flex items-center mb-4 text-xl">
              <icon class="w-6 h-6 mr-3" type="profile"></icon>
              Completed
            </a>
          </div>
        </div>

        <button
          class="object-cover w-full h-48 p-2 overflow-hidden sm:w-1/2 button"
        >
          <article
            class="relative object-cover h-full overflow-hidden rounded-xl"
          >
            <img
              class="object-cover rounded-xl"
              src="../assets/183-350x250.jpg"
              alt="Imagem provisória"
            />
            <div
              class="absolute bottom-0 left-0 w-full h-24 px-4 py-2 text-left shadow-xl bg-gradient-to-t from-blue-800 to-transparent rounded-b-xl"
            >
              <h1 class="text-2xl font-bold text-white">Hortus Project</h1>
              <p class="text-lg font-light leading-none text-white">
                <span class="italic"> 03 Volunteers <br /> </span>
                <span class="text-base"> Caxambu, MG - Brazil. </span>
              </p>
            </div>
          </article>
        </button>
      </section>

      <!-- second row -->
      <section class="mt-3">
        <button
          class="object-cover w-full h-48 p-2 overflow-hidden sm:h-96 button"
        >
          <article
            class="relative object-cover h-full overflow-hidden rounded-xl"
          >
            <img
              class="object-cover rounded-xl"
              src="../assets/786-700x500.jpg"
              alt="Imagem provisória"
            />
            <div
              class="absolute bottom-0 left-0 w-full h-24 px-4 py-2 text-left shadow-xl bg-gradient-to-t from-blue-800 to-transparent rounded-b-xl"
            >
              <h1 class="text-2xl font-bold text-white">Lecture Project</h1>
              <p class="text-lg font-light leading-none text-white">
                <span class="italic"> 03 Volunteers <br /> </span>
                <span class="text-base"> Caxambu, MG - Brazil. </span>
              </p>
            </div>
          </article>
        </button>
      </section>
    </div>

    <!-- right half -->
    <div class="lg:w-1/2">
      <!-- first row -->
      <section class="mt-3 lg:mt-0">
        <button
          class="object-cover w-full h-48 p-2 overflow-hidden sm:h-96 button"
        >
          <article
            class="relative object-cover h-full overflow-hidden rounded-xl"
          >
            <img
              class="object-cover rounded-xl"
              src="../assets/885-700x500.jpg"
              alt="Imagem provisória"
            />
            <div
              class="absolute bottom-0 left-0 w-full h-24 px-4 py-2 text-left shadow-xl bg-gradient-to-t from-blue-800 to-transparent rounded-b-xl"
            >
              <h1 class="text-2xl font-bold text-white">Study Group Project</h1>
              <p class="text-lg font-light leading-none text-white">
                <span class="italic"> 03 Volunteers <br /> </span>
                <span class="text-base"> Caxambu, MG - Brazil. </span>
              </p>
            </div>
          </article>
        </button>
      </section>

      <!-- second row -->
      <section class="hidden mt-3 sm:block sm:flex lg:space-x-3">
        <button class="object-cover h-48 p-2 overflow-hidden sm:w-1/2 button">
          <article
            class="relative object-cover h-full overflow-hidden rounded-xl"
          >
            <img
              class="object-cover rounded-xl"
              src="../assets/376-350x250.jpg"
              alt="Imagem provisória"
            />
            <div
              class="absolute bottom-0 left-0 w-full h-24 px-4 py-2 text-left shadow-xl bg-gradient-to-t from-blue-800 to-transparent rounded-b-xl"
            >
              <h1 class="text-2xl font-bold text-white">Prison Project</h1>
              <p class="text-lg font-light leading-none text-white">
                <span class="italic"> 03 Volunteers <br /> </span>
                <span class="text-base"> Caxambu, MG - Brazil. </span>
              </p>
            </div>
          </article>
        </button>
        <button
          class="object-cover h-48 p-2 mt-3 overflow-hidden sm:w-1/2 sm:mt-0 button"
        >
          <article
            class="relative object-cover h-full overflow-hidden rounded-xl"
          >
            <img
              class="object-cover rounded-xl"
              src="../assets/793-351x250.jpg"
              alt="Imagem provisória"
            />
            <div
              class="absolute bottom-0 left-0 w-full h-24 px-4 py-2 text-left shadow-xl bg-gradient-to-t from-blue-800 to-transparent rounded-b-xl"
            >
              <h1 class="text-2xl font-bold text-white">Trip Project</h1>
              <p class="text-lg font-light leading-none text-white">
                <span class="italic"> 03 Volunteers <br /> </span>
                <span class="text-base"> Caxambu, MG - Brazil. </span>
              </p>
            </div>
          </article>
        </button>
      </section>
    </div>
  </section>
</template>
<script lang="ts">
import Icon from '../../core/components/Icon.vue'

export default {
  name: 'projects',
  components: { Icon }
}
</script>
<style scoped>
a:focus,
a:hover {
  @apply text-blue-500 outline-none;
}

.button {
  @apply transition duration-300 transform shadow-lg outline-none rounded-xl;
}

.button:focus {
  @apply shadow-outline scale-98;
}
.button:hover {
  @apply shadow-md scale-98;
}
</style>
