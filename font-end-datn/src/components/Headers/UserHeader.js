import { Button, Container, Row, Col } from "reactstrap";

const UserHeader = () => {
  return (
    <>
      <div
        className="header pb-8 pt-5 pt-lg-8 d-flex align-items-center"
        style={{
          minHeight: "600px",
          backgroundImage:
            "url(" +
            require("../../assets/img/theme/profile-cover.jpg").default +
            ")",
          backgroundSize: "cover",
          backgroundPosition: "center top",
        }}
      >
        {/* Mask */}
        <span className="mask bg-gradient-default opacity-8" />
        {/* Header container */}
        <Container className="d-flex align-items-center" fluid>
          <Row>
            <Col lg="7" md="10">
              <h1 className="display-2 text-white">Xin chào TenTk</h1>
              <p className="text-white mt-0 mb-5">
                Đây là trang hồ sơ của bạn. Bạn có thể thấy những tiến bộ mà bạn đã đạt được
                với công việc của bạn và quản lý các dự án hoặc nhiệm vụ được giao của bạn.
              </p>
              <Button
                color="info"
                href=""
                onClick={(e) => e.preventDefault()}
              >
                Chỉnh sửa
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default UserHeader;
