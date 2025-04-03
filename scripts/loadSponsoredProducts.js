document.addEventListener("DOMContentLoaded", async function () {
    try {
        const response = await fetch("/db/productos.json");
        if (!response.ok) throw new Error("Error al cargar los productos");

        const productos = await response.json();

        if (!Array.isArray(productos))
            throw new Error("El JSON no es un array de productos");

        const productContainer = document.querySelector(".productCards");

        // Filtrar productos patrocinados
        const patrocinados = productos.filter((producto) => producto.patrocinado);

        patrocinados.forEach((producto) => {
            const prodFinal = loadProduct(producto);
            productContainer.appendChild(prodFinal);
        });
    } catch (error) {
        console.error("Hubo un error al cargar los productos patrocinados:", error);
    }
});

function loadProduct(productoRef) {
    const productCard = document.createElement("div");
    productCard.classList.add("productCard");

    productCard.innerHTML = `
                <img src="${productoRef.ruta_imagen}" alt="${productoRef.nombre
        }">
                <h2>${productoRef.nombre}</h2>
                <p>${productoRef.descripcion_corta}</p>
                <p><strong>$${productoRef.precio.toFixed(2)}</strong></p>
                <button class="button">Comprar</button>
            `;
    return productCard;
}