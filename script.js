
// ======================================
// CONFIGURACIÓN
// ======================================

// Reemplazá el número por el WhatsApp del negocio.
// Argentina: código de país + código de área + número.
// Sin +, espacios, guiones ni paréntesis.
const WHATSAPP_NUMBER = "5491122969994";

// ======================================
// FILTRO DE PRODUCTOS
// ======================================

const filterButtons = document.querySelectorAll(".filter-btn");
const productItems = document.querySelectorAll(".product-item");

filterButtons.forEach(button => {
    button.addEventListener("click", () => {
        const category = button.dataset.filter;

        filterButtons.forEach(btn => {
            btn.classList.remove("active");
        });

        button.classList.add("active");

        productItems.forEach(item => {
            const matches =
                category === "todos" ||
                item.dataset.category === category;

            item.classList.toggle("d-none", !matches);
        });
    });
});

// ======================================
// SELECCIONAR PRODUCTO DESDE EL CATÁLOGO
// ======================================

const serviceSelect = document.getElementById("servicio");
const messageInput = document.getElementById("mensaje");

document.querySelectorAll(".product-link").forEach(link => {
    link.addEventListener("click", () => {
        const product = link.dataset.product;

        // Elegir la opción correspondiente si existe.
        const option = [...serviceSelect.options].find(opt =>
            opt.text.toLowerCase().includes(product.toLowerCase())
        );

        if (option) {
            serviceSelect.value = option.value;
        } else if (product) {
            serviceSelect.value = "Otro trabajo";
            messageInput.value = `Me interesa consultar por: ${product}. `;
        }
    });
});

// ======================================
// FORMULARIO DE CONTACTO
// ======================================

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const nombre = document.getElementById("nombre").value.trim();
    const telefono = document.getElementById("telefono").value.trim();
    const servicio = serviceSelect.value;
    const mensaje = messageInput.value.trim();

    if (!nombre || !servicio || !mensaje) {
        alert("Completá tu nombre, el servicio y los detalles.");
        return;
    }

    if (WHATSAPP_NUMBER === "5491112345678") {
        alert(
            "Primero reemplazá WHATSAPP_NUMBER en script.js " +
            "por el número real del negocio."
        );
        return;
    }

    const texto =
        `Hola, soy ${nombre}.\n` +
        `Teléfono: ${telefono || "No indicado"}\n` +
        `Consulta por: ${servicio}\n` +
        `Detalles: ${mensaje}`;

    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank", "noopener,noreferrer");
});

// ======================================
// BOTÓN FLOTANTE DE WHATSAPP
// ======================================

const whatsappFloat = document.getElementById("whatsapp-float");

whatsappFloat.addEventListener("click", event => {
    event.preventDefault();

    if (WHATSAPP_NUMBER === "5491112345678") {
        alert("Configurá el número de WhatsApp del negocio en script.js.");
        return;
    }

    const texto = "Hola, quisiera consultar por sus productos y servicios.";
    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(texto)}`;

    window.open(url, "_blank", "noopener,noreferrer");
});

// ======================================
// AÑO AUTOMÁTICO EN EL FOOTER
// ======================================

document.getElementById("year").textContent =
    new Date().getFullYear();

// ======================================
// CERRAR EL MENÚ MÓVIL AL NAVEGAR
// ======================================

document.querySelectorAll("#menu .nav-link, #menu .btn").forEach(link => {
    link.addEventListener("click", () => {
        const menu = document.getElementById("menu");

        if (menu.classList.contains("show")) {
            bootstrap.Collapse.getOrCreateInstance(menu).hide();
        }
    });
});
