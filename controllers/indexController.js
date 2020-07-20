const fs = require("fs");
const path = require("path");
const projectsFilePath = path.join(__dirname, '../json/projects.json');
const projects = JSON.parse(fs.readFileSync(projectsFilePath, 'utf-8'));

const indexController = {
    index: (req, res) => {

        res.render('index');
     }
    //, search: (req, res) => {

    //     let projectsSearched = projects.find(pdto => pdto.title.toLowerCase().includes(req.query.search.toLowerCase()) ? pdto : null);
 
    //     res.render('result', {
    //         project: projectsSearched
    //     });
    // }
}

module.exports = indexController;