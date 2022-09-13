const grpc = require('@grpc/grpc-js ');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync('./proto/bookStore.proto', {});
const bookStorePackage = grpc.loadPackageDefinition(packageDefinition).bookStorePackage;

const client = new bookStorePackage.Book('localhost:50051', grpc.credentials.createInsecure());
client.createBook({'id':-1, 'book': 'Cracking the interview'}, (err,response)=>{
    
})