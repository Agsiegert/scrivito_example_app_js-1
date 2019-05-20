import * as React from "react";
import * as Scrivito from "scrivito";
import axios from 'axios'

const formAPI = '/.netlify/functions/signup'

class MailchimpSignUpWidget extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      loading: false,
      success: false,
      error: false,
      errorMsg: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ email: event.target.value });
  }

  handleSubmit(event) {
    const email = this.state.email


    if (!email) {
      alert('Please enter your email')
    }

    this.setState({
      loading: true
    })

    formHandler(email).then(() => {
      this.setState({
        success: true,
        loading: false
      })
    }).catch((e) => {
      this.setState({
        errorMsg: e.errorMessage,
        error: true,
        loading: false
      })
    })
    event.preventDefault();
  }

  renderForm() {
    const widget = this.props.widget;
    const { success, loading, errorMsg } = this.state
    const buttonText = (loading) ? "..." : widget.get("buttonText")
    const handler = (loading) ? loadNote : this.handleSubmit

    /* if they submitted the form, show thanks */
    if (success) {
      return (
        <Scrivito.ContentTag
        content={widget}
        attribute="successMessage"
      />
      )
    }

    return (
      <form onSubmit={handler}>
        <input
          type="email"
          name="email"
          className="form-control form-control-lg"
          value={this.state.email}
          onChange={this.handleChange}
          placeholder="Enter your email address..."
          required
        />
        <button className="btn btn-primary btn-block" type="submit">
          {buttonText}
        </button>
        <span>
          {errorMsg}
        </span>
      </form>
    )
  }
  render() {
    return (
      <div>
        {this.renderForm()}
      </div>
    )
  }
};

function formHandler(email) {
  const data = {
    email: email
  }
  return axios({
    method: 'post',
    url: formAPI,
    data: data,
  })
}

function loadNote() {
  console.log('submission in progress')
}

Scrivito.provideComponent(
  "MailchimpSignUpWidget",
  MailchimpSignUpWidget
);
