#Practica3
Aplicacion SOA para simular  un servicio de crowdsourcing de comida a domicilio
Link de video de explicacion de la Practica:  https://youtu.be/q2ZSTsepY-U

#Descripcion de Herramientas
Para la realizacion de esta practica se utilizo NodeJs para cada una de las aplicaciones del cliente, restautante y repartidor.

#Aplicaciones:
1. Cliente
El cliente podra realizar las siguientes operaciones:
-Solicitar pedido al restaurante: realizara esta peticion a la API http://localhost:5000/SolicitarPedido, la cual le notificara de respuesta.
-Verificar estado del pedido al restaurante: realizara esta peticion a la API http://localhost:5000/SolicitarEstadoPedido, la cual le notificara de respuesta
-Verificar estado del pedido al repartidor: realizara una peticion a la API
http://localhost:5000/VerificarPedidoRepartidor, la cual notificara la respuesta

2. Restaurante
-Recibir pedido del cliente: es una API en la aplicacion de restaurante la cual notificara  de recibido esta aplicacion se despliega en el puerto 3000
-Informar estado del pedido al cliente
-Avisar al repartidor que ya está listo el pedido
http://localhost:3000/NotificarRepartidor

3. Repartidor
-Recibir pedido del restaurante: la aplicacion del repartidor contiene una API para dar respuesta a la solicitud del cleinte.
-Informar estado del pedido al cliente
-Marcar como entregado
http://localhost:4000/CambiarEstado
