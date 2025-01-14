const express = require('express');
const fs = require('fs');
const router = express.Router();
const dataPath = './data/projects.json';

const getProjects = () => {
    if (!fs.existsSync(dataPath)) {
        // Cria o arquivo se não existir
        fs.writeFileSync(dataPath, JSON.stringify(projects, null, 2));
    }

    const data = fs.readFileSync(dataPath, 'utf8');
    return data ? JSON.parse(data) : [];
};

router.get('/', (req, res) => {
    const projects = getProjects();
    res.json(projects);
});

router.post('/', (req, res) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({ message: 'Nome e descrição são obrigatórios' });
    }

    const projects = getProjects();
    const newProject = { id: Date.now(), name, description };
    projects.push(newProject);
    fs.writeFileSync(dataPath, JSON.stringify(projects, null, 2)); // Identação para leitura mais fácil
    res.status(201).json(newProject);
});


router.put('/:id', (req, res) => {
    const { name, description } = req.body;

    if (!name || !description) {
        return res.status(400).json({ message: 'Nome e descrição são obrigatórios' });
    }

    const projects = getProjects();
    const index = projects.findIndex(p => p.id == req.params.id);

    if (index !== -1) {
        projects[index] = { ...projects[index], name, description };
        fs.writeFileSync(dataPath, JSON.stringify(projects, null, 2));
        res.json(projects[index]);
    } else {
        res.status(404).json({ message: 'Projeto não encontrado' });
    }
});


router.delete('/:id', (req, res) => {
    const projects = getProjects();
    const project = projects.find(p => p.id == req.params.id);

    if (project) {
        const filteredProjects = projects.filter(p => p.id != req.params.id);
        fs.writeFileSync(dataPath, JSON.stringify(filteredProjects, null, 2));
        res.status(200).json({ message: 'Projeto excluído com sucesso' });
    } else {
        res.status(404).json({ message: 'Projeto não encontrado' });
    }
});


module.exports = router;
