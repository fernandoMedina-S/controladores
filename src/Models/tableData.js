export const columns = [
    {
        name: 'Tipo de dispositivo',
        selector: row => row.type,
        sortable: true,
    },
    {
        name: 'Nombre',
        selector: row => row.name,
        sortable: true,
    },
    {
        name: 'Ubicación',
        selector: row => row.location,
        sortable: true,
    },
    {
        name: 'Tamaño en bloques',
        selector: row => row.size,
        sortable: true,
    },
    {
        name: 'Estado',
        selector: row => row.state,
        sortable: true,
    },
];

export const data = [
    {
        id: 1,
        type: 'Impresora',
        name: 'Epson L3130',
        location: "/run/media/printers",
        size: "10",
        state: "active",
        action: "Boton",
    },
    {
        id: 2,
        type: 'Impresora',
        name: 'Canon MP301',
        location: "/run/media/printers",
        size: "10",
        state: "active",
        action: "Boton",
    },
]

