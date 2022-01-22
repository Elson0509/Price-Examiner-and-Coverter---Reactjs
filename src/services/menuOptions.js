import i18n from "./textLanguages";
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
        title: i18n.t('quantity'),
        screen: 'Quantity',
        background: BACKGROUND_COLOR_BUTTONS_PRICE_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_PRICE_SCREEN,
        measures: []
    },
    {
        icon: 'balance-scale-right',
        title: i18n.t('weight'),
        screen: 'Weight',
        background: BACKGROUND_COLOR_BUTTONS_PRICE_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_PRICE_SCREEN,
        measures: WEIGHT_MEASURES
    },
    {
        icon: 'arrows-alt-h',
        title: i18n.t('distance'),
        screen: 'Distance',
        background: BACKGROUND_COLOR_BUTTONS_PRICE_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_PRICE_SCREEN,
        measures: DISTANCE_MEASURES
    },
    {
        icon: 'wine-bottle',
        title: i18n.t('liquid'),
        screen: 'Liquid',
        background: BACKGROUND_COLOR_BUTTONS_PRICE_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_PRICE_SCREEN,
        measures: LIQUID_MEASURES
    },
    {
        icon: 'ruler-combined',
        title: i18n.t('area'),
        screen: 'Area',
        background: BACKGROUND_COLOR_BUTTONS_PRICE_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_PRICE_SCREEN,
        measures: AREA_MEASURES
    },
]

export const menuOptionsMeasure = [
    {
        icon: 'balance-scale-right',
        title: i18n.t('weight'),
        screen: 'Weight',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: WEIGHT_MEASURES
    },
    {
        icon: 'arrows-alt-h',
        title: i18n.t('distance'),
        screen: 'Distance',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: DISTANCE_MEASURES
    },
    {
        icon: 'wine-bottle',
        title: i18n.t('liquid'),
        screen: 'Liquid',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: LIQUID_MEASURES
    },
    {
        icon: 'ruler-combined',
        title: i18n.t('area'),
        screen: 'Area',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: AREA_MEASURES
    },
    {
        icon: 'exchange-alt',
        title: i18n.t('dataTransfer'),
        screen: 'DataTransfer',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: DATA_TRANSFER
    },
    {
        icon: 'database',
        title: i18n.t('storage'),
        screen: 'Storage',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: STORAGE
    },
    {
        icon: 'lightbulb',
        title: i18n.t('energy'),
        screen: 'Energy',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: ENERGY
    },
    {
        icon: 'wave-square',
        title: i18n.t('frequency'),
        screen: 'Frequency',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: FREQUENCY
    },
    {
        icon: 'gas-pump',
        title: i18n.t('fuel'),
        screen: 'Fuel',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: FUEL
    },
    {
        icon: 'draw-polygon',
        title: i18n.t('angle'),
        screen: 'Angle',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: ANGLE
    },
    {
        icon: 'gem',
        title: i18n.t('pressure'),
        screen: 'Pressure',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: PRESSURE
    },
    {
        icon: 'tachometer-alt',
        title: i18n.t('speed'),
        screen: 'Speed',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: SPEED
    },
    {
        icon: 'clock',
        title: i18n.t('time'),
        screen: 'Time',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: TIME
    },
    {
        icon: 'thermometer-three-quarters',
        title: i18n.t('temperature'),
        screen: 'Temperature',
        background: BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN,
        borderWidth: BORDER_COLOR_BUTTONS_CONVERT_SCREEN,
        measures: TEMPERATURE
    },
]