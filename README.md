Este repositorio contiene la solución desarrollada para el reto técnico propuesto. El objetivo del proyecto es implementar una aplicación frontend funcional, siguiendo buenas prácticas de desarrollo, con una arquitectura clara y un código mantenible.

La solución ha sido desarrollada utilizando Next.js como framework principal, aprovechando su sistema de rutas. El proyecto está estructurado de forma modular, separando responsabilidades entre páginas, componentes reutilizables, manejo de estado global y estilos.

El proyecto sigue una arquitectura basada en componentes y separación de responsabilidades.

# Testing

Se utilizo jest como principal herramienta para los test y hemos decido realizar los siguientes test:

- Agregar un item al carrito
- Eliminar el item del carrito
- Eliminar todo el carrito entero

# Adicional

Este hook useLocalStorage es una forma de sincronizar un estado de React con el localStorage del navegador.

Estado interno (storedValue): guarda el valor en memoria para que la UI pueda usarlo y actualizarse.

Hydration (isHydrated): indica si ya leímos el valor inicial del localStorage para evitar sobrescribirlo antes de tiempo.

useEffect inicial: al montar el componente, lee el valor desde localStorage, lo convierte de string a objeto/valor real y lo guarda en el estado.

setValue: función que actualiza el estado de React y, si ya se hizo la lectura inicial, guarda el nuevo valor en localStorage.

Soporta recibir un valor directo o una función que reciba el valor actual y devuelva uno nuevo.

Retorno: [valorActual, setValor, isHydrated] → listo para usar en la UI y mantener sincronizado con localStorage.

# Ejecución

para ejecutar el proyecto en modo desarrollo:
npm run dev
para ejecutar el proyecto en modo producción:
npm run build
npm run start
