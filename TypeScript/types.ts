let a: number;
let b: string;
let c: boolean;
let d: any;
let e: number[] = [1,2,3];
let f: Array<number> = [1,2,3];
let g: any[] = [1,'a'];
let h: [string,number,boolean] = ['a', 5, false];

enum Payment{
    KREDI = 1,
    HAVALE,
    EFT,
    KAPIDAODEME
}

let kredi = Payment.KAPIDAODEME;