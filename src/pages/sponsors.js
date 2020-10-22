import React, { Component } from 'react'
import ReactModal from 'react-modal'
import { Link } from 'gatsby'

import Layout from '../components/layout'

ReactModal.setAppElement('#___gatsby')

class sponsors extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
      modalContent: "",
    }
  }
  handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <Layout>
        <div id="main">
        <div className="Container">
            <div className="SectionLayout 
            Background-color-blue-dark
            SectionLayout-padding-bottom-normal
            SectionLayout-padding-top-normal
            ">
                <div className="SectionHeading "><h2 className="Heading-tag
                SectionHeading-title
                ">Sponsors</h2>
            </div>
                
                <div className="Container"><div className="SectionHeading-body"><p className="text-align-center">Oktane20 is fueled by support of our sponsors. Generate business with a forward-thinking group of IT professionals, and increase exposure for your solutions and services. Make sure you are a part of more strategic IT discussions that center on building new and differentiated experiences in an increasingly mobile and cloud-centric world.<br></br>
            <br></br>
                Contact us at sponsorships@okta.com if you are interested in sponsoring.</p>

                <p className="text-align-center"><a href="https://www.okta.com/sites/default/files/Oktane20Live_Sponsorship_Prospectus_v5_03062020.pdf">View the sponsorship prospectus</a></p>
                </div></div></div>

                <div className="Container">
                <div className="Logo-set-section-paragraph">
                <h3 className="Heading-tag
                Logo-set-section-paragraph_title
                Heading-tag-circle-normal">Platinum Sponsors</h3>
                <div class="Logo-set-items flex-parent flex-cols-4 flex-direction-center">
                    <div class="Logo-set-item-wrapper Logo-set-items_size-large">
                        <Link className="Logo-set-item" to="#" onClick={() => {
                        this.setState({ modalContent: "awssponsor"});
                        this.handleModalOpen();
                        }}>
                        <div className="Logo-set-item-image-wrapper"><div className=" gatsby-image-wrapper" style={{position: "relative", overflow: "hidden"}} ><div aria-hidden="true" style={{paddingbottom: "60%"}}></div><img src={`/images/Oktane_Sponsor_AWS.png`} alt="AWS Sponsor" /></div></div>
                        </Link>
                        <Link className="Logo-set-item" to="#" onClick={() => {
                        this.setState({ modalContent: "bettercloudsponsor"});
                        this.handleModalOpen();
                        }}>
                        <div className="Logo-set-item-image-wrapper"><div className=" gatsby-image-wrapper" style={{position: "relative", overflow: "hidden"}} ><div aria-hidden="true" style={{paddingbottom: "60%"}}></div><img src={`/images/BetterCloud_logo_white.png`} alt="Better Cloud" /></div></div>
                        </Link>
                        <Link className="Logo-set-item" to="#" onClick={() => {
                        this.setState({ modalContent: "beyondsponsor"});
                        this.handleModalOpen();
                        }}>
                        <div className="Logo-set-item-image-wrapper"><div className=" gatsby-image-wrapper" style={{position: "relative", overflow: "hidden"}} ><div aria-hidden="true" style={{paddingbottom: "60%"}}></div><img src={`/images/BeyondID_Logo_White.png`} alt="AWS Sponsor" /></div></div>
                        </Link>
                        <Link className="Logo-set-item" to="#" onClick={() => {
                        this.setState({ modalContent: "boxsponsor"});
                        this.handleModalOpen();
                        }}>
                        <div className="Logo-set-item-image-wrapper"><div className=" gatsby-image-wrapper" style={{position: "relative", overflow: "hidden"}} ><div aria-hidden="true" style={{paddingbottom: "60%"}}></div><img src={`/images/Oktane20_Sponsor_Box.png`} alt="AWS Sponsor" /></div></div>
                        </Link>
                        <Link className="Logo-set-item" to="#" onClick={() => {
                        this.setState({ modalContent: "dropboxsponsor"});
                        this.handleModalOpen();
                        }}>
                        <div className="Logo-set-item-image-wrapper"><div className=" gatsby-image-wrapper" style={{position: "relative", overflow: "hidden"}} ><div aria-hidden="true" style={{paddingbottom: "60%"}}></div><img src={`/images/dropbox-new-white.png`} alt="AWS Sponsor" /></div></div>
                        </Link>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
        <ReactModal
          isOpen={this.state.isModalOpen && this.state.modalContent == "awssponsor"}
          onRequestClose={this.handleModalClose}
          contentLabel={this.modalContent}
          className = "Modal"
        >
          <div className="Modal-wrapper">
          <div className="Modal-close"><div className="Modal-close_wrapper"><button onClick={this.handleModalClose}><label><svg className="CloseIcon" x="0px" y="0px" viewBox="0 0 79.2 79.2"><line x1="23.3" y1="55.9" x2="55.9" y2="23.3"></line><line x1="23.3" y1="23.3" x2="55.9" y2="55.9"></line></svg></label><input type="submit" name="empty" value="1"></input></button></div></div>
            <div className="Modal-content">
              <div class="ModalPhotoBio ">
                <div aria-hidden="true" style={{width: "100%", paddingbottom: "60%"}}></div>
                <img src={`/images/Oktane_Sponsor_AWS.png`} alt="AWS Sponsor" />
              </div>
              <div>Donec aliquam libero nec eros ultricies dignissim. Proin hendrerit eros id quam iaculis, vitae ullamcorper erat sollicitudin. Praesent dictum ac lorem ac fringilla. Etiam id lobortis nunc. Phasellus vestibulum euismod gravida. Curabitur porttitor varius ante a vestibulum. Cras velit odio, elementum id ante eu, efficitur lobortis dui. Donec in magna et justo pretium tristique.</div>
            </div>`
          </div>
          
        </ReactModal>
        <ReactModal
          isOpen={this.state.isModalOpen && this.state.modalContent == "bettercloudsponsor"}
          onRequestClose={this.handleModalClose}
          contentLabel={this.modalContent}
          className = "Modal"
        >
          <div className="Modal-wrapper">
          <div className="Modal-close"><div className="Modal-close_wrapper"><button onClick={this.handleModalClose}><label><svg className="CloseIcon" x="0px" y="0px" viewBox="0 0 79.2 79.2"><line x1="23.3" y1="55.9" x2="55.9" y2="23.3"></line><line x1="23.3" y1="23.3" x2="55.9" y2="55.9"></line></svg></label><input type="submit" name="empty" value="1"></input></button></div></div>
            <div className="Modal-content">
              <div class="ModalPhotoBio ">
                <div aria-hidden="true" style={{width: "100%", paddingbottom: "60%"}}></div>
                <img src={`/images/BetterCloud_logo_white.png`} alt="Better Cloud Sponsor" />
              </div>
              <div>Donec aliquam libero nec eros ultricies dignissim. Proin hendrerit eros id quam iaculis, vitae ullamcorper erat sollicitudin. Praesent dictum ac lorem ac fringilla. Etiam id lobortis nunc. Phasellus vestibulum euismod gravida. Curabitur porttitor varius ante a vestibulum. Cras velit odio, elementum id ante eu, efficitur lobortis dui. Donec in magna et justo pretium tristique.</div>
            </div>`
          </div>
          
        </ReactModal>
        <ReactModal
          isOpen={this.state.isModalOpen && this.state.modalContent == "beyondsponsor"}
          onRequestClose={this.handleModalClose}
          contentLabel={this.modalContent}
          className = "Modal"
        >
          <div className="Modal-wrapper">
          <div className="Modal-close"><div className="Modal-close_wrapper"><button onClick={this.handleModalClose}><label><svg className="CloseIcon" x="0px" y="0px" viewBox="0 0 79.2 79.2"><line x1="23.3" y1="55.9" x2="55.9" y2="23.3"></line><line x1="23.3" y1="23.3" x2="55.9" y2="55.9"></line></svg></label><input type="submit" name="empty" value="1"></input></button></div></div>
            <div className="Modal-content">
              <div class="ModalPhotoBio ">
                <div aria-hidden="true" style={{width: "100%", paddingbottom: "60%"}}></div>
                <img src={`/images/BeyondID_Logo_White.png`} alt="Beyond ID Sponsor" />
              </div>
              <div>Donec aliquam libero nec eros ultricies dignissim. Proin hendrerit eros id quam iaculis, vitae ullamcorper erat sollicitudin. Praesent dictum ac lorem ac fringilla. Etiam id lobortis nunc. Phasellus vestibulum euismod gravida. Curabitur porttitor varius ante a vestibulum. Cras velit odio, elementum id ante eu, efficitur lobortis dui. Donec in magna et justo pretium tristique.</div>
            </div>`
          </div>
          
        </ReactModal>
        <ReactModal
          isOpen={this.state.isModalOpen && this.state.modalContent == "boxsponsor"}
          onRequestClose={this.handleModalClose}
          contentLabel={this.modalContent}
          className = "Modal"
        >
          <div className="Modal-wrapper">
          <div className="Modal-close"><div className="Modal-close_wrapper"><button onClick={this.handleModalClose}><label><svg className="CloseIcon" x="0px" y="0px" viewBox="0 0 79.2 79.2"><line x1="23.3" y1="55.9" x2="55.9" y2="23.3"></line><line x1="23.3" y1="23.3" x2="55.9" y2="55.9"></line></svg></label><input type="submit" name="empty" value="1"></input></button></div></div>
            <div className="Modal-content">
              <div class="ModalPhotoBio ">
                <div aria-hidden="true" style={{width: "100%", paddingbottom: "60%"}}></div>
                <img src={`/images/Oktane20_Sponsor_Box.png`} alt="BOX Sponsor" />
              </div>
              <div>Donec aliquam libero nec eros ultricies dignissim. Proin hendrerit eros id quam iaculis, vitae ullamcorper erat sollicitudin. Praesent dictum ac lorem ac fringilla. Etiam id lobortis nunc. Phasellus vestibulum euismod gravida. Curabitur porttitor varius ante a vestibulum. Cras velit odio, elementum id ante eu, efficitur lobortis dui. Donec in magna et justo pretium tristique.</div>
            </div>`
          </div>
          
        </ReactModal>
        <ReactModal
          isOpen={this.state.isModalOpen && this.state.modalContent == "dropboxsponsor"}
          onRequestClose={this.handleModalClose}
          contentLabel={this.modalContent}
          className = "Modal"
        >
          <div className="Modal-wrapper">
          <div className="Modal-close"><div className="Modal-close_wrapper"><button onClick={this.handleModalClose}><label><svg className="CloseIcon" x="0px" y="0px" viewBox="0 0 79.2 79.2"><line x1="23.3" y1="55.9" x2="55.9" y2="23.3"></line><line x1="23.3" y1="23.3" x2="55.9" y2="55.9"></line></svg></label><input type="submit" name="empty" value="1"></input></button></div></div>
            <div className="Modal-content">
              <div class="ModalPhotoBio ">
                <div aria-hidden="true" style={{width: "100%", paddingbottom: "60%"}}></div>
                <img src={`/images/dropbox-new-white.png`} alt="Dropbox Sponsor" />
              </div>
              <div>Donec aliquam libero nec eros ultricies dignissim. Proin hendrerit eros id quam iaculis, vitae ullamcorper erat sollicitudin. Praesent dictum ac lorem ac fringilla. Etiam id lobortis nunc. Phasellus vestibulum euismod gravida. Curabitur porttitor varius ante a vestibulum. Cras velit odio, elementum id ante eu, efficitur lobortis dui. Donec in magna et justo pretium tristique.</div>
            </div>`
          </div>
          
        </ReactModal>
      </Layout>
    )
  }
}

export default sponsors
