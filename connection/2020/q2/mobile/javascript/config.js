﻿	var aliasConfig = {
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
bookConfig.bgMRotation="0";
bookConfig.backgroundPosition="stretch";
bookConfig.backgroundOpacity="100";
bookConfig.backgroundScene="None";
bookConfig.LeftShadowWidth="90";
bookConfig.LeftShadowAlpha="0.3";
bookConfig.RightShadowWidth="55";
bookConfig.RightShadowAlpha="0.3";
bookConfig.ShowTopLeftShadow="No";
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

bookConfig.macBookVersion = "HBUQtjFAXfspGMUWtlGIQcvsCARUjnJIVfglKJYbnqCLfXhhFLbRslPCVengJPdVmjCFfRmvMMTYpoKIfXsnAABBC656D9_";
bookConfig.Html5Template = "Metro";
bookConfig.UIBaseURL="mobile/";
bookConfig.isFlipPdf=false;
bookConfig.searchTextJS="mobile/javascript/search_config.js";
bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";
bookConfig.totalPageCount=42;
bookConfig.largePageWidth=595;
bookConfig.largePageHeight=841;
bookConfig.bookTitle="Connection Magazine Q2 2020 | Synaptic Software";
bookConfig.normalPath="./files/mobile/";
bookConfig.largePath="./files/mobile/";
bookConfig.productName="Flip PDF Professional";
bookConfig.useTheAliCloudChart=false;
bookConfig.MidBgColor="#467958";
bookConfig.bookmarkCR = "f4ad25e4eb6359df6cf3f23559804ee53dba11d0";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="./files/thumb/";
var fliphtml5_pages=[{"l":"./files/mobile/1.png","n":"./files/mobile/1.png","t":"./files/thumb/1.png"},{"l":"./files/mobile/2.png","n":"./files/mobile/2.png","t":"./files/thumb/2.png"},{"l":"./files/mobile/3.png","n":"./files/mobile/3.png","t":"./files/thumb/3.png"},{"l":"./files/mobile/4.png","n":"./files/mobile/4.png","t":"./files/thumb/4.png"},{"l":"./files/mobile/5.png","n":"./files/mobile/5.png","t":"./files/thumb/5.png"},{"l":"./files/mobile/6.png","n":"./files/mobile/6.png","t":"./files/thumb/6.png"},{"l":"./files/mobile/7.png","n":"./files/mobile/7.png","t":"./files/thumb/7.png"},{"l":"./files/mobile/8.png","n":"./files/mobile/8.png","t":"./files/thumb/8.png"},{"l":"./files/mobile/9.png","n":"./files/mobile/9.png","t":"./files/thumb/9.png"},{"l":"./files/mobile/10.png","n":"./files/mobile/10.png","t":"./files/thumb/10.png"},{"l":"./files/mobile/11.png","n":"./files/mobile/11.png","t":"./files/thumb/11.png"},{"l":"./files/mobile/12.png","n":"./files/mobile/12.png","t":"./files/thumb/12.png"},{"l":"./files/mobile/13.png","n":"./files/mobile/13.png","t":"./files/thumb/13.png"},{"l":"./files/mobile/14.png","n":"./files/mobile/14.png","t":"./files/thumb/14.png"},{"l":"./files/mobile/15.png","n":"./files/mobile/15.png","t":"./files/thumb/15.png"},{"l":"./files/mobile/16.png","n":"./files/mobile/16.png","t":"./files/thumb/16.png"},{"l":"./files/mobile/17.png","n":"./files/mobile/17.png","t":"./files/thumb/17.png"},{"l":"./files/mobile/18.png","n":"./files/mobile/18.png","t":"./files/thumb/18.png"},{"l":"./files/mobile/19.png","n":"./files/mobile/19.png","t":"./files/thumb/19.png"},{"l":"./files/mobile/20.png","n":"./files/mobile/20.png","t":"./files/thumb/20.png"},{"l":"./files/mobile/21.png","n":"./files/mobile/21.png","t":"./files/thumb/21.png"},{"l":"./files/mobile/22.png","n":"./files/mobile/22.png","t":"./files/thumb/22.png"},{"l":"./files/mobile/23.png","n":"./files/mobile/23.png","t":"./files/thumb/23.png"},{"l":"./files/mobile/24.png","n":"./files/mobile/24.png","t":"./files/thumb/24.png"},{"l":"./files/mobile/25.png","n":"./files/mobile/25.png","t":"./files/thumb/25.png"},{"l":"./files/mobile/26.png","n":"./files/mobile/26.png","t":"./files/thumb/26.png"},{"l":"./files/mobile/27.png","n":"./files/mobile/27.png","t":"./files/thumb/27.png"},{"l":"./files/mobile/28.png","n":"./files/mobile/28.png","t":"./files/thumb/28.png"},{"l":"./files/mobile/29.png","n":"./files/mobile/29.png","t":"./files/thumb/29.png"},{"l":"./files/mobile/30.png","n":"./files/mobile/30.png","t":"./files/thumb/30.png"},{"l":"./files/mobile/31.png","n":"./files/mobile/31.png","t":"./files/thumb/31.png"},{"l":"./files/mobile/32.png","n":"./files/mobile/32.png","t":"./files/thumb/32.png"},{"l":"./files/mobile/33.png","n":"./files/mobile/33.png","t":"./files/thumb/33.png"},{"l":"./files/mobile/34.png","n":"./files/mobile/34.png","t":"./files/thumb/34.png"},{"l":"./files/mobile/35.png","n":"./files/mobile/35.png","t":"./files/thumb/35.png"},{"l":"./files/mobile/36.png","n":"./files/mobile/36.png","t":"./files/thumb/36.png"},{"l":"./files/mobile/37.png","n":"./files/mobile/37.png","t":"./files/thumb/37.png"},{"l":"./files/mobile/38.png","n":"./files/mobile/38.png","t":"./files/thumb/38.png"},{"l":"./files/mobile/39.png","n":"./files/mobile/39.png","t":"./files/thumb/39.png"},{"l":"./files/mobile/40.png","n":"./files/mobile/40.png","t":"./files/thumb/40.png"},{"l":"./files/mobile/41.png","n":"./files/mobile/41.png","t":"./files/thumb/41.png"},{"l":"./files/mobile/42.png","n":"./files/mobile/42.png","t":"./files/thumb/42.png"}];
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next","btnLastPage" : "Last","btnPrePage" : "Previous","btnGoToHome" : "Home","btnDownload" : "Download","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnPrint" : "Print","btnThumb" : "Thumbnails","btnBookMark" : "Bookmark","frmBookMark" : "Bookmark","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnSocialShare" : "Share","btnHelp" : "Help","btnAbout" : "About","btnSearch" : "Search","btnFullscreen" : "Fullscreen","btnExitFullscreen" : "Exit Fullscreen","btnMore" : "More","frmPrintCaption" : "Print","frmPrintall" : "Print All Pages","frmPrintcurrent" : "Print Current Page","frmPrintRange" : "Print Range","frmPrintexample" : "Example: 2,3,5-10","frmPrintbtn" : "Print","frmShareCaption" : "Share","frmShareLabel" : "Share","frmShareInfo" : "You can easily share this publication to social networks.Just click the appropriate button below","frminsertLabel" : "Insert to Site","frminsertInfo" : "Use the code below to embed this publication to your website.","frmaboutcaption" : "Contact","frmaboutcontactinformation" : "Contact Information","frmaboutADDRESS" : "Address","frmaboutEMAIL" : "Email","frmaboutWEBSITE" : "Website","frmaboutMOBILE" : "Mobile","frmaboutAUTHOR" : "Author","frmaboutDESCRIPTION" : "Description","frmSearch" : "Search","frmToc" : "Table Of Contents","btnTableOfContent" : "Table Of Contents","btnNote" : "Annotation","lblLast" : "This is the last page.","lblFirst" : "This is the first page.","lblFullscreen" : "Click to view in fullscreen","lblName" : "Name","lblPassword" : "Password","lblLogin" : "Login","lblCancel" : "Cancel","lblNoName" : "User name can not be empty.","lblNoPassword" : "Password can not be empty.","lblNoCorrectLogin" : "Please enter the correct user name and password.","btnVideo" : "Video Gallery","btnSlideShow" : "Slideshow","pnlSearchInputInvalid" : "The search text is too short.","btnDragToMove" : "Move by mouse drag","btnPositionToMove" : "Move by mouse position","lblHelp1" : "Drag the page corner to view","lblHelp2" : "Double click to zoom in, out","lblCopy" : "Copy","lblAddToPage" : "Add To Page","lblPage" : "Page","lblTitle" : "Title","lblEdit" : "Edit","lblDelete" : "Delete","lblRemoveAll" : "Remove All","tltCursor" : "Cursor","tltAddHighlight" : "Add highlight","tltAddTexts" : "Add texts","tltAddShapes" : "Add shapes","tltAddNotes" : "Add notes","tltAddImageFile" : "Add image file","tltAddSignature" : "Add signature","tltAddLine" : "Add line","tltAddArrow" : "Add arrow","tltAddRect" : "Add rect","tltAddEllipse" : "Add ellipse","lblDoubleClickToZoomIn" : "Double click to zoom in.","lblPages" : "Pages","infCopyToClipboard" : "Your browser dose not support clipboard, please do it yourself.","lblDescription" : "Title","frmLinkLabel" : "Link","infNotSupportHtml5" : "Your browser does not support HTML5.","frmHowToUse" : "How To Use","lblHelpPage1" : "Move your finger to flip the book page.","lblHelpPage2" : "Zoom in by using gesture or double click on the page.","lblHelpPage3" : "Click to view the table of content, bookmarks and share your books via social networks.","lblHelpPage4" : "Add bookmarks, use search function and auto flip the book.","lblHelpPage5" : "Open the thumbnails to overview all book pages.","frmQrcodeCaption" : "Scan the bottom two-dimensional code to view with mobile phone."}];var pageEditor =[[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.310234",y:"0.205648",width:"0.409466",height:"0.028227"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2UyQua5"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.315579",y:"0.203496",width:"0.396641",height:"0.029361"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.liontrust.co.uk/insights"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.582261",y:"0.764997",width:"0.295408",height:"0.028226"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2UyQua5"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.236097",y:"0.824206",width:"0.072996",height:"0.013710"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2MPFK2V"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.226974",y:"0.846786",width:"0.133446",height:"0.016936"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/3ffLD5S"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.221270",y:"0.870174",width:"0.133447",height:"0.015323"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/37plI98"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.091246",y:"0.879045",width:"0.353577",height:"0.020162"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/37iZJAA"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.095238",y:"0.879885",width:"0.347848",height:"0.018592"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.verbatimassetmanagement.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.067294",y:"0.835496",width:"0.257769",height:"0.025806"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/37iGrLJ"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.072182",y:"0.838565",width:"0.245125",height:"0.021688"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://embarkhorizon.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.270153",y:"0.895070",width:"0.158538",height:"0.011750"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.embarkhorizon.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.060246",y:"0.158416",width:"0.262127",height:"0.040358"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"8"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.060246",y:"0.207431",width:"0.262127",height:"0.040358"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"10"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.060246",y:"0.257450",width:"0.262127",height:"0.036978"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"12"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.060246",y:"0.306807",width:"0.262127",height:"0.024301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"14"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.060246",y:"0.343991",width:"0.262127",height:"0.024301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"16"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.060246",y:"0.378982",width:"0.262127",height:"0.024302"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"18"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.060246",y:"0.416668",width:"0.262127",height:"0.035287"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"20"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.060246",y:"0.465523",width:"0.262127",height:"0.051345"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"22"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.060246",y:"0.526186",width:"0.262127",height:"0.035287"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"24"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.060246",y:"0.575201",width:"0.262127",height:"0.035287"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"29"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.060246",y:"0.623713",width:"0.262127",height:"0.035287"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"31"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.060246",y:"0.673574",width:"0.262127",height:"0.035287"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"32"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.060246",y:"0.722931",width:"0.262127",height:"0.035287"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"34"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.060246",y:"0.771603",width:"0.262127",height:"0.060640"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"36"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.060246",y:"0.843843",width:"0.262127",height:"0.024301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"40"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.380850",y:"0.816676",width:"0.123289",height:"0.009220"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/3f9wrH6"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.660623",y:"0.757162",width:"0.169525",height:"0.013411"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.661809",y:"0.800750",width:"0.145815",height:"0.010897"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.381746",y:"0.814907",width:"0.118482",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.662301",y:"0.758814",width:"0.162564",height:"0.010377"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.662301",y:"0.801271",width:"0.139223",height:"0.010377"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.722722",y:"0.852436",width:"0.145246",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.399507",y:"0.897735",width:"0.179009",height:"0.010897"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2zlyGYG"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.398323",y:"0.912823",width:"0.119733",height:"0.009220"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@sarasin.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.899024",width:"0.176242",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.sarasinandpartners.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.912090",width:"0.115048",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@sarasin.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.780656",y:"0.835854",width:"0.123769",height:"0.006485"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.assetmanagement.hsbc.com/uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.447620",y:"0.896837",width:"0.244360",height:"0.006485"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.spglobal.com/marketintelligence/en/news-insights/latest"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.397137",y:"0.544006",width:"0.161226",height:"0.012573"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@fefundinfo.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.398323",y:"0.590945",width:"0.286887",height:"0.024308"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2AYZEG2"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.545039",width:"0.154486",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@fefundinfo.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.590974",width:"0.275618",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"www.fefundinfo.com/en-gb/channels/financial"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.397137",y:"0.894382",width:"0.201532",height:"0.012573"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2Yw5iI2"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.895115",width:"0.195525",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.canadalifeinvestments.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.577331",y:"0.756075",width:"0.131588",height:"0.011735"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmr.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.581907",y:"0.757049",width:"0.125207",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmr.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.393580",y:"0.577534",width:"0.188492",height:"0.016765"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2XQH7ok"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.580465",width:"0.175336",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.vanguard.co.uk/advisers"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.395951",y:"0.756075",width:"0.222871",height:"0.014250"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:edward.aramdixon@carmignac.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.758574",width:"0.209492",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:edward.aramdixon@carmignac.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.398323",y:"0.803016",width:"0.243023",height:"0.012573"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:ukmanagedportfolios@morningstar.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.395951",y:"0.818103",width:"0.208646",height:"0.011735"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2ApGuJz"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.805030",width:"0.237148",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:ukmanagedportfolios@morningstar.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.818095",width:"0.199821",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.morningstarportfolios.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.519241",y:"0.447610",width:"0.129217",height:"0.010060"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/3dUAgQv"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.521394",y:"0.448051",width:"0.122671",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://aegon.co.uk/advisers"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.598669",y:"0.721708",width:"0.182566",height:"0.011735"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2BXvTWJ"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.601190",y:"0.719928",width:"0.175095",height:"0.014111"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.carmignac.com"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.346160",y:"0.904440",width:"0.290443",height:"0.031014"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2MP9IEi"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.353636",y:"0.893473",width:"0.271501",height:"0.044730"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.rsmr.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.726702",y:"0.851633",width:"0.129217",height:"0.013411"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2Aji4S6"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.729250",y:"0.852466",width:"0.122436",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.ninetyone.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.730258",y:"0.826486",width:"0.173081",height:"0.010058"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/3cWJ6f8"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.730140",y:"0.826625",width:"0.171360",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.the-exeter.com/adviser"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.713661",y:"0.917852",width:"0.207460",height:"0.024309"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2Aqevte"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.718853",y:"0.914813",width:"0.192309",height:"0.027195"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://the-exeter.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.432702",y:"0.649622",width:"0.152927",height:"0.010058"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:info@bestinsurance.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.434562",y:"0.649351",width:"0.149637",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:info@bestinsurance.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.662686",y:"0.831515",width:"0.122105",height:"0.011735"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.666666",y:"0.831656",width:"0.117626",height:"0.010329"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.300468",y:"0.910379",width:"0.123592",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.669799",y:"0.933778",width:"0.258435",height:"0.021794"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.671752",y:"0.929782",width:"0.249277",height:"0.024677"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.515685",y:"0.871749",width:"0.331935",height:"0.024309"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2Yw6prc"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.517377",y:"0.872585",width:"0.324905",height:"0.018450"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://aegon.co.uk/advice-makes-sense"}}]]
var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];;
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