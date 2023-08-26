interface Point{
    x: number,
    y: number
}


interface Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void;
    getDistance(pointA: Point, pointB: Point): number;
}

class Taxi implements Vehicle{
    currentLocation: Point;
    color: string;
    constructor(location?: Point, color?:string) {
        this.currentLocation = typeof location !== 'undefined' ? location : {x:0,y:0};
        this.color = typeof color !== 'undefined' ? color: "yok";
    }
    
    travelTo(point: Point): void {
        console.log(`taksi (${point.x}, ${point.y}) koordinatlarına hareket ediyor.`)
    }
    getDistance(pointA: Point, pointB: Point): number {
        throw new Error("Method not implemented.");
    }

}

class Bus implements Vehicle{
    currentLocation: Point;
    travelTo(point: Point): void {
        console.log(`Otobüs (${point.x}, ${point.y}) koordinatlarına hareket ediyor.`)
    }
    getDistance(pointA: Point, pointB: Point): number {
        throw new Error("Method not implemented.");
    }

}


let taxi_1: Taxi = new Taxi({x: 1 , y: 2});
taxi_1.travelTo(taxi_1.currentLocation);
