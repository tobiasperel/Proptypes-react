import {string, number, shape} from 'prop-types'

export const ProductoShape = shape({
    id:number,
    nombre:string,
    precio:number,
    image:string
})

export const CounterShape = shape(
    { nombre: string, emote:string, dataNum: number }
)

export const ServicesShape = shape(
    { nombre: string, emote:string, descripcion:string, url: string }
)