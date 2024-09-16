let currentProduct = '';
let cartItems = [];
let selectedMass = '';
let selectedCoverage = '';
let selectedComplementos = [];

function showProduct(product) {
    currentProduct = product; 
    let productDisplay = document.getElementById("product-display");
    let content = "";

    console.log(`Exibindo produto: ${product}`);

    if (!productDisplay) {
        console.error("Elemento com id 'product-display' não encontrado.");
        return;
    }

    productDisplay.innerHTML = "";

    switch (product) {
        // Bolos
        case "chocolate":
            content = `
                <div class="product-image">
                    <img src="Images/Bolos/BoloChoco.png" alt="Bolo de Chocolate">
                </div>
                <div class="product-details">
                    <h2>Bolo de Chocolate</h2>
                    <p><strong>Sabor:</strong> Chocolate</p>
                    <p><strong>Ingredientes:</strong> Farinha, Açúcar, Cacau, Ovos, Manteiga</p>
                    <p><strong>Preço:</strong> R$ 35,00/unidade</p>
                </div>
                <div class="product-actions">
                    <input type="number" id="quantity" value="1" min="1" max="100" />
                    <button onclick="addToCart()">Inserir no Carrinho</button>
                </div>
            `;
            break;
        case "cenoura":
            content = `
                <div class="product-image">
                    <img src="Images/Bolos/BoloCeno.png" alt="Bolo de Cenoura">
                </div>
                <div class="product-details">
                    <h2>Bolo de Cenoura</h2>
                    <p><strong>Sabor:</strong> Cenoura com cobertura de chocolate</p>
                    <p><strong>Ingredientes:</strong> Cenoura, Farinha, Açúcar, Ovos, Manteiga</p>
                    <p><strong>Preço:</strong> R$ 30,00/unidade</p>
                </div>
                <div class="product-actions">
                    <input type="number" id="quantity" value="1" min="1" max="100" />
                    <button onclick="addToCart()">Inserir no Carrinho</button>
                </div>
            `;
            break;
        case "fuba":
            content = `
                <div class="product-image">
                    <img src="Images/Bolos/BoloFuba.png" alt="Bolo de Fubá">
                </div>
                <div class="product-details">
                    <h2>Bolo de Fubá</h2>
                    <p><strong>Sabor:</strong> Fubá</p>
                    <p><strong>Ingredientes:</strong> Fubá, Farinha, Açúcar, Leite, Ovos, Manteiga</p>
                    <p><strong>Preço:</strong> R$ 25,00/unidade</p>
                </div>
                <div class="product-actions">
                    <input type="number" id="quantity" value="1" min="1" max="100" />
                    <button onclick="addToCart()">Inserir no Carrinho</button>
                </div>
            `;
            break;
        case "limao":
            content = `
                <div class="product-image">
                    <img src="Images/Bolos/Bololimao.png" alt="Bolo de Limão">
                </div>
                <div class="product-details">
                    <h2>Bolo de Limão</h2>
                    <p><strong>Sabor:</strong> Limão</p>
                    <p><strong>Ingredientes:</strong> Farinha, Açúcar, Limão, Ovos, Manteiga</p>
                    <p><strong>Preço:</strong> R$ 32,00/unidade</p>
                </div>
                <div class="product-actions">
                    <input type="number" id="quantity" value="1" min="1" max="100" />
                    <button onclick="addToCart()">Inserir no Carrinho</button>
                </div>
            `;
            break;
        case "morango":
            content = `
                <div class="product-image">
                    <img src="Images/Bolos/BoloMorango.png" alt="Bolo de Morango">
                </div>
                <div class="product-details">
                    <h2>Bolo de Morango</h2>
                    <p><strong>Sabor:</strong> Morango</p>
                    <p><strong>Ingredientes:</strong> Farinha, Açúcar, Morango, Ovos, Manteiga</p>
                    <p><strong>Preço:</strong> R$ 28,00/unidade</p>
                </div>
                <div class="product-actions">
                    <input type="number" id="quantity" value="1" min="1" max="100" />
                    <button onclick="addToCart()">Inserir no Carrinho</button>
                </div>
            `;
            break;
        case "redVelvet":
            content = `
                <div class="product-image">
                    <img src="Images/Bolos/BoloRedVelvet.png" alt="Bolo Red Velvet">
                </div>
                <div class="product-details">
                    <h2>Bolo Red Velvet</h2>
                    <p><strong>Sabor:</strong> Red Velvet</p>
                    <p><strong>Ingredientes:</strong> Farinha, Açúcar, Cacau, Corante vermelho, Ovos</p>
                    <p><strong>Preço:</strong> R$ 40,00/unidade</p>
                </div>
                <div class="product-actions">
                    <input type="number" id="quantity" value="1" min="1" max="100" />
                    <button onclick="addToCart()">Inserir no Carrinho</button>
                </div>
            `;
            break;
        case "maracuja":
            content = `
                <div class="product-image">
                    <img src="Images/Bolos/BoloMaracuja.png" alt="Bolo de Maracujá">
                </div>
                <div class="product-details">
                    <h2>Bolo de Maracujá</h2>
                    <p><strong>Sabor:</strong> Maracujá</p>
                    <p><strong>Ingredientes:</strong> Farinha, Açúcar, Maracujá, Ovos, Manteiga</p>
                    <p><strong>Preço:</strong> R$ 33,00/unidade</p>
                </div>
                <div class="product-actions">
                    <input type="number" id="quantity" value="1" min="1" max="100" />
                    <button onclick="addToCart()">Inserir no Carrinho</button>
                </div>
            `;
            break;
        case "pessego":
            content = `
                <div class="product-image">
                    <img src="Images/Bolos/BoloPessego.png" alt="Bolo de Pêssego">
                </div>
                <div class="product-details">
                    <h2>Bolo de Pêssego</h2>
                    <p><strong>Sabor:</strong> Pêssego</p>
                    <p><strong>Ingredientes:</strong> Farinha, Açúcar, Pêssego, Ovos, Manteiga</p>
                    <p><strong>Preço:</strong> R$ 30,00/unidade</p>
                </div>
                <div class="product-actions">
                    <input type="number" id="quantity" value="1" min="1" max="100" />
                    <button onclick="addToCart()">Inserir no Carrinho</button>
                </div>
            `;
            break;
        case "caramelo":
            content = `
                <div class="product-image">
                    <img src="Images/Bolos/BoloCaramelo.png" alt="Bolo de Caramelo">
                </div>
                <div class="product-details">
                    <h2>Bolo de Caramelo</h2>
                    <p><strong>Sabor:</strong> Caramelo</p>
                    <p><strong>Ingredientes:</strong> Farinha, Açúcar, Caramelo, Ovos, Manteiga</p>
                    <p><strong>Preço:</strong> R$ 34,00/unidade</p>
                </div>
                <div class="product-actions">
                    <input type="number" id="quantity" value="1" min="1" max="100" />
                    <button onclick="addToCart()">Inserir no Carrinho</button>
                </div>
            `;
            break;
        // Doces
        case "brigadeiro":
            content = `
                <div class="product-image">
                    <img src="Images/Doces/Brigadeiro.png" alt="Brigadeiro">
                </div>
                <div class="product-details">
                    <h2>Brigadeiro</h2>
                    <p><strong>Sabor:</strong> Chocolate</p>
                    <p><strong>Ingredientes:</strong> Leite condensado, Cacau, Manteiga, Chocolate granulado</p>
                    <p><strong>Preço:</strong> R$ 2,50/unidade</p>
                </div>
                <div class="product-actions">
                    <input type="number" id="quantity" value="1" min="1" max="100" />
                    <button onclick="addToCart()">Inserir no Carrinho</button>
                </div>
            `;
            break;
            case "beijinho":
        content = `
            <div class="product-image">
                <img src="Images/Doces/Beijinho.png" alt="Beijinho">
            </div>
            <div class="product-details">
                <h2>Beijinho</h2>
                <p><strong>Sabor:</strong> Coco</p>
                <p><strong>Ingredientes:</strong> Leite condensado, Coco ralado, Manteiga, Açúcar cristal</p>
                <p><strong>Preço:</strong> R$ 2,50/unidade</p>
            </div>
            <div class="product-actions">
                <input type="number" id="quantity" value="1" min="1" max="100" />
                <button onclick="addToCart()">Inserir no Carrinho</button>
            </div>
        `;
        break;
    case "peDeMoleque":
        content = `
            <div class="product-image">
                <img src="Images/Doces/PeDeMoleque.png" alt="Pé de Moleque">
            </div>
            <div class="product-details">
                <h2>Pé de Moleque</h2>
                <p><strong>Sabor:</strong> Amendoim</p>
                <p><strong>Ingredientes:</strong> Amendoim, Açúcar, Mel</p>
                <p><strong>Preço:</strong> R$ 3,00/unidade</p>
            </div>
            <div class="product-actions">
                <input type="number" id="quantity" value="1" min="1" max="100" />
                <button onclick="addToCart()">Inserir no Carrinho</button>
            </div>
        `;
        break;
    case "cajuzinho":
        content = `
            <div class="product-image">
                <img src="Images/Doces/Cajuzinho.png" alt="Cajuzinho">
            </div>
            <div class="product-details">
                <h2>Cajuzinho</h2>
                <p><strong>Sabor:</strong> Amendoim</p>
                <p><strong>Ingredientes:</strong> Amendoim, Leite condensado, Açúcar, Manteiga</p>
                <p><strong>Preço:</strong> R$ 2,50/unidade</p>
            </div>
            <div class="product-actions">
                <input type="number" id="quantity" value="1" min="1" max="100" />
                <button onclick="addToCart()">Inserir no Carrinho</button>
            </div>
        `;
        break;
    case "coconutBalls":
        content = `
            <div class="product-image">
                <img src="Images/Doces/BolinhoDeCoco.png" alt="Bolinho de Coco">
            </div>
            <div class="product-details">
                <h2>Bolinho de Coco</h2>
                <p><strong>Sabor:</strong> Coco</p>
                <p><strong>Ingredientes:</strong> Coco ralado, Leite condensado, Manteiga</p>
                <p><strong>Preço:</strong> R$ 2,50/unidade</p>
            </div>
            <div class="product-actions">
                <input type="number" id="quantity" value="1" min="1" max="100" />
                <button onclick="addToCart()">Inserir no Carrinho</button>
            </div>
        `;
        break;
    case "docinhoDeLeite":
        content = `
            <div class="product-image">
                <img src="Images/Doces/DocinhoDeLeite.png" alt="Docinho de Leite">
            </div>
            <div class="product-details">
                <h2>Docinho de Leite</h2>
                <p><strong>Sabor:</strong> Leite</p>
                <p><strong>Ingredientes:</strong> Leite condensado, Manteiga, Açúcar</p>
                <p><strong>Preço:</strong> R$ 2,50/unidade</p>
            </div>
            <div class="product-actions">
                <input type="number" id="quantity" value="1" min="1" max="100" />
                <button onclick="addToCart()">Inserir no Carrinho</button>
            </div>
        `;
        break;
    case "pudim":
        content = `
            <div class="product-image">
                <img src="Images/Doces/Pudim.png" alt="Pudim">
            </div>
            <div class="product-details">
                <h2>Pudim</h2>
                <p><strong>Sabor:</strong> Caramelo</p>
                <p><strong>Ingredientes:</strong> Leite condensado, Ovos, Leite, Açúcar</p>
                <p><strong>Preço:</strong> R$ 4,00/unidade</p>
            </div>
            <div class="product-actions">
                <input type="number" id="quantity" value="1" min="1" max="100" />
                <button onclick="addToCart()">Inserir no Carrinho</button>
            </div>
        `;
        break;
    case "quindim":
        content = `
            <div class="product-image">
                <img src="Images/Doces/Quindim.png" alt="Quindim">
            </div>
            <div class="product-details">
                <h2>Quindim</h2>
                <p><strong>Sabor:</strong> Coco</p>
                <p><strong>Ingredientes:</strong> Coco ralado, Ovos, Açúcar, Manteiga</p>
                <p><strong>Preço:</strong> R$ 3,50/unidade</p>
            </div>
            <div class="product-actions">
                <input type="number" id="quantity" value="1" min="1" max="100" />
                <button onclick="addToCart()">Inserir no Carrinho</button>
            </div>
        `;
        break;
    case "trufa":
        content = `
            <div class="product-image">
                <img src="Images/Doces/Trufa.png" alt="Trufa">
            </div>
            <div class="product-details">
                <h2>Trufa</h2>
                <p><strong>Sabor:</strong> Chocolate</p>
                <p><strong>Ingredientes:</strong> Chocolate, Creme de leite, Manteiga</p>
                <p><strong>Preço:</strong> R$ 3,00/unidade</p>
            </div>
            <div class="product-actions">
                <input type="number" id="quantity" value="1" min="1" max="100" />
                <button onclick="addToCart()">Inserir no Carrinho</button>
            </div>
        `;
        break;
    default:
        console.warn("Produto não encontrado.");
        content = "<p>Produto não encontrado.</p>";
        break;
}

    productDisplay.innerHTML = content;
    productDisplay.classList.add("visible");
}

