/*jslint evil:true */
/**
 * Dynamic thread loader
 *
 * 
 * 
 * 
 * 
 * 
*/

// 
var DISQUS;
if (!DISQUS || typeof DISQUS == 'function') {
    throw "DISQUS object is not initialized";
}
// 

// json_data and default_json django template variables will close
// and re-open javascript comment tags

(function () {
    var jsonData, cookieMessages, session;

    /* */ jsonData = {"reactions": [], "reactions_limit": 10, "ordered_highlighted": [], "posts": {"280192606": {"edited": false, "author_is_moderator": false, "from_request_user": false, "up_voted": false, "ip": "", "last_modified_date": null, "dislikes": 0, "has_replies": false, "vote": false, "votable": true, "last_modified_by": null, "real_date": "2011-08-08_00:51:58", "date": "Acum 13 ore", "message": "\u00centr-adev\u0103r este un PDF plin de lec\u0163ii importante, apreciez munca ta \u015fi dorin\u0163a de a ajuta \u015fi al\u0163i oameni s\u0103 devin\u0103 ferici\u0163i. Mult succes \u015fi inspira\u0163ie pentru urm\u0103toarele articole!", "approved": true, "is_last_child": false, "can_edit": false, "can_reply": true, "likes": 1, "user_voted": {"username": "valirotaru", "avatar_url": "http://mediacdn.disqus.com/1312506743/images/noavatar32.png", "display_name": "valirotaru"}, "num_replies": 0, "down_voted": false, "is_first_child": false, "has_been_anonymized": false, "highlighted": false, "parent_post_id": null, "depth": 0, "points": 1, "user_key": "facebook-100001875451041", "author_is_creator": false, "email": "", "killed": false, "is_realtime": false}}, "ordered_posts": [280192606], "realtime_enabled": false, "ready": true, "mediaembed": [], "has_more_reactions": false, "realtime_paused": true, "integration": {"receiver_url": "", "hide_user_votes": false, "reply_position": false, "disqus_logo": false}, "highlighted": {}, "reactions_start": 0, "media_url": "http://mediacdn.disqus.com/1312506743", "users": {"facebook-100001875451041": {"username": "facebook-100001875451041", "tumblr": "", "about": "", "display_name": "Cristina Rabei", "url": "http://disqus.com/facebook-100001875451041/", "registered": true, "remote_id": "100001875451041", "linkedin": "", "blog": "http://www.facebook.com/bambina.92", "remote_domain": 1, "points": 2, "facebook": "http://www.facebook.com/bambina.92", "avatar": "http://mediacdn.disqus.com/uploads/users/1515/2412/avatar32.jpg?1312779116", "delicious": "", "is_remote": true, "verified": false, "flickr": "", "twitter": "", "remote_domain_name": "Facebook"}}, "messagesx": {"count": 0, "unread": []}, "thread": {"voters_count": 1, "offset_posts": 0, "slug": "8_elemente_ale_unei_vieti_fericite_si_pline_de_succes", "paginate": false, "num_pages": 1, "days_alive": 0, "moderate_none": false, "voters": {"valirotaru": {"url": "http://disqus.com/valirotaru/", "username": "valirotaru", "is_moderator": true, "avatar": "http://mediacdn.disqus.com/1312506743/images/noavatar32.png", "name": "valirotaru"}}, "total_posts": 1, "realtime_paused": false, "queued": false, "pagination_type": "append", "user_vote": null, "likes": 1, "num_posts": 1, "closed": false, "per_page": 0, "id": 379937231, "killed": false, "moderate_all": false}, "forum": {"use_media": true, "avatar_size": 32, "apiKey": "hffesivzxbrg06htmVvRZCWdOpeH5Dr8IQsXxOt3r1VT4yL0yvHl3t2SDg767MAI", "comment_max_words": 0, "mobile_theme_disabled": false, "is_early_adopter": false, "login_buttons_enabled": false, "streaming_realtime": false, "reply_position": false, "id": 924173, "default_avatar_url": "http://mediacdn.disqus.com/1312506743/images/noavatar32.png", "template": {"mobile": {"url": "http://mediacdn.disqus.com/1312506743/build/themes/newmobile.js", "css": "http://mediacdn.disqus.com/1312506743/build/themes/newmobile.css"}, "url": "http://mediacdn.disqus.com/1312506743/build/themes/t_b3e3e393c77e35a4a3f3cbd1e429b5dc.js?1", "api": "1.1", "name": "Houdini", "css": "http://mediacdn.disqus.com/1312506743/build/themes/t_b3e3e393c77e35a4a3f3cbd1e429b5dc.css?1"}, "max_depth": 0, "lastUpdate": "", "use_old_templates": false, "linkbacks_enabled": true, "allow_anon_votes": true, "revert_new_login_flow": false, "stylesUrl": "http://mediacdn.disqus.com/uploads/styles/92/4173/valirotaru.css", "show_avatar": true, "reactions_enabled": false, "disqus_auth_disabled": false, "name": "Vali Rotaru", "language": "ro", "mentions_enabled": true, "url": "valirotaru", "allow_anon_post": true, "thread_votes_disabled": false, "hasCustomStyles": false, "moderate_all": false}, "settings": {"uploads_url": "http://media.disqus.com/uploads", "ssl_media_url": "https://securecdn.disqus.com/1312506743", "realtime_url": "http://rt.disqus.com/forums/realtime-cached.js", "facebook_app_id": "52254943976", "minify_js": true, "recaptcha_public_key": "6LdKMrwSAAAAAPPLVhQE9LPRW4LUSZb810_iaa8u", "read_only": false, "facebook_api_key": "4aaa6c7038653ad2e4dbeba175a679ba", "debug": false, "disqus_url": "http://disqus.com", "media_url": "http://mediacdn.disqus.com/1312506743"}, "ranks": {}, "request": {"sort": 4, "is_authenticated": false, "user_type": "anon", "subscribe_on_post": 0, "missing_perm": null, "user_id": null, "remote_domain_name": "", "remote_domain": "", "is_verified": false, "email": "", "profile_url": "", "username": "", "is_global_moderator": false, "sharing": {}, "timestamp": "2011-08-08_14:48:53", "is_moderator": false, "forum": "valirotaru", "is_initial_load": true, "display_username": "", "points": null, "moderator_can_edit": false, "is_remote": false, "userkey": "", "page": 1}, "context": {"use_twitter_signin": true, "use_fb_connect": true, "show_reply": true, "active_switches": ["bespin", "community_icon", "embedapi", "google_auth", "mentions", "new_facebook_auth", "realtime_cached", "show_captcha_on_links", "ssl", "static_reply_frame", "static_styles", "statsd_created", "upload_media", "use_rs_paginator_30m"], "sigma_chance": 10, "use_google_signin": true, "switches": {"statsd": false, "disable_realtime": false, "use_rs_paginator_30m": true, "debug_js": false, "google_auth": true, "achievements_hits": false, "community_icon": true, "realtime_cached": true, "new_toolbar": false, "static_styles": true, "addons_ab_test": false, "show_captcha_on_links": true, "statsd_created": true, "bespin": true, "preview_new_theme": false, "post_sort_paginator": false, "frasier": false, "achievements": false, "moderate_search": false, "new_thread_create": false, "upload_media": true, "embedapi": true, "ssl": true, "autocommitted_thread": false, "media_versioned_themes": false, "use_rs_paginator_5m": false, "sexymap": false, "search": false, "new_facebook_auth": true, "post_sort_paginator_index": false, "use_rs_paginator_60m": false, "mentions": true, "postmeta_annotations": false, "sigma": false, "enable_random_recommendations": false, "static_reply_frame": true}, "forum_facebook_key": "57ff5ce0373fac1dbc99684dd356dc73", "use_yahoo": true, "subscribed": false, "active_gargoyle_switches": ["html_email", "limit_get_posts_days_30d", "listactivity_replies", "listactivity_replies_30d", "olark_addons", "olark_admin_addons", "olark_admin_packages", "olark_install", "olark_support", "send_to_impermium", "show_captcha_on_links"], "realtime_speed": 15000, "use_openid": true}}; /* */
    /* */ cookieMessages = {"user_created": null, "post_has_profile": null, "post_twitter": null, "post_not_approved": null}; session = {"url": null, "name": null, "email": null}; /* */

    DISQUS.jsonData = jsonData;
    DISQUS.jsonData.cookie_messages = cookieMessages;
    DISQUS.jsonData.session = session;

    if (DISQUS.useSSL) {
        DISQUS.useSSL(DISQUS.jsonData.settings);
    }
    DISQUS.lang.extend(DISQUS.settings, DISQUS.jsonData.settings);
}());

DISQUS.jsonData.context.csrf_token = '21bc467119200cb06806902fa8e2f5b0';

DISQUS.jsonData.urls = {
    login: 'http://disqus.com/profile/login/',
    logout: 'http://disqus.com/logout/',
    upload_remove: 'http://valirotaru.disqus.com/thread/8_elemente_ale_unei_vieti_fericite_si_pline_de_succes/async_media_remove/',
    request_user_profile: 'http://disqus.com/AnonymousUser/',
    request_user_avatar: 'http://mediacdn.disqus.com/1312506743/images/noavatar92.png',
    verify_email: 'http://disqus.com/verify/',
    remote_settings: 'http://valirotaru.disqus.com/_auth/embed/remote_settings/',
    embed_thread: 'http://valirotaru.disqus.com/thread.js',
    embed_profile: 'http://disqus.com/embed/profile.js',
    embed_vote: 'http://valirotaru.disqus.com/vote.js',
    embed_thread_vote: 'http://valirotaru.disqus.com/thread_vote.js',
    embed_thread_share: 'http://valirotaru.disqus.com/thread_share.js',
    embed_queueurl: 'http://valirotaru.disqus.com/queueurl.js',
    embed_hidereaction: 'http://valirotaru.disqus.com/hidereaction.js',
    embed_more_reactions: 'http://valirotaru.disqus.com/more_reactions.js',
    embed_subscribe: 'http://valirotaru.disqus.com/subscribe.js',
    embed_highlight: 'http://valirotaru.disqus.com/highlight.js',
    embed_block: 'http://valirotaru.disqus.com/block.js',
    update_moderate_all: 'http://valirotaru.disqus.com/update_moderate_all.js',
    update_days_alive: 'http://valirotaru.disqus.com/update_days_alive.js',
    show_user_votes: 'http://valirotaru.disqus.com/show_user_votes.js',
    forum_view: 'http://valirotaru.disqus.com/8_elemente_ale_unei_vieti_fericite_si_pline_de_succes',
    cnn_saml_try: 'http://disqus.com/saml/cnn/try/',
    realtime: DISQUS.jsonData.settings.realtime_url,
    thread_view: 'http://valirotaru.disqus.com/thread/8_elemente_ale_unei_vieti_fericite_si_pline_de_succes/',
    twitter_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/twitter/begin/',
    yahoo_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/yahoo/begin/',
    openid_connect: DISQUS.jsonData.settings.disqus_url + '/_ax/openid/begin/',
    googleConnect: DISQUS.jsonData.settings.disqus_url + '/_ax/google/begin/',
    community: 'http://valirotaru.disqus.com/community.html',
    admin: 'http://valirotaru.disqus.com/admin/moderate/',
    moderate: 'http://valirotaru.disqus.com/admin/moderate/',
    moderate_threads: 'http://valirotaru.disqus.com/admin/moderate-threads/',
    settings: 'http://valirotaru.disqus.com/admin/settings/',
    unmerged_profiles: 'http://disqus.com/embed/profile/unmerged_profiles/',

    channels: {
        def:      'http://disqus.com/default.html', /* default channel */
        auth:     'https://secure.disqus.com/embed/login.html',
        tweetbox: 'http://disqus.com/forums/integrations/twitter/tweetbox.html?f=valirotaru',
        edit:     'http://valirotaru.disqus.com/embed/editcomment.html',

        
        
        reply:    'http://mediacdn.disqus.com/1312506743/build/system/reply.html',
        upload:   'http://mediacdn.disqus.com/1312506743/build/system/upload.html',
        sso:      'http://mediacdn.disqus.com/1312506743/build/system/sso.html',
        facebook: 'http://mediacdn.disqus.com/1312506743/build/system/facebook.html'
        
        
    }
};
