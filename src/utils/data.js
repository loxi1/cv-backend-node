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

export const asesoria = {
    servicio: [
        {
            title: 'ASESORIA DEFENSA CIVIL',
            img: 'asesoria.png',
            description: 'EXPEDIENTE INDECI',
            frases: 'Profesionales con más de 15 años de Experiencia, con cursos y diplomados en Seguridad.',
            items: [
                { item: 'Plano de Ubicación de Local' },
                { item: 'Plano de Distribución Arquitectónica (Actualizado)' },
                { item: 'Plano de señalización (Seguridad)' },
                { item: 'Plano de evacuación (Seguridad)' },
                { item: 'Planos de Tableros Eléctricos con sus respectivos diagramas Unifilares y Cuadros de Carga' },
                { item: 'Certificado de Operatividad de Detectores de Humo' },
                { item: 'Certificado de Operatividad de Luces de Emergencia' },
                { item: 'Certificado de Operatividad de Central de Alarma CI' },
                { item: 'Protocolo de Sistema de Protección a Tierra' },
                { item: 'Certificado de Operatividad de Equipos' },
                { item: 'Memoria de Instalaciones Eléctricas' },
                { item: 'Cálculo de Aforo' },
                { item: 'Memoria Descriptiva de Arquitectura' },
                { item: 'Plan de Seguridad' },
            ]
        }
    ]
}

export const tramites = {
    servicio: [
        {
            title: 'TRÁMTES ELÉCTRICOS ENEL/LUZ DEL SUR',
            img: 'tramites-electricos.png',
            description: '',
            frases: 'Con el respaldo de profesionales colegiados y habilitados por el CIP',
            items: [
                { item: 'Planos Eléctricos en Baja y Media Tensión.' },
                { item: 'Carta de Solicitud de Aumento de Carga ' },
                { item: 'Carta de Solicitud de Nuevo Suministro (nuevo medidor)' },
                { item: 'Carta de Solicitud de Banco de Medidores' },
                { item: 'Planos de Instalaciones Eléctricas' },
                { item: 'Croquis de Ubicación del predio' },
                { item: 'Detalles de Instalación de Suministro' },
                { item: 'Cálculo de Cargas' },
                { item: 'Diagramas Unifilares' }
            ]
        }
    ]
}

export const adicionales = {
    servicio: [
        {
            title: 'SERVICIOS ADICIONALES',
            img: 'servicios-adicionales.png',
            description: '',
            frases: '',
            items: [
                { item: 'Cálculos de Luminotecnia, desarrollo de proyectos de Iluminación, empleando el DIALux y las normas vigentes para los diversos ambientes tanto en Luxes como en calidad por tipo de tarea visual o actividad.' },
                { item: 'Diseño y Replanteo de Instalaciones Eléctricas (existentes), realizamos el ordenamiento de los circuitos según el Código Nacional de Electricidad (CNE).' },
                { item: 'Diseño de Esquema de Tableros, para mandar a fabricar, según normativa vigente.' },
                { item: 'Mantenimiento de subestaciones eléctricas' }
            ]
        }
    ]
}