function addCustomCakeToCart() {
    if (!selectedMass || !selectedCoverage) {
        alert('Por favor, selecione todos os detalhes do bolo personalizado.');
        return;
    }

    let price = 50; // Preço base do bolo personalizado
    let complementosPrice = selectedComplementos.length * 5; // Ajuste conforme necessário
    let totalPrice = price + complementosPrice;

    cartItems.push({
        product: "Bolo Personalizado",
        quantity: 1, // Sempre 1 bolo personalizado por vez
        totalPrice: totalPrice,
        details: {
            mass: selectedMass,
            coverage: selectedCoverage,
            complementos: selectedComplementos
        }
    });    

    // Atualiza o conteúdo do carrinho e o total
    updateCartContent();
    updateCartTotal();    
    // Mostra o diálogo do carrinho e o overlay
    showCart();
}

// Função para adicionar um item ao carrinho
function addToCart() {
    let quantity = parseInt(document.getElementById("quantity").value, 10);
    let price = 0;

    switch (currentProduct) {
        case "chocolate":
            price = 35;
            break;
        case "cenoura":
            price = 30;
            break;
        case "fuba":
            price = 25;
            break;
        case "limão":
            price = 32;
            break;
        case "morango":
            price = 28;
            break;
        case "redVelvet":
            price = 40;
            break;
        case "maracuja":
            price = 33;
            break;
        case "pessego":
            price = 30;
            break;
        case "caramelo":
            price = 34;
            break;
        case "brigadeiro":
            price = 2.50;
            break;
        case "beijinho":
            price = 2.50;
            break;
        case "peDeMoleque":
            price = 3.00;
            break;
        case "cajuzinho":
            price = 2.50;
            break;
        case "coconutBalls":
            price = 2.50;
            break;
        case "docinhoDeLeite":
            price = 2.50;
            break;
        case "pudim":
            price = 4.00;
            break;
        case "quindim":
            price = 3.50;
            break;
        case "trufa":
            price = 3.00;
            break;
        default:
            console.warn("Preço não definido para o produto.");
            return;
    }

    let totalPrice = quantity * price;

    // Adiciona o item ao array de itens do carrinho
    cartItems.push({
        product: currentProduct,
        quantity: quantity,
        totalPrice: totalPrice
    });

    // Atualiza o conteúdo do carrinho e o total
    updateCartContent();
    updateCartTotal();
    clearButton();
    // Mostra o diálogo do carrinho e o overlay
    showCart();    
}

