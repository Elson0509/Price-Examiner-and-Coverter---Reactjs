import {memo} from 'react';
import {library} from '@fortawesome/fontawesome-svg-core'
import {
    faBoxes, //boxes
    faBalanceScaleRight, //balance-scale-right
    faArrowsAltH, //arrows-alt-h
    faWineBottle, //wine-bottle
    faRulerCombined, //ruler-combined
    faExchangeAlt, //exchange-alt
    faDatabase, //database
    faLightbulb, //lightbulb
    faWaveSquare, //wave-square
    faGasPump, //gas-pump
    faDrawPolygon, //draw-polygon
    faGem, //gem
    faTachometerAlt, //tachometer-alt
    faClock, //clock
    faThermometerThreeQuarters, //thermometer-three-quarters
    faSortDown, //sort-down
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';

library.add(
    faBoxes, //boxes
    faBalanceScaleRight, //balance-scale-right
    faArrowsAltH, //arrows-alt-h
    faWineBottle, //wine-bottle
    faRulerCombined, //ruler-combined
    faExchangeAlt, //exchange-alt
    faDatabase, //database
    faLightbulb, //lightbulb
    faWaveSquare, //wave-square
    faGasPump, //gas-pump
    faDrawPolygon, //draw-polygon
    faGem, //gem
    faTachometerAlt, //tachometer-alt
    faClock, //clock
    faThermometerThreeQuarters, //thermometer-three-quarters
    faSortDown, //sort-down
);

const Icon = (props) => {
    return (
        props.icon != null ?
            <FontAwesomeIcon 
                icon={props.icon} 
                size={props.size || '1x'} 
                color={props.color || 'black'}
            />
        :
        null
    );
};

export default memo(Icon);