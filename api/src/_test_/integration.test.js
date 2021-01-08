const supertest = require('supertest')
const http = require("http")
const app = require('../index.js')
const request = supertest(app)
const Helpers = require('./../utils/helpers.js')

describe('test /POST endpoint', ()=> {

test('check if responds with  201 if send data', async(done) => {
    try{
        await request.post('/testWienert')
        .send({data: []})
        .expect(201)
        .then((res) => {
            done()
        });
            } catch (e){
        if(e) console.log(e); done(e)
        done()
        
            }
})

test('check if responds with  201 if no data', async(done) => {
    try{
        await request.post('/testWienert')
        .send({})
        .expect(403)
        .then((res) => {
            done()
        });
            } catch (e){
        if(e) console.log(e); done(e)
        done()
        
            }
})})
describe('GET /story endpoint', ()=>{
    test('check if response is created', async (done) =>{

})})
