var Tutor = require('./tutorial.js')
exports.NodeTutorial=function()
{
    console.log('Node Turorial')
    this.pTutor = function()
    {
        var PTutor=Tutor
        PTutor.tutorial();
    }
}