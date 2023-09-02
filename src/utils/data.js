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
            title: 'jlcelectricistas', 
            description: 'Grupo de ingenieros electricos que brindan servicios de: diseño de proyectos eléctricos en media y baja tensión, ingeniería de detalles, Memorias Descriptivas, Memorias de Cálculos, Especificaciones Técnicas y planos eléctricos en general', dia: '', anio: '2023', mes: 'Marzo', 
            git: 'https://github.com/lemcok/equipo4-ed4-backend', 
            image: 'accesibilidad-de-lugar.jpeg', 
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
            ],
            url: '' 
        },
        { 
            title: 'Accesibilida de establecimiento ', 
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
    ]
}
