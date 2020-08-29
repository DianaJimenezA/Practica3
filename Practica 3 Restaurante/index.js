'use strict'
const path = require('path')
var request = require('request');
const express = require('express')
const bodyParser = require('body-parser')
const app= express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.get('/', (req, res)=>{
    res.send("Servicio de Restaurante")
})
//Recibir pedido del cliente
app.get('/NuevaOrden', (req, res)=>{
    console.log("Se recibio la orden Correctamente")
    res.send("Pedido Recibido, Su orden fue procesada")
})
//Informar Estado del pedido al cliente
app.get('/EstadoOrden', (req, res)=>{
    console.log("El cliente solicito verificacion de Pedido")
    res.send("Pedido en preparacion")
})
//Notificar al repartidor
app.get('/NotificarRepartidor', (req, res)=>{
    var cuerpo="respuesta solicitud"
    request("http://localhost:4000/RecibirPedido", function(err, body){
        cuerpo= body.body   
        console.log(cuerpo)
        res.send(cuerpo)
    })
})
app.listen(3000, ()=>{
    console.log('Servico de Restaurante')
})
