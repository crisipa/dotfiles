//
/* Betterfox
 * user.js
 * 09dd87a
 * https://github.com/yokoffing/Betterfox/blob/main/user.js
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 135                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 ****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
 ****************************************************************************/
/** GENERAL ***/
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
user_pref("browser.cache.disk.enable", false);

/** MEDIA CACHE ***/
user_pref("media.memory_cache_max_size", 65536);
user_pref("media.cache_readahead_limit", 7200);
user_pref("media.cache_resume_threshold", 3600);

/** IMAGE CACHE ***/
user_pref("image.mem.decode_bytes_at_a_time", 32768);

/** NETWORK ***/
user_pref("network.http.max-connections", 1800);
user_pref("network.http.max-persistent-connections-per-server", 10);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 5);
user_pref("network.http.pacing.requests.enabled", false);
user_pref("network.dnsCacheExpiration", 3600);
user_pref("network.ssl_tokens_cache_capacity", 10240);

/** SPECULATIVE LOADING ***/
user_pref("network.dns.disablePrefetch", true);
user_pref("network.dns.disablePrefetchFromHTTPS", true);
user_pref("network.prefetch-next", false);
user_pref("network.predictor.enabled", false);
user_pref("network.predictor.enable-prefetch", false);

/** EXPERIMENTAL ***/
user_pref("layout.css.grid-template-masonry-value.enabled", true);

/****************************************************************************
 * SECTION: SECUREFOX                                                       *
 ****************************************************************************/
/** TRACKING PROTECTION ***/
user_pref("browser.contentblocking.category", "strict");
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com");
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com");
user_pref("browser.download.start_downloads_in_tmp_dir", true);
user_pref("browser.helperApps.deleteTempFileOnExit", true);
user_pref("browser.uitour.enabled", false);
user_pref("privacy.globalprivacycontrol.enabled", true);

/** OCSP & CERTS / HPKP ***/
user_pref("security.OCSP.enabled", 0);
user_pref("security.remote_settings.crlite_filters.enabled", true);
user_pref("security.pki.crlite_mode", 2);

/** SSL / TLS ***/
user_pref("security.ssl.treat_unsafe_negotiation_as_broken", true);
user_pref("browser.xul.error_pages.expert_bad_cert", true);
user_pref("security.tls.enable_0rtt_data", false);

/** DISK AVOIDANCE ***/
user_pref("browser.privatebrowsing.forceMediaMemoryCache", true);
user_pref("browser.sessionstore.interval", 60000);

/** SHUTDOWN & SANITIZING ***/
user_pref("browser.privatebrowsing.resetPBM.enabled", true);
user_pref("privacy.history.custom", true);

/** SEARCH / URL BAR ***/
user_pref("browser.urlbar.trimHttps", true);
user_pref("browser.urlbar.untrimOnUserInteraction.featureGate", true);
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);
user_pref("browser.urlbar.update2.engineAliasRefresh", true);
user_pref("browser.search.suggest.enabled", false);
user_pref("browser.urlbar.quicksuggest.enabled", false);
user_pref("browser.urlbar.groupLabels.enabled", false);
user_pref("browser.formfill.enable", false);
user_pref("security.insecure_connection_text.enabled", true);
user_pref("security.insecure_connection_text.pbmode.enabled", true);
user_pref("network.IDN_show_punycode", true);

/** HTTPS-FIRST POLICY ***/
user_pref("dom.security.https_first", true);

/** PASSWORDS ***/
user_pref("signon.formlessCapture.enabled", false);
user_pref("signon.privateBrowsingCapture.enabled", false);
user_pref("network.auth.subresource-http-auth-allow", 1);
user_pref("editor.truncate_user_pastes", false);

/** MIXED CONTENT + CROSS-SITE ***/
user_pref("security.mixed_content.block_display_content", true);
user_pref("pdfjs.enableScripting", false);

/** EXTENSIONS ***/
user_pref("extensions.enabledScopes", 5);

/** HEADERS / REFERERS ***/
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

/** CONTAINERS ***/
user_pref("privacy.userContext.ui.enabled", true);

/** SAFE BROWSING ***/
user_pref("browser.safebrowsing.downloads.remote.enabled", false);

