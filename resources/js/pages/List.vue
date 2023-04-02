<template>
    <div class="row justify-content-center">
        <div class="col-12 co-md-10 col-lg-9 col-xl-8">
            <div class="card mt-3">
                <div class="card-header">Lista de historias medicas</div>
                <div class="card-body">
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">Nombre</th>
                                <th scope="col" class="hide-info">
                                    Fecha de nacimiento
                                </th>
                                <th scope="col" class="hide-info">Sexo</th>
                                <th scope="col" class="hide-info">Estatura</th>
                                <th scope="col" class="hide-info">Peso</th>
                                <th scope="col" colspan="2">Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            <template v-if="histories && histories.length > 0">
                                <tr
                                    v-for="(history, index) in histories"
                                    :key="history.id"
                                >
                                    <th scope="row">{{ index + 1 }}</th>
                                    <td v-text="history.nombre"></td>
                                    <td class="hide-info">
                                        <span
                                            v-text="history.fecha_nacimiento"
                                        ></span>
                                    </td>
                                    <td
                                        class="hide-info"
                                        v-text="history.sexo"
                                    ></td>
                                    <td
                                        class="hide-info"
                                        v-text="history.estatura"
                                    ></td>
                                    <td class="hide-info">
                                        {{ history.peso.toFixed(2) }}
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            class="btn btn-primary"
                                            @click="
                                                $router.push(
                                                    `/paciente/${history.id}`
                                                )
                                            "
                                        >
                                            ver
                                        </button>
                                    </td>
                                    <td>
                                        <button
                                            type="button"
                                            class="btn btn-danger"
                                            @click="setDeleteHistory(history)"
                                        >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                            </template>
                            <template v-else>
                                <tr>
                                    <td colspan="7" class="table-active">
                                        No Existen Registros Medicos
                                    </td>
                                </tr>
                            </template>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
        <ModalDelete
            ref="deleteModal"
            :selected="getSelectedDelete"
            @delete="deleteHistory"
        />
    </div>
</template>
<script>
import ModalDelete from "../components/ModalDelete.vue";

export default {
    created() {
        this.getListHistory();
    },
    components: {
        ModalDelete,
    },
    data() {
        return {
            histories: [],
            selectedHistory: {},
        };
    },
    computed: {
        getSelectedDelete() {
            return this.selectedHistory;
        },
    },
    methods: {
        getListHistory() {
            axios
                .get("/historias")
                .then((response) => {
                    this.histories = response.data.data;
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        deleteHistory(id) {
            axios
                .delete(`/historias/${id}`)
                .then((response) => {
                    if (response.data.success) {
                        this.histories = this.histories.filter(
                            (el) => el.id !== id
                        );
                        this.$refs.deleteModal.showModal = false;
                        this.selectedHistory = {};
                    }
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        setDeleteHistory(history) {
            this.selectedHistory = history;
            this.$refs.deleteModal.showModal = true;
        },
    },
};
</script>
<style scoped>
.hide-info {
    display: none;
}
@media (min-width: 768px) {
    .hide-info {
        display: table-cell;
    }
}
</style>
