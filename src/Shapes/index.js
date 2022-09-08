import {string, number, shape} from 'prop-types'

export const ProductoShape = shape({
    nombre:string,
    precio:number,
    image:string
})

export const CounterShape = shape(
    { nombre: string, emote:string, dataNum: number }
)