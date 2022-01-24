import { 
    WEIGHT_MEASURES,
    DISTANCE_MEASURES,
    LIQUID_MEASURES,
    AREA_MEASURES,
    DATA_TRANSFER,
    STORAGE,
    ENERGY,
    FREQUENCY,
    FUEL,
    ANGLE,
    PRESSURE,
    SPEED,
    TIME,
    TEMPERATURE,
    BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
    BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
    BACKGROUND_COLOR_BUTTONS_PRICE_SCREEN,
    BORDER_COLOR_BUTTONS_PRICE_SCREEN,
} from './Constants'

export const menuOptionsPrices = [
    {
        icon: 'boxes',
        title: 'label.quantity',
        screen: 'Quantity',
        background: BACKGROUND_COLOR_BUTTONS_PRICE_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_PRICE_SCREEN,
        measures: []
    },
    {
        icon: 'balance-scale-right',
        title: 'label.weight',
        screen: 'Weight',
        background: BACKGROUND_COLOR_BUTTONS_PRICE_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_PRICE_SCREEN,
        measures: WEIGHT_MEASURES
    },
    {
        icon: 'arrows-alt-h',
        title: 'label.distance',
        screen: 'Distance',
        background: BACKGROUND_COLOR_BUTTONS_PRICE_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_PRICE_SCREEN,
        measures: DISTANCE_MEASURES
    },
    {
        icon: 'wine-bottle',
        title: 'label.liquid',
        screen: 'Liquid',
        background: BACKGROUND_COLOR_BUTTONS_PRICE_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_PRICE_SCREEN,
        measures: LIQUID_MEASURES
    },
    {
        icon: 'ruler-combined',
        title: 'label.area',
        screen: 'Area',
        background: BACKGROUND_COLOR_BUTTONS_PRICE_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_PRICE_SCREEN,
        measures: AREA_MEASURES
    },
]

export const menuOptionsMeasure = [
    {
        icon: 'balance-scale-right',
        title: 'label.weight',
        screen: 'Weight',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: WEIGHT_MEASURES
    },
    {
        icon: 'arrows-alt-h',
        title: 'label.distance',
        screen: 'Distance',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: DISTANCE_MEASURES
    },
    {
        icon: 'wine-bottle',
        title: 'label.liquid',
        screen: 'Liquid',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: LIQUID_MEASURES
    },
    {
        icon: 'ruler-combined',
        title: 'label.area',
        screen: 'Area',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: AREA_MEASURES
    },
    {
        icon: 'exchange-alt',
        title: 'label.dataTransfer',
        screen: 'DataTransfer',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: DATA_TRANSFER
    },
    {
        icon: 'database',
        title: 'label.storage',
        screen: 'Storage',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: STORAGE
    },
    {
        icon: 'lightbulb',
        title: 'label.energy',
        screen: 'Energy',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: ENERGY
    },
    {
        icon: 'wave-square',
        title: 'label.frequency',
        screen: 'Frequency',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: FREQUENCY
    },
    {
        icon: 'gas-pump',
        title: 'label.fuel',
        screen: 'Fuel',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: FUEL
    },
    {
        icon: 'draw-polygon',
        title: 'label.angle',
        screen: 'Angle',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: ANGLE
    },
    {
        icon: 'gem',
        title: 'label.pressure',
        screen: 'Pressure',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: PRESSURE
    },
    {
        icon: 'tachometer-alt',
        title: 'label.speed',
        screen: 'Speed',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: SPEED
    },
    {
        icon: 'clock',
        title: 'label.time',
        screen: 'Time',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: TIME
    },
    {
        icon: 'thermometer-three-quarters',
        title: 'label.temperature',
        screen: 'Temperature',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: TEMPERATURE
    },
]