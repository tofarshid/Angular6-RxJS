export interface Brands {
    id:number;
    name:string;
    longDescription: string;
    carCount:number;
    iconUrl: string;
    brandListIcon: string;
}

export interface Cars {
    id: number,
    title: string,
    brandId: number
}