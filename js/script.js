const products = [
    {
        title: 'Mouse',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        poster: '../img/imagem-ilustrativa-1.png',
        url: 'https://google.com',
    },
    {
        title: 'Teclado',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        poster: '../img/imagem-ilustrativa-1.png',
        url: 'https://google.com',
    },
    {
        title: 'Monitor',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        poster: '../img/imagem-ilustrativa-1.png',
        url: 'https://google.com',
    },
    {
        title: 'Notebook',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        poster: '../img/imagem-ilustrativa-1.png',
        url: 'https://google.com',
    },
    {
        title: 'Hd',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        poster: '../img/imagem-ilustrativa-1.png',
        url: 'https://google.com',
    },
    {
        title: 'Placa de vídeo',
        description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        poster: '../img/imagem-ilustrativa-1.png',
        url: 'https://google.com',
    }
];

const searchInput = document.querySelector('#searchInput')
const ul = document.querySelector('#list')

// let tableProducts = products

const carregarProdutos = function(){
	products.map((item, index) => {

		let ProductItem = document.querySelector('.models .div').cloneNode(true)

		document.querySelector('#list').append(ProductItem)

		ProductItem.querySelector('img').src = item.poster
		ProductItem.querySelector('h1').innerHTML = item.title
		// ProductItem.querySelector('h2').innerHTML = item.description
		ProductItem.querySelector('.adquira').href = item.url

		ProductItem.querySelector('.div a').addEventListener('click', (e) => {

			e.preventDefault()

			document.querySelector('.ProdutosWindowArea').style.display = 'flex'

			document.querySelector('.ProdutoImagem img').src = item.poster
			document.querySelector('.ProdutoContainer h1').innerHTML = item.title
			document.querySelector('.ProdutoContainer h2').innerHTML = item.description
			document.querySelector('.adquiraWindow').href = item.url

		})

		document.querySelector('.voltar').addEventListener('click', (e) => {
			e.preventDefault()
			document.querySelector('.ProdutosWindowArea').style.display = 'none'
		})
	})

}

carregarProdutos()