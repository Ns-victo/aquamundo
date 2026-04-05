import peixeHeader from "../assets/imagens/peixe_header.jpeg";
import racao from "../assets/imagens/racao.jpg";
import bombaSubmersa from "../assets/imagens/bomba_submersa.jpg";
import decoracao from "../assets/imagens/decoracao.jpg";

export type Produto = {
  id: number;
  nome: string;
  desc: string;
  preco: number;
  img: string;
};

export const produtos: Produto[] = [
  {
    id: 1,
    nome: "Beta Splendens",
    desc: "Peixes Bettas coloridos, ideais para iniciantes, faceis de cuidar e muito resistentes",
    preco: 29.9,
    img: peixeHeader,
  },
  {
    id: 2,
    nome: "Racao Premium",
    desc: "Nutricao balanceada para peixes ornamentais, mantendo cores vibrantes e saude ideal",
    preco: 39.9,
    img: racao,
  },
  {
    id: 3,
    nome: "Bomba Submersa",
    desc: "Circulacao eficiente para aquarios de diferentes tamanhos, garantindo oxigenacao ideal",
    preco: 79.9,
    img: bombaSubmersa,
  },
  {
    id: 4,
    nome: "Decoracao Natural",
    desc: "Deixe seu aquario mais bonito e natural com pedras, plantas e elementos decorativos",
    preco: 49.9,
    img: decoracao,
  },
];