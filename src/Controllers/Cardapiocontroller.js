import Cardapio from "../schemas/cardapio";

class Cardapiocontroller {
    async post(req, res) {
        const { id, nomerestaurante, item, fotos: { foto1, foto2 }, acompanhamentos, tamanho, preco, promocao } = req.body
        const list = await Cardapio.create({
            id,
            nomerestaurante,
            item,
            fotos: {
                foto1,
                foto2,
            },
            acompanhamentos,
            tamanho,
            preco,
            promocao

        })
        res.json(list)
    }
    async update(req, res) {
        const { _id } = req.params;

        const { id, item, nomerestaurante, fotos: { foto1, foto2 }, acompanhamentos, tamanho, preco, promocao } = req.body
        const list = await Cardapio.updateOne({ _id: _id }, {
            id,
            nomerestaurante,
            item,
            fotos: {
                foto1,
                foto2,
            },
            acompanhamentos,
            tamanho,
            preco,
            promocao

        })
        res.json(list)
    }

    async get1(req, res) {
        const list = await Cardapio.find()
        res.json(list)
    }
    async get(req, res) {
        const { id } = req.query
        const list = await Cardapio.find({ id: id })
        res.json(list)
    }
    async get2(req, res) {
        const { nomerestaurante } = req.query
        const list = await Cardapio.find({ nomerestaurante: nomerestaurante })
        res.json(list)
    }

    async delete(req, res) {
        const { _id } = req.params
        const list = await Cardapio.deleteOne({ _id: _id })

        res.json(list)
    }
}

export default new Cardapiocontroller();
