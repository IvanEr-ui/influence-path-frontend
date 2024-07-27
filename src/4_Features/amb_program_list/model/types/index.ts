export interface IAmbProgram {
    id: number,
    iconUrl: string,
    nameProject: string,
    nameAmbProgram: string,
    status: boolean,
    category?: [
        {
            id: number,
            name: string
        }
    ],
    countUserJoin?: {
        count: number,
        date: string,
    }
}
