<script setup>
import DrawerContent from './DrawerContent.vue'
import { VerticalNavLayout } from '@layouts'
import { onMounted } from 'vue'
import { steps, tour } from "@/plugins/shepherd"
// Components
import NavbarThemeSwitcher from '@/layouts/components/NavbarThemeSwitcher.vue'
import UserProfile from '@/layouts/components/UserProfile.vue'


onMounted(() => {
  steps.forEach((step) => {
    tour.addStep(step);
  })
});

const startTour = () => {
  tour.start()
}
</script>

<template>
  <VerticalNavLayout>
    <!-- 👉 navbar -->
    <template #navbar>
      <VTextField rounded prepend-inner-icon="mdi-magnify" density="compact" max-width="100px"
        class="app-bar-search d-none d-sm-block" />

      <VSpacer />

      <VBtn variant="tonal" @click="startTour">Start Tour</VBtn>
      <VBtn icon variant="text" color="default" class="me-2" size="small">
        <VIcon icon="mdi-bell-outline" size="24" />
      </VBtn>
      <UserProfile />
    </template>

    <!-- 👉 Drawer content -->
    <template #navigation-drawer-content>
      <DrawerContent />
    </template>

    <!-- 👉 Pages -->
    <div class="layout-page-content">
      <RouterView />
    </div>

    <!-- 👉 Footer -->
  </VerticalNavLayout>
</template>

<style lang="scss">
.app-bar-search {
  .v-input__control {
    width: 236px
  }

  .v-field__outline__start {
    border-radius: 28px 0 0 28px !important;
    flex-basis: 20px !important;
  }

  .v-field__outline__end {
    border-radius: 0 28px 28px 0 !important;
  }
}
</style>
