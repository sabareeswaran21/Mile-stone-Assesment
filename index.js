const cors=require(cors());
const express=require(express());
const expp=require(express.json());
const code=require(express.json(urlencoded{extends:true}))
const bodyParser=require(body-parser());
const database=require(mysql());

const app=express();
app.use(cors());
app.use(express());
app.use(expp());
app.use(bodyParser());
app.use(database());

let a= database.createconnection({
    host:"localhost",
    port:'3306',
    user:'root',
    password:'#Bsabaree1999',
    database:'userdetails'
});
a.connect(function(error){
    if(error){
        console.log('error');
    }
    else{
        console.log('Database Successfully connect')
    }
})
