interface Vehicle{
    travelTo(point: Point): void;    
}

export class Taxi implements Vehicle{
    
    constructor(private _location: Point, private _color?:string) {
    }
    
    travelTo(point: Point): void {
        console.log(`taksi (${this._location?.x}, ${this._location?.y}) koordinatlarından (${point.x}, ${point.y}) koordinatlarına hareket ediyor.`)
    }
    
    get location(){
        return this._location;
    }

    set location(value:Point){
        if(value.x > 0 && value.y > 0){
            throw new Error('Negatif koordinat bilgileri olamaz.');
        }
        this._location= value;
    }

}