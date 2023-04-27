export class Product{
  constructor(
    public ref: string,
    public label: string,
    public imageUrl: string,
    public description: string,
    public price : number,
    public quantity: number
  ){}
}
