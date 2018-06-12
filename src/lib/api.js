import axios from 'axios';

class Api {
    static getBaseURL() {
        return 'http://192.168.0.112:3000/';
    }
    
    static headers() {
        let user = JSON.parse(sessionStorage.getItem('user'));
        return {
          'Authorization': user ? user.token : null,
          'Content-Type': 'application/json;charset=UTF-8'
        };
    }
    
    static get(route) {
      return this.xhr(route, null, 'get');
    }
    static put(route, params) {
      return this.xhr(route, params, 'put');
    }
    static post(route, params) {
      return this.xhr(route, params, 'post');
    }
    static delete(route, params) {
      return this.xhr(route, params, 'delete');
    }


    static encodeUrlParams(url, params) {
        var formBody = [];
        for (var property in params) {
            var encodedValue = encodeURIComponent(params[property]);
            formBody.push(property + "=" + encodedValue);
        }
        formBody = formBody.join("&");
        console.log(url + '?' + formBody);
        return url + '?' + formBody;
    }
    
    static xhr(route, params, verb) {
        const url = Api.getBaseURL()+route;
        let options = Object.assign({ method: verb }, params ? { data: params } : null);
        options.headers = Api.headers();
        options.url = url;

        return axios(options).then(resp => {
            if(resp.status == 200 && resp.data.result == 1) {
                return resp.data;
            } else {
                throw resp.data;
            }
        }).catch(error => {
            throw error.message;
        });
    }
}


export default Api;