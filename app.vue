<template>
  <div>
    <div
      class="transition-colors duration-500 min-h-screen dark:bg-surface-800 text-surface-600 dark:text-surface-400">
      <!-- Sticky Menu Bar -->
      <div ref="menuBarRef" class="sticky top-0 z-50 backdrop-blur-lg shadow-md">
        <Menubar :model="items">
          <template #start>
          </template>
          <template #item="{ item, props, hasSubmenu, root }">
            <a v-ripple class="flex align-items-center" v-bind="props.action">
              <span :class="item.icon" />
              <span class="ml-2">{{ item.label }}</span>
              <Badge v-if="item.badge" :class="{ 'ml-auto': !root, 'ml-2': root }" :value="item.badge" />
              <span v-if="item.shortcut" class="ml-auto border-1 surface-border border-round surface-100 text-xs p-1">{{
          item.shortcut }}</span>
              <i v-if="hasSubmenu"
                :class="['pi pi-angle-down', { 'pi-angle-down ml-2': root, 'pi-angle-right ml-auto': !root }]"></i>
            </a>
          </template>
          <template #end>
            <div class="flex align-items-center gap-2">
              <ColorModeSwitch/>
              <InputText placeholder="Search" type="text" class="w-8rem sm:w-auto" />
            </div>
          </template>
        </Menubar>
      </div>

      <!-- Page Content -->
      <div class="pt-16 px-4">
        <h1 class="text-4xl font-bold">
          Hello world!
        </h1>
        <p class="mt-2 text-lg">
          Welcome to your Nuxt app enhanced with PrimeVue and Tailwind CSS.
        </p>

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