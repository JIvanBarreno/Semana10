export class FuturamaData {
    items : PersonajeF[] = [];
    total: number = 0;
    page: number = 0;
    size: number = 0;
    pages: number = 0;
}

export class PersonajeF {
    id: number = 0;
    name: string = '';
    gender: string = '';
    status: string = '';
    species: string = '';
    createdAt: string = '';
    image: string = '';
}