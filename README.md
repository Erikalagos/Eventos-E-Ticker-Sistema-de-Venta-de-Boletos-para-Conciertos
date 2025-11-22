🚀 Características Principales
<img width="1918" height="858" alt="image" src="https://github.com/user-attachments/assets/ca754963-04d0-4ad1-a5a1-8c96555f6c23" />
<img width="1907" height="855" alt="image" src="https://github.com/user-attachments/assets/622f870c-6580-433e-ae99-4ae86b93e8b6" />
<img width="1908" height="802" alt="image" src="https://github.com/user-attachments/assets/66e7b30b-d92f-481b-b24a-f1020855f29a" />
<img width="1906" height="846" alt="image" src="https://github.com/user-attachments/assets/bcbdf5bc-621d-470e-9773-7b23797515a2" />
<img width="1832" height="842" alt="image" src="https://github.com/user-attachments/assets/6bfde17c-cc16-4aea-a0a2-2282b6b8776f" />


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
