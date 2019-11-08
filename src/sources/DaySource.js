import request from 'superagent';
import Promise from 'promise';

let DaySource = {

    fetchDays() {
        return new Promise(function (resolve, reject) {
            request
                .get('/alldata')
                .end(function(err, res) {
                    if(err) {
                        console.log("Nope, something is wrong: ", err);
                        reject(err);
                    }
                    else {
                        console.log("Got all songs :", res.body);
                        resolve(res.body);
                    }
                });
        });
    }
};


export default DaySource;

export const {
    fetchDays
} = DaySource;
