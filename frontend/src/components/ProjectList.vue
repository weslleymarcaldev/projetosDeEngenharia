<template>
    <div>
        <header class="box-title">
            <h1 class="the-title">Lista de <b>Projetos</b></h1>
        </header>
        <ul class="list-group">
            <li class="list-group-item d-flex justify-content-between align-items-center" v-for="project in projects"
                :key="project.id">
                <div>
                    <strong>{{ project.name }}</strong> - {{ project.description }}
                </div>
                <div>
                    <button class="btn btn-warning btn-sm me-2" @click="editProject(project)">
                        Editar
                    </button>
                    <button class="btn btn-danger btn-sm" @click="deleteProject(project.id)">
                        Deletar
                    </button>
                </div>
            </li>
        </ul>
        <button class="btn btn-primary mt-3" @click="loadProjects">Recarregar Projetos</button>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "ProjectList",
    props: ["projects"],
    methods: {
        // Método para deletar um projeto
        async deleteProject(id) {
            try {
                const confirmDelete = confirm(
                    "Tem certeza que deseja deletar este projeto?"
                );
                if (confirmDelete) {
                    await axios.delete(`http://localhost:5000/api/projects/${id}`);
                    this.$emit("update-projects"); // Atualiza a lista de projetos no componente pai
                }
            } catch (error) {
                console.error("Erro ao deletar o projeto:", error);
            }
        },
        // Método para editar um projeto (demonstração de exemplo)
        editProject(project) {
            const updatedName = prompt(
                "Atualize o nome do projeto:",
                project.name
            );
            const updatedDescription = prompt(
                "Atualize a descrição do projeto:",
                project.description
            );

            if (updatedName && updatedDescription) {
                axios
                    .put(`http://localhost:5000/api/projects/${project.id}`, {
                        name: updatedName,
                        description: updatedDescription,
                    })
                    .then(() => {
                        this.$emit("update-projects"); // Atualiza a lista após edição
                    })
                    .catch((error) => {
                        console.error("Erro ao editar o projeto:", error);
                    });
            }
        },
        // Método para recarregar projetos manualmente
        async loadProjects() {
            this.$emit("update-projects"); // Atualiza a lista ao clicar no botão
        },
    },
};
</script>

<style scoped>
/* Estilos para o ProjectList */
ul {
    padding: 0;
}

h1 {}

.list-group-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #d4d4d4;
}

.list-group {
    --bs-list-group-color: var(--bs-body-color);
    --bs-list-group-bg: #495057;
    --bs-list-group-border-color: var(--bs-border-color);
    --bs-list-group-border-width: var(--bs-border-width);
    --bs-list-group-border-radius: var(--bs-border-radius);
    --bs-list-group-item-padding-x: 1rem;
    --bs-list-group-item-padding-y: 0.5rem;
    --bs-list-group-action-color: var(--bs-secondary-color);
    --bs-list-group-action-hover-color: var(--bs-emphasis-color);
    --bs-list-group-action-hover-bg: var(--bs-tertiary-bg);
    --bs-list-group-action-active-color: var(--bs-body-color);
    --bs-list-group-action-active-bg: var(--bs-secondary-bg);
    --bs-list-group-disabled-color: var(--bs-secondary-color);
    --bs-list-group-disabled-bg: var(--bs-body-bg);
    --bs-list-group-active-color: #fff;
    --bs-list-group-active-bg: #0d6efd;
    --bs-list-group-active-border-color: #0d6efd;
    display: flex;
    flex-direction: column;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: var(--bs-list-group-border-radius);
}

.btn-warning {
    --bs-btn-color: #000;
    --bs-btn-bg: #ffc107;
    --bs-btn-border-color: #ffc107;
    --bs-btn-hover-color: #000;
    --bs-btn-hover-bg: #ffca2c;
    --bs-btn-hover-border-color: #ffc720;
    --bs-btn-focus-shadow-rgb: 217, 164, 6;
    --bs-btn-active-color: #000;
    --bs-btn-active-bg: #ffcd39;
    --bs-btn-active-border-color: #ffc720;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #000;
    --bs-btn-disabled-bg: #ffc107;
    --bs-btn-disabled-border-color: #ffc107;
}

.btn-danger {
    --bs-btn-color: #fff;
    --bs-btn-bg: #dc3545;
    --bs-btn-border-color: #dc3545;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #bb2d3b;
    --bs-btn-hover-border-color: #b02a37;
    --bs-btn-focus-shadow-rgb: 225, 83, 97;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #b02a37;
    --bs-btn-active-border-color: #a52834;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #dc3545;
    --bs-btn-disabled-border-color: #dc3545;
}

.the-title {

    position: relative;
    padding: 0;
    margin: 0;
    font-family: "Raleway", sans-serif;
    font-weight: 300;
    font-size: 40px;
    color: #080808;
    -webkit-transition: all 0.4s ease 0s;
    -o-transition: all 0.4s ease 0s;
    transition: all 0.4s ease 0s;
}

.the-title b {

    font-family: 'open_sansbold';
    font-weight: bold;
    color: #ea1111;

}

.box-title h1 {

    font-size: 30px;
    text-align: left;
    line-height: 1.5em;
    padding-bottom: 45px;
    font-family: 'open_sansregular';
    letter-spacing: 2px;
    color: #111;

}

.box-title h1:before {
    position: absolute;
    left: 0;
    bottom: 20px;
    width: 30%;
    left: 0%;
    margin-left: 0%;
    height: 1px;
    content: "";
    background-color: #777;
    z-index: 4;
}

.box-title h1:after {
    position: absolute;
    width: 45px;
    height: 40px;
    left: 50%;
    margin-left: -20px;
    bottom: 0px;
    font-family: "untitled-font-1";
    /* content: '\e612'; */
    font-size: 30px;
    line-height: 40px;
    color: #ea1111;
    font-weight: 400;
    z-index: 5;
    display: block;
    background-color: #ffffff;

}
</style>