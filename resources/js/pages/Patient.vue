<template>
    <div class="row justify-content-center">
        <div class="col-md-8 mt-3">
            <div class="card">
                <div class="card-header">Informacion del paciente</div>
                <div class="card-body">
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <div class="fw-bold">Nombre</div>
                            {{ patient.nombre }}
                        </li>
                        <li class="list-group-item">
                            <div class="fw-bold">Fecha de nacimiento</div>
                            {{ nacimiento }}
                        </li>
                        <li class="list-group-item">
                            <div class="fw-bold">Sexo</div>
                            {{ patient.sexo }}
                        </li>
                        <li class="list-group-item">
                            <div class="fw-bold">Estatura</div>
                            {{ patient.estatura }}
                        </li>
                        <li class="list-group-item">
                            <div class="fw-bold">Peso</div>
                            {{ patient.peso }}
                        </li>
                    </ul>
                </div>
                <div class="card-footer text-muted">
                    Paciente creado {{ created }}
                </div>
            </div>
            <div class="col-md-8 mt-3">
                <a class="btn btn-primary btn-lg" @click="$router.push('/')"
                    >Volver</a
                >
            </div>
        </div>
    </div>
</template>
<script>
import { format } from "date-fns";

export default {
    created() {
        this.getPatient();
    },
    data() {
        return {
            patient: [],
        };
    },
    computed: {
        created() {
            return format(new Date(this.patient.created_at), "dd/MM/yyyy");
        },
        nacimiento() {
            return format(
                new Date(this.patient.fecha_nacimiento),
                "dd/MM/yyyy"
            );
        },
    },
    methods: {
        getPatient() {
            const { id } = this.$route.params;
            axios
                .get(`/historias/${id}`)
                .then((response) => {
                    console.log("response", response);
                    this.patient = response.data.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
    },
};
</script>