// Função para atualizar o conteúdo do carrinho
function updateCartContent() {
    let cartContent = document.querySelector("#cart-dialog .cart-content");
    cartContent.innerHTML = ""; // Limpa o conteúdo do carrinho

    cartItems.forEach(item => {
        let cartItem = document.createElement("div");
        cartItem.className = "cart-item";
        let details = item.details ? `
            <p><strong>Massa:</strong> ${item.details.mass}</p>
            <p><strong>Cobertura:</strong> ${item.details.coverage}</p>
            <p><strong>Complementos:</strong> ${item.details.complementos.join(", ")}</p>
        ` : '';
        cartItem.innerHTML = `
            <p><strong>Produto:</strong> ${item.product}</p>
            ${details}
            <p><strong>Quantidade:</strong> ${item.quantity}</p>
            <p><strong>Total:</strong> R$ ${item.totalPrice.toFixed(2)}</p>
        `;
        cartContent.appendChild(cartItem);
    });
}

function updateCartTotal() {
    let total = cartItems.reduce((sum, item) => sum + item.totalPrice, 0);
    document.querySelector("#cart-dialog .cart-total").textContent = `Total: R$ ${total.toFixed(2)}`;
}

function clearCart() {
    document.querySelector('.cart-content').innerHTML = '';

    document.querySelector('.cart-total').innerText = 'Total: R$ 0,00';

    cartItems = [];
}

