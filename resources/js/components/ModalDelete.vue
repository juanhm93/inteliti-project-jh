<template>
    <div>
        <transition
            @enter="startTransitionModal"
            @after-enter="endTransitionModal"
            @before-leave="endTransitionModal"
            @after-leave="startTransitionModal"
        >
            <div class="modal fade" v-if="showModal" ref="modal">
                <div class="modal-dialog" role="document">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">
                                Eliminar Paciente
                            </h5>
                            <button
                                class="close"
                                type="button"
                                @click="showModal = !showModal"
                            >
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div class="modal-body">
                            Esta seguro que quiere eliminar al paciente
                            {{ selected.nombre }}?
                        </div>
                        <div class="modal-footer">
                            <button
                                class="btn btn-primary"
                                @click="showModal = !showModal"
                            >
                                Cerrar
                            </button>
                            <button
                                class="btn btn-danger"
                                type="button"
                                @click="$emit('delete', selected.id)"
                            >
                                Eliminar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </transition>
        <div class="modal-backdrop fade d-none" ref="backdrop"></div>
    </div>
</template>
<script>
export default {
    props: {
        selected: {
            type: Object,
            required: false,
            default: () => ({}),
        },
    },
    data() {
        return {
            showModal: false,
        };
    },
    methods: {
        startTransitionModal() {
            this.$refs.backdrop.classList.toggle("d-block");
            this.$refs.modal.classList.toggle("d-block");
        },
        endTransitionModal() {
            this.$refs.backdrop.classList.toggle("show");
            this.$refs.modal.classList.toggle("show");
        },
    },
};
</script>
