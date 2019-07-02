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
      errorMsg: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      email: event.target.value,
      errorMsg: [],
      error: false
    });
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
        errorMsg: JSON.stringify(e.response.data.status),
        error: true,
        loading: false
      })
    })
    event.preventDefault();
  }

  renderForm() {
    const widget = this.props.widget;
    const { success, loading, error, errorMsg } = this.state
    const buttonText = (loading) ? "..." : (error) ? errorMsg : widget.get("buttonText")
    const handler = (loading) ? loadNote : this.handleSubmit
    const btnColor = (error) ? "warning" : "primary"
    const err = (error)
      ? <div className="alert alert-warning">{errorMsg}</div>
      : null

    /* if they submitted the form, show thanks */
    if (success) {
      return (
        <Scrivito.ContentTag
        tag="h2"
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
        <button className={`btn btn-${btnColor} btn-block`} type="submit">
          {buttonText}
        </button>
        {err}
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
