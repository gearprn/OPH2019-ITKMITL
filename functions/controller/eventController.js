const cors = require('cors');
const express = require('express');
const event = express();
const admin = require("../config/fireAdmin");
const firestore = admin.firestore();
const statusCode = require("../config/statusCode")

event.use(cors({ origin: true }));

event.post('/register', async (request, response) => {
    try {
        let event = request.body.event;
        let payload = {
            teamName: request.body.teamName,
            school: request.body.school,
            member1: {
                name: request.body.member1.name,
                id: request.body.member1.id,
                age: request.body.member1.age,
                grade: request.body.member1.grade,
                tel: request.body.member1.tel,
                email: request.body.member1.email
            },
            member2: {
                name: request.body.member2.name,
                id: request.body.member2.id,
                age: request.body.member2.age,
                grade: request.body.member2.grade,
                tel: request.body.member2.tel,
                email: request.body.member2.email
            },
            member3: {
                name: request.body.member3.name,
                id: request.body.member3.id,
                age: request.body.member3.age,
                grade: request.body.member3.grade,
                tel: request.body.member3.tel,
                email: request.body.member3.email
            },
            advisorName: request.body.advisorName,
            advisorEmail: request.body.advisorEmail,
            advisorTel: request.body.advisorTel,
            createAt: new Date()
        };
        let teamRef = firestore.doc(event+'/'+payload.teamName);
        let getTeam = await teamRef.get()
        if (getTeam.exists) {
            response.send(statusCode[400]);
        } else {
            let setTeam = await teamRef.set(payload);
            if (setTeam) {
                response.send(statusCode[201]);
            } else {
                response.send(statusCode[400]);
            }
        }
    } catch (e) {
        console.log(e);
        response.send(statusCode[500]);
    }

});

event.post('/esport', async (request, response) => {
    try {
        let payload = {
            teamName: request.body.teamName,
            school: request.body.school,
            member1: {
                name: request.body.member1.name,
                id: request.body.member1.id,
                age: request.body.member1.age,
                grade: request.body.member1.grade,
                tel: request.body.member1.tel,
                email: request.body.member1.email
            },
            member2: {
                name: request.body.member2.name,
                id: request.body.member2.id,
                age: request.body.member2.age,
                grade: request.body.member2.grade,
                tel: request.body.member2.tel,
                email: request.body.member2.email
            },
            member3: {
                name: request.body.member3.name,
                id: request.body.member3.id,
                age: request.body.member3.age,
                grade: request.body.member3.grade,
                tel: request.body.member3.tel,
                email: request.body.member3.email
            },
            member4: {
                name: request.body.member4.name,
                id: request.body.member4.id,
                age: request.body.member4.age,
                grade: request.body.member4.grade,
                tel: request.body.member4.tel,
                email: request.body.member4.email
            },
            member5: {
                name: request.body.member5.name,
                id: request.body.member5.id,
                age: request.body.member5.age,
                grade: request.body.member5.grade,
                tel: request.body.member5.tel,
                email: request.body.member5.email
            },
            member6: {
                name: request.body.member6.name,
                id: request.body.member6.id,
                age: request.body.member6.age,
                grade: request.body.member6.grade,
                tel: request.body.member6.tel,
                email: request.body.member6.email
            },
            advisorName: request.body.advisorName,
            advisorEmail: request.body.advisorEmail,
            advisorTel: request.body.advisorTel,
            teamType: request.body.teamType,
            createAt: new Date()
        };

        let teamRef = firestore.doc('Esport/'+payload.teamName);
        let getTeam = await teamRef.get();
        if (getTeam.exists) {
            response.send(statusCode[400]);
        } else {
            let setTeam = await teamRef.set(payload);
            if (setTeam) {
                response.send(statusCode[201]);
            } else {
                response.send(statusCode[400]);
            }
        }

    } catch (e) {
        console.log(e);
        response.send(statusCode[500]);
    }

});

event.get('/getTeam', async (request, response) => {
    try {
        let event = request.headers.event;
        let team = request.headers.team;
        let teamRef = firestore.doc(event+'/'+team);
        let getTeam = await teamRef.get()
        let teamData = getTeam.data();
        if (teamData) {
            response.send(teamData)
        } else {
            response.send(statusCode[400]);
        }
    } catch (e) {
        console.log(e);
        response.send(statusCode[500])
    }
});
event.get('/getEvent', async (request, response) => {
    try {
        let event = request.headers.event;
        let teamRef = firestore.collection(event);
        teamArray = [];
        let allTeam = await teamRef.get()
          .then(snapshot => {
            snapshot.forEach(doc => {
                team = doc.data();
                teamArray.push(team)
            });
          })
          .catch(err => {
            console.log('Error getting documents', err);
          });
        response.send(teamArray)
    } catch (e) {
        console.log(e);
        response.send(statusCode[500])
    }

    
});

module.exports = event;