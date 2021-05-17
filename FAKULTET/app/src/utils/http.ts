import { rejects } from "node:assert";

enum MethodType {
    POST = 'POST',
    PUT = 'PUT',
    GET = 'GET',
    DELETE = 'DELETE',
};

const requestFunction = <R>(
    url: string, 
    payload: any, 
    method: MethodType, 
    auth: string
    //w tym miejscu starac sie uzywac autoryzacji
    //warto: tokeny JWT
    ):Promise<R> => {
        
        //jest dostep do niego i mozna zobaczyc jakie ma elementy(Controlem i na zmienna)
        const options: RequestInit = {
            //control + spacja - opcje jakie moga byc zadeklarowane
            method,
            ...(!!auth && {
                headers:{
                    Authorization: 'Bearer ${auth}'
                }
            }),
        };
       let parsedUrl = url;

        if(method == MethodType.POST || MethodType.PUT && payload)
        {
            options.body = JSON.stringify(payload);
        }
        else if (payload)
        {
            const query = Object
                .keys(payload)
                .map((key : string)=> '${key} = ${payload[key]}')
                .join('&');
            parsedUrl = '${url}?${query}';
        }

        return new Promise((resolve, reject)=>{
            fetch(parsedUrl, options)
            .then(res=>res.json().then(data => {
               if(res.status !== 200) reject(Error('Result status of ${res.status}'));
                   return data;
            }))
            .then(json => resolve(json))
            .catch(err => reject(err));
        });

      
}

const http = {
    post: (url: string, payload: any, auth: string = '') => requestFunction(url, payload, MethodType.POST, auth),
    get: (url: string, payload: any, auth: string = '') => requestFunction(url, payload, MethodType.GET, auth),
    put: (url: string, payload: any, auth: string = '') => requestFunction(url, payload, MethodType.PUT, auth),
    delete: (url: string, payload: any, auth: string = '') => requestFunction(url, payload, MethodType.DELETE, auth),
}
export default http;
