🚀 Características Principales
<img width="1917" height="887" alt="pantalla principal" src="https://github.com/user-attachments/assets/68d72cd0-02db-439d-9f1c-497f9f2d30f0" />
<img width="1920" height="1080" alt="Captura de pantalla (183)" src="https://github.com/user-attachments/assets/39969a5a-f837-4509-8569-bb690043e9c6" />
<img width="1892" height="809" alt="Captura de pantalla 2025-11-21 193626" src="https://github.com/user-attachments/assets/a57695c4-ee25-4fbf-8ff4-0ccd547e45a1" />
<img width="1907" height="376" alt="Captura de pantalla 2025-11-21 193658" src="https://github.com/user-attachments/assets/4b469535-5e76-40bd-8470-1188e0aceb75" />

✔ Listado de eventos musicales
✔ Detalle completo del concierto (fecha, hora, lugar, descripción)
✔ Gestión de zonas (precio, capacidad, boletos disponibles)
✔ Formulario de compra con validaciones
✔ Registro de compras en SQL Server
✔ Generación de código QR con los datos del boleto
✔ Historial de compras
✔ Estilo moderno (dark mode + sidebar)
✔ Conexión mediante servicios HTTP al backend

🧩 Arquitectura General del Proyecto
1. Frontend – Ionic / Angular
Carpeta: /Eventos/
Incluye:
módulos tradicionales (no standalone)
páginas:
eventos
eventos-detalle
comprar-boletos
ver-entrada
histórico-compras
agregar-evento
servicios Angular:
evento.service.ts
zona.service.ts
cliente.service.ts
venta.service.ts
2. Backend – Node.js / Express / SQL Server
Carpeta: /Api_ErikaLagos_Eventos/
Estructura profesional por carpetas:
controllers/
routes/
database/connection.js
config.js
app.js
index.js


Endpoints principales:
/api/eventos
/api/zonas
/api/clientes
/api/compras

🛠 Tecnologías Utilizadas
Frontend
Ionic 7
Angular
TypeScript
HTML & SCSS
QR Generator
Backend
Node.js
Express.js
SQL Server (mssql)
Arquitectura MVC simple

📦 Instalación y Uso
🚀 1. Clonar el proyecto
git clone https://github.com/Erikalagos/-Eventos-E-Ticker-Sistema-de-Venta-de-Boletos-para-Conciertos.git
cd -Eventos-E-Ticker-Sistema-de-Venta-de-Boletos-para-Conciertos