function showCart() {
    document.getElementById('customization-display').style.display = 'none';
    document.getElementById('cart-dialog').style.display = 'block';
    document.getElementById('modal-overlay').style.display = 'block';
}

function closeCartDialog() {
    document.getElementById('cart-dialog').style.display = 'none';
}

function closeButtonDialog() {
    document.getElementById('button-dialog').style.display = 'none';
}

function closeConfirmationDialog() {
    document.getElementById('confirmation-dialog').style.display = 'none';
}

function finalizePurchase() {
    closeCartDialog();
    document.getElementById('button-dialog').style.display = 'block';
}
function clearButton(){
    document.getElementById('options-container').style.display = 'none';
}

function OpenFinal() {
    closeButtonDialog();
    document.getElementById('confirmation-dialog').style.display = 'block';
}

function setupCustomizationEvents() {
    selectedMass = " ";
    selectedCoverage = " ";
    selectedComplementos = [ ];

    document.querySelectorAll('.option-button').forEach(button => {
        button.addEventListener('click', function() {
            const type = this.dataset.type;
            const value = this.dataset.value;

            if (type === 'massa') {
                selectedMass = value;
                document.querySelectorAll(`.option-button[data-type="${type}"]`).forEach(btn => {
                    btn.classList.remove('selected');
                });
            } else if (type === 'cobertura') {
                selectedCoverage = value;
                document.querySelectorAll(`.option-button[data-type="${type}"]`).forEach(btn => {
                    btn.classList.remove('selected');
                });
            }

            this.classList.add('selected');
        });
    });

    document.querySelectorAll('.complemento-button').forEach(button => {
        button.addEventListener('click', function() {
            const value = this.dataset.value;
            if (selectedComplementos.includes(value)) {
                selectedComplementos = selectedComplementos.filter(item => item !== value);
                this.classList.remove('selected');
            } else {
                selectedComplementos.push(value);
                this.classList.add('selected');
            }
        });
    });
}

function goBack() {
    let productDisplay = document.getElementById("product-display");
    
    if (productDisplay) {
        productDisplay.classList.remove("visible");
        productDisplay.innerHTML = "";
    }
    
    currentDisplay = 'intro';
}

function setupEventListeners() {
    document.getElementById('customize-cake-btn').addEventListener('click', () => {
        document.getElementById('intro-display').style.display = 'block';
        document.getElementById('modal-overlay').style.display = 'block';
    });
    
    document.getElementById('start-customization').addEventListener('click', () => {
        document.getElementById('intro-display').style.display = 'none';
        document.getElementById('customization-display').style.display = 'block';
        currentDisplay = 'customization';
        setupCustomizationEvents();
    });

    document.getElementById('close-customization').addEventListener('click', () => {
        document.getElementById('customization-display').style.display = '';
        document.getElementById('intro-display').style.display = '';
    });

    document.getElementById('close-intro').addEventListener('click', () => {
        document.getElementById('intro-display').style.display = '';
        document.getElementById('modal-overlay').style.display = '';
    });

    document.getElementById('continue-customization').addEventListener('click', () => {
        addCustomCakeToCart();
    });

    document.getElementById("back-button").addEventListener('click', goBack);

    document.getElementById("modal-overlay").addEventListener("click", function() {
        closeButtonDialog();
        closeCartDialog();
        closeConfirmationDialog();
    });
}

document.addEventListener('DOMContentLoaded', setupEventListeners);