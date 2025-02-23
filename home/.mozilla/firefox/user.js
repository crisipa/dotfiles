//
/* Betterfox user.js 09dd87a
 * https://github.com/yokoffing/Betterfox/blob/main/user.js
 */

/****************************************************************************
 * Betterfox                                                                *
 * "Ad meliora"                                                             *
 * version: 133                                                             *
 * url: https://github.com/yokoffing/Betterfox                              *
 ****************************************************************************/

/****************************************************************************
 * SECTION: FASTFOX                                                         *
 ****************************************************************************/
/** GENERAL ***/
user_pref("content.notify.interval", 100000);

/** GFX ***/
user_pref("gfx.canvas.accelerated.cache-items", 4096);
user_pref("gfx.canvas.accelerated.cache-size", 512);
user_pref("gfx.content.skia-font-cache-size", 20);

/** DISK CACHE ***/
user_pref("browser.cache.disk.enable", true);

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
user_pref("dom.enable_web_task_scheduling", true);

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
/* 5501: disable MathML (Mathematical Markup Language) [FF51+]
 * [1] https://cve.mitre.org/cgi-bin/cvekey.cgi?keyword=mathml ***/
// user_pref("mathml.disabled", true);


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

/****************************************************************************
 * SECTION: SMOOTHFOX                                                       *
 ****************************************************************************/
// visit https://github.com/yokoffing/Betterfox/blob/main/Smoothfox.js
// Enter your scrolling overrides below this line:

/****************************************************************************
 * END: BETTERFOX                                                           *
 ****************************************************************************/

/* below is
 * from multisources
 * also see:
 * https://git.nixnet.services/Narsil/desktop_user.js
 * https://github.com/pyllyukko/user.js
 * https://github.com/arkenfox/user.js
 */

/****************************************************************************
 * BETTERFOX 20241221 09dd87a
 ****************************************************************************/

// https://github.com/yokoffing/Betterfox/blob/main/Fastfox.js

// PREF: GPU-accelerated Canvas2D
// Uses Accelerated Canvas2D for hardware acceleration of Canvas2D.
// This provides a consistent acceleration architecture across all platforms
// by utilizing WebGL instead of relying upon Direct2D.
// [WARNING] May cause issues on some Windows machines using integrated GPUs [2] [3]
// Add to your overrides if you have a dedicated GPU.
// [NOTE] Higher values will use more memory.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1741501
// [2] https://github.com/yokoffing/Betterfox/issues/153
// [3] https://github.com/yokoffing/Betterfox/issues/198
user_pref("gfx.canvas.accelerated", true); // [DEFAULT FF133+]

// PREF: Race Cache With Network (RCWN) [FF59+]
// [ABOUT] about:networking#rcwn
// Firefox concurrently sends requests for cached resources to both the
// local disk cache and the network server. The browser uses whichever
// result arrives first and cancels the other request. This approach sometimes
// loads pages faster because the network can be quicker than accessing the cache
// on a hard drive. When RCWN is enabled, the request might be served from
// the server even if you have valid entry in the cache. Set to false if your
// intention is to increase cache usage and reduce network usage.
// [1] https://slides.com/valentingosu/race-cache-with-network-2017
// [2] https://simonhearne.com/2020/network-faster-than-cache/
// [3] https://support.mozilla.org/en-US/questions/1267945
// [4] https://askubuntu.com/questions/1214862/36-syns-in-a-row-how-to-limit-firefox-connections-to-one-website
// [5] https://bugzilla.mozilla.org/show_bug.cgi?id=1622859
// [6] https://soylentnews.org/comments.pl?noupdate=1&sid=40195&page=1&cid=1067867#commentwrap
// user_pref("network.http.rcwn.enabled", false);

// PREF: compression level for cached JavaScript bytecode [FF102+]
// [1] https://github.com/yokoffing/Betterfox/issues/247
// 0 = do not compress (default)
// 1 = minimal compression
// 9 = maximal compression
user_pref("browser.cache.jsbc_compression_level", 3);

// PREF: pacing requests [FF23+]
// Controls how many HTTP requests are sent at a time.
// Pacing HTTP requests can have some benefits, such as reducing network congestion,
// improving web page loading speed, and avoiding server overload.
// Pacing requests adds a slight delay between requests to throttle them.
// If you have a fast machine and internet connection, disabling pacing
// may provide a small speed boost when loading pages with lots of requests.
// false=Firefox will send as many requests as possible without pacing
// true=Firefox will pace requests (default)
user_pref("network.http.pacing.requests.enabled", true);
user_pref("network.http.pacing.requests.min-parallelism", 8); // default=6
user_pref("network.http.pacing.requests.burst", 16); // default=10

// https://github.com/yokoffing/Betterfox/blob/main/Securefox.js

// PREF: query stripping
// Currently uses a small list [1]
// We set the same query stripping list that Brave and LibreWolf uses [2]
// If using uBlock Origin or AdGuard, use filter lists as well [3]
// Query parameters stripped [5]
// [1] https://www.eyerys.com/articles/news/how-mozilla-firefox-improves-privacy-using-query-parameter-stripping-feature
// [2] https://github.com/brave/brave-core/blob/f337a47cf84211807035581a9f609853752a32fb/browser/net/brave_site_hacks_network_delegate_helper.cc
// [3] https://github.com/yokoffing/filterlists#url-tracking-parameters
// [4] https://bugzilla.mozilla.org/show_bug.cgi?id=1706607
// [5] https://firefox.settings.services.mozilla.com/v1/buckets/main/collections/query-stripping/records
user_pref("privacy.query_stripping.enabled", true); // enabled with "Strict"
user_pref("privacy.query_stripping.enabled.pbmode", true); // enabled with "Strict"
// user_pref("privacy.query_stripping.strip_list", ""); // DEFAULT
// user_pref("privacy.query_stripping.strip_on_share.enabled", true);

// PREF: allow embedded tweets, Instagram and Reddit posts, and TikTok embeds
// [TEST - reddit embed] https://www.pcgamer.com/amazing-halo-infinite-bugs-are-already-rolling-in/
// [TEST - instagram embed] https://www.ndtv.com/entertainment/bharti-singh-and-husband-haarsh-limbachiyaa-announce-pregnancy-see-trending-post-2646359
// [TEST - tweet embed] https://www.newsweek.com/cryptic-tweet-britney-spears-shows-elton-john-collab-may-date-back-2015-1728036
// [TEST - tiktok embed] https://www.vulture.com/article/snl-adds-four-new-cast-members-for-season-48.html
// [1] https://www.reddit.com/r/firefox/comments/l79nxy/firefox_dev_is_ignoring_social_tracking_preference/gl84ukk
// [2] https://www.reddit.com/r/firefox/comments/pvds9m/reddit_embeds_not_loading/
user_pref("urlclassifier.trackingSkipURLs", "*.reddit.com, *.twitter.com, *.twimg.com, *.tiktok.com"); // MANUAL
user_pref("urlclassifier.features.socialtracking.skipURLs", "*.instagram.com, *.twitter.com, *.twimg.com"); // MANUAL

// PREF: do not trust installed third-party root certificates [FF120+]
// Disable Enterprise Root Certificates of the operating system.
// For users trying to get intranet sites on managed networks,
// or who have security software configured to analyze web traffic.
// [1] https://bugzilla.mozilla.org/show_bug.cgi?id=1848815
user_pref("security.enterprise_roots.enabled", false);
user_pref("security.certerrors.mitm.auto_enable_enterprise_roots", false);

// PREF: disable Captive Portal detection
// [1] https://www.eff.org/deeplinks/2017/08/how-captive-portals-interfere-wireless-security-and-privacy
// [2] https://wiki.mozilla.org/Necko/CaptivePortal
user_pref("captivedetect.canonicalURL", "http://detectportal.firefox.com/canonical.html");
user_pref("network.captive-portal-service.enabled", ftrue);

// PREF: disable Network Connectivity checks
// [WARNING] Do NOT use for mobile devices. May NOT be able to use Firefox on public wifi (hotels, coffee shops, etc).
// [1] https://bugzilla.mozilla.org/1460537
user_pref("network.connectivity-service.enabled", true);

// https://github.com/yokoffing/Betterfox/blob/main/Peskyfox.js

// https://github.com/yokoffing/Betterfox/wiki/Common-Overrides

// https://github.com/yokoffing/Betterfox/wiki/Optional-Hardening

// PREF: disable disk cache
user_pref("browser.cache.disk.enable", false);

// PREF: enforce certificate pinning
// [ERROR] MOZILLA_PKIX_ERROR_KEY_PINNING_FAILURE
// 1 = allow user MiTM (such as your antivirus) (default)
// 2 = strict
user_pref("security.cert_pinning.enforcement_level", 2);

/****************************************************************************
 * https://git.nixnet.services/Narsil/desktop_user.js/src/branch/master/user.js
 * 20241221
 ****************************************************************************/

// Use Punycode in Internationalized Domain Names to eliminate possible spoofing
user_pref("network.IDN_show_punycode", true);

// Enforce PDFJS, disable PDFJS scripting
// 会导致性能问题
// user_pref("pdfjs.disabled", false); // [DEFAULT: false]
// user_pref("pdfjs.enableScripting", false); // [FF86+]

// Disable content analysis by DLP (Data Loss Prevention) agents
// 0=Block all requests, 1=Warn on all requests (which lets the user decide), 2=Allow all requests
user_pref("browser.contentanalysis.enabled", false); // [FF121+] [DEFAULT: false]
user_pref("browser.contentanalysis.default_result", 0); // [FF127+] [DEFAULT: 0]

/****************************************************************************
 * https://github.com/arkenfox/user.js/
 * 20241221
 ****************************************************************************/

// https://github.com/arkenfox/user.js/blob/master/user.js

/* 1701: enable Container Tabs and its UI setting [FF50+]
 * [SETTING] General>Tabs>Enable Container Tabs
 * https://wiki.mozilla.org/Security/Contextual_Identity_Project/Containers ***/
user_pref("privacy.userContext.enabled", true);
user_pref("privacy.userContext.ui.enabled", true);
/* 1702: set behavior on "+ Tab" button to display container menu on left click [FF74+]
 * [NOTE] The menu is always shown on long press and right click
 * [SETTING] General>Tabs>Enable Container Tabs>Settings>Select a container for each new tab ***/
user_pref("privacy.userContext.newTabContainerOnLeftClick.enabled", true);
/* 1703: set external links to open in site-specific containers [FF123+]
 * [SETUP-WEB] Depending on your container extension(s) and their settings
 * true=Firefox will not choose a container (so your extension can)
 * false=Firefox will choose the container/no-container (default)
 * [1] https://bugzilla.mozilla.org/1874599 ***/
// user_pref("browser.link.force_default_user_context_id_for_external_opens", true);

/****************************************************************************
 * ARCHLINUX
 ****************************************************************************/

// https://wiki.archlinux.org/title/Firefox
// https://wiki.archlinux.org/title/Firefox/Privacy

// 使用系统的 emoji 字体
user_pref("font.name-list.emoji", "emoji");

// 允许多少字体替换来自 Fontconfig
user_pref("gfx.font_rendering.fontconfig.max_generic_substitutions", 127);

// 强制启用硬件 WebRender
user_pref("gfx.webrender.all", true);

// 页面主题
// 3 将跟随浏览器主题
// 2 将跟随系统的黑暗模式首选项
// 1 浅色模式
// 0 深色模式
user_pref("layout.css.prefers-color-scheme.content-override", 2);

// 强制视频硬解
user_pref("media.hardware-video-decoding.force-enabled", true);

// WebRTC
// 仅默认地址
user_pref("media.peerconnection.ice.default_address_only", true);
// ？
user_pref("media.peerconnection.ice.no_host", true);
// Force WebRTC inside the proxy
user_pref("media.peerconnection.ice.proxy_only_if_behind_proxy", true);
// 完全禁用
user_pref("media.peerconnection.enabled", false);

// Encrypted Client Hello
// network.trr.mode need to 2/3
user_pref("network.dns.echconfig.enabled", true);
user_pref("network.dns.http3_echconfig.enabled", true);

// Tracking protection
user_pref("privacy.trackingprotection.enabled", true);

// 禁用 webgl
user_pref("webgl.disabled", true);

// LINUX

// VAAPI 硬解
user_pref("media.ffmpeg.vaapi.enabled", true);

// 禁用来自 Firefox 的媒体条目
user_pref("media.hardwaremediakeys.enabled", false);

// XDG 桌面门户集成
// 0 — never
// 1 — always
// 2 — suto
user_pref("widget.use-xdg-desktop-portal.file-picker", 1);
user_pref("widget.use-xdg-desktop-portal.mime-handler", 1);
user_pref("widget.use-xdg-desktop-portal.settings", 1);
user_pref("widget.use-xdg-desktop-portal.location", 1);
user_pref("widget.use-xdg-desktop-portal.open-uri", 1);

/****************************************************************************
 * MOZILLA
 ****************************************************************************/

// https://wiki.mozilla.org/Security/Referrer

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

/****************************************************************************
 * self use
 ****************************************************************************/

// 减少
user_pref("browser.sessionhistory.max_entries", 16);
user_pref("browser.sessionhistory.max_total_viewers", 4);

// 内存控制
// 冻结标签页？
user_pref("browser.tabs.unloadOnLowMemory", true); // DEFAULT
// 开始回收内存时的可用内存
user_pref("browser.low_commit_space_threshold_mb", 1024);
// 开始回收内存时的可用内存百分比
user_pref("browser.low_commit_space_threshold_percent", 10);

// 为隐私模式单独设置搜索引擎
user_pref("browser.search.separatePrivateDefault.ui.enabled", true);

// 地址栏不隐藏 http://
user_pref("browser.urlbar.trimURLs", false);

// 关闭剪切板事件
// 阻止网页知晓复制行为
user_pref("dom.event.clipboardevents.enabled", false);

// 禁用网页自定义右键功能菜单
// 浏览器右键菜单在最前端
// user_pref("dom.event.contextmenu.enabled", false);

// one process per site origin
user_pref("dom.ipc.processCount.webIsolated", 1);

// 禁用pocket
user_pref("extensions.pocket.enabled", false);

// https://wiki.archlinux.org/title/Firefox/Privacy
// https://github.com/yokoffing/Betterfox/blob/main/Securefox.js
// 禁用 jit
// 会影响性能
user_pref("javascript.options.ion", false);
user_pref("javascript.options.baselinejit", false);
// 使扩展可使用jit
user_pref("javascript.options.jit_trustedprincipals", true);

// 禁用 WebAssembly
user_pref("javascript.options.wasm", false);
// wasm jit ?
user_pref("javascript.options.wasm_baselinejit", false);
user_pref("javascript.options.wasm_optimizingjit", false);

// 启用视频画中画
user_pref("media.videocontrols.picture-in-picture.enabled", true);

// 连接数
user_pref("network.http.max-persistent-connections-per-server", 8);
user_pref("network.http.max-urgent-start-excessive-connections-per-host", 4);
user_pref("network.http.max-persistent-connections-per-proxy", 16);

// post-quantum key exchange
user_pref("security.tls.enable_kyber", true);
user_pref("network.http.http3.enable_kyber", true);

// Cookie
// 0 允许所有cookies
// 1 仅接受网站的cookies
// 2 不接受cookies
// 3 仅在已储存过时接受第三方cookies
// 4 仅阻止跟踪器
// 5 阻止跟踪器 并 隔离第三方cookies
user_pref("network.cookie.cookieBehavior", 5);

// Network Partitioning
user_pref("privacy.partition.network_state", true); // DEFAULT

// enable APS (Always Partitioning Storage)
user_pref("privacy.partition.always_partition_third_party_non_cookie_storage", true);

// fingerprint
user_pref("privacy.fingerprintingProtection", true);

// ？
user_pref("privacy.resistFingerprinting.randomization.daily_reset.enabled", true);
user_pref("privacy.resistFingerprinting.randomization.daily_reset.private.enabled", true);

// trackingprotection
user_pref("privacy.trackingprotection.enabled", true);
user_pref("privacy.trackingprotection.cryptomining.enabled", true);
user_pref("privacy.trackingprotection.fingerprinting.enabled", true);
// 降低优先极
user_pref("privacy.trackingprotection.lower_network_priority", true);
