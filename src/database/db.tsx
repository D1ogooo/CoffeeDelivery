import Primeiro from './database images/primeiro.svg'
import Segundo from './database images/segundo.svg'
import Terceiro from './database images/terceiro.svg'
import Quarto from './database images/quarto.svg'
import Quinto from './database images/quinto.svg'
import Sexto from './database images/sexto.svg'
import Setimo from './database images/setimo.svg'
import Oitavo from './database images/oitavo.svg'
import Nono from './database images/nono.svg'
import Decimo from './database images/decimo.svg'
import Decimoprimeiro from './database images/decimoprimeiro.svg'
import Decimosegundo from './database images/decimosegundo.svg'
import Decimoterceiro from './database images/decimoterceiro.svg'
import Decimoquarto from './database images/decimoquarto.svg'

interface TypeCoffee {
 img: string,
 id: number, 
 tipo: string,
 segundoTipo?: string,
 terceiroTipo?: string,
 title: string,
 explicacao: string,
 preco: number;
}

export const CoffeeDatabase: TypeCoffee[] = [
 {
  img: `${Primeiro}`,
  id: 1,
  tipo: "Tradicional",
  title: "Expresso Tradicional",
  explicacao: "O tradicional café feito com água quente e grãos moídos",
  preco: 9.90,
 },
 {
  img: `${Segundo}`,
  id: 2,
  tipo: "Tradicional",
  title: "Expresso Americano",
  explicacao: "Expresso diluído, menos intenso que o tradicionals",
  preco: 9.90,
 },
 {
  img: `${Terceiro}`,
  id: 3,
  tipo: "Tradicional",
  title: "Expresso Cremoso",
  explicacao: "Café expresso tradicional com espuma cremosa",
  preco: 9.90,
 },
 {
  img: `${Quarto}`,
  id: 4,
  tipo: "Tradicional",
  segundoTipo: "gelado",
  title: "Expresso Gelado",
  explicacao: "Bebida preparada com café expresso e cubos de gelo",
  preco: 9.90,
 },
 {
  img: `${Quinto}`,
  id: 5,
  tipo: "Tradicional",
  segundoTipo: "com leite",
  title: "Café com Leite",
  explicacao: "Meio a meio de expresso tradicional com leite vaporizado",
  preco: 9.90,
 },
 {
  img: `${Sexto}`,
  id: 6,
  tipo: "Tradicional",
  segundoTipo: "com leite",
  title: "Latte",
  explicacao: "Uma dose de café expresso com o dobro de leite e espuma cremosa",
  preco: 9.90,
 },
 {
  img: `${Setimo}`,
  id: 7,
  tipo: "Tradicional",
  segundoTipo: "com leite",
  title: "Capuccino",
  explicacao: "Bebida com canela feita de doses iguais de café, leite e espuma",
  preco: 9.90,
 },
 {
  img: `${Oitavo}`,
  id: 78,
  tipo: "Tradicional",
  segundoTipo: "com leite",
  title: "Macchiato",
  explicacao: "Café expresso misturado com um pouco de leite quente e espuma",
  preco: 9.90,
 },
 {
  img: `${Nono}`,
  id: 9,
  tipo: "Tradicional",
  segundoTipo: "com leite",
  title: "Mocaccino",
  explicacao: "Café expresso com calda de chocolate, pouco leite e espuma",
  preco: 9.90,
 },
 {
  img: `${Decimo}`,
  id: 10,
  tipo: "especial",
  segundoTipo: "com leite",
  title: "Chocolate Quente",
  explicacao: "Bebida feita com chocolate dissolvido no leite quente e café",
  preco: 9.90,
 },
 {
  img: `${Decimoprimeiro}`,
  id: 11,
  tipo: "especial",
  segundoTipo: "alcoólico",
  terceiroTipo: "gelado",
  title: "Cubano",
  explicacao: "Drink gelado de café expresso com rum, creme de leite e hortelã",
  preco: 9.90,
 },
 {
  img: `${Decimosegundo}`,
  id: 12,
  tipo: "especial",
  title: "Havaiano",
  explicacao: "Bebida adocicada preparada com café e leite de coco",
  preco: 9.90,
 },
 {
  img: `${Decimoterceiro}`,
  id: 13,
  tipo: "especial",
  title: "Árabe",
  explicacao: "Bebida preparada com grãos de café árabe e especiarias",
  preco: 9.90,
 },
 {
  img: `${Decimoquarto}`,
  id: 14,
  tipo: "especial",
  segundoTipo: "alcoólico",
  title: "Irlandês",
  explicacao: "Bebida a base de café, uísque irlandês, açúcar e chantilly",
  preco: 9.90,
 },
]