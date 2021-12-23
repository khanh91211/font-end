import {
  Button,
  Card,
  CardHeader,
  CardBody,
  FormGroup,
  Form,
  Input,
  Container,
  Row,
  Col, Alert, Modal, ModalHeader, ModalFooter
} from "reactstrap";
// core components
import UserHeader from "components/Headers/UserHeader.js";

const Profile = () => {
  const alertUpdate = () => {
    alert("Chỉnh sửa thành công!");
  }
  return (
    <>
      <UserHeader />
      {/* Page content */}
      <Container className="mt--7" fluid>
        <Row>
          <Col className="order-xl-2 mb-5 mb-xl-0" xl="12">
            <Card className="card-profile shadow">
              <Row className="justify-content-center">
                <Col className="order-lg-2" lg="3">
                  <div className="card-profile-image">
                    <a href="#pablo" onClick={(e) => e.preventDefault()}>
                      <img
                        className="rounded-circle"
                        src={
                          require("../assets/img/theme/user-icon.jpg")
                            .default
                        }
                      />
                    </a>
                  </div>
                </Col>
              </Row>
              <CardHeader className="text-center border-0 pt-8 pt-md-4 pb-0 pb-md-4">
              </CardHeader>
              <CardBody className="pt-0 pt-md-4">
                <Row>
                  <div className="col">
                    <div className="card-profile-stats d-flex justify-content-center mt-md-5">
                      <div>
                        <Row>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-username"
                              >
                                Username
                              </label>
                              <Input
                                className="form-control-alternative"
                                defaultValue="lucky.jesse"
                                id="input-username"
                                placeholder="Novelweb"
                                type="text"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-email"
                              >
                                Email
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-email"
                                placeholder="Novelweb@gmail.com"
                                type="email"
                              />
                            </FormGroup>
                          </Col>
                          <Col lg="4">
                            <FormGroup>
                              <label
                                className="form-control-label"
                                htmlFor="input-birth"
                              >
                                Ngày sinh
                              </label>
                              <Input
                                className="form-control-alternative"
                                id="input-birth"
                                placeholder="Novelweb@gmail.com"
                                type="email"
                              />
                            </FormGroup>
                          </Col>
                        </Row>
                      </div>
                    </div>
                  </div>
                </Row>
                <div className="text-center">
                  <hr className="my-4" />
                  <label
                    className="form-control-label"
                    htmlFor="input-description"
                  >
                    Mô tả
                  </label>
                  <Input
                    className="form-control-alternative"
                    id="input-description"
                    placeholder="Mô tả"
                    type="text"
                  />
                  <div>
                    <Button
                      color="info"
                      onClick={alertUpdate}
                    >
                      Chỉnh sửa
                    </Button>

                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </Container>

      
      {/* <Modal
        isOpen
        toggle={function noRefCheck() { }}
      >
        <ModalHeader
          close={<button className="close" onClick={function noRefCheck() { }}>×</button>}
          toggle={function noRefCheck() { }}
        >
          Modal title
        </ModalHeader>
        <ModalFooter>
          {' '}
          <Button onClick={function noRefCheck() { }}>
            Cancel
          </Button>
        </ModalFooter>
      </Modal> */}
    </>
  );
};

export default Profile;
