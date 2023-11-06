<template>
  <div>
    <h1>Create Departamento</h1>
    <h2 class="text-primary">{{mensaje}}</h2>
    <form v-on:submit.prevent="insertDepartamento()">
        <div class="mb-3" style="width:500px">
            <label class="form-label">Id departamento</label>
            <input type="number" class="form-control" v-model="departamento.idDepartamento">
        </div>
        <div class="mb-3" style="width:500px">
            <label class="form-label">Nombre</label>
            <input type="text" class="form-control" v-model="departamento.nombre">
        </div>
        <div class="mb-3" style="width:500px">
            <label class="form-label">Localidad</label>
            <input type="text" class="form-control" v-model="departamento.localidad">
        </div>
        <button class="btn btn-success">Insertar</button>
    </form>
  </div>
</template>

<script>
import ServiceDepartamentos from "../services/ServiceDepartamentos";
const service = new ServiceDepartamentos();
export default {
  name: "CreateDepartamentoComponent",
  methods: {
    insertDepartamento() {
      service.createDepartamento(this.departamento).then(res=>{
        console.log(res);
        this.$router.push("/");
        this.mensaje="Insertado correctamente";
      });
    },
  },
  data() {
    return {
      departamento: {
        idDepartamento: 0,
        nombre: "",
        localidad: "",
      },
      mensaje: "",
    };
  },
};
</script>

<style>
</style>