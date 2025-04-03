document.addEventListener("DOMContentLoaded", async function () {
    try {
        // Cargar el archivo JSON con los productos
        const response = await fetch("/db/productos.json");
        if (!response.ok) throw new Error("Error al cargar los productos");

        // Convertir la respuesta en un array de productos
        const productos = await response.json();
        if (!Array.isArray(productos))
            throw new Error("El JSON no es un array de productos");

        // Seleccionar el contenedor de productos y limpiar su contenido previo
        const productContainer = document.querySelector(".productCards");

        // Generar y agregar tarjetas de productos al contenedor
        productos.forEach((producto) => {
            const prodFinal = loadProduct(producto);
            productContainer.appendChild(prodFinal);
        });
    } catch (error) {
        console.error("Hubo un error al cargar los productos:", error);
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
