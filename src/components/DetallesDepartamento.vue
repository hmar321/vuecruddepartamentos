<template>
  <div>
    <h1>Detalles departamento</h1>
    <router-link to="/">Back to departamentos</router-link>
    <h2 class="text-info">Id:{{$route.params.iddepartamento}},Nombre:{{$route.params.nombre}},Localidad:{{$route.params.localidad}}</h2>
  </div>
</template>

<script>
export default {
  name: "DetallesDepartamentoComponent",
};
</script>

<style>
</style>