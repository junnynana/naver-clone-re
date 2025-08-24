import React from 'react';
import logo from './logo.svg';
import {Route, Link, Router} from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { BrowserRouter } from 'react-router-dom';

import './App2.ccss';


function App(props) {
  return (
    <body className="as_mp_layout body_main">
<div id="header">
  <div className="u_skip">
    <a href="#ct">본문 바로가기</a>
  </div>

  <section className="news_header">
    <header className="nh_header" role="banner">
      <div className="Ngnb">
        <div className="Ngnb_inner">
          <div className="Ngnb_both">
            <div className="Ngnb_left">
              <span className="Ngnb_logo">
                <a href="https://www.naver.com" className="Nlogo_link">
                  <span className="Nicon_logo">NAVER</span>
                </a>
              </span>
              <div className="Ngnb_service">
                <h1 className="Nservice_item">
                  <a href="https://news.naver.com">
                    <span className="Nicon_service">뉴스</span>
                  </a>
                </h1>
                <span className="Nservice_subitem">
                  <a href="https://entertain.naver.com/home">
                    <span className="Nicon_family Nicon_entertain">엔터</span>
                  </a>
                </span>
                <span className="Nservice_subitem">
                  <a href="https://sports.news.naver.com/index">
                    <span className="Nicon_family Nicon_sports">스포츠</span>
                  </a>
                </span>
                <span className="Nservice_subitem">
                  <a href="https://weather.naver.com/">
                    <span className="Nicon_family Nicon_weather">날씨</span>
                  </a>
                </span>
                <span className="Nservice_subitem">
                  <a href="https://contents.premium.naver.com/">
                    <span className="Nicon_family Nicon_premium">프리미엄</span>
                  </a>
                </span>
              </div>
              <div className="Nlnb _float_lnb">
                <div className="Nlnb_inner">
                  <div className="Nlnb_both">
                    <div className="Nlnb_left _lnb_scroll">
                      <div className="Nlnb_menu Ntype_scroll">
                        <div className="Nlnb_menu_inner _scroll" style={{ touchAction: "pan-y pinch-zoom", height: "46px", position: "relative", overflow: "hidden" }}>
                          <ul className="Nlnb_menu_list" role="menu" style={{ position: "absolute",transitionTimingFunction: "cubic-bezier(0.1, 0.57, 0.1, 1)",transitionDuration: "0ms",transform: "translate(0px, 0px)",}}>
                            <li className="Nlist_item is_active">
                              <a href="https://news.naver.com/?viewType=pc" className="Nitem_link" role="menuitem" aria-selected="true">
                                <span className="Nitem_link_menu">언론사별</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/section/100" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">정치</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/section/101" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">경제</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/section/102" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">사회</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/section/103" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">생활/문화</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/section/105" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">IT/과학</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/section/104" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">세계</span>
                              </a>
                            </li>
                            <li className="Nlist_item _isNew">
                              <a  href="https://news.naver.com/main/ranking/popularDay.naver" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">랭킹</span>
                              </a>
                            </li>
                            <li className="Nlist_item _isNew">
                              <a href="https://news.naver.com/newspaper/home?viewType=pc" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">신문보기</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/opinion/home" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">오피니언</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/main/tv/index.naver?mid=tvh" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">TV</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://news.naver.com/factcheck/main" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">팩트체크</span>
                              </a>
                            </li>
                            <li className="Nlist_item">
                              <a href="https://media.naver.com/algorithm" className="Nitem_link" role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">알고리즘 안내</span>
                              </a>
                            </li>
                            <li className="Nlist_item _isNew">
                              <a href="https://news.naver.com/ombudsman/errorArticleList" className="Nitem_link"  role="menuitem" aria-selected="false">
                                <span className="Nitem_link_menu">정정보도 모음</span>
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
    </header>
  </section>
  <div className="lnb">
    <span className="lnb_date">
      <strong>08</strong>.<strong>22</strong><span className="day">(금)</span></span>
    <ul class="lnb_side" tabindex="0">
      <li><a href="https://news.naver.com/main/officeList.naver" class="nclicks(slb.allmedia)" title="전체 언론사">전체 언론사</a></li>
      <li><a href="https://newsstand.naver.com/" class="nclicks(slb.newsstand)" title="뉴스스탠드" target="_blank">뉴스스탠드</a></li>
      <li><a href="https://newslibrary.naver.com/search/searchByDate.nhn" class="nclicks(slb.library)" title="라이브러리" target="_blank">라이브러리</a></li>
    </ul>
  </div>
</div>
<div id="ct_wrap" className="ct_wrap">
  <div className="ct_scroll_wrapper">
    <div className="column0">
      <div className="ct_snb">
        <h2 class="ct_snb_h2">
					<a href="/section/100" class="ct_snb_h2_a" data-clk="lmn_pol.home">정치</a>
				</h2>
        <ul class="ct_snb_nav">
					<li class="ct_snb_nav_item">
						<a href="/breakingnews/section/100/264" class="ct_snb_nav_item_link" data-clk="lmn_pol.mnl" data-rank="1">대통령실</a>
					</li>
					<li class="ct_snb_nav_item">
						<a href="/breakingnews/section/100/265" class="ct_snb_nav_item_link" data-clk="lmn_pol.mnl" data-rank="2">국회/정당</a>
					</li>
					<li class="ct_snb_nav_item">
						<a href="/breakingnews/section/100/268" class="ct_snb_nav_item_link" data-clk="lmn_pol.mnl" data-rank="3">북한</a>
					</li>
					<li class="ct_snb_nav_item">
						<a href="/breakingnews/section/100/266" class="ct_snb_nav_item_link" data-clk="lmn_pol.mnl" data-rank="4">행정</a>
					</li>
					<li class="ct_snb_nav_item">
						<a href="/breakingnews/section/100/267" class="ct_snb_nav_item_link" data-clk="lmn_pol.mnl" data-rank="5">국방/외교</a>
					</li>
					<li class="ct_snb_nav_item">
						<a href="/breakingnews/section/100/269" class="ct_snb_nav_item_link" data-clk="lmn_pol.mnl" data-rank="6">정치일반</a>
					</li>
				</ul>
      </div>
    </div>
    <div id="newsct" className="newsct_wrapper _GRID_TEMPLATE_COLUMN_STICKY_CONTENT" role="main">
      <div className="section_component as_section_headline _PERSIST_CONTENT">
        <div className="section_article as_headline _TEMPLATE">
          <div className="sa_head">
            <span className="sa_head_inner">
              <a href="#" className="sa_head_link _TOGGLE" data-classvalue="is_hidden" data-target="_SECTION_HEADLINE_INFO_l4ktv" data-clk="guide">헤드라인 뉴스 <i className="sa_head_icon">안내</i></a>
            </span>
            <div id="_SECTION_HEADLINE_INFO_l4ktv" className="sa_head_layer is_hidden">
              <div className="sa_head_layer_close">
                <button type="button" className="_TOGGLE" data-classvalue="is_hidden" data-target="_SECTION_HEADLINE_INFO_l4ktv">닫기</button>
              </div>
            </div>
          </div>
          <ul id="_SECTION_HEADLINE_LIST_l4ktv" className="sa_list">
            <li className="sa_item _SECTION_HEADLINE">
              <div className="sa_item_inner">
                <div className="sa_item_flex _LAZY_LOADING_WRAP">
                  <div className="sa_thumb _LAZY_LOADING_ERROR_HIDE">
                    <div className="sa_thumb_inner">
                      <a href="https://n.news.naver.com/mnews/article/009/0005546324" className="sa_thumb_link _NLOG_IMPRESSION" data-clk="pol.clart" data-imp-gdid="880000BC_000000000000000005546324" data-imp-url="https://n.news.naver.com/mnews/article/009/0005546324" data-imp-index="1">
                        <img className="_LAZY_LOADING _LAZY_LOADING_INIT_HIDE" width="110" height="75" alt="日 이시바 총리 “한일의 안정적 관계 발전은 지역 전체의 이익”" src="https://mimgnews.pstatic.net/image/origin/009/2025/08/23/5546324.jpg?type=nf220_150" />
                      </a>
                    </div>
                  </div>
                  <div className="sa_text">
                    <a href="https://n.news.naver.com/mnews/article/009/0005546324" className="sa_text_title _NLOG_IMPRESSION" data-clk="pol.clart" data-imp-gdid="880000BC_000000000000000005546324" data-imp-url="https://n.news.naver.com/mnews/article/009/0005546324" data-imp-index="1">
                      <strong className="sa_text_strong">日 이시바 총리 “한일의 안정적 관계 발전은 지역 전체의 이익”</strong>
                    </a>
                    <div className="sa_text_lede">북한 비핵화 위애 한미일 협조 중요 북한 납치문제와 대해서도 공동 노력 이시바 시게루 일본 총리가 “한국과 일본의 안정적인 관계 발전은 양국의 이익이며 지역 전체의 이익도 된다”며 “한미일 연계 강화도 매우 중요한</div>
                  <div className="sa_text_info">
                    <div className="sa_text_info_left">
                      <div className="sa_text_press">매일경제</div>
                        <a href="https://n.news.naver.com/mnews/article/comment/009/0005546324" className="sa_text_cmt _COMMENT_COUNT_LIST" style={{display: "none"}} data-ticket="news" data-object-id="news009,0005546324" data-zero-allow="false" data-processed="true"></a>
                    </div>
                    <div className="sa_text_info_right">
                      <a href="/cluster/c_202508231820_00000002/section/100?oid=009&amp;aid=0005546324" className="sa_text_cluster" data-clk="clcou">
                        <span className="sa_text_cluster_num">133</span>
                        <span className="blind">개의 관련뉴스 더보기</span>
                      </a>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="sa_item _SECTION_HEADLINE">
              <div className="sa_item_inner">
                <div className="sa_item_flex _LAZY_LOADING_WRAP">
                  <div className="sa_thumb _LAZY_LOADING_ERROR_HIDE">
                    <div className="sa_thumb_inner">
                      <a href="https://n.news.naver.com/mnews/article/009/0005546324" className="sa_thumb_link _NLOG_IMPRESSION" data-clk="pol.clart" data-imp-gdid="880000BC_000000000000000005546324" data-imp-url="https://n.news.naver.com/mnews/article/009/0005546324" data-imp-index="1">
                        <img className="_LAZY_LOADING _LAZY_LOADING_INIT_HIDE" width="110" height="75" alt="日 이시바 총리 “한일의 안정적 관계 발전은 지역 전체의 이익”" src="https://mimgnews.pstatic.net/image/origin/009/2025/08/23/5546324.jpg?type=nf220_150" />
                      </a>
                    </div>
                  </div>
                  <div className="sa_text">
                    <a href="https://n.news.naver.com/mnews/article/009/0005546324" className="sa_text_title _NLOG_IMPRESSION" data-clk="pol.clart" data-imp-gdid="880000BC_000000000000000005546324" data-imp-url="https://n.news.naver.com/mnews/article/009/0005546324" data-imp-index="1">
                      <strong className="sa_text_strong">日 이시바 총리 “한일의 안정적 관계 발전은 지역 전체의 이익”</strong>
                    </a>
                    <div className="sa_text_lede">북한 비핵화 위애 한미일 협조 중요 북한 납치문제와 대해서도 공동 노력 이시바 시게루 일본 총리가 “한국과 일본의 안정적인 관계 발전은 양국의 이익이며 지역 전체의 이익도 된다”며 “한미일 연계 강화도 매우 중요한</div>
                  <div className="sa_text_info">
                    <div className="sa_text_info_left">
                      <div className="sa_text_press">매일경제</div>
                        <a href="https://n.news.naver.com/mnews/article/comment/009/0005546324" className="sa_text_cmt _COMMENT_COUNT_LIST" style={{display: "none"}} data-ticket="news" data-object-id="news009,0005546324" data-zero-allow="false" data-processed="true"></a>
                    </div>
                    <div className="sa_text_info_right">
                      <a href="/cluster/c_202508231820_00000002/section/100?oid=009&amp;aid=0005546324" className="sa_text_cluster" data-clk="clcou">
                        <span className="sa_text_cluster_num">133</span>
                        <span className="blind">개의 관련뉴스 더보기</span>
                      </a>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="sa_item _SECTION_HEADLINE">
              <div className="sa_item_inner">
                <div className="sa_item_flex _LAZY_LOADING_WRAP">
                  <div className="sa_thumb _LAZY_LOADING_ERROR_HIDE">
                    <div className="sa_thumb_inner">
                      <a href="https://n.news.naver.com/mnews/article/009/0005546324" className="sa_thumb_link _NLOG_IMPRESSION" data-clk="pol.clart" data-imp-gdid="880000BC_000000000000000005546324" data-imp-url="https://n.news.naver.com/mnews/article/009/0005546324" data-imp-index="1">
                        <img className="_LAZY_LOADING _LAZY_LOADING_INIT_HIDE" width="110" height="75" alt="日 이시바 총리 “한일의 안정적 관계 발전은 지역 전체의 이익”" src="https://mimgnews.pstatic.net/image/origin/009/2025/08/23/5546324.jpg?type=nf220_150" />
                      </a>
                    </div>
                  </div>
                  <div className="sa_text">
                    <a href="https://n.news.naver.com/mnews/article/009/0005546324" className="sa_text_title _NLOG_IMPRESSION" data-clk="pol.clart" data-imp-gdid="880000BC_000000000000000005546324" data-imp-url="https://n.news.naver.com/mnews/article/009/0005546324" data-imp-index="1">
                      <strong className="sa_text_strong">日 이시바 총리 “한일의 안정적 관계 발전은 지역 전체의 이익”</strong>
                    </a>
                    <div className="sa_text_lede">북한 비핵화 위애 한미일 협조 중요 북한 납치문제와 대해서도 공동 노력 이시바 시게루 일본 총리가 “한국과 일본의 안정적인 관계 발전은 양국의 이익이며 지역 전체의 이익도 된다”며 “한미일 연계 강화도 매우 중요한</div>
                  <div className="sa_text_info">
                    <div className="sa_text_info_left">
                      <div className="sa_text_press">매일경제</div>
                        <a href="https://n.news.naver.com/mnews/article/comment/009/0005546324" className="sa_text_cmt _COMMENT_COUNT_LIST" style={{display: "none"}} data-ticket="news" data-object-id="news009,0005546324" data-zero-allow="false" data-processed="true"></a>
                    </div>
                    <div className="sa_text_info_right">
                      <a href="/cluster/c_202508231820_00000002/section/100?oid=009&amp;aid=0005546324" className="sa_text_cluster" data-clk="clcou">
                        <span className="sa_text_cluster_num">133</span>
                        <span className="blind">개의 관련뉴스 더보기</span>
                      </a>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="sa_item _SECTION_HEADLINE">
              <div className="sa_item_inner">
                <div className="sa_item_flex _LAZY_LOADING_WRAP">
                  <div className="sa_thumb _LAZY_LOADING_ERROR_HIDE">
                    <div className="sa_thumb_inner">
                      <a href="https://n.news.naver.com/mnews/article/009/0005546324" className="sa_thumb_link _NLOG_IMPRESSION" data-clk="pol.clart" data-imp-gdid="880000BC_000000000000000005546324" data-imp-url="https://n.news.naver.com/mnews/article/009/0005546324" data-imp-index="1">
                        <img className="_LAZY_LOADING _LAZY_LOADING_INIT_HIDE" width="110" height="75" alt="日 이시바 총리 “한일의 안정적 관계 발전은 지역 전체의 이익”" src="https://mimgnews.pstatic.net/image/origin/009/2025/08/23/5546324.jpg?type=nf220_150" />
                      </a>
                    </div>
                  </div>
                  <div className="sa_text">
                    <a href="https://n.news.naver.com/mnews/article/009/0005546324" className="sa_text_title _NLOG_IMPRESSION" data-clk="pol.clart" data-imp-gdid="880000BC_000000000000000005546324" data-imp-url="https://n.news.naver.com/mnews/article/009/0005546324" data-imp-index="1">
                      <strong className="sa_text_strong">日 이시바 총리 “한일의 안정적 관계 발전은 지역 전체의 이익”</strong>
                    </a>
                    <div className="sa_text_lede">북한 비핵화 위애 한미일 협조 중요 북한 납치문제와 대해서도 공동 노력 이시바 시게루 일본 총리가 “한국과 일본의 안정적인 관계 발전은 양국의 이익이며 지역 전체의 이익도 된다”며 “한미일 연계 강화도 매우 중요한</div>
                  <div className="sa_text_info">
                    <div className="sa_text_info_left">
                      <div className="sa_text_press">매일경제</div>
                        <a href="https://n.news.naver.com/mnews/article/comment/009/0005546324" className="sa_text_cmt _COMMENT_COUNT_LIST" style={{display: "none"}} data-ticket="news" data-object-id="news009,0005546324" data-zero-allow="false" data-processed="true"></a>
                    </div>
                    <div className="sa_text_info_right">
                      <a href="/cluster/c_202508231820_00000002/section/100?oid=009&amp;aid=0005546324" className="sa_text_cluster" data-clk="clcou">
                        <span className="sa_text_cluster_num">133</span>
                        <span className="blind">개의 관련뉴스 더보기</span>
                      </a>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="sa_item _SECTION_HEADLINE">
              <div className="sa_item_inner">
                <div className="sa_item_flex _LAZY_LOADING_WRAP">
                  <div className="sa_thumb _LAZY_LOADING_ERROR_HIDE">
                    <div className="sa_thumb_inner">
                      <a href="https://n.news.naver.com/mnews/article/009/0005546324" className="sa_thumb_link _NLOG_IMPRESSION" data-clk="pol.clart" data-imp-gdid="880000BC_000000000000000005546324" data-imp-url="https://n.news.naver.com/mnews/article/009/0005546324" data-imp-index="1">
                        <img className="_LAZY_LOADING _LAZY_LOADING_INIT_HIDE" width="110" height="75" alt="日 이시바 총리 “한일의 안정적 관계 발전은 지역 전체의 이익”" src="https://mimgnews.pstatic.net/image/origin/009/2025/08/23/5546324.jpg?type=nf220_150" />
                      </a>
                    </div>
                  </div>
                  <div className="sa_text">
                    <a href="https://n.news.naver.com/mnews/article/009/0005546324" className="sa_text_title _NLOG_IMPRESSION" data-clk="pol.clart" data-imp-gdid="880000BC_000000000000000005546324" data-imp-url="https://n.news.naver.com/mnews/article/009/0005546324" data-imp-index="1">
                      <strong className="sa_text_strong">日 이시바 총리 “한일의 안정적 관계 발전은 지역 전체의 이익”</strong>
                    </a>
                    <div className="sa_text_lede">북한 비핵화 위애 한미일 협조 중요 북한 납치문제와 대해서도 공동 노력 이시바 시게루 일본 총리가 “한국과 일본의 안정적인 관계 발전은 양국의 이익이며 지역 전체의 이익도 된다”며 “한미일 연계 강화도 매우 중요한</div>
                  <div className="sa_text_info">
                    <div className="sa_text_info_left">
                      <div className="sa_text_press">매일경제</div>
                        <a href="https://n.news.naver.com/mnews/article/comment/009/0005546324" className="sa_text_cmt _COMMENT_COUNT_LIST" style={{display: "none"}} data-ticket="news" data-object-id="news009,0005546324" data-zero-allow="false" data-processed="true"></a>
                    </div>
                    <div className="sa_text_info_right">
                      <a href="/cluster/c_202508231820_00000002/section/100?oid=009&amp;aid=0005546324" className="sa_text_cluster" data-clk="clcou">
                        <span className="sa_text_cluster_num">133</span>
                        <span className="blind">개의 관련뉴스 더보기</span>
                      </a>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </li>
            <li className="sa_item _SECTION_HEADLINE">
              <div className="sa_item_inner">
                <div className="sa_item_flex _LAZY_LOADING_WRAP">
                  <div className="sa_thumb _LAZY_LOADING_ERROR_HIDE">
                    <div className="sa_thumb_inner">
                      <a href="https://n.news.naver.com/mnews/article/009/0005546324" className="sa_thumb_link _NLOG_IMPRESSION" data-clk="pol.clart" data-imp-gdid="880000BC_000000000000000005546324" data-imp-url="https://n.news.naver.com/mnews/article/009/0005546324" data-imp-index="1">
                        <img className="_LAZY_LOADING _LAZY_LOADING_INIT_HIDE" width="110" height="75" alt="日 이시바 총리 “한일의 안정적 관계 발전은 지역 전체의 이익”" src="https://mimgnews.pstatic.net/image/origin/009/2025/08/23/5546324.jpg?type=nf220_150" />
                      </a>
                    </div>
                  </div>
                  <div className="sa_text">
                    <a href="https://n.news.naver.com/mnews/article/009/0005546324" className="sa_text_title _NLOG_IMPRESSION" data-clk="pol.clart" data-imp-gdid="880000BC_000000000000000005546324" data-imp-url="https://n.news.naver.com/mnews/article/009/0005546324" data-imp-index="1">
                      <strong className="sa_text_strong">日 이시바 총리 “한일의 안정적 관계 발전은 지역 전체의 이익”</strong>
                    </a>
                    <div className="sa_text_lede">북한 비핵화 위애 한미일 협조 중요 북한 납치문제와 대해서도 공동 노력 이시바 시게루 일본 총리가 “한국과 일본의 안정적인 관계 발전은 양국의 이익이며 지역 전체의 이익도 된다”며 “한미일 연계 강화도 매우 중요한</div>
                  <div className="sa_text_info">
                    <div className="sa_text_info_left">
                      <div className="sa_text_press">매일경제</div>
                        <a href="https://n.news.naver.com/mnews/article/comment/009/0005546324" className="sa_text_cmt _COMMENT_COUNT_LIST" style={{display: "none"}} data-ticket="news" data-object-id="news009,0005546324" data-zero-allow="false" data-processed="true"></a>
                    </div>
                    <div className="sa_text_info_right">
                      <a href="/cluster/c_202508231820_00000002/section/100?oid=009&amp;aid=0005546324" className="sa_text_cluster" data-clk="clcou">
                        <span className="sa_text_cluster_num">133</span>
                        <span className="blind">개의 관련뉴스 더보기</span>
                      </a>
                    </div>
                  </div>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
        <div className="section_more _SECTION_HEADLINE_MORE_BUTTON_WRAP">
          <a href="#" className="section_more_inner _SECTION_HEADLINE_MORE_BUTTON _NLOG_IMPRESSION_TRIGGER" data-target="_SECTION_HEADLINE_LIST_m0bp8" data-clk="clsmore">헤드라인 더보기</a>
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