<template>
  <div>
    <h1>Update</h1>
    <router-link to="/">Back to departamentos</router-link>
    <div>
    <h1>Update Departamento</h1>
    <h2 class="text-primary">{{mensaje}}</h2>
    <form v-if="departamento" v-on:submit.prevent="actualizarDepartamento()">
        <input hidden type="number" class="form-control" v-model="departamento.idDepartamento">
        <div class="mb-3" style="width:500px">
            <label class="form-label">Nombre</label>
            <input type="text" class="form-control" v-model="departamento.nombre">
        </div>
        <div class="mb-3" style="width:500px">
            <label class="form-label">Localidad</label>
            <input type="text" class="form-control" v-model="departamento.localidad">
        </div>
        <button class="btn btn-success">Actualizar</button>
    </form>
  </div>
  </div>
</template>

<script>
import ServiceDepartamentos from "../services/ServiceDepartamentos";
const service = new ServiceDepartamentos();
export default {
  name: "UpdateDepartamentoComponent",
  data() {
    return {
      departamento: null,
      id: -1,
    };
  },
  methods: {
    getParams() {
      var params = this.$route.params;
      this.id = params.iddepartamento;
    },
    cargarDepartamento() {
      service.findDepartamento(this.id).then((res) => {
        this.departamento=res;
      });
    },
    actualizarDepartamento() {
      service.updateDepartamento(this.departamento).then((res) => {
        console.log(res);
        this.$router.push("/");
      });
    },
  },
  mounted(){
    this.getParams();
    this.cargarDepartamento();
  }
};
</script>

<style>
</style>