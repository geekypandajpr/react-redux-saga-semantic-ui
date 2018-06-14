export  const  required = function (fildName, data) {fildName; data; return "" === data ? 'Required': true;}
export const number = value => value && isNaN(Number(value)) ? 'Must be a number' : undefined;
export const email = function (fildName, data) {
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(data)? true :false;
};



