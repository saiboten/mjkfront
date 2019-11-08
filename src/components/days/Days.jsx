import { Block, Flex } from 'jsxstyle';
var React = require('react');
var DaySelector = require('./day/DaySelector')
var GuessDay = require('./day/GuessDay');
var GuessStore = require('../../stores/GuessStore');
var DayStore = require('../../stores/DayStore');

export let Days = React.createClass({
    getInitialState() {
        return DayStore.getState();
    },

    componentDidMount() {
        DayStore.listen(this.onChange);
    },

    componentWillUnmount() {
        DayStore.unlisten(this.onChange);
    },

    onChange(state) {
        this.setState(state);
    },

    render() {
        console.log("Days props: ", this.props);

        return (
            <Block>
                <h1>Løsninger</h1>
                <Flex flexDirection="row" flexWrap="wrap" padding="10px">
                    {this.state.days.map((day, i) => {
                        if (day.realDate !== new Date(this.state.date).getDate().toString()) {
                            return <DaySelector key={day.id} answers={this.state.answers} user={this.state.user} today={this.state.today} date={this.state.date} day={day}/>;
                        }
                    })}
                </Flex>
            </Block>
        );
    }
});
