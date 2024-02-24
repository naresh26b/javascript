function hideMarker () {
  marker != undefined && (marker.style.display = 'none');
}
function imginit (n, t) {
  for (var i, u, f, r; document.getElementById (n).hasChildNodes (); )
    document
      .getElementById (n)
      .removeChild (document.getElementById (n).firstChild);
  hideMarker ();
  i = new Image ();
  i.src = t;
  u = parseInt (i.width);
  f = parseInt (i.height);
  i = null;
  r = document.getElementById (n);
  r.style.width = u + 'px';
  r.style.height = f + 'px';
  r.style.position = 'relative';
  marker = new Image ();
  marker.src = markersrc;
  marker.alt = '';
  marker.style.display = 'none';
  marker.style.position = 'absolute';
  r.appendChild (marker);
  rulerXaxis (n, u);
  rulerYaxis (n, f);
}
function loadImage (n, t) {
  var i = document.getElementById (n);
  i.style.backgroundImage = "url('" + t + "')";
  setTimeout ("imginit('" + n + "','" + t + "');", 500);
}
function loadImageWithXYaxis () {
  if (
    document.getElementById ('txtImagePath').value == '' ||
    document.getElementById ('txtXaxis').value == '' ||
    document.getElementById ('txtYaxis').value == ''
  ) {
    alert ('invalid data');
    return;
  }
  showXYaxis (
    parseInt (document.getElementById ('txtXaxis').value),
    parseInt (document.getElementById ('txtYaxis').value)
  );
}
function showXYaxis (n, t, i) {
  if (marker != null) {
    var r = 0 - markersize / 2, u = t + r, f = i + r;
    marker.style.left = u + 'px';
    marker.style.top = f + 'px';
    marker.title = n;
    marker.style.display = 'block';
  }
}
function rulerXaxis (n, t) {
  ruler (n, parseInt (t), 'xaxis', 'visible');
}
function rulerYaxis (n, t) {
  ruler (n, parseInt (t), 'yaxis', 'visible');
}
function rulerYaxisWithoutRulerImage (n, t, i) {
  ruler (n, parseInt (t), 'yaxis', i);
}
function ruler (n, t, r, u) {
  var l, e, o, s, h, f;
  try {
    for ((l = document.getElementById (n)), (i = 0); i <= t; i++) {
      if (i % 10 == 0 || i % 50 == 0) {
        e = new Image ();
        i % 50 == 0
          ? ((e.src = r == 'yaxis'
              ? markerhorizontalbigsrc
              : markerverticalbigsrc), (o = document.createElement (
              'label'
            )), (o.innerHTML =
              "<a name='" +
              i +
              "'><font size=1 color=blue>" +
              i +
              '<\/font><\/a>'), (s = 0), (h = 0), r == 'yaxis'
              ? i == 0
                  ? ((s = -30), (h = -5))
                  : ((s = -30 + c), (h = i - 5 + c))
              : i == 0
                  ? ((s = 0), (h = -25))
                  : ((s = i - 5 + c), (h = -25 + c)), (o.style.align =
              'center'), (o.style.left = s + 'px'), (o.style.top =
              h + 'px'), (o.style.display =
              'block'), (o.style.visibility = u), (o.style.position =
              'absolute'), l.appendChild (o))
          : (e.src = r == 'yaxis' ? markerhorizontalsrc : markerverticalsrc);
        e.alt = '';
        e.style.position = 'absolute';
        l.appendChild (e);
        var c = 0, s = 0, h = 0;
        r == 'yaxis'
          ? ((s = -15 + c), (h = i + c))
          : ((s = i + c), (h = -15 + c));
        e.style.left = s + 'px';
        e.style.top = h + 'px';
        e.style.display = 'block';
        e.style.visibility = u;
      }
      i == t &&
        ((f = new Image ()), (f.style.position = 'absolute'), r == 'yaxis'
          ? ((f.src = yaxissrc), (f.style.left = '-45px'), (f.style.top =
              t / 2 + 'px'))
          : ((f.src = xaxissrc), (f.style.left = t / 2 + 'px'), (f.style.top =
              '-40px')), (f.style.display =
          'block'), (f.style.visibility = u), l.appendChild (f));
    }
  } catch (a) {
    alert (a);
  }
}
function loadImageWithoutRuler (n, t) {
  var r = document.getElementById (n), i;
  r.innerHTML = '';
  i = new Image ();
  i.onload = function () {
    imginitWithoutRuler (r, this);
    odyUI.cruiseDeckDetails &&
      odyUI.cruiseDeckDetails.methods &&
      odyUI.cruiseDeckDetails.methods.showCommonAreas ();
    odyUI &&
      (odyUI.cruiseShipDeckUC &&
        delete odyUI.cruiseShipDeckUC.action, odyUI.cabinUc &&
        (delete odyUI.cabinUc
          .AllowRedirect, odyUI.cabinUc.methods.ShowTabContent (
          odyUI.cabinUc.variables.shipDeckPlanModalBody,
          'ShipDeckPlans',
          $ ('[data-ody-deck-dropdown] option:selected').val (),
          odyUI.cabinUc.selectedCategoryID,
          odyUI.cabinUc.selectedCategoryCode
        ), odyUI.cruiseDeckDetails &&
          odyUI.cruiseDeckDetails.methods &&
          odyUI.cruiseDeckDetails.methods.showCommonAreas ()));
  };
  i.src = t;
}
function imginitWithoutRuler (n, t) {
  n.style.backgroundImage = "url('" + t.src + "')";
  var r = parseInt (t.width), i = parseInt (t.height);
  n.style.width = r + 'px';
  n.style.height = i + 'px';
  n.style.position = 'relative';
  loadMarkersOnXYAxis ();
  rulerYaxisWithoutRulerImage (n.id, i, 'hidden');
}
function showXYaxisWithoutRuler (n, t, i, r, u, f, e, o, s) {
  var v = 0 - markersize / 2,
    w = i + v,
    y = r + v,
    h = new Image (),
    c,
    a,
    l,
    p;
  odyUI &&
    odyUI.cruiseShipDeckUC &&
    odyUI.cruiseShipDeckUC.action == 'ModalPopup'
    ? (odyUI.cruiseShipDeckUC &&
        odyUI.cruiseShipDeckUC.action &&
        ((a = 'ImageDeckModal'), h.setAttribute (
          'data-ody-offset',
          y
        )), h.setAttribute ('data-toggle', 'popover'), h.setAttribute (
        'id',
        'Image' + t
      ), odyUI.isMobileDevice == 0
        ? h.setAttribute (
            'onmouseover',
            'odyUI.cabinUc.methods.openPopOver("' + t + '")'
          )
        : h.setAttribute (
            'onclick',
            'odyUI.cabinUc.methods.openPopOver("' + t + '")'
          ), (c = odyUI.cabinUc.methods.createNewDialog (t, a)), c &&
        (c.setAttribute ('id', a + t), c.setAttribute (
          'class',
          'popover'
        ), (l = document.getElementById ('DynamicImageModal')), l &&
          l &&
          l.appendChild (c)))
    : odyUI.cabinUc && odyUI.cabinUc.AllowRedirect
        ? (h.setAttribute ('id', 'ImageNavigate' + t), h.setAttribute (
            'onclick',
            'odyUI.cabinUc.methods.navigateToStateRoom(this,' + t + ')'
          ))
        : (h.onclick = function () {
            SelectStateroom (t, u, f, e, o, s);
          });
  h.style.cursor = 'pointer';
  h.style.position = 'absolute';
  h.src = odyUI && odyUI.cabinUc && odyUI.cabinUc.variables.markerSrc
    ? odyUI.cabinUc.variables.markerSrc
    : markersrc;
  h.style.left = w + 'px';
  h.style.top = y + 'px';
  h.style.display = 'block';
  p = document.getElementById (n);
  p.appendChild (h);
}
function ShowAreaXYAxis (n, t, i, r, u, f) {
  var s = 0 - markersize / 2, h = i + s, c = r + s, e = new Image (), o;
  e.onclick = function () {
    SelectArea (f);
  };
  e.style.cursor = 'pointer';
  e.style.position = 'absolute';
  u = u == '' || u == null ? markersrc : '/content/images/' + u;
  e.src = u;
  e.style.left = h + 'px';
  e.style.top = c + 'px';
  e.title = t;
  e.style.display = 'block';
  o = document.getElementById (n);
  o != null && o.appendChild (e);
}
function loadMarkersOnXYAxis () {
  if (
    window.arrOfXYAxis != undefined &&
    arrOfXYAxis != null &&
    arrOfXYAxis.length > 0
  )
    for (i = 0; i < arrOfXYAxis.length; i++) {
      var n = arrOfXYAxis[i].split (',');
      showXYaxisWithoutRuler (
        n[0],
        n[1],
        parseInt (n[2]),
        parseInt (n[3]),
        n.length > 4 ? n[4] : null,
        n.length > 5 ? decodeURIComponent (n[5]) : null,
        n.length > 6 ? n[6] : null,
        n.length > 7 ? n[7] : null,
        n.length > 8 ? decodeURIComponent (n[8]) : null
      );
    }
}
var marker,
  markersrc,
  markersize,
  markerverticalsrc,
  markerverticalbigsrc,
  markerhorizontalsrc,
  markerhorizontalbigsrc,
  xaxissrc,
  yaxissrc,
  isIE = document.all && navigator.userAgent.indexOf ('Opera') == -1;
markersrc = '/content/images/marker.gif';
markerverticalsrc = '/content/images/rulerVertical.PNG';
markerverticalbigsrc = '/content/images/rulerVerticalBig.PNG';
markerhorizontalsrc = '/content/images/rulerHorizontal.png';
markerhorizontalbigsrc = '/content/images/rulerHorizontalBig.png';
xaxissrc = '/content/images/xaxis.PNG';
yaxissrc = '/content/images/yaxis.PNG';
markersize = 28;
