document.addEventListener("DOMContentLoaded", async function() {
    try {
        // Cargar el archivo JSON con los productos
        const response = await fetch("/db/productos.json");
        if (!response.ok) throw new Error("Error al cargar los productos");

        // Convertir la respuesta en un array de productos
        const productos = await response.json();
        if (!Array.isArray(productos)) throw new Error("El JSON no es un array de productos");

        // Seleccionar el contenedor de productos y limpiar su contenido previo
        const productContainer = document.querySelector(".productCards");
        productContainer.innerHTML = "";

        // Generar y agregar tarjetas de productos al contenedor
        productos.forEach(producto => {
            const productCard = document.createElement("div");
            productCard.classList.add("productCard");

            productCard.innerHTML = `
                <img src="${producto.ruta_imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p>${producto.descripcion_corta}</p>
                <p><strong>$${producto.precio.toFixed(2)}</strong></p>
                <button class="button">Comprar</button>
            `;

            productContainer.appendChild(productCard);
        });
    } catch (error) {
        console.error("Hubo un error al cargar los productos:", error);
    }
});
