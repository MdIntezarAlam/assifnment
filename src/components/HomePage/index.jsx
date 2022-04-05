import React from 'react'
import PermIdentityIcon from '@material-ui/icons/PermIdentity';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import FileCopyIcon from '@material-ui/icons/FileCopy';
import { Button } from '@material-ui/core';
import g from '../../img/g.PNG'

import './style.css'
const HomePage = () => {
  return (
    <div className='homepage'>
      <div className="div_container">
        <div className="div1">
          <div className="div1_box">
            <div className="div1_img">
              <img src={g} alt="" className="div1_imgs" />
              <div className="div1_heading">Diane Cooper</div>
              <div className="div1_s_heading">dinae.cooper@example.com</div>
              <div className="div1_second_heading">
                <div className="post">
                  <div className="digit_post">15</div>
                  <div className="post_15">Post</div>
                </div>
                <div className="upcaming">
                  <div className="digit_post">2</div>
                  <div className="post_15">Post</div>
                </div>
              </div>
              <button className='div_1_btn'>Send Message</button>
            </div>
          </div>
        </div>
        <div className="div2">
          <div className="div2_box">
            <div className="div2_gender">
              <div className="div2_heading">
                <div className="gender_gender">Gender</div>
                <div className="gender_male">Female</div>
              </div>
              <div className="gender">
                <div className="gender_gender">Birthday</div>
                <div className="gender_male">feb 24th, 1997</div>
              </div>
              <div className="gender">
                <div className="gender_gender">Phone Number</div>
                <div className="gender_male">(91)234243423</div>
              </div>
            </div>
            <div className="div2_streat">
              <div className="div2_gender">
                <div className="streat_heading">
                  <div className="gender_gender">Streat Address</div>
                  <div className="gender_male">JL Diponegono 21</div>
                </div>
                <div className="div2_city">
                  <div className="gender_gender">City</div>
                  <div className="gender_citys">Cilocop</div>
                </div>
                <div className="gender">
                  <div className="gender_gender">Zip Code</div>
                  <div className="gender_male">6565655</div>
                </div>
              </div>
            </div>

            <div className="div_2_status">
              <div className="div_2_address">
                <div className="gender_gender">Streat Address</div>
                <div className="gender_status">JL Diponegono 21</div>
              </div>
              <div className="div_2_code">
                <div className="gender_gender">Zip Code</div>
                <div className="status_male">6565655</div>
              </div>
            </div>

          </div>
        </div>

        <div className="div3">
          <div className="div3_box">
            <div className="div3_top">
              <div className="top_heading">Notes</div>
              <div className="top_button">See All</div>
            </div>

            <div className="div3_notes_box">
              <div className="pragrapg">
                <p className="lorem">- Lorm sd sdf sdf s ddsfggggggggggg</p>
                <p className="lorem">- Lorm sd sdf sdf s ddsfgggggggggggg</p>
                <p className="lorem">- Lorm sd sdf sdf s ddfgssssss</p>
              </div>
              <div className="div3_btn"><button className='save_btn'>save notes</button></div>
            </div>
            <div className="second_paragraph">Lorem ipsum dolor, sit ameeius id illum prm.</div>
            <div className="third_div">
              <div className="div3_left">
                <div className="user_ico"><PermIdentityIcon /></div>
                <div className="user_name">Dr.Wiswas</div>
              </div>

              <div className="div3_right">20 Nov 19</div>
            </div>
          </div>
        </div>
      </div>
      {/* btn Page */}
      <div className="btnpage">
        <div className="btnpage_box_container">
          <div className="btn__left_box">
            <div className="left_heading_page">
              <div className="div_btn"><button className='div_btns'>Upcomming Appoinments</button></div>
              <div className="post_div">Post Appoinment</div>
              <div className="medical_div">Medical Record</div>
            </div>
            {/* middle Page */}
            <div className="btnpage_middlepage">
              <div className="middlepage_top">
                <div className="middle_lft">Root control Treatment</div>
                <div className="middle_righ">
                  <Button startIcon={<KeyboardArrowUpIcon />} className="middle_icons">
                    Show Previous Treatment
                  </Button>
                </div>
              </div>
              <div className="middle_middle">
                <div className="midlepage_line">
                  <div className="middlepage_left_right">
                    <div className="left_boxs">
                      <div className="left_box_one">
                        <div className="smae_heading">26 Nov 19</div>
                        <div className="sec_heading"> 09.00:10</div>
                      </div>
                      <div className="left_box_one">
                        <div className="smae_heading">Treatment</div>
                        <div className="openAccess">Open Access</div>
                      </div>
                      <div className="left_box_one">
                        <div className="smae_heading">Dentist</div>
                        <div className="sec_heading">Dr.Wishwas</div>
                      </div>
                      <div className="left_box_one">
                        <div className="smae_heading">Name</div>
                        <div className="sec_heading">Ramesh</div>
                      </div>
                    </div>
                    <div className="right_box">
                      <div className="left_box_one">
                        <div className="smae_heading">26 Nov 19</div>
                        <div className="sec_heading"> 09.00:10</div>
                      </div>
                      <div className="left_box_one">
                        <div className="smae_heading">Treatment</div>
                        <div className="openAccess">Open Access</div>
                      </div>
                      <div className="left_box_one">
                        <div className="smae_heading">Dentist</div>
                        <div className="sec_heading">Dr.Wishwas</div>
                      </div>
                      <div className="left_box_one">
                        <div className="smae_heading">Name</div>
                        <div className="sec_heading">Ramesh</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="btn_right_box">
            <div className="right_heading">
              <div className="fils">Files/Documents</div>
              <div className="addfiles"><FileCopyIcon className='file_icon' />Add Files</div>
            </div>
            <div className="secn_div">
              <div className="chekup_result"><FileCopyIcon className='f_ico' />  </div>
              <div className='result'>Check Up Result Pdf </div>
              <div className="pdfkb">335kb  </div>
            </div>

            <div className="secn_div2">
              <div className="chekup_result"><FileCopyIcon className='f_ico' />  </div>
              <div className='result'>Check Up Result Pdf </div>
              <div className="pdfkb">335kb  </div>
            </div>
            <div className="secn_div2">
              <div className="chekup_result"><FileCopyIcon className='f_ico' />  </div>
              <div className='result'>Check Up Result Pdf </div>
              <div className="pdfkb">335kb  </div>
            </div>
            <div className="secn_div2">
              <div className="chekup_result"><FileCopyIcon className='f_ico' />  </div>
              <div className='result'>Check Up Result Pdf </div>
              <div className="pdfkb">335kb  </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}
export default HomePage





