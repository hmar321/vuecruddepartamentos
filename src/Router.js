import { createRouter, createWebHistory } from "vue-router";
import DepartamentosComponent from "./components/Departamentos.vue";
import CreateDepartamentoComponent from "./components/CreateDepartamento.vue";
import DetallesDepartamentoComponent from "./components/DetallesDepartamento.vue";
import UpdateDepartamentoComponent from "./components/UpdateDepartamento.vue";

const routes = [
    { path: "/", component: DepartamentosComponent },
    { path: "/createdepartamento", component: CreateDepartamentoComponent },
    { path: "/updatedepartamento/:iddepartamento", component: UpdateDepartamentoComponent },
    { path: "/detallesdepartamento/:iddepartamento/:nombre/:localidad", component: DetallesDepartamentoComponent },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes
});

export default router;