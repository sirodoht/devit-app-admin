import React, { Component } from 'react';
import * as firebase from 'firebase';

import './Attendees.css';

class Attendees extends Component {
  constructor() {
    super();
    this.state = {
      attendees: [],
      activeFieldValue: '',
    }
    // this.handleChange = this.handleChange.bind(this);
  };

  loadData() {
    // Initialize Firebase
    const config = {
    };
    firebase.initializeApp(config);

    // Get a reference to the database service
    const database = firebase.database();
    // Reference to the /attendees/ database path.
    var attendeesRef = database.ref('attendees');
    // Make sure we remove all previous listeners.
    attendeesRef.off();

    // Loads the attendees and listen for new ones.
    const setMessage = function (data) {
      var newItem = data.val();
      this.setState((prevState) => {
        const newAttendees = prevState.attendees.slice(0);
        newAttendees.push({
          email: newItem.email,
        });
        return {
          attendees: newAttendees,
        }
      })
    }.bind(this);
    attendeesRef.on('child_added', setMessage);
    attendeesRef.on('child_changed', setMessage);

  };

  componentDidMount() {
    this.loadData();
  };

  saveField(event) {
    // 'Enter' key code is 13
    if (event.keyCode !== 13) {
      return;
    }

    // const newValue = event.target.value;

    this.setState(function (prevState) {
      const newAttendees = prevState.attendees.slice();
      console.log('newAttendees:', newAttendees);
    })

    // var attendeesRef = database.ref('attendees');
    // var newRef = attendeesRef.push();
    // newPostRef.set({
    //     // ...
    // });
  }

  render() {
    const display = this.state.attendees.map((singleAttnd) => {
      return (
        <div className="col-lg-6" key={singleAttnd.email}>
          <input type="text" defaultValue={singleAttnd.email} onKeyDown={this.saveField.bind(this)} className="form-control array-field" />
        </div>
      );
    });
    return (
      <div className="col-lg-8 col-lg-offset-2">
        {display}
      </div>
    )

  }
}

export default Attendees;
