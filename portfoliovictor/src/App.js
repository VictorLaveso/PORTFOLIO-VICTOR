import './App.css';
import './Text.css';
import './Background.css';
import { Grid, Flex, Row, Col, Button, Layout, Form, Input, InputNumber } from "antd";
import { LinkedinOutlined, GithubFilled } from '@ant-design/icons';
import bannerImage from './svg/banner-overlay-image.png';
import cssLogo from './svg/css.png';
import htmlLogo from './svg/html.png';
import reactLogo from './svg/react.png';
import javaLogo from './svg/java.png';
import sqlLogo from './svg/sqlServer.png';


function portfolioVictor() {

  const { Header, Footer, Content } = Layout;
  const headerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '60px',
    padding: '10px',
    color: '#fff',
    backgroundColor: '#212529',
    fontSize: '20px',
    backgroundImage: `url(${bannerImage})`,
    backdropFilter: 'blur(5px)',
  };
  const layoutStyle = {
    borderRadius: 8,
    overflow: 'hidden',
    width: 'calc(100% - 8px)',
    maxWidth: 'calc(100% - 8px)',
    backgroundColor: '#212529',
    backgroundImage: `url(${bannerImage})`,
    backdropFilter: 'blur(5px)',
  };
  const paddingHeaderContentStyle = {
    padding: '2% 10%',
  };
  const paddingContentStyle = {
    backgroundColor: '#1c1f22',
    padding: '2% 10%',
  };
  const footerStyle = {
    backgroundImage: `url(${bannerImage})`,
    backdropFilter: 'blur(5px)',
    padding: '2% 10%',
  };

  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 16,
    },
  };
  
  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!',
      number: '${label} is not a valid number!',
    },
    number: {
      range: '${label} must be between ${min} and ${max}',
    },
  };
  /* eslint-enable no-template-curly-in-string */
  
  const onFinish = (values) => {
    console.log(values);
  };
  
  return (
    <Flex wrap>
      <Layout style={layoutStyle}>

        <Header style={headerStyle}>
            <a style={{color: 'white'}}>Home</a>
            <a style={{color: 'white'}}>Services</a>
            <a style={{color: 'white'}}>About Me</a>
            <a style={{color: 'white'}}>Projects</a>
            <button>Contact Me</button>
        </Header>



        <Content className="full-screen-content" style={paddingHeaderContentStyle}>
          <Row gutter={[16, 16]}>
            <Col className='articleStyle' xs={24} sm={24} md={24} lg={12}>
              <div className='headerContentStyle'>
                <p className='pMainArticleStyle'>Hay' i m Victor

                </p>
                <p className='pSecundaryArticleStyle'>I’m a Web developer & I’m very passionate and dedicated to my work.
                  I have acquired the skills and knowledge necessary to make your project a success.
                </p>
                <div className='flat-under'>
                  <div className='grow-container'>
                    <a href="#" className='to-linkedin circle-button'>
                      <i className="fa fa-linkedin fa-fw" aria-hidden="true"><LinkedinOutlined className="custom-icon" /></i>
                    </a>
                  </div>
                  <div className='grow-container'>
                    <a href="#" className='to-reddit circle-button'>
                      <i className="fa fa-reddit-alien fa-fw" aria-hidden="true"><GithubFilled className="custom-icon"/></i>
                    </a>
                  </div>  
                </div>
                <Row>
                  <Col className='articleStyle'>
                    <Button>About Me</Button>
                  </Col>
                  <Col className='articleStyle'>
                    <Button>My works</Button>
                  </Col>
                </Row>
              </div>
              <Row gutter={[64]} className='articleStyle-2'>
                <Col className='articleStyle'>
                <p className='pSecundaryArticleStyle-2'>Date of Birthday</p>
                <p className='pSecundaryArticleStyle'>20 April 2003</p>
                </Col>
                <Col className='articleStyle'>
                <p className='pSecundaryArticleStyle-2'>Experience</p>
                <p className='pSecundaryArticleStyle'>1+ Years</p>
                </Col>
              </Row>
            </Col>
            <Col className='articleStyle' xs={24} sm={24} md={24} lg={12}>
              <div className='headerContentStyle'>
                <p className='pSecundaryArticleStyle'>...
                </p>
              </div>
            </Col>
          </Row>
        </Content>



        
          <Row gutter={[16, 16]} className='aboutMe'>
            <Col className='contentAbout' xs={24} sm={24} md={24} lg={12}>
              <div className='headerContentStyle'>
                <p className='pMainArticleStyle'>
                  About Me
                </p>
                <div  className='headerContentDevloper'>
                  <p className='pSecundaryArticleStyle-2blue'>I AM A FULLSTACK DEVLOPER</p>
                </div>
                <p className='pSecundaryArticleStyle'>My name is Hevin. I have been studying UI UX Design since October 2020. I like creating a cool design project. 
                  <br></br> 
                  <br></br>
                  Donec imperdiet risus at tortor consequat maximus et eget magna. Cras ornare sagittis augue, id sollicitudin justo tristique ut. Nullam ex enim, euismod vel bibendum ultrices, fringilla vel eros. Donec euismod leo lectus, et euismod metus euismod sed. Quisque quis suscipit ipsum, at pellentesque velit. Duis a congue sem.
                </p>
              </div>  
            </Col>
            <Col className='contentAbout' xs={24} sm={24} md={24} lg={12}>
              <div className='headerContentStyle'>
                <p className='pAboutTitleStyle-3'>
                  Skills
                </p>
                <Row gutter={[16, 16]} className="">
                  <Col className="">
                    <div className="skills">
                      <img src={htmlLogo} alt="HTML logo"/>
                      <p className='pSecundaryArticleStyle-2black'>HTML</p>
                    </div>
                  </Col>
                  <Col className="">
                    <div className="skills"> 
                      <img src={cssLogo} alt="CSS logo"/>
                      <p className='pSecundaryArticleStyle-2black'>CSS</p>
                    </div>
                  </Col>
                  <Col className="">
                    <div className="skills">
                      <img src={reactLogo} alt="React logo"/>
                      <p className='pSecundaryArticleStyle-2black'>REACT</p>
                    </div>
                  </Col>
                  <Col className="">
                    <div className="skills">
                      <img src={javaLogo} alt="Java logo"/>
                      <p className='pSecundaryArticleStyle-2black'>JAVA</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        

        
          <Row gutter={[64, 16]} className='aboutMe'>
            <Col className='articleStyle' xs={24} sm={24} md={12} lg={8}>
                <p className='pAboutTitleStyle-3'>Experience</p>
            <Row gutter={[32, 16]}>
              <Col className='experience-EducationContentStyle align-items' xs={6} sm={6} md={6} lg={6}>
                <p className='pSecundaryArticleStyle-2normal'>In 2024</p>
              </Col>
              <Col className='experience-EducationContentStyle'  xs={18} sm={18} md={18} lg={18}>
                <p className='pSecundaryArticleStyle'>Moniloc</p>
                <p className='pSecundaryArticleStyle'>Fullstack Devloper</p>
              </Col>
            </Row>
            </Col>


            <Col className='articleStyle' xs={24} sm={24} md={12} lg={8}>
                <p className='pAboutTitleStyle-3'>Education</p>
              <Row gutter={[32, 16]}>
                <Col className='experience-EducationContentStyle' xs={6} sm={6} md={6} lg={6}>
                  <p className='pSecundaryArticleStyle-2normal'>2021-2022</p>
                </Col>
                <Col className='experience-EducationContentStyle' xs={18} sm={18} md={18} lg={18}>
                  <p className='pSecundaryArticleStyle'>Systems Development</p>
                  <p className='pSecundaryArticleStyle-2normal'>University Paulista - UNIP</p>
                  <p className='pSecundaryArticleStyle-2normal'>Ribeirão Preto - São Paulo</p>
                </Col>
              </Row>  
            </Col>


            <Col className='articleStyle' xs={24} sm={24} md={24} lg={8}>
            
            </Col>
          </Row>
        

          <Row gutter={[64, 16]} className='servicesOffer'>
            <Col className='articleStyle' xs={24} sm={24} md={12} lg={12}>
              <div className='headerContentStyle'>
                  <p className='pMainArticleStyle'>
                    Services i offer
                  </p>
                  <div  className='headerContentDevloper'>
                    <p className='pSecundaryArticleStyle-2blue'>Services</p>
                  </div>
                  <p className='pSecundaryArticleStyle'>My name is Hevin. I have been studying UI UX Design since October 2020. I like creating a cool design project. 
                  </p>
              </div>  
            </Col>
            <Col className='articleStyle' xs={24} sm={24} md={12} lg={12}>
              <Row gutter={[32, 16]}>
                  
                <Col className='services-ContentStyle' span={24}>
                  <p className='pServicesrticleStyle'>Front-End Development</p>
                  <p className='pServicesrticleStyle-2blue'>Web UI/UX Design</p>
                </Col>

                <Col className='services-ContentStyle' span={24}>
                  <p className='pServicesrticleStyle'>Back-End Development</p>
                  <p className='pServicesrticleStyle-2blue'>API Creation - Database Management</p>
                </Col>

                <Col className='services-ContentStyle' span={24}>
                  <p className='pServicesrticleStyle'>DevOps</p>
                  <p className='pServicesrticleStyle-2blue'>Server Configuration - CI/CD</p>
                </Col>

                <Col className='services-ContentStyle' span={24}>
                  <p className='pServicesrticleStyle'>Consulting and Planning</p>
                  <p className='pServicesrticleStyle-2blue'>Code Review - Automated Testing</p>
                </Col>
              </Row>  
            </Col>
          </Row>


          <Footer className='footerStyle'>
            <Row gutter={[64, 16]}>
              <Col className='articleStyle' xs={24} sm={24} md={12} lg={12}>
                <div className='headerContentStyle'>
                    <p className='pAboutTitleStyle-3'>
                      Lets Discuss Your Project
                    </p>
                    <div  className='headerContentDevloper'>
                      <p className='pSecundaryArticleStyle-2blue'>CONTACT ME</p>
                    </div>
                    <Col className='services-ContentStyle' span={24}>
                    <p className='pServicesrticleStyle-2blue'>EMAIL</p>
                    <p className='pSecundaryArticleStyle'>victorhugolavezo@gmail.com</p>
                    </Col>
                    <Col className='services-ContentStyle' style={{borderBottom: "1px solid rgba(255, 255, 255, 0.2)"}} span={24}>
                    <p className='pServicesrticleStyle-2blue'>LOCATION</p>
                    <p className='pSecundaryArticleStyle'>Pradópolis, São Paulo, Brazil</p>
                    </Col>
                </div>  
              </Col>
              <Col className='articleStyle' xs={24} sm={24} md={12} lg={12}>
                <div className='headerContentStyle'>
                    <p className='pMainArticleStyle'>
                      Fill the Form
                    </p>
                    <div  className='headerContentDevloper'>
                      <p className='pSecundaryArticleStyle-2blue'>Services</p>
                    </div>
                      <Form
                        {...layout}
                        name="nest-messages"
                        onFinish={onFinish}
                        style={{
                          maxWidth: 600,
                        }}
                        validateMessages={validateMessages}
                      >
                        <div style={{borderBottom: "1px solid rgba(255, 255, 255, 0.2)"}}>
                        <Form.Item
                          name={['user', 'name']}
                          rules={[
                            {
                              required: true,
                            },
                          ]}
                        >
                          <Input 
                          className="hidden-input"
                          placeholder="Your Full Name"
                          />
                        </Form.Item>
                        </div>
                        <div style={{borderBottom: "1px solid rgba(255, 255, 255, 0.2)"}}>
                        <Form.Item
                          name={['user', 'email']}
                          rules={[
                            {
                              type: 'email',
                            },
                          ]}
                        >
                          <Input 
                          className="hidden-input"
                          placeholder="Email Address"
                          />
                        </Form.Item>
                        </div>
                        <div style={{borderBottom: "1px solid rgba(255, 255, 255, 0.2)"}}>
                        <Form.Item name={['user', 'introduction']}>
                          <Input.TextArea 
                          className="hidden-input"
                          placeholder="Your Message"
                          />
                        </Form.Item>
                        </div>
                        <Form.Item
                          wrapperCol={{
                            ...layout.wrapperCol,
                            offset: 8,
                          }}
                        >
                          <Button type="primary" htmlType="submit">
                            Submit
                          </Button>
                        </Form.Item>
                      </Form>
                </div>  
              </Col>
            </Row>
          </Footer>
      </Layout>
    </Flex>
  );
}
export default portfolioVictor;
