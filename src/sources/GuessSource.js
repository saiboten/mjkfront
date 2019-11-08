import request from 'superagent';
import Promise from 'promise';

let GuessSource = {

    guess(song) {
        return new Promise(function (resolve, reject) {
            request.get('/answer?song=' + song).end(function(err, res) {
                if(err) {
                    console.log("Nope, something is wrong: ", err);
                    reject(err);
                }
                else {
                    console.log("Got the result :", res.body);
                    resolve(res.body);
                }
            });
        });
    }
};


export default GuessSource;

export const {
    guess
} = GuessSource;
