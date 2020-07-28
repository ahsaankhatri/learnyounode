const http  = require('http');
const bl =  require('bl');

let result= [];
let num = 0;

let urlArr = process.argv.slice(2);
let noOfUrl = urlArr.length;

function Show() {

    for (let i =0; i< noOfUrl; i++)
    {
        console.log(result[i]);
    }
}

function getHttp(indx)
{
    http.get(urlArr[indx],function (response)
    {    
        response.pipe(bl(function (err, data)
        {
            if(err)
            {
                return console.log('Error Accured!' + err);
            }
            result[indx] = data.toString();
            num++;

            if(num === noOfUrl)
            {
                Show();
            }
        }))
    })
}

for (i = 0 ; i< noOfUrl; i++)
{
    getHttp(i);
}