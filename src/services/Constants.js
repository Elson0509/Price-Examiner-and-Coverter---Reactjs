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
        name: ['wheight.mg'],
        factor: 0.001,
        symbol: 'mg'
    },
    {
        name: ['wheight.g'],
        factor: 1,
        symbol: 'g'
    },
    {
        name: ['wheight.kg'],
        factor: 1000,
        symbol: 'Kg'
    },
    {
        name: ['wheight.pound'],
        factor: 453.592,
        symbol: 'lb'
    },
    {
        name: ['wheight.tonne'],
        factor: 1000000,
        symbol: 't'
    },
    {
        name: ['wheight.ton'],
        factor: 1016047,
        symbol: 'tn'
    },
    {
        name: ['wheight.uston'],
        factor: 907184.7,
        symbol: 'ust'
    },
    {
        name: ['liquid.ounce'],
        factor: 28.3495,
        symbol: 'Oz'
    },
    {
        name: ['wheight.stone'],
        factor: 6350.29,
        symbol: 'st'
    },
]

export const DISTANCE_MEASURES = [
    // the reference for factor is m
    {
        name: ['distance.mm'],
        factor: 0.001,
        symbol: 'mm'
    },
    {
        name: ['distance.cm'],
        factor: 0.01,
        symbol: 'cm'
    },
    {
        name: ['distance.m'],
        factor: 1,
        symbol: 'm'
    },
    {
        name: ['distance.km'],
        factor: 1000,
        symbol: 'Km'
    },
    {
        name: ['distance.inch'],
        factor: 0.0254,
        symbol: '″'
    },
    {
        name: ['distance.feet'],
        factor: 0.3048,
        symbol: '′'
    },
    {
        name: ['distance.yard'],
        factor: 0.9144,
        symbol: 'yd'
    },
    {
        name: ['distance.mile'],
        factor: 1609.34,
        symbol: 'mi'
    },
    {
        name: ['distance.nauticmile'],
        factor: 1852,
        symbol: 'nmi'
    },
]

export const LIQUID_MEASURES = [
    // the reference for factor is l
    {
        name: ['liquid.ml'],
        factor: 0.001,
        symbol: 'mL'
    },
    {
        name: ['liquid.liter'],
        factor: 1,
        symbol: 'L'
    },
    {
        name: ['liquid.ounce'],
        factor: 0.0284131,
        symbol: 'Oz'
    },
    {
        name: ['liquid.cup'],
        factor: 0.284131,
        symbol: 'UK cup'
    },
    {
        name: ['liquid.pint'],
        factor: 0.568261,
        symbol: 'UK pt'
    },
    {
        name: ['liquid.quart'],
        factor: 1.13652,
        symbol: 'UK qt'
    },
    {
        name: ['liquid.usgallon'],
        factor: 3.78541,
        symbol: 'US gal'
    },
    {
        name: ['liquid.uscup'],
        factor: 0.24,
        symbol: 'US cup'
    },
    {
        name: ['liquid.uspint'],
        factor: 0.473176,
        symbol: 'US pt'
    },
    {
        name: ['liquid.usquart'],
        factor: 0.946353,
        symbol: 'US qt'
    },
    {
        name: ['liquid.gallon'],
        factor: 4.54609,
        symbol: 'UK gal'
    },
    {
        name: ['liquid.cubicinch'],
        factor: 0.0163871,
        symbol: 'in³'
    },
    {
        name: ['liquid.cubicfoot'],
        factor: 28.3168,
        symbol: 'ft³'
    },
    {
        name: ['liquid.cubicmeter'],
        factor: 1000,
        symbol: 'm³'
    },
]

export const AREA_MEASURES = [
    // the reference for factor is squaremeter
    {
        name: ['area.hectare'],
        factor: 10000,
        symbol: 'ha'
    },
    {
        name: ['area.acre'],
        factor: 4046.86,
        symbol: 'ac'
    },
    {
        name: ['area.squaremeter'],
        factor: 1,
        symbol: 'm²'
    },
    {
        name: ['area.squarecm'],
        factor: 0.0001,
        symbol: 'cm²'
    },
    {
        name: ['area.squarekm'],
        factor: 1000000,
        symbol: 'km²'
    },
    {
        name: ['area.squarefoot'],
        factor: 0.092903,
        symbol: 'ft²'
    },
    {
        name: ['area.squareyard'],
        factor: 0.836127,
        symbol: 'yd²'
    },
    {
        name: ['area.squaremile'],
        factor: 2590002.59,
        symbol: 'mi²'
    },
    {
        name: ['area.squareinch'],
        factor: 0.00064516,
        symbol: 'in²'
    },
]

export const DATA_TRANSFER = [
    // the reference for factor is megabyte
    {
        name: ['dataTransfer.bit', 'dataTransfer.perSecond'],
        factor: 0.000000125,
        symbol: 'bit/s'
    },
    {
        name: ['dataTransfer.kilobit', 'dataTransfer.perSecond'],
        factor: 0.000125,
        symbol: 'kbit/s'
    },
    {
        name: ['dataTransfer.kilobyte', 'dataTransfer.perSecond'],
        factor: 0.001,
        symbol: 'kB/s'
    },
    {
        name: ['dataTransfer.megabit', 'dataTransfer.perSecond'],
        factor: 0.125,
        symbol: 'Mbit/s'
    },
    {
        name: ['dataTransfer.megabyte', 'dataTransfer.perSecond'],
        factor: 1,
        symbol: 'MB/s'
    },
    {
        name: ['dataTransfer.gigabit', 'dataTransfer.perSecond'],
        factor: 125,
        symbol: 'Bgit/s'
    },
    {
        name: ['dataTransfer.gigabyte', 'dataTransfer.perSecond'],
        factor: 1000,
        symbol: 'GB/s'
    },
    {
        name: ['dataTransfer.terabit', 'dataTransfer.perSecond'],
        factor: 125000,
        symbol: 'Tbit/s'
    },
    {
        name: ['dataTransfer.terabyte', 'dataTransfer.perSecond'],
        factor: 1000000,
        symbol: 'TB/s'
    }
]

export const STORAGE = [
    // the reference for factor is megabyte
    {
        name: ['dataTransfer.bit'],
        factor: 0.000000125,
        symbol: 'bit'
    },
    {
        name: ['dataTransfer.kilobyte'],
        factor: 0.001,
        symbol: 'kB'
    },
    {
        name: ['dataTransfer.megabyte'],
        factor: 1,
        symbol: 'MB'
    },
    {
        name: ['dataTransfer.gigabyte'],
        factor: 1000,
        symbol: 'GB'
    },
    {
        name: ['dataTransfer.terabyte'],
        factor: 1000000,
        symbol: 'TB'
    },
    {
        name: ['dataTransfer.petabyte'],
        factor: 1000000000,
        symbol: 'PB'
    }
]

export const ENERGY = [
    // the reference for factor is watt hour
    {
        name: ['energy.joule'],
        factor: 0.000277778,
        symbol: 'K'
    },
    {
        name: ['energy.kilojoule'],
        factor: 0.277778,
        symbol: 'kJ'
    },
    {
        name: ['energy.calorie'],
        factor: 0.00116222,
        symbol: ''
    },
    {
        name: ['energy.kilocalorie'],
        factor: 1.16222,
        symbol: 'cal'
    },
    {
        name: ['energy.watthour'],
        factor: 1,
        symbol: 'Wh'
    },
    {
        name: ['energy.kilowatthour'],
        factor: 1000,
        symbol: 'kWh'
    },
    {
        name: ['energy.britishThermalUnit'],
        factor: 0.293071,
        symbol: 'Btu'
    },
    {
        name: ['energy.usTherm'],
        factor: 29300.1,
        symbol: 'thm'
    },
    {
        name: ['energy.footPound'],
        factor: 0.000376616,
        symbol: 'ft⋅lbf'
    },
]

export const FREQUENCY = [
    // the reference for factor is kilohertz
    {
        name: ['frequency.hertz'],
        factor: 0.001,
        symbol: 'Hz'
    },
    {
        name: ['frequency.kilohertz'],
        factor: 1,
        symbol: 'kHz'
    },
    {
        name: ['frequency.megahertz'],
        factor: 1000,
        symbol: 'mHz'
    },
    {
        name: ['frequency.gigahertz'],
        factor: 1000000,
        symbol: 'gHz'
    },
]

export const FUEL = [
    // the reference for factor is km/l
    {
        name: ['fuel.kmlt'],
        factor: 1,
        symbol: 'Km/L'
    },
    // {
    //     name: ['lt100km'],
    //     factor: 1,
    //     symbol: 'L/100Km'
    // },
    {
        name: ['fuel.mlgallon'],
        factor: 0.425144,
        symbol: 'mpg'
    },
    {
        name: ['fuel.mlgallonImp'],
        factor: 0.354006,
        symbol: 'mgp imp'
    },
]

export const ANGLE = [
    // the reference for factor is degree
    {
        name: ['angle.degree'],
        factor: 1,
        symbol: '°'
    },
    {
        name: ['angle.milliradian'],
        factor: 0.0572958,
        symbol: 'mrad'
    },
    {
        name: ['angle.minuteofarc'],
        factor: 0.0166667,
        symbol: '′'
    },
    {
        name: ['angle.radian'],
        factor: 57.2958,
        symbol: 'rad'
    },
    {
        name: ['angle.secondofarc'],
        factor: 0.000277778,
        symbol: '″'
    },
    {
        name: ['angle.gradian'],
        factor: .9,
        symbol: 'grad'
    },
]

export const PRESSURE = [
    // the reference for factor is bar
    {
        name: ['pressure.bar'],
        factor: 1,
        symbol: 'bar'
    },
    {
        name: ['pressure.poundPerSquareInch'],
        factor: 0.0689476,
        symbol: 'psi'
    },
    {
        name: ['pressure.atmosphere'],
        factor: 1.01325,
        symbol: 'atm'
    },
    {
        name: ['pressure.torr'],
        factor: 0.00133322,
        symbol: 'Torr'
    },
    {
        name: ['pressure.pascal'],
        factor: 0.00001,
        symbol: 'Pa'
    },
]

export const SPEED = [
    // the reference for factor is m/s
    {
        name: ['speed.milesperhour'],
        factor: 0.44704,
        symbol: 'mph'
    },
    {
        name: ['speed.footpersecond'],
        factor: 0.3048,
        symbol: 'ft/s'
    },
    {
        name: ['speed.meterpersecond'],
        factor: 1,
        symbol: 'm/s'
    },
    {
        name: ['speed.kmperhour'],
        factor: 0.277778,
        symbol: 'km/h'
    },
    {
        name: ['speed.knot'],
        factor: 0.514444,
        symbol: 'kn'
    },
]

export const TIME = [
    // the reference for factor is hour
    {
        name: ['time.millisecond'],
        factor: 0.000000277777,
        symbol: 'ms'
    },
    {
        name: ['time.second'],
        factor: 0.000277778,
        symbol: 's'
    },
    {
        name: ['time.minute'],
        factor: 0.0166667,
        symbol: 'min'
    },
    {
        name: ['time.hour'],
        factor: 1,
        symbol: 'h'
    },
    {
        name: ['time.day'],
        factor: 24,
        symbol: 'd'
    },
    {
        name: ['time.week'],
        factor: 168,
        symbol: 'w'
    },
    {
        name: ['time.month'],
        factor: 730,
        symbol: 'M'
    },
    {
        name: ['time.year'],
        factor: 8760,
        symbol: 'a'
    },
    {
        name: ['time.decade'],
        factor: 87600,
        symbol: 'dec'
    },
    {
        name: ['time.century'],
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
        name: ['temperature.celsius'],
        factor: 1,
        symbol: '℃',
        formulaFrom: fromCToC.toString(),
        formulaTo: fromCToC.toString(),
    },
    {
        name: ['temperature.kelvin'],
        factor: 1,
        symbol: 'K',
        formulaFrom: fromKToC.toString(),
        formulaTo: fromCToK.toString(),
    },
    {
        name: ['temperature.fahrenheit'],
        factor: 1,
        symbol: '℉',
        formulaFrom: fromFToC.toString(),
        formulaTo: fromCToF.toString(),
    },
]
