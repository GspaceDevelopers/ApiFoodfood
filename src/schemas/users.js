import { model, Schema } from 'mongoose'

const Users = new Schema({
    id: String,
    foto: String,
    estabelecimento: String,
    telefone: String,
    endereco: String,
    cnpj: String

})

export default new model('Users', Users)