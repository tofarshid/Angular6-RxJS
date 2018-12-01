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

/*

{
  "payload": [
    {
"id": 0,
"name": "Toyota",
"longDescription": "Japanese car makers",
"carCount": 10,
"iconUrl": "http://toypta.com.au",
"brandListIcon": "https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png"
    },
    {
"id": 1,
"name": "BMW",
"longDescription": "European car makers",
"carCount": 9,
"iconUrl": "http://bmw.com.au",
"brandListIcon": "https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png"
    },
    {
"id": 2,
"name": "Audi",
"longDescription": "European car makers",
"carCount": 8,
"iconUrl": "http://bmw.com.au",
"brandListIcon": "https://angular-academy.s3.amazonaws.com/main-logo/main-page-logo-small-hat.png"
    }
  ]
}



*/

