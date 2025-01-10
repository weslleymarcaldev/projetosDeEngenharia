const express = require('express');
const fs = require('fs');
const router = express.Router();
const dataPath = './data/projects.json';

const getProjects = () => JSON.parse(fs.readFileSync(dataPath));

router.get('/', (req, res) => {
    const projects = getProjects();
    res.json(projects);
});

router.post('/', (req, res) => {
    const projects = getProjects();
    const newProject = { id: Date.now(), ...req.body };
    projects.push(newProject);
    fs.writeFileSync(dataPath, JSON.stringify(projects));
    res.status(201).json(newProject);
});

router.put('/:id', (req, res) => {
    const projects = getProjects();
    const index = projects.findIndex(p => p.id == req.params.id);
    if (index !== -1) {
        projects[index] = { ...projects[index], ...req.body };
        fs.writeFileSync(dataPath, JSON.stringify(projects));
        res.json(projects[index]);
    } else {
        res.status(404).json({ message: 'Project not found' });
    }
});

router.delete('/:id', (req, res) => {
    const projects = getProjects();
    const filteredProjects = projects.filter(p => p.id != req.params.id);
    fs.writeFileSync(dataPath, JSON.stringify(filteredProjects));
    res.status(204).send();
});

module.exports = router;
