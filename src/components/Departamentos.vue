<template>
  <div>
    <h1>departamentos</h1>
    <div class="spinner-border" role="status" v-if="status === false">
      <span class="sr-only"></span>
    </div>
    <table v-else class="table table-dark table-striped">
      <thead>
        <tr>
          <th>Id departamento</th>
          <th>Nombre</th>
          <th>Localidad</th>
          <th></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="departamento in departamentos" :key="departamento">
          <td>{{ departamento.idDepartamento }}</td>
          <td>{{ departamento.nombre }}</td>
          <td>{{ departamento.localidad }}</td>
          <td>
            <router-link class="btn btn-primary" :to="'/detallesdepartamento/'+departamento.idDepartamento+'/'+departamento.nombre+'/'+departamento.localidad">Detalles</router-link>
          </td>
          <td>
            <router-link class="btn btn-success" :to="'/updatedepartamento/'+departamento.idDepartamento">Editar</router-link>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import ServiceDepartamentos from "../services/ServiceDepartamentos";
const serviceDepartamentos = new ServiceDepartamentos();
export default {
  name: "DepartamentosComponent",
  data() {
    return {
      departamentos: [],
      status: false,
    };
  },
  mounted() {
    serviceDepartamentos.getDepartamentos().then((res) => {
      this.departamentos = res;
      this.status = true;
    });
  },
};
</script>

<style>
</style>