<template>
    <div>
        <header class="box-title">
            <h1 class="the-title">{{ project.id ? 'Editar' : 'Novo' }} <b>Projeto</b></h1>
        </header>
        <form @submit.prevent="submitForm">
            <div class="input-container ic1">
                <input class="input" type="text" placeholder=" " v-model="project.name" id="name" required />
                <div class="cut"></div>
                <label for="name" class="placeholder">Nome do Projeto</label>
            </div>
            <div class="input-container ic2">
                <textarea class="input" type="text" placeholder=" " v-model="project.description" id="description"
                    required></textarea>
                <div class="cut"></div>
                <label for="description" class="placeholder">Descrição</label>
            </div>
            <button class="btn btn-primary" type="submit">{{ project.id ? 'Atualizar' : 'Criar' }} Projeto</button>
        </form>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'ProjectForm',
    data() {
        return {
            project: {
                name: '',
                description: '',
            }
        };
    },
    methods: {
        async submitForm() {
            try {
                await axios.post('http://localhost:5000/api/projects', this.project);
                this.$emit('update-projects'); // Emite evento para atualizar a lista
                this.project = { name: '', description: '' }; // Limpa o formulário
            } catch (error) {
                console.error('Erro ao enviar o formulário:', error);
            }
        }
    }
};
</script>

<style scoped>
/* Estilos para o ProjectForm */
:root,
[data-bs-theme=light] {
    --bs-blue: #0d6efd;
    --bs-indigo: #6610f2;
    --bs-purple: #6f42c1;
    --bs-pink: #d63384;
    --bs-red: #dc3545;
    --bs-orange: #fd7e14;
    --bs-yellow: #ffc107;
    --bs-green: #198754;
    --bs-teal: #20c997;
    --bs-cyan: #0dcaf0;
    --bs-black: #000;
    --bs-white: #fff;
    --bs-gray: #6c757d;
    --bs-gray-dark: #343a40;
    --bs-gray-100: #f8f9fa;
    --bs-gray-200: #e9ecef;
    --bs-gray-300: #dee2e6;
    --bs-gray-400: #ced4da;
    --bs-gray-500: #adb5bd;
    --bs-gray-600: #6c757d;
    --bs-gray-700: #495057;
    --bs-gray-800: #343a40;
    --bs-gray-900: #212529;
    --bs-primary: #0d6efd;
    --bs-secondary: #6c757d;
    --bs-success: #198754;
    --bs-info: #0dcaf0;
    --bs-warning: #ffc107;
    --bs-danger: #dc3545;
    --bs-light: #f8f9fa;
    --bs-dark: #212529;
    --bs-primary-rgb: 13, 110, 253;
    --bs-secondary-rgb: 108, 117, 125;
    --bs-success-rgb: 25, 135, 84;
    --bs-info-rgb: 13, 202, 240;
    --bs-warning-rgb: 255, 193, 7;
    --bs-danger-rgb: 220, 53, 69;
    --bs-light-rgb: 248, 249, 250;
    --bs-dark-rgb: 33, 37, 41;
    --bs-primary-text-emphasis: #052c65;
    --bs-secondary-text-emphasis: #2b2f32;
    --bs-success-text-emphasis: #0a3622;
    --bs-info-text-emphasis: #055160;
    --bs-warning-text-emphasis: #664d03;
    --bs-danger-text-emphasis: #58151c;
    --bs-light-text-emphasis: #495057;
    --bs-dark-text-emphasis: #495057;
    --bs-primary-bg-subtle: #cfe2ff;
    --bs-secondary-bg-subtle: #e2e3e5;
    --bs-success-bg-subtle: #d1e7dd;
    --bs-info-bg-subtle: #cff4fc;
    --bs-warning-bg-subtle: #fff3cd;
    --bs-danger-bg-subtle: #f8d7da;
    --bs-light-bg-subtle: #fcfcfd;
    --bs-dark-bg-subtle: #ced4da;
    --bs-primary-border-subtle: #9ec5fe;
    --bs-secondary-border-subtle: #c4c8cb;
    --bs-success-border-subtle: #a3cfbb;
    --bs-info-border-subtle: #9eeaf9;
    --bs-warning-border-subtle: #ffe69c;
    --bs-danger-border-subtle: #f1aeb5;
    --bs-light-border-subtle: #e9ecef;
    --bs-dark-border-subtle: #adb5bd;
    --bs-white-rgb: 255, 255, 255;
    --bs-black-rgb: 0, 0, 0;
    --bs-font-sans-serif: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", "Noto Sans", "Liberation Sans", Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --bs-font-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    --bs-gradient: linear-gradient(180deg, rgba(255, 255, 255, 0.15), rgba(255, 255, 255, 0));
    --bs-body-font-family: var(--bs-font-sans-serif);
    --bs-body-font-size: 1rem;
    --bs-body-font-weight: 400;
    --bs-body-line-height: 1.5;
    --bs-body-color: #212529;
    --bs-body-color-rgb: 33, 37, 41;
    --bs-body-bg: #fff;
    --bs-body-bg-rgb: 255, 255, 255;
    --bs-emphasis-color: #000;
    --bs-emphasis-color-rgb: 0, 0, 0;
    --bs-secondary-color: rgba(33, 37, 41, 0.75);
    --bs-secondary-color-rgb: 33, 37, 41;
    --bs-secondary-bg: #e9ecef;
    --bs-secondary-bg-rgb: 233, 236, 239;
    --bs-tertiary-color: rgba(33, 37, 41, 0.5);
    --bs-tertiary-color-rgb: 33, 37, 41;
    --bs-tertiary-bg: #f8f9fa;
    --bs-tertiary-bg-rgb: 248, 249, 250;
    --bs-heading-color: inherit;
    --bs-link-color: #0d6efd;
    --bs-link-color-rgb: 13, 110, 253;
    --bs-link-decoration: underline;
    --bs-link-hover-color: #0a58ca;
    --bs-link-hover-color-rgb: 10, 88, 202;
    --bs-code-color: #d63384;
    --bs-highlight-bg: #fff3cd;
    --bs-border-width: 1px;
    --bs-border-style: solid;
    --bs-border-color: #dee2e6;
    --bs-border-color-translucent: rgba(0, 0, 0, 0.175);
    --bs-border-radius: 0.375rem;
    --bs-border-radius-sm: 0.25rem;
    --bs-border-radius-lg: 0.5rem;
    --bs-border-radius-xl: 1rem;
    --bs-border-radius-xxl: 2rem;
    --bs-border-radius-2xl: var(--bs-border-radius-xxl);
    --bs-border-radius-pill: 50rem;
    --bs-box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.15);
    --bs-box-shadow-sm: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    --bs-box-shadow-lg: 0 1rem 3rem rgba(0, 0, 0, 0.175);
    --bs-box-shadow-inset: inset 0 1px 2px rgba(0, 0, 0, 0.075);
    --bs-focus-ring-width: 0.25rem;
    --bs-focus-ring-opacity: 0.25;
    --bs-focus-ring-color: rgba(13, 110, 253, 0.25);
    --bs-form-valid-color: #198754;
    --bs-form-valid-border-color: #198754;
    --bs-form-invalid-color: #dc3545;
    --bs-form-invalid-border-color: #dc3545;
}

