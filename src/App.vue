<template>
  <div>
    <MenuDepartamentosComponent />
    <router-view></router-view>
  </div>
</template>

<script>
import MenuDepartamentosComponent from "./components/MenuDepartamentos.vue";

export default {
  name: "App",
  components: {
    MenuDepartamentosComponent,
  },
};
</script>

<style>
</style>
