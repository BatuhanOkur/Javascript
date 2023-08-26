import {Taxi} from './Taxi';

interface Point{
    x: number,
    y: number
}


interface Vehicle{
    travelTo(point: Point): void;    
}




let taxi_1: Taxi = new Taxi({x: 1 , y: 2});
taxi_1.travelTo({x:5,y:7});
