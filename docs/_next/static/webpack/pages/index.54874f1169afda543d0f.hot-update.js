self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/constants/constants.js":
/*!************************************!*\
  !*** ./src/constants/constants.js ***!
  \************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "projects": function() { return /* binding */ projects; },
/* harmony export */   "TimeLineData": function() { return /* binding */ TimeLineData; }
/* harmony export */ });
/* module decorator */ module = __webpack_require__.hmd(module);
var projects = [{
  title: 'Blog',
  description: "Blog developed using laravel 8 + livewire, AdminLte was implemented as admin template for creating posts. It has CRUD of categories, tags. One-to-many and many-to-many relationship using Eloquent ORM, access policies, roles and permissions. Mysql database.",
  image: '/images/blog.png',
  tags: ['Laravel', 'Mysql', 'Liveware', 'Tailwind', 'Bootsrapp'],
  source: 'https://github.com/cpandares/blod-admin',
  visit: '',
  id: 0
}, {
  title: 'Posts-TDD',
  description: "CRUD of posts with laravel, focused on unit testing using TDD. Unit tests to verify its performance.",
  image: '/images/livewire.png',
  tags: ['Laravel', 'Mysql', 'Liveware', 'Php Unit', 'Tailwind'],
  source: 'https://github.com/cpandares/tdd-laravel',
  visit: '',
  id: 1
}, {
  title: 'Eccommerce-Headphones',
  description: "Eccomerce developed with React and NextJs as framerwork, backend in sanity.io, has stripe integration in test mode so it can be tested, animations with css.",
  image: '/images/next.png',
  tags: ['React', 'Nextjs', 'Css', 'Stripe'],
  source: 'https://github.com/cpandares/tdd-laravel',
  visit: '',
  id: 1
}, {
  title: 'Ventmove',
  description: "Using React, Symfony, Mysql to create a platform to make for all users create a page and integrate your Online Store, Reservation and Collection System, Online Events, Ticket Sales, Contact Manager (CRM), Financing Campaigns, Blog and Much More.",
  image: '/images/vent.png',
  tags: ['Symfony', 'Mysql', 'React', 'Sass'],
  source: '',
  visit: 'https://ventmove.com/',
  id: 2
}, {
  title: 'Rv advisor',
  description: "This start a simple e-commerce for users in USA, with Rv vehicles, providing the opportunity to insure their vehicles, offer road assistance, tire insurance, all under the payment of memberships (using stripe). Today it is a whole social network where users can upload their posts, like systems, chat. Today it continues to grow and add features..",
  image: '/images/rv.png',
  tags: ['Php', 'Js', 'Mysql'],
  source: '',
  visit: 'https://panel.thervadvisor.com/',
  id: 3
}, {
  title: 'Mern Calendar',
  description: "This is a code repository for the corresponding to an app developed in react & mongoDb with the ability to create users, and add events with a calendar, start date, end date, validations, etc.",
  image: '/images/calendar.png',
  tags: ['React', 'MongoDb', 'Node', 'Express'],
  source: 'https://github.com/cpandares/calendar-react',
  visit: '',
  id: 4
}, {
  title: 'Journal-app',
  description: "This is a code repository for the corresponding to one app developed in react, redux & firebase, where users can add notes from different memories, add images. Provide login with google.",
  image: '/images/journal.png',
  tags: ['React', 'Firebase', 'Redux'],
  source: 'https://github.com/cpandares/diario-react-18',
  visit: 'https://app-journalr.netlify.app/auth/login',
  id: 5
}, {
  title: 'shop-app',
  description: "Eccomerce developed in React in frontend & sass for styles, is just a test with a api rest free, included axios for petitions http",
  image: '/images/screencapture.png',
  tags: ['React', 'Firebase', 'Sass', 'Axios'],
  source: 'https://github.com/cpandares/eccomerce-static',
  visit: 'https://shoppingc-app.netlify.app/',
  id: 6
}, {
  title: 'Search gifs',
  description: "A simple search engine of gifs, using fetch for http petitions, and just css for the styles.",
  image: '/images/gifs.png',
  tags: ['React', 'Css', 'fetch'],
  source: 'https://github.com/cpandares/eccomerce-static',
  visit: 'https://cpandares.github.io/react-gift/',
  id: 7
}];
var TimeLineData = [{
  year: 2017,
  text: 'Started my journey'
}, {
  year: 2018,
  text: 'Worked as a freelance developer'
}, {
  year: 2019,
  text: 'Founded JavaScript Mastery'
}, {
  year: 2020,
  text: 'Shared my projects with the world'
}, {
  year: 2021,
  text: 'Started my own platform'
}];

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsYUFBVyxFQUFFLGtRQUZmO0FBR0lDLE9BQUssRUFBRSxrQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixVQUFyQixFQUFpQyxVQUFqQyxFQUE2QyxXQUE3QyxDQUpWO0FBS0VDLFFBQU0sRUFBRSx5Q0FMVjtBQU1FQyxPQUFLLEVBQUUsRUFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURzQixFQVV0QjtBQUNFTixPQUFLLEVBQUUsV0FEVDtBQUVFQyxhQUFXLEVBQUUsc0dBRmY7QUFHSUMsT0FBSyxFQUFFLHNCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLFNBQUQsRUFBWSxPQUFaLEVBQXFCLFVBQXJCLEVBQWlDLFVBQWpDLEVBQTZDLFVBQTdDLENBSlY7QUFLRUMsUUFBTSxFQUFFLDBDQUxWO0FBTUVDLE9BQUssRUFBRSxFQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCLEVBbUJ0QjtBQUNFTixPQUFLLEVBQUUsdUJBRFQ7QUFFRUMsYUFBVyxFQUFFLDhKQUZmO0FBR0lDLE9BQUssRUFBRSxrQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixLQUFwQixFQUEyQixRQUEzQixDQUpWO0FBS0VDLFFBQU0sRUFBRSwwQ0FMVjtBQU1FQyxPQUFLLEVBQUUsRUFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQW5Cc0IsRUE0QnRCO0FBQ0VOLE9BQUssRUFBRSxVQURUO0FBRUVDLGFBQVcsRUFBRSx1UEFGZjtBQUdJQyxPQUFLLEVBQUUsa0JBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsT0FBckIsRUFBOEIsTUFBOUIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsRUFMVjtBQU1FQyxPQUFLLEVBQUUsdUJBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E1QnNCLEVBcUN0QjtBQUNFTixPQUFLLEVBQUUsWUFEVDtBQUVFQyxhQUFXLEVBQUMsNlZBRmQ7QUFHRUMsT0FBSyxFQUFFLGdCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWEsT0FBYixDQUpSO0FBS0VDLFFBQU0sRUFBRSxFQUxWO0FBTUVDLE9BQUssRUFBRSxpQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXJDc0IsRUE4Q3RCO0FBQ0VOLE9BQUssRUFBRSxlQURUO0FBRUVDLGFBQVcsRUFBRSxrTUFGZjtBQUdJQyxPQUFLLEVBQUUsc0JBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBb0IsTUFBcEIsRUFBNEIsU0FBNUIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsNkNBTFY7QUFNRUMsT0FBSyxFQUFFLEVBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E5Q3NCLEVBdUR0QjtBQUNFTixPQUFLLEVBQUUsYUFEVDtBQUVFQyxhQUFXLEVBQUUsNExBRmY7QUFHRUMsT0FBSyxFQUFFLHFCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxVQUFWLEVBQXNCLE9BQXRCLENBSlI7QUFLRUMsUUFBTSxFQUFFLDhDQUxWO0FBTUVDLE9BQUssRUFBRSw2Q0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXZEc0IsRUFnRXRCO0FBQ0VOLE9BQUssRUFBRSxVQURUO0FBRUVDLGFBQVcsRUFBRSxvSUFGZjtBQUdFQyxPQUFLLEVBQUUsMkJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFVBQVYsRUFBc0IsTUFBdEIsRUFBOEIsT0FBOUIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsK0NBTFY7QUFNRUMsT0FBSyxFQUFFLG9DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBaEVzQixFQXlFdEI7QUFDRU4sT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUFFLDhGQUZmO0FBR0VDLE9BQUssRUFBRSxrQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsS0FBVixFQUFpQixPQUFqQixDQUpSO0FBS0VDLFFBQU0sRUFBRSwrQ0FMVjtBQU1FQyxPQUFLLEVBQUUseUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0F6RXNCLENBQWpCO0FBb0ZBLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FKMEIsRUFLMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBTDBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LjU0ODc0ZjExNjlhZmRhNTQzZDBmLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0Jsb2cnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJsb2cgZGV2ZWxvcGVkIHVzaW5nIGxhcmF2ZWwgOCArIGxpdmV3aXJlLCBBZG1pbkx0ZSB3YXMgaW1wbGVtZW50ZWQgYXMgYWRtaW4gdGVtcGxhdGUgZm9yIGNyZWF0aW5nIHBvc3RzLiBJdCBoYXMgQ1JVRCBvZiBjYXRlZ29yaWVzLCB0YWdzLiBPbmUtdG8tbWFueSBhbmQgbWFueS10by1tYW55IHJlbGF0aW9uc2hpcCB1c2luZyBFbG9xdWVudCBPUk0sIGFjY2VzcyBwb2xpY2llcywgcm9sZXMgYW5kIHBlcm1pc3Npb25zLiBNeXNxbCBkYXRhYmFzZS5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9ibG9nLnBuZycsXG4gICAgICB0YWdzOiBbJ0xhcmF2ZWwnLCAnTXlzcWwnLCAnTGl2ZXdhcmUnLCAnVGFpbHdpbmQnLCAnQm9vdHNyYXBwJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2NwYW5kYXJlcy9ibG9kLWFkbWluJyxcbiAgICB2aXNpdDogJycsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1Bvc3RzLVRERCcsXG4gICAgZGVzY3JpcHRpb246IFwiQ1JVRCBvZiBwb3N0cyB3aXRoIGxhcmF2ZWwsIGZvY3VzZWQgb24gdW5pdCB0ZXN0aW5nIHVzaW5nIFRERC4gVW5pdCB0ZXN0cyB0byB2ZXJpZnkgaXRzIHBlcmZvcm1hbmNlLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2xpdmV3aXJlLnBuZycsXG4gICAgICB0YWdzOiBbJ0xhcmF2ZWwnLCAnTXlzcWwnLCAnTGl2ZXdhcmUnLCAnUGhwIFVuaXQnLCAnVGFpbHdpbmQnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vY3BhbmRhcmVzL3RkZC1sYXJhdmVsJyxcbiAgICB2aXNpdDogJycsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0VjY29tbWVyY2UtSGVhZHBob25lcycsXG4gICAgZGVzY3JpcHRpb246IFwiRWNjb21lcmNlIGRldmVsb3BlZCB3aXRoIFJlYWN0IGFuZCBOZXh0SnMgYXMgZnJhbWVyd29yaywgYmFja2VuZCBpbiBzYW5pdHkuaW8sIGhhcyBzdHJpcGUgaW50ZWdyYXRpb24gaW4gdGVzdCBtb2RlIHNvIGl0IGNhbiBiZSB0ZXN0ZWQsIGFuaW1hdGlvbnMgd2l0aCBjc3MuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvbmV4dC5wbmcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdOZXh0anMnLCAnQ3NzJywgJ1N0cmlwZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jcGFuZGFyZXMvdGRkLWxhcmF2ZWwnLFxuICAgIHZpc2l0OiAnJyxcbiAgICBpZDogMSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnVmVudG1vdmUnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlVzaW5nIFJlYWN0LCBTeW1mb255LCBNeXNxbCB0byBjcmVhdGUgYSBwbGF0Zm9ybSB0byBtYWtlIGZvciBhbGwgdXNlcnMgY3JlYXRlIGEgcGFnZSBhbmQgaW50ZWdyYXRlIHlvdXIgT25saW5lIFN0b3JlLCBSZXNlcnZhdGlvbiBhbmQgQ29sbGVjdGlvbiBTeXN0ZW0sIE9ubGluZSBFdmVudHMsIFRpY2tldCBTYWxlcywgQ29udGFjdCBNYW5hZ2VyIChDUk0pLCBGaW5hbmNpbmcgQ2FtcGFpZ25zLCBCbG9nIGFuZCBNdWNoIE1vcmUuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvdmVudC5wbmcnLFxuICAgICAgdGFnczogWydTeW1mb255JywgJ015c3FsJywgJ1JlYWN0JywgJ1Nhc3MnXSxcbiAgICBzb3VyY2U6ICcnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly92ZW50bW92ZS5jb20vJyxcbiAgICBpZDogMixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnUnYgYWR2aXNvcicsXG4gICAgZGVzY3JpcHRpb246XCJUaGlzIHN0YXJ0IGEgc2ltcGxlIGUtY29tbWVyY2UgZm9yIHVzZXJzIGluIFVTQSwgd2l0aCBSdiB2ZWhpY2xlcywgcHJvdmlkaW5nIHRoZSBvcHBvcnR1bml0eSB0byBpbnN1cmUgdGhlaXIgdmVoaWNsZXMsIG9mZmVyIHJvYWQgYXNzaXN0YW5jZSwgdGlyZSBpbnN1cmFuY2UsIGFsbCB1bmRlciB0aGUgcGF5bWVudCBvZiBtZW1iZXJzaGlwcyAodXNpbmcgc3RyaXBlKS4gVG9kYXkgaXQgaXMgYSB3aG9sZSBzb2NpYWwgbmV0d29yayB3aGVyZSB1c2VycyBjYW4gdXBsb2FkIHRoZWlyIHBvc3RzLCBsaWtlIHN5c3RlbXMsIGNoYXQuIFRvZGF5IGl0IGNvbnRpbnVlcyB0byBncm93IGFuZCBhZGQgZmVhdHVyZXMuLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9ydi5wbmcnLFxuICAgIHRhZ3M6IFsnUGhwJywgJ0pzJywnTXlzcWwnXSxcbiAgICBzb3VyY2U6ICcnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9wYW5lbC50aGVydmFkdmlzb3IuY29tLycsXG4gICAgaWQ6IDMsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ01lcm4gQ2FsZW5kYXInLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIHRvIGFuIGFwcCBkZXZlbG9wZWQgaW4gcmVhY3QgJiBtb25nb0RiIHdpdGggdGhlIGFiaWxpdHkgdG8gY3JlYXRlIHVzZXJzLCBhbmQgYWRkIGV2ZW50cyB3aXRoIGEgY2FsZW5kYXIsIHN0YXJ0IGRhdGUsIGVuZCBkYXRlLCB2YWxpZGF0aW9ucywgZXRjLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2NhbGVuZGFyLnBuZycsXG4gICAgICB0YWdzOiBbJ1JlYWN0JywgJ01vbmdvRGInLCdOb2RlJywgJ0V4cHJlc3MnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vY3BhbmRhcmVzL2NhbGVuZGFyLXJlYWN0JyxcbiAgICB2aXNpdDogJycsXG4gICAgaWQ6IDQsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0pvdXJuYWwtYXBwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyB0byBvbmUgYXBwIGRldmVsb3BlZCBpbiByZWFjdCwgcmVkdXggJiBmaXJlYmFzZSwgd2hlcmUgdXNlcnMgY2FuIGFkZCBub3RlcyBmcm9tIGRpZmZlcmVudCBtZW1vcmllcywgYWRkIGltYWdlcy4gUHJvdmlkZSBsb2dpbiB3aXRoIGdvb2dsZS5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvam91cm5hbC5wbmcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnRmlyZWJhc2UnLCAnUmVkdXgnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vY3BhbmRhcmVzL2RpYXJpby1yZWFjdC0xOCcsXG4gICAgdmlzaXQ6ICdodHRwczovL2FwcC1qb3VybmFsci5uZXRsaWZ5LmFwcC9hdXRoL2xvZ2luJyxcbiAgICBpZDogNSxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnc2hvcC1hcHAnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVjY29tZXJjZSBkZXZlbG9wZWQgaW4gUmVhY3QgaW4gZnJvbnRlbmQgJiBzYXNzIGZvciBzdHlsZXMsIGlzIGp1c3QgYSB0ZXN0IHdpdGggYSBhcGkgcmVzdCBmcmVlLCBpbmNsdWRlZCBheGlvcyBmb3IgcGV0aXRpb25zIGh0dHBcIixcbiAgICBpbWFnZTogJy9pbWFnZXMvc2NyZWVuY2FwdHVyZS5wbmcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnRmlyZWJhc2UnLCAnU2FzcycsICdBeGlvcyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jcGFuZGFyZXMvZWNjb21lcmNlLXN0YXRpYycsXG4gICAgdmlzaXQ6ICdodHRwczovL3Nob3BwaW5nYy1hcHAubmV0bGlmeS5hcHAvJyxcbiAgICBpZDogNixcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnU2VhcmNoIGdpZnMnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkEgc2ltcGxlIHNlYXJjaCBlbmdpbmUgb2YgZ2lmcywgdXNpbmcgZmV0Y2ggZm9yIGh0dHAgcGV0aXRpb25zLCBhbmQganVzdCBjc3MgZm9yIHRoZSBzdHlsZXMuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2dpZnMucG5nJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0NzcycsICdmZXRjaCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jcGFuZGFyZXMvZWNjb21lcmNlLXN0YXRpYycsXG4gICAgdmlzaXQ6ICdodHRwczovL2NwYW5kYXJlcy5naXRodWIuaW8vcmVhY3QtZ2lmdC8nLFxuICAgIGlkOiA3LFxuICB9LFxuXTtcblxuZXhwb3J0IGNvbnN0IFRpbWVMaW5lRGF0YSA9IFtcbiAgeyB5ZWFyOiAyMDE3LCB0ZXh0OiAnU3RhcnRlZCBteSBqb3VybmV5JywgfSxcbiAgeyB5ZWFyOiAyMDE4LCB0ZXh0OiAnV29ya2VkIGFzIGEgZnJlZWxhbmNlIGRldmVsb3BlcicsIH0sXG4gIHsgeWVhcjogMjAxOSwgdGV4dDogJ0ZvdW5kZWQgSmF2YVNjcmlwdCBNYXN0ZXJ5JywgfSxcbiAgeyB5ZWFyOiAyMDIwLCB0ZXh0OiAnU2hhcmVkIG15IHByb2plY3RzIHdpdGggdGhlIHdvcmxkJywgfSxcbiAgeyB5ZWFyOiAyMDIxLCB0ZXh0OiAnU3RhcnRlZCBteSBvd24gcGxhdGZvcm0nLCB9LFxuXTsiXSwic291cmNlUm9vdCI6IiJ9