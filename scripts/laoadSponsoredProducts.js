document.addEventListener("DOMContentLoaded", async function() {
    try {
        // Cargar el archivo JSON con los productos
        const response = await fetch("/db/productos.json");
        if (!response.ok) throw new Error("Error al cargar los productos");

        // Convertir la respuesta en un objeto JavaScript
        const productos = await response.json();
        if (!Array.isArray(productos)) throw new Error("El JSON no es un array de productos");

        // Seleccionar el contenedor donde se mostrarán los productos
        const productContainer = document.querySelector(".productCards");
        productContainer.innerHTML = ""; // Limpiar contenido previo

        // Filtrar los productos patrocinados
        const patrocinados = productos.filter(producto => producto.patrocinado);

        // Mostrar un mensaje si no hay productos patrocinados
        if (patrocinados.length === 0) {
            productContainer.innerHTML = "<p>No hay productos patrocinados disponibles.</p>";
            return;
        }

        // Crear y agregar tarjetas de productos patrocinados
        patrocinados.forEach(producto => {
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
        console.error("Error al cargar productos patrocinados:", error);
    }
});
