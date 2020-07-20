const fs = require("fs");
const path = require("path");
const projectsFilePath = path.join(__dirname, '../json/projects.json');
const projects = JSON.parse(fs.readFileSync(projectsFilePath, 'utf-8'));

const projectController = {
    index: (req, res) => {

        res.render('project', {
            projects: projects
        });
    },
    option: (req, res) => {

        const projectsFound = projects.find(project => project.id == req.params.idProject);

        res.render('result', {
            project: projectsFound
        });
    }
}

module.exports = projectController;