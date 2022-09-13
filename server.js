const gprc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('./proto/bookStore.proto',{});
const bookStorePackage = gprc.loadPackageDefinition(packageDefinition).bookStorePackage;



// creating the server

const server = new gprc.Server();

// adding the service

server.addService(bookStorePackage.BookStore.service,{
    createBook: createBook,
    readBook: readBook,
    readBooks: readBooks
});

server.bindAsync('0.0.0.0:50051', gprc.ServerCredentials.createInsecure(), ()=>{
    console.log(`server is running at http://127.0.0.1:50051`);
    server.start();
})

// this server is insecure because there is no ssl configurations