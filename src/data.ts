/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Exercise {
  id: string;
  title: string;
  description: string;
  objective: string;
  duration: string;
  pdfUrl?: string | string[];  // ✅ CORREGIDO: acepta string o array
}

export interface WorkshopClass {
  number: number;
  title: string;
  duration: string;
  objective: string;
  pdfUrl?: string | string[];  // ← Agrega esta línea
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  classes: WorkshopClass[];
  exercises: Exercise[];
  tips: string[];
}

export const WORKSHOP_DATA: Module[] = [
  {
    id: "loomis",
    title: "Técnicas para aprender a Dibujar",
    description: "El camino para potenciar nuestra habilidad en el dibujo. Prácticas, métodos y ejercicios para desarrollar la observación, la motricidad y la comprensión de las formas básicas.",
    icon: "CircleDashed",
    tips: [
      "No te preocupes por el detalle al principio, enfócate en la esfera.",
      "La línea de las cejas es crucial para la orientación.",
      "Mantén los trazos suaves (H o 2H)."
    ],
    classes: [
      {
        number: 1,
        title: "Aprender a Observar",
        duration: "2 horas",
        objective: "Practicar la observación y la motricidad.",
        pdfUrl: "/pdfs/sesion_inicial.pdf"  // ← Se agrega esta línea
      },
      {
        number: 2,
        title: "La Esfera y el Plano Lateral",
        duration: "1 hora",
        objective: "Entender el volumen básico del cráneo y la sección lateral.",
        pdfUrl: "/pdfs/sesion-1.pdf"  // ← Se agrega esta línea
      },
      {
        number: 3,
        title: "Divisiones de la Cara",
        duration: "1 hora",
        objective: "Proyectar la mandíbula y dividir el rostro en tercios proporcionales.",
        pdfUrl: "/pdfs/sesion-2.pdf"  // ← Se agrega esta línea
      }
    ],
    exercises: [
      {
        id: "loomis-1",
        title: "Esferas en Perspectiva",
        description: "Dibuja 4 esferas con su plano lateral en diferentes ángulos representados por una cruz.",
        objective: "Dominar la rotación tridimensional del cráneo.",
        duration: "45 min",
        pdfUrl: "/pdfs/modulo-1-ejercicio-1.pdf"  // ← Se agrega esta línea
      },
      {
        id: "loomis-2",
        title: "Estructura Completa",
        description: "Construye 9 estructuras de cabeza completa (Loomis head) sin detalles de rostro.",
        objective: "Consolidar la base antes de añadir rasgos.",
        duration: "60 min",
        pdfUrl: "/pdfs/modulo-1-ejercicio-2.pdf"  // ← Se agrega esta línea
      }
    ]
  },
  {
    id: "ojos",
    title: "Los Ojos",
    description: "Construcción del globo ocular, párpados y la anatomía del ojo.",
    icon: "Eye",
    tips: [
      "Recuerda que el ojo es una esfera dentro de una cuenca.",
      "El párpado superior suele proyectar una sombra sobre el iris.",
      "La distancia entre ojos suele ser del tamaño de un ojo."
    ],
    classes: [
      {
        number: 3,
        title: "Anatomía del Ojo",
        duration: "2 horas",
        objective: "Dibujar el globo ocular y cómo los párpados se envuelven sobre él.",
        pdfUrl: "/pdfs/sesion-3.pdf" 
      }
    ],
    exercises: [
      {
        id: "ojos-1",
        title: "El Ojo como Esfera",
        description: "Dibuja un círculo y envuélvelo con formas sencillas para los párpados, en diferentes direcciones.",
        objective: "Entender el volumen.",
        duration: "60 min",
        pdfUrl: "/pdfs/modulo-2-ejercicio-1.pdf"  // ← Se agrega esta línea
      },
      {
        id: "ojos-2",
        title: "Par de Ojos en Ángulo",
        description: "Dibuja un ojo en una vista de 3/4 usando el método de Loomis.",
        objective: "Manejar la perspectiva.",
        duration: "30 min",
        pdfUrl: "/pdfs/modulo-2-ejercicio-2.pdf"  // ← Se agrega esta línea
      }
    ]
  },
  {
    id: "nariz",
    title: "La Nariz y su Estructura",
    description: "Simplificación de la nariz en planos geométricos.",
    icon: "Triangle",
    tips: [
      "Piensa en la nariz como un bloque o cuña.",
      "Las fosas nasales no son círculos negros, son transiciones de planos.",
      "La punta de la nariz suele captar la luz principal."
    ],
    classes: [
      {
        number: 4,
        title: "Planos Nasales",
        duration: "2 horas",
        objective: "Descomponer la nariz en planos frontales, laterales y base.",
        pdfUrl: "/pdfs/sesion-4.pdf" 
      }
    ],
    exercises: [
      {
        id: "nariz-1",
        title: "La Cuña Nasal",
        description: "Dibuja una nariz simplificándola primeramente en bloques rectangulares.",
        objective: "Visualizar el volumen sólido.",
        duration: "45 min",
        pdfUrl: "/pdfs/modulo-3-ejercicio-1.pdf"  // ← Se agrega esta línea
      },
      {
        id: "nariz-2",
        title: "Renderizado de Nariz",
        description: "Dibuja una nariz realista enfocándote en las sombras suaves de los lados.",
        objective: "Aplicar claroscuro en volúmenes suaves.",
        duration: "45 min",
        pdfUrl: "/pdfs/modulo-3-ejercicio-2.pdf"  // ← Se agrega esta línea
      }
    ]
  },
  {
    id: "boca",
    title: "La Boca y los Labios",
    description: "Cómo los labios se asientan sobre la curva de los dientes.",
    icon: "Smile",
    tips: [
      "El labio superior suele ser más oscuro que el inferior (luz desde arriba).",
      "No dibujes líneas duras alrededor de los labios.",
      "Enfatiza las comisuras."
    ],
    classes: [
      {
        number: 5,
        title: "Curvatura de los Labios",
        duration: "2 horas",
        objective: "Entender que la boca sigue la curva cilíndrica de la mandíbula.",
        pdfUrl: "/pdfs/sesion-5.pdf"
      }
    ],
    exercises: [
      {
        id: "boca-1",
        title: "Las 5 Almohadillas",
        description: "Usa el concepto de las 3 formas circulares para construir los labios.",
        objective: "Construcción por volúmenes.",
        duration: "40 min",
        pdfUrl: "/pdfs/modulo-4-ejercicio-1.pdf"  // ← Se agrega esta línea
      },
      {
        id: "boca-2",
        title: "Expresiones Básicas",
        description: "Dibuja paso a paso -utilizando lineas guías- una boca/labios realistas",
        objective: "Aprender a ver cómo cambian las formas con las sombras.",
        duration: "50 min",
        pdfUrl: "/pdfs/modulo-4-ejercicio-2.pdf"  // ← Se agrega esta línea
      }
    ]
  },
  {
    id: "oreja",
    title: "La Complejidad de la Oreja",
    description: "Simplificación de la oreja en formas de 'Y' y 'C'.",
    icon: "Ear",
    tips: [
      "La oreja se alinea generalmente entre las cejas y la base de la nariz.",
      "Enfócate en el ritmo de los bordes externos.",
      "La oreja tiene profundidad, no es plana."
    ],
    classes: [
      {
        number: 6,
        title: "Cartílago",
        duration: "2 horas",
        objective: "Identificar las partes principales: hélix, antihélix y lóbulo.",
      pdfUrl: "/pdfs/sesion-6.pdf"
      }
    ],
    exercises: [
      {
        id: "oreja-1",
        title: "La Forma de C",
        description: "Dibuja el contorno básico en forma de C y añade la Y interna.",
        objective: "Simplificación máxima.",
        duration: "30 min",
        pdfUrl: "/pdfs/modulo-5-ejercicio-1.pdf"  // ← Se agrega esta línea
      },
      {
        id: "oreja-2",
        title: "Oreja en Perspectiva",
        description: "Dibuja una oreja vista desde atrás y desde el frente.",
        objective: "Entender la inserción en el cráneo.",
        duration: "40 min",
        pdfUrl: "/pdfs/modulo-5-ejercicio-2.pdf"  // ← Se agrega esta línea
      }
    ]
  },
  {
    id: "figuras",
    title: "La Figura Humana",
    description: "Proporciones, gesto y anatomía básica del cuerpo.",
    icon: "User",
    tips: [
      "Empieza con un 'dibujo gestual' de 30 segundos.",
      "La cabeza es la unidad de medida estándar (7-8 cabezas de alto).",
      "Busca la línea de acción."
    ],
    classes: [
      {
        number: 7,
        title: "Proporciones Ideales",
        duration: "2 horas",
        objective: "Estudio del canon de 8 cabezas.",
        pdfUrl:[
          "/pdfs/modulo-6-ejercicio-1.pdf",
            "/pdfs/modulo-6-ejercicio-2.pdf"
        ]
      },
      {
        number: 8,
        title: "Gesto y Línea de Acción",
        duration: "2 horas",
        objective: "Capturar el movimiento y la intención de la pose.",
        pdfUrl:"/pdfs/modulo-6-ejercicio-1-1.pdf"
      },
      {
        number: 9,
        title: "Anatomía de Miembros",
        duration: "2 horas",
        objective: "Brazos, piernas y sus conexiones musculares básicas.",
        pdfUrl: [  
          "/pdfs/modulo-6-ejercicio-4.pdf",
          "/pdfs/modulo-6-ejercicio-4-1.pdf",
           "/pdfs/modulo-6-ejercicio-5-1.pdf",
          "/pdfs/modulo-6-ejercicio-5-2.pdf",
        ]
      },
      {
        number: 10,
        title: "Composición y Pose Final",
        duration: "2 horas",
        objective: "Una figura completa con sombreado básico.",
        pdfUrl: [
          "/pdfs/modulo-6-ejercicio-6.pdf",
          "/pdfs/modulo-6-ejercicio-5-3.pdf"
        ]
      }
    ],
    exercises: [
      {
        id: "figura-1",
        title: "Gesto Rápido",
        description: "Realiza 20 dibujos gestuales de 1 minuto cada uno.",
        objective: "Soltura y captura de acción.",
        duration: "20 min",
        pdfUrl:[
          "/pdfs/modulo-6-ejercicio-3.pdf",
          "/pdfs/modulo-6-ejercicio-3-1.pdf"
        ]
      },
      {
        id: "figura-2",
        title: "Maniquí de Bloques",
        description: "Construye una figura humana usando cajas y cilindros.",
        objective: "Entender la estructura 3D del cuerpo.",
        duration: "60 min",
        pdfUrl: "/pdfs/modulo-6-ejercicio-5-4.pdf"
      }
    ]
  }
];
