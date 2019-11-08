import request from 'superagent';
import Promise from 'promise';

let AdminDaySource = {

    fetchDays() {
        return new Promise(function(resolve, reject) {
            request
                .get('/admin/alldata')
                .end(function(err, res) {
                if(err) {
                    console.log("Nope, something is not right: ", err);
                    reject(err);
                }
                else {
                    console.log("Got all songs :", res.body);
                    resolve(res.body);
                }
            });
        });
    },

    updateDay(day) {
        return new Promise(function(resolve, reject) {
            request.put('/admin/day')
                .send(day)
                .set('Accept', 'application/json')
                .end(function(err, res) {
                    if(err) {
                        console.log("Nope, something is wrong: ", err);
                        reject(err);
                    }
                    else {
                        console.log("Update ok? ", res.body);
                        resolve(res.body);
                    }
                });
        });
    },

    deleteDay(id) {
        return new Promise(function(resolve, reject) {
            request.del('/admin/day/' + id)
                .set('Accept', 'application/json')
                .end(function(err, res) {
                    if(err) {
                        console.log("Nope, something is wrong: ", err);
                        reject(err);
                    }
                    else {
                        console.log("Update ok? ", res.body);
                        resolve(res.body);
                    }
                });
        });
    },

    addDay(day) {
        return new Promise(function(resolve, reject) {
            request.post('/admin/day')
                .send(day)
                .set('Accept', 'application/json')
                .end(function(err, res) {
                    if(err) {
                        console.log("Nope, something is wrong: ", err);
                        reject(err);
                    }
                    else {
                        console.log("Update ok? ", res.body);
                        resolve(res.body);
                    }
                });
        });
    },

    addSolution(solution) {
        return new Promise(function(resolve, reject) {
            request.post('/admin/addsolution/' + solution.id + '/' + solution.solution)
                .set('Accept', 'application/json')
                .end(function(err, res) {
                    if(err) {
                        console.log("Nope, something is wrong: ", err);
                        reject(err);
                    }
                    else {
                        console.log("Update ok? ", res.body);
                        resolve(res.body);
                    }
                });
        });
    },

    deleteSolution(solution) {
        return new Promise(function(resolve, reject) {
            request.post('/admin/deletesolution/' + solution.id + '/' + solution.solution)
                .set('Accept', 'application/json')
                .end(function(err, res) {
                    if(err) {
                        console.log("Nope, something is wrong: ", err);
                        reject(err);
                    }
                    else {
                        console.log("Update ok? ", res.body);
                        resolve(res.body);
                    }
                });
        });
    }
};


export default AdminDaySource;

export const {
    fetchDays,
    updateDay,
    deleteDay,
    addDay,
    addSolution,
    deleteSolution
} = AdminDaySource;
