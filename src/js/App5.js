import React from 'react';
import logo from './logo.svg';
import {Route, Link, Router} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import './App5.scss';


function App(props) {
  return (
    <body className="n_news fs2 as_mp_layout">
      <div className="end_container">

        <header role="banner" className="as_gnb as_type_a">
          <div className="header_inner" style={{color:"#1641A8"}}>
            <div className="Ngnb IS_FIXED">
              <div id="_OFFICE_HEADER" className="office_header _OFFICE_HEADER">
                <div className="ofhd_float" style={{ backgroundColor: "#1641A8" }}>
                  <div className="ofhd_float_inner">
                    <a href="#" className="ofhd_float_back _BACK" data-clk="back">이전 페이지</a>
                    <div className="ofhd_float_head">
                      <div className="ofhd_float_head_left">
                        <a href="https://www.naver.com" className="ofhd_n_link" data-clk="gnb.naver"></a>
                        <a href="https://news.naver.com" className="ofhd_news_link" data-clk="gnb.news"></a>
                      </div>
                      <h1 id="_OFFICE_HEADER_TITLE" className="ofhd_float_title">
                        <a href="https://media.naver.com/press/056" className="ofhd_float_title_text" data-clk="logo">
                          <div className="ofhd_float_title_thumb">
                            <img className="ofhd_float_title_img _LAZY_LOADING _LAZY_LOADING_INIT_HIDE" alt="KBS" src="https://mimgnews.pstatic.net/image/upload/office_logo/056/2025/03/07/logo_056_100_20250307145641.png"/>
                          </div>
                          <span className="ofhd_float_title_text_press">KBS</span>
                            </a>
                          </h1>
                    </div>
                    <div className="ofhd_float_subscribe _CHANNEL_BUTTON_WRAP">
                      <button type="button" className="_channel_add ofhd_float_subscribe_btn _CHANNEL_BUTTON _CHANNEL_ADD" data-clk-add="chmain056" data-clk-remove="chdelete056" data-text="구독" data-delay="1000" data-notification="true" data-notification-clk="notru">
                        구독
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
            <div id="_LNB_PARENT_WRAP" className="Nlnb is_fixed" style={{ zIndex: 3000, color: "#1641A8" }}>
              <div id="_LNB_WRAP" className="Nlnb_menu Ntype_scroll" style={{ position: "relative", touchAction: "pan-y pinch-zoom" }}>
                <div id="_LNB" className="Nlnb_menu_inner">
                  <ul className="Nlnb_menu_list" role="tablist">
                    <li className="Nlist_item _LNB_ITEM" role="presentation">
                      <a href="https://media.naver.com/press/056" className="Nitem_link" role="tab" aria-selected="false" data-clk="prs_hom.mm">
                        <span className="Nitem_link_menu">주요뉴스</span>
                      </a>
                    </li>
                    <li className="Nlist_item _LNB_ITEM is_new" role="presentation">
                      <a href="https://media.naver.com/press/056/live" className="Nitem_link" role="tab" aria-selected="false" data-clk="prs_hom.live">
                        <span className="Nitem_link_menu">생중계</span>
                      </a>
                    </li>
                    <li className="Nlist_item _LNB_ITEM" role="presentation">
                      <a href="https://media.naver.com/press/056/issue" className="Nitem_link" role="tab" aria-selected="false" data-clk="prs_hom.section">
                        <span className="Nitem_link_menu">이슈</span>
                      </a>
                    </li>
                    <li className="Nlist_item _LNB_ITEM" role="presentation">
                      <a href="https://media.naver.com/press/056/shortform" className="Nitem_link" role="tab" aria-selected="false" data-clk="prs_hom.section">
                        <span className="Nitem_link_menu">클립</span>
                      </a>
                    </li>
                    <li className="Nlist_item _LNB_ITEM" role="presentation">
                      <a href="https://media.naver.com/press/056?sid=100#lnb" className="Nitem_link" role="tab" aria-selected="false" data-clk="prs_hom.section">
                        <span className="Nitem_link_menu">정치</span>
                      </a>
                    </li>
                    <li className="Nlist_item _LNB_ITEM" role="presentation">
                      <a href="https://media.naver.com/press/056?sid=101#lnb" className="Nitem_link" role="tab" aria-selected="false" data-clk="prs_hom.section">
                        <span className="Nitem_link_menu">경제</span>
                      </a>
                    </li>
                    <li className="Nlist_item _LNB_ITEM" role="presentation">
                      <a href="https://media.naver.com/press/056?sid=102#lnb" className="Nitem_link" role="tab" aria-selected="false" data-clk="prs_hom.section">
                        <span className="Nitem_link_menu">사회</span>
                      </a>
                    </li>
                    <li className="Nlist_item _LNB_ITEM" role="presentation">
                      <a href="https://media.naver.com/press/056?sid=103#lnb" className="Nitem_link" role="tab" aria-selected="false" data-clk="prs_hom.section">
                        <span className="Nitem_link_menu">생활</span>
                      </a>
                    </li>
                    <li className="Nlist_item _LNB_ITEM is_active" role="presentation">
                      <a href="https://media.naver.com/press/056?sid=104#lnb" className="Nitem_link" role="tab" aria-selected="true" data-clk="prs_hom.section">
                        <span className="Nitem_link_menu">세계</span>
                      </a>
                    </li>
                    <li className="Nlist_item _LNB_ITEM" role="presentation">
                      <a href="https://media.naver.com/press/056?sid=105#lnb" className="Nitem_link" role="tab" aria-selected="false" data-clk="prs_hom.section">
                        <span className="Nitem_link_menu">IT</span>
                      </a>
                    </li>
                    <li className="Nlist_item _LNB_ITEM" role="presentation">
                      <a href="https://media.naver.com/tv/056" className="Nitem_link" role="tab" aria-selected="false" data-clk="prs_hom.section">
                        <span className="Nitem_link_menu">저녁방송</span>
                      </a>
                    </li>
                    <li className="Nlist_item _LNB_ITEM" role="presentation">
                      <a href="https://media.naver.com/press/056/ranking" className="Nitem_link" role="tab" aria-selected="false" data-clk="prs_hom.section">
                        <span className="Nitem_link_menu">랭킹</span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </header>
        <div id="ct_wrap" className="ct_wrap">
          <div className="ct_scroll_wrapper">
            <div id="newsct" className="newsct_wrapper _GRID_TEMPLATE_COLUMN _STICKY_CONTENT" role="main">
              <div id="ct" className="newsct">
                <div className="media_end_head go_trans">
                  <div className="media_end_head_top _LAZY_LOADING_WRAP" data-show-type="block">
                    <a href="http://news.kbs.co.kr/" className="media_end_head_top_logo">
                      <img height="32" alt="KBS" title="KBS" className="media_end_head_top_logo_img light_type _LAZY_LOADING _LAZY_LOADING_INIT_HIDE _LAZY_LOADING_ERROR_HIDE" src="https://mimgnews.pstatic.net/image/upload/office_logo/056/2025/03/07/logo_056_101_20250307145641.png" />
                      <img height="32" alt="KBS" title="KBS" className="media_end_head_top_logo_img dark_type _LAZY_LOADING _LAZY_LOADING_INIT_HIDE _LAZY_LOADING_ERROR_HIDE" src="https://mimgnews.pstatic.net/image/upload/office_logo/056/2025/03/07/dark_logo_056_101_20250307145641.png" />
                    </a>
                    <div className="media_end_head_channel">
                      <button type="button" className="media_end_head_channel_button _TOGGLE" data-target="_PICK_LAYER_056_0012001848">
                        <i className="media_end_head_channel_pick">PICK</i>
                        <i className="media_end_head_channel_info">안내</i>
                      </button>
                    </div>
                  </div>
                  <h2 id="title_area" className="media_end_head_headline"><span>규모 8.8 강진이 깨웠나…캄차카 화산, 수백년 만에 분화 [잇슈 SNS]</span></h2>
                </div>
                <div id="contents" className="newsct_body">
                  <div id="newsct_article" className="newsct_article _article_body">
                    <article id="dic_area" className="go_trans _article_content">
                      <br/>
                      <br/>
                      전 세계 소셜미디어와 인터넷 세상에서 어떤 이슈와 영상들이 주목을 받았을까요?
                      <br/>
                      <br/>
                      첫 번째는 수백 년 만에 다시 깨어난 러시아 캄차카반도 화산입니다. 
                      <br/>
                      <br/>
                      거대 괴물처럼 살아 움직이는 회색빛 연기 기둥이 무서운 기세로 하늘을 뒤덮습니다.
                      <br/>
                      <br/>
                      현지 시각 2일 러시아 동부 캄차카반도의 크라셰닌니코프 화산이 수백 년 만에 분화했습니다.
                      <br/>
                      <br/>
                      높이 천 8백여 미터의 크라셰닌니코프 화산은 기관별로 기록이 엇갈리긴 하나 대략 15~16세기를 끝으로 활동이 잠잠했는데요.
                      <br/>
                      <br/>
                      그렇게 잠자고 있던 화산이 최소 470여 년, 최대 600년 만에 다시 깨어난 겁니다.
                      <br/>
                      <br/>
                      현지 당국은 "화산재 기둥이  6천 미터까지 치솟은 걸로 추정된다"며 "화산재가 태평양을 통해  동쪽으로 확산 중이나 이동 경로에 거주 지역은 없다고 전했는데요.
                      <br/>
                      <br/>
                      더불어 수백 년 만에 일어난 이날 분화를 두고 사흘 전 캄차카반도를 강타한 규모 8.8의 대지진과 관련이 있을 수 있다고 덧붙였습니다.
                      <br/>
                      <div className="artical-btm" style={{ textAlign: "left" }}>
                        <br />
                        ■ 제보하기
                        <br />
                        ▷ 전화 : 02-781-1234, 4444
                        <br />
                        ▷ 이메일 : <span data-type="ore" data-lang="en">kbs</span>1234@<span data-type="ore" data-lang="en">kbs.co.kr</span>
                        <br />
                        ▷ 카카오톡 : <span data-type="ore" data-lang="en">'KBS</span>제보' 검색, 채널 추가
                        <br />
                        ▷ 네이버, 유튜브에서 <span data-type="ore" data-lang="en">KBS</span>뉴스를 구독해주세요!
                        <br />
                        <br />
                      </div>
                    </article>
                  </div>
                  <div className="byline">
                    <p className="byline_p">
                      <span className="byline_s">KBS</span>
                    </p>
                  </div>
                  <div className="copyright">
                    <div className="c_inner">
                      <p className="c_text">Copyright ⓒ KBS. All rights reserved. 무단 전재, 재배포 및 이용(AI 학습 포함) 금지</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="outside_area _OUTSIDE_AREA">
              <div className="outside_area_inner _GRID_TEMPLATE_COLUMN_ASIDE _OUTSIDE_AREA_INNER">
                <div className="rankingnews mobile_hidden _TEMPLATE">
                  <div className="ra_head">
                    <strong class="ra_title"><em class="ra_highlight">KBS</em> 헤드라인</strong>
                  </div>
                  <div className="ra_area">
                    <div className="flick">
                      <div className="flick-container">
                        <div className="flick-panel">
                          <ul className="rankning_list">
                            <li className="rl_item _LAZY_LOADING_WRAP" data-loading-error-allowed="true">
                              <a href="/article/056/0012014994" className="rl_link_end _NLOG_IMPRESSION" data-clk="art.phead" data-imp-gdid="88000114_000000000000000012014994" data-imp-url="https://n.news.naver.com/article/056/0012014994" data-imp-index="1">
                                <div className="rl_content">
                                  <p className="rl_txt">강훈식 비서실장도 출국…“한 마디라도 더 설득하려면 당연히 가야” [지금뉴스]</p>
                                  <div className="rl_time">41분전</div>
                                </div>
                                <div className="rl_img _LAZY_LOADING_ERROR_HIDE">
                                  <div className="rl_border">
                                    <img data-scroll="true" className="_LAZY_LOADING" width="95" height="65" alt="" src="https://mimgnews.pstatic.net/image/origin/056/2025/08/24/12014994.jpg?type=nf190_130&ut=20250824161214" />
                                    <span className="rl_btn_play"><em className="blind">재생하기</em></span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="rl_item _LAZY_LOADING_WRAP" data-loading-error-allowed="true">
                              <a href="/article/056/0012014994" className="rl_link_end _NLOG_IMPRESSION" data-clk="art.phead" data-imp-gdid="88000114_000000000000000012014994" data-imp-url="https://n.news.naver.com/article/056/0012014994" data-imp-index="1">
                                <div className="rl_content">
                                  <p className="rl_txt">강훈식 비서실장도 출국…“한 마디라도 더 설득하려면 당연히 가야” [지금뉴스]</p>
                                  <div className="rl_time">41분전</div>
                                </div>
                                <div className="rl_img _LAZY_LOADING_ERROR_HIDE">
                                  <div className="rl_border">
                                    <img data-scroll="true" className="_LAZY_LOADING" width="95" height="65" alt="" src="https://mimgnews.pstatic.net/image/origin/056/2025/08/24/12014994.jpg?type=nf190_130&ut=20250824161214" />
                                    <span className="rl_btn_play"><em className="blind">재생하기</em></span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="rl_item _LAZY_LOADING_WRAP" data-loading-error-allowed="true">
                              <a href="/article/056/0012014994" className="rl_link_end _NLOG_IMPRESSION" data-clk="art.phead" data-imp-gdid="88000114_000000000000000012014994" data-imp-url="https://n.news.naver.com/article/056/0012014994" data-imp-index="1">
                                <div className="rl_content">
                                  <p className="rl_txt">강훈식 비서실장도 출국…“한 마디라도 더 설득하려면 당연히 가야” [지금뉴스]</p>
                                  <div className="rl_time">41분전</div>
                                </div>
                                <div className="rl_img _LAZY_LOADING_ERROR_HIDE">
                                  <div className="rl_border">
                                    <img data-scroll="true" className="_LAZY_LOADING" width="95" height="65" alt="" src="https://mimgnews.pstatic.net/image/origin/056/2025/08/24/12014994.jpg?type=nf190_130&ut=20250824161214" />
                                    <span className="rl_btn_play"><em className="blind">재생하기</em></span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="rl_item _LAZY_LOADING_WRAP" data-loading-error-allowed="true">
                              <a href="/article/056/0012014994" className="rl_link_end _NLOG_IMPRESSION" data-clk="art.phead" data-imp-gdid="88000114_000000000000000012014994" data-imp-url="https://n.news.naver.com/article/056/0012014994" data-imp-index="1">
                                <div className="rl_content">
                                  <p className="rl_txt">강훈식 비서실장도 출국…“한 마디라도 더 설득하려면 당연히 가야” [지금뉴스]</p>
                                  <div className="rl_time">41분전</div>
                                </div>
                                <div className="rl_img _LAZY_LOADING_ERROR_HIDE">
                                  <div className="rl_border">
                                    <img data-scroll="true" className="_LAZY_LOADING" width="95" height="65" alt="" src="https://mimgnews.pstatic.net/image/origin/056/2025/08/24/12014994.jpg?type=nf190_130&ut=20250824161214" />
                                    <span className="rl_btn_play"><em className="blind">재생하기</em></span>
                                  </div>
                                </div>
                              </a>
                            </li>
                            <li className="rl_item _LAZY_LOADING_WRAP" data-loading-error-allowed="true">
                              <a href="/article/056/0012014994" className="rl_link_end _NLOG_IMPRESSION" data-clk="art.phead" data-imp-gdid="88000114_000000000000000012014994" data-imp-url="https://n.news.naver.com/article/056/0012014994" data-imp-index="1">
                                <div className="rl_content">
                                  <p className="rl_txt">강훈식 비서실장도 출국…“한 마디라도 더 설득하려면 당연히 가야” [지금뉴스]</p>
                                  <div className="rl_time">41분전</div>
                                </div>
                                <div className="rl_img _LAZY_LOADING_ERROR_HIDE">
                                  <div className="rl_border">
                                    <img data-scroll="true" className="_LAZY_LOADING" width="95" height="65" alt="" src="https://mimgnews.pstatic.net/image/origin/056/2025/08/24/12014994.jpg?type=nf190_130&ut=20250824161214" />
                                    <span className="rl_btn_play"><em className="blind">재생하기</em></span>
                                  </div>
                                </div>
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr/>
      <footer id="footer" className="DefaultFooter_entertain_footer__FOen1">
        <div className="DefaultFooter_inner__WerkZ">
          <div className="DefaultFooter_notice_area__mWnDC">
            <em className="DefaultFooter_mark__txgHr">공지</em>
            <a href="https://blog.naver.com/naver_entermain/223703349971" className="DefaultFooter_notice__K26kb">
              새로워진 엔터 서비스를 경험해보세요!
            </a>
          </div>
        <div className="DefaultFooter_link_area__1QY+3">
      <div className="DefaultFooter_main_area__L4Lu8">
        <a href="https://nid.naver.com/nidlogin.login?svctype=262144&amp;url=https%3A%2F%2Fm.entertain.naver.com%2Fhome" className="DefaultFooter_link__XjZhU">
          로그인
        </a>
        <a href="https://m.naver.com/services.html?f=svc.sports" className="DefaultFooter_link__XjZhU sitemap">
          전체서비스
        </a>
      </div>
      <div className="DefaultFooter_sub_area__OiN1S">
        <div className="DefaultFooter_sub_link_group__fHNoq">
          <span className="DefaultFooter_sub_item__v5uQT">
            <a href="https://help.naver.com/alias/TVENT/TVENT.naver" className="DefaultFooter_link__XjZhU">
              엔터도움말
            </a>
          </span>
          <span className="DefaultFooter_sub_item__v5uQT">
            <a href="https://help.naver.com/alias/TVENT/TVENT_6.naver" className="DefaultFooter_link__XjZhU">
              오류신고
            </a>
          </span>
          <span className="DefaultFooter_sub_item__v5uQT">
            <a href="https://www.navercorp.com/naver/proposalGuide" className="DefaultFooter_link__XjZhU">
              제휴제안
            </a>
          </span>
        </div>
        <div className="DefaultFooter_sub_charge_group__b1hfJ">
          <span className="DefaultFooter_sub_item__v5uQT">
            <a href="https://news.naver.com/main/ombudsman/edit.naver?mid=omb" className="DefaultFooter_link__XjZhU">
              기사배열 원칙 책임자 : 김수향
            </a>
          </span>
          <span className="DefaultFooter_sub_item__v5uQT">청소년 보호 책임자 : 이정규</span>
        </div>
      </div>
    </div>
    <p className="DefaultFooter_copyright__oOtCc">
      본 콘텐츠의 저작권은 제공처 또는 네이버에 있으며, 이를 무단 이용하는 경우 저작권법 등에 따라 법적 책임을 질 수 있습니다.
    </p>
    <div className="DefaultFooter_corp_area__5CPIq">
      <a href="https://m.news.naver.com/ombudsman/index?mode=rule&amp;open=edit" className="DefaultFooter_link__XjZhU">
        서비스 운영 원칙
      </a>
      <span className="DefaultFooter_naver__CJHsi">
        ©<a href="https://www.navercorp.com/" className="DefaultFooter_link__XjZhU">NAVER Corp.</a>
      </span>
    </div>
  </div>
  </footer>
    </body>
  );
}

export default App;