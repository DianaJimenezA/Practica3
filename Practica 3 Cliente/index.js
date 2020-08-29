'use strict'
const path = require('path')
var request = require('request');
const express = require('express')
const bodyParser = require('body-parser')
const app= express()
const port = process.env.PORT || 5000

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send("Servicio de Cliente")
})
//Hacer Pedido al restaurante
app.get('/SolicitarPedido', (req, res)=>{
    var cuerpo="respuesta solicitud"
    request("http://localhost:3000/NuevaOrden", function(err, body){
        cuerpo= body.body   
        console.log(cuerpo)
        res.send(cuerpo)
    })
    
})
//Verificar estado del pedido al restaurante
app.get('/SolicitarEstadoPedido', (req, res)=>{
    var cuerpo="respuesta solicitud"
    request("http://localhost:3000/EstadoOrden ", function(err, body){
        cuerpo= body.body   
        console.log(cuerpo)
        res.send(cuerpo)
    })
})
//Verificar estado del pedido al repartidor

app.get('/VerificarPedidoRepartidor', (req, res)=>{
    var cuerpo="respuesta solicitud"
    request("http://localhost:4000/EstadoOrdenPedido", function(err, body){
        cuerpo= body.body   
        console.log(cuerpo)
        res.send(cuerpo)
    })
    
})

app.listen(5000, ()=>{
    console.log('Servicio de Cliente')
})
