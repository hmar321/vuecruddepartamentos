import axios from "axios";
import Global from "../Global";

export default class ServiceDepartamentos {
    getDepartamentos() {
        return new Promise(function (resolve) {
            var departamentos = [];
            var request = "api/departamentos";
            var url = Global.urlApiEjemplos + request;
            axios.get(url).then(res => {
                departamentos = res.data;
                resolve(departamentos);
            })
        })
    }

    createDepartamento(departamento) {
        return new Promise(function (resolve) {
            var request = "api/departamentos";
            var url = Global.urlApiEjemplos + request;
            axios.post(url, departamento).then(res => {
                resolve(res);
            })
        })
    }

    findDepartamento(id) {
        return new Promise(function (resolve) {
            var request = "api/departamentos/" + id;
            var url = Global.urlApiEjemplos + request;
            var departamento = {};
            axios.get(url).then(res => {
                departamento = res.data
                resolve(departamento);
            })
        })
    }

    updateDepartamento(departamento) {
        return new Promise(function (resolve) {
            var request = "api/departamentos";
            var url = Global.urlApiEjemplos + request;
            axios.put(url, departamento).then(res => {
                resolve(res);
            })
        })
    }
}
