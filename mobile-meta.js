/*===========================
  Mobile Meta Tags and Head Links
  ----
  Version 1.0
  Released on April 16, 2012
  ----
  by Vladimir Kharlampidi, The iDangero.us
  http://www.idangero.us/
  ----
  The Unlicense (aka: public domain)
  ===========================*/
MobileMeta = function(a) {
	a = a || {}
	var t = this;
	var head = document.getElementsByTagName('head')[0]
	//Viewport Meta Tag
	if (a.viewPort) {
		t.metaViewPort = document.createElement('meta')
		var arr = [];
		if (a.viewPort.width) arr.push('width=' + a.viewPort.width);
		if (a.viewPort.height) arr.push('height=' + a.viewPort.height);
		if (a.viewPort.initScale) arr.push('initial-scale=' + a.viewPort.initScale);
		if (a.viewPort.minScale) arr.push('minimum-scale=' + a.viewPort.minScale);
		if (a.viewPort.maxScale) arr.push('maximum-scale=' + a.viewPort.maxScale);
		if (a.viewPort.scalable) arr.push('user-scalable=' + a.viewPort.scalable);
		t.metaViewPort.content = arr.join('; ');
		t.metaViewPort.name = 'viewport';
		head.appendChild(t.metaViewPort)
	}
	//Home Screen Icons
	if (a.icons) {
		t.icons = [];
		var precomposed = a.icons.precomposed === false ? false : true;
		var sizesO = {
			iPad: '72x72',
			iPhone: '57x57',
			iPhoneR: '114x114',
			iPadR: '144x144'
		};
		for (var b in a.icons) {
			if (b == 'precomposed') continue;
			var link = document.createElement('link');
			if (b in sizesO) {
				link.setAttribute('sizes', sizesO[b]);
			}
			link.rel = b != 'default' ? 'apple-touch-icon' + (precomposed ? '-precomposed' : '') : 'shortcut icon';
			link.href = a.icons[b];
			head.appendChild(link);
			t.icons.push(link);
		}

	}
	//Web App
	if (a.webApp) {
		//Meta Capable
		t.metaCapable = document.createElement('meta');
		t.metaCapable.name = 'apple-mobile-web-app-capable';
		t.metaCapable.content = 'yes';
		head.appendChild(t.metaCapable);

		//Status Bar
		a.statusBar = a.statusBar || 'black';
		t.metaBar = document.createElement('meta');
		t.metaBar.name = "apple-mobile-web-app-status-bar-style";
		t.metaBar.content = a.statusBar;
		head.appendChild(t.metaBar);
		//StartUp Screen. From H5BP.Mobile
		if (a.webApp.startup) {
			var p, l, r = window.devicePixelRatio, b=a.webApp.startup, linkP='', linkL='';
			//iPad and iPad Retina
			if ( (b.iPad_L||b.iPad_P||b.iPadR_L||b.iPadR_P) && navigator.platform === "iPad" ) {
				p = r === 2 ? b.iPadR_P : b.iPad_P;
				l = r === 2 ? b.iPadR_L : b.iPad_L;
				if (p) linkP='<link rel="apple-touch-startup-image" href="' + p + '" media="screen and (orientation: portrait)"/>';
				if (l) linkL = '<link rel="apple-touch-startup-image" href="' + l + '" media="screen and (orientation: landscape)"/>';
				head.innerHTML+= (linkP+linkL);
			}
			//iPhone and iPhone Retina. Only Portrait Mode
			p = r === 2 ? b.iPhoneR : b.iPhone;
			if (p) head.innerHTML+= ('<link rel="apple-touch-startup-image" href="' + p + '"/>');
		}

	}
	
	
	return t
}