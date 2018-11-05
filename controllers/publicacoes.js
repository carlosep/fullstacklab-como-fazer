const api = require('../api')

const novaForm = (req, res) => {
    res.render('publicacoes/nova')
}

const nova = async (req, res) => {
    api.create('publicacoes', {
        publicacao: req.body.publicacao
    })
    console.log(req.body.publicacao)
    res.redirect('/publicacoes')
}

const list = async (req, res) => {
    const publicacoes = await api.list('publicacoes')
    res.render('publicacoes/index', {
        publicacoes
    })
}

const excluir = async (req, res) => {
    await api.apagar('publicacoes', req.params.id)
    res.redirect('/publicacoes')
}

const editarForm = async (req, res) => {
    const publicacao = await api.get('publicacoes', req.params.id)
    res.render('publicacoes/editar', {
        publicacao
    })
}

const editar = async (req, res) => {
    await api.update('publicacoes', req.params.id, {
        publicacao: req.body.publicacao
    })
    res.redirect('/publicacoes')
}

module.exports = {
    novaForm,
    nova,
    list,
    excluir,
    editarForm,
    editar
}