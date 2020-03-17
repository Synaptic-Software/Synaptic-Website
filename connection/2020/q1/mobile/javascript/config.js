	var aliasConfig = {
appName : ["", "", ""],
totalPageCount : [],
largePageWidth : [],
largePageHeight : [],
normalPath : [],
largePath : [],
thumbPath : [],

ToolBarsSettings:[],
TitleBar:[],
appLogoIcon:["appLogoIcon"],
appLogoLinkURL:["appLogoLinkURL"],
bookTitle : [],
bookDescription : [],
ButtonsBar : [],
ShareButton : [],
ShareButtonVisible : ["socialShareButtonVisible"],
ThumbnailsButton : [],
ThumbnailsButtonVisible : ["enableThumbnail"],
ZoomButton : [],
ZoomButtonVisible : ["enableZoomIn"],
FlashDisplaySettings : [],
MainBgConfig : [],
bgBeginColor : ["bgBeginColor"],
bgEndColor : ["bgEndColor"],
bgMRotation : ["bgMRotation"],
backGroundImgURL : ["mainbgImgUrl","innerMainbgImgUrl"],
pageBackgroundColor : ["pageBackgroundColor"],
flipshortcutbutton : [],
BookMargins : [],
topMargin : [],
bottomMargin : [],
leftMargin : [],
rightMargin : [],
HTMLControlSettings : [],
linkconfig : [],
LinkDownColor : ["linkOverColor"],
LinkAlpha : ["linkOverColorAlpha"],
OpenWindow : ["linkOpenedWindow"],
searchColor : [],
searchAlpha : [],
SearchButtonVisible : ["searchButtonVisible"],

productName : [],
homePage : [],
enableAutoPlay : ["autoPlayAutoStart"],
autoPlayDuration : ["autoPlayDuration"],
autoPlayLoopCount : ["autoPlayLoopCount"],
BookMarkButtonVisible : [],
googleAnalyticsID : ["googleAnalyticsID"],
OriginPageIndex : [],	
HardPageEnable : ["isHardCover"],	
UIBaseURL : [],	
RightToLeft: ["isRightToLeft"],	

LeftShadowWidth : ["leftPageShadowWidth"],	
LeftShadowAlpha : ["pageShadowAlpha"],
RightShadowWidth : ["rightPageShadowWidth"],
RightShadowAlpha : ["pageShadowAlpha"],
ShortcutButtonHeight : [],	
ShortcutButtonWidth : [],
AutoPlayButtonVisible : ["enableAutoPlay"],	
DownloadButtonVisible : ["enableDownload"],	
DownloadURL : ["downloadURL"],
HomeButtonVisible :["homeButtonVisible"],
HomeURL:['btnHomeURL'],
BackgroundSoundURL:['bacgroundSoundURL'],
//TableOfContentButtonVisible:["BookMarkButtonVisible"],
PrintButtonVisible:["enablePrint"],
toolbarColor:["mainColor","barColor"],
loadingBackground:["mainColor","barColor"],
BackgroundSoundButtonVisible:["enableFlipSound"],
FlipSound:["enableFlipSound"],
MiniStyle:["userSmallMode"],
retainBookCenter:["moveFlipBookToCenter"],
totalPagesCaption:["totalPageNumberCaptionStr"],
pageNumberCaption:["pageIndexCaptionStrs"]
};
var aliasLanguage={
frmPrintbtn:["frmPrintCaption"],
frmPrintall : ["frmPrintPrintAll"],
frmPrintcurrent : ["frmPrintPrintCurrentPage"],
frmPrintRange : ["frmPrintPrintRange"],
frmPrintexample : ["frmPrintExampleCaption"],
btnLanguage:["btnSwicthLanguage"],
btnTableOfContent:["btnBookMark"]
}
;
	var bookConfig = {
	appName:'flippdf',
	totalPageCount : 0,
	largePageWidth : 1080,
	largePageHeight : 1440,
	normalPath : "files/page/",
	largePath : "files/large/",
	thumbPath : "files/thumb/",
	
	ToolBarsSettings:"",
	TitleBar:"",
	appLogoLinkURL:"",
	bookTitle:"FLIPBUILDER",
	bookDescription:"",
	ButtonsBar:"",
	ShareButton:"",
	
	ThumbnailsButton:"",
	ThumbnailsButtonVisible:"Show",
	ZoomButton:"",
	ZoomButtonVisible:"Yes",
	FlashDisplaySettings:"",
	MainBgConfig:"",
	bgBeginColor:"#cccccc",
	bgEndColor:"#eeeeee",
	bgMRotation:45,
	pageBackgroundColor:"#FFFFFF",
	flipshortcutbutton:"Show",
	BookMargins:"",
	topMargin:10,
	bottomMargin:10,
	leftMargin:10,
	rightMargin:10,
	HTMLControlSettings:"",
	linkconfig:"",
	LinkDownColor:"#808080",
	LinkAlpha:0.5,
	OpenWindow:"_Blank",

	BookMarkButtonVisible:'true',
	productName : 'Demo created by Flip PDF',
	homePage : 'http://www.flipbuilder.com/',
	isFlipPdf : "true",
	TableOfContentButtonVisible:"true",
	searchTextJS:'javascript/search_config.js',
	searchPositionJS:undefined
};
	
	
	
bookConfig.loadingCaptionColor="#DDDDDD";
bookConfig.loadingBackground="#000000";
bookConfig.appLogoIcon="./files/mobile-ext/appLogoIcon.png";
bookConfig.appLogoLinkURL="http://www.capitafinancialsoftware.co.uk";
bookConfig.appLogoOpenWindow="Blank";
bookConfig.logoHeight="25";
bookConfig.logoPadding="10";
bookConfig.logoTop="8";
bookConfig.toolbarColor="#000000";
bookConfig.iconColor="#FFFFFF";
bookConfig.pageNumColor="#000000";
bookConfig.iconFontColor="#FFFFFF";
bookConfig.toolbarAlwaysShow="No";
bookConfig.formFontColor="#FFFFFF";
bookConfig.formBackgroundColor="#000000";
bookConfig.ToolBarAlpha="1";
bookConfig.showBookInstructionOnStart="false";
bookConfig.InstructionsButtonVisible="Show";
bookConfig.showInstructionOnStart="No";
bookConfig.showGotoButtonsAtFirst="No";
bookConfig.QRCode="Hide";
bookConfig.HomeButtonVisible="NO";
bookConfig.aboutButtonVisible="Hide";
bookConfig.enablePageBack="Show";
bookConfig.ShareButtonVisible="Show";
shareObj = [];
bookConfig.isInsertFrameLinkEnable="Show";
bookConfig.addCurrentPage="No";
bookConfig.EmailButtonVisible="Show";
bookConfig.btnShareWithEmailBody="\{link\}";
bookConfig.ThumbnailsButtonVisible="Show";
bookConfig.thumbnailColor="#333333";
bookConfig.thumbnailAlpha="70";
bookConfig.BookMarkButtonVisible="Show";
bookConfig.TableOfContentButtonVisible="Hide";
bookConfig.isHideTabelOfContentNodes="No";
bookConfig.SearchButtonVisible="Show";
bookConfig.leastSearchChar="3";
bookConfig.searchKeywordFontColor="#FFB000";
bookConfig.searchHightlightColor="#FFFF00";
bookConfig.SelectTextButtonVisible="Enable";
bookConfig.PrintButtonVisible="No";
bookConfig.BackgroundSoundButtonVisible="NO";
bookConfig.FlipSound="NO";
bookConfig.BackgroundSoundLoop="-1";
bookConfig.AutoPlayButtonVisible="Yes";
bookConfig.autoPlayAutoStart="No";
bookConfig.autoPlayDuration="3";
bookConfig.autoPlayLoopCount="1";
bookConfig.ZoomButtonVisible="Yes";
bookConfig.maxZoomWidth="0";
bookConfig.defaultZoomWidth="0";
bookConfig.mouseWheelFlip="Yes";
bookConfig.ZoomMapVisible="Hide";
bookConfig.DownloadButtonVisible="Hide";
bookConfig.PhoneButtonVisible="Hide";
bookConfig.AnnotationButtonVisible="Disable";
bookConfig.FullscreenButtonVisible="Show";
bookConfig.MagnifierButtonVisible="Hide";
bookConfig.bgBeginColor="#E6E6E6";
bookConfig.bgEndColor="#CECECE";
bookConfig.bgMRotation="90";
bookConfig.backgroundPosition="stretch";
bookConfig.backgroundOpacity="100";
bookConfig.backgroundScene="None";
bookConfig.LeftShadowWidth="90";
bookConfig.LeftShadowAlpha="0.6";
bookConfig.RightShadowWidth="55";
bookConfig.RightShadowAlpha="0.6";
bookConfig.ShowTopLeftShadow="Yes";
bookConfig.HardPageEnable="No";
bookConfig.hardCoverBorderWidth="8";
bookConfig.borderColor="#572F0D";
bookConfig.outerCoverBorder="Yes";
bookConfig.cornerRound="8";
bookConfig.leftMarginOnMobile="0";
bookConfig.topMarginOnMobile="0";
bookConfig.rightMarginOnMobile="0";
bookConfig.bottomMarginOnMobile="0";
bookConfig.pageBackgroundColor="#FFFFFF";
bookConfig.flipshortcutbutton="Show";
bookConfig.BindingType="side";
bookConfig.RightToLeft="No";
bookConfig.FlipDirection="0";
bookConfig.flippingTime="0.6";
bookConfig.retainBookCenter="Yes";
bookConfig.FlipStyle="Flip";
bookConfig.autoDoublePage="Yes";
bookConfig.isTheBookOpen="No";
bookConfig.thicknessWidthType="None";
bookConfig.thicknessColor="#FFFFFF";
bookConfig.SingleModeBanFlipToLastPage="No";
bookConfig.showThicknessOnMobile="No";
bookConfig.isSingleBookFullWindowOnMobile="no";
bookConfig.isStopMouseMenu="yes";
bookConfig.restorePageVisible="No";
bookConfig.topMargin="10";
bookConfig.bottomMargin="10";
bookConfig.leftMargin="10";
bookConfig.rightMargin="10";
bookConfig.hideMiniFullscreen="true";
bookConfig.maxWidthToSmallMode="400";
bookConfig.maxHeightToSmallMode="300";
bookConfig.leftRightPnlShowOption="None";
bookConfig.highDefinitionConversion="yes";
bookConfig.LargeLogoPosition="top-left";
bookConfig.LargeLogoTarget="Blank";
bookConfig.isFixLogoSize="No";
bookConfig.logoFixWidth="0";
bookConfig.logoFixHeight="0";
bookConfig.SupportOperatePageZoom="Yes";
bookConfig.showHelpContentAtFirst="No";
bookConfig.updateURLForPage="No";
bookConfig.LinkDownColor="#800080";
bookConfig.LinkAlpha="0.2";
bookConfig.OpenWindow="Blank";
bookConfig.showLinkHint="No";

bookConfig.macBookVersion = "COeQihEFRbsqGBYflpBBaQsvONVWolLJZfpsANVeslMAQchlLDYcvsMCVdipKMWXonDKaUkoGAeatvNNfWsnPC6fd87c6a_";
bookConfig.Html5Template = "Metro";
bookConfig.UIBaseURL="mobile/";
bookConfig.isFlipPdf=false;
bookConfig.searchTextJS="mobile/javascript/search_config.js";
bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";
bookConfig.totalPageCount=52;
bookConfig.largePageWidth=595;
bookConfig.largePageHeight=841;
bookConfig.bookTitle="Connection Magazine Q1 2020 | Synaptic Software";
bookConfig.normalPath="./files/mobile/";
bookConfig.largePath="./files/mobile/";
bookConfig.productName="Flip PDF Professional";
bookConfig.useTheAliCloudChart=false;
bookConfig.MidBgColor="#ab977e";
bookConfig.bookmarkCR = "58073e6dcd985f11bd41bb70559b978c59de6c22";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="./files/thumb/";
var fliphtml5_pages=[{"l":"./files/mobile/1.jpg","n":"./files/mobile/1.jpg","t":"./files/thumb/1.jpg"},{"l":"./files/mobile/2.jpg","n":"./files/mobile/2.jpg","t":"./files/thumb/2.jpg"},{"l":"./files/mobile/3.jpg","n":"./files/mobile/3.jpg","t":"./files/thumb/3.jpg"},{"l":"./files/mobile/4.jpg","n":"./files/mobile/4.jpg","t":"./files/thumb/4.jpg"},{"l":"./files/mobile/5.jpg","n":"./files/mobile/5.jpg","t":"./files/thumb/5.jpg"},{"l":"./files/mobile/6.jpg","n":"./files/mobile/6.jpg","t":"./files/thumb/6.jpg"},{"l":"./files/mobile/7.jpg","n":"./files/mobile/7.jpg","t":"./files/thumb/7.jpg"},{"l":"./files/mobile/8.jpg","n":"./files/mobile/8.jpg","t":"./files/thumb/8.jpg"},{"l":"./files/mobile/9.jpg","n":"./files/mobile/9.jpg","t":"./files/thumb/9.jpg"},{"l":"./files/mobile/10.jpg","n":"./files/mobile/10.jpg","t":"./files/thumb/10.jpg"},{"l":"./files/mobile/11.jpg","n":"./files/mobile/11.jpg","t":"./files/thumb/11.jpg"},{"l":"./files/mobile/12.jpg","n":"./files/mobile/12.jpg","t":"./files/thumb/12.jpg"},{"l":"./files/mobile/13.jpg","n":"./files/mobile/13.jpg","t":"./files/thumb/13.jpg"},{"l":"./files/mobile/14.jpg","n":"./files/mobile/14.jpg","t":"./files/thumb/14.jpg"},{"l":"./files/mobile/15.jpg","n":"./files/mobile/15.jpg","t":"./files/thumb/15.jpg"},{"l":"./files/mobile/16.jpg","n":"./files/mobile/16.jpg","t":"./files/thumb/16.jpg"},{"l":"./files/mobile/17.jpg","n":"./files/mobile/17.jpg","t":"./files/thumb/17.jpg"},{"l":"./files/mobile/18.jpg","n":"./files/mobile/18.jpg","t":"./files/thumb/18.jpg"},{"l":"./files/mobile/19.jpg","n":"./files/mobile/19.jpg","t":"./files/thumb/19.jpg"},{"l":"./files/mobile/20.jpg","n":"./files/mobile/20.jpg","t":"./files/thumb/20.jpg"},{"l":"./files/mobile/21.jpg","n":"./files/mobile/21.jpg","t":"./files/thumb/21.jpg"},{"l":"./files/mobile/22.jpg","n":"./files/mobile/22.jpg","t":"./files/thumb/22.jpg"},{"l":"./files/mobile/23.jpg","n":"./files/mobile/23.jpg","t":"./files/thumb/23.jpg"},{"l":"./files/mobile/24.jpg","n":"./files/mobile/24.jpg","t":"./files/thumb/24.jpg"},{"l":"./files/mobile/25.jpg","n":"./files/mobile/25.jpg","t":"./files/thumb/25.jpg"},{"l":"./files/mobile/26.jpg","n":"./files/mobile/26.jpg","t":"./files/thumb/26.jpg"},{"l":"./files/mobile/27.jpg","n":"./files/mobile/27.jpg","t":"./files/thumb/27.jpg"},{"l":"./files/mobile/28.jpg","n":"./files/mobile/28.jpg","t":"./files/thumb/28.jpg"},{"l":"./files/mobile/29.jpg","n":"./files/mobile/29.jpg","t":"./files/thumb/29.jpg"},{"l":"./files/mobile/30.jpg","n":"./files/mobile/30.jpg","t":"./files/thumb/30.jpg"},{"l":"./files/mobile/31.jpg","n":"./files/mobile/31.jpg","t":"./files/thumb/31.jpg"},{"l":"./files/mobile/32.jpg","n":"./files/mobile/32.jpg","t":"./files/thumb/32.jpg"},{"l":"./files/mobile/33.jpg","n":"./files/mobile/33.jpg","t":"./files/thumb/33.jpg"},{"l":"./files/mobile/34.jpg","n":"./files/mobile/34.jpg","t":"./files/thumb/34.jpg"},{"l":"./files/mobile/35.jpg","n":"./files/mobile/35.jpg","t":"./files/thumb/35.jpg"},{"l":"./files/mobile/36.jpg","n":"./files/mobile/36.jpg","t":"./files/thumb/36.jpg"},{"l":"./files/mobile/37.jpg","n":"./files/mobile/37.jpg","t":"./files/thumb/37.jpg"},{"l":"./files/mobile/38.jpg","n":"./files/mobile/38.jpg","t":"./files/thumb/38.jpg"},{"l":"./files/mobile/39.jpg","n":"./files/mobile/39.jpg","t":"./files/thumb/39.jpg"},{"l":"./files/mobile/40.jpg","n":"./files/mobile/40.jpg","t":"./files/thumb/40.jpg"},{"l":"./files/mobile/41.jpg","n":"./files/mobile/41.jpg","t":"./files/thumb/41.jpg"},{"l":"./files/mobile/42.jpg","n":"./files/mobile/42.jpg","t":"./files/thumb/42.jpg"},{"l":"./files/mobile/43.jpg","n":"./files/mobile/43.jpg","t":"./files/thumb/43.jpg"},{"l":"./files/mobile/44.jpg","n":"./files/mobile/44.jpg","t":"./files/thumb/44.jpg"},{"l":"./files/mobile/45.jpg","n":"./files/mobile/45.jpg","t":"./files/thumb/45.jpg"},{"l":"./files/mobile/46.jpg","n":"./files/mobile/46.jpg","t":"./files/thumb/46.jpg"},{"l":"./files/mobile/47.jpg","n":"./files/mobile/47.jpg","t":"./files/thumb/47.jpg"},{"l":"./files/mobile/48.jpg","n":"./files/mobile/48.jpg","t":"./files/thumb/48.jpg"},{"l":"./files/mobile/49.jpg","n":"./files/mobile/49.jpg","t":"./files/thumb/49.jpg"},{"l":"./files/mobile/50.jpg","n":"./files/mobile/50.jpg","t":"./files/thumb/50.jpg"},{"l":"./files/mobile/51.jpg","n":"./files/mobile/51.jpg","t":"./files/thumb/51.jpg"},{"l":"./files/mobile/52.jpg","n":"./files/mobile/52.jpg","t":"./files/thumb/52.jpg"}];
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next","btnLastPage" : "Last","btnPrePage" : "Previous","btnGoToHome" : "Home","btnDownload" : "Download","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnPrint" : "Print","btnThumb" : "Thumbnails","btnBookMark" : "Bookmark","frmBookMark" : "Bookmark","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnSocialShare" : "Share","btnHelp" : "Help","btnAbout" : "About","btnSearch" : "Search","btnFullscreen" : "Fullscreen","btnExitFullscreen" : "Exit Fullscreen","btnMore" : "More","frmPrintCaption" : "Print","frmPrintall" : "Print All Pages","frmPrintcurrent" : "Print Current Page","frmPrintRange" : "Print Range","frmPrintexample" : "Example: 2,3,5-10","frmPrintbtn" : "Print","frmShareCaption" : "Share","frmShareLabel" : "Share","frmShareInfo" : "You can easily share this publication to social networks.Just click the appropriate button below","frminsertLabel" : "Insert to Site","frminsertInfo" : "Use the code below to embed this publication to your website.","frmaboutcaption" : "Contact","frmaboutcontactinformation" : "Contact Information","frmaboutADDRESS" : "Address","frmaboutEMAIL" : "Email","frmaboutWEBSITE" : "Website","frmaboutMOBILE" : "Mobile","frmaboutAUTHOR" : "Author","frmaboutDESCRIPTION" : "Description","frmSearch" : "Search","frmToc" : "Table Of Contents","btnTableOfContent" : "Table Of Contents","btnNote" : "Annotation","lblLast" : "This is the last page.","lblFirst" : "This is the first page.","lblFullscreen" : "Click to view in fullscreen","lblName" : "Name","lblPassword" : "Password","lblLogin" : "Login","lblCancel" : "Cancel","lblNoName" : "User name can not be empty.","lblNoPassword" : "Password can not be empty.","lblNoCorrectLogin" : "Please enter the correct user name and password.","btnVideo" : "Video Gallery","btnSlideShow" : "Slideshow","pnlSearchInputInvalid" : "The search text is too short.","btnDragToMove" : "Move by mouse drag","btnPositionToMove" : "Move by mouse position","lblHelp1" : "Drag the page corner to view","lblHelp2" : "Double click to zoom in, out","lblCopy" : "Copy","lblAddToPage" : "Add To Page","lblPage" : "Page","lblTitle" : "Title","lblEdit" : "Edit","lblDelete" : "Delete","lblRemoveAll" : "Remove All","tltCursor" : "Cursor","tltAddHighlight" : "Add highlight","tltAddTexts" : "Add texts","tltAddShapes" : "Add shapes","tltAddNotes" : "Add notes","tltAddImageFile" : "Add image file","tltAddSignature" : "Add signature","tltAddLine" : "Add line","tltAddArrow" : "Add arrow","tltAddRect" : "Add rect","tltAddEllipse" : "Add ellipse","lblDoubleClickToZoomIn" : "Double click to zoom in.","lblPages" : "Pages","infCopyToClipboard" : "Your browser dose not support clipboard, please do it yourself.","lblDescription" : "Title","frmLinkLabel" : "Link","infNotSupportHtml5" : "Your browser does not support HTML5.","frmHowToUse" : "How To Use","lblHelpPage1" : "Move your finger to flip the book page.","lblHelpPage2" : "Zoom in by using gesture or double click on the page.","lblHelpPage3" : "Click to view the table of content, bookmarks and share your books via social networks.","lblHelpPage4" : "Add bookmarks, use search function and auto flip the book.","lblHelpPage5" : "Open the thumbnails to overview all book pages.","frmQrcodeCaption" : "Scan the bottom two-dimensional code to view with mobile phone."}];var pageEditor =[[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.712984",y:"0.732415",width:"0.209921",height:"0.015451"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/risk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.132110",y:"0.926604",width:"0.421101",height:"0.022519"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-webline-play"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.429357",y:"0.952459",width:"0.264219",height:"0.023353"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.430591",y:"0.949299",width:"0.257659",height:"0.025507"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.376278",y:"0.842367",width:"0.139186",height:"0.014179"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.659370",y:"0.787321",width:"0.181650",height:"0.010842"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.660549",y:"0.829857",width:"0.153342",height:"0.010842"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.764350",y:"0.889553",width:"0.162778",height:"0.010008"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032413",y:"0.199300",width:"0.288432",height:"0.023788"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"4"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032413",y:"0.238174",width:"0.288432",height:"0.032781"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"6"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032413",y:"0.284010",width:"0.288432",height:"0.023788"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"8"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032413",y:"0.320272",width:"0.288432",height:"0.023788"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"10"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032413",y:"0.358856",width:"0.288432",height:"0.033362"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"12"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031233",y:"0.405562",width:"0.288432",height:"0.023788"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"14"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032413",y:"0.443275",width:"0.288432",height:"0.033362"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"16"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032413",y:"0.489982",width:"0.288432",height:"0.033362"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"18"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032413",y:"0.537558",width:"0.288432",height:"0.033362"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"20"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032413",y:"0.582815",width:"0.288432",height:"0.023788"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"22"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032413",y:"0.621108",width:"0.288432",height:"0.023788"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"26"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032413",y:"0.657951",width:"0.288432",height:"0.033362"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"28"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032413",y:"0.709589",width:"0.288432",height:"0.023788"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"30"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032413",y:"0.744691",width:"0.288432",height:"0.012184"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"34"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032413",y:"0.771671",width:"0.288432",height:"0.023788"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"48"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.034093",y:"0.810835",width:"0.288432",height:"0.033361"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"50"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.662295",y:"0.786731",width:"0.174422",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.662295",y:"0.829192",width:"0.149672",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.764409",y:"0.888821",width:"0.161984",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.655830",y:"0.828189",width:"0.263041",height:"0.033361"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.linkedin.com/in/timfrancemassey/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.678242",y:"0.908255",width:"0.218218",height:"0.008340"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://capita.turtl.co/story/financialwellness/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.363302",y:"0.934944",width:"0.088467",height:"0.018349"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.bmogam.com/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.655830",y:"0.653878",width:"0.213499",height:"0.015846"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:2020events@tcfinvestment.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658691",y:"0.655762",width:"0.209453",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:2020events@tcfinvestment.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.684140",y:"0.837364",width:"0.175754",height:"0.013344"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.langcatfinancial.co.uk/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.657011",y:"0.877396",width:"0.232371",height:"0.013345"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.investecassetmanagement.com/en/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.685319",y:"0.834027",width:"0.108519",height:"0.011676"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.rsmr.co.uk/?cdlresp=1"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.736040",y:"0.871558",width:"0.133289",height:"0.011676"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmr.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.738457",y:"0.871174",width:"0.130876",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmr.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.657011",y:"0.564637",width:"0.241807",height:"0.011676"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.verbatimassetmanagement.co.uk/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.657011",y:"0.476356",width:"0.273655",height:"0.045038"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.vanguard.co.uk/documents/adv/beyond-expense-ratios-eu-en-pro.pdf"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658993",y:"0.493614",width:"0.251691",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"co.uk/documents/adv/beyond-expense"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.364481",y:"0.910757",width:"0.218218",height:"0.025855"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:ukmanagedportfolios@morningstar.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.363302",y:"0.941616",width:"0.205243",height:"0.013344"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.morningstar.com/en-uk/products/morningstar-managed-portfolios%2523disclosure"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.365086",y:"0.925730",width:"0.102944",height:"0.011620"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://morningstar.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.365086",y:"0.941167",width:"0.201242",height:"0.011620"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.morningstarportfolios.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.509567",y:"0.707255",width:"0.220575",height:"0.013344"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.waverton.co.uk/fund-centre"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.615726",y:"0.924936",width:"0.314940",height:"0.023353"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.261860",y:"0.847371",width:"0.288990",height:"0.017515"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.567364",y:"0.846537",width:"0.120316",height:"0.020017"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.rsmr.co.uk/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.260114",y:"0.843363",width:"0.291496",height:"0.022627"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.799737",y:"0.728940",width:"0.120314",height:"0.010842"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:info@tempo-sp.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.800961",y:"0.729165",width:"0.119861",height:"0.011620"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:info@tempo-sp.com"}}],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.638138",y:"0.904919",width:"0.237090",height:"0.020017"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.637549",y:"0.905878",width:"0.240386",height:"0.020601"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.342070",y:"0.934944",width:"0.548492",height:"0.023353"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.342070",y:"0.933693",width:"0.548492",height:"0.023353"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.342999",y:"0.935183",width:"0.548492",height:"0.023353"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.342747",y:"0.934172",width:"0.548492",height:"0.023353"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.800916",y:"0.576313",width:"0.123853",height:"0.011676"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.668937",y:"0.618453",width:"0.258191",height:"0.009080"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.abi.org.uk/data-and-resources/industry-data/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.668937",y:"0.643206",width:"0.240752",height:"0.009080"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.abi.org.uk/globalassets/files/publications/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.668937",y:"0.667959",width:"0.209872",height:"0.009080"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.ons.gov.uk/ons/about-ons/business"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.666666",y:"0.867481",width:"0.131159",height:"0.011620"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.080210",y:"0.837364",width:"0.307863",height:"0.018348"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.aviva-for-advisers.co.uk/adviser/site/public"}}]]
var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];;
	bookConfig.hideMiniFullscreen=true;
	if(language&&language.length>0&&language[0]&&language[0].language){
		bookConfig.language=language[0].language;
	}
	
try{
	for(var i=0;pageEditor!=undefined&&i<pageEditor.length;i++){
		if(pageEditor[i].length==0){
			continue;
		}
		for(var j=0;j<pageEditor[i].length;j++){
			var anno=pageEditor[i][j];
			if(anno==undefined)continue;
			if(anno.overAlpha==undefined){
				anno.overAlpha=bookConfig.LinkAlpha;
			}
			if(anno.outAlpha==undefined){
				anno.outAlpha=0;
			}
			if(anno.downAlpha==undefined){
				anno.downAlpha=bookConfig.LinkAlpha;
			}
			if(anno.overColor==undefined){
				anno.overColor=bookConfig.LinkDownColor;
			}
			if(anno.downColor==undefined){
				anno.downColor=bookConfig.LinkDownColor;
			}
			if(anno.outColor==undefined){
				anno.outColor=bookConfig.LinkDownColor;
			}
			if(anno.annotype=='com.mobiano.flipbook.pageeditor.TAnnoLink'){
				anno.alpha=bookConfig.LinkAlpha;
			}
		}
	}
}catch(e){
}
try{
	$.browser.device = 2;
}catch(ee){
}