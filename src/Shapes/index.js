import {string, number, shape} from 'prop-types'

export const ProductoShape = shape({
    nombre:string.isRequired,
    precio:number.isRequired,
    image:string.isRequired
})