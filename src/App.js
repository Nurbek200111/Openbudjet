import './App.css';


import Cleave from 'cleave.js/react';
import uzb from './assets/uzb.png'
import rus from './assets/rus.png'
import girl from './assets/girl2.png'
import boy from './assets/boy.png'
import woman_2 from './assets/woman_2.png'
import phone from './assets/phone.png'
import xarita from './assets/xarita.png'
import oka from './assets/oka.png'
import opa2 from './assets/opa2.png'
import { useTranslation } from 'react-i18next'
import AOS from 'aos'
import 'aos/dist/aos.css'

import emailjs from 'emailjs-com';
// import 'semantic-ui-css/semantic.min.css';
import { Form, Input, TextArea, Button } from 'semantic-ui-react';
import Swal from 'sweetalert2';
import { useState } from 'react';


const SERVICE_ID = "service_9elghc8";
const TEMPLATE_ID = "template_o2hb6ck";
const USER_ID = "WSRBV5ZOthSftBlU0";

function App() {
  AOS.init();

  const { t, i18n } = useTranslation();
  const { language } = i18n

  const [phoheNumber, setPhoneNumber] = useState('')

  const changeLanguage = (til) => {
    i18n.changeLanguage(til)
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, USER_ID)
      .then((result) => {
        console.log(result.text);
        Swal.fire({
          icon: 'success',
          title: 'Сообщение успешно отправлено'
        })
      }, (error) => {
        console.log(error.text);
        Swal.fire({
          icon: 'error',
          title: 'Ooops, something went wrong',
          text: error.text,
        })
      });
    e.target.reset()
  };

  return (
    <div className="App">
      <div className='open_rasrochka'>
        <div className='open_navbar'>
          <div className='container'>
            <div className='nav'>
              <div className={(language === 'ru') && 'active'} onClick={() => changeLanguage("ru")}>
                <img className='img-fluid' src={rus} alt="" />
                <p className='mt-2'>Русский</p>
              </div>
              <div className={(language === 'uz') && 'active'} onClick={() => changeLanguage("uz")}>
                <img className='img-fluid' src={uzb} alt="" />
                <p className='mt-2'>O'zbek</p>
              </div>
            </div>
          </div>
        </div>

        <div className='header mb-lg-5'>
          <div className='head_left container'>
            <div className='title_card' data-aos="fade-right">
              <div className='title_header'>
                <p className='title'>OPEN</p>
                <p className='open_text_color'>{t("H_title")}</p>
              </div>
              <div className='card_header' >
                <p className='header_description'>{t("H_subtitle1")}</p>
                <p className='header_description'>{t("H_subtitle2")}</p>
              </div>
            </div>
          </div>
          <div className='head_right'>
            <div className='head_bg' data-aos="fade-left">
              <img className='image_open' src={girl} alt="" />
            </div>
          </div>
        </div>

        <div className='section'>
          <div className='container'>
            <div className='row' data-aos="fade-up">
              <div className='col-12'>
                <div className='sect_1 open_text_color text-uppercase '>
                  <span className='me-3 line'></span>{t("H_3")}
                </div>
              </div>
            </div>
            <div className='row justify-content-end'>
              <div className='col-sm-8 col-10' data-aos="fade-left">
                {
                  (language === 'uz') &&
                  <div className='sect_2'>
                    <span className='first open_text_color text-uppercase fs-md-1'>
                      OPEN <span className='text-dark'> {t("H_4")} - </span>
                      {t("H_5")}
                    </span>
                    <div className='text-dark'>
                      {t("H_6")}
                    </div>
                  </div>
                }
                {
                  (language === 'ru') &&
                  <div className='sect_2'>
                    <span className='first text-uppercase fs-md-1'>
                      <span className='text-dark'> {t("H_4")} </span> <span className='open_text_color'>OPEN </span> -
                      <span className='open_text_color'>{t("H_5")}</span>
                    </span>
                    <div className='text-dark'>
                      {t("H_6")}
                    </div>
                  </div>
                }
              </div>
            </div>


            <div className='row sect_01'>
              <div className='col-12' data-aos="fade-up">
                <div className='left_section_3' data-aos="fade-up">
                  <span className='counter_client open_text_color' >01</span>
                  <span className='counter_description'>{t("H_7")}</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='section2  mb-5'>
          <div className='sec2_bg'></div>
          <div className='container'>
            <div className='row'>
              <div className='col-lg-8'>
                <div className='row'>
                  <div className='col-6'>
                    <div data-aos="fade-right">
                      <div className='d-md-flex'>
                        <p className='me-3 m-0 text-secondary'>{t("H_8")}</p>
                        <p className='m-0'>{t("H_9")} </p>
                      </div>
                      <div className='d-md-flex mt-3'>
                        <p className='me-3 m-0  text-secondary'>{t("H_10")}</p>
                        <p className='m-0'>{t('H_10_sub')}</p>
                      </div>
                      <div className='d-block d-sm-none mt-3'>
                        <p className='me-3 m-0  text-secondary'>{t("H_11")}</p>
                        <p className='m-0'>20%</p>
                      </div>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div data-aos="fade-right">
                      <div className='d-md-flex'>
                        <p className='me-3 m-0 text-secondary'>{t("H_8_1")}</p>
                        <p className='m-0'>{t("H_9_2")}</p>
                      </div>
                      <div className='d-md-flex mt-3'>
                        <p className='me-3 m-0 text-secondary'>{t("H_10")}</p>
                        <p className='m-0'>{t("H_9_3")}</p>
                      </div>
                      <div className='d-flex d-sm-none mt-3'>
                        <p className='me-3 m-0 text-secondary'>{t("H_12")}</p>
                        <p className='m-0'>{t("H_12_1")}</p>
                      </div>
                      <div className='d-flex d-sm-none mt-3'>
                        <p className='me-3 m-0 text-secondary'>{t("H_11")}</p>
                        <p className='m-0'>22%</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row align-items-end open_chart'>
                  <div className='col-6'>
                    <div className='set2_left' data-aos="fade-up">
                      <div className='d-flex align-items-center'>
                        <p className='d-none d-sm-flex sect2_left_static'>{t("H_11")} 20%</p>
                        <p className='d-flex d-sm-none sect2_left_static'>{t("H_11")} {t("H_11_sum")}</p>
                        
                        <p className='d-none d-sm-flex sum_right'>
                          {t('H_11_sum')}
                        </p>
                      </div>
                      <div className='d-flex align-items-center '>
                        <p className='sect2_left_static2 row'>
                          <span>{t("H_13")}</span>
                        
                        <span style={{color: "black"}} className='d-flex d-sm-none'>{t("H_11_sub_sum")} </span>
                         </p><br/>
                        <p className='d-none d-sm-flex sum_right'>
                          {t('H_11_sub_sum')}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-6'>
                    <div className='set2_left2' data-aos="fade-up">
                      <div className='d-flex align-items-center'>
                        <p className='d-none d-sm-flex sect2_left_statics'>{t("H_11")} 22%</p>
                        <p className='d-none d-sm-flex sum_right'>
                          {t('H_11_1')}
                        </p>
                      </div>
                      <div className='d-flex d-sm-none align-items-center'>
                        <p className='sect2_left_statics'>{t("H_11")} {t("H_11_1")}</p>
                        <p className='d-none d-sm-flex sum_right'>
                          {t('H_11_1')}
                        </p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <p className='sect2_left_statics2'>{t("H_12")}</p>
                        <p className='d-none d-sm-flex sum_right'>
                          {t('H_12_1')}
                        </p>
                      </div>
                      <div className='d-flex align-items-center'>
                        <p className='d-flex row align-items-center sect2_left_static3 '>
                          <span>{t("H_13")} </span>
                          <span style={{color:"black"}} className='d-flex d-sm-none'>{t("H_13_1")} </span>
                        
                        </p>
                        <p className='d-none d-sm-flex sum_right'>
                          {t('H_13_1')}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='row d-none'>
                  <div className='col-6'>
                    <div className='left_col6_card'>
                      <div data-aos="fade-right">
                        <div className='d-md-flex'>
                          <p className='me-3 m-0 text-secondary'>{t("H_8")}</p>
                          <p className='m-0'>{t("H_9")}</p>
                        </div>
                        <div className='d-md-flex mt-3'>
                          <p className='me-3 m-0  text-secondary'>{t("H_10")}</p>
                          <p className='m-0'>{t('H_10_sub')}</p>
                        </div>
                      </div>

                      <div className='set2_left' data-aos="fade-up">
                        <div className='d-flex align-items-center'>
                          <p className='sect2_left_static'>{t("H_11")} 20%</p>
                          <p className='d-none d-sm-flex sum_right'>
                            {t('H_11_sum')}
                          </p>
                        </div>
                        <div className='d-flex align-items-center'>
                          <p className='sect2_left_static2'>{t("H_13")}</p>
                          <p className='git  sum_right'>
                            {t('H_11_sub_sum')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className=' col-6'>
                    <div className='left_col6_card'>
                      <div data-aos="fade-right">
                        <div className='d-md-flex'>
                          <p className='me-3 m-0 text-secondary'>{t("H_8")}</p>
                          <p className='m-0'>{t("H_9_2")}</p>
                        </div>
                        <div className='d-md-flex mt-3'>
                          <p className='me-3 m-0 text-secondary'>{t("H_10")}</p>
                          <p className='m-0'>{t("H_9_3")}</p>
                        </div>
                      </div>

                      <div className='set2_left2' data-aos="fade-up">
                        <div className='d-flex align-items-center'>
                          <p className='sect2_left_statics'>{t("H_11")} 22%</p>
                          <p className='d-none d-sm-flex sum_right'>
                            {t('H_11_1')}
                          </p>
                        </div>
                        <div className='d-flex align-items-center'>
                          <p className='sect2_left_statics2'>{t("H_12")}</p>
                          <p className='d-none d-sm-flex sum_right'>
                            {t('H_12_1')}
                          </p>
                        </div>
                        <div className='d-flex align-items-center'>
                          <p className='sect2_left_static3'>{t("H_13")}</p>
                          <p className='d-none d-sm-flex sum_right'>
                            {t('H_13_1')}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='sect2_imgcard' data-aos="fade-left">
            <img className='' src={boy} alt="" />
          </div>
        </div>

        <div className='client_counter_section'>
          <div className='container'>
            <div className='row'>
              <div className='col-12' data-aos="fade-up">
                <div className='left_section_3' >
                  <span className='counter_client open_text_color'>02</span>
                  <span className='counter_description'>{t("H_14")}</span>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-sm-6 ' data-aos="fade-up">
                <div className='left_section_3' data-aos="fade-up">
                  <span className='counter_client open_text_color' >03</span>
                  <span className='counter_description'>{t("H_15")}</span>
                </div>
              </div>

              <div className='col-sm-6 right_section_3' data-aos="fade-up">
                <p className=''>{t("H_16")}</p>
              </div>
            </div>


            <div className='row'>
              <div className='col-sm-6' data-aos="fade-up">
                <div className='left_section_3' data-aos="fade-up">
                  <span className='counter_client open_text_color' >04</span>
                  <span className='counter_description'>{t("H_17")}</span>
                </div>
              </div>
              <div className='col-sm-6 right_section_3' data-aos="fade-up">
                <p className=''>{t("H_18")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='section_image'>
          <div className='sect_img_bg'></div>
          <div className='container section_image_mobile'>
            <div className='row  align-items-end justify-content-center'>
              <div className='col-sm-6 left_side'>
                <img className='open_woman' src={woman_2} alt="" />
              </div>
              <div className='col-sm-6'>
                <img className='open_mobile' src={phone} alt="" />
              </div>
            </div>
          </div>
        </div>


        <div className='client_counter_section'>
          <div className='container'>

            <div className='row'>
              <div className='col-sm-6' data-aos="fade-up">
                <div className='left_section_3' data-aos="fade-up">
                  <span className='counter_client open_text_color' >05</span>
                  <span className='counter_description'>{t("H_19")}</span>
                </div>
              </div>
              <div className='col-sm-6 right_section_3' data-aos="fade-up">
                <p className=''>{t("H_20")}</p>
              </div>
            </div>

            <div className='row'>
              <div className='col-sm-6' data-aos="fade-up">
                <div className='left_section_3' data-aos="fade-up">
                  <span className='counter_client open_text_color' >06</span>
                  <span className='counter_description'>{t("H_21")}</span>
                </div>
              </div>
              <div className='col-sm-6 right_section_3' data-aos="fade-up">
                <p className=''>{t("H_22")}</p>
              </div>
            </div>

            <div className='row'>
              <div className='col-sm-6' data-aos="fade-up">
                <div className='left_section_3' data-aos="fade-up">
                  <span className='counter_client open_text_color' >07</span>
                  <span className='counter_description'>{t("H_23")}</span>
                </div>
              </div>
              <div className='col-sm-6 right_section_3' data-aos="fade-up">
                <p className=''>{t("H_24")}</p>
              </div>
            </div>

            <div className='row'>
              <div className='col-12 col-md-6' data-aos="fade-right">
                <img className='img-fluid' src={xarita} alt="" />
              </div>
              <div className='col-12 col-md-6 ' data-aos="fade-left">
                <div className='d-flex'>
                  <div className='rectangle me-3 mt-1'>
                  </div>
                  <p>{t("H_25")}</p>
                </div>
                <div className='d-flex'>
                  <div className='rectangle2 me-3 mt-1'>
                  </div>
                  <p>{t("H_26")}</p>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-sm-6' data-aos="fade-up">
                <div className='left_section_3' data-aos="fade-up">
                  <span className='counter_client open_text_color' >08</span>
                  <span className='counter_description'>{t("H_27")}</span>
                </div>
              </div>
              <div className='col-sm-6 right_section_3' data-aos="fade-up">
                <p className=''>{t("H_28")}</p>
              </div>
            </div>
          </div>
        </div>

        <div className='section_contact'>

          <div className='container'>
            <div className='contact'>
              <div className='contact_card' data-aos="fade-up">
                <div className='row justify-content-between'>
                  <div className=' col-12 col-md-5 col-sm-6'>
                    <h5 className='title'>{t("H_29")}</h5>
                    <p className='description'>{t("H_30")}</p>
                  </div>
                  <div className=' col-12 col-md-5 col-sm-6'>
                    {/* <Form onSubmit={handleOnSubmit}>
                    <Form.Field
                      id='form-input-control-email'
                      control={Input}
                      name='user_email'
                      placeholder={t("H_32")}
                      required
                      icon='mail'
                      iconPosition='left'
                    />
                    <Form.Field
                      id='form-input-control-last-name'
                      control={Input}
                      name='user_name'
                      placeholder={t("H_32_1")}
                      required
                      icon='user circle'
                      iconPosition='left'
                    />
                    <Button type='submit' color='green'>Submit</Button>
                  </Form> */}
                    <form onSubmit={handleOnSubmit}>
                      <input name='to_name' className='d-none' defaultValue='Open Tech' type="text" placeholder={t("H_32")} />
                      <input name='from_name_company' className='input-group p-2' type="text" placeholder={t("H_32")} />
                      {/* <input name='contact_number' className='input-group p-2' type="text" placeholder={t("H_32_1")} value={phoheNumber} /> */}
                      <Cleave
                        className='form-control'
                        placeholder='Enter your credit card number'
                        options={{
                          prefix: '+998()',
                          delimiters: [' ', '(', ') ', '-'],
                          blocks: [4, 0, 2, 3, 2, 2]
                        }}
                        onChange={event => setPhoneNumber(`+${event.target.rawValue.substr(1)}`)}
                      />
                      <button type='submit' className='button'>{t("H_29")}</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='footer_info'>
          <div className='container'>
            <div className='row  mx-3' data-aos="fade-up">
              <div className='col-12'>
                <div className='sect_1 open_text_color text-uppercase '>
                  <span className='me-3 line'></span>{t("H_33")}
                </div>
              </div>
            </div>
            <div className='row justify-content-end  mx-3'>
              <div className='col-sm-8 col-12' data-aos="fade-left">
                {
                  (language === 'uz') &&
                  <div className='sect_2'>
                    <span className='first text-uppercase fs-md-1'>
                      <span className='text-dark'> {t("H_43")} </span>
                      <span className='open_text_color'>{t("H_44")} </span>
                      <span className=''>{t("H_45")}</span>
                      <span className='open_text_color'>{t("H_45_1")}</span>
                      <span className=''>{t("H_46")} </span>
                    </span>
                    <div className='text-dark'>
                      {t("H_35")}
                    </div>
                  </div>
                }
                {
                  (language === 'ru') &&
                  <div className='sect_2'>
                    <span className='first text-uppercase fs-md-1'>
                      <span className='text-dark'> {t("H_43")} </span>
                      <span className='open_text_color'>{t("H_44")} </span>
                      <span className=''>{t("H_45")}</span>
                      <span className='open_text_color'>{t("H_45_1")}</span>
                      <span className=''>{t("H_46")} </span>
                      <span className='open_text_color'>{t("H_47")}</span>
                    </span>
                    <div className='text-dark'>
                      {t("H_35")}
                    </div>
                  </div>
                }
              </div>
            </div>
            <div className='row client_features'>
              <div className='col-md-6 man d-none d-md-block' data-aos="fade-right">
                <div className='man_img_card'>
                  <img src={oka} alt="" />
                </div>
              </div>
              <div className='col-md-6' data-aos="fade-left">
                <div className='purple_card purple_card_left'>
                  <span>01</span>
                  <div className='w-75'>
                    <p className='mb-0 text-uppercase'>{t("H_36")}</p>
                    <p>{t("H_36_1")}</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6 man d-blok d-md-none purple_card_right' data-aos="fade-right">
                <div className='man_img_card'>
                  <img src={oka} alt="" />
                </div>
              </div>

              <div className='col-md-5'>
                <div className='purple_card_2 purple_card_right'>
                  <span>02</span>
                  <div className='w-75'>
                    <p className='mb-0 text-uppercase'>{t("H_37")}</p>
                    <p>{t("H_37_1")}</p>
                  </div>
                </div>
              </div>
              <div className='col-md-5'>
                <div className='gray_card purple_card_left'>
                  <span className='open_text_color '>03</span>
                  <div className='w-75'>
                    <p className='mb-0 text-uppercase'>{t("H_38")}</p>
                    <p>{t("H_38_1")}</p>
                  </div>
                </div>
              </div>
            </div>

            <div className='row'>
              <div className='col-xl-5 col-md-0 col-sm-0'></div>
              <div className='col-xl-3 col-md-6 col-sm-12'>
                <div className='gray_card purple_card_right'>
                  <span className='open_text_color'>04</span>
                  <div className='w-75'>
                    <p className='mb-0 text-uppercase'>{t("H_39")}</p>
                    <p>{t("H_39_1")}</p>
                  </div>
                </div>
              </div>
              <div className='col-xl-4 col-md-6 col-sm-12 opa'>
                <div className='opa2_img_card'>
                  <img src={opa2} alt="" />
                </div>
              </div>
            </div>


            <div className='row'>
              <div className='col-md-6'>
                <div className='gray_card d-none d-md-block'>
                  <span className='open_text_color'>05</span>
                  <div className='w-75'>
                    <p className='mb-0 text-uppercase'>{t("H_40")}</p>
                    <p>{t("H_40_1")}</p>
                  </div>
                </div>
                <div className='purple_card purple_card_right  d-md-none d-block'>
                  <span className='open_text_color'>05</span>
                  <div className='w-75'>
                    <p className='mb-0 text-uppercase'>{t("H_40")}</p>
                    <p>{t("H_40_1")}</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='purple_card d-none d-md-block'>
                  <span>06</span>
                  <div className='w-75'>
                    <p className='mb-0 text-uppercase'>{t("H_41")}</p>
                    <p>{t("H_41_1")}</p>
                  </div>
                </div>
                <div className='gray_card purple_card_left  d-md-none d-block'>
                  <span>06</span>
                  <div className='w-75'>
                    <p className='mb-0 text-uppercase'>{t("H_41")}</p>
                    <p>{t("H_41_1")}</p>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className='footer'>
          <div className='row'>
            <div className='col-12 d-flex justify-content-center align-items-center'>
              <div className='foot_info'>
                <p className='title'>{t("H_42")}</p>
                <p className='contact_info'> <i class="bi bi-envelope me-3"></i>hello@opentech.uz</p>
                <p className='contact_info'><i class="bi bi-telephone me-2"></i> +998 (90) 968-7881</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;
