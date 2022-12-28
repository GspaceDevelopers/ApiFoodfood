import { model, Schema } from 'mongoose'

const Cardapio = new Schema({
    id: String,
    nomerestaurante: String,
    item: String,
    fotos: {
        foto1: String,
        foto2: String,
    },
    acompanhamentos: String,
    tamanho: String,
    preco: Number,
    promocao: Boolean,

})
export default new model('Cardapio', Cardapio)