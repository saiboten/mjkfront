import { Block } from 'jsxstyle';

import React from 'react';
import AltContainer from 'alt-container';
import DayStore from '../../../stores/DayStore';
import DayActions from '../../../actions/DayAction';
import Days from './../Days';
import SingleGuessDay from './SingleGuessDay';

var SingleGuessDayContainer = React.createClass({

    componentDidMount() {

    },

    render() {
        return (
            <Block className="guess-day__container" margin="0 auto" padding="5px"  borderRadius="5px" backgroundColor="white">
                <AltContainer store={DayStore}>
                    <SingleGuessDay />
                </AltContainer>
            </Block>
        );
    }
});

export default SingleGuessDayContainer;