form {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

button {
    width: 150px;
    position: relative;
    margin: 0 auto;
    padding: 5px;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 13px;
}

textarea {
    padding: 8px;
    margin: 5px 0;
}

.title {
    color: #eee;
    font-family: sans-serif;
    font-weight: 600;
    margin-top: 30px;
}

.subtitle {
    color: #eee;
    font-family: sans-serif;
    font-size: 16px;
    font-weight: 600;
    margin-top: 10px;
}

.input-container {
    height: 50px;
    position: relative;
    width: 100%;
}

.ic1 {
    margin-top: 10px;
}

.ic2 {
    margin-top: 30px;
}

.input {
    background-color: #303245;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    font-size: 18px;
    height: 100%;
    outline: 0;
    padding: 4px 20px 0;
    width: 100%;
}

.cut {
    background-color: #a5a4a4;
    border-radius: 10px;
    height: 20px;
    left: 20px;
    position: absolute;
    top: -20px;
    transform: translateY(0);
    transition: transform 200ms;
    width: 76px;
}

.cut-short {
    width: 50px;
}

.input:focus~.cut,
.input:not(:placeholder-shown)~.cut {
    transform: translateY(8px);
}

.placeholder {
    background-color: transparent;
    color: #a5a4a4;
    font-family: sans-serif;
    left: 20px;
    line-height: 14px;
    pointer-events: none;
    position: absolute;
    transform-origin: 0 50%;
    transition: transform 200ms, color 200ms;
    top: 20px;
}

.input:focus~.placeholder,
.input:not(:placeholder-shown)~.placeholder {
    transform: translateY(-30px) translateX(10px) scale(0.75);
}

.input:not(:placeholder-shown)~.placeholder {
    color: #ffffff;
    /* font-size: 40pt; */
}

.input:focus~.placeholder {
    color: #0a0a0a;
}

.submit {
    background-color: #08d;
    border-radius: 12px;
    border: 0;
    box-sizing: border-box;
    color: #eee;
    cursor: pointer;
    font-size: 18px;
    height: 50px;
    margin-top: 38px;
    outline: 0;
    text-align: center;
    width: 100%;
}

.submit:active {
    background-color: #06b;
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

.btn-primary {
    --bs-btn-color: #fff;
    --bs-btn-bg: #0003ad;
    --bs-btn-border-color: #0003ad;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #0b5ed7;
    --bs-btn-hover-border-color: #0a58ca;
    --bs-btn-focus-shadow-rgb: 49, 132, 253;
    --bs-btn-active-color: #fff;
    --bs-btn-active-bg: #0a58ca;
    --bs-btn-active-border-color: #0a53be;
    --bs-btn-active-shadow: inset 0 3px 5px rgba(0, 0, 0, 0.125);
    --bs-btn-disabled-color: #fff;
    --bs-btn-disabled-bg: #0003ad;
    --bs-btn-disabled-border-color: #0003ad;
}

.btn {
    --bs-btn-padding-x: 0.75rem;
    --bs-btn-padding-y: 0.375rem;
    --bs-btn-font-family: ;
    --bs-btn-font-size: 1rem;
    --bs-btn-font-weight: 400;
    --bs-btn-line-height: 1.5;
    --bs-btn-color: var(--bs-gray-300);
    --bs-btn-bg: var(--bs-blue);
    --bs-btn-border-width: var(--bs-border-width);
    --bs-btn-border-color: transparent;
    --bs-btn-border-radius: var(--bs-border-radius);
    --bs-btn-hover-border-color: transparent;
    --bs-btn-box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.15), 0 1px 1px rgba(0, 0, 0, 0.075);
    --bs-btn-disabled-opacity: 0.65;
    --bs-btn-focus-box-shadow: 0 0 0 0.25rem rgba(var(--bs-btn-focus-shadow-rgb), .5);
    display: inline-block;
    padding: var(--bs-btn-padding-y) var(--bs-btn-padding-x);
    font-family: var(--bs-btn-font-family);
    font-size: var(--bs-btn-font-size);
    font-weight: var(--bs-btn-font-weight);
    line-height: var(--bs-btn-line-height);
    color: var(--bs-btn-color);
    text-align: center;
    text-decoration: none;
    vertical-align: middle;
    cursor: pointer;
    -webkit-user-select: none;
    -moz-user-select: none;
    user-select: none;
    border: var(--bs-btn-border-width) solid var(--bs-btn-border-color);
    border-radius: var(--bs-btn-border-radius);
    background-color: var(--bs-btn-bg);
    transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, box-shadow .15s ease-in-out;
}

[type=button],
[type=reset],
[type=submit],
button {
    -webkit-appearance: button;
}

button,
select {
    text-transform: none;
}

button,
input,
optgroup,
select,
textarea {
    margin: 0;
    font-family: inherit;
    font-size: inherit;
    line-height: inherit;
}

button {
    border-radius: 0;
}

*,
::after,
::before {
    box-sizing: border-box;
}
</style>