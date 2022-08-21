const express=require('express');
const cors=require('cors');
const md5=require('md5')
const mongoose=require('mongoose');
const config = require('config');
const urlModel=require('./model')

const app=express();
app.use(cors());
app.use(express.urlencoded({ extended: true }))
app.use(express.json());

const dbConfig = config.get('minURL.dbConfig');
const baseURl=`http://localhost:${dbConfig.port}/`

mongoose.connect(dbConfig.dbURL).then(() =>{
    console.log("Connected to Db");
}).catch(() =>{
    console.log("Connection Error to Db");
});

function get7scode(hash,n){
    let code="";
    for(let i=0;i<7;i++){
        code=code+hash[Math.floor((Math.random() * n))];
    }
    return code;
}
app.post('/:id',(req,res) =>{
    let id=req.params.id;
    console.log(id)
    if(id==="getMinUrl"){
        console.log("Link Received");
        console.log(req.body.link);
        let URL = req.body.link;
        let md5hash = md5(URL);
        let code = get7scode(md5hash, md5hash.length);
        console.log(code);
        let isPresent=0;
        const query = urlModel.where({'_id':code}).find(async function (err, urlTag) {
            if (err) console.error(err);
            else isPresent=urlTag.length;
            if (isPresent) {
                console.log("Present");
            }
            else {
                let urlM = new urlModel();
                urlM._id = code;
                urlM.url = URL;
                urlM.minUrl = baseURl + code;
                urlM.createdOn = (new Date()).toString();
                await urlM.save((err, data) => {
                    if(err) console.log(err)
                    else{
                        console.log("URL saved")
                        res.status(200).send(baseURl + code)
                    }
                })
            }
        });

    }
    else if(id==="getMaxUrl"){


    }
    else{
        const query = urlModel.where({'_id':id}).find(async function (err, url) {
            if(err) res.send("No such URL found");
            else{
                if(url.length>1)
                    res.send("Data Corrupted")
                else
                    res.send(url[0].url);
            }
        })
    }
},)

app.listen((dbConfig.port),()=>{
    console.log(`Server Running at http://localhost:${dbConfig.port}`)
})