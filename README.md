Aquí tienes el código fuente en formato **Markdown** listo para que lo copies y lo pegues directamente en tu archivo `README.md`.

```markdown
# 🚀 Master Frontend: Entrega de Ejercicios React

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-CA4245?style=for-the-badge&logo=react-router&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Este repositorio contiene la **Primera Entrega de React** correspondiente al Master de Desarrollo Web Frontend. El proyecto consiste en un ecosistema de 9 ejercicios prácticos integrados en un Dashboard interactivo, centrados en el dominio de Hooks, persistencia de datos y enrutamiento dinámico.

---

## 🛠️ Tecnologías Utilizadas

* **Core:** React 18+ con **TypeScript**.
* **Enrutamiento:** `react-router-dom` (Data APIs: `createBrowserRouter`).
* **Estilos:** Tailwind CSS (Arquitectura basada en utilidad y Glassmorphism).
* **Estado y Lógica:** `useState`, `useEffect`, `useRef` y valores derivados.
* **Persistencia:** Browser LocalStorage API.

---

## 📁 Estructura del Proyecto

El proyecto se ha organizado siguiendo una arquitectura de componentes escalable y modular:

```text
src/
├── components/     # UI reusable (Buttons, Inputs, Cards)
├── exercises/      # Módulos independientes (Ejercicios 1-9)
├── layouts/        # MainLayout (Estructura Sidebar + Dashboard)
├── routes/         # Configuración centralizada de react-router
└── styles/         # CSS Modules y configuraciones globales

```

---

## 📝 Listado de Ejercicios

| ID | Ejercicio | Conceptos Técnicos Destacados |
| --- | --- | --- |
| **01** | **BG Changer** | Gestión de variables CSS (`--var`) dinámicas en React. |
| **03** | **Simple To-Do** | Manejo de listas inmutables y vinculación de Refs. |
| **04** | **Buscador** | Implementación de **Valores Derivados** para optimizar renderizado. |
| **05** | **Calculadora** | Validación de tipos, gestión de errores y lógica aritmética. |
| **06** | **Temporizador** | Ciclo de vida con `useEffect` y funciones de **Cleanup**. |
| **07** | **Password Gen** | Algoritmos de aleatoriedad garantizada y validación compleja. |
| **08** | **Contador Pro** | Uso de Expresiones Regulares (**RegExp**) para limpieza de strings. |
| **09** | **Persistencia** | Sincronización de estado con **LocalStorage** mediante efectos. |

---

## 🚀 Instalación y Ejecución

Sigue estos pasos para desplegar el proyecto localmente:

1. **Clonar el repositorio:**
```bash
git clone [https://github.com/tu-usuario/master-react-delivery.git](https://github.com/tu-usuario/master-react-delivery.git)

```


2. **Instalar dependencias:**
```bash
npm install

```


3. **Iniciar servidor de desarrollo:**
```bash
npm run dev

```



---

## 💡 Decisiones Técnicas y Buenas Prácticas

* **Inmutabilidad Estricta:** Se ha evitado la mutación directa del estado, utilizando operadores de propagación (`...`) y métodos funcionales de arrays (`map`, `filter`).
* **Optimización de Renderizado:** Se ha priorizado el cálculo de datos en el cuerpo de la función (valores derivados) frente al uso excesivo de estados innecesarios.
* **Diseño Coherente:** Implementación de un sistema de diseño "Dark Mode Professional" utilizando la paleta de colores de Tailwind para asegurar una experiencia de usuario fluida entre ejercicios.
* **Seguridad y Persistencia:** Manejo avanzado de `JSON.parse` y `JSON.stringify` con comprobaciones de tipo `Array.isArray` para prevenir errores de hidratación de datos.


