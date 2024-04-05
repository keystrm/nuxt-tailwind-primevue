<template>
  <div>
    <div class="transition-colors duration-500 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 min-h-screen">
      <!-- Sticky Menu Bar -->
      <div ref="menuBarRef" class="sticky top-0 z-50 bg-white dark:bg-gray-900/80 backdrop-blur-lg shadow-md">
        <Menubar :model="items" class="py-2 px-4" />
      </div>

      <!-- Page Content -->
      <div class="pt-16 px-4">
        <h1 class="text-4xl font-bold">
          Hello world!
        </h1>
        <p class="mt-2 text-lg text-gray-600 dark:text-gray-300">
          Welcome to your Nuxt app enhanced with PrimeVue and Tailwind CSS.
        </p>
        <!-- Theme Selector -->
        <div>
          <select v-model="$colorMode.preference">
            <option value="system">System</option>
            <option value="light">Light</option>
            <option value="dark">Dark</option>
            <option value="sepia">Sepia</option>
          </select>
        </div>
      </div>

    </div>

  </div>
</template>

<script setup lang="ts">
import 'primeicons/primeicons.css'

const items = ref([
  {
    label: 'Home',
    icon: 'pi pi-home'
  },
  {
    label: 'Features',
    icon: 'pi pi-star'
  },
  {
    label: 'Projects',
    icon: 'pi pi-search',
    items: [
      {
        label: 'Components',
        icon: 'pi pi-bolt'
      },
      {
        label: 'Blocks',
        icon: 'pi pi-server'
      },
      {
        label: 'UI Kit',
        icon: 'pi pi-pencil'
      },
      {
        label: 'Templates',
        icon: 'pi pi-palette',
        items: [
          {
            label: 'Apollo',
            icon: 'pi pi-palette'
          },
          {
            label: 'Ultima',
            icon: 'pi pi-palette'
          }
        ]
      }
    ]
  },
  {
    label: 'Contact',
    icon: 'pi pi-envelope'
  }
]);
</script>