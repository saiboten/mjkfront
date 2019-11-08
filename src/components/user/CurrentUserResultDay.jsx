import React from 'react';
import moment from 'moment';

var CurrentUserResultDay = React.createClass({

    componentDidMount() {

    },

    render() {
      console.log("this.props.user", this.props.user);
      console.log("this.props.day", this.props.day);
      console.log("this.props.answers", this.props.answers);

      var answerComp = "";
      var answer = this.props.answers.filter(answer => {
        return answer.day === this.props.day.id && answer.correctSongAnswer;
      })[0];
      console.log('answer',answer);

      if(answer) {
          answerComp = (<p>{moment(this.props.day.revealDate).format('DD. MMMM')}: {answer.guessedSong} var riktig svar!</p>);
      }
      else {
          answerComp = (<p>{moment(this.props.day.revealDate).format('DD. MMMM')}: Du fant ikke riktig svar.</p>);
      }

      return (
        <div>
          <p>{answerComp}</p>
        </div>
        );
    }
});

export default CurrentUserResultDay;