/** MOZILLA ***/
user_pref("permissions.default.desktop-notification", 2);
user_pref("permissions.default.geo", 2);
user_pref("browser.search.update", false);
user_pref("permissions.manager.defaultsUrl", "");

/** TELEMETRY ***/
user_pref("datareporting.policy.dataSubmissionEnabled", false);
user_pref("datareporting.healthreport.uploadEnabled", false);
user_pref("toolkit.telemetry.unified", false);
user_pref("toolkit.telemetry.enabled", false);
user_pref("toolkit.telemetry.server", "data:,");
user_pref("toolkit.telemetry.archive.enabled", false);
user_pref("toolkit.telemetry.newProfilePing.enabled", false);
user_pref("toolkit.telemetry.shutdownPingSender.enabled", false);
user_pref("toolkit.telemetry.updatePing.enabled", false);
user_pref("toolkit.telemetry.bhrPing.enabled", false);
user_pref("toolkit.telemetry.firstShutdownPing.enabled", false);
user_pref("toolkit.telemetry.coverage.opt-out", true);
user_pref("toolkit.coverage.opt-out", true);
user_pref("toolkit.coverage.endpoint.base", "");
user_pref("browser.newtabpage.activity-stream.feeds.telemetry", false);
user_pref("browser.newtabpage.activity-stream.telemetry", false);

/** EXPERIMENTS ***/
user_pref("app.shield.optoutstudies.enabled", false);
user_pref("app.normandy.enabled", false);
user_pref("app.normandy.api_url", "");

/** CRASH REPORTS ***/
user_pref("breakpad.reportURL", "");
user_pref("browser.tabs.crashReporting.sendReport", false);

/** DETECTION ***/
user_pref("captivedetect.canonicalURL", "");
user_pref("network.captive-portal-service.enabled", false);
user_pref("network.connectivity-service.enabled", false);

/****************************************************************************
 * SECTION: PESKYFOX                                                        *
 ****************************************************************************/
/** MOZILLA UI ***/
user_pref("browser.privatebrowsing.vpnpromourl", "");
user_pref("extensions.getAddons.showPane", false);
user_pref("extensions.htmlaboutaddons.recommendations.enabled", false);
user_pref("browser.discovery.enabled", false);
user_pref("browser.shell.checkDefaultBrowser", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.addons", false);
user_pref("browser.newtabpage.activity-stream.asrouter.userprefs.cfr.features", false);
user_pref("browser.preferences.moreFromMozilla", false);
user_pref("browser.aboutConfig.showWarning", false);
user_pref("browser.aboutwelcome.enabled", false);
user_pref("browser.profiles.enabled", true);

/** THEME ADJUSTMENTS ***/
user_pref("toolkit.legacyUserProfileCustomizations.stylesheets", true);
user_pref("browser.compactmode.show", true);
user_pref("browser.privateWindowSeparation.enabled", false); // WINDOWS

/** COOKIE BANNER HANDLING ***/
user_pref("cookiebanners.service.mode", 1);
user_pref("cookiebanners.service.mode.privateBrowsing", 1);

/** FULLSCREEN NOTICE ***/
user_pref("full-screen-api.transition-duration.enter", "0 0");
user_pref("full-screen-api.transition-duration.leave", "0 0");
user_pref("full-screen-api.warning.timeout", 0);

/** URL BAR ***/
user_pref("browser.urlbar.suggest.calculator", true);
user_pref("browser.urlbar.unitConversion.enabled", true);
user_pref("browser.urlbar.trending.featureGate", false);

/** NEW TAB PAGE ***/
user_pref("browser.newtabpage.activity-stream.feeds.topsites", false);
user_pref("browser.newtabpage.activity-stream.showWeather", false);
user_pref("browser.newtabpage.activity-stream.feeds.section.topstories", false);

/** POCKET ***/
user_pref("extensions.pocket.enabled", false);

/** DOWNLOADS ***/
user_pref("browser.download.manager.addToRecentDocs", false);

/** PDF ***/
user_pref("browser.download.open_pdf_attachments_inline", true);

/** TAB BEHAVIOR ***/
user_pref("browser.bookmarks.openInTabClosesMenu", false);
user_pref("browser.menu.showViewImageInfo", true);
user_pref("findbar.highlightAll", true);
user_pref("layout.word_select.eat_space_to_next_word", false);

/****************************************************************************
 * START: MY OVERRIDES                                                      *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
// visit https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
// Enter your personal overrides below this line:

//
/* Betterfox
 * Common Overrides
 * 250308
 * https://github.com/yokoffing/Betterfox/wiki/Common-Overrides
 */

// PREF: enable container tabs
user_pref("privacy.userContext.enabled", true);

//
/* Betterfox
 * Optional Hardening
 * 250308
 * https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening
 */

// PREF: do not allow embedded tweets, Instagram, Reddit, and Tiktok posts
user_pref("urlclassifier.trackingSkipURLs", "");
user_pref("urlclassifier.features.socialtracking.skipURLs", "");

// PREF: enable HTTPS-Only Mode
// Warn me before loading sites that don't support HTTPS
// in both Normal and Private Browsing windows.
user_pref("dom.security.https_only_mode", true);
user_pref("dom.security.https_only_mode_error_page_user_suggestions", true);

// PREF: set DoH provider
user_pref("network.trr.uri", "https://dns.alidns.com/dns-query");

// PREF: enforce DNS-over-HTTPS (DoH)
user_pref("network.trr.mode", 2);
user_pref("network.trr.max-fails", 4);

// PREF: enforce certificate pinning
// [ERROR] MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE
// 1 = allow user MiTM (such as your antivirus) (default)
// 2 = strict
user_pref("security.cert_pinning.enforcement_level", 2);

// PREF: disable all DRM content
user_pref("media.eme.enabled", false);

// PREF: hide the UI setting; this also disables the DRM prompt (optional)
user_pref("browser.eme.ui.enabled", false);

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

/****************************************************************************
 * END: BETTERFOX                                                           *
 ****************************************************************************/

//
/* arkenfox user.js
 * 20241221
 * https://github.com/arkenfox/user.js/blob/master/user.js
 */

//
/* pyllyukko/user.js
 * 20241221
 * https://github.com/pyllyukko/user.js/blob/master/user.js
 */

//
/* MOZILLA
 * Security/Referrer
 * 20241221
 * https://wiki.mozilla.org/Security/Referrer
 */

// referer 裁剪策略
// 0 不裁剪 默认
// 1 不含查询字符串
// 2 仅域名
user_pref("network.http.referer.trimmingPolicy", 2);
user_pref("network.http.referer.XOriginTrimmingPolicy", 2);

// 对跟踪器的 referer 策略
// 0 不发送
// 1 同源时发送
// 2 strict-origin-when-cross-origin
// 3 no-referrer-when-downgrade
user_pref("network.http.referer.defaultPolicy.trackers", 1);
user_pref("network.http.referer.defaultPolicy.trackers.pbmode", 1);

//
/* archlinux wiki
 * Firefox
 * 20250308
 * https://wiki.archlinux.org/title/Firefox
 */

// 强制启用硬件 WebRender
user_pref("gfx.webrender.all", true);

// VAAPI 硬解
user_pref("media.ffmpeg.vaapi.enabled", true);

// 强制视频硬解
user_pref("media.hardware-video-decoding.force-enabled", true);

// XDG 桌面门户集成
// 0 — never
// 1 — always
// 2 — suto
user_pref("widget.use-xdg-desktop-portal.file-picker", 1);
user_pref("widget.use-xdg-desktop-portal.mime-handler", 1);
user_pref("widget.use-xdg-desktop-portal.settings", 1);
user_pref("widget.use-xdg-desktop-portal.location", 1);
user_pref("widget.use-xdg-desktop-portal.open-uri", 1);

// 禁用来自 Firefox 的媒体条目
user_pref("media.hardwaremediakeys.enabled", false);

// 页面主题
// 3 将跟随浏览器主题
// 2 将跟随系统的黑暗模式首选项
// 1 浅色模式
// 0 深色模式
user_pref("layout.css.prefers-color-scheme.content-override", 2);

// 在 PDF 查看器中并排查看两个页面
// user_pref("pdfjs.spreadModeOnLoad", 1);

// 允许多少字体替换来自 Fontconfig
user_pref("gfx.font_rendering.fontconfig.max_generic_substitutions", 127);

// 使用系统的 emoji 字体
user_pref("font.name-list.emoji", "emoji");

// 内容进程限制
user_pref("dom.ipc.processCount.file", 4);

//
/* archlinux wiki
 * Firefox/Tweaks
 * 20250308
 * https://wiki.archlinux.org/title/Firefox/Tweaks
 */

// 禁用 使用推荐的性能设置
user_pref("browser.preferences.defaultPerformanceSettings.enabled", false);

// 磁盘缓存
// 1 - 禁用
user_pref("browser.cache.disk.enable", false);
user_pref("browser.cache.memory.enable", true);
// 2 - 将磁盘缓存移动到内存中
// /run/user/UID/firefox
// UID : 用户 ID，可以通过 id -u 获取当前用户 ID
// user_pref("browser.cache.disk.enable", true);
// user_pref("browser.cache.disk.parent_directory", "/run/user/1000/firefox");

// 会话信息记录间隔时间
// 1 分钟 60000 毫秒
user_pref("browser.sessionstore.interval", 60000);

// 禁用pocket
user_pref("extensions.pocket.enabled", false);

//
/* archlinux wiki
 * Firefox/Privacy
 * 20250308
 * https://wiki.archlinux.org/title/Firefox/Privacy
 */

// Tracking protection
user_pref("privacy.trackingprotection.enabled", true);

// user agent
user_pref("general.useragent.override", "Mozilla/5.0 (Wayland; Linux x86_64; rv:136.0) Gecko/20100101 Firefox/136.0");

// Encrypted Client Hello
// network.trr.mode need to 2/3
user_pref("network.dns.echconfig.enabled", true);
user_pref("network.dns.http3_echconfig.enabled", true);

// 禁用 webgl
user_pref("webgl.disabled", true);

// 禁用 WebAssembly
user_pref("javascript.options.wasm", false);
// wasm jit ?
user_pref("javascript.options.wasm_baselinejit", false);
user_pref("javascript.options.wasm_optimizingjit", false);

//
/* lite edit
 * 20250308
 */

// https://github.com/arkenfox/user.js/blob/master/user.js
// 20250308

// WebRTC
// 仅默认地址
user_pref("media.peerconnection.ice.default_address_only", true);
// Force WebRTC inside the proxy
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
// 完全禁用
user_pref("media.peerconnection.enabled", false);

// 关闭剪切板事件
// 阻止网页知晓复制行为
user_pref("dom.event.clipboardevents.enabled", false);

// 禁用网页自定义右键功能菜单
// 浏览器右键菜单在最前端
// user_pref("dom.event.contextmenu.enabled", false);

// 禁用 jit
// 会影响性能
user_pref("javascript.options.ion", false);
user_pref("javascript.options.baselinejit", false);
// 使扩展可使用jit
user_pref("javascript.options.jit_trustedprincipals", true);

// fingerprint
user_pref("privacy.fingerprintingProtection", true);
// trackingprotection
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);

// https://github.com/pyllyukko/user.js/blob/master/user.js
// 20250308

// 地址栏不隐藏 http://
user_pref("browser.urlbar.trimURLs", false);

// self use
// 20250308

// 减少
user_pref("browser.sessionhistory.max_entries", 16);
user_pref("browser.sessionhistory.max_total_viewers", 4);

// 内存控制
// 冻结标签页？
user_pref("browser.tabs.unloadOnLowMemory", true);
// 开始回收内存时的可用内存
user_pref("browser.low_commit_space_threshold_mb", 1024);
// 开始回收内存时的可用内存百分比
user_pref("browser.low_commit_space_threshold_percent", 10);

// one process per site origin
// user_pref("dom.ipc.processCount.webIsolated", 1);

// enable APS (Always Partitioning Storage)
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true);

// Cookie
// 0 允许所有cookies
// 1 仅接受网站的cookies
// 2 不接受cookies
// 3 仅在已储存过时接受第三方cookies
// 4 仅阻止跟踪器
// 5 阻止跟踪器 并 隔离第三方cookies
user_pref("network.cookie.cookieBehavior", 5);

// 连接数
user_pref("network.http.max-persistent-connections-per-server", 16);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 4);
user_pref("network.http.max-persistent-connections-per-proxy", 16);
