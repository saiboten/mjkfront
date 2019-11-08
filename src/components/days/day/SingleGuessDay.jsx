import React from 'react';
import moment from 'moment';
import GuessDay from './GuessDay';
import AltContainer from 'alt-container';
import GuessStore from '../../../stores/GuessStore';

var Days = React.createClass({

    componentDidMount() {
        console.log("SingleGuessDay props");
    },

    render() {
        console.log("Props: ", this.props);
        return (
            <span>
                {this.props.days.map((day, i) => {
                    console.log("Reveal day as string + this.props.date: ", day.revealDateAsString, this.props.date);
                    if(day.revealDateAsString === this.props.date) {
                        return (<AltContainer store={GuessStore}>
                          <h1>Dagens oppgave</h1>
                            <div>
                                <h3>{moment(this.props.date).format("DD. MMMM")}</h3>
                                <GuessDay key={day.revealDateAsInt} today={this.props.today} date={this.props.date} day={day} answers={this.props.answers} user={this.props.user} />
                            </div>
                      </AltContainer>);
                    }
                })}
            </span>
        );
    }
});

export default Days;
