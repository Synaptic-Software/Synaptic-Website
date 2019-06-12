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
bookConfig.BackgroundSoundURL="";
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
bookConfig.backGroundImgURL="";
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

bookConfig.macBookVersion = "CKabosEIUSmpGLUVtiCHUUqtMIfQmvFDVfjoGLedlsLMfejoLISegjDJXdtqDAWWqqCCXVruKAUXglBHffkiIIa0f05a91_";
bookConfig.Html5Template = "Metro";
bookConfig.UIBaseURL="mobile/";
bookConfig.isFlipPdf=false;
bookConfig.searchTextJS="mobile/javascript/search_config.js";
bookConfig.searchPositionJS="mobile/javascript/text_position[1].js";
bookConfig.totalPageCount=56;
bookConfig.largePageWidth=595;
bookConfig.largePageHeight=841;
bookConfig.bookTitle="Connection Magazine Q2 2019 | Synaptic Software";
bookConfig.normalPath="./files/mobile/";
bookConfig.largePath="./files/mobile/";
bookConfig.productName="Flip PDF Professional";
bookConfig.MidBgColor="#9fbb5d";
bookConfig.bookmarkCR = "e2570a91674c79fe82a5c42ceb26a7df29f82137";
;function orgt(s){ return binl2hex(core_hx(str2binl(s), s.length * chrsz));};
bookConfig.thumbPath="./files/thumb/";
var language=[{"language" : "English","btnFirstPage" : "First","btnNextPage" : "Next Page","btnLastPage" : "Last","btnPrePage" : "Previous Page","btnDownload" : "Download","btnPrint" : "Print","btnSearch" : "Search","btnClearSearch" : "Clear","frmSearchPrompt" : "Clear","btnBookMark" : "Table of content","btnHelp" : "Help","btnHome" : "Home","btnFullScreen" : "Enable FullScreen","btnDisableFullScreen" : "Disable FullScreen","btnSoundOn" : "Sound On","btnSoundOff" : "Sound Off","btnShareEmail" : "Share","btnSocialShare" : "Social Share","btnZoomIn" : "Zoom In","btnZoomOut" : "Zoom Out","btnDragToMove" : "Drag move mode","btnAutoFlip" : "Auto Flip","btnStopAutoFlip" : "Stop Auto Flip","btnGoToHome" : "Return Home","frmHelpCaption" : "Help","frmHelpTip1" : "Double click to zoom in or out","frmHelpTip2" : "Drag the page corner to view","frmPrintCaption" : "Print","frmPrintBtnCaption" : "Print","frmPrintPrintAll" : "Print All Pages","frmPrintPrintCurrentPage" : "Print Current Page","frmPrintPrintRange" : "Print Range","frmPrintExampleCaption" : "Example: 2,5,8-26","frmPrintPreparePage" : "Preparing Page:","frmPrintPrintFailed" : "Print Failed:","pnlSearchInputInvalid" : "(Minimal request length is 3 symbols)","loginCaption" : "Login","loginInvalidPassword" : "Not a valid password!","loginPasswordLabel" : "Password:","loginBtnLogin" : "Login","loginBtnCancel" : "Cancel","btnThumb" : "Thumbnails","lblPages" : "Pages:","lblPagesFound" : "Pages:","lblPageIndex" : "Page","btnAbout" : "About","frnAboutCaption" : "About & Contact","btnSinglePage" : "Single Page","btnDoublePage" : "Double Page","btnSwicthLanguage" : "Switch Language","tipChangeLanguage" : "Please select a language below...","btnMoreOptionsLeft" : "More Options","btnMoreOptionsRight" : "More Options","btnFit" : "Fit Window","smallModeCaption" : "Click to view in fullscreen","btnAddAnnotation" : "Add Annotations","btnAnnotation" : "Annotations","FlipPageEditor_SaveAndExit" : "Save and Exit","FlipPageEditor_Exit" : "Exit","DrawToolWindow_Redo" : "Redo","DrawToolWindow_Undo" : "Undo","DrawToolWindow_Clear" : "Clear","DrawToolWindow_Brush" : "Brush","DrawToolWindow_Width" : "Width","DrawToolWindow_Alpha" : "Alpha","DrawToolWindow_Color" : "Color","DrawToolWindow_Eraser" : "Eraser","DrawToolWindow_Rectangular" : "Rectangular","DrawToolWindow_Ellipse" : "Ellipse","TStuff_BorderWidth" : "Border Width","TStuff_BorderAlph" : "Border Alpha","TStuff_BorderColor" : "Border Color","DrawToolWindow_TextNote" : "Text Note","AnnotMark" : "Book Mark","lastpagebtnHelp" : "Last page","firstpagebtnHelp" : "First page","homebtnHelp" : "Return to home page","aboubtnHelp" : "About","screenbtnHelp" : "Open this application in full-screen mode","helpbtnHelp" : "Show help","searchbtnHelp" : "Search from pages","pagesbtnHelp" : "Take a look at the thumbnail of this brochure","bookmarkbtnHelp" : "Open Bookmark","AnnotmarkbtnHelp" : "Open Table of content","printbtnHelp" : "Print the brochure","soundbtnHelp" : "Turn on or off the sound","sharebtnHelp" : "Send Email to","socialSharebtnHelp" : "Social Share","zoominbtnHelp" : "Zoom in","downloadbtnHelp" : "Downdlaod this brochure","pagemodlebtnHelp" : "Switch Single and double page mode","languagebtnHelp" : "Switch Lauguage","annotationbtnHelp" : "Add Annotation","addbookmarkbtnHelp" : "Add Bookmark","removebookmarkbtnHelp" : "Remove BookMark","updatebookmarkbtnHelp" : "Update Bookmark","btnShoppingCart" : "Shopping Cart","Help_ShoppingCartbtn" : "Shopping Cart","Help_btnNextPage" : "Next page","Help_btnPrePage" : "Previous page","Help_btnAutoFlip" : "Auto filp","Help_StopAutoFlip" : "Stop atuo filp","btnaddbookmark" : "Add","btndeletebookmark" : "Delete","btnupdatebookmark" : "Update","frmyourbookmarks" : "Your bookmarks","frmitems" : "items","DownloadFullPublication" : "Full Publication","DownloadCurrentPage" : "Current Page","DownloadAttachedFiles" : "Attached Files","lblLink" : "Link","btnCopy" : "Copy Button","infCopyToClipboard" : "Your browser does not support clipboard. ","restorePage" : "Would you like to restore previous session","tmpl_Backgoundsoundon" : "Background Sound On","tmpl_Backgoundsoundoff" : "Background Sound Off","tmpl_Flipsoundon" : "Flip Sound On","tmpl_Flipsoundoff" : "Flip Sound Off","Help_PageIndex" : "The current page number","tmpl_PrintPageRanges" : "PAGE RANGES","tmpl_PrintPreview" : "PREVIEW","btnSelection" : "Select Text","loginNameLabel" : "Name:","btnGotoPage" : "Go","btnSettings" : "Setting","soundSettingTitle" : "Sound Setting","closeFlipSound" : "Close Flip Sound","closeBackgroundSound" : "Close Backgorund Sound","frmShareCaption" : "Share","frmShareLinkLabel" : "Link:","frmShareBtnCopy" : "Copy","frmShareItemsGroupCaption" : "Social Share","TAnnoActionPropertyStuff_GotoPage" : "Go to page","btnPageBack" : "Backward","btnPageForward" : "Forward","SelectTextCopy" : "Copy Selected Text","selectCopyButton" : "Copy","TStuffCart_TypeCart" : "Shopping Cart","TStuffCart_DetailedQuantity" : "Quantity","TStuffCart_DetailedPrice" : "Price","ShappingCart_Close" : "Close","ShappingCart_CheckOut" : "Checkout","ShappingCart_Item" : "Item","ShappingCart_Total" : "Total","ShappingCart_AddCart" : "Add to cart","ShappingCart_InStock" : "In Stock","TStuffCart_DetailedCost" : "Shipping cost","TStuffCart_DetailedTime" : "Delivery time","TStuffCart_DetailedDay" : "day(s)","ShappingCart_NotStock" : "Not enough in stock","btnCrop" : "Crop","btnDragButton" : "Drag","btnFlipBook" : "Flip Book","btnSlideMode" : "Slide Mode","btnSinglePageMode" : "Single Page Mode","btnVertical" : "Vertical Mode","btnHotizontal" : "Horizontal Mode","btnClose" : "Close","btnDoublePage" : "Double Page","btnBookStatus" : "Book View","checkBoxInsert" : "Insert Current Page","lblLast" : "This is the last page.","lblFirst" : "This is the first page.","lblFullscreen" : "Click to view in fullscreen","lblName" : "Name","lblPassword" : "Password","lblLogin" : "Login","lblCancel" : "Cancel","lblNoName" : "User name can not be empty.","lblNoPassword" : "Password can not be empty.","lblNoCorrectLogin" : "Please enter the correct user name and password.","btnVideo" : "VideoGallery","btnSlideShow" : "SlideShow","pnlSearchInputInvalid" : "The search text is too short.","btnDragToMove" : "Move by mouse drag","btnPositionToMove" : "Move by mouse position","lblHelp1" : "Drag the page corner to view","lblHelp2" : "Double click to zoom in, out","lblCopy" : "Copy","lblAddToPage" : "add to page","lblPage" : "Page","lblTitle" : "Title","lblEdit" : "Edit","lblDelete" : "Delete","lblRemoveAll" : "RemoveAll","tltCursor" : "cursor","tltAddHighlight" : "add highlight","tltAddTexts" : "add texts","tltAddShapes" : "add shapes","tltAddNotes" : "add notes","tltAddImageFile" : "add image file","tltAddSignature" : "add signature","tltAddLine" : "add line","tltAddArrow" : "add arrow","tltAddRect" : "add rect","tltAddEllipse" : "add ellipse","lblDoubleClickToZoomIn" : "Double click to zoom in.","frmShareCaption" : "Share","frmShareLabel" : "Share","frmShareInfo" : "You can easily share this publication to social networks.Just cilck the appropriate button below.","frminsertLabel" : "Insert to Site","frminsertInfo" : "Use the code below to embed this publication to your website.","btnQRCode" : "Click to scan QR code","btnRotateLeft" : "Rotate Left","btnRotateRight" : "Rotate Right","lblSelectMode" : "Select view mode please.","frmDownloadPreview" : "Preview","frmHowToUse" : "How To Use","lblHelpPage1" : "Move your finger to flip the book page.","lblHelpPage2" : "Zoom in by using gesture or double click on the page.","lblHelpPage3" : "Click on the logo to reach the official website of the company.","lblHelpPage4" : "Add bookmarks, use search function and auto flip the book.","lblHelpPage5" : "Switch horizontal and vertical view on mobile devices.","TTActionQuiz_PlayAgain" : "Do you wanna play it again","TTActionQuiz_Ration" : "Your ratio is","frmTelephone" : "Telephone list","btnDialing" : "Dialing","lblSelectMessage" : "Please copy the the text content in the text box","btnSelectText" : "Select Text","btnNote" : "Annotation","btnPhoneNumber" : "Telephone"}];var pageEditor =[[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.238175",y:"0.940671",width:"0.256321",height:"0.014435"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.502436",y:"0.940671",width:"0.099806",height:"0.014435"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.rsmr.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.607661",y:"0.793929",width:"0.173320",height:"0.013448"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.245296",y:"0.938452",width:"0.244223",height:"0.018957"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.376543",y:"0.840428",width:"0.139502",height:"0.016039"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.656682",y:"0.785897",width:"0.186003",height:"0.011227"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.658950",y:"0.829201",width:"0.156516",height:"0.009624"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.761025",y:"0.886941",width:"0.167857",height:"0.013633"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.192465",width:"0.277871",height:"0.023256"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"4"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.227912",width:"0.277871",height:"0.033557"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"5"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.272872",width:"0.277871",height:"0.023256"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"10"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.311945",width:"0.277871",height:"0.033557"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"12"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.355149",width:"0.277871",height:"0.023256"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"14"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.389317",width:"0.277871",height:"0.023256"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"16"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.426894",width:"0.277871",height:"0.033557"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"18"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.513572",width:"0.277871",height:"0.023256"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"22"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.470873",width:"0.277871",height:"0.033557"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"20"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.550477",width:"0.277871",height:"0.023256"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"24"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.587203",width:"0.277871",height:"0.023256"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"26"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.624482",width:"0.277871",height:"0.034539"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"28"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.670307",width:"0.277871",height:"0.013691"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"30"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.696641",width:"0.277871",height:"0.023256"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"34"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.734734",width:"0.277871",height:"0.023256"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"36"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.772273",width:"0.277871",height:"0.023256"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"38"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.807306",width:"0.277871",height:"0.035274"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"40"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.031757",y:"0.853516",width:"0.277871",height:"0.013691"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionGotoPage",pageIndex:"44"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.662295",y:"0.786731",width:"0.174422",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:eric.armstrong@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.662295",y:"0.829192",width:"0.149672",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.764409",y:"0.888821",width:"0.162004",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:marketing@synaptic.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.654414",y:"0.796323",width:"0.247248",height:"0.032077"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.investecassetmanagement.com/united-kingdom/professional-investor/en-gb/campaign-page/value-investing/"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.360665",y:"0.522862",width:"0.275602",height:"0.030474"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.vanguard.co.uk/adviser/adv/campaign/advantage-of-advice.jsp"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.621523",y:"0.923830",width:"0.325504",height:"0.022454"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.630597",y:"0.903781",width:"0.250650",height:"0.021652"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.637351",y:"0.905878",width:"0.240386",height:"0.020601"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.359531",y:"0.760235",width:"0.209820",height:"0.015237"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.adviserpointsofview.com/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.868153",y:"0.599005",width:"0.055626",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://architas.com/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.544482",y:"0.922540",width:"0.082294",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://architas.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.685037",y:"0.906187",width:"0.179198",height:"0.009623"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.langcatfinancial.co.uk/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.653280",y:"0.707307",width:"0.259723",height:"0.012029"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.verbatimassetmanagement.co.uk/"}}],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.654414",y:"0.712119",width:"0.201881",height:"0.011227"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.aegon.co.uk/about-aegon/investments.html"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.663769",y:"0.554345",width:"0.255028",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.wwf.org.uk/updates/8-things-know-about-palm-oil"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.663769",y:"0.563848",width:"0.211683",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.unilever.com/sustainable-living/reducing"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.663769",y:"0.592355",width:"0.253833",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.ing.nl/media/ING_Responsible-investing-and-palm"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.663769",y:"0.611360",width:"0.223524",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.stewartinvestors.com/globalassets/articles/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.663769",y:"0.630365",width:"0.221799",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.rspo.org/file/Palm%20Oil%20Investor%20"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.663769",y:"0.658872",width:"0.087191",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://rspo.org/about"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.663769",y:"0.668375",width:"0.211684",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.unilever.com/sustainable-living/reducing"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.395831",y:"0.938902",width:"0.496945",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.unilever.com/sustainable-living/reducing-environmental-impact/sustainable-sourcing/transforming-the-palm-oil"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.654414",y:"0.817974",width:"0.172392",height:"0.013634"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.660716",y:"0.820146",width:"0.164583",height:"0.011620"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:enquiries@rsmgroup.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.814162",y:"0.835529",width:"0.060154",height:"0.011674"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://rsmr.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.654414",y:"0.841231",width:"0.273334",height:"0.015236"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.cleveradviser.com/l/book-a-demo/"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.673694",y:"0.879723",width:"0.164455",height:"0.013633"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:mail@cleveradviser.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.676330",y:"0.881083",width:"0.157462",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:mail@cleveradviser.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.360665",y:"0.807550",width:"0.142905",height:"0.012831"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"www.sandwdfm.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.359531",y:"0.901376",width:"0.168991",height:"0.027266"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:mickey.morrissey@smithandwilliamson.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.365079",y:"0.809928",width:"0.136455",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.sandwdfm.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.365079",y:"0.917419",width:"0.161796",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://smithandwilliamson.com"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.366336",y:"0.793916",width:"0.134966",height:"0.012029"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:fay@munnypot.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.369249",y:"0.795029",width:"0.130337",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:fay@munnypot.com"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.699655",y:"0.850604",width:"0.219344",height:"0.007782"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.experian.com/blogs/ask-experian/survey"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.350458",y:"0.951898",width:"0.176930",height:"0.011227"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://adviser.vitality.co.uk/investments/"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.619254",y:"0.959115",width:"0.208686",height:"0.018444"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.622931",y:"0.957415",width:"0.200401",height:"0.019839"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.426446",y:"0.951096",width:"0.263127",height:"0.020048"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.128161",y:"0.926236",width:"0.419641",height:"0.018444"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-webline-play"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.429004",y:"0.947335",width:"0.257659",height:"0.025507"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.655548",y:"0.849250",width:"0.176930",height:"0.012831"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://adviser.guardian1821.co.uk/"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.657816",y:"0.776274",width:"0.140637",height:"0.009624"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.661058",y:"0.776129",width:"0.132143",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"mailto:sales@synaptic.co.uk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.656682",y:"0.829201",width:"0.254054",height:"0.041701"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://www.synaptic.co.uk/research-tools/synaptic-webline-protection"}},{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.661058",y:"0.846287",width:"0.242041",height:"0.011588"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"co.uk/research-tools/synaptic-webline"}}],[],[],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.317331",y:"0.950379",width:"0.557612",height:"0.024407"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.364954",y:"0.950379",width:"0.557612",height:"0.024407"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.364954",y:"0.950379",width:"0.557612",height:"0.024407"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"http://www.synaptic.co.uk/research-tools/synaptic-risk"}}],[],[],[{annotype:"com.mobiano.flipbook.pageeditor.TAnnoLink",location:{x:"0.331176",y:"0.777877",width:"0.339117",height:"0.015237"},action:{triggerEventType:"mouseDown",actionType:"com.mobiano.flipbook.pageeditor.TAnnoActionOpenURL",url:"https://adviser.guardian1821.co.uk/wheeloflife"}}]]
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