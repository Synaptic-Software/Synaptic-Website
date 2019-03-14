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
bookConfig.BackgroundSoundURL="/var/folders/6_/xnbvkpbs1n9f8qdfrhdpnnt80000gn/T/Flip_PDF_Professional/temp.o53dD6/files/mobile-ext/BackgroundSoundURL.";
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
bookConfig.backGroundImgURL="/var/folders/6_/xnbvkpbs1n9f8qdfrhdpnnt80000gn/T/Flip_PDF_Professional/temp.o53dD6/files/mobile-ext/backGroundImgURL.";
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

bookConfig.macBookVersion = "GPUfqvOEXQusEEWVmvBCbbstBIccptBIeUogHEVRouNHRSlkPLQavrOOSQjqNMffkrDNTSkrCGZQpkFOSfgnOD6221018f_";
bookConfig.Html5Template = "Metro";
bookConfig.UIBaseURL="mobile/";
bookConfig.isFlipPdf=false;
bookConfig.searchTextJS="mobile/javascript/search_config.js";
bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";
bookConfig.totalPageCount=52;
bookConfig.largePageWidth=595;
bookConfig.largePageHeight=841;
bookConfig.bookTitle="Connection Magazine Q1 2019 | Synaptic Software";
bookConfig.normalPath="./files/mobile/";
bookConfig.largePath="./files/mobile/";
bookConfig.productName="Flip PDF Professional";
bookConfig.MidBgColor="#3fc303";
bookConfig.bookmarkCR = "dd0765a0c416399d58b9669bbbacb907e3fbe614";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="./files/thumb/";
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next Page","btnLastPage" : "Last","btnPrePage" : "Previous Page","btnDownload" : "Download","btnPrint" : "Print","btnSearch" : "Search","btnClearSearch" : "Clear","frmSearchPrompt" : "Clear","btnBookMark" : "Table of content","btnHelp" : "Help","btnHome" : "Home","btnFullScreen" : "Enable FullScreen","btnDisableFullScreen" : "Disable FullScreen","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnShareEmail" : "Share","btnSocialShare" : "Social Share","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnDragToMove" : "Drag move mode","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnGoToHome" : "Return Home","frmHelpCaption" : "Help","frmHelpTip1" : "Double click to zoom in or out","frmHelpTip2" : "Drag the page corner to view","frmPrintCaption" : "Print","frmPrintBtnCaption" : "Print","frmPrintPrintAll" : "Print All Pages","frmPrintPrintCurrentPage" : "Print Current Page","frmPrintPrintRange" : "Print Range","frmPrintExampleCaption" : "Example: 2,5,8-26","frmPrintPreparePage" : "Preparing Page:","frmPrintPrintFailed" : "Print Failed:","pnlSearchInputInvalid" : "(Minimal request length is 3 symbols)","loginCaption" : "Login","loginInvalidPassword" : "Not a valid password!","loginPasswordLabel" : "Password:","loginBtnLogin" : "Login","loginBtnCancel" : "Cancel","btnThumb" : "Thumbnails","lblPages" : "Pages:","lblPagesFound" : "Pages:","lblPageIndex" : "Page","btnAbout" : "About","frnAboutCaption" : "About & Contact","btnSinglePage" : "Single Page","btnDoublePage" : "Double Page","btnSwicthLanguage" : "Switch Language","tipChangeLanguage" : "Please select a language below...","btnMoreOptionsLeft" : "More Options","btnMoreOptionsRight" : "More Options","btnFit" : "Fit Window","smallModeCaption" : "Click to view in fullscreen","btnAddAnnotation" : "Add Annotations","btnAnnotation" : "Annotations","FlipPageEditor_SaveAndExit" : "Save and Exit","FlipPageEditor_Exit" : "Exit","DrawToolWindow_Redo" : "Redo","DrawToolWindow_Undo" : "Undo","DrawToolWindow_Clear" : "Clear","DrawToolWindow_Brush" : "Brush","DrawToolWindow_Width" : "Width","DrawToolWindow_Alpha" : "Alpha","DrawToolWindow_Color" : "Color","DrawToolWindow_Eraser" : "Eraser","DrawToolWindow_Rectangular" : "Rectangular","DrawToolWindow_Ellipse" : "Ellipse","TStuff_BorderWidth" : "Border Width","TStuff_BorderAlph" : "Border Alpha","TStuff_BorderColor" : "Border Color","DrawToolWindow_TextNote" : "Text Note","AnnotMark" : "Book Mark","lastpagebtnHelp" : "Last page","firstpagebtnHelp" : "First page","homebtnHelp" : "Return to home page","aboubtnHelp" : "About","screenbtnHelp" : "Open this application in full-screen mode","helpbtnHelp" : "Show help","searchbtnHelp" : "Search from pages","pagesbtnHelp" : "Take a look at the thumbnail of this brochure","bookmarkbtnHelp" : "Open Bookmark","AnnotmarkbtnHelp" : "Open Table of content","printbtnHelp" : "Print the brochure","soundbtnHelp" : "Turn on or off the sound","sharebtnHelp" : "Send Email to","socialSharebtnHelp" : "Social Share","zoominbtnHelp" : "Zoom in","downloadbtnHelp" : "Downdlaod this brochure","pagemodlebtnHelp" : "Switch Single and double page mode","languagebtnHelp" : "Switch Lauguage","annotationbtnHelp" : "Add Annotation","addbookmarkbtnHelp" : "Add Bookmark","removebookmarkbtnHelp" : "Remove BookMark","updatebookmarkbtnHelp" : "Update Bookmark","btnShoppingCart" : "Shopping Cart","Help_ShoppingCartbtn" : "Shopping Cart","Help_btnNextPage" : "Next page","Help_btnPrePage" : "Previous page","Help_btnAutoFlip" : "Auto filp","Help_StopAutoFlip" : "Stop atuo filp","btnaddbookmark" : "Add","btndeletebookmark" : "Delete","btnupdatebookmark" : "Update","frmyourbookmarks" : "Your bookmarks","frmitems" : "items","DownloadFullPublication" : "Full Publication","DownloadCurrentPage" : "Current Page","DownloadAttachedFiles" : "Attached Files","lblLink" : "Link","btnCopy" : "Copy Button","infCopyToClipboard" : "Your browser does not support clipboard. ","restorePage" : "Would you like to restore previous session","tmpl_Backgoundsoundon" : "Background Sound On","tmpl_Backgoundsoundoff" : "Background Sound Off","tmpl_Flipsoundon" : "Flip Sound On","tmpl_Flipsoundoff" : "Flip Sound Off","Help_PageIndex" : "The current page number","tmpl_PrintPageRanges" : "PAGE RANGES","tmpl_PrintPreview" : "PREVIEW","btnSelection" : "Select Text","loginNameLabel" : "Name:","btnGotoPage" : "Go","btnSettings" : "Setting","soundSettingTitle" : "Sound Setting","closeFlipSound" : "Close Flip Sound","closeBackgroundSound" : "Close Backgorund Sound","frmShareCaption" : "Share","frmShareLinkLabel" : "Link:","frmShareBtnCopy" : "Copy","frmShareItemsGroupCaption" : "Social Share","TAnnoActionPropertyStuff_GotoPage" : "Go to page","btnPageBack" : "Backward","btnPageForward" : "Forward","SelectTextCopy" : "Copy Selected Text","selectCopyButton" : "Copy","TStuffCart_TypeCart" : "Shopping Cart","TStuffCart_DetailedQuantity" : "Quantity","TStuffCart_DetailedPrice" : "Price","ShappingCart_Close" : "Close","ShappingCart_CheckOut" : "Checkout","ShappingCart_Item" : "Item","ShappingCart_Total" : "Total","ShappingCart_AddCart" : "Add to cart","ShappingCart_InStock" : "In Stock","TStuffCart_DetailedCost" : "Shipping cost","TStuffCart_DetailedTime" : "Delivery time","TStuffCart_DetailedDay" : "day(s)","ShappingCart_NotStock" : "Not enough in stock","btnCrop" : "Crop","btnDragButton" : "Drag","btnFlipBook" : "Flip Book","btnSlideMode" : "Slide Mode","btnSinglePageMode" : "Single Page Mode","btnVertical" : "Vertical Mode","btnHotizontal" : "Horizontal Mode","btnClose" : "Close","btnDoublePage" : "Double Page","btnBookStatus" : "Book View","checkBoxInsert" : "Insert Current Page","lblLast" : "This is the last page.","lblFirst" : "This is the first page.","lblFullscreen" : "Click to view in fullscreen","lblName" : "Name","lblPassword" : "Password","lblLogin" : "Login","lblCancel" : "Cancel","lblNoName" : "User name can not be empty.","lblNoPassword" : "Password can not be empty.","lblNoCorrectLogin" : "Please enter the correct user name and password.","btnVideo" : "VideoGallery","btnSlideShow" : "SlideShow","pnlSearchInputInvalid" : "The search text is too short.","btnDragToMove" : "Move by mouse drag","btnPositionToMove" : "Move by mouse position","lblHelp1" : "Drag the page corner to view","lblHelp2" : "Double click to zoom in, out","lblCopy" : "Copy","lblAddToPage" : "add to page","lblPage" : "Page","lblTitle" : "Title","lblEdit" : "Edit","lblDelete" : "Delete","lblRemoveAll" : "RemoveAll","tltCursor" : "cursor","tltAddHighlight" : "add highlight","tltAddTexts" : "add texts","tltAddShapes" : "add shapes","tltAddNotes" : "add notes","tltAddImageFile" : "add image file","tltAddSignature" : "add signature","tltAddLine" : "add line","tltAddArrow" : "add arrow","tltAddRect" : "add rect","tltAddEllipse" : "add ellipse","lblDoubleClickToZoomIn" : "Double click to zoom in.","frmShareCaption" : "Share","frmShareLabel" : "Share","frmShareInfo" : "You can easily share this publication to social networks.Just cilck the appropriate button below.","frminsertLabel" : "Insert to Site","frminsertInfo" : "Use the code below to embed this publication to your website.","btnQRCode" : "Click to scan QR code","btnRotateLeft" : "Rotate Left","btnRotateRight" : "Rotate Right","lblSelectMode" : "Select view mode please.","frmDownloadPreview" : "Preview","frmHowToUse" : "How To Use","lblHelpPage1" : "Move your finger to flip the book page.","lblHelpPage2" : "Zoom in by using gesture or double click on the page.","lblHelpPage3" : "Click on the logo to reach the official website of the company.","lblHelpPage4" : "Add bookmarks, use search function and auto flip the book.","lblHelpPage5" : "Switch horizontal and vertical view on mobile devices.","TTActionQuiz_PlayAgain" : "Do you wanna play it again","TTActionQuiz_Ration" : "Your ratio is","frmTelephone" : "Telephone list","btnDialing" : "Dialing","lblSelectMessage" : "Please copy the the text content in the text box","btnSelectText" : "Select Text","btnNote" : "Annotation","btnPhoneNumber" : "Telephone"}];var pageEditor =[[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.434558",y:"0.833204",width:"0.136577",height:"0.012769"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.240418",y:"0.941744",width:"0.248320",height:"0.014366"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.500025",y:"0.940946",width:"0.103843",height:"0.015164"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.rsmr.co.uk/?cdlresp=1"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.603513",y:"0.794580",width:"0.181721",height:"0.014366"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.607661",y:"0.793929",width:"0.173320",height:"0.013448"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.245296",y:"0.938452",width:"0.244223",height:"0.018957"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.651274",y:"0.545094",width:"0.142218",height:"0.015164"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658046",y:"0.786507",width:"0.181724",height:"0.011172"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.660304",y:"0.829213",width:"0.153507",height:"0.010375"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.376993",y:"0.841983",width:"0.136577",height:"0.012769"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.761889",y:"0.885079",width:"0.167052",height:"0.015164"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.210725",width:"0.278796",height:"0.022303"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"4"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.248769",width:"0.278796",height:"0.032112"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"6"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.295913",width:"0.278796",height:"0.022303"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"8"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.335145",width:"0.278796",height:"0.022305"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"10"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.371721",width:"0.278796",height:"0.032112"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"12"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.422536",width:"0.278796",height:"0.022303"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"14"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.458130",width:"0.278796",height:"0.022305"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"16"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.495969",width:"0.278796",height:"0.022305"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"18"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.532570",width:"0.278796",height:"0.022305"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"20"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.569658",width:"0.278796",height:"0.022305"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"22"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.607455",width:"0.278796",height:"0.022305"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"24"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.643544",width:"0.278796",height:"0.022305"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"26"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.681589",width:"0.278796",height:"0.031872"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"27"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.725077",width:"0.278796",height:"0.022305"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"28"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.761926",width:"0.278796",height:"0.022303"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"30"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.798535",width:"0.278796",height:"0.022303"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"34"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.835829",width:"0.278796",height:"0.022305"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"36"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.032747",y:"0.871414",width:"0.278796",height:"0.010822"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"39"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.662295",y:"0.786731",width:"0.174422",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.662295",y:"0.829192",width:"0.149672",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.764409",y:"0.888821",width:"0.162004",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.654659",y:"0.729842",width:"0.255092",height:"0.011971"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.verbatimassetmanagement.co.uk/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.726898",y:"0.817242",width:"0.200914",height:"0.011172"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.aegon.co.uk/about-aegon/investments.html"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.068852",y:"0.869915",width:"0.188497",height:"0.013568"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@curtisbanks.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.071429",y:"0.871001",width:"0.182323",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@curtisbanks.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.683621",y:"0.908499",width:"0.183554",height:"0.013311"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.langcatfinancial.co.uk/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.653530",y:"0.466882",width:"0.274281",height:"0.031125"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.vanguard.co.uk/documents/adv/literature/vg-economic-outlook-2019.pdf"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.654659",y:"0.631269",width:"0.273152",height:"0.014365"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.investecassetmanagement.com/united-kingdom/professional-investor/en-gb/campaign-page/diversified-income-fund/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.361192",y:"0.879493",width:"0.095940",height:"0.014366"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.lgtvestra.com/en"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.654659",y:"0.826021",width:"0.230260",height:"0.016760"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:david.norman@tcfinvestment.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658730",y:"0.828942",width:"0.222661",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:david.norman@tcfinvestment.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658046",y:"0.798088",width:"0.170437",height:"0.011174"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.764146",y:"0.813251",width:"0.107229",height:"0.012770"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.rsmr.co.uk/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.661272",y:"0.798833",width:"0.165720",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.653530",y:"0.832406",width:"0.228003",height:"0.014365"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://adviser.guardian1821.co.uk/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658730",y:"0.834203",width:"0.219082",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.guardian1821.co.uk/advisers"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.700937",y:"0.883483",width:"0.152378",height:"0.013568"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.aviva-for-advisers.co.uk/adviser/site/public"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.654659",y:"0.770155",width:"0.257350",height:"0.027134"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.aviva.co.uk/adviser/documents/view/pt15836c.pdf"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.655788",y:"0.826819",width:"0.264121",height:"0.041501"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.aviva-for-advisers.co.uk/adviser/site/public/products/protection/protection-claims"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.655788",y:"0.830809",width:"0.260736",height:"0.025539"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"www.bitly.com/OMWCI-video"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.713353",y:"0.884671",width:"0.209943",height:"0.014366"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"www.bitly.com/OMWCI-contact"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.716090",y:"0.887417",width:"0.204872",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.bitly.com/OMWCI-contact"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.634343",y:"0.905032",width:"0.247191",height:"0.020750"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.637550",y:"0.905176",width:"0.240386",height:"0.020601"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.633214",y:"0.913811",width:"0.139962",height:"0.014366"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.553075",y:"0.944936",width:"0.170437",height:"0.014366"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.619669",y:"0.958503",width:"0.207685",height:"0.019154"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.622931",y:"0.957415",width:"0.200401",height:"0.019839"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.314914",y:"0.950523",width:"0.560975",height:"0.023943"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.316331",y:"0.950968",width:"0.560975",height:"0.023943"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.317459",y:"0.953251",width:"0.560975",height:"0.023943"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.617413",y:"0.925782",width:"0.329587",height:"0.021548"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.055307",y:"0.576219",width:"0.452618",height:"0.024741"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://adviserbusinessaccelerator.aviva.com/"}}]]
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