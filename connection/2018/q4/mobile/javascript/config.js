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
	
	
	
bookConfig.loadingCaption="Loading";
bookConfig.loadingCaptionColor="#DDDDDD";
bookConfig.loadingPicture="/var/folders/6_/xnbvkpbs1n9f8qdfrhdpnnt80000gn/T/Flip_PDF_Professional/temp.QX42Sy/files/mobile-ext/loadingPicture.";
bookConfig.loadingBackground="#000000";
bookConfig.appLogoIcon="./files/mobile-ext/appLogoIcon.png";
bookConfig.appLogoLinkURL="http://www.capitafinancialsoftware.co.uk";
bookConfig.appLogoOpenWindow="Blank";
bookConfig.logoHeight="40";
bookConfig.logoPadding="0";
bookConfig.logoTop="0";
bookConfig.toolbarColor="#000000";
bookConfig.iconColor="#FFFFFF";
bookConfig.pageNumColor="#191919";
bookConfig.iconFontColor="#191919";
bookConfig.toolbarAlwaysShow="No";
bookConfig.InstructionsButtonVisible="Show";
bookConfig.showInstructionOnStart="No";
bookConfig.QRCode="Hide";
bookConfig.HomeButtonVisible="NO";
bookConfig.enablePageBack="Show";
bookConfig.ShareButtonVisible="Show";
bookConfig.EmailButtonVisible="Show";
bookConfig.btnShareWithEmailBody="\{link\}";
bookConfig.ThumbnailsButtonVisible="Show";
bookConfig.thumbnailColor="#333333";
bookConfig.thumbnailAlpha="70";
bookConfig.BookMarkButtonVisible="Hide";
bookConfig.TableOfContentButtonVisible="Show";
bookConfig.bookmarkBackground="#000000";
bookConfig.bookmarkFontColor="#CCCCCC";
bookConfig.SearchButtonVisible="Show";
bookConfig.leastSearchChar="3";
bookConfig.searchFontColor="#FFFFFF";
bookConfig.searchKeywordFontColor="#FFB000";
bookConfig.searchHightlightColor="#FFFF00";
bookConfig.SelectTextButtonVisible="Hide";
bookConfig.SelectTextButtonIcon="/var/folders/6_/xnbvkpbs1n9f8qdfrhdpnnt80000gn/T/Flip_PDF_Professional/temp.QX42Sy/files/mobile-ext/SelectTextButtonIcon.";
bookConfig.PrintButtonVisible="No";
bookConfig.printWatermarkFile="/var/folders/6_/xnbvkpbs1n9f8qdfrhdpnnt80000gn/T/Flip_PDF_Professional/temp.QX42Sy/files/mobile-ext/printWatermarkFile.";
bookConfig.BackgroundSoundButtonVisible="NO";
bookConfig.FlipSound="NO";
bookConfig.BackgroundSoundURL="/var/folders/6_/xnbvkpbs1n9f8qdfrhdpnnt80000gn/T/Flip_PDF_Professional/temp.3yXfMv/files/mobile-ext/BackgroundSoundURL.yyYz1X";
bookConfig.BackgroundSoundLoop="-1";
bookConfig.AutoPlayButtonVisible="Yes";
bookConfig.autoPlayAutoStart="No";
bookConfig.autoPlayDuration="3";
bookConfig.autoPlayLoopCount="1";
bookConfig.ZoomButtonVisible="Yes";
bookConfig.minZoomWidth="403";
bookConfig.minZoomHeight="518";
bookConfig.mouseWheelFlip="Yes";
bookConfig.DownloadButtonVisible="Hide";
bookConfig.PhoneButtonVisible="Hide";
bookConfig.PhoneButtonIcon="/var/folders/6_/xnbvkpbs1n9f8qdfrhdpnnt80000gn/T/Flip_PDF_Professional/temp.QX42Sy/files/mobile-ext/PhoneButtonIcon.";
bookConfig.AnnotationButtonVisible="Hide";
bookConfig.FullscreenButtonVisible="Show";
bookConfig.WeChatShareButtonVisible="Hide";
bookConfig.WeChatShareButtonIcon="/var/folders/6_/xnbvkpbs1n9f8qdfrhdpnnt80000gn/T/Flip_PDF_Professional/temp.QX42Sy/files/mobile-ext/WeChatShareButtonIcon.";
bookConfig.bgBeginColor="#E6E6E6";
bookConfig.bgEndColor="#CECECE";
bookConfig.bgMRotation="90";
bookConfig.backGroundImgURL="/var/folders/6_/xnbvkpbs1n9f8qdfrhdpnnt80000gn/T/Flip_PDF_Professional/temp.3yXfMv/files/mobile-ext/backGroundImgURL.yyYz1X";
bookConfig.backgroundPosition="stretch";
bookConfig.backgroundOpacity="100";
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
bookConfig.flippingTime="0.3";
bookConfig.retainBookCenter="Yes";
bookConfig.FlipStyle="Flip";
bookConfig.autoDoublePage="Yes";
bookConfig.isTheBookOpen="No";
bookConfig.thicknessWidthType="None";
bookConfig.thicknessColor="#FFFFFF";
bookConfig.showThicknessOnMobile="no";
bookConfig.topMargin="10";
bookConfig.bottomMargin="10";
bookConfig.leftMargin="10";
bookConfig.rightMargin="10";
bookConfig.maxWidthToSmallMode="400";
bookConfig.maxHeightToSmallMode="300";
bookConfig.leftRightPnlShowOption="None";
bookConfig.highDefinitionConversion ="no";
bookConfig.updateURLForPage="No";
bookConfig.LinkDownColor="#800080";
bookConfig.LinkAlpha="0.2";
bookConfig.OpenWindow="Blank";
bookConfig.showLinkHint="No";
bookConfig.googleAnalyticsID="UA-27996963-1";

bookConfig.macBookVersion = "HIUUioMFYUinDAXSqoAOWcliMMTRrjNKaelpBMZTvsDLYenmNMSWqnIEYdhoAHWdhvFHXZtuMIZfvhFJSUtiMI35080Ef5_";
bookConfig.Html5Template = "Metro";
bookConfig.UIBaseURL="mobile/";
bookConfig.isFlipPdf=false;
bookConfig.searchTextJS="mobile/javascript/search_config.js";
bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";
bookConfig.totalPageCount=56;
bookConfig.largePageWidth=595;
bookConfig.largePageHeight=841;
bookConfig.bookTitle="Connection Magazine Q4 2018 | Synaptic Software";
bookConfig.normalPath="./files/mobile/";
bookConfig.largePath="./files/mobile/";
bookConfig.productName="Flip PDF Professional";
bookConfig.MidBgColor="#493d10";
bookConfig.bookmarkCR = "5eaf11c963d0a6549713b91c2595a91afa3bbab5";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="./files/thumb/";
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next Page","btnLastPage" : "Last","btnPrePage" : "Previous Page","btnDownload" : "Download","btnPrint" : "Print","btnSearch" : "Search","btnClearSearch" : "Clear","frmSearchPrompt" : "Clear","btnBookMark" : "Table of content","btnHelp" : "Help","btnHome" : "Home","btnFullScreen" : "Enable FullScreen","btnDisableFullScreen" : "Disable FullScreen","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnShareEmail" : "Share","btnSocialShare" : "Social Share","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnDragToMove" : "Drag move mode","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnGoToHome" : "Return Home","frmHelpCaption" : "Help","frmHelpTip1" : "Double click to zoom in or out","frmHelpTip2" : "Drag the page corner to view","frmPrintCaption" : "Print","frmPrintBtnCaption" : "Print","frmPrintPrintAll" : "Print All Pages","frmPrintPrintCurrentPage" : "Print Current Page","frmPrintPrintRange" : "Print Range","frmPrintExampleCaption" : "Example: 2,5,8-26","frmPrintPreparePage" : "Preparing Page:","frmPrintPrintFailed" : "Print Failed:","pnlSearchInputInvalid" : "(Minimal request length is 3 symbols)","loginCaption" : "Login","loginInvalidPassword" : "Not a valid password!","loginPasswordLabel" : "Password:","loginBtnLogin" : "Login","loginBtnCancel" : "Cancel","btnThumb" : "Thumbnails","lblPages" : "Pages:","lblPagesFound" : "Pages:","lblPageIndex" : "Page","btnAbout" : "About","frnAboutCaption" : "About & Contact","btnSinglePage" : "Single Page","btnDoublePage" : "Double Page","btnSwicthLanguage" : "Switch Language","tipChangeLanguage" : "Please select a language below...","btnMoreOptionsLeft" : "More Options","btnMoreOptionsRight" : "More Options","btnFit" : "Fit Window","smallModeCaption" : "Click to view in fullscreen","btnAddAnnotation" : "Add Annotations","btnAnnotation" : "Annotations","FlipPageEditor_SaveAndExit" : "Save and Exit","FlipPageEditor_Exit" : "Exit","DrawToolWindow_Redo" : "Redo","DrawToolWindow_Undo" : "Undo","DrawToolWindow_Clear" : "Clear","DrawToolWindow_Brush" : "Brush","DrawToolWindow_Width" : "Width","DrawToolWindow_Alpha" : "Alpha","DrawToolWindow_Color" : "Color","DrawToolWindow_Eraser" : "Eraser","DrawToolWindow_Rectangular" : "Rectangular","DrawToolWindow_Ellipse" : "Ellipse","TStuff_BorderWidth" : "Border Width","TStuff_BorderAlph" : "Border Alpha","TStuff_BorderColor" : "Border Color","DrawToolWindow_TextNote" : "Text Note","AnnotMark" : "Book Mark","lastpagebtnHelp" : "Last page","firstpagebtnHelp" : "First page","homebtnHelp" : "Return to home page","aboubtnHelp" : "About","screenbtnHelp" : "Open this application in full-screen mode","helpbtnHelp" : "Show help","searchbtnHelp" : "Search from pages","pagesbtnHelp" : "Take a look at the thumbnail of this brochure","bookmarkbtnHelp" : "Open Bookmark","AnnotmarkbtnHelp" : "Open Table of content","printbtnHelp" : "Print the brochure","soundbtnHelp" : "Turn on or off the sound","sharebtnHelp" : "Send Email to","socialSharebtnHelp" : "Social Share","zoominbtnHelp" : "Zoom in","downloadbtnHelp" : "Downdlaod this brochure","pagemodlebtnHelp" : "Switch Single and double page mode","languagebtnHelp" : "Switch Lauguage","annotationbtnHelp" : "Add Annotation","addbookmarkbtnHelp" : "Add Bookmark","removebookmarkbtnHelp" : "Remove BookMark","updatebookmarkbtnHelp" : "Update Bookmark","btnShoppingCart" : "Shopping Cart","Help_ShoppingCartbtn" : "Shopping Cart","Help_btnNextPage" : "Next page","Help_btnPrePage" : "Previous page","Help_btnAutoFlip" : "Auto filp","Help_StopAutoFlip" : "Stop atuo filp","btnaddbookmark" : "Add","btndeletebookmark" : "Delete","btnupdatebookmark" : "Update","frmyourbookmarks" : "Your bookmarks","frmitems" : "items","DownloadFullPublication" : "Full Publication","DownloadCurrentPage" : "Current Page","DownloadAttachedFiles" : "Attached Files","lblLink" : "Link","btnCopy" : "Copy Button","infCopyToClipboard" : "Your browser does not support clipboard. ","restorePage" : "Would you like to restore previous session","tmpl_Backgoundsoundon" : "Background Sound On","tmpl_Backgoundsoundoff" : "Background Sound Off","tmpl_Flipsoundon" : "Flip Sound On","tmpl_Flipsoundoff" : "Flip Sound Off","Help_PageIndex" : "The current page number","tmpl_PrintPageRanges" : "PAGE RANGES","tmpl_PrintPreview" : "PREVIEW","btnSelection" : "Select Text","loginNameLabel" : "Name:","btnGotoPage" : "Go","btnSettings" : "Setting","soundSettingTitle" : "Sound Setting","closeFlipSound" : "Close Flip Sound","closeBackgroundSound" : "Close Backgorund Sound","frmShareCaption" : "Share","frmShareLinkLabel" : "Link:","frmShareBtnCopy" : "Copy","frmShareItemsGroupCaption" : "Social Share","TAnnoActionPropertyStuff_GotoPage" : "Go to page","btnPageBack" : "Backward","btnPageForward" : "Forward","SelectTextCopy" : "Copy Selected Text","selectCopyButton" : "Copy","TStuffCart_TypeCart" : "Shopping Cart","TStuffCart_DetailedQuantity" : "Quantity","TStuffCart_DetailedPrice" : "Price","ShappingCart_Close" : "Close","ShappingCart_CheckOut" : "Checkout","ShappingCart_Item" : "Item","ShappingCart_Total" : "Total","ShappingCart_AddCart" : "Add to cart","ShappingCart_InStock" : "In Stock","TStuffCart_DetailedCost" : "Shipping cost","TStuffCart_DetailedTime" : "Delivery time","TStuffCart_DetailedDay" : "day(s)","ShappingCart_NotStock" : "Not enough in stock","btnCrop" : "Crop","btnDragButton" : "Drag","btnFlipBook" : "Flip Book","btnSlideMode" : "Slide Mode","btnSinglePageMode" : "Single Page Mode","btnVertical" : "Vertical Mode","btnHotizontal" : "Horizontal Mode","btnClose" : "Close","btnDoublePage" : "Double Page","btnBookStatus" : "Book View","checkBoxInsert" : "Insert Current Page","lblLast" : "This is the last page.","lblFirst" : "This is the first page.","lblFullscreen" : "Click to view in fullscreen","lblName" : "Name","lblPassword" : "Password","lblLogin" : "Login","lblCancel" : "Cancel","lblNoName" : "User name can not be empty.","lblNoPassword" : "Password can not be empty.","lblNoCorrectLogin" : "Please enter the correct user name and password.","btnVideo" : "VideoGallery","btnSlideShow" : "SlideShow","pnlSearchInputInvalid" : "The search text is too short.","btnDragToMove" : "Move by mouse drag","btnPositionToMove" : "Move by mouse position","lblHelp1" : "Drag the page corner to view","lblHelp2" : "Double click to zoom in, out","lblCopy" : "Copy","lblAddToPage" : "add to page","lblPage" : "Page","lblTitle" : "Title","lblEdit" : "Edit","lblDelete" : "Delete","lblRemoveAll" : "RemoveAll","tltCursor" : "cursor","tltAddHighlight" : "add highlight","tltAddTexts" : "add texts","tltAddShapes" : "add shapes","tltAddNotes" : "add notes","tltAddImageFile" : "add image file","tltAddSignature" : "add signature","tltAddLine" : "add line","tltAddArrow" : "add arrow","tltAddRect" : "add rect","tltAddEllipse" : "add ellipse","lblDoubleClickToZoomIn" : "Double click to zoom in.","frmShareCaption" : "Share","frmShareLabel" : "Share","frmShareInfo" : "You can easily share this publication to social networks.Just cilck the appropriate button below.","frminsertLabel" : "Insert to Site","frminsertInfo" : "Use the code below to embed this publication to your website.","btnQRCode" : "Click to scan QR code","btnRotateLeft" : "Rotate Left","btnRotateRight" : "Rotate Right","lblSelectMode" : "Select view mode please.","frmDownloadPreview" : "Preview","frmHowToUse" : "How To Use","lblHelpPage1" : "Move your finger to flip the book page.","lblHelpPage2" : "Zoom in by using gesture or double click on the page.","lblHelpPage3" : "Click on the logo to reach the official website of the company.","lblHelpPage4" : "Add bookmarks, use search function and auto flip the book.","lblHelpPage5" : "Switch horizontal and vertical view on mobile devices.","TTActionQuiz_PlayAgain" : "Do you wanna play it again","TTActionQuiz_Ration" : "Your ratio is","frmTelephone" : "Telephone list","btnDialing" : "Dialing","lblSelectMessage" : "Please copy the the text content in the text box","btnSelectText" : "Select Text","btnNote" : "Annotation","btnPhoneNumber" : "Telephone"}];var pageEditor =[[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.242216",y:"0.941533",width:"0.251669",height:"0.015873"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.502155",y:"0.941533",width:"0.101614",height:"0.014202"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.rsmr.co.uk/?cdlresp=1"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.609686",y:"0.793930",width:"0.173320",height:"0.013448"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.247319",y:"0.938453",width:"0.244224",height:"0.018957"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.376912",y:"0.841281",width:"0.135877",height:"0.014203"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658120",y:"0.786143",width:"0.181957",height:"0.012531"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658120",y:"0.827914",width:"0.157144",height:"0.011696"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.765634",y:"0.888026",width:"0.157144",height:"0.011696"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.090324",width:"0.291385",height:"0.039788"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"4"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.140504",width:"0.291385",height:"0.024468"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"6"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.177370",width:"0.291385",height:"0.038874"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"8"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.228180",width:"0.291385",height:"0.050992"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"10"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.291895",width:"0.291385",height:"0.038874"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"12"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.342253",width:"0.291385",height:"0.024697"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"14"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.379164",width:"0.291385",height:"0.024697"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"16"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.417764",width:"0.291385",height:"0.036359"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"18"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.466972",width:"0.291385",height:"0.024240"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"20"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.504709",width:"0.291385",height:"0.024240"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"22"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.541569",width:"0.291385",height:"0.040246"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"24"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.592156",width:"0.291385",height:"0.040245"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"26"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.642648",width:"0.291385",height:"0.023553"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"28"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.679971",width:"0.291385",height:"0.037960"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"30"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.731060",width:"0.291385",height:"0.037959"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"32"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.780909",width:"0.291385",height:"0.024010"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"34"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.818048",width:"0.291385",height:"0.037273"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"36"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.867498",width:"0.291385",height:"0.024011"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"38"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.904689",width:"0.291385",height:"0.024010"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"40"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032664",y:"0.941828",width:"0.291385",height:"0.008232"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"44"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.662297",y:"0.786731",width:"0.174423",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.662297",y:"0.829193",width:"0.149673",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.764412",y:"0.888821",width:"0.162004",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.655757",y:"0.778624",width:"0.192592",height:"0.011696"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:andrew.fay@munnypot.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.110454",y:"0.947737",width:"0.051284",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://whatcar.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.166923",y:"0.947737",width:"0.267357",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.whatcar.com/volkswagen/polo/hatchback/review/n83"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.115162",y:"0.957237",width:"0.051291",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://whatcar.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.171639",y:"0.957237",width:"0.210431",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.autocar.co.uk/car-review/bugatti/chiron"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.119870",y:"0.966737",width:"0.491458",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.volkswagenag.com/presence/investorrelation/publications/annual-reports/2018/volkswagen/en/Y_2017_e.pdf"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.366265",y:"0.976237",width:"0.263626",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www2.deloitte.com/content/dam/Deloitte/lu/Documents/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658732",y:"0.778836",width:"0.188065",height:"0.011714"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:andrew.fay@munnypot.com"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.079776",y:"0.958832",width:"0.332586",height:"0.009080"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.ft.com/content/aa704cbc-c9dd-11e7-ab18-7a9fb7d6163e"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.541147",y:"0.648296",width:"0.157144",height:"0.014203"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://smithandwilliamson.com/personal/services/investment-management-outsourced-investment-services"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.544743",y:"0.650276",width:"0.150584",height:"0.012876"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.sandwdfm.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.682933",y:"0.923858",width:"0.179595",height:"0.013367"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.langcatfinancial.co.uk/"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.655757",y:"0.691738",width:"0.256395",height:"0.011696"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.investecassetmanagement.com/united-kingdom/professional-investor/en-gb/campaign-page/diversified-income-fund/"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.749099",y:"0.886747",width:"0.112246",height:"0.010025"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.rsmr.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.653393",y:"0.516167",width:"0.256395",height:"0.010861"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.verbatimassetmanagement.co.uk/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.362734",y:"0.686244",width:"0.246942",height:"0.040100"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.vanguard.co.uk/documents/adv/literature/trust-and-financial-advice.pdf"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.362734",y:"0.803687",width:"0.230401",height:"0.026734"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"www.vanguard.co.uk/adviser/adv/campaign/advantage-of-advice.jsp"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.365235",y:"0.804480",width:"0.218459",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.vanguard.co.uk/adviser/adv/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.074609",y:"0.955991",width:"0.229087",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"www.vanguard.co.uk/documents/adv/literature/trust-and"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.692384",y:"0.625257",width:"0.223312",height:"0.010860"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:simonmorris@premierfunds.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.690022",y:"0.650802",width:"0.176050",height:"0.010861"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.premierfunds.co.uk/global"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.694991",y:"0.625126",width:"0.217276",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:simonmorris@premierfunds.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.361553",y:"0.892243",width:"0.112246",height:"0.011696"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.gsam.com/content/gsam/global/en/homepage.html"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.653393",y:"0.629082",width:"0.268211",height:"0.044278"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.quilterinvestors.com/generationrange"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.655757",y:"0.722650",width:"0.209132",height:"0.012531"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@quilterinvestors.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658887",y:"0.723430",width:"0.203231",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@quilterinvestors.com"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.489160",y:"0.947381",width:"0.139422",height:"0.013367"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.492063",y:"0.948169",width:"0.132164",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.654574",y:"0.900597",width:"0.179595",height:"0.010861"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://adviser.vitality.co.uk/investments/"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.077982",y:"0.641613",width:"0.261121",height:"0.015038"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://adviser.vitality.co.uk/investments/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.076800",y:"0.957406",width:"0.298931",height:"0.020886"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://adviser.vitality.co.uk/investments/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.654574",y:"0.619892",width:"0.236310",height:"0.014203"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://adviser.guardian1821.co.uk/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658744",y:"0.622772",width:"0.228415",height:"0.011714"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.guardian1821.co.uk/advisers"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.654574",y:"0.901432",width:"0.251669",height:"0.045949"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-webline-protection"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.659762",y:"0.919924",width:"0.239244",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"co.uk/research-tools/synaptic-webline"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.655757",y:"0.579790",width:"0.192592",height:"0.014203"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:ipp.admin@canadalife.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658732",y:"0.582700",width:"0.185618",height:"0.011714"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:ipp.admin@canadalife.co.uk"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.745554",y:"0.918494",width:"0.146511",height:"0.013367"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.748464",y:"0.919579",width:"0.138128",height:"0.011714"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.620311",y:"0.954065",width:"0.206769",height:"0.020050"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.622497",y:"0.954103",width:"0.200402",height:"0.019839"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.361553",y:"0.945710",width:"0.557688",height:"0.020886"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.316654",y:"0.945710",width:"0.563596",height:"0.019215"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.315472",y:"0.943204",width:"0.560051",height:"0.023392"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.048443",y:"0.939027",width:"0.258758",height:"0.024228"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.634489",y:"0.904774",width:"0.249305",height:"0.019215"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.637550",y:"0.905176",width:"0.240387",height:"0.020601"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}]]
;
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