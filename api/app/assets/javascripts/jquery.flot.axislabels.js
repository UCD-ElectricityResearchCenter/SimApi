



<!DOCTYPE html>
<html lang="en" class="">
  <head prefix="og: http://ogp.me/ns# fb: http://ogp.me/ns/fb# object: http://ogp.me/ns/object# article: http://ogp.me/ns/article# profile: http://ogp.me/ns/profile#">
    <meta charset='utf-8'>
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta http-equiv="Content-Language" content="en">
    
    
    <title>flot-axislabels/jquery.flot.axislabels.js at master · markrcote/flot-axislabels · GitHub</title>
    <link rel="search" type="application/opensearchdescription+xml" href="/opensearch.xml" title="GitHub">
    <link rel="fluid-icon" href="https://github.com/fluidicon.png" title="GitHub">
    <link rel="apple-touch-icon" sizes="57x57" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="114x114" href="/apple-touch-icon-114.png">
    <link rel="apple-touch-icon" sizes="72x72" href="/apple-touch-icon-144.png">
    <link rel="apple-touch-icon" sizes="144x144" href="/apple-touch-icon-144.png">
    <meta property="fb:app_id" content="1401488693436528">

      <meta content="@github" name="twitter:site" /><meta content="summary" name="twitter:card" /><meta content="markrcote/flot-axislabels" name="twitter:title" /><meta content="flot-axislabels - Axis Labels Plugin for Flot" name="twitter:description" /><meta content="https://avatars3.githubusercontent.com/u/131299?v=2&amp;s=400" name="twitter:image:src" />
<meta content="GitHub" property="og:site_name" /><meta content="object" property="og:type" /><meta content="https://avatars3.githubusercontent.com/u/131299?v=2&amp;s=400" property="og:image" /><meta content="markrcote/flot-axislabels" property="og:title" /><meta content="https://github.com/markrcote/flot-axislabels" property="og:url" /><meta content="flot-axislabels - Axis Labels Plugin for Flot" property="og:description" />

      <meta name="browser-stats-url" content="/_stats">
    <link rel="assets" href="https://assets-cdn.github.com/">
    <link rel="conduit-xhr" href="https://ghconduit.com:25035">
    
    <meta name="pjax-timeout" content="1000">

    <meta name="msapplication-TileImage" content="/windows-tile.png">
    <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="selected-link" value="repo_source" data-pjax-transient>
      <meta name="google-analytics" content="UA-3769691-2">

    <meta content="collector.githubapp.com" name="octolytics-host" /><meta content="collector-cdn.github.com" name="octolytics-script-host" /><meta content="github" name="octolytics-app-id" /><meta content="C101A5F3:3827:3114742:545790DA" name="octolytics-dimension-request_id" />
    
    <meta content="Rails, view, blob#show" name="analytics-event" />

    
    
    <link rel="icon" type="image/x-icon" href="https://assets-cdn.github.com/favicon.ico">


    <meta content="authenticity_token" name="csrf-param" />
<meta content="2qjFBE/G3mTxDk5ExLh+Cfu0y44iJgxLCr7iMtvfLrP2f/Ri9CAB9+ttwS/HqIrA7s+DZDKPoOOjdPc7ugaGjg==" name="csrf-token" />

    <link href="https://assets-cdn.github.com/assets/github-b1c905f1bdc31980aab4c315e0dd478fad5d2898a408bd7390807a27ba60160b.css" media="all" rel="stylesheet" type="text/css" />
    <link href="https://assets-cdn.github.com/assets/github2-c009dbdc08ab7d5eda945f5f7a2d624e96c5afb53096b7e00af8f7db21cd0d4d.css" media="all" rel="stylesheet" type="text/css" />
    
    


    <meta http-equiv="x-pjax-version" content="cd6cedded9e16dca21e6769e51c54169">

      
  <meta name="description" content="flot-axislabels - Axis Labels Plugin for Flot">
  <meta name="go-import" content="github.com/markrcote/flot-axislabels git https://github.com/markrcote/flot-axislabels.git">

  <meta content="131299" name="octolytics-dimension-user_id" /><meta content="markrcote" name="octolytics-dimension-user_login" /><meta content="1207142" name="octolytics-dimension-repository_id" /><meta content="markrcote/flot-axislabels" name="octolytics-dimension-repository_nwo" /><meta content="true" name="octolytics-dimension-repository_public" /><meta content="true" name="octolytics-dimension-repository_is_fork" /><meta content="887270" name="octolytics-dimension-repository_parent_id" /><meta content="xuanluo/flot-axislabels" name="octolytics-dimension-repository_parent_nwo" /><meta content="887270" name="octolytics-dimension-repository_network_root_id" /><meta content="xuanluo/flot-axislabels" name="octolytics-dimension-repository_network_root_nwo" />
  <link href="https://github.com/markrcote/flot-axislabels/commits/master.atom" rel="alternate" title="Recent Commits to flot-axislabels:master" type="application/atom+xml">

  </head>


  <body class="logged_out  env-production macintosh vis-public fork page-blob">
    <a href="#start-of-content" tabindex="1" class="accessibility-aid js-skip-to-content">Skip to content</a>
    <div class="wrapper">
      
      
      
      


      
      <div class="header header-logged-out" role="banner">
  <div class="container clearfix">

    <a class="header-logo-wordmark" href="https://github.com/" ga-data-click="(Logged out) Header, go to homepage, icon:logo-wordmark">
      <span class="mega-octicon octicon-logo-github"></span>
    </a>

    <div class="header-actions" role="navigation">
        <a class="button primary" href="/join" data-ga-click="(Logged out) Header, clicked Sign up, text:sign-up">Sign up</a>
      <a class="button signin" href="/login?return_to=%2Fmarkrcote%2Fflot-axislabels%2Fblob%2Fmaster%2Fjquery.flot.axislabels.js" data-ga-click="(Logged out) Header, clicked Sign in, text:sign-in">Sign in</a>
    </div>

    <div class="site-search repo-scope js-site-search" role="search">
      <form accept-charset="UTF-8" action="/markrcote/flot-axislabels/search" class="js-site-search-form" data-global-search-url="/search" data-repo-search-url="/markrcote/flot-axislabels/search" method="get"><div style="margin:0;padding:0;display:inline"><input name="utf8" type="hidden" value="&#x2713;" /></div>
  <input type="text"
    class="js-site-search-field is-clearable"
    data-hotkey="s"
    name="q"
    placeholder="Search"
    data-global-scope-placeholder="Search GitHub"
    data-repo-scope-placeholder="Search"
    tabindex="1"
    autocapitalize="off">
  <div class="scope-badge">This repository</div>
</form>
    </div>

      <ul class="header-nav left" role="navigation">
          <li class="header-nav-item">
            <a class="header-nav-link" href="/explore" data-ga-click="(Logged out) Header, go to explore, text:explore">Explore</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/features" data-ga-click="(Logged out) Header, go to features, text:features">Features</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="https://enterprise.github.com/" data-ga-click="(Logged out) Header, go to enterprise, text:enterprise">Enterprise</a>
          </li>
          <li class="header-nav-item">
            <a class="header-nav-link" href="/blog" data-ga-click="(Logged out) Header, go to blog, text:blog">Blog</a>
          </li>
      </ul>

  </div>
</div>



      <div id="start-of-content" class="accessibility-aid"></div>
          <div class="site" itemscope itemtype="http://schema.org/WebPage">
    <div id="js-flash-container">
      
    </div>
    <div class="pagehead repohead instapaper_ignore readability-menu">
      <div class="container">
        
<ul class="pagehead-actions">


  <li>
      <a href="/login?return_to=%2Fmarkrcote%2Fflot-axislabels"
    class="minibutton with-count star-button tooltipped tooltipped-n"
    aria-label="You must be signed in to star a repository" rel="nofollow">
    <span class="octicon octicon-star"></span>
    Star
  </a>

    <a class="social-count js-social-count" href="/markrcote/flot-axislabels/stargazers">
      50
    </a>

  </li>

    <li>
      <a href="/login?return_to=%2Fmarkrcote%2Fflot-axislabels"
        class="minibutton with-count js-toggler-target fork-button tooltipped tooltipped-n"
        aria-label="You must be signed in to fork a repository" rel="nofollow">
        <span class="octicon octicon-repo-forked"></span>
        Fork
      </a>
      <a href="/markrcote/flot-axislabels/network" class="social-count">
        67
      </a>
    </li>
</ul>

        <h1 itemscope itemtype="http://data-vocabulary.org/Breadcrumb" class="entry-title public">
          <span class="mega-octicon octicon-repo-forked"></span>
          <span class="author"><a href="/markrcote" class="url fn" itemprop="url" rel="author"><span itemprop="title">markrcote</span></a></span><!--
       --><span class="path-divider">/</span><!--
       --><strong><a href="/markrcote/flot-axislabels" class="js-current-repository js-repo-home-link" data-pjax-container-selector="#js-repo-pjax-container">flot-axislabels</a></strong>

          <span class="page-context-loader">
            <img alt="" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
          </span>

            <span class="fork-flag">
              <span class="text">forked from <a href="/xuanluo/flot-axislabels">xuanluo/flot-axislabels</a></span>
            </span>
        </h1>
      </div><!-- /.container -->
    </div><!-- /.repohead -->

    <div class="container">
      <div class="repository-with-sidebar repo-container new-discussion-timeline  ">
        <div class="repository-sidebar clearfix">
            
<nav class="sunken-menu repo-nav js-repo-nav js-sidenav-container-pjax js-octicon-loaders" role="navigation" data-issue-count-url="/markrcote/flot-axislabels/issues/counts" data-pjax-container-selector="#js-repo-pjax-container">
  <ul class="sunken-menu-group">
    <li class="tooltipped tooltipped-w" aria-label="Code">
      <a href="/markrcote/flot-axislabels" aria-label="Code" class="selected js-selected-navigation-item sunken-menu-item" data-hotkey="g c" data-pjax="true" data-selected-links="repo_source repo_downloads repo_commits repo_releases repo_tags repo_branches /markrcote/flot-axislabels">
        <span class="octicon octicon-code"></span> <span class="full-word">Code</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

      <li class="tooltipped tooltipped-w" aria-label="Issues">
        <a href="/markrcote/flot-axislabels/issues" aria-label="Issues" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g i" data-selected-links="repo_issues repo_labels repo_milestones /markrcote/flot-axislabels/issues">
          <span class="octicon octicon-issue-opened"></span> <span class="full-word">Issues</span>
          <span class="js-issue-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>      </li>

    <li class="tooltipped tooltipped-w" aria-label="Pull Requests">
      <a href="/markrcote/flot-axislabels/pulls" aria-label="Pull Requests" class="js-selected-navigation-item sunken-menu-item js-disable-pjax" data-hotkey="g p" data-selected-links="repo_pulls /markrcote/flot-axislabels/pulls">
          <span class="octicon octicon-git-pull-request"></span> <span class="full-word">Pull Requests</span>
          <span class="js-pull-replace-counter"></span>
          <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>


  </ul>
  <div class="sunken-menu-separator"></div>
  <ul class="sunken-menu-group">

    <li class="tooltipped tooltipped-w" aria-label="Pulse">
      <a href="/markrcote/flot-axislabels/pulse/weekly" aria-label="Pulse" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="pulse /markrcote/flot-axislabels/pulse/weekly">
        <span class="octicon octicon-pulse"></span> <span class="full-word">Pulse</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>

    <li class="tooltipped tooltipped-w" aria-label="Graphs">
      <a href="/markrcote/flot-axislabels/graphs" aria-label="Graphs" class="js-selected-navigation-item sunken-menu-item" data-pjax="true" data-selected-links="repo_graphs repo_contributors /markrcote/flot-axislabels/graphs">
        <span class="octicon octicon-graph"></span> <span class="full-word">Graphs</span>
        <img alt="" class="mini-loader" height="16" src="https://assets-cdn.github.com/images/spinners/octocat-spinner-32.gif" width="16" />
</a>    </li>
  </ul>


</nav>

              <div class="only-with-full-nav">
                
  
<div class="clone-url open"
  data-protocol-type="http"
  data-url="/users/set_protocol?protocol_selector=http&amp;protocol_type=clone">
  <h3><span class="text-emphasized">HTTPS</span> clone URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/markrcote/flot-axislabels.git" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/markrcote/flot-axislabels.git" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>

  
<div class="clone-url "
  data-protocol-type="subversion"
  data-url="/users/set_protocol?protocol_selector=subversion&amp;protocol_type=clone">
  <h3><span class="text-emphasized">Subversion</span> checkout URL</h3>
  <div class="input-group">
    <input type="text" class="input-mini input-monospace js-url-field"
           value="https://github.com/markrcote/flot-axislabels" readonly="readonly">
    <span class="input-group-button">
      <button aria-label="Copy to clipboard" class="js-zeroclipboard minibutton zeroclipboard-button" data-clipboard-text="https://github.com/markrcote/flot-axislabels" data-copied-hint="Copied!" type="button"><span class="octicon octicon-clippy"></span></button>
    </span>
  </div>
</div>


<p class="clone-options">You can clone with
      <a href="#" class="js-clone-selector" data-protocol="http">HTTPS</a>
      or <a href="#" class="js-clone-selector" data-protocol="subversion">Subversion</a>.
  <a href="https://help.github.com/articles/which-remote-url-should-i-use" class="help tooltipped tooltipped-n" aria-label="Get help on which URL is right for you.">
    <span class="octicon octicon-question"></span>
  </a>
</p>

  <a href="http://mac.github.com" data-url="github-mac://openRepo/https://github.com/markrcote/flot-axislabels" class="minibutton sidebar-button js-conduit-rewrite-url" title="Save markrcote/flot-axislabels to your computer and use it in GitHub Desktop." aria-label="Save markrcote/flot-axislabels to your computer and use it in GitHub Desktop.">
    <span class="octicon octicon-device-desktop"></span>
    Clone in Desktop
  </a>


                <a href="/markrcote/flot-axislabels/archive/master.zip"
                   class="minibutton sidebar-button"
                   aria-label="Download the contents of markrcote/flot-axislabels as a zip file"
                   title="Download the contents of markrcote/flot-axislabels as a zip file"
                   rel="nofollow">
                  <span class="octicon octicon-cloud-download"></span>
                  Download ZIP
                </a>
              </div>
        </div><!-- /.repository-sidebar -->

        <div id="js-repo-pjax-container" class="repository-content context-loader-container" data-pjax-container>
          

<a href="/markrcote/flot-axislabels/blob/378199663d3a6f337970c1b3fdf857af4240c780/jquery.flot.axislabels.js" class="hidden js-permalink-shortcut" data-hotkey="y">Permalink</a>

<!-- blob contrib key: blob_contributors:v21:af6211a74c88784c01acd7afa900cea2 -->

<div class="file-navigation">
  
<div class="select-menu js-menu-container js-select-menu left">
  <span class="minibutton select-menu-button js-menu-target css-truncate" data-hotkey="w"
    data-master-branch="master"
    data-ref="master"
    title="master"
    role="button" aria-label="Switch branches or tags" tabindex="0" aria-haspopup="true">
    <span class="octicon octicon-git-branch"></span>
    <i>branch:</i>
    <span class="js-select-button css-truncate-target">master</span>
  </span>

  <div class="select-menu-modal-holder js-menu-content js-navigation-container" data-pjax aria-hidden="true">

    <div class="select-menu-modal">
      <div class="select-menu-header">
        <span class="select-menu-title">Switch branches/tags</span>
        <span class="octicon octicon-x js-menu-close" role="button" aria-label="Close"></span>
      </div> <!-- /.select-menu-header -->

      <div class="select-menu-filters">
        <div class="select-menu-text-filter">
          <input type="text" aria-label="Filter branches/tags" id="context-commitish-filter-field" class="js-filterable-field js-navigation-enable" placeholder="Filter branches/tags">
        </div>
        <div class="select-menu-tabs">
          <ul>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="branches" class="js-select-menu-tab">Branches</a>
            </li>
            <li class="select-menu-tab">
              <a href="#" data-tab-filter="tags" class="js-select-menu-tab">Tags</a>
            </li>
          </ul>
        </div><!-- /.select-menu-tabs -->
      </div><!-- /.select-menu-filters -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="branches">

        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item selected">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/markrcote/flot-axislabels/blob/master/jquery.flot.axislabels.js"
                 data-name="master"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="master">master</a>
            </div> <!-- /.select-menu-item -->
        </div>

          <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

      <div class="select-menu-list select-menu-tab-bucket js-select-menu-tab-bucket" data-tab-filter="tags">
        <div data-filterable-for="context-commitish-filter-field" data-filterable-type="substring">


            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/markrcote/flot-axislabels/tree/release-2.0.1/jquery.flot.axislabels.js"
                 data-name="release-2.0.1"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="release-2.0.1">release-2.0.1</a>
            </div> <!-- /.select-menu-item -->
            <div class="select-menu-item js-navigation-item ">
              <span class="select-menu-item-icon octicon octicon-check"></span>
              <a href="/markrcote/flot-axislabels/tree/release-2.0/jquery.flot.axislabels.js"
                 data-name="release-2.0"
                 data-skip-pjax="true"
                 rel="nofollow"
                 class="js-navigation-open select-menu-item-text css-truncate-target"
                 title="release-2.0">release-2.0</a>
            </div> <!-- /.select-menu-item -->
        </div>

        <div class="select-menu-no-results">Nothing to show</div>
      </div> <!-- /.select-menu-list -->

    </div> <!-- /.select-menu-modal -->
  </div> <!-- /.select-menu-modal-holder -->
</div> <!-- /.select-menu -->

  <div class="button-group right">
    <a href="/markrcote/flot-axislabels/find/master"
          class="js-show-file-finder minibutton empty-icon tooltipped tooltipped-s"
          data-pjax
          data-hotkey="t"
          aria-label="Quickly jump between files">
      <span class="octicon octicon-list-unordered"></span>
    </a>
    <button class="js-zeroclipboard minibutton zeroclipboard-button"
          data-clipboard-text="jquery.flot.axislabels.js"
          aria-label="Copy to clipboard"
          data-copied-hint="Copied!">
      <span class="octicon octicon-clippy"></span>
    </button>
  </div>

  <div class="breadcrumb">
    <span class='repo-root js-repo-root'><span itemscope="" itemtype="http://data-vocabulary.org/Breadcrumb"><a href="/markrcote/flot-axislabels" class="" data-branch="master" data-direction="back" data-pjax="true" itemscope="url"><span itemprop="title">flot-axislabels</span></a></span></span><span class="separator"> / </span><strong class="final-path">jquery.flot.axislabels.js</strong>
  </div>
</div>


  <div class="commit file-history-tease">
    <div class="file-history-tease-header">
        <img alt="Mark Côté" class="avatar" data-user="131299" height="24" src="https://avatars1.githubusercontent.com/u/131299?v=2&amp;s=48" width="24" />
        <span class="author"><a href="/markrcote" rel="author">markrcote</a></span>
        <time datetime="2014-05-04T14:08:52Z" is="relative-time">May 4, 2014</time>
        <div class="commit-title">
            <a href="/markrcote/flot-axislabels/commit/2e9bc0d8e2c810f726fba1ac83a6cb234bbd2665" class="message" data-pjax="true" title="Remove axisLabelColour from CSS-transform mode.

Since labels are fully stylable in CSS-transform mode, there&#39;s not
much point in supporting an explicit option.  Plain HTML mode
doesn&#39;t support it either.">Remove axisLabelColour from CSS-transform mode.</a>
        </div>
    </div>

    <div class="participation">
      <p class="quickstat">
        <a href="#blob_contributors_box" rel="facebox">
          <strong>7</strong>
           contributors
        </a>
      </p>
          <a class="avatar-link tooltipped tooltipped-s" aria-label="markrcote" href="/markrcote/flot-axislabels/commits/master/jquery.flot.axislabels.js?author=markrcote"><img alt="Mark Côté" class="avatar" data-user="131299" height="20" src="https://avatars3.githubusercontent.com/u/131299?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="xuanluo" href="/markrcote/flot-axislabels/commits/master/jquery.flot.axislabels.js?author=xuanluo"><img alt="xuanluo" class="avatar" data-user="387257" height="20" src="https://avatars2.githubusercontent.com/u/387257?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="andig" href="/markrcote/flot-axislabels/commits/master/jquery.flot.axislabels.js?author=andig"><img alt="andig" class="avatar" data-user="184815" height="20" src="https://avatars3.githubusercontent.com/u/184815?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="headchopperz" href="/markrcote/flot-axislabels/commits/master/jquery.flot.axislabels.js?author=headchopperz"><img alt="headchopperz" class="avatar" data-user="2070570" height="20" src="https://avatars2.githubusercontent.com/u/2070570?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="jthereliable" href="/markrcote/flot-axislabels/commits/master/jquery.flot.axislabels.js?author=jthereliable"><img alt="Jesse Zhang" class="avatar" data-user="556737" height="20" src="https://avatars1.githubusercontent.com/u/556737?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="klaemo" href="/markrcote/flot-axislabels/commits/master/jquery.flot.axislabels.js?author=klaemo"><img alt="Clemens Stolle" class="avatar" data-user="778624" height="20" src="https://avatars1.githubusercontent.com/u/778624?v=2&amp;s=40" width="20" /></a>
    <a class="avatar-link tooltipped tooltipped-s" aria-label="apinkney97" href="/markrcote/flot-axislabels/commits/master/jquery.flot.axislabels.js?author=apinkney97"><img alt="Alex Pinkney" class="avatar" data-user="3755307" height="20" src="https://avatars1.githubusercontent.com/u/3755307?v=2&amp;s=40" width="20" /></a>


    </div>
    <div id="blob_contributors_box" style="display:none">
      <h2 class="facebox-header">Users who have contributed to this file</h2>
      <ul class="facebox-user-list">
          <li class="facebox-user-list-item">
            <img alt="Mark Côté" data-user="131299" height="24" src="https://avatars1.githubusercontent.com/u/131299?v=2&amp;s=48" width="24" />
            <a href="/markrcote">markrcote</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="xuanluo" data-user="387257" height="24" src="https://avatars0.githubusercontent.com/u/387257?v=2&amp;s=48" width="24" />
            <a href="/xuanluo">xuanluo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="andig" data-user="184815" height="24" src="https://avatars1.githubusercontent.com/u/184815?v=2&amp;s=48" width="24" />
            <a href="/andig">andig</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="headchopperz" data-user="2070570" height="24" src="https://avatars0.githubusercontent.com/u/2070570?v=2&amp;s=48" width="24" />
            <a href="/headchopperz">headchopperz</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Jesse Zhang" data-user="556737" height="24" src="https://avatars3.githubusercontent.com/u/556737?v=2&amp;s=48" width="24" />
            <a href="/jthereliable">jthereliable</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Clemens Stolle" data-user="778624" height="24" src="https://avatars3.githubusercontent.com/u/778624?v=2&amp;s=48" width="24" />
            <a href="/klaemo">klaemo</a>
          </li>
          <li class="facebox-user-list-item">
            <img alt="Alex Pinkney" data-user="3755307" height="24" src="https://avatars3.githubusercontent.com/u/3755307?v=2&amp;s=48" width="24" />
            <a href="/apinkney97">apinkney97</a>
          </li>
      </ul>
    </div>
  </div>

<div class="file-box">
  <div class="file">
    <div class="meta clearfix">
      <div class="info file-name">
          <span>464 lines (409 sloc)</span>
          <span class="meta-divider"></span>
        <span>19.455 kb</span>
      </div>
      <div class="actions">
        <div class="button-group">
          <a href="/markrcote/flot-axislabels/raw/master/jquery.flot.axislabels.js" class="minibutton " id="raw-url">Raw</a>
            <a href="/markrcote/flot-axislabels/blame/master/jquery.flot.axislabels.js" class="minibutton js-update-url-with-hash">Blame</a>
          <a href="/markrcote/flot-axislabels/commits/master/jquery.flot.axislabels.js" class="minibutton " rel="nofollow">History</a>
        </div><!-- /.button-group -->

          <a class="octicon-button tooltipped tooltipped-nw js-conduit-openfile-check"
             href="http://mac.github.com"
             data-url="github-mac://openRepo/https://github.com/markrcote/flot-axislabels?branch=master&amp;filepath=jquery.flot.axislabels.js"
             aria-label="Open this file in GitHub for Mac"
             data-failed-title="Your version of GitHub for Mac is too old to open this file. Try checking for updates.">
              <span class="octicon octicon-device-desktop"></span>
          </a>

            <a class="octicon-button disabled tooltipped tooltipped-w" href="#"
               aria-label="You must be signed in to make or propose changes"><span class="octicon octicon-pencil"></span></a>

          <a class="octicon-button danger disabled tooltipped tooltipped-w" href="#"
             aria-label="You must be signed in to make or propose changes">
          <span class="octicon octicon-trashcan"></span>
        </a>
      </div><!-- /.actions -->
    </div>
    
  <div class="blob-wrapper data type-javascript">
      <table class="highlight tab-size-8 js-file-line-container">
      <tr>
        <td id="L1" class="blob-num js-line-number" data-line-number="1"></td>
        <td id="LC1" class="blob-code js-file-line"><span class="cm">/*</span></td>
      </tr>
      <tr>
        <td id="L2" class="blob-num js-line-number" data-line-number="2"></td>
        <td id="LC2" class="blob-code js-file-line"><span class="cm">Axis Labels Plugin for flot.</span></td>
      </tr>
      <tr>
        <td id="L3" class="blob-num js-line-number" data-line-number="3"></td>
        <td id="LC3" class="blob-code js-file-line"><span class="cm">http://github.com/markrcote/flot-axislabels</span></td>
      </tr>
      <tr>
        <td id="L4" class="blob-num js-line-number" data-line-number="4"></td>
        <td id="LC4" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L5" class="blob-num js-line-number" data-line-number="5"></td>
        <td id="LC5" class="blob-code js-file-line"><span class="cm">Original code is Copyright (c) 2010 Xuan Luo.</span></td>
      </tr>
      <tr>
        <td id="L6" class="blob-num js-line-number" data-line-number="6"></td>
        <td id="LC6" class="blob-code js-file-line"><span class="cm">Original code was released under the GPLv3 license by Xuan Luo, September 2010.</span></td>
      </tr>
      <tr>
        <td id="L7" class="blob-num js-line-number" data-line-number="7"></td>
        <td id="LC7" class="blob-code js-file-line"><span class="cm">Original code was rereleased under the MIT license by Xuan Luo, April 2012.</span></td>
      </tr>
      <tr>
        <td id="L8" class="blob-num js-line-number" data-line-number="8"></td>
        <td id="LC8" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L9" class="blob-num js-line-number" data-line-number="9"></td>
        <td id="LC9" class="blob-code js-file-line"><span class="cm">Permission is hereby granted, free of charge, to any person obtaining</span></td>
      </tr>
      <tr>
        <td id="L10" class="blob-num js-line-number" data-line-number="10"></td>
        <td id="LC10" class="blob-code js-file-line"><span class="cm">a copy of this software and associated documentation files (the</span></td>
      </tr>
      <tr>
        <td id="L11" class="blob-num js-line-number" data-line-number="11"></td>
        <td id="LC11" class="blob-code js-file-line"><span class="cm">&quot;Software&quot;), to deal in the Software without restriction, including</span></td>
      </tr>
      <tr>
        <td id="L12" class="blob-num js-line-number" data-line-number="12"></td>
        <td id="LC12" class="blob-code js-file-line"><span class="cm">without limitation the rights to use, copy, modify, merge, publish,</span></td>
      </tr>
      <tr>
        <td id="L13" class="blob-num js-line-number" data-line-number="13"></td>
        <td id="LC13" class="blob-code js-file-line"><span class="cm">distribute, sublicense, and/or sell copies of the Software, and to</span></td>
      </tr>
      <tr>
        <td id="L14" class="blob-num js-line-number" data-line-number="14"></td>
        <td id="LC14" class="blob-code js-file-line"><span class="cm">permit persons to whom the Software is furnished to do so, subject to</span></td>
      </tr>
      <tr>
        <td id="L15" class="blob-num js-line-number" data-line-number="15"></td>
        <td id="LC15" class="blob-code js-file-line"><span class="cm">the following conditions:</span></td>
      </tr>
      <tr>
        <td id="L16" class="blob-num js-line-number" data-line-number="16"></td>
        <td id="LC16" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L17" class="blob-num js-line-number" data-line-number="17"></td>
        <td id="LC17" class="blob-code js-file-line"><span class="cm">The above copyright notice and this permission notice shall be</span></td>
      </tr>
      <tr>
        <td id="L18" class="blob-num js-line-number" data-line-number="18"></td>
        <td id="LC18" class="blob-code js-file-line"><span class="cm">included in all copies or substantial portions of the Software.</span></td>
      </tr>
      <tr>
        <td id="L19" class="blob-num js-line-number" data-line-number="19"></td>
        <td id="LC19" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L20" class="blob-num js-line-number" data-line-number="20"></td>
        <td id="LC20" class="blob-code js-file-line"><span class="cm">THE SOFTWARE IS PROVIDED &quot;AS IS&quot;, WITHOUT WARRANTY OF ANY KIND,</span></td>
      </tr>
      <tr>
        <td id="L21" class="blob-num js-line-number" data-line-number="21"></td>
        <td id="LC21" class="blob-code js-file-line"><span class="cm">EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF</span></td>
      </tr>
      <tr>
        <td id="L22" class="blob-num js-line-number" data-line-number="22"></td>
        <td id="LC22" class="blob-code js-file-line"><span class="cm">MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND</span></td>
      </tr>
      <tr>
        <td id="L23" class="blob-num js-line-number" data-line-number="23"></td>
        <td id="LC23" class="blob-code js-file-line"><span class="cm">NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE</span></td>
      </tr>
      <tr>
        <td id="L24" class="blob-num js-line-number" data-line-number="24"></td>
        <td id="LC24" class="blob-code js-file-line"><span class="cm">LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION</span></td>
      </tr>
      <tr>
        <td id="L25" class="blob-num js-line-number" data-line-number="25"></td>
        <td id="LC25" class="blob-code js-file-line"><span class="cm">OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION</span></td>
      </tr>
      <tr>
        <td id="L26" class="blob-num js-line-number" data-line-number="26"></td>
        <td id="LC26" class="blob-code js-file-line"><span class="cm">WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</span></td>
      </tr>
      <tr>
        <td id="L27" class="blob-num js-line-number" data-line-number="27"></td>
        <td id="LC27" class="blob-code js-file-line"><span class="cm"> */</span></td>
      </tr>
      <tr>
        <td id="L28" class="blob-num js-line-number" data-line-number="28"></td>
        <td id="LC28" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L29" class="blob-num js-line-number" data-line-number="29"></td>
        <td id="LC29" class="blob-code js-file-line"><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">$</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L30" class="blob-num js-line-number" data-line-number="30"></td>
        <td id="LC30" class="blob-code js-file-line">    <span class="kd">var</span> <span class="nx">options</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L31" class="blob-num js-line-number" data-line-number="31"></td>
        <td id="LC31" class="blob-code js-file-line">      <span class="nx">axisLabels</span><span class="o">:</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L32" class="blob-num js-line-number" data-line-number="32"></td>
        <td id="LC32" class="blob-code js-file-line">        <span class="nx">show</span><span class="o">:</span> <span class="kc">true</span></td>
      </tr>
      <tr>
        <td id="L33" class="blob-num js-line-number" data-line-number="33"></td>
        <td id="LC33" class="blob-code js-file-line">      <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L34" class="blob-num js-line-number" data-line-number="34"></td>
        <td id="LC34" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L35" class="blob-num js-line-number" data-line-number="35"></td>
        <td id="LC35" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L36" class="blob-num js-line-number" data-line-number="36"></td>
        <td id="LC36" class="blob-code js-file-line">    <span class="kd">function</span> <span class="nx">canvasSupported</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L37" class="blob-num js-line-number" data-line-number="37"></td>
        <td id="LC37" class="blob-code js-file-line">        <span class="k">return</span> <span class="o">!!</span><span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;canvas&#39;</span><span class="p">).</span><span class="nx">getContext</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L38" class="blob-num js-line-number" data-line-number="38"></td>
        <td id="LC38" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L39" class="blob-num js-line-number" data-line-number="39"></td>
        <td id="LC39" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L40" class="blob-num js-line-number" data-line-number="40"></td>
        <td id="LC40" class="blob-code js-file-line">    <span class="kd">function</span> <span class="nx">canvasTextSupported</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L41" class="blob-num js-line-number" data-line-number="41"></td>
        <td id="LC41" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">canvasSupported</span><span class="p">())</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L42" class="blob-num js-line-number" data-line-number="42"></td>
        <td id="LC42" class="blob-code js-file-line">            <span class="k">return</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L43" class="blob-num js-line-number" data-line-number="43"></td>
        <td id="LC43" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L44" class="blob-num js-line-number" data-line-number="44"></td>
        <td id="LC44" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">dummy_canvas</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;canvas&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L45" class="blob-num js-line-number" data-line-number="45"></td>
        <td id="LC45" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">context</span> <span class="o">=</span> <span class="nx">dummy_canvas</span><span class="p">.</span><span class="nx">getContext</span><span class="p">(</span><span class="s1">&#39;2d&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L46" class="blob-num js-line-number" data-line-number="46"></td>
        <td id="LC46" class="blob-code js-file-line">        <span class="k">return</span> <span class="k">typeof</span> <span class="nx">context</span><span class="p">.</span><span class="nx">fillText</span> <span class="o">==</span> <span class="s1">&#39;function&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L47" class="blob-num js-line-number" data-line-number="47"></td>
        <td id="LC47" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L48" class="blob-num js-line-number" data-line-number="48"></td>
        <td id="LC48" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L49" class="blob-num js-line-number" data-line-number="49"></td>
        <td id="LC49" class="blob-code js-file-line">    <span class="kd">function</span> <span class="nx">css3TransitionSupported</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L50" class="blob-num js-line-number" data-line-number="50"></td>
        <td id="LC50" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">div</span> <span class="o">=</span> <span class="nb">document</span><span class="p">.</span><span class="nx">createElement</span><span class="p">(</span><span class="s1">&#39;div&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L51" class="blob-num js-line-number" data-line-number="51"></td>
        <td id="LC51" class="blob-code js-file-line">        <span class="k">return</span> <span class="k">typeof</span> <span class="nx">div</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">MozTransition</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span>    <span class="c1">// Gecko</span></td>
      </tr>
      <tr>
        <td id="L52" class="blob-num js-line-number" data-line-number="52"></td>
        <td id="LC52" class="blob-code js-file-line">            <span class="o">||</span> <span class="k">typeof</span> <span class="nx">div</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">OTransition</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span>      <span class="c1">// Opera</span></td>
      </tr>
      <tr>
        <td id="L53" class="blob-num js-line-number" data-line-number="53"></td>
        <td id="LC53" class="blob-code js-file-line">            <span class="o">||</span> <span class="k">typeof</span> <span class="nx">div</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">webkitTransition</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span> <span class="c1">// WebKit</span></td>
      </tr>
      <tr>
        <td id="L54" class="blob-num js-line-number" data-line-number="54"></td>
        <td id="LC54" class="blob-code js-file-line">            <span class="o">||</span> <span class="k">typeof</span> <span class="nx">div</span><span class="p">.</span><span class="nx">style</span><span class="p">.</span><span class="nx">transition</span> <span class="o">!=</span> <span class="s1">&#39;undefined&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L55" class="blob-num js-line-number" data-line-number="55"></td>
        <td id="LC55" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L56" class="blob-num js-line-number" data-line-number="56"></td>
        <td id="LC56" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L57" class="blob-num js-line-number" data-line-number="57"></td>
        <td id="LC57" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L58" class="blob-num js-line-number" data-line-number="58"></td>
        <td id="LC58" class="blob-code js-file-line">    <span class="kd">function</span> <span class="nx">AxisLabel</span><span class="p">(</span><span class="nx">axisName</span><span class="p">,</span> <span class="nx">position</span><span class="p">,</span> <span class="nx">padding</span><span class="p">,</span> <span class="nx">plot</span><span class="p">,</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L59" class="blob-num js-line-number" data-line-number="59"></td>
        <td id="LC59" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">axisName</span> <span class="o">=</span> <span class="nx">axisName</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L60" class="blob-num js-line-number" data-line-number="60"></td>
        <td id="LC60" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">=</span> <span class="nx">position</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L61" class="blob-num js-line-number" data-line-number="61"></td>
        <td id="LC61" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">padding</span> <span class="o">=</span> <span class="nx">padding</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L62" class="blob-num js-line-number" data-line-number="62"></td>
        <td id="LC62" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">plot</span> <span class="o">=</span> <span class="nx">plot</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L63" class="blob-num js-line-number" data-line-number="63"></td>
        <td id="LC63" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">opts</span> <span class="o">=</span> <span class="nx">opts</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L64" class="blob-num js-line-number" data-line-number="64"></td>
        <td id="LC64" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L65" class="blob-num js-line-number" data-line-number="65"></td>
        <td id="LC65" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L66" class="blob-num js-line-number" data-line-number="66"></td>
        <td id="LC66" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L67" class="blob-num js-line-number" data-line-number="67"></td>
        <td id="LC67" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L68" class="blob-num js-line-number" data-line-number="68"></td>
        <td id="LC68" class="blob-code js-file-line">    <span class="nx">AxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">cleanup</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L69" class="blob-num js-line-number" data-line-number="69"></td>
        <td id="LC69" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L70" class="blob-num js-line-number" data-line-number="70"></td>
        <td id="LC70" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L71" class="blob-num js-line-number" data-line-number="71"></td>
        <td id="LC71" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L72" class="blob-num js-line-number" data-line-number="72"></td>
        <td id="LC72" class="blob-code js-file-line">    <span class="nx">CanvasAxisLabel</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">AxisLabel</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L73" class="blob-num js-line-number" data-line-number="73"></td>
        <td id="LC73" class="blob-code js-file-line">    <span class="nx">CanvasAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span> <span class="o">=</span> <span class="nx">CanvasAxisLabel</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L74" class="blob-num js-line-number" data-line-number="74"></td>
        <td id="LC74" class="blob-code js-file-line">    <span class="kd">function</span> <span class="nx">CanvasAxisLabel</span><span class="p">(</span><span class="nx">axisName</span><span class="p">,</span> <span class="nx">position</span><span class="p">,</span> <span class="nx">padding</span><span class="p">,</span> <span class="nx">plot</span><span class="p">,</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L75" class="blob-num js-line-number" data-line-number="75"></td>
        <td id="LC75" class="blob-code js-file-line">        <span class="nx">AxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">axisName</span><span class="p">,</span> <span class="nx">position</span><span class="p">,</span> <span class="nx">padding</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L76" class="blob-num js-line-number" data-line-number="76"></td>
        <td id="LC76" class="blob-code js-file-line">                                             <span class="nx">plot</span><span class="p">,</span> <span class="nx">opts</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L77" class="blob-num js-line-number" data-line-number="77"></td>
        <td id="LC77" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L78" class="blob-num js-line-number" data-line-number="78"></td>
        <td id="LC78" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L79" class="blob-num js-line-number" data-line-number="79"></td>
        <td id="LC79" class="blob-code js-file-line">    <span class="nx">CanvasAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">calculateSize</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L80" class="blob-num js-line-number" data-line-number="80"></td>
        <td id="LC80" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelFontSizePixels</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L81" class="blob-num js-line-number" data-line-number="81"></td>
        <td id="LC81" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelFontSizePixels</span> <span class="o">=</span> <span class="mi">14</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L82" class="blob-num js-line-number" data-line-number="82"></td>
        <td id="LC82" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelFontFamily</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L83" class="blob-num js-line-number" data-line-number="83"></td>
        <td id="LC83" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelFontFamily</span> <span class="o">=</span> <span class="s1">&#39;sans-serif&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L84" class="blob-num js-line-number" data-line-number="84"></td>
        <td id="LC84" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L85" class="blob-num js-line-number" data-line-number="85"></td>
        <td id="LC85" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">textWidth</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelFontSizePixels</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">padding</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L86" class="blob-num js-line-number" data-line-number="86"></td>
        <td id="LC86" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">textHeight</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelFontSizePixels</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">padding</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L87" class="blob-num js-line-number" data-line-number="87"></td>
        <td id="LC87" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;left&#39;</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;right&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L88" class="blob-num js-line-number" data-line-number="88"></td>
        <td id="LC88" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelFontSizePixels</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">padding</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L89" class="blob-num js-line-number" data-line-number="89"></td>
        <td id="LC89" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L90" class="blob-num js-line-number" data-line-number="90"></td>
        <td id="LC90" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L91" class="blob-num js-line-number" data-line-number="91"></td>
        <td id="LC91" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L92" class="blob-num js-line-number" data-line-number="92"></td>
        <td id="LC92" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelFontSizePixels</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">padding</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L93" class="blob-num js-line-number" data-line-number="93"></td>
        <td id="LC93" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L94" class="blob-num js-line-number" data-line-number="94"></td>
        <td id="LC94" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L95" class="blob-num js-line-number" data-line-number="95"></td>
        <td id="LC95" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L96" class="blob-num js-line-number" data-line-number="96"></td>
        <td id="LC96" class="blob-code js-file-line">    <span class="nx">CanvasAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">draw</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">box</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L97" class="blob-num js-line-number" data-line-number="97"></td>
        <td id="LC97" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelColour</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L98" class="blob-num js-line-number" data-line-number="98"></td>
        <td id="LC98" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelColour</span> <span class="o">=</span> <span class="s1">&#39;black&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L99" class="blob-num js-line-number" data-line-number="99"></td>
        <td id="LC99" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">ctx</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">plot</span><span class="p">.</span><span class="nx">getCanvas</span><span class="p">().</span><span class="nx">getContext</span><span class="p">(</span><span class="s1">&#39;2d&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L100" class="blob-num js-line-number" data-line-number="100"></td>
        <td id="LC100" class="blob-code js-file-line">        <span class="nx">ctx</span><span class="p">.</span><span class="nx">save</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L101" class="blob-num js-line-number" data-line-number="101"></td>
        <td id="LC101" class="blob-code js-file-line">        <span class="nx">ctx</span><span class="p">.</span><span class="nx">font</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelFontSizePixels</span> <span class="o">+</span> <span class="s1">&#39;px &#39;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L102" class="blob-num js-line-number" data-line-number="102"></td>
        <td id="LC102" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelFontFamily</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L103" class="blob-num js-line-number" data-line-number="103"></td>
        <td id="LC103" class="blob-code js-file-line">        <span class="nx">ctx</span><span class="p">.</span><span class="nx">fillStyle</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelColour</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L104" class="blob-num js-line-number" data-line-number="104"></td>
        <td id="LC104" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">width</span> <span class="o">=</span> <span class="nx">ctx</span><span class="p">.</span><span class="nx">measureText</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabel</span><span class="p">).</span><span class="nx">width</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L105" class="blob-num js-line-number" data-line-number="105"></td>
        <td id="LC105" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">height</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelFontSizePixels</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L106" class="blob-num js-line-number" data-line-number="106"></td>
        <td id="LC106" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">,</span> <span class="nx">angle</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L107" class="blob-num js-line-number" data-line-number="107"></td>
        <td id="LC107" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;top&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L108" class="blob-num js-line-number" data-line-number="108"></td>
        <td id="LC108" class="blob-code js-file-line">            <span class="nx">x</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">width</span><span class="o">/</span><span class="mi">2</span> <span class="o">-</span> <span class="nx">width</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L109" class="blob-num js-line-number" data-line-number="109"></td>
        <td id="LC109" class="blob-code js-file-line">            <span class="nx">y</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">height</span><span class="o">*</span><span class="mf">0.72</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L110" class="blob-num js-line-number" data-line-number="110"></td>
        <td id="LC110" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;bottom&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L111" class="blob-num js-line-number" data-line-number="111"></td>
        <td id="LC111" class="blob-code js-file-line">            <span class="nx">x</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">width</span><span class="o">/</span><span class="mi">2</span> <span class="o">-</span> <span class="nx">width</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L112" class="blob-num js-line-number" data-line-number="112"></td>
        <td id="LC112" class="blob-code js-file-line">            <span class="nx">y</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">height</span> <span class="o">-</span> <span class="nx">height</span><span class="o">*</span><span class="mf">0.72</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L113" class="blob-num js-line-number" data-line-number="113"></td>
        <td id="LC113" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;left&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L114" class="blob-num js-line-number" data-line-number="114"></td>
        <td id="LC114" class="blob-code js-file-line">            <span class="nx">x</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">height</span><span class="o">*</span><span class="mf">0.72</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L115" class="blob-num js-line-number" data-line-number="115"></td>
        <td id="LC115" class="blob-code js-file-line">            <span class="nx">y</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">height</span><span class="o">/</span><span class="mi">2</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">width</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L116" class="blob-num js-line-number" data-line-number="116"></td>
        <td id="LC116" class="blob-code js-file-line">            <span class="nx">angle</span> <span class="o">=</span> <span class="o">-</span><span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L117" class="blob-num js-line-number" data-line-number="117"></td>
        <td id="LC117" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;right&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L118" class="blob-num js-line-number" data-line-number="118"></td>
        <td id="LC118" class="blob-code js-file-line">            <span class="nx">x</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">width</span> <span class="o">-</span> <span class="nx">height</span><span class="o">*</span><span class="mf">0.72</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L119" class="blob-num js-line-number" data-line-number="119"></td>
        <td id="LC119" class="blob-code js-file-line">            <span class="nx">y</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">height</span><span class="o">/</span><span class="mi">2</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span> <span class="o">-</span> <span class="nx">width</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L120" class="blob-num js-line-number" data-line-number="120"></td>
        <td id="LC120" class="blob-code js-file-line">            <span class="nx">angle</span> <span class="o">=</span> <span class="nb">Math</span><span class="p">.</span><span class="nx">PI</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L121" class="blob-num js-line-number" data-line-number="121"></td>
        <td id="LC121" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L122" class="blob-num js-line-number" data-line-number="122"></td>
        <td id="LC122" class="blob-code js-file-line">        <span class="nx">ctx</span><span class="p">.</span><span class="nx">translate</span><span class="p">(</span><span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L123" class="blob-num js-line-number" data-line-number="123"></td>
        <td id="LC123" class="blob-code js-file-line">        <span class="nx">ctx</span><span class="p">.</span><span class="nx">rotate</span><span class="p">(</span><span class="nx">angle</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L124" class="blob-num js-line-number" data-line-number="124"></td>
        <td id="LC124" class="blob-code js-file-line">        <span class="nx">ctx</span><span class="p">.</span><span class="nx">fillText</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabel</span><span class="p">,</span> <span class="mi">0</span><span class="p">,</span> <span class="mi">0</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L125" class="blob-num js-line-number" data-line-number="125"></td>
        <td id="LC125" class="blob-code js-file-line">        <span class="nx">ctx</span><span class="p">.</span><span class="nx">restore</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L126" class="blob-num js-line-number" data-line-number="126"></td>
        <td id="LC126" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L127" class="blob-num js-line-number" data-line-number="127"></td>
        <td id="LC127" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L128" class="blob-num js-line-number" data-line-number="128"></td>
        <td id="LC128" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L129" class="blob-num js-line-number" data-line-number="129"></td>
        <td id="LC129" class="blob-code js-file-line">    <span class="nx">HtmlAxisLabel</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">AxisLabel</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L130" class="blob-num js-line-number" data-line-number="130"></td>
        <td id="LC130" class="blob-code js-file-line">    <span class="nx">HtmlAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span> <span class="o">=</span> <span class="nx">HtmlAxisLabel</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L131" class="blob-num js-line-number" data-line-number="131"></td>
        <td id="LC131" class="blob-code js-file-line">    <span class="kd">function</span> <span class="nx">HtmlAxisLabel</span><span class="p">(</span><span class="nx">axisName</span><span class="p">,</span> <span class="nx">position</span><span class="p">,</span> <span class="nx">padding</span><span class="p">,</span> <span class="nx">plot</span><span class="p">,</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L132" class="blob-num js-line-number" data-line-number="132"></td>
        <td id="LC132" class="blob-code js-file-line">        <span class="nx">AxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">axisName</span><span class="p">,</span> <span class="nx">position</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L133" class="blob-num js-line-number" data-line-number="133"></td>
        <td id="LC133" class="blob-code js-file-line">                                             <span class="nx">padding</span><span class="p">,</span> <span class="nx">plot</span><span class="p">,</span> <span class="nx">opts</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L134" class="blob-num js-line-number" data-line-number="134"></td>
        <td id="LC134" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">elem</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L135" class="blob-num js-line-number" data-line-number="135"></td>
        <td id="LC135" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L136" class="blob-num js-line-number" data-line-number="136"></td>
        <td id="LC136" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L137" class="blob-num js-line-number" data-line-number="137"></td>
        <td id="LC137" class="blob-code js-file-line">    <span class="nx">HtmlAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">calculateSize</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L138" class="blob-num js-line-number" data-line-number="138"></td>
        <td id="LC138" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">elem</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div class=&quot;axisLabels&quot; style=&quot;position:absolute;&quot;&gt;&#39;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L139" class="blob-num js-line-number" data-line-number="139"></td>
        <td id="LC139" class="blob-code js-file-line">                     <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabel</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L140" class="blob-num js-line-number" data-line-number="140"></td>
        <td id="LC140" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">plot</span><span class="p">.</span><span class="nx">getPlaceholder</span><span class="p">().</span><span class="nx">append</span><span class="p">(</span><span class="nx">elem</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L141" class="blob-num js-line-number" data-line-number="141"></td>
        <td id="LC141" class="blob-code js-file-line">        <span class="c1">// store height and width of label itself, for use in draw()</span></td>
      </tr>
      <tr>
        <td id="L142" class="blob-num js-line-number" data-line-number="142"></td>
        <td id="LC142" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">labelWidth</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">outerWidth</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L143" class="blob-num js-line-number" data-line-number="143"></td>
        <td id="LC143" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">labelHeight</span> <span class="o">=</span> <span class="nx">elem</span><span class="p">.</span><span class="nx">outerHeight</span><span class="p">(</span><span class="kc">true</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L144" class="blob-num js-line-number" data-line-number="144"></td>
        <td id="LC144" class="blob-code js-file-line">        <span class="nx">elem</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L145" class="blob-num js-line-number" data-line-number="145"></td>
        <td id="LC145" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L146" class="blob-num js-line-number" data-line-number="146"></td>
        <td id="LC146" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L147" class="blob-num js-line-number" data-line-number="147"></td>
        <td id="LC147" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;left&#39;</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;right&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L148" class="blob-num js-line-number" data-line-number="148"></td>
        <td id="LC148" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelWidth</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">padding</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L149" class="blob-num js-line-number" data-line-number="149"></td>
        <td id="LC149" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L150" class="blob-num js-line-number" data-line-number="150"></td>
        <td id="LC150" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelHeight</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">padding</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L151" class="blob-num js-line-number" data-line-number="151"></td>
        <td id="LC151" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L152" class="blob-num js-line-number" data-line-number="152"></td>
        <td id="LC152" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L153" class="blob-num js-line-number" data-line-number="153"></td>
        <td id="LC153" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L154" class="blob-num js-line-number" data-line-number="154"></td>
        <td id="LC154" class="blob-code js-file-line">    <span class="nx">HtmlAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">cleanup</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L155" class="blob-num js-line-number" data-line-number="155"></td>
        <td id="LC155" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L156" class="blob-num js-line-number" data-line-number="156"></td>
        <td id="LC156" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">remove</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L157" class="blob-num js-line-number" data-line-number="157"></td>
        <td id="LC157" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L158" class="blob-num js-line-number" data-line-number="158"></td>
        <td id="LC158" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L159" class="blob-num js-line-number" data-line-number="159"></td>
        <td id="LC159" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L160" class="blob-num js-line-number" data-line-number="160"></td>
        <td id="LC160" class="blob-code js-file-line">    <span class="nx">HtmlAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">draw</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">box</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L161" class="blob-num js-line-number" data-line-number="161"></td>
        <td id="LC161" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">plot</span><span class="p">.</span><span class="nx">getPlaceholder</span><span class="p">().</span><span class="nx">find</span><span class="p">(</span><span class="s1">&#39;#&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">axisName</span> <span class="o">+</span> <span class="s1">&#39;Label&#39;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L162" class="blob-num js-line-number" data-line-number="162"></td>
        <td id="LC162" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div id=&quot;&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">axisName</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L163" class="blob-num js-line-number" data-line-number="163"></td>
        <td id="LC163" class="blob-code js-file-line">                      <span class="s1">&#39;Label&quot; &quot; class=&quot;axisLabels&quot; style=&quot;position:absolute;&quot;&gt;&#39;</span></td>
      </tr>
      <tr>
        <td id="L164" class="blob-num js-line-number" data-line-number="164"></td>
        <td id="LC164" class="blob-code js-file-line">                      <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabel</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L165" class="blob-num js-line-number" data-line-number="165"></td>
        <td id="LC165" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">plot</span><span class="p">.</span><span class="nx">getPlaceholder</span><span class="p">().</span><span class="nx">append</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L166" class="blob-num js-line-number" data-line-number="166"></td>
        <td id="LC166" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;top&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L167" class="blob-num js-line-number" data-line-number="167"></td>
        <td id="LC167" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;left&#39;</span><span class="p">,</span> <span class="nx">box</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">width</span><span class="o">/</span><span class="mi">2</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelWidth</span><span class="o">/</span><span class="mi">2</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L168" class="blob-num js-line-number" data-line-number="168"></td>
        <td id="LC168" class="blob-code js-file-line">                          <span class="s1">&#39;px&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L169" class="blob-num js-line-number" data-line-number="169"></td>
        <td id="LC169" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;top&#39;</span><span class="p">,</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L170" class="blob-num js-line-number" data-line-number="170"></td>
        <td id="LC170" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;bottom&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L171" class="blob-num js-line-number" data-line-number="171"></td>
        <td id="LC171" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;left&#39;</span><span class="p">,</span> <span class="nx">box</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">width</span><span class="o">/</span><span class="mi">2</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelWidth</span><span class="o">/</span><span class="mi">2</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L172" class="blob-num js-line-number" data-line-number="172"></td>
        <td id="LC172" class="blob-code js-file-line">                          <span class="s1">&#39;px&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L173" class="blob-num js-line-number" data-line-number="173"></td>
        <td id="LC173" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;top&#39;</span><span class="p">,</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">height</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelHeight</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L174" class="blob-num js-line-number" data-line-number="174"></td>
        <td id="LC174" class="blob-code js-file-line">                          <span class="s1">&#39;px&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L175" class="blob-num js-line-number" data-line-number="175"></td>
        <td id="LC175" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;left&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L176" class="blob-num js-line-number" data-line-number="176"></td>
        <td id="LC176" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;top&#39;</span><span class="p">,</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">height</span><span class="o">/</span><span class="mi">2</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelHeight</span><span class="o">/</span><span class="mi">2</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L177" class="blob-num js-line-number" data-line-number="177"></td>
        <td id="LC177" class="blob-code js-file-line">                          <span class="s1">&#39;px&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L178" class="blob-num js-line-number" data-line-number="178"></td>
        <td id="LC178" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;left&#39;</span><span class="p">,</span> <span class="nx">box</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="s1">&#39;px&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L179" class="blob-num js-line-number" data-line-number="179"></td>
        <td id="LC179" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;right&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L180" class="blob-num js-line-number" data-line-number="180"></td>
        <td id="LC180" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;top&#39;</span><span class="p">,</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">height</span><span class="o">/</span><span class="mi">2</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelHeight</span><span class="o">/</span><span class="mi">2</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L181" class="blob-num js-line-number" data-line-number="181"></td>
        <td id="LC181" class="blob-code js-file-line">                          <span class="s1">&#39;px&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L182" class="blob-num js-line-number" data-line-number="182"></td>
        <td id="LC182" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;left&#39;</span><span class="p">,</span> <span class="nx">box</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">width</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelWidth</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L183" class="blob-num js-line-number" data-line-number="183"></td>
        <td id="LC183" class="blob-code js-file-line">                          <span class="s1">&#39;px&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L184" class="blob-num js-line-number" data-line-number="184"></td>
        <td id="LC184" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L185" class="blob-num js-line-number" data-line-number="185"></td>
        <td id="LC185" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L186" class="blob-num js-line-number" data-line-number="186"></td>
        <td id="LC186" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L187" class="blob-num js-line-number" data-line-number="187"></td>
        <td id="LC187" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L188" class="blob-num js-line-number" data-line-number="188"></td>
        <td id="LC188" class="blob-code js-file-line">    <span class="nx">CssTransformAxisLabel</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">HtmlAxisLabel</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L189" class="blob-num js-line-number" data-line-number="189"></td>
        <td id="LC189" class="blob-code js-file-line">    <span class="nx">CssTransformAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span> <span class="o">=</span> <span class="nx">CssTransformAxisLabel</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L190" class="blob-num js-line-number" data-line-number="190"></td>
        <td id="LC190" class="blob-code js-file-line">    <span class="kd">function</span> <span class="nx">CssTransformAxisLabel</span><span class="p">(</span><span class="nx">axisName</span><span class="p">,</span> <span class="nx">position</span><span class="p">,</span> <span class="nx">padding</span><span class="p">,</span> <span class="nx">plot</span><span class="p">,</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L191" class="blob-num js-line-number" data-line-number="191"></td>
        <td id="LC191" class="blob-code js-file-line">        <span class="nx">HtmlAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">axisName</span><span class="p">,</span> <span class="nx">position</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L192" class="blob-num js-line-number" data-line-number="192"></td>
        <td id="LC192" class="blob-code js-file-line">                                                 <span class="nx">padding</span><span class="p">,</span> <span class="nx">plot</span><span class="p">,</span> <span class="nx">opts</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L193" class="blob-num js-line-number" data-line-number="193"></td>
        <td id="LC193" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L194" class="blob-num js-line-number" data-line-number="194"></td>
        <td id="LC194" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L195" class="blob-num js-line-number" data-line-number="195"></td>
        <td id="LC195" class="blob-code js-file-line">    <span class="nx">CssTransformAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">calculateSize</span> <span class="o">=</span> <span class="kd">function</span><span class="p">()</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L196" class="blob-num js-line-number" data-line-number="196"></td>
        <td id="LC196" class="blob-code js-file-line">        <span class="nx">HtmlAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">calculateSize</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L197" class="blob-num js-line-number" data-line-number="197"></td>
        <td id="LC197" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="mi">0</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L198" class="blob-num js-line-number" data-line-number="198"></td>
        <td id="LC198" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;left&#39;</span> <span class="o">||</span> <span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;right&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L199" class="blob-num js-line-number" data-line-number="199"></td>
        <td id="LC199" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">width</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelHeight</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">padding</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L200" class="blob-num js-line-number" data-line-number="200"></td>
        <td id="LC200" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L201" class="blob-num js-line-number" data-line-number="201"></td>
        <td id="LC201" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">height</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelHeight</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">padding</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L202" class="blob-num js-line-number" data-line-number="202"></td>
        <td id="LC202" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L203" class="blob-num js-line-number" data-line-number="203"></td>
        <td id="LC203" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L204" class="blob-num js-line-number" data-line-number="204"></td>
        <td id="LC204" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L205" class="blob-num js-line-number" data-line-number="205"></td>
        <td id="LC205" class="blob-code js-file-line">    <span class="nx">CssTransformAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">transforms</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">degrees</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L206" class="blob-num js-line-number" data-line-number="206"></td>
        <td id="LC206" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">stransforms</span> <span class="o">=</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L207" class="blob-num js-line-number" data-line-number="207"></td>
        <td id="LC207" class="blob-code js-file-line">            <span class="s1">&#39;-moz-transform&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L208" class="blob-num js-line-number" data-line-number="208"></td>
        <td id="LC208" class="blob-code js-file-line">            <span class="s1">&#39;-webkit-transform&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L209" class="blob-num js-line-number" data-line-number="209"></td>
        <td id="LC209" class="blob-code js-file-line">            <span class="s1">&#39;-o-transform&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L210" class="blob-num js-line-number" data-line-number="210"></td>
        <td id="LC210" class="blob-code js-file-line">            <span class="s1">&#39;-ms-transform&#39;</span><span class="o">:</span> <span class="s1">&#39;&#39;</span></td>
      </tr>
      <tr>
        <td id="L211" class="blob-num js-line-number" data-line-number="211"></td>
        <td id="LC211" class="blob-code js-file-line">        <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L212" class="blob-num js-line-number" data-line-number="212"></td>
        <td id="LC212" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">x</span> <span class="o">!=</span> <span class="mi">0</span> <span class="o">||</span> <span class="nx">y</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L213" class="blob-num js-line-number" data-line-number="213"></td>
        <td id="LC213" class="blob-code js-file-line">            <span class="kd">var</span> <span class="nx">stdTranslate</span> <span class="o">=</span> <span class="s1">&#39; translate(&#39;</span> <span class="o">+</span> <span class="nx">x</span> <span class="o">+</span> <span class="s1">&#39;px, &#39;</span> <span class="o">+</span> <span class="nx">y</span> <span class="o">+</span> <span class="s1">&#39;px)&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L214" class="blob-num js-line-number" data-line-number="214"></td>
        <td id="LC214" class="blob-code js-file-line">            <span class="nx">stransforms</span><span class="p">[</span><span class="s1">&#39;-moz-transform&#39;</span><span class="p">]</span> <span class="o">+=</span> <span class="nx">stdTranslate</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L215" class="blob-num js-line-number" data-line-number="215"></td>
        <td id="LC215" class="blob-code js-file-line">            <span class="nx">stransforms</span><span class="p">[</span><span class="s1">&#39;-webkit-transform&#39;</span><span class="p">]</span> <span class="o">+=</span> <span class="nx">stdTranslate</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L216" class="blob-num js-line-number" data-line-number="216"></td>
        <td id="LC216" class="blob-code js-file-line">            <span class="nx">stransforms</span><span class="p">[</span><span class="s1">&#39;-o-transform&#39;</span><span class="p">]</span> <span class="o">+=</span> <span class="nx">stdTranslate</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L217" class="blob-num js-line-number" data-line-number="217"></td>
        <td id="LC217" class="blob-code js-file-line">            <span class="nx">stransforms</span><span class="p">[</span><span class="s1">&#39;-ms-transform&#39;</span><span class="p">]</span> <span class="o">+=</span> <span class="nx">stdTranslate</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L218" class="blob-num js-line-number" data-line-number="218"></td>
        <td id="LC218" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L219" class="blob-num js-line-number" data-line-number="219"></td>
        <td id="LC219" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">degrees</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L220" class="blob-num js-line-number" data-line-number="220"></td>
        <td id="LC220" class="blob-code js-file-line">            <span class="kd">var</span> <span class="nx">rotation</span> <span class="o">=</span> <span class="nx">degrees</span> <span class="o">/</span> <span class="mi">90</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L221" class="blob-num js-line-number" data-line-number="221"></td>
        <td id="LC221" class="blob-code js-file-line">            <span class="kd">var</span> <span class="nx">stdRotate</span> <span class="o">=</span> <span class="s1">&#39; rotate(&#39;</span> <span class="o">+</span> <span class="nx">degrees</span> <span class="o">+</span> <span class="s1">&#39;deg)&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L222" class="blob-num js-line-number" data-line-number="222"></td>
        <td id="LC222" class="blob-code js-file-line">            <span class="nx">stransforms</span><span class="p">[</span><span class="s1">&#39;-moz-transform&#39;</span><span class="p">]</span> <span class="o">+=</span> <span class="nx">stdRotate</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L223" class="blob-num js-line-number" data-line-number="223"></td>
        <td id="LC223" class="blob-code js-file-line">            <span class="nx">stransforms</span><span class="p">[</span><span class="s1">&#39;-webkit-transform&#39;</span><span class="p">]</span> <span class="o">+=</span> <span class="nx">stdRotate</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L224" class="blob-num js-line-number" data-line-number="224"></td>
        <td id="LC224" class="blob-code js-file-line">            <span class="nx">stransforms</span><span class="p">[</span><span class="s1">&#39;-o-transform&#39;</span><span class="p">]</span> <span class="o">+=</span> <span class="nx">stdRotate</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L225" class="blob-num js-line-number" data-line-number="225"></td>
        <td id="LC225" class="blob-code js-file-line">            <span class="nx">stransforms</span><span class="p">[</span><span class="s1">&#39;-ms-transform&#39;</span><span class="p">]</span> <span class="o">+=</span> <span class="nx">stdRotate</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L226" class="blob-num js-line-number" data-line-number="226"></td>
        <td id="LC226" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L227" class="blob-num js-line-number" data-line-number="227"></td>
        <td id="LC227" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="s1">&#39;top: 0; left: 0; &#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L228" class="blob-num js-line-number" data-line-number="228"></td>
        <td id="LC228" class="blob-code js-file-line">        <span class="k">for</span> <span class="p">(</span><span class="kd">var</span> <span class="nx">prop</span> <span class="k">in</span> <span class="nx">stransforms</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L229" class="blob-num js-line-number" data-line-number="229"></td>
        <td id="LC229" class="blob-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="nx">stransforms</span><span class="p">[</span><span class="nx">prop</span><span class="p">])</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L230" class="blob-num js-line-number" data-line-number="230"></td>
        <td id="LC230" class="blob-code js-file-line">                <span class="nx">s</span> <span class="o">+=</span> <span class="nx">prop</span> <span class="o">+</span> <span class="s1">&#39;:&#39;</span> <span class="o">+</span> <span class="nx">stransforms</span><span class="p">[</span><span class="nx">prop</span><span class="p">]</span> <span class="o">+</span> <span class="s1">&#39;;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L231" class="blob-num js-line-number" data-line-number="231"></td>
        <td id="LC231" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L232" class="blob-num js-line-number" data-line-number="232"></td>
        <td id="LC232" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L233" class="blob-num js-line-number" data-line-number="233"></td>
        <td id="LC233" class="blob-code js-file-line">        <span class="nx">s</span> <span class="o">+=</span> <span class="s1">&#39;;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L234" class="blob-num js-line-number" data-line-number="234"></td>
        <td id="LC234" class="blob-code js-file-line">        <span class="k">return</span> <span class="nx">s</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L235" class="blob-num js-line-number" data-line-number="235"></td>
        <td id="LC235" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L236" class="blob-num js-line-number" data-line-number="236"></td>
        <td id="LC236" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L237" class="blob-num js-line-number" data-line-number="237"></td>
        <td id="LC237" class="blob-code js-file-line">    <span class="nx">CssTransformAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">calculateOffsets</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">box</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L238" class="blob-num js-line-number" data-line-number="238"></td>
        <td id="LC238" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">offsets</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">x</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">y</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">degrees</span><span class="o">:</span> <span class="mi">0</span> <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L239" class="blob-num js-line-number" data-line-number="239"></td>
        <td id="LC239" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;bottom&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L240" class="blob-num js-line-number" data-line-number="240"></td>
        <td id="LC240" class="blob-code js-file-line">            <span class="nx">offsets</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">width</span><span class="o">/</span><span class="mi">2</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelWidth</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L241" class="blob-num js-line-number" data-line-number="241"></td>
        <td id="LC241" class="blob-code js-file-line">            <span class="nx">offsets</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">height</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelHeight</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L242" class="blob-num js-line-number" data-line-number="242"></td>
        <td id="LC242" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;top&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L243" class="blob-num js-line-number" data-line-number="243"></td>
        <td id="LC243" class="blob-code js-file-line">            <span class="nx">offsets</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">width</span><span class="o">/</span><span class="mi">2</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelWidth</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L244" class="blob-num js-line-number" data-line-number="244"></td>
        <td id="LC244" class="blob-code js-file-line">            <span class="nx">offsets</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L245" class="blob-num js-line-number" data-line-number="245"></td>
        <td id="LC245" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;left&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L246" class="blob-num js-line-number" data-line-number="246"></td>
        <td id="LC246" class="blob-code js-file-line">            <span class="nx">offsets</span><span class="p">.</span><span class="nx">degrees</span> <span class="o">=</span> <span class="o">-</span><span class="mi">90</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L247" class="blob-num js-line-number" data-line-number="247"></td>
        <td id="LC247" class="blob-code js-file-line">            <span class="nx">offsets</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">left</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelWidth</span><span class="o">/</span><span class="mi">2</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelHeight</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L248" class="blob-num js-line-number" data-line-number="248"></td>
        <td id="LC248" class="blob-code js-file-line">            <span class="nx">offsets</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">height</span><span class="o">/</span><span class="mi">2</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L249" class="blob-num js-line-number" data-line-number="249"></td>
        <td id="LC249" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;right&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L250" class="blob-num js-line-number" data-line-number="250"></td>
        <td id="LC250" class="blob-code js-file-line">            <span class="nx">offsets</span><span class="p">.</span><span class="nx">degrees</span> <span class="o">=</span> <span class="mi">90</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L251" class="blob-num js-line-number" data-line-number="251"></td>
        <td id="LC251" class="blob-code js-file-line">            <span class="nx">offsets</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">width</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelWidth</span><span class="o">/</span><span class="mi">2</span></td>
      </tr>
      <tr>
        <td id="L252" class="blob-num js-line-number" data-line-number="252"></td>
        <td id="LC252" class="blob-code js-file-line">                        <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelHeight</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L253" class="blob-num js-line-number" data-line-number="253"></td>
        <td id="LC253" class="blob-code js-file-line">            <span class="nx">offsets</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">height</span><span class="o">/</span><span class="mi">2</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L254" class="blob-num js-line-number" data-line-number="254"></td>
        <td id="LC254" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L255" class="blob-num js-line-number" data-line-number="255"></td>
        <td id="LC255" class="blob-code js-file-line">        <span class="k">return</span> <span class="nx">offsets</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L256" class="blob-num js-line-number" data-line-number="256"></td>
        <td id="LC256" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L257" class="blob-num js-line-number" data-line-number="257"></td>
        <td id="LC257" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L258" class="blob-num js-line-number" data-line-number="258"></td>
        <td id="LC258" class="blob-code js-file-line">    <span class="nx">CssTransformAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">draw</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">box</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L259" class="blob-num js-line-number" data-line-number="259"></td>
        <td id="LC259" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">plot</span><span class="p">.</span><span class="nx">getPlaceholder</span><span class="p">().</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.&quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">axisName</span> <span class="o">+</span> <span class="s2">&quot;Label&quot;</span><span class="p">).</span><span class="nx">remove</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L260" class="blob-num js-line-number" data-line-number="260"></td>
        <td id="LC260" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">offsets</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">calculateOffsets</span><span class="p">(</span><span class="nx">box</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L261" class="blob-num js-line-number" data-line-number="261"></td>
        <td id="LC261" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">elem</span> <span class="o">=</span> <span class="nx">$</span><span class="p">(</span><span class="s1">&#39;&lt;div class=&quot;axisLabels &#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">axisName</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L262" class="blob-num js-line-number" data-line-number="262"></td>
        <td id="LC262" class="blob-code js-file-line">                      <span class="s1">&#39;Label&quot; style=&quot;position:absolute; &#39;</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L263" class="blob-num js-line-number" data-line-number="263"></td>
        <td id="LC263" class="blob-code js-file-line">                      <span class="k">this</span><span class="p">.</span><span class="nx">transforms</span><span class="p">(</span><span class="nx">offsets</span><span class="p">.</span><span class="nx">degrees</span><span class="p">,</span> <span class="nx">offsets</span><span class="p">.</span><span class="nx">x</span><span class="p">,</span> <span class="nx">offsets</span><span class="p">.</span><span class="nx">y</span><span class="p">)</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L264" class="blob-num js-line-number" data-line-number="264"></td>
        <td id="LC264" class="blob-code js-file-line">                      <span class="s1">&#39;&quot;&gt;&#39;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabel</span> <span class="o">+</span> <span class="s1">&#39;&lt;/div&gt;&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L265" class="blob-num js-line-number" data-line-number="265"></td>
        <td id="LC265" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">plot</span><span class="p">.</span><span class="nx">getPlaceholder</span><span class="p">().</span><span class="nx">append</span><span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L266" class="blob-num js-line-number" data-line-number="266"></td>
        <td id="LC266" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L267" class="blob-num js-line-number" data-line-number="267"></td>
        <td id="LC267" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L268" class="blob-num js-line-number" data-line-number="268"></td>
        <td id="LC268" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L269" class="blob-num js-line-number" data-line-number="269"></td>
        <td id="LC269" class="blob-code js-file-line">    <span class="nx">IeTransformAxisLabel</span><span class="p">.</span><span class="nx">prototype</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">CssTransformAxisLabel</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L270" class="blob-num js-line-number" data-line-number="270"></td>
        <td id="LC270" class="blob-code js-file-line">    <span class="nx">IeTransformAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span> <span class="o">=</span> <span class="nx">IeTransformAxisLabel</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L271" class="blob-num js-line-number" data-line-number="271"></td>
        <td id="LC271" class="blob-code js-file-line">    <span class="kd">function</span> <span class="nx">IeTransformAxisLabel</span><span class="p">(</span><span class="nx">axisName</span><span class="p">,</span> <span class="nx">position</span><span class="p">,</span> <span class="nx">padding</span><span class="p">,</span> <span class="nx">plot</span><span class="p">,</span> <span class="nx">opts</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L272" class="blob-num js-line-number" data-line-number="272"></td>
        <td id="LC272" class="blob-code js-file-line">        <span class="nx">CssTransformAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">constructor</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">axisName</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L273" class="blob-num js-line-number" data-line-number="273"></td>
        <td id="LC273" class="blob-code js-file-line">                                                         <span class="nx">position</span><span class="p">,</span> <span class="nx">padding</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L274" class="blob-num js-line-number" data-line-number="274"></td>
        <td id="LC274" class="blob-code js-file-line">                                                         <span class="nx">plot</span><span class="p">,</span> <span class="nx">opts</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L275" class="blob-num js-line-number" data-line-number="275"></td>
        <td id="LC275" class="blob-code js-file-line">        <span class="k">this</span><span class="p">.</span><span class="nx">requiresResize</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L276" class="blob-num js-line-number" data-line-number="276"></td>
        <td id="LC276" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L277" class="blob-num js-line-number" data-line-number="277"></td>
        <td id="LC277" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L278" class="blob-num js-line-number" data-line-number="278"></td>
        <td id="LC278" class="blob-code js-file-line">    <span class="nx">IeTransformAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">transforms</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">degrees</span><span class="p">,</span> <span class="nx">x</span><span class="p">,</span> <span class="nx">y</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L279" class="blob-num js-line-number" data-line-number="279"></td>
        <td id="LC279" class="blob-code js-file-line">        <span class="c1">// I didn&#39;t feel like learning the crazy Matrix stuff, so this uses</span></td>
      </tr>
      <tr>
        <td id="L280" class="blob-num js-line-number" data-line-number="280"></td>
        <td id="LC280" class="blob-code js-file-line">        <span class="c1">// a combination of the rotation transform and CSS positioning.</span></td>
      </tr>
      <tr>
        <td id="L281" class="blob-num js-line-number" data-line-number="281"></td>
        <td id="LC281" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">s</span> <span class="o">=</span> <span class="s1">&#39;&#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L282" class="blob-num js-line-number" data-line-number="282"></td>
        <td id="LC282" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">degrees</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L283" class="blob-num js-line-number" data-line-number="283"></td>
        <td id="LC283" class="blob-code js-file-line">            <span class="kd">var</span> <span class="nx">rotation</span> <span class="o">=</span> <span class="nx">degrees</span><span class="o">/</span><span class="mi">90</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L284" class="blob-num js-line-number" data-line-number="284"></td>
        <td id="LC284" class="blob-code js-file-line">            <span class="k">while</span> <span class="p">(</span><span class="nx">rotation</span> <span class="o">&lt;</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L285" class="blob-num js-line-number" data-line-number="285"></td>
        <td id="LC285" class="blob-code js-file-line">                <span class="nx">rotation</span> <span class="o">+=</span> <span class="mi">4</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L286" class="blob-num js-line-number" data-line-number="286"></td>
        <td id="LC286" class="blob-code js-file-line">            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L287" class="blob-num js-line-number" data-line-number="287"></td>
        <td id="LC287" class="blob-code js-file-line">            <span class="nx">s</span> <span class="o">+=</span> <span class="s1">&#39; filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=&#39;</span> <span class="o">+</span> <span class="nx">rotation</span> <span class="o">+</span> <span class="s1">&#39;); &#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L288" class="blob-num js-line-number" data-line-number="288"></td>
        <td id="LC288" class="blob-code js-file-line">            <span class="c1">// see below</span></td>
      </tr>
      <tr>
        <td id="L289" class="blob-num js-line-number" data-line-number="289"></td>
        <td id="LC289" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">requiresResize</span> <span class="o">=</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;right&#39;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L290" class="blob-num js-line-number" data-line-number="290"></td>
        <td id="LC290" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L291" class="blob-num js-line-number" data-line-number="291"></td>
        <td id="LC291" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">x</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L292" class="blob-num js-line-number" data-line-number="292"></td>
        <td id="LC292" class="blob-code js-file-line">            <span class="nx">s</span> <span class="o">+=</span> <span class="s1">&#39;left: &#39;</span> <span class="o">+</span> <span class="nx">x</span> <span class="o">+</span> <span class="s1">&#39;px; &#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L293" class="blob-num js-line-number" data-line-number="293"></td>
        <td id="LC293" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L294" class="blob-num js-line-number" data-line-number="294"></td>
        <td id="LC294" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="nx">y</span> <span class="o">!=</span> <span class="mi">0</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L295" class="blob-num js-line-number" data-line-number="295"></td>
        <td id="LC295" class="blob-code js-file-line">            <span class="nx">s</span> <span class="o">+=</span> <span class="s1">&#39;top: &#39;</span> <span class="o">+</span> <span class="nx">y</span> <span class="o">+</span> <span class="s1">&#39;px; &#39;</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L296" class="blob-num js-line-number" data-line-number="296"></td>
        <td id="LC296" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L297" class="blob-num js-line-number" data-line-number="297"></td>
        <td id="LC297" class="blob-code js-file-line">        <span class="k">return</span> <span class="nx">s</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L298" class="blob-num js-line-number" data-line-number="298"></td>
        <td id="LC298" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L299" class="blob-num js-line-number" data-line-number="299"></td>
        <td id="LC299" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L300" class="blob-num js-line-number" data-line-number="300"></td>
        <td id="LC300" class="blob-code js-file-line">    <span class="nx">IeTransformAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">calculateOffsets</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">box</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L301" class="blob-num js-line-number" data-line-number="301"></td>
        <td id="LC301" class="blob-code js-file-line">        <span class="kd">var</span> <span class="nx">offsets</span> <span class="o">=</span> <span class="nx">CssTransformAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">calculateOffsets</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span></td>
      </tr>
      <tr>
        <td id="L302" class="blob-num js-line-number" data-line-number="302"></td>
        <td id="LC302" class="blob-code js-file-line">                          <span class="k">this</span><span class="p">,</span> <span class="nx">box</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L303" class="blob-num js-line-number" data-line-number="303"></td>
        <td id="LC303" class="blob-code js-file-line">        <span class="c1">// adjust some values to take into account differences between</span></td>
      </tr>
      <tr>
        <td id="L304" class="blob-num js-line-number" data-line-number="304"></td>
        <td id="LC304" class="blob-code js-file-line">        <span class="c1">// CSS and IE rotations.</span></td>
      </tr>
      <tr>
        <td id="L305" class="blob-num js-line-number" data-line-number="305"></td>
        <td id="LC305" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;top&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L306" class="blob-num js-line-number" data-line-number="306"></td>
        <td id="LC306" class="blob-code js-file-line">            <span class="c1">// FIXME: not sure why, but placing this exactly at the top causes</span></td>
      </tr>
      <tr>
        <td id="L307" class="blob-num js-line-number" data-line-number="307"></td>
        <td id="LC307" class="blob-code js-file-line">            <span class="c1">// the top axis label to flip to the bottom...</span></td>
      </tr>
      <tr>
        <td id="L308" class="blob-num js-line-number" data-line-number="308"></td>
        <td id="LC308" class="blob-code js-file-line">            <span class="nx">offsets</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span> <span class="o">+</span> <span class="mi">1</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L309" class="blob-num js-line-number" data-line-number="309"></td>
        <td id="LC309" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;left&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L310" class="blob-num js-line-number" data-line-number="310"></td>
        <td id="LC310" class="blob-code js-file-line">            <span class="nx">offsets</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">left</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L311" class="blob-num js-line-number" data-line-number="311"></td>
        <td id="LC311" class="blob-code js-file-line">            <span class="nx">offsets</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">height</span><span class="o">/</span><span class="mi">2</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelWidth</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L312" class="blob-num js-line-number" data-line-number="312"></td>
        <td id="LC312" class="blob-code js-file-line">        <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">position</span> <span class="o">==</span> <span class="s1">&#39;right&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L313" class="blob-num js-line-number" data-line-number="313"></td>
        <td id="LC313" class="blob-code js-file-line">            <span class="nx">offsets</span><span class="p">.</span><span class="nx">x</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">left</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">width</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelHeight</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L314" class="blob-num js-line-number" data-line-number="314"></td>
        <td id="LC314" class="blob-code js-file-line">            <span class="nx">offsets</span><span class="p">.</span><span class="nx">y</span> <span class="o">=</span> <span class="nx">box</span><span class="p">.</span><span class="nx">height</span><span class="o">/</span><span class="mi">2</span> <span class="o">+</span> <span class="nx">box</span><span class="p">.</span><span class="nx">top</span> <span class="o">-</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelWidth</span><span class="o">/</span><span class="mi">2</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L315" class="blob-num js-line-number" data-line-number="315"></td>
        <td id="LC315" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L316" class="blob-num js-line-number" data-line-number="316"></td>
        <td id="LC316" class="blob-code js-file-line">        <span class="k">return</span> <span class="nx">offsets</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L317" class="blob-num js-line-number" data-line-number="317"></td>
        <td id="LC317" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L318" class="blob-num js-line-number" data-line-number="318"></td>
        <td id="LC318" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L319" class="blob-num js-line-number" data-line-number="319"></td>
        <td id="LC319" class="blob-code js-file-line">    <span class="nx">IeTransformAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">draw</span> <span class="o">=</span> <span class="kd">function</span><span class="p">(</span><span class="nx">box</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L320" class="blob-num js-line-number" data-line-number="320"></td>
        <td id="LC320" class="blob-code js-file-line">        <span class="nx">CssTransformAxisLabel</span><span class="p">.</span><span class="nx">prototype</span><span class="p">.</span><span class="nx">draw</span><span class="p">.</span><span class="nx">call</span><span class="p">(</span><span class="k">this</span><span class="p">,</span> <span class="nx">box</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L321" class="blob-num js-line-number" data-line-number="321"></td>
        <td id="LC321" class="blob-code js-file-line">        <span class="k">if</span> <span class="p">(</span><span class="k">this</span><span class="p">.</span><span class="nx">requiresResize</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L322" class="blob-num js-line-number" data-line-number="322"></td>
        <td id="LC322" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">elem</span> <span class="o">=</span> <span class="k">this</span><span class="p">.</span><span class="nx">plot</span><span class="p">.</span><span class="nx">getPlaceholder</span><span class="p">().</span><span class="nx">find</span><span class="p">(</span><span class="s2">&quot;.&quot;</span> <span class="o">+</span> <span class="k">this</span><span class="p">.</span><span class="nx">axisName</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L323" class="blob-num js-line-number" data-line-number="323"></td>
        <td id="LC323" class="blob-code js-file-line">                                                        <span class="s2">&quot;Label&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L324" class="blob-num js-line-number" data-line-number="324"></td>
        <td id="LC324" class="blob-code js-file-line">            <span class="c1">// Since we used CSS positioning instead of transforms for</span></td>
      </tr>
      <tr>
        <td id="L325" class="blob-num js-line-number" data-line-number="325"></td>
        <td id="LC325" class="blob-code js-file-line">            <span class="c1">// translating the element, and since the positioning is done</span></td>
      </tr>
      <tr>
        <td id="L326" class="blob-num js-line-number" data-line-number="326"></td>
        <td id="LC326" class="blob-code js-file-line">            <span class="c1">// before any rotations, we have to reset the width and height</span></td>
      </tr>
      <tr>
        <td id="L327" class="blob-num js-line-number" data-line-number="327"></td>
        <td id="LC327" class="blob-code js-file-line">            <span class="c1">// in case the browser wrapped the text (specifically for the</span></td>
      </tr>
      <tr>
        <td id="L328" class="blob-num js-line-number" data-line-number="328"></td>
        <td id="LC328" class="blob-code js-file-line">            <span class="c1">// y2axis).</span></td>
      </tr>
      <tr>
        <td id="L329" class="blob-num js-line-number" data-line-number="329"></td>
        <td id="LC329" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;width&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelWidth</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L330" class="blob-num js-line-number" data-line-number="330"></td>
        <td id="LC330" class="blob-code js-file-line">            <span class="k">this</span><span class="p">.</span><span class="nx">elem</span><span class="p">.</span><span class="nx">css</span><span class="p">(</span><span class="s1">&#39;height&#39;</span><span class="p">,</span> <span class="k">this</span><span class="p">.</span><span class="nx">labelHeight</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L331" class="blob-num js-line-number" data-line-number="331"></td>
        <td id="LC331" class="blob-code js-file-line">        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L332" class="blob-num js-line-number" data-line-number="332"></td>
        <td id="LC332" class="blob-code js-file-line">    <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L333" class="blob-num js-line-number" data-line-number="333"></td>
        <td id="LC333" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L334" class="blob-num js-line-number" data-line-number="334"></td>
        <td id="LC334" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L335" class="blob-num js-line-number" data-line-number="335"></td>
        <td id="LC335" class="blob-code js-file-line">    <span class="kd">function</span> <span class="nx">init</span><span class="p">(</span><span class="nx">plot</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L336" class="blob-num js-line-number" data-line-number="336"></td>
        <td id="LC336" class="blob-code js-file-line">        <span class="nx">plot</span><span class="p">.</span><span class="nx">hooks</span><span class="p">.</span><span class="nx">processOptions</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">plot</span><span class="p">,</span> <span class="nx">options</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L337" class="blob-num js-line-number" data-line-number="337"></td>
        <td id="LC337" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L338" class="blob-num js-line-number" data-line-number="338"></td>
        <td id="LC338" class="blob-code js-file-line">            <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">options</span><span class="p">.</span><span class="nx">axisLabels</span><span class="p">.</span><span class="nx">show</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L339" class="blob-num js-line-number" data-line-number="339"></td>
        <td id="LC339" class="blob-code js-file-line">                <span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L340" class="blob-num js-line-number" data-line-number="340"></td>
        <td id="LC340" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L341" class="blob-num js-line-number" data-line-number="341"></td>
        <td id="LC341" class="blob-code js-file-line">            <span class="c1">// This is kind of a hack. There are no hooks in Flot between</span></td>
      </tr>
      <tr>
        <td id="L342" class="blob-num js-line-number" data-line-number="342"></td>
        <td id="LC342" class="blob-code js-file-line">            <span class="c1">// the creation and measuring of the ticks (setTicks, measureTickLabels</span></td>
      </tr>
      <tr>
        <td id="L343" class="blob-num js-line-number" data-line-number="343"></td>
        <td id="LC343" class="blob-code js-file-line">            <span class="c1">// in setupGrid() ) and the drawing of the ticks and plot box</span></td>
      </tr>
      <tr>
        <td id="L344" class="blob-num js-line-number" data-line-number="344"></td>
        <td id="LC344" class="blob-code js-file-line">            <span class="c1">// (insertAxisLabels in setupGrid() ).</span></td>
      </tr>
      <tr>
        <td id="L345" class="blob-num js-line-number" data-line-number="345"></td>
        <td id="LC345" class="blob-code js-file-line">            <span class="c1">//</span></td>
      </tr>
      <tr>
        <td id="L346" class="blob-num js-line-number" data-line-number="346"></td>
        <td id="LC346" class="blob-code js-file-line">            <span class="c1">// Therefore, we use a trick where we run the draw routine twice:</span></td>
      </tr>
      <tr>
        <td id="L347" class="blob-num js-line-number" data-line-number="347"></td>
        <td id="LC347" class="blob-code js-file-line">            <span class="c1">// the first time to get the tick measurements, so that we can change</span></td>
      </tr>
      <tr>
        <td id="L348" class="blob-num js-line-number" data-line-number="348"></td>
        <td id="LC348" class="blob-code js-file-line">            <span class="c1">// them, and then have it draw it again.</span></td>
      </tr>
      <tr>
        <td id="L349" class="blob-num js-line-number" data-line-number="349"></td>
        <td id="LC349" class="blob-code js-file-line">            <span class="kd">var</span> <span class="nx">secondPass</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L350" class="blob-num js-line-number" data-line-number="350"></td>
        <td id="LC350" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L351" class="blob-num js-line-number" data-line-number="351"></td>
        <td id="LC351" class="blob-code js-file-line">            <span class="kd">var</span> <span class="nx">axisLabels</span> <span class="o">=</span> <span class="p">{};</span></td>
      </tr>
      <tr>
        <td id="L352" class="blob-num js-line-number" data-line-number="352"></td>
        <td id="LC352" class="blob-code js-file-line">            <span class="kd">var</span> <span class="nx">axisOffsetCounts</span> <span class="o">=</span> <span class="p">{</span> <span class="nx">left</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">right</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">top</span><span class="o">:</span> <span class="mi">0</span><span class="p">,</span> <span class="nx">bottom</span><span class="o">:</span> <span class="mi">0</span> <span class="p">};</span></td>
      </tr>
      <tr>
        <td id="L353" class="blob-num js-line-number" data-line-number="353"></td>
        <td id="LC353" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L354" class="blob-num js-line-number" data-line-number="354"></td>
        <td id="LC354" class="blob-code js-file-line">            <span class="kd">var</span> <span class="nx">defaultPadding</span> <span class="o">=</span> <span class="mi">2</span><span class="p">;</span>  <span class="c1">// padding between axis and tick labels</span></td>
      </tr>
      <tr>
        <td id="L355" class="blob-num js-line-number" data-line-number="355"></td>
        <td id="LC355" class="blob-code js-file-line">            <span class="nx">plot</span><span class="p">.</span><span class="nx">hooks</span><span class="p">.</span><span class="nx">draw</span><span class="p">.</span><span class="nx">push</span><span class="p">(</span><span class="kd">function</span> <span class="p">(</span><span class="nx">plot</span><span class="p">,</span> <span class="nx">ctx</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L356" class="blob-num js-line-number" data-line-number="356"></td>
        <td id="LC356" class="blob-code js-file-line">                <span class="kd">var</span> <span class="nx">hasAxisLabels</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L357" class="blob-num js-line-number" data-line-number="357"></td>
        <td id="LC357" class="blob-code js-file-line">                <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">secondPass</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L358" class="blob-num js-line-number" data-line-number="358"></td>
        <td id="LC358" class="blob-code js-file-line">                    <span class="c1">// MEASURE AND SET OPTIONS</span></td>
      </tr>
      <tr>
        <td id="L359" class="blob-num js-line-number" data-line-number="359"></td>
        <td id="LC359" class="blob-code js-file-line">                    <span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">plot</span><span class="p">.</span><span class="nx">getAxes</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">axisName</span><span class="p">,</span> <span class="nx">axis</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L360" class="blob-num js-line-number" data-line-number="360"></td>
        <td id="LC360" class="blob-code js-file-line">                        <span class="kd">var</span> <span class="nx">opts</span> <span class="o">=</span> <span class="nx">axis</span><span class="p">.</span><span class="nx">options</span> <span class="c1">// Flot 0.7</span></td>
      </tr>
      <tr>
        <td id="L361" class="blob-num js-line-number" data-line-number="361"></td>
        <td id="LC361" class="blob-code js-file-line">                            <span class="o">||</span> <span class="nx">plot</span><span class="p">.</span><span class="nx">getOptions</span><span class="p">()[</span><span class="nx">axisName</span><span class="p">];</span> <span class="c1">// Flot 0.6</span></td>
      </tr>
      <tr>
        <td id="L362" class="blob-num js-line-number" data-line-number="362"></td>
        <td id="LC362" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L363" class="blob-num js-line-number" data-line-number="363"></td>
        <td id="LC363" class="blob-code js-file-line">                        <span class="c1">// Handle redraws initiated outside of this plug-in.</span></td>
      </tr>
      <tr>
        <td id="L364" class="blob-num js-line-number" data-line-number="364"></td>
        <td id="LC364" class="blob-code js-file-line">                        <span class="k">if</span> <span class="p">(</span><span class="nx">axisName</span> <span class="k">in</span> <span class="nx">axisLabels</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L365" class="blob-num js-line-number" data-line-number="365"></td>
        <td id="LC365" class="blob-code js-file-line">                            <span class="nx">axis</span><span class="p">.</span><span class="nx">labelHeight</span> <span class="o">=</span> <span class="nx">axis</span><span class="p">.</span><span class="nx">labelHeight</span> <span class="o">-</span></td>
      </tr>
      <tr>
        <td id="L366" class="blob-num js-line-number" data-line-number="366"></td>
        <td id="LC366" class="blob-code js-file-line">                                <span class="nx">axisLabels</span><span class="p">[</span><span class="nx">axisName</span><span class="p">].</span><span class="nx">height</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L367" class="blob-num js-line-number" data-line-number="367"></td>
        <td id="LC367" class="blob-code js-file-line">                            <span class="nx">axis</span><span class="p">.</span><span class="nx">labelWidth</span> <span class="o">=</span> <span class="nx">axis</span><span class="p">.</span><span class="nx">labelWidth</span> <span class="o">-</span></td>
      </tr>
      <tr>
        <td id="L368" class="blob-num js-line-number" data-line-number="368"></td>
        <td id="LC368" class="blob-code js-file-line">                                <span class="nx">axisLabels</span><span class="p">[</span><span class="nx">axisName</span><span class="p">].</span><span class="nx">width</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L369" class="blob-num js-line-number" data-line-number="369"></td>
        <td id="LC369" class="blob-code js-file-line">                            <span class="nx">opts</span><span class="p">.</span><span class="nx">labelHeight</span> <span class="o">=</span> <span class="nx">axis</span><span class="p">.</span><span class="nx">labelHeight</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L370" class="blob-num js-line-number" data-line-number="370"></td>
        <td id="LC370" class="blob-code js-file-line">                            <span class="nx">opts</span><span class="p">.</span><span class="nx">labelWidth</span> <span class="o">=</span> <span class="nx">axis</span><span class="p">.</span><span class="nx">labelWidth</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L371" class="blob-num js-line-number" data-line-number="371"></td>
        <td id="LC371" class="blob-code js-file-line">                            <span class="nx">axisLabels</span><span class="p">[</span><span class="nx">axisName</span><span class="p">].</span><span class="nx">cleanup</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L372" class="blob-num js-line-number" data-line-number="372"></td>
        <td id="LC372" class="blob-code js-file-line">                            <span class="k">delete</span> <span class="nx">axisLabels</span><span class="p">[</span><span class="nx">axisName</span><span class="p">];</span></td>
      </tr>
      <tr>
        <td id="L373" class="blob-num js-line-number" data-line-number="373"></td>
        <td id="LC373" class="blob-code js-file-line">                        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L374" class="blob-num js-line-number" data-line-number="374"></td>
        <td id="LC374" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L375" class="blob-num js-line-number" data-line-number="375"></td>
        <td id="LC375" class="blob-code js-file-line">                        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">opts</span> <span class="o">||</span> <span class="o">!</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabel</span> <span class="o">||</span> <span class="o">!</span><span class="nx">axis</span><span class="p">.</span><span class="nx">show</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L376" class="blob-num js-line-number" data-line-number="376"></td>
        <td id="LC376" class="blob-code js-file-line">                            <span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L377" class="blob-num js-line-number" data-line-number="377"></td>
        <td id="LC377" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L378" class="blob-num js-line-number" data-line-number="378"></td>
        <td id="LC378" class="blob-code js-file-line">                        <span class="nx">hasAxisLabels</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L379" class="blob-num js-line-number" data-line-number="379"></td>
        <td id="LC379" class="blob-code js-file-line">                        <span class="kd">var</span> <span class="nx">renderer</span> <span class="o">=</span> <span class="kc">null</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L380" class="blob-num js-line-number" data-line-number="380"></td>
        <td id="LC380" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L381" class="blob-num js-line-number" data-line-number="381"></td>
        <td id="LC381" class="blob-code js-file-line">                        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelUseHtml</span> <span class="o">&amp;&amp;</span></td>
      </tr>
      <tr>
        <td id="L382" class="blob-num js-line-number" data-line-number="382"></td>
        <td id="LC382" class="blob-code js-file-line">                            <span class="nx">navigator</span><span class="p">.</span><span class="nx">appName</span> <span class="o">==</span> <span class="s1">&#39;Microsoft Internet Explorer&#39;</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L383" class="blob-num js-line-number" data-line-number="383"></td>
        <td id="LC383" class="blob-code js-file-line">                            <span class="kd">var</span> <span class="nx">ua</span> <span class="o">=</span> <span class="nx">navigator</span><span class="p">.</span><span class="nx">userAgent</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L384" class="blob-num js-line-number" data-line-number="384"></td>
        <td id="LC384" class="blob-code js-file-line">                            <span class="kd">var</span> <span class="nx">re</span>  <span class="o">=</span> <span class="k">new</span> <span class="nb">RegExp</span><span class="p">(</span><span class="s2">&quot;MSIE ([0-9]{1,}[\.0-9]{0,})&quot;</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L385" class="blob-num js-line-number" data-line-number="385"></td>
        <td id="LC385" class="blob-code js-file-line">                            <span class="k">if</span> <span class="p">(</span><span class="nx">re</span><span class="p">.</span><span class="nx">exec</span><span class="p">(</span><span class="nx">ua</span><span class="p">)</span> <span class="o">!=</span> <span class="kc">null</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L386" class="blob-num js-line-number" data-line-number="386"></td>
        <td id="LC386" class="blob-code js-file-line">                                <span class="nx">rv</span> <span class="o">=</span> <span class="nb">parseFloat</span><span class="p">(</span><span class="nb">RegExp</span><span class="p">.</span><span class="nx">$1</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L387" class="blob-num js-line-number" data-line-number="387"></td>
        <td id="LC387" class="blob-code js-file-line">                            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L388" class="blob-num js-line-number" data-line-number="388"></td>
        <td id="LC388" class="blob-code js-file-line">                            <span class="k">if</span> <span class="p">(</span><span class="nx">rv</span> <span class="o">&gt;=</span> <span class="mi">9</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelUseCanvas</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelUseHtml</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L389" class="blob-num js-line-number" data-line-number="389"></td>
        <td id="LC389" class="blob-code js-file-line">                                <span class="nx">renderer</span> <span class="o">=</span> <span class="nx">CssTransformAxisLabel</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L390" class="blob-num js-line-number" data-line-number="390"></td>
        <td id="LC390" class="blob-code js-file-line">                            <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelUseCanvas</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelUseHtml</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L391" class="blob-num js-line-number" data-line-number="391"></td>
        <td id="LC391" class="blob-code js-file-line">                                <span class="nx">renderer</span> <span class="o">=</span> <span class="nx">IeTransformAxisLabel</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L392" class="blob-num js-line-number" data-line-number="392"></td>
        <td id="LC392" class="blob-code js-file-line">                            <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelUseCanvas</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L393" class="blob-num js-line-number" data-line-number="393"></td>
        <td id="LC393" class="blob-code js-file-line">                                <span class="nx">renderer</span> <span class="o">=</span> <span class="nx">CanvasAxisLabel</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L394" class="blob-num js-line-number" data-line-number="394"></td>
        <td id="LC394" class="blob-code js-file-line">                            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L395" class="blob-num js-line-number" data-line-number="395"></td>
        <td id="LC395" class="blob-code js-file-line">                                <span class="nx">renderer</span> <span class="o">=</span> <span class="nx">HtmlAxisLabel</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L396" class="blob-num js-line-number" data-line-number="396"></td>
        <td id="LC396" class="blob-code js-file-line">                            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L397" class="blob-num js-line-number" data-line-number="397"></td>
        <td id="LC397" class="blob-code js-file-line">                        <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L398" class="blob-num js-line-number" data-line-number="398"></td>
        <td id="LC398" class="blob-code js-file-line">                            <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelUseHtml</span> <span class="o">||</span> <span class="p">(</span><span class="o">!</span><span class="nx">css3TransitionSupported</span><span class="p">()</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">canvasTextSupported</span><span class="p">())</span> <span class="o">&amp;&amp;</span> <span class="o">!</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelUseCanvas</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L399" class="blob-num js-line-number" data-line-number="399"></td>
        <td id="LC399" class="blob-code js-file-line">                                <span class="nx">renderer</span> <span class="o">=</span> <span class="nx">HtmlAxisLabel</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L400" class="blob-num js-line-number" data-line-number="400"></td>
        <td id="LC400" class="blob-code js-file-line">                            <span class="p">}</span> <span class="k">else</span> <span class="k">if</span> <span class="p">(</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelUseCanvas</span> <span class="o">||</span> <span class="o">!</span><span class="nx">css3TransitionSupported</span><span class="p">())</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L401" class="blob-num js-line-number" data-line-number="401"></td>
        <td id="LC401" class="blob-code js-file-line">                                <span class="nx">renderer</span> <span class="o">=</span> <span class="nx">CanvasAxisLabel</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L402" class="blob-num js-line-number" data-line-number="402"></td>
        <td id="LC402" class="blob-code js-file-line">                            <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L403" class="blob-num js-line-number" data-line-number="403"></td>
        <td id="LC403" class="blob-code js-file-line">                                <span class="nx">renderer</span> <span class="o">=</span> <span class="nx">CssTransformAxisLabel</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L404" class="blob-num js-line-number" data-line-number="404"></td>
        <td id="LC404" class="blob-code js-file-line">                            <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L405" class="blob-num js-line-number" data-line-number="405"></td>
        <td id="LC405" class="blob-code js-file-line">                        <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L406" class="blob-num js-line-number" data-line-number="406"></td>
        <td id="LC406" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L407" class="blob-num js-line-number" data-line-number="407"></td>
        <td id="LC407" class="blob-code js-file-line">                        <span class="kd">var</span> <span class="nx">padding</span> <span class="o">=</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelPadding</span> <span class="o">===</span> <span class="kc">undefined</span> <span class="o">?</span></td>
      </tr>
      <tr>
        <td id="L408" class="blob-num js-line-number" data-line-number="408"></td>
        <td id="LC408" class="blob-code js-file-line">                                      <span class="nx">defaultPadding</span> <span class="o">:</span> <span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabelPadding</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L409" class="blob-num js-line-number" data-line-number="409"></td>
        <td id="LC409" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L410" class="blob-num js-line-number" data-line-number="410"></td>
        <td id="LC410" class="blob-code js-file-line">                        <span class="nx">axisLabels</span><span class="p">[</span><span class="nx">axisName</span><span class="p">]</span> <span class="o">=</span> <span class="k">new</span> <span class="nx">renderer</span><span class="p">(</span><span class="nx">axisName</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L411" class="blob-num js-line-number" data-line-number="411"></td>
        <td id="LC411" class="blob-code js-file-line">                                                            <span class="nx">axis</span><span class="p">.</span><span class="nx">position</span><span class="p">,</span> <span class="nx">padding</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L412" class="blob-num js-line-number" data-line-number="412"></td>
        <td id="LC412" class="blob-code js-file-line">                                                            <span class="nx">plot</span><span class="p">,</span> <span class="nx">opts</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L413" class="blob-num js-line-number" data-line-number="413"></td>
        <td id="LC413" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L414" class="blob-num js-line-number" data-line-number="414"></td>
        <td id="LC414" class="blob-code js-file-line">                        <span class="c1">// flot interprets axis.labelHeight and .labelWidth as</span></td>
      </tr>
      <tr>
        <td id="L415" class="blob-num js-line-number" data-line-number="415"></td>
        <td id="LC415" class="blob-code js-file-line">                        <span class="c1">// the height and width of the tick labels. We increase</span></td>
      </tr>
      <tr>
        <td id="L416" class="blob-num js-line-number" data-line-number="416"></td>
        <td id="LC416" class="blob-code js-file-line">                        <span class="c1">// these values to make room for the axis label and</span></td>
      </tr>
      <tr>
        <td id="L417" class="blob-num js-line-number" data-line-number="417"></td>
        <td id="LC417" class="blob-code js-file-line">                        <span class="c1">// padding.</span></td>
      </tr>
      <tr>
        <td id="L418" class="blob-num js-line-number" data-line-number="418"></td>
        <td id="LC418" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L419" class="blob-num js-line-number" data-line-number="419"></td>
        <td id="LC419" class="blob-code js-file-line">                        <span class="nx">axisLabels</span><span class="p">[</span><span class="nx">axisName</span><span class="p">].</span><span class="nx">calculateSize</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L420" class="blob-num js-line-number" data-line-number="420"></td>
        <td id="LC420" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L421" class="blob-num js-line-number" data-line-number="421"></td>
        <td id="LC421" class="blob-code js-file-line">                        <span class="c1">// AxisLabel.height and .width are the size of the</span></td>
      </tr>
      <tr>
        <td id="L422" class="blob-num js-line-number" data-line-number="422"></td>
        <td id="LC422" class="blob-code js-file-line">                        <span class="c1">// axis label and padding.</span></td>
      </tr>
      <tr>
        <td id="L423" class="blob-num js-line-number" data-line-number="423"></td>
        <td id="LC423" class="blob-code js-file-line">                        <span class="c1">// Just set opts here because axis will be sorted out on</span></td>
      </tr>
      <tr>
        <td id="L424" class="blob-num js-line-number" data-line-number="424"></td>
        <td id="LC424" class="blob-code js-file-line">                        <span class="c1">// the redraw.</span></td>
      </tr>
      <tr>
        <td id="L425" class="blob-num js-line-number" data-line-number="425"></td>
        <td id="LC425" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L426" class="blob-num js-line-number" data-line-number="426"></td>
        <td id="LC426" class="blob-code js-file-line">                        <span class="nx">opts</span><span class="p">.</span><span class="nx">labelHeight</span> <span class="o">=</span> <span class="nx">axis</span><span class="p">.</span><span class="nx">labelHeight</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L427" class="blob-num js-line-number" data-line-number="427"></td>
        <td id="LC427" class="blob-code js-file-line">                            <span class="nx">axisLabels</span><span class="p">[</span><span class="nx">axisName</span><span class="p">].</span><span class="nx">height</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L428" class="blob-num js-line-number" data-line-number="428"></td>
        <td id="LC428" class="blob-code js-file-line">                        <span class="nx">opts</span><span class="p">.</span><span class="nx">labelWidth</span> <span class="o">=</span> <span class="nx">axis</span><span class="p">.</span><span class="nx">labelWidth</span> <span class="o">+</span></td>
      </tr>
      <tr>
        <td id="L429" class="blob-num js-line-number" data-line-number="429"></td>
        <td id="LC429" class="blob-code js-file-line">                            <span class="nx">axisLabels</span><span class="p">[</span><span class="nx">axisName</span><span class="p">].</span><span class="nx">width</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L430" class="blob-num js-line-number" data-line-number="430"></td>
        <td id="LC430" class="blob-code js-file-line">                    <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L431" class="blob-num js-line-number" data-line-number="431"></td>
        <td id="LC431" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L432" class="blob-num js-line-number" data-line-number="432"></td>
        <td id="LC432" class="blob-code js-file-line">                    <span class="c1">// If there are axis labels, re-draw with new label widths and</span></td>
      </tr>
      <tr>
        <td id="L433" class="blob-num js-line-number" data-line-number="433"></td>
        <td id="LC433" class="blob-code js-file-line">                    <span class="c1">// heights.</span></td>
      </tr>
      <tr>
        <td id="L434" class="blob-num js-line-number" data-line-number="434"></td>
        <td id="LC434" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L435" class="blob-num js-line-number" data-line-number="435"></td>
        <td id="LC435" class="blob-code js-file-line">                    <span class="k">if</span> <span class="p">(</span><span class="nx">hasAxisLabels</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L436" class="blob-num js-line-number" data-line-number="436"></td>
        <td id="LC436" class="blob-code js-file-line">                        <span class="nx">secondPass</span> <span class="o">=</span> <span class="kc">true</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L437" class="blob-num js-line-number" data-line-number="437"></td>
        <td id="LC437" class="blob-code js-file-line">                        <span class="nx">plot</span><span class="p">.</span><span class="nx">setupGrid</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L438" class="blob-num js-line-number" data-line-number="438"></td>
        <td id="LC438" class="blob-code js-file-line">                        <span class="nx">plot</span><span class="p">.</span><span class="nx">draw</span><span class="p">();</span></td>
      </tr>
      <tr>
        <td id="L439" class="blob-num js-line-number" data-line-number="439"></td>
        <td id="LC439" class="blob-code js-file-line">                    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L440" class="blob-num js-line-number" data-line-number="440"></td>
        <td id="LC440" class="blob-code js-file-line">                <span class="p">}</span> <span class="k">else</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L441" class="blob-num js-line-number" data-line-number="441"></td>
        <td id="LC441" class="blob-code js-file-line">                    <span class="nx">secondPass</span> <span class="o">=</span> <span class="kc">false</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L442" class="blob-num js-line-number" data-line-number="442"></td>
        <td id="LC442" class="blob-code js-file-line">                    <span class="c1">// DRAW</span></td>
      </tr>
      <tr>
        <td id="L443" class="blob-num js-line-number" data-line-number="443"></td>
        <td id="LC443" class="blob-code js-file-line">                    <span class="nx">$</span><span class="p">.</span><span class="nx">each</span><span class="p">(</span><span class="nx">plot</span><span class="p">.</span><span class="nx">getAxes</span><span class="p">(),</span> <span class="kd">function</span><span class="p">(</span><span class="nx">axisName</span><span class="p">,</span> <span class="nx">axis</span><span class="p">)</span> <span class="p">{</span></td>
      </tr>
      <tr>
        <td id="L444" class="blob-num js-line-number" data-line-number="444"></td>
        <td id="LC444" class="blob-code js-file-line">                        <span class="kd">var</span> <span class="nx">opts</span> <span class="o">=</span> <span class="nx">axis</span><span class="p">.</span><span class="nx">options</span> <span class="c1">// Flot 0.7</span></td>
      </tr>
      <tr>
        <td id="L445" class="blob-num js-line-number" data-line-number="445"></td>
        <td id="LC445" class="blob-code js-file-line">                            <span class="o">||</span> <span class="nx">plot</span><span class="p">.</span><span class="nx">getOptions</span><span class="p">()[</span><span class="nx">axisName</span><span class="p">];</span> <span class="c1">// Flot 0.6</span></td>
      </tr>
      <tr>
        <td id="L446" class="blob-num js-line-number" data-line-number="446"></td>
        <td id="LC446" class="blob-code js-file-line">                        <span class="k">if</span> <span class="p">(</span><span class="o">!</span><span class="nx">opts</span> <span class="o">||</span> <span class="o">!</span><span class="nx">opts</span><span class="p">.</span><span class="nx">axisLabel</span> <span class="o">||</span> <span class="o">!</span><span class="nx">axis</span><span class="p">.</span><span class="nx">show</span><span class="p">)</span></td>
      </tr>
      <tr>
        <td id="L447" class="blob-num js-line-number" data-line-number="447"></td>
        <td id="LC447" class="blob-code js-file-line">                            <span class="k">return</span><span class="p">;</span></td>
      </tr>
      <tr>
        <td id="L448" class="blob-num js-line-number" data-line-number="448"></td>
        <td id="LC448" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L449" class="blob-num js-line-number" data-line-number="449"></td>
        <td id="LC449" class="blob-code js-file-line">                        <span class="nx">axisLabels</span><span class="p">[</span><span class="nx">axisName</span><span class="p">].</span><span class="nx">draw</span><span class="p">(</span><span class="nx">axis</span><span class="p">.</span><span class="nx">box</span><span class="p">);</span></td>
      </tr>
      <tr>
        <td id="L450" class="blob-num js-line-number" data-line-number="450"></td>
        <td id="LC450" class="blob-code js-file-line">                    <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L451" class="blob-num js-line-number" data-line-number="451"></td>
        <td id="LC451" class="blob-code js-file-line">                <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L452" class="blob-num js-line-number" data-line-number="452"></td>
        <td id="LC452" class="blob-code js-file-line">            <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L453" class="blob-num js-line-number" data-line-number="453"></td>
        <td id="LC453" class="blob-code js-file-line">        <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L454" class="blob-num js-line-number" data-line-number="454"></td>
        <td id="LC454" class="blob-code js-file-line">    <span class="p">}</span></td>
      </tr>
      <tr>
        <td id="L455" class="blob-num js-line-number" data-line-number="455"></td>
        <td id="LC455" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L456" class="blob-num js-line-number" data-line-number="456"></td>
        <td id="LC456" class="blob-code js-file-line">
</td>
      </tr>
      <tr>
        <td id="L457" class="blob-num js-line-number" data-line-number="457"></td>
        <td id="LC457" class="blob-code js-file-line">    <span class="nx">$</span><span class="p">.</span><span class="nx">plot</span><span class="p">.</span><span class="nx">plugins</span><span class="p">.</span><span class="nx">push</span><span class="p">({</span></td>
      </tr>
      <tr>
        <td id="L458" class="blob-num js-line-number" data-line-number="458"></td>
        <td id="LC458" class="blob-code js-file-line">        <span class="nx">init</span><span class="o">:</span> <span class="nx">init</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L459" class="blob-num js-line-number" data-line-number="459"></td>
        <td id="LC459" class="blob-code js-file-line">        <span class="nx">options</span><span class="o">:</span> <span class="nx">options</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L460" class="blob-num js-line-number" data-line-number="460"></td>
        <td id="LC460" class="blob-code js-file-line">        <span class="nx">name</span><span class="o">:</span> <span class="s1">&#39;axisLabels&#39;</span><span class="p">,</span></td>
      </tr>
      <tr>
        <td id="L461" class="blob-num js-line-number" data-line-number="461"></td>
        <td id="LC461" class="blob-code js-file-line">        <span class="nx">version</span><span class="o">:</span> <span class="s1">&#39;2.0&#39;</span></td>
      </tr>
      <tr>
        <td id="L462" class="blob-num js-line-number" data-line-number="462"></td>
        <td id="LC462" class="blob-code js-file-line">    <span class="p">});</span></td>
      </tr>
      <tr>
        <td id="L463" class="blob-num js-line-number" data-line-number="463"></td>
        <td id="LC463" class="blob-code js-file-line"><span class="p">})(</span><span class="nx">jQuery</span><span class="p">);</span></td>
      </tr>
</table>

  </div>

  </div>
</div>

<a href="#jump-to-line" rel="facebox[.linejump]" data-hotkey="l" style="display:none">Jump to Line</a>
<div id="jump-to-line" style="display:none">
  <form accept-charset="UTF-8" class="js-jump-to-line-form">
    <input class="linejump-input js-jump-to-line-field" type="text" placeholder="Jump to line&hellip;" autofocus>
    <button type="submit" class="button">Go</button>
  </form>
</div>

        </div>

      </div><!-- /.repo-container -->
      <div class="modal-backdrop"></div>
    </div><!-- /.container -->
  </div><!-- /.site -->


    </div><!-- /.wrapper -->

      <div class="container">
  <div class="site-footer" role="contentinfo">
    <ul class="site-footer-links right">
      <li><a href="https://status.github.com/">Status</a></li>
      <li><a href="https://developer.github.com">API</a></li>
      <li><a href="http://training.github.com">Training</a></li>
      <li><a href="http://shop.github.com">Shop</a></li>
      <li><a href="/blog">Blog</a></li>
      <li><a href="/about">About</a></li>

    </ul>

    <a href="/" aria-label="Homepage">
      <span class="mega-octicon octicon-mark-github" title="GitHub"></span>
    </a>

    <ul class="site-footer-links">
      <li>&copy; 2014 <span title="0.03684s from github-fe126-cp1-prd.iad.github.net">GitHub</span>, Inc.</li>
        <li><a href="/site/terms">Terms</a></li>
        <li><a href="/site/privacy">Privacy</a></li>
        <li><a href="/security">Security</a></li>
        <li><a href="/contact">Contact</a></li>
    </ul>
  </div><!-- /.site-footer -->
</div><!-- /.container -->


    <div class="fullscreen-overlay js-fullscreen-overlay" id="fullscreen_overlay">
  <div class="fullscreen-container js-suggester-container">
    <div class="textarea-wrap">
      <textarea name="fullscreen-contents" id="fullscreen-contents" class="fullscreen-contents js-fullscreen-contents js-suggester-field" placeholder=""></textarea>
    </div>
  </div>
  <div class="fullscreen-sidebar">
    <a href="#" class="exit-fullscreen js-exit-fullscreen tooltipped tooltipped-w" aria-label="Exit Zen Mode">
      <span class="mega-octicon octicon-screen-normal"></span>
    </a>
    <a href="#" class="theme-switcher js-theme-switcher tooltipped tooltipped-w"
      aria-label="Switch themes">
      <span class="octicon octicon-color-mode"></span>
    </a>
  </div>
</div>



    <div id="ajax-error-message" class="flash flash-error">
      <span class="octicon octicon-alert"></span>
      <a href="#" class="octicon octicon-x flash-close js-ajax-error-dismiss" aria-label="Dismiss error"></a>
      Something went wrong with that request. Please try again.
    </div>


      <script crossorigin="anonymous" src="https://assets-cdn.github.com/assets/frameworks-15f10010d7ea9e4d5b9f20455abfb143a279c44fe8decefa4ab0af3a11c2e0fe.js" type="text/javascript"></script>
      <script async="async" crossorigin="anonymous" src="https://assets-cdn.github.com/assets/github-2fe20e6e44d2b80e9c800a1164325f4e6da5015a624e73f224f3dd869bcd4dfc.js" type="text/javascript"></script>
      
      
  </body>
</html>

