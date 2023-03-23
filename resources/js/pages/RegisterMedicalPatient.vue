<template>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card mt-3">
                <div class="card-header">
                    Ingresar historia medica del paciente
                </div>
                <div class="card-body">
                    <div
                        v-if="showError"
                        class="alert alert-danger"
                        role="alert"
                    >
                        <div class="d-flex justify-content-between">
                            <div>{{ errorMessage }}</div>
                            <button
                                type="button"
                                class="btn-close"
                                aria-label="Close"
                                @click="showError = false"
                            ></button>
                        </div>
                    </div>
                    <form
                        class="row"
                        method="POST"
                        @submit.prevent="SaveDataHistory"
                    >
                        <div class="col-12 col-md-7 mb-3">
                            <label for="nombre" class="form-label"
                                >Nombre</label
                            >
                            <input
                                v-model="name"
                                type="text"
                                class="form-control"
                                id="nombre"
                                aria-describedby="emailHelp"
                                required
                            />
                        </div>
                        <div class="col-12 col-md-5 mb-3">
                            <label for="fecha-nacimiento" class="form-label"
                                >Fecha de Nacimiento</label
                            >
                            <input
                                v-model="birthDate"
                                type="date"
                                class="form-control"
                                id="fecha-nacimiento"
                                required
                            />
                        </div>

                        <div class="col-12 col-md-4 mb-3">
                            <label class="form-label" for="sexo">Sexo</label>
                            <select
                                class="form-select"
                                aria-label="Default select example"
                                v-model="sex"
                                required
                            >
                                <option value="masculino">Masculino</option>
                                <option value="femenino">Femenino</option>
                            </select>
                        </div>
                        <div class="col-12 col-md-4 mb-3">
                            <label class="form-label" for="estatura"
                                >Estatura</label
                            >
                            <input
                                v-model="height"
                                type="number"
                                min="0"
                                max="1000000"
                                class="form-control"
                                id="estatura"
                                required
                            />
                        </div>
                        <div class="col-12 col-md-4 mb-3">
                            <label class="form-label" for="peso">Peso</label>
                            <input
                                v-model="weight"
                                type="number"
                                step="0.01"
                                class="form-control"
                                id="peso"
                                required
                            />
                        </div>
                        <button class="btn btn-primary" type="submit">
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
        </div>
        <SuccessMessage
            v-if="showSuccess"
            :patientCreated="user"
            @close="closeMessage"
        />
    </div>
</template>
<script>
import SuccessMessage from "../components/SuccessMessage.vue";

export default {
    components: {
        SuccessMessage,
    },
    data() {
        return {
            name: "",
            birthDate: "",
            sex: "",
            height: 0,
            weight: 0,
            userCreated: {},
            showSuccess: false,
            showError: false,
            errorMessage: "",
        };
    },
    computed: {
        user() {
            return this.userCreated;
        },
    },
    methods: {
        SaveDataHistory() {
            const isValid = this.validateForm();

            if (!isValid) {
                this.showError = true;
                return false;
            }

            this.height = parseInt(this.height);
            this.weight = parseFloat(this.weight);

            const { name, birthDate, sex, height, weight } = this;

            const data = {
                nombre: name,
                fecha_nacimiento: birthDate,
                sexo: sex,
                estatura: height,
                peso: weight,
            };
            axios
                .post(`/historias`, data)
                .then((response) => {
                    if (response.data.success) {
                        console.log("response.data", response.data);
                        console.log(
                            "response.data.message",
                            response.data.message
                        );
                        this.userCreated = response.data.data;
                        this.showSuccess = true;

                        setTimeout(() => {
                            this.cleanData();
                        }, 8000);
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        validateForm() {
            const { name, birthDate, sex, height, weight } = this;

            if (name === "") {
                this.errorMessage = "El campo nombre es requerido";
                return false;
            }
            if (birthDate === "") {
                this.errorMessage = "El campo fecha de nacimiento es requerido";
                return false;
            }
            if (sex === "") {
                this.errorMessage = "El campo sexo es requerido";
                return false;
            }

            if (height === 0) {
                this.errorMessage = "El campo estatura es requerido";
                return false;
            } else if (isNaN(height)) {
                this.errorMessage = "El campo estatura debe ser un numero";
                return false;
            } else if (!Number.isInteger(parseInt(height))) {
                this.errorMessage =
                    "El campo estatura debe ser un numero entero";
                return false;
            } else if (
                Number.isInteger(parseInt(height)) &&
                (parseInt(height) < 0 || parseInt(height) > 1000000)
            ) {
                this.errorMessage =
                    "El campo estatura debe tener un valor entre 1 y 1000000";
                return false;
            }

            if (weight === 0) {
                this.errorMessage = "El campo peso es requerido";
                return false;
            } else if (isNaN(weight)) {
                this.errorMessage = "El campo peso debe ser un numero";
                return false;
            }
            return true;
        },
        cleanData() {
            this.name = "";
            this.birthDate = "";
            this.sex = "";
            this.height = 0;
            this.weight = 0;
            this.errorMessage = "";
            this.showError = false;
        },
        closeMessage() {
            this.showSuccess = false;
            this.userCreated = {};
        },
    },
};
</script>
