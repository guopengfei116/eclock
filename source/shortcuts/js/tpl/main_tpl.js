
var headerTpl = '<header> \
                    <div class="header-in"> \
                        <a class="icon icon-logo"></a> \
                        <aside class="right"> \
                            <div class="select select-host select-btn" data-value="US"> \
                            <div class="select_main"> \
                                <% if (language === "中文") { %> \
                                    <span class="icon icon-cn_flag"></span> \
                                <% } else if (language === "Türkçe") { %>\
                                    <span class="icon icon-tr_flag"></span> \
                                <% } else if (language === "português") { %>\
                                    <span class="icon icon-pt_flag"></span> \
                                <% } else if (language === "English") { %> \
                                    <span class="icon icon-us_flag"></span> \
                                <% } %> \
                                <p class="select_main_text select_target"><%= language %></p> \
                                <button class="select_main_btn select_target"> \
                                    <i class="icon icon-arrow"></i> \
                                </button> \
                            </div> \
                            <ul class="select_content"> \
                                <li class="select_content_list"> \
                                    <span class="icon icon-cn_flag"></span> \
                                    <a class="select_content_list_value" data-value="CN">中文</a> \
                                </li> \
                                <li class="select_content_list"> \
                                    <span class="icon icon-tr_flag"></span> \
                                    <a class="select_content_list_value" data-value="TR">Türkçe</a> \
                                </li> \
                                <li class="select_content_list"> \
                                    <span class="icon icon-pt_flag"></span> \
                                    <a class="select_content_list_value" data-value="PT">português</a> \
                                </li> \
                                <li class="select_content_list"> \
                                    <span class="icon icon-us_flag"></span> \
                                    <a class="select_content_list_value" data-value="US">Einglish</a> \
                                </li> \
                            </ul> \
                            </div> \
                        </aside> \
                    </div> \
                </header>';

var articleTpl = '<article> \
                    <div class="article-in"> \
                        <div class="view"> \
                            <img src="/shortcuts/img/view.png"> \
                        </div> \
                        <div class="about"> \
                            <span class="icon icon-logo_font about_logo"></span> \
                            <p class="about_h2"><%= quotation %></p> \
                            <p class="about_h3"><%= introduction %></p> \
                            <a class="download-btn"> \
                                <small class="icon icon-download"></small> \
                                <%= download %> \
                            </a> \
                        </div> \
                    </div> \
                </article>';

var ulTpl = "<ul> \
                <li class='index1'> \
                    <p class='img img-1'> \
                        <span class='icon icon-google'></span> \
                    </p> \
                    <dl> \
                        <dt class='title'><%= google.title %></dt> \
                        <dd class='item'><%= google.details %></dd> \
                    </dl> \
                </li> \
                <li class='index2'> \
                    <p class='img img-2'> \
                        <span class='icon icon-people'></span> \
                    </p> \
                    <dl> \
                        <dt class='title'><%= social.title %></dt> \
                        <dd class='item'><%= social.details %></dd> \
                    </dl> \
                </li> \
                <li class='index3'> \
                    <p class='img img-3'> \
                        <span class='icon icon-drawer'></span> \
                    </p> \
                    <dl> \
                        <dt class='title'><%= drawer.title %></dt> \
                        <dd class='item'><%= drawer.details %></dd> \
                    </dl> \
                </li> \
            </ul>";

var footerTpl = '<footer> \
                    <div class="footer-in"> \
                        <span class="icon icon-logo_footer"></span> \
                        <span class="footer-in_filing right"><%= filing %></span> \
                    </div> \
                </footer>';

var tpl = headerTpl + articleTpl + ulTpl + footerTpl;

module.exports = tpl;
