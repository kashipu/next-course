# Curso de next.js

## Instalar Next

* Requisitos
    - Node +v10
    - Git
    - Browser

* Instalación
    - CLI
    - Manual

* Pasos de la Instalación 
    - Crear una carpeta e ingresar a ella desde la terminal o el editor
    - Iniciar un proyecto de npm con el comando
        
        `$ npm init -y`
    - Instalar paquetes
        
        `$ npm install next react react-dom`

    - Implementar los scripts dentro del `packge.json`

        ``` Javascript
        "dev": "next",
        "build": "next build",
        "start": "next start"
        ```

    ## Creacion carpeta pages 
    Aquí van a estar incluidas todas las páginas de next 

    ## Rutas Básicas
    Todos las páginas o componentes que se crean dentro de la carpeta pages se reconocen como una ruta en el navegador

    ## Rutas Dinámicas
    Tienen una sintaxis en su nombre [].js esto crea una ruta dinamica

    ### Documentacion 
    https://nextjs.org/docs/routing/dynamic-routes 
    


    * Para usar el next router en una página dinamica y capturar el slug se usa

        - Se importa `next/router`
        ``` Javascript
            import { useRouter } from 'next/router'
        ```
        - Dentro se del componente se hace el llamado 
        ``` Javascript
            const router = useRouter()
        ```
        - Dentro del return se usa 
         ``` html
            <h1>Esta es la página del {router.query.id}</h1>
        ```
        - Componente completo
        ``` Javascript
            import React from 'react'
            import { useRouter } from 'next/router'

            const ProductItem = () => {
                const router = useRouter()
                return (
                    <div>
                        <h1>Esta es la página del {router.query.id}</h1>
                    </div>
                )
            }

            export default ProductItem

        ```
        - Se usa el termino `id` despues de `router.query` por que es el parametro que estamos enviando directamente en el archivo de la ruta dinamica en este caso `[id].js`


    