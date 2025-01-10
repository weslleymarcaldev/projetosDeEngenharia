Descrição do Projetos de Engenharia

1 - Frontend:
HTML, CSS, Bootstrap, VueJS, e SCSS.
Gerenciamento de estado básico com Vue.
Organização modular de componentes.

2 - Backend:
NodeJS com Express para API REST.
Estrutura de rotas para o CRUD.

3 - Banco de Dados:
Simulação com um arquivo JSON para simplificar.

4 - Testes:
Configuração do Jest para testes unitários no frontend e backend.

5 - Controle de Versão:
Repositório Git configurado e disponível no GitHub.

<h2>Estrutura</h2>
crud-engenharia/
│
├── backend/                 # Backend (Node.js com API REST)
│   ├── index.js             # Entrada principal do backend
│   ├── routes/              # Rotas da API
│   │   └── projectRoutes.js # Rotas para o CRUD de projetos
│   ├── controllers/         # Controladores para lógica de negócios
│   │   └── projectController.js
│   ├── models/              # Modelo de dados para os projetos
│   │   └── projectModel.js
│   └── package.json         # Dependências do backend
│
├── frontend/                # Frontend (VueJS + Bootstrap)
│   ├── index.html           # Arquivo HTML principal
│   ├── src/                 # Fonte do Vue.js
│   │   ├── components/      # Componentes VueJS
│   │   │   ├── ProjectList.vue
│   │   │   ├── AddProject.vue
│   │   │   └── EditProject.vue
│   │   ├── App.vue          # Componente raiz
│   │   └── main.js          # Arquivo principal do VueJS
│   ├── styles/              # Estilos SASS/SCSS
│   │   └── main.scss
│   └── package.json         # Dependências do frontend
│
├── tests/                   # Testes unitários com Jest
│   ├── backend/             # Testes do backend
│   ├── frontend/            # Testes do frontend
│   └── jest.config.js       # Configuração do Jest
│
├── .gitignore               # Arquivos ignorados pelo Git
├── README.md                # Documentação do projeto
└── LICENSE                  # Licença do projeto