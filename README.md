# 🐟 Projeto AquaMundo - Landing Page de Aquarismo


> **AquaMundo** é um projeto de landing page moderna e de alta performance voltada para o nicho de aquarismo e ecossistemas de água doce. O site foi desenvolvido para oferecer uma experiência de usuário fluida, focada em conversão e demonstração de produtos premium.

---

## 🚀 Tecnologias Utilizadas

Este projeto foi construído utilizando as tecnologias mais modernas do ecossistema front-end:

* **React.js (Vite):** Biblioteca JavaScript para construção da interface de usuário.
* **Tailwind CSS:** Framework CSS utilitário para estilização responsiva e ágil.
* **React Icons:** Biblioteca para ícones vetoriais.
* **Vite:** Ferramenta de build que oferece um ambiente de desenvolvimento rápido.

---

## 🏗️ Estrutura e Funcionalidades

O projeto está organizado em componentes reutilizáveis, seguindo boas práticas de desenvolvimento:

### 1. 🪟 Header (Navegação Sticky)
* Menu fixo no topo (`fixed`).
* **Efeito Dinâmico:** O menu muda de cor e adiciona fundo com *blur* (`backdrop-blur-md`) ao rolar a página (`useEffect` + `scrollY`).
* Responsivo (escondido no mobile para focar na imagem, visível no desktop).

### 2. 🌟 Layout (Hero Section)
* Banner de destaque com imagem de alta qualidade.
* Texto centralizado com overlay escuro para garantir legibilidade.
* Botões de Call-to-Action (CTA) com estilo *outline*.

### 3. 📦 Categorias
* Vitrine de tipos de produtos (Peixes, Ração, Equipamentos, Decoração).
* **UX Mobile:** Scroll horizontal com efeito *snap* (os cards travam no centro da tela ao deslizar).

### 4. 🏆 Destaques da Semana
* Exibição de produtos premium.
* **Animação de Hover:** Ao passar o mouse, a imagem dá um leve zoom e um botão de "Adicionar ao Carrinho" desliza de baixo para cima sobre a imagem.

### 5. 📞 Fale com Especialista (CTA Section)
* Seção de destaque com cor de fundo forte (`bg-blue-600`).
* Botão de CTA proeminente para contato direto.

### 6. 🦶 Footer
* Rodapé completo com navegação, contatos (WhatsApp, E-mail, Localização) e redes sociais.

---

## 🎨 Identidade Visual (Paleta de Cores)

| Cor | Hexadecimal | Uso |
| :--- | :--- | :--- |
| **Azul Oceano** | `#0284C7` | CTAs, Títulos principais. |
| **Turquesa** | `#5ca2b5` | Destaques, Ícones, Links. |
| **Marinho Escuro** | `#0f1729` | Fundo do Footer, Textos densos. |
| **Menta** | `#F5F9F8` | Fundo das seções. |

---

## 🛠️ Como Executar o Projeto

Certifique-se de ter o [Node.js](https://nodejs.org/) instalado na sua máquina.

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/seu-usuario/aquamundo.git](https://github.com/seu-usuario/aquamundo.git)
    ```

2.  **Entre na pasta do projeto:**
    ```bash
    cd aquamundo
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra o navegador em `http://localhost:5173` (ou a porta indicada no terminal).

---

## 👥 Autor

Victor Nunes dos Santos - *Desenvolvedor Front-End* - https://github.com/Ns-victo
