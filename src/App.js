import React, { Component } from 'react';
import "./App.css";
import { Button, Modal } from 'react-bootstrap';




class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      show: false
    };
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  render() {

    return (
      <div className="container-fluid">
        <div className="row">
          <div className="fb-profile ">
            <img align="left" className="fb-image-lg" src="http://lorempixel.com/850/280/nightlife/5/" alt="Profile image example" />
            <img align="left" src="https://scontent.fktm6-1.fna.fbcdn.net/v/t1.15752-9/p1080x2048/91984733_146325710148288_8564006192261627904_n.jpg?_nc_cat=111&ccb=2&_nc_sid=ae9488&_nc_ohc=jhqky5qtm0YAX_SA04x&_nc_ht=scontent.fktm6-1.fna&tp=6&oh=7ce28f48fc5ec8a896cd41815ac494da&oe=60306DA2" className="rounded-circle " alt="Cinque Terre" width="280" height="236"></img>
            <Button variant="secondary"  className="float-right" type="button" size="lg" active>Follow me</Button>
            <div className="fb-profile-text" >
              <h1>Ram Krishna KC</h1>
              <h3>Developer</h3>
            </div>
          </div>
          <div className="container-fluid mt-5">
            <div className="row">
              <div className="col-sm-3 col-md-6 col-lg-4" >
                <div>
                  <Button bsStyle="primary" bsSize="large" onClick={this.handleShow}>Contact me</Button>
                  <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header closeButton>
                      <Modal.Title>Modal Heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                      <div class="container">
                        <h2 class="text-center">Contac Form</h2>
                        <div className="row justify-content-center " width="100">
                          <div class="col-12 col-md-8 col-lg-6 pb-5">
                            <form action="mail.php" method="post">
                              <div class="card border-primary rounded-0">
                                <div class="card-header p-0">
                                  <div class="bg-info text-white text-center py-2">
                                    <h3><i class="fa fa-envelope"></i> Contactanos</h3>
                                    <p class="m-0">Con gusto te ayudaremos</p>
                                  </div>
                                </div>
                                <div class="card-body p-3">


                                  <div class="form-group">
                                    <div class="input-group mb-2">
                                      <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="fa fa-user text-info"></i></div>
                                      </div>
                                      <input type="text" class="form-control" id="nombre" name="nombre" placeholder="Nombre y Apellido" required />
                                    </div>
                                  </div>
                                  <div class="form-group">
                                    <div class="input-group mb-2">
                                      <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="fa fa-envelope text-info"></i></div>
                                      </div>
                                      <input type="email" class="form-control" id="nombre" name="email" placeholder="ejemplo@gmail.com" required />
                                    </div>
                                  </div>

                                  <div class="form-group">
                                    <div class="input-group mb-2">
                                      <div class="input-group-prepend">
                                        <div class="input-group-text"><i class="fa fa-comment text-info"></i></div>
                                      </div>
                                      <textarea class="form-control" placeholder="Envianos tu Mensaje" required></textarea>
                                    </div>
                                  </div>

                                  <div class="text-center">
                                    <input type="submit" value="Enviar" class="btn btn-info btn-block rounded-0 py-2" />
                                  </div>
                                </div>

                              </div>
                            </form>
                          </div>
                        </div>
                      </div>

                    </Modal.Body>
                    <Modal.Footer>
                      <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                  </Modal>
                </div>
                <a href="https://res.cloudinary.com/demo/image/upload/fl_attachment/multi_page_pdf_1.pdf">
                <Button variant="success" className="mt-2" color="info">Download Curriculmn</Button></a><br></br>
                <Button variant="Light" className="mt-2" color="link">Follower 300</Button>
              </div>

              <div className="col-sm-9 col-md-6 col-lg-8"  >

                <ul class="nav nav-tabs mb-3" id="ex1" role="tablist">
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link active"
                      id="ex1-tab-1"
                      data-mdb-toggle="tab"
                      href="#ex1-tabs-1"
                      role="tab"
                      aria-controls="ex1-tabs-1"
                      aria-selected="true"
                    >Profile Info.</a
                    >
                  </li>
                  <li class="nav-item" role="presentation">
                    <a
                      class="nav-link"
                      id="ex1-tab-2"
                      data-mdb-toggle="tab"
                      href="#ex1-tabs-2"
                      role="tab"
                      aria-controls="ex1-tabs-2"
                      aria-selected="false"
                    >Information Detail</a
                    >
                  </li>
                </ul>



                <div class="tab-content" id="ex1-content">
                  <div
                    class="tab-pane fade show active"
                    id="ex1-tabs-1"
                    role="tabpanel"
                    aria-labelledby="ex1-tab-1"
                  >
                    ID <span className="spanitems ml-5">11773/073</span><br></br><br></br>
                    Name <span className="spanitems1 ml-5">Ram Krishna KC</span><br></br><br></br>
                    Email <span className="spanitem ml-5">krishrudra951@gmail.com</span><br></br><br></br>
                    Telephone <span className="ml-5">9826108645</span><br></br><br></br>
                    Profession <span className="spanitems2">Developer</span>
                  </div>
                  <div class="tab-pane fade" id="ex1-tabs-2" role="tabpanel" aria-labelledby="ex1-tab-2">
                    Tab 2 content
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

    );
  }
}

export default App;