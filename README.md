<h1>MobileMeta.js</h1> 
<p>Small and lightweight JS library which saves a lot of time configuring mobile meta tags, such as viewport, home screen icons and startup screens for iOS web apps</h1>

<h2>Usage</h2>
<p>Add script to HTML:</p>
<code>&lt;script src="path_to/mobile_meta.min.js" &gt;&lt;/script&gt;</code>
<p>Initialize it with parameters:</p>
<pre>
var mm = new MobileMeta({
	/*==/ 
		Configure Viewport
	/==*/
	viewPort : {
		initScale : 1,
		minScale : 1,
		maxScale : 1,
		width : 'device-width',
		scalable : 'no'
	},
	
	/*==/ 
		Home Screen Icons
	/==*/
	icons : {
		iPad : 'path_to/icon_72x72.png',      //&lt;- For iPad
		iPadR : 'path_to/icon_144x144.png',   //&lt;- For iPad Retina
		iPhone : 'path_to/icon_57x57.png',    //&lt;- For iPhone , Android 2.1+
		iPhoneR : 'path_to/icon_114x114.png', //&lt;- For iPhone Retina
		default : 'path_to/icon.png'          //&lt;- For other and old browsers
	},
	
	/*==/ 
		Web App
	/==*/
	webApp : {
		//iOS Status Bar - 'default', 'black' or 'black-translucent' 
		statusBar : 'black-translucent',
		
		//Startup screen image
		startup : {
			iPad_L :  'path_to/startup_1024x748.png',  //&lt;- For iPad in Lanscape orientation
			iPad_P :  'path_to/startup_768x1004.png',  //&lt;- For iPad in Portrait orientation
			iPadR_L : 'path_to/startup_1496x2048.png', //&lt;- For iPad Retina in Lanscape orientation
			iPadR_P : 'path_to/startup_1536x2008.png', //&lt;- For iPad Retina in Portrait orientation
			iPhone :  'path_to/startup_320x460.png',   //&lt;- For iPhone, only in Portrait orientation
			iPhoneR : 'path_to/startup_640x920.png'    //&lt;- For iPhone Retina, only in Portrait orientation
		}
	}
  	
});
</pre>

<h3>Viewport <em>(optional)<em></h3>
<p>Will generate the following META tag depending on parameters:</p>
<code>&lt;meta content="width=device-width; initial-scale=1; minimum-scale=1; maximum-scale=1; user-scalable=no" name="viewport"&gt;</code>
<p>Available parameters: <strong>initScale</strong>, <strong>minScale</strong>, <strong>maxScale</strong>, <strong>width</strong>, <strong>height</strong>, <strong>scalable</strong>. All parameters are optional including 'viewPort' itself</p>

<h3>Icons <em>(optional)<em></h3>
<p>URL to icons for different devices. Will add the following HTML in the HEAD for specified icons:</p>
<code>
&lt;link sizes="72x72" rel="apple-touch-icon-precomposed" href="path_to/icon_72x72.png"&gt;
&lt;link sizes="144x144" rel="apple-touch-icon-precomposed" href="path_to/icon_144x144.png"&gt;
&lt;link sizes="57x57" rel="apple-touch-icon-precomposed" href="path_to/icon_57x57.png"&gt;
&lt;link sizes="114x114" rel="apple-touch-icon-precomposed" href="path_to/icon_114x114.png"&gt;
&lt;link rel="shortcut icon" href="path_to/icon.png"&gt;
</code>
<p>All parameters are optional</p>

<h3>Web App <em>(optional)<em></h3>
<h4>- Status Bar <em>(optional)<em></h4>
<p>Script will add the following META tag to head :</p>
<code>&lt;meta name="apple-mobile-web-app-status-bar-style" content="black"&gt;</code>
<h4>- Startup images <em>(optional)<em></h4>
<p>It will help you to specify startup screen images for different iOS devices in different orientations. For example, for iPad Retina script will add the following LINKs to head:</p>
<pre>
&lt;link href="path_to/startup_1496x2048.png" rel="apple-touch-startup-image" media="screen and (orientation: portrait)" &gt;
&lt;link href="path_to/startup_1536x2008.png" rel="apple-touch-startup-image" media="screen and (orientation: landscape)" &gt;
</pre>
<p>All parameters are optional</p>

<h2>License</h2>
<p>The Unlicense (aka: public domain)</p>
