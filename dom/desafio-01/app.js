new Vue ({
    el: '#desafio',
    data: {
        nome: 'Vinicius',
        idade: 22,
        imagem: 'https://t4.ftcdn.net/jpg/03/86/82/73/360_F_386827376_uWOOhKGk6A4UVL5imUBt20Bh8cmODqzx.jpg'
    },
    methods: {
        idadeX3() {
            return this.idade * 3;
        },
        random() {
            return Math.random()
        }
    }
})