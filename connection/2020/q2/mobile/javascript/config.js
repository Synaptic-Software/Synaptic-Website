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

bookConfig.macBookVersion = "NGWVtkNKWRpkMJSaklGORQqhJDdauoGLaTkjKIWXqiAMWVkkANVfkhDCVflrOEdetqPMaZhoDKRTviGBcWhkGK77B91721_";
bookConfig.Html5Template = "Metro";
bookConfig.UIBaseURL="mobile/";
bookConfig.isFlipPdf=false;
bookConfig.searchTextJS="mobile/javascript/search_config.js";
bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";
bookConfig.totalPageCount=56;
bookConfig.largePageWidth=595;
bookConfig.largePageHeight=841;
bookConfig.bookTitle="Connection Magazine Q2 2020 | Synaptic Software";
bookConfig.normalPath="./files/mobile/";
bookConfig.largePath="./files/mobile/";
bookConfig.productName="Flip PDF Professional";
bookConfig.useTheAliCloudChart=false;
bookConfig.MidBgColor="#919618";
bookConfig.bookmarkCR = "c0cfd266249ffff187c11e713d86371685cb83f1";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="./files/thumb/";
var fliphtml5_pages=[{"l":"./files/mobile/1.jpg","n":"./files/mobile/1.jpg","t":"./files/thumb/1.jpg"},{"l":"./files/mobile/2.jpg","n":"./files/mobile/2.jpg","t":"./files/thumb/2.jpg"},{"l":"./files/mobile/3.jpg","n":"./files/mobile/3.jpg","t":"./files/thumb/3.jpg"},{"l":"./files/mobile/4.jpg","n":"./files/mobile/4.jpg","t":"./files/thumb/4.jpg"},{"l":"./files/mobile/5.jpg","n":"./files/mobile/5.jpg","t":"./files/thumb/5.jpg"},{"l":"./files/mobile/6.jpg","n":"./files/mobile/6.jpg","t":"./files/thumb/6.jpg"},{"l":"./files/mobile/7.jpg","n":"./files/mobile/7.jpg","t":"./files/thumb/7.jpg"},{"l":"./files/mobile/8.jpg","n":"./files/mobile/8.jpg","t":"./files/thumb/8.jpg"},{"l":"./files/mobile/9.jpg","n":"./files/mobile/9.jpg","t":"./files/thumb/9.jpg"},{"l":"./files/mobile/10.jpg","n":"./files/mobile/10.jpg","t":"./files/thumb/10.jpg"},{"l":"./files/mobile/11.jpg","n":"./files/mobile/11.jpg","t":"./files/thumb/11.jpg"},{"l":"./files/mobile/12.jpg","n":"./files/mobile/12.jpg","t":"./files/thumb/12.jpg"},{"l":"./files/mobile/13.jpg","n":"./files/mobile/13.jpg","t":"./files/thumb/13.jpg"},{"l":"./files/mobile/14.jpg","n":"./files/mobile/14.jpg","t":"./files/thumb/14.jpg"},{"l":"./files/mobile/15.jpg","n":"./files/mobile/15.jpg","t":"./files/thumb/15.jpg"},{"l":"./files/mobile/16.jpg","n":"./files/mobile/16.jpg","t":"./files/thumb/16.jpg"},{"l":"./files/mobile/17.jpg","n":"./files/mobile/17.jpg","t":"./files/thumb/17.jpg"},{"l":"./files/mobile/18.jpg","n":"./files/mobile/18.jpg","t":"./files/thumb/18.jpg"},{"l":"./files/mobile/19.jpg","n":"./files/mobile/19.jpg","t":"./files/thumb/19.jpg"},{"l":"./files/mobile/20.jpg","n":"./files/mobile/20.jpg","t":"./files/thumb/20.jpg"},{"l":"./files/mobile/21.jpg","n":"./files/mobile/21.jpg","t":"./files/thumb/21.jpg"},{"l":"./files/mobile/22.jpg","n":"./files/mobile/22.jpg","t":"./files/thumb/22.jpg"},{"l":"./files/mobile/23.jpg","n":"./files/mobile/23.jpg","t":"./files/thumb/23.jpg"},{"l":"./files/mobile/24.jpg","n":"./files/mobile/24.jpg","t":"./files/thumb/24.jpg"},{"l":"./files/mobile/25.jpg","n":"./files/mobile/25.jpg","t":"./files/thumb/25.jpg"},{"l":"./files/mobile/26.jpg","n":"./files/mobile/26.jpg","t":"./files/thumb/26.jpg"},{"l":"./files/mobile/27.jpg","n":"./files/mobile/27.jpg","t":"./files/thumb/27.jpg"},{"l":"./files/mobile/28.jpg","n":"./files/mobile/28.jpg","t":"./files/thumb/28.jpg"},{"l":"./files/mobile/29.jpg","n":"./files/mobile/29.jpg","t":"./files/thumb/29.jpg"},{"l":"./files/mobile/30.jpg","n":"./files/mobile/30.jpg","t":"./files/thumb/30.jpg"},{"l":"./files/mobile/31.jpg","n":"./files/mobile/31.jpg","t":"./files/thumb/31.jpg"},{"l":"./files/mobile/32.jpg","n":"./files/mobile/32.jpg","t":"./files/thumb/32.jpg"},{"l":"./files/mobile/33.jpg","n":"./files/mobile/33.jpg","t":"./files/thumb/33.jpg"},{"l":"./files/mobile/34.jpg","n":"./files/mobile/34.jpg","t":"./files/thumb/34.jpg"},{"l":"./files/mobile/35.jpg","n":"./files/mobile/35.jpg","t":"./files/thumb/35.jpg"},{"l":"./files/mobile/36.jpg","n":"./files/mobile/36.jpg","t":"./files/thumb/36.jpg"},{"l":"./files/mobile/37.jpg","n":"./files/mobile/37.jpg","t":"./files/thumb/37.jpg"},{"l":"./files/mobile/38.jpg","n":"./files/mobile/38.jpg","t":"./files/thumb/38.jpg"},{"l":"./files/mobile/39.jpg","n":"./files/mobile/39.jpg","t":"./files/thumb/39.jpg"},{"l":"./files/mobile/40.jpg","n":"./files/mobile/40.jpg","t":"./files/thumb/40.jpg"},{"l":"./files/mobile/41.jpg","n":"./files/mobile/41.jpg","t":"./files/thumb/41.jpg"},{"l":"./files/mobile/42.jpg","n":"./files/mobile/42.jpg","t":"./files/thumb/42.jpg"},{"l":"./files/mobile/43.jpg","n":"./files/mobile/43.jpg","t":"./files/thumb/43.jpg"},{"l":"./files/mobile/44.jpg","n":"./files/mobile/44.jpg","t":"./files/thumb/44.jpg"},{"l":"./files/mobile/45.jpg","n":"./files/mobile/45.jpg","t":"./files/thumb/45.jpg"},{"l":"./files/mobile/46.jpg","n":"./files/mobile/46.jpg","t":"./files/thumb/46.jpg"},{"l":"./files/mobile/47.jpg","n":"./files/mobile/47.jpg","t":"./files/thumb/47.jpg"},{"l":"./files/mobile/48.jpg","n":"./files/mobile/48.jpg","t":"./files/thumb/48.jpg"},{"l":"./files/mobile/49.jpg","n":"./files/mobile/49.jpg","t":"./files/thumb/49.jpg"},{"l":"./files/mobile/50.jpg","n":"./files/mobile/50.jpg","t":"./files/thumb/50.jpg"},{"l":"./files/mobile/51.jpg","n":"./files/mobile/51.jpg","t":"./files/thumb/51.jpg"},{"l":"./files/mobile/52.jpg","n":"./files/mobile/52.jpg","t":"./files/thumb/52.jpg"},{"l":"./files/mobile/53.jpg","n":"./files/mobile/53.jpg","t":"./files/thumb/53.jpg"},{"l":"./files/mobile/54.jpg","n":"./files/mobile/54.jpg","t":"./files/thumb/54.jpg"},{"l":"./files/mobile/55.jpg","n":"./files/mobile/55.jpg","t":"./files/thumb/55.jpg"},{"l":"./files/mobile/56.jpg","n":"./files/mobile/56.jpg","t":"./files/thumb/56.jpg"}];
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next","btnLastPage" : "Last","btnPrePage" : "Previous","btnGoToHome" : "Home","btnDownload" : "Download","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnPrint" : "Print","btnThumb" : "Thumbnails","btnBookMark" : "Bookmark","frmBookMark" : "Bookmark","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnSocialShare" : "Share","btnHelp" : "Help","btnAbout" : "About","btnSearch" : "Search","btnFullscreen" : "Fullscreen","btnExitFullscreen" : "Exit Fullscreen","btnMore" : "More","frmPrintCaption" : "Print","frmPrintall" : "Print All Pages","frmPrintcurrent" : "Print Current Page","frmPrintRange" : "Print Range","frmPrintexample" : "Example: 2,3,5-10","frmPrintbtn" : "Print","frmShareCaption" : "Share","frmShareLabel" : "Share","frmShareInfo" : "You can easily share this publication to social networks.Just click the appropriate button below","frminsertLabel" : "Insert to Site","frminsertInfo" : "Use the code below to embed this publication to your website.","frmaboutcaption" : "Contact","frmaboutcontactinformation" : "Contact Information","frmaboutADDRESS" : "Address","frmaboutEMAIL" : "Email","frmaboutWEBSITE" : "Website","frmaboutMOBILE" : "Mobile","frmaboutAUTHOR" : "Author","frmaboutDESCRIPTION" : "Description","frmSearch" : "Search","frmToc" : "Table Of Contents","btnTableOfContent" : "Table Of Contents","btnNote" : "Annotation","lblLast" : "This is the last page.","lblFirst" : "This is the first page.","lblFullscreen" : "Click to view in fullscreen","lblName" : "Name","lblPassword" : "Password","lblLogin" : "Login","lblCancel" : "Cancel","lblNoName" : "User name can not be empty.","lblNoPassword" : "Password can not be empty.","lblNoCorrectLogin" : "Please enter the correct user name and password.","btnVideo" : "Video Gallery","btnSlideShow" : "Slideshow","pnlSearchInputInvalid" : "The search text is too short.","btnDragToMove" : "Move by mouse drag","btnPositionToMove" : "Move by mouse position","lblHelp1" : "Drag the page corner to view","lblHelp2" : "Double click to zoom in, out","lblCopy" : "Copy","lblAddToPage" : "Add To Page","lblPage" : "Page","lblTitle" : "Title","lblEdit" : "Edit","lblDelete" : "Delete","lblRemoveAll" : "Remove All","tltCursor" : "Cursor","tltAddHighlight" : "Add highlight","tltAddTexts" : "Add texts","tltAddShapes" : "Add shapes","tltAddNotes" : "Add notes","tltAddImageFile" : "Add image file","tltAddSignature" : "Add signature","tltAddLine" : "Add line","tltAddArrow" : "Add arrow","tltAddRect" : "Add rect","tltAddEllipse" : "Add ellipse","lblDoubleClickToZoomIn" : "Double click to zoom in.","lblPages" : "Pages","infCopyToClipboard" : "Your browser dose not support clipboard, please do it yourself.","lblDescription" : "Title","frmLinkLabel" : "Link","infNotSupportHtml5" : "Your browser does not support HTML5.","frmHowToUse" : "How To Use","lblHelpPage1" : "Move your finger to flip the book page.","lblHelpPage2" : "Zoom in by using gesture or double click on the page.","lblHelpPage3" : "Click to view the table of content, bookmarks and share your books via social networks.","lblHelpPage4" : "Add bookmarks, use search function and auto flip the book.","lblHelpPage5" : "Open the thumbnails to overview all book pages.","frmQrcodeCaption" : "Scan the bottom two-dimensional code to view with mobile phone."}];var pageEditor =[[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.310234",y:"0.205648",width:"0.409466",height:"0.028227"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2UyQua5"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.315579",y:"0.203496",width:"0.396641",height:"0.029361"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.liontrust.co.uk/insights"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.582261",y:"0.764997",width:"0.295408",height:"0.028226"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2UyQua5"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.236097",y:"0.824206",width:"0.072996",height:"0.013710"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2MPFK2V"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.226974",y:"0.846786",width:"0.133446",height:"0.016936"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/3ffLD5S"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.221270",y:"0.870174",width:"0.133447",height:"0.015323"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/37plI98"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.091246",y:"0.879045",width:"0.353577",height:"0.020162"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/37iZJAA"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.095238",y:"0.879885",width:"0.347848",height:"0.018592"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.verbatimassetmanagement.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.067294",y:"0.835496",width:"0.257769",height:"0.025806"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/37iGrLJ"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.072182",y:"0.838565",width:"0.245125",height:"0.021688"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://embarkhorizon.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.270153",y:"0.895070",width:"0.158538",height:"0.011750"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.embarkhorizon.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.379355",y:"0.816427",width:"0.123289",height:"0.009220"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/3f9wrH6"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.659128",y:"0.756914",width:"0.169525",height:"0.013411"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.660314",y:"0.800501",width:"0.145815",height:"0.010897"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.723145",y:"0.851633",width:"0.145815",height:"0.010897"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.156638",width:"0.262128",height:"0.040358"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"8"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.205653",width:"0.262128",height:"0.040358"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"10"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.258048",width:"0.262128",height:"0.036978"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"12"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.306217",width:"0.262128",height:"0.024301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"14"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.343401",width:"0.262128",height:"0.024301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"16"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.377204",width:"0.262128",height:"0.024302"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"18"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.416078",width:"0.262128",height:"0.035287"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"20"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.462557",width:"0.262128",height:"0.051345"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"22"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.526784",width:"0.262128",height:"0.035287"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"24"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.575799",width:"0.262128",height:"0.035287"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"29"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.623123",width:"0.262128",height:"0.035287"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"31"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.672983",width:"0.262128",height:"0.035287"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"32"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.721152",width:"0.262128",height:"0.035287"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"34"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.771013",width:"0.262128",height:"0.060640"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"36"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.843690",width:"0.262128",height:"0.014160"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"40"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.058964",y:"0.868197",width:"0.262128",height:"0.024302"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"54"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.381746",y:"0.814907",width:"0.118469",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.662301",y:"0.758814",width:"0.162564",height:"0.010377"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.662301",y:"0.801271",width:"0.139223",height:"0.010377"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.722722",y:"0.852436",width:"0.145221",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.399507",y:"0.897735",width:"0.179009",height:"0.010897"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2zlyGYG"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.398323",y:"0.912823",width:"0.119733",height:"0.009220"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@sarasin.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.899024",width:"0.176242",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.sarasinandpartners.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.912090",width:"0.115048",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@sarasin.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.780656",y:"0.835854",width:"0.123769",height:"0.006485"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.assetmanagement.hsbc.com/uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.447620",y:"0.896837",width:"0.244360",height:"0.006485"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.spglobal.com/marketintelligence/en/news-insights/latest"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.397137",y:"0.544006",width:"0.161226",height:"0.012573"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@fefundinfo.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.398323",y:"0.590945",width:"0.286887",height:"0.024308"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2AYZEG2"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.545039",width:"0.154486",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@fefundinfo.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.590974",width:"0.275618",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"www.fefundinfo.com/en-gb/channels/financial"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.397137",y:"0.894382",width:"0.201532",height:"0.012573"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2Yw5iI2"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.895115",width:"0.195525",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.canadalifeinvestments.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.577331",y:"0.756075",width:"0.131588",height:"0.011735"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmr.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.581907",y:"0.757049",width:"0.125207",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmr.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.393580",y:"0.577534",width:"0.188492",height:"0.016765"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2XQH7ok"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.580465",width:"0.175336",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.vanguard.co.uk/advisers"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.395951",y:"0.756075",width:"0.222871",height:"0.014250"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:edward.aramdixon@carmignac.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.758574",width:"0.209492",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:edward.aramdixon@carmignac.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.398323",y:"0.803016",width:"0.243023",height:"0.012573"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:ukmanagedportfolios@morningstar.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.395951",y:"0.818103",width:"0.208646",height:"0.011735"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2ApGuJz"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.805030",width:"0.237148",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:ukmanagedportfolios@morningstar.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.401428",y:"0.818095",width:"0.199821",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.morningstarportfolios.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.519241",y:"0.447610",width:"0.129217",height:"0.010060"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/3dUAgQv"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.521394",y:"0.448051",width:"0.122671",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://aegon.co.uk/advisers"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.598669",y:"0.721708",width:"0.182566",height:"0.011735"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2BXvTWJ"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.601190",y:"0.719928",width:"0.175095",height:"0.014111"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.carmignac.com"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.346160",y:"0.904440",width:"0.290443",height:"0.031014"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2MP9IEi"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.353636",y:"0.893473",width:"0.271501",height:"0.044730"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.rsmr.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.726702",y:"0.851633",width:"0.129217",height:"0.013411"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2Aji4S6"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.729250",y:"0.852466",width:"0.122436",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.ninetyone.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.730258",y:"0.826486",width:"0.173081",height:"0.010058"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/3cWJ6f8"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.730140",y:"0.826625",width:"0.171360",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.the-exeter.com/adviser"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.713661",y:"0.917852",width:"0.207460",height:"0.024309"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2Aqevte"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.718853",y:"0.914813",width:"0.192309",height:"0.027195"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://the-exeter.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.432702",y:"0.649622",width:"0.152927",height:"0.010058"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:info@bestinsurance.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.434562",y:"0.649351",width:"0.149637",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:info@bestinsurance.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.662686",y:"0.831515",width:"0.122105",height:"0.011735"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.666666",y:"0.831656",width:"0.117626",height:"0.010329"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.300468",y:"0.910379",width:"0.123592",height:"0.010301"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.669799",y:"0.933778",width:"0.258435",height:"0.021794"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.671752",y:"0.929782",width:"0.249277",height:"0.024677"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.348532",y:"0.937969",width:"0.545322",height:"0.020117"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/3hmwQbs"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.344981",y:"0.933219",width:"0.544135",height:"0.023817"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.347939",y:"0.936712",width:"0.545322",height:"0.020117"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/3hmwQbs"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.344981",y:"0.933219",width:"0.544135",height:"0.023817"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.342809",y:"0.934761",width:"0.545324",height:"0.020117"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/3hmwQbs"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.344981",y:"0.933219",width:"0.544135",height:"0.023817"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.515685",y:"0.871749",width:"0.331935",height:"0.024309"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://bit.ly/2Yw6prc"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.517377",y:"0.872585",width:"0.324905",height:"0.018450"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://aegon.co.uk/advice-makes-sense"}}]]
var pages_information =[{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{},{}];;
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