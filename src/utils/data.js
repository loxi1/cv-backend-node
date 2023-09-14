export const headerData = {
    links:
        [
            {
                text: 'Inicio',
                href: '/',
            },
            {
                text: 'Acerca de mi',
                href: '/acercademi',
            },
            {
                text: 'Proyectos',
                href: '/proyectos',
            },
            {
                text: 'Contáctanos',
                href: '/contactanos',
            },
        ]
};

export const footerMenu = {
    menusinferiores: [
        { title: 'Inicio', href: '/' },
        { title: 'Acerca de mi', href: '/acercademi' },
        { title: 'Proyectos', href: '/proyectos' },
        { title: 'Contáctanos', href: '/contactanos' },
    ]
}

export const portafolio = {
    proyectos: [
        { 
            title: 'Accesibilida de establecimiento', 
            description: 'Grupo de ingenieros electricos que brindan servicios de: diseño de proyectos eléctricos en media y baja tensión, ingeniería de detalles, Memorias Descriptivas, Memorias de Cálculos, Especificaciones Técnicas y planos eléctricos en general', dia: '', anio: '2023', mes: 'Marzo', 
            git: 'https://github.com/lemcok/equipo4-ed4-backend', 
            image: 'accesibilidad-de-lugar.png', 
            "skills": [
                {
                    "name": "Node",
                    "imagen": "nodejs"
                },
                {
                    "name": "Prisma.io",
                    "imagen": "prisma"
                },
                {
                    "name": "Postgresql",
                    "imagen": "postgresql"
                },
                {
                    "name": "Fastify",
                    "imagen": "fastify"
                },
                {
                    "name": "JWT",
                    "imagen": "jwt"

                },
                {
                    "name": "Fastify",
                    "imagen": "fastify"
                }
            ],
            url: '' 
        },
        { 
            title: 'jlcelectricistas', 
            description: 'Averiguar si un lugar es ascequible para discapacitados, se hace consultas al api de google y se registra valoración y comentario en caso este logueado el usuario.', 
            dia: '', 
            anio: '2023', 
            mes: 'Mayo', 
            git: 'https://github.com/loxi1/jlc-consultora-proyectos', 
            image: 'jlc-electricistas.png', 
            "skills": [
                {
                    "name": "Astro",
                    "imagen": "astro"
                },
                {
                    "name": "SendGrid",
                    "imagen": "sendgrid"
                },
                {
                    "name": "Tailwind",
                    "imagen": "tailwind"
                },
            ],
            url: 'https://www.jlcelectricistas.com/'
        },
        { 
            title: 'Confecciones adler', 
            description: 'Emprendimiento del rubro textil dedicada al corte, confección y bordados.', 
            dia: '', 
            anio: '2023', 
            mes: 'Febreo', 
            git: 'https://github.com/loxi1/Adler', 
            image: 'confeciones-adler.png',
            "skills": [
                {
                    "name": "Astro",
                    "imagen": "astro"
                },
                {
                    "name": "SendGrid",
                    "imagen": "sendgrid"
                },
                {
                    "name": "Tailwind",
                    "imagen": "tailwind"
                },
            ],
            url: 'https://confeccionesadler.com/'
        },
        {
            title: 'Practica Node (Biblioteca)',
            description: 'CURD nodejs',
            dia: '',
            anio: '2023',
            mes: 'Febrero',
            git: 'https://github.com/loxi1/node-prisma',
            image: 'prueba-express.png',
            "skills" : [
                {
                    "name": "Node",
                    "imagen": "nodejs"
                },
                {
                    "name": "Typescript",
                    "imagen": "ts"
                },
                {
                    "name": "Typescript",
                    "imagen": "ts"
                },
                {
                    "name": "Postgresql",
                    "imagen": "postgresql"
                },
                {
                    "name": "Prisma",
                    "imagen": "prisma"

                },
                {
                    "name": "Swagger",
                    "imagen": "swagger"

                }
            ]
        }   ,
        {
            title: 'Practica Node (Login)',
            description: 'CURD nodejs',
            dia: '',
            anio: '2023',
            mes: 'Agosto',
            git: 'https://github.com/loxi1/jlc-inventario',
            image: 'jlc-inventario.png',
            "skills" : [
                {
                    "name": "Node",
                    "imagen": "nodejs"
                },
                {
                    "name": "Express",
                    "imagen": "express"

                },
                {
                    "name": "Javascript",
                    "imagen": "javascript"
                },
                {
                    "name": "MySQL",
                    "imagen": "mysql"

                }
            ]
        }        
    ]
}
