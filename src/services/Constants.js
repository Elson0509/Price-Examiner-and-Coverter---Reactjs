import i18n from "./textLanguages"

export const BORDER_COLOR_ITEM_LIST = 'black'
export const BORDER_COLOR_ITEM_LIST_EXPENSIVE = 'red'
export const BORDER_COLOR_ITEM_LIST_CHEAP = 'green'
export const BACKGROUND_COLOR_ITEM_LIST_EXPENSIVE = '#FEE'
export const BACKGROUND_COLOR_ITEM_LIST_CHEAP = '#EFE'
export const BACKGROUND_COLOR_PRICES_SCREEN = '#FFFF8F'
export const BACKGROUND_COLOR_PRICES_SCREEN_HEADER = '#FFDB58'
export const BACKGROUND_COLOR_CONVERT_SCREEN = '#F1C1FF'
export const BACKGROUND_COLOR_CONVERT_SCREEN_HEADER = '#CF9FFF'
export const BACKGROUND_COLOR_BUTTONS_CONVERT_SCREEN = '#F8A45E'
export const BORDER_COLOR_BUTTONS_CONVERT_SCREEN = '#E5712B'
export const BACKGROUND_COLOR_BUTTONS_PRICE_SCREEN = '#5678AD'
export const BORDER_COLOR_BUTTONS_PRICE_SCREEN = '#34568B'

export const WEIGHT_MEASURES = [
    //the reference for factor is g
    {
        name: i18n.t('mg'),
        factor: 0.001,
        symbol: 'mg'
    },
    {
        name: i18n.t('g'),
        factor: 1,
        symbol: 'g'
    },
    {
        name: i18n.t('kg'),
        factor: 1000,
        symbol: 'Kg'
    },
    {
        name: i18n.t('pound'),
        factor: 453.592,
        symbol: 'lb'
    },
    {
        name: i18n.t('tonne'),
        factor: 1000000,
        symbol: 't'
    },
    {
        name: i18n.t('ton'),
        factor: 1016047,
        symbol: 'tn'
    },
    {
        name: i18n.t('uston'),
        factor: 907184.7,
        symbol: 'ust'
    },
    {
        name: i18n.t('ounce'),
        factor: 28.3495,
        symbol: 'Oz'
    },
    {
        name: i18n.t('stone'),
        factor: 6350.29,
        symbol: 'st'
    },
]

export const DISTANCE_MEASURES = [
    // the reference for factor is m
    {
        name: i18n.t('mm'),
        factor: 0.001,
        symbol: 'mm'
    },
    {
        name: i18n.t('cm'),
        factor: 0.01,
        symbol: 'cm'
    },
    {
        name: i18n.t('m'),
        factor: 1,
        symbol: 'm'
    },
    {
        name: i18n.t('km'),
        factor: 1000,
        symbol: 'Km'
    },
    {
        name: i18n.t('inch'),
        factor: 0.0254,
        symbol: '″'
    },
    {
        name: i18n.t('feet'),
        factor: 0.3048,
        symbol: '′'
    },
    {
        name: i18n.t('yard'),
        factor: 0.9144,
        symbol: 'yd'
    },
    {
        name: i18n.t('mile'),
        factor: 1609.34,
        symbol: 'mi'
    },
    {
        name: i18n.t('nauticmile'),
        factor: 1852,
        symbol: 'nmi'
    },
]

export const LIQUID_MEASURES = [
    // the reference for factor is l
    {
        name: i18n.t('ml'),
        factor: 0.001,
        symbol: 'mL'
    },
    {
        name: i18n.t('liter'),
        factor: 1,
        symbol: 'L'
    },
    {
        name: i18n.t('ounce'),
        factor: 0.0284131,
        symbol: 'Oz'
    },
    {
        name: i18n.t('cup'),
        factor: 0.284131,
        symbol: 'UK cup'
    },
    {
        name: i18n.t('pint'),
        factor: 0.568261,
        symbol: 'UK pt'
    },
    {
        name: i18n.t('quart'),
        factor: 1.13652,
        symbol: 'UK qt'
    },
    {
        name: i18n.t('usgallon'),
        factor: 3.78541,
        symbol: 'US gal'
    },
    {
        name: i18n.t('uscup'),
        factor: 0.24,
        symbol: 'US cup'
    },
    {
        name: i18n.t('uspint'),
        factor: 0.473176,
        symbol: 'US pt'
    },
    {
        name: i18n.t('usquart'),
        factor: 0.946353,
        symbol: 'US qt'
    },
    {
        name: i18n.t('gallon'),
        factor: 4.54609,
        symbol: 'UK gal'
    },
    {
        name: i18n.t('cubicinch'),
        factor: 0.0163871,
        symbol: 'in³'
    },
    {
        name: i18n.t('cubicfoot'),
        factor: 28.3168,
        symbol: 'ft³'
    },
    {
        name: i18n.t('cubicmeter'),
        factor: 1000,
        symbol: 'm³'
    },
]

export const AREA_MEASURES = [
    // the reference for factor is squaremeter
    {
        name: i18n.t('hectare'),
        factor: 10000,
        symbol: 'ha'
    },
    {
        name: i18n.t('acre'),
        factor: 4046.86,
        symbol: 'ac'
    },
    {
        name: i18n.t('squaremeter'),
        factor: 1,
        symbol: 'm²'
    },
    {
        name: i18n.t('squarecm'),
        factor: 0.0001,
        symbol: 'cm²'
    },
    {
        name: i18n.t('squarekm'),
        factor: 1000000,
        symbol: 'km²'
    },
    {
        name: i18n.t('squarefoot'),
        factor: 0.092903,
        symbol: 'ft²'
    },
    {
        name: i18n.t('squareyard'),
        factor: 0.836127,
        symbol: 'yd²'
    },
    {
        name: i18n.t('squaremile'),
        factor: 2590002.59,
        symbol: 'mi²'
    },
    {
        name: i18n.t('squareinch'),
        factor: 0.00064516,
        symbol: 'in²'
    },
]

export const DATA_TRANSFER = [
    // the reference for factor is megabyte
    {
        name: i18n.t('bit') + ' ' + i18n.t('perSecond'),
        factor: 0.000000125,
        symbol: 'bit/s'
    },
    {
        name: i18n.t('kilobit') + ' ' + i18n.t('perSecond'),
        factor: 0.000125,
        symbol: 'kbit/s'
    },
    {
        name: i18n.t('kilobyte') + ' ' + i18n.t('perSecond'),
        factor: 0.001,
        symbol: 'kB/s'
    },
    {
        name: i18n.t('megabit') + ' ' + i18n.t('perSecond'),
        factor: 0.125,
        symbol: 'Mbit/s'
    },
    {
        name: i18n.t('megabyte') + ' ' + i18n.t('perSecond'),
        factor: 1,
        symbol: 'MB/s'
    },
    {
        name: i18n.t('gigabit') + ' ' + i18n.t('perSecond'),
        factor: 125,
        symbol: 'Bgit/s'
    },
    {
        name: i18n.t('gigabyte') + ' ' + i18n.t('perSecond'),
        factor: 1000,
        symbol: 'GB/s'
    },
    {
        name: i18n.t('terabit') + ' ' + i18n.t('perSecond'),
        factor: 125000,
        symbol: 'Tbit/s'
    },
    {
        name: i18n.t('terabyte') + ' ' + i18n.t('perSecond'),
        factor: 1000000,
        symbol: 'TB/s'
    }
]

export const STORAGE = [
    // the reference for factor is megabyte
    {
        name: i18n.t('bit'),
        factor: 0.000000125,
        symbol: 'bit'
    },
    {
        name: i18n.t('kilobyte'),
        factor: 0.001,
        symbol: 'kB'
    },
    {
        name: i18n.t('megabyte'),
        factor: 1,
        symbol: 'MB'
    },
    {
        name: i18n.t('gigabyte'),
        factor: 1000,
        symbol: 'GB'
    },
    {
        name: i18n.t('terabyte'),
        factor: 1000000,
        symbol: 'TB'
    },
    {
        name: i18n.t('petabyte'),
        factor: 1000000000,
        symbol: 'PB'
    }
]

export const ENERGY = [
    // the reference for factor is watt hour
    {
        name: i18n.t('joule'),
        factor: 0.000277778,
        symbol: 'K'
    },
    {
        name: i18n.t('kilojoule'),
        factor: 0.277778,
        symbol: 'kJ'
    },
    {
        name: i18n.t('calorie'),
        factor: 0.00116222,
        symbol: ''
    },
    {
        name: i18n.t('kilocalorie'),
        factor: 1.16222,
        symbol: 'cal'
    },
    {
        name: i18n.t('watthour'),
        factor: 1,
        symbol: 'Wh'
    },
    {
        name: i18n.t('kilowatthour'),
        factor: 1000,
        symbol: 'kWh'
    },
    {
        name: i18n.t('britishThermalUnit'),
        factor: 0.293071,
        symbol: 'Btu'
    },
    {
        name: i18n.t('usTherm'),
        factor: 29300.1,
        symbol: 'thm'
    },
    {
        name: i18n.t('footPound'),
        factor: 0.000376616,
        symbol: 'ft⋅lbf'
    },
]

export const FREQUENCY = [
    // the reference for factor is kilohertz
    {
        name: i18n.t('hertz'),
        factor: 0.001,
        symbol: 'Hz'
    },
    {
        name: i18n.t('kilohertz'),
        factor: 1,
        symbol: 'kHz'
    },
    {
        name: i18n.t('megahertz'),
        factor: 1000,
        symbol: 'mHz'
    },
    {
        name: i18n.t('gigahertz'),
        factor: 1000000,
        symbol: 'gHz'
    },
]

export const FUEL = [
    // the reference for factor is km/l
    {
        name: i18n.t('kmlt'),
        factor: 1,
        symbol: 'Km/L'
    },
    // {
    //     name: i18n.t('lt100km'),
    //     factor: 1,
    //     symbol: 'L/100Km'
    // },
    {
        name: i18n.t('mlgallon'),
        factor: 0.425144,
        symbol: 'mpg'
    },
    {
        name: i18n.t('mlgallonImp'),
        factor: 0.354006,
        symbol: 'mgp imp'
    },
]

export const ANGLE = [
    // the reference for factor is degree
    {
        name: i18n.t('degree'),
        factor: 1,
        symbol: '°'
    },
    {
        name: i18n.t('milliradian'),
        factor: 0.0572958,
        symbol: 'mrad'
    },
    {
        name: i18n.t('minuteofarc'),
        factor: 0.0166667,
        symbol: '′'
    },
    {
        name: i18n.t('radian'),
        factor: 57.2958,
        symbol: 'rad'
    },
    {
        name: i18n.t('secondofarc'),
        factor: 0.000277778,
        symbol: '″'
    },
    {
        name: i18n.t('gradian'),
        factor: .9,
        symbol: 'grad'
    },
]

export const PRESSURE = [
    // the reference for factor is bar
    {
        name: i18n.t('bar'),
        factor: 1,
        symbol: 'bar'
    },
    {
        name: i18n.t('poundPerSquareInch'),
        factor: 0.0689476,
        symbol: 'psi'
    },
    {
        name: i18n.t('atmosphere'),
        factor: 1.01325,
        symbol: 'atm'
    },
    {
        name: i18n.t('torr'),
        factor: 0.00133322,
        symbol: 'Torr'
    },
    {
        name: i18n.t('pascal'),
        factor: 0.00001,
        symbol: 'Pa'
    },
]

export const SPEED = [
    // the reference for factor is m/s
    {
        name: i18n.t('milesperhour'),
        factor: 0.44704,
        symbol: 'mph'
    },
    {
        name: i18n.t('footpersecond'),
        factor: 0.3048,
        symbol: 'ft/s'
    },
    {
        name: i18n.t('meterpersecond'),
        factor: 1,
        symbol: 'm/s'
    },
    {
        name: i18n.t('kmperhour'),
        factor: 0.277778,
        symbol: 'km/h'
    },
    {
        name: i18n.t('knot'),
        factor: 0.514444,
        symbol: 'kn'
    },
]

export const TIME = [
    // the reference for factor is hour
    {
        name: i18n.t('millisecond'),
        factor: 0.000000277777,
        symbol: 'ms'
    },
    {
        name: i18n.t('second'),
        factor: 0.000277778,
        symbol: 's'
    },
    {
        name: i18n.t('minute'),
        factor: 0.0166667,
        symbol: 'min'
    },
    {
        name: i18n.t('hour'),
        factor: 1,
        symbol: 'h'
    },
    {
        name: i18n.t('day'),
        factor: 24,
        symbol: 'd'
    },
    {
        name: i18n.t('week'),
        factor: 168,
        symbol: 'w'
    },
    {
        name: i18n.t('month'),
        factor: 730,
        symbol: 'M'
    },
    {
        name: i18n.t('year'),
        factor: 8760,
        symbol: 'a'
    },
    {
        name: i18n.t('decade'),
        factor: 87600,
        symbol: 'dec'
    },
    {
        name: i18n.t('century'),
        factor: 876000,
        symbol: 'C'
    },
]

const fromCToC = x => x 
const fromKToC = x => x + 273.15
const fromCToK = x => x - 273.15
const fromFToC = x => (x * 9/5) + 32
const fromCToF = x => (x - 32) * 5 / 9

export const TEMPERATURE = [
    // the reference for factor is celsius
    {
        name: i18n.t('celsius'),
        factor: 1,
        symbol: '℃',
        formulaFrom: fromCToC.toString(),
        formulaTo: fromCToC.toString(),
    },
    {
        name: i18n.t('kelvin'),
        factor: 1,
        symbol: 'K',
        formulaFrom: fromKToC.toString(),
        formulaTo: fromCToK.toString(),
    },
    {
        name: i18n.t('fahrenheit'),
        factor: 1,
        symbol: '℉',
        formulaFrom: fromFToC.toString(),
        formulaTo: fromCToF.toString(),
    },
]
