import React, { Component } from "react";
import callApi from "../../utils/apiCaller";
import { toast } from "react-toastify";
export default class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
  }
  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  };
  handleSubmit = async event => {
    event.preventDefault();
    const { name, email, subject, message } = this.state;
    const newSubject = subject ? subject : null;
    const newMessage = message ? message : null;
    if(!name || !email) {
      return toast.error('Error! name and email is required')
    }
    const newContact = {
      name,
      email,
      subject: newSubject,
      message: newMessage
    };
    const res = await callApi("contacts", "POST", newContact, null);
    if (res && res.status === 200) {
      toast.success("Sending contact is successfully");
      this.setState({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    }
  };
  render() {
    const { name, email, subject, message } = this.state;
    return (
      <div className="contact-main-page mt-60 mb-40 mb-md-40 mb-sm-40 mb-xs-40">
        <div className="container">
          <div className="row">
            <div className="col-lg-5 offset-lg-1 col-md-12 order-1 order-lg-2">
              <div className="contact-page-side-content">
                <h3 className="contact-page-title">About Us</h3>
                <p className="contact-page-message mb-25">
                  T-STORE: Prestigious technology equipment system
                  <br/>
                  Main transacttion office
                  <br/>
                  No.4/1 lane 55 Huynh Thuc Khang - Dong Da - Ha Noi
                  <br/>
                  Tel: 090.44.224578 
                  <br/>
                  <h5>Description: <p>Located right next to the foot of VNPT Ha Noi building, intersection between Huynh Thuc Khang and Nguyen Chi Thanh intersection.</p></h5>
                <br/>
                  
                  </p>
                <div className="single-contact-block">
                  <h4>
                    <i className="fa fa-fax" /> Address
                  </h4>
                  <p> Address of branches of T-STORE.Vn
                  <br/>
                 <h6> Ha Noi: </h6>
                  
                  -Facility 1: No.4/1 lane 55 Huynh Thuc Khang - Dong Da - Ha Noi
                  <br/>
                  Tel: 02435190988 - 0965151509
                  <br/>
                  -Factory 2: 69 Kham Thien - Dong Da
                  <br/>
                  Tel: 0965151409
                  
                  <br/>
                  <h6>Ho Chi Minh:</h6>
                  
                  -Facility 3: 779 Le Hong Phong - Ward 12 - District 10
                  <br/>
                  Tel: 0981009638 - 0981546483
                  <br/>
                  -Factory 4: 135 Nguyen Thai Son - Ward 4 - Go Vap District
                  <br/>
                  Tel: 0981548482 - 0981546483

                  </p>
                </div>
                <div className="single-contact-block">
                  {/* <h4>
                    <i className="fa fa-phone" /> Phone
                  </h4> */}
                  <h4>Service Center</h4>

                  <p> No.4/1 lane 55 Huynh Thuc Khang - Dong Da - Ha Noi</p>
                  <p>Tel: 02439964587</p>
                </div>
                <div className="single-contact-block last-child">
                  <h4>
                    <i className="fa fa-envelope-o" /> Email
                  </h4>
                  <p>techstore@gmail.com</p>
                  <h6>Thank you very much visiting our Website!</h6>
                  <p>For any contact information, questions or requests for advice on services and products, please fill out the form below and send it to us. Sincerely thank!</p>

                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 order-2 order-lg-1">
              <div className="contact-form-content pt-sm-55 pt-xs-55">
                <h3 className="contact-page-title">Tell Us Your Message</h3>
                <div className="contact-form">
                  <form onSubmit={event => this.handleSubmit(event)}>
                    <div className="form-group">
                      <label>
                        Your Name <span className="required">*</span>
                      </label>
                      <input
                        onChange={this.handleChange}
                        type="text"
                        name="name"
                        value={name}
                      />
                    </div>
                    <div className="form-group">
                      <label>
                        Your Email <span className="required">*</span>
                      </label>
                      <input
                        onChange={this.handleChange}
                        type="email"
                        name="email"
                        value={email}
                      />
                    </div>
                    <div className="form-group">
                      <label>Subject</label>
                      <input
                        onChange={this.handleChange}
                        type="text"
                        name="subject"
                        value={subject}
                      />
                    </div>
                    <div className="form-group mb-30">
                      <label>Your Message</label>
                      <textarea
                        onChange={this.handleChange}
                        name="message"
                        value={message}
                      />
                    </div>
                    <div className="form-group">
                      <button
                        type="submit"
                        value="submit"
                        className="li-btn-3"
                        name="submit"
                      >
                        send
                      </button>
                    </div>
                  </form>
                </div>
                <p className="form-messege" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
