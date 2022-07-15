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
  source: 'https://github.com/cpandares/eccomerce',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsYUFBVyxFQUFFLGtRQUZmO0FBR0lDLE9BQUssRUFBRSxrQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixVQUFyQixFQUFpQyxVQUFqQyxFQUE2QyxXQUE3QyxDQUpWO0FBS0VDLFFBQU0sRUFBRSx5Q0FMVjtBQU1FQyxPQUFLLEVBQUUsRUFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURzQixFQVV0QjtBQUNFTixPQUFLLEVBQUUsV0FEVDtBQUVFQyxhQUFXLEVBQUUsc0dBRmY7QUFHSUMsT0FBSyxFQUFFLHNCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLFNBQUQsRUFBWSxPQUFaLEVBQXFCLFVBQXJCLEVBQWlDLFVBQWpDLEVBQTZDLFVBQTdDLENBSlY7QUFLRUMsUUFBTSxFQUFFLDBDQUxWO0FBTUVDLE9BQUssRUFBRSxFQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCLEVBbUJ0QjtBQUNFTixPQUFLLEVBQUUsdUJBRFQ7QUFFRUMsYUFBVyxFQUFFLDhKQUZmO0FBR0lDLE9BQUssRUFBRSxrQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixLQUFwQixFQUEyQixRQUEzQixDQUpWO0FBS0VDLFFBQU0sRUFBRSx3Q0FMVjtBQU1FQyxPQUFLLEVBQUUsRUFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQW5Cc0IsRUE0QnRCO0FBQ0VOLE9BQUssRUFBRSxVQURUO0FBRUVDLGFBQVcsRUFBRSx1UEFGZjtBQUdJQyxPQUFLLEVBQUUsa0JBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsU0FBRCxFQUFZLE9BQVosRUFBcUIsT0FBckIsRUFBOEIsTUFBOUIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsRUFMVjtBQU1FQyxPQUFLLEVBQUUsdUJBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E1QnNCLEVBcUN0QjtBQUNFTixPQUFLLEVBQUUsWUFEVDtBQUVFQyxhQUFXLEVBQUMsNlZBRmQ7QUFHRUMsT0FBSyxFQUFFLGdCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLEtBQUQsRUFBUSxJQUFSLEVBQWEsT0FBYixDQUpSO0FBS0VDLFFBQU0sRUFBRSxFQUxWO0FBTUVDLE9BQUssRUFBRSxpQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXJDc0IsRUE4Q3RCO0FBQ0VOLE9BQUssRUFBRSxlQURUO0FBRUVDLGFBQVcsRUFBRSxrTUFGZjtBQUdJQyxPQUFLLEVBQUUsc0JBSFg7QUFJSUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFNBQVYsRUFBb0IsTUFBcEIsRUFBNEIsU0FBNUIsQ0FKVjtBQUtFQyxRQUFNLEVBQUUsNkNBTFY7QUFNRUMsT0FBSyxFQUFFLEVBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0E5Q3NCLEVBdUR0QjtBQUNFTixPQUFLLEVBQUUsYUFEVDtBQUVFQyxhQUFXLEVBQUUsNExBRmY7QUFHRUMsT0FBSyxFQUFFLHFCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxVQUFWLEVBQXNCLE9BQXRCLENBSlI7QUFLRUMsUUFBTSxFQUFFLDhDQUxWO0FBTUVDLE9BQUssRUFBRSw2Q0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQXZEc0IsRUFnRXRCO0FBQ0VOLE9BQUssRUFBRSxVQURUO0FBRUVDLGFBQVcsRUFBRSxvSUFGZjtBQUdFQyxPQUFLLEVBQUUsMkJBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLFVBQVYsRUFBc0IsTUFBdEIsRUFBOEIsT0FBOUIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsK0NBTFY7QUFNRUMsT0FBSyxFQUFFLG9DQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBaEVzQixFQXlFdEI7QUFDRU4sT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUFFLDhGQUZmO0FBR0VDLE9BQUssRUFBRSxrQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsS0FBVixFQUFpQixPQUFqQixDQUpSO0FBS0VDLFFBQU0sRUFBRSwrQ0FMVjtBQU1FQyxPQUFLLEVBQUUseUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0F6RXNCLENBQWpCO0FBb0ZBLElBQU1DLFlBQVksR0FBRyxDQUMxQjtBQUFFQyxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FEMEIsRUFFMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRjBCLEVBRzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUgwQixFQUkxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FKMEIsRUFLMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBTDBCLENBQXJCIiwiZmlsZSI6InN0YXRpYy93ZWJwYWNrL3BhZ2VzL2luZGV4LmNiNzZiMGVkZjIyMmQ5ZGExODkzLmhvdC11cGRhdGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY29uc3QgcHJvamVjdHMgPSBbXG4gIHtcbiAgICB0aXRsZTogJ0Jsb2cnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkJsb2cgZGV2ZWxvcGVkIHVzaW5nIGxhcmF2ZWwgOCArIGxpdmV3aXJlLCBBZG1pbkx0ZSB3YXMgaW1wbGVtZW50ZWQgYXMgYWRtaW4gdGVtcGxhdGUgZm9yIGNyZWF0aW5nIHBvc3RzLiBJdCBoYXMgQ1JVRCBvZiBjYXRlZ29yaWVzLCB0YWdzLiBPbmUtdG8tbWFueSBhbmQgbWFueS10by1tYW55IHJlbGF0aW9uc2hpcCB1c2luZyBFbG9xdWVudCBPUk0sIGFjY2VzcyBwb2xpY2llcywgcm9sZXMgYW5kIHBlcm1pc3Npb25zLiBNeXNxbCBkYXRhYmFzZS5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9ibG9nLnBuZycsXG4gICAgICB0YWdzOiBbJ0xhcmF2ZWwnLCAnTXlzcWwnLCAnTGl2ZXdhcmUnLCAnVGFpbHdpbmQnLCAnQm9vdHNyYXBwJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2NwYW5kYXJlcy9ibG9kLWFkbWluJyxcbiAgICB2aXNpdDogJycsXG4gICAgaWQ6IDAsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1Bvc3RzLVRERCcsXG4gICAgZGVzY3JpcHRpb246IFwiQ1JVRCBvZiBwb3N0cyB3aXRoIGxhcmF2ZWwsIGZvY3VzZWQgb24gdW5pdCB0ZXN0aW5nIHVzaW5nIFRERC4gVW5pdCB0ZXN0cyB0byB2ZXJpZnkgaXRzIHBlcmZvcm1hbmNlLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL2xpdmV3aXJlLnBuZycsXG4gICAgICB0YWdzOiBbJ0xhcmF2ZWwnLCAnTXlzcWwnLCAnTGl2ZXdhcmUnLCAnUGhwIFVuaXQnLCAnVGFpbHdpbmQnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vY3BhbmRhcmVzL3RkZC1sYXJhdmVsJyxcbiAgICB2aXNpdDogJycsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ0VjY29tbWVyY2UtSGVhZHBob25lcycsXG4gICAgZGVzY3JpcHRpb246IFwiRWNjb21lcmNlIGRldmVsb3BlZCB3aXRoIFJlYWN0IGFuZCBOZXh0SnMgYXMgZnJhbWVyd29yaywgYmFja2VuZCBpbiBzYW5pdHkuaW8sIGhhcyBzdHJpcGUgaW50ZWdyYXRpb24gaW4gdGVzdCBtb2RlIHNvIGl0IGNhbiBiZSB0ZXN0ZWQsIGFuaW1hdGlvbnMgd2l0aCBjc3MuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvbmV4dC5wbmcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdOZXh0anMnLCAnQ3NzJywgJ1N0cmlwZSddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jcGFuZGFyZXMvZWNjb21lcmNlJyxcbiAgICB2aXNpdDogJycsXG4gICAgaWQ6IDEsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1ZlbnRtb3ZlJyxcbiAgICBkZXNjcmlwdGlvbjogXCJVc2luZyBSZWFjdCwgU3ltZm9ueSwgTXlzcWwgdG8gY3JlYXRlIGEgcGxhdGZvcm0gdG8gbWFrZSBmb3IgYWxsIHVzZXJzIGNyZWF0ZSBhIHBhZ2UgYW5kIGludGVncmF0ZSB5b3VyIE9ubGluZSBTdG9yZSwgUmVzZXJ2YXRpb24gYW5kIENvbGxlY3Rpb24gU3lzdGVtLCBPbmxpbmUgRXZlbnRzLCBUaWNrZXQgU2FsZXMsIENvbnRhY3QgTWFuYWdlciAoQ1JNKSwgRmluYW5jaW5nIENhbXBhaWducywgQmxvZyBhbmQgTXVjaCBNb3JlLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL3ZlbnQucG5nJyxcbiAgICAgIHRhZ3M6IFsnU3ltZm9ueScsICdNeXNxbCcsICdSZWFjdCcsICdTYXNzJ10sXG4gICAgc291cmNlOiAnJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vdmVudG1vdmUuY29tLycsXG4gICAgaWQ6IDIsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1J2IGFkdmlzb3InLFxuICAgIGRlc2NyaXB0aW9uOlwiVGhpcyBzdGFydCBhIHNpbXBsZSBlLWNvbW1lcmNlIGZvciB1c2VycyBpbiBVU0EsIHdpdGggUnYgdmVoaWNsZXMsIHByb3ZpZGluZyB0aGUgb3Bwb3J0dW5pdHkgdG8gaW5zdXJlIHRoZWlyIHZlaGljbGVzLCBvZmZlciByb2FkIGFzc2lzdGFuY2UsIHRpcmUgaW5zdXJhbmNlLCBhbGwgdW5kZXIgdGhlIHBheW1lbnQgb2YgbWVtYmVyc2hpcHMgKHVzaW5nIHN0cmlwZSkuIFRvZGF5IGl0IGlzIGEgd2hvbGUgc29jaWFsIG5ldHdvcmsgd2hlcmUgdXNlcnMgY2FuIHVwbG9hZCB0aGVpciBwb3N0cywgbGlrZSBzeXN0ZW1zLCBjaGF0LiBUb2RheSBpdCBjb250aW51ZXMgdG8gZ3JvdyBhbmQgYWRkIGZlYXR1cmVzLi5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvcnYucG5nJyxcbiAgICB0YWdzOiBbJ1BocCcsICdKcycsJ015c3FsJ10sXG4gICAgc291cmNlOiAnJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vcGFuZWwudGhlcnZhZHZpc29yLmNvbS8nLFxuICAgIGlkOiAzLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdNZXJuIENhbGVuZGFyJyxcbiAgICBkZXNjcmlwdGlvbjogXCJUaGlzIGlzIGEgY29kZSByZXBvc2l0b3J5IGZvciB0aGUgY29ycmVzcG9uZGluZyB0byBhbiBhcHAgZGV2ZWxvcGVkIGluIHJlYWN0ICYgbW9uZ29EYiB3aXRoIHRoZSBhYmlsaXR5IHRvIGNyZWF0ZSB1c2VycywgYW5kIGFkZCBldmVudHMgd2l0aCBhIGNhbGVuZGFyLCBzdGFydCBkYXRlLCBlbmQgZGF0ZSwgdmFsaWRhdGlvbnMsIGV0Yy5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9jYWxlbmRhci5wbmcnLFxuICAgICAgdGFnczogWydSZWFjdCcsICdNb25nb0RiJywnTm9kZScsICdFeHByZXNzJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2NwYW5kYXJlcy9jYWxlbmRhci1yZWFjdCcsXG4gICAgdmlzaXQ6ICcnLFxuICAgIGlkOiA0LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdKb3VybmFsLWFwcCcsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgdG8gb25lIGFwcCBkZXZlbG9wZWQgaW4gcmVhY3QsIHJlZHV4ICYgZmlyZWJhc2UsIHdoZXJlIHVzZXJzIGNhbiBhZGQgbm90ZXMgZnJvbSBkaWZmZXJlbnQgbWVtb3JpZXMsIGFkZCBpbWFnZXMuIFByb3ZpZGUgbG9naW4gd2l0aCBnb29nbGUuXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL2pvdXJuYWwucG5nJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0ZpcmViYXNlJywgJ1JlZHV4J10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2NwYW5kYXJlcy9kaWFyaW8tcmVhY3QtMTgnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9hcHAtam91cm5hbHIubmV0bGlmeS5hcHAvYXV0aC9sb2dpbicsXG4gICAgaWQ6IDUsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ3Nob3AtYXBwJyxcbiAgICBkZXNjcmlwdGlvbjogXCJFY2NvbWVyY2UgZGV2ZWxvcGVkIGluIFJlYWN0IGluIGZyb250ZW5kICYgc2FzcyBmb3Igc3R5bGVzLCBpcyBqdXN0IGEgdGVzdCB3aXRoIGEgYXBpIHJlc3QgZnJlZSwgaW5jbHVkZWQgYXhpb3MgZm9yIHBldGl0aW9ucyBodHRwXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3NjcmVlbmNhcHR1cmUucG5nJyxcbiAgICB0YWdzOiBbJ1JlYWN0JywgJ0ZpcmViYXNlJywgJ1Nhc3MnLCAnQXhpb3MnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vY3BhbmRhcmVzL2VjY29tZXJjZS1zdGF0aWMnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9zaG9wcGluZ2MtYXBwLm5ldGxpZnkuYXBwLycsXG4gICAgaWQ6IDYsXG4gIH0sXG4gIHtcbiAgICB0aXRsZTogJ1NlYXJjaCBnaWZzJyxcbiAgICBkZXNjcmlwdGlvbjogXCJBIHNpbXBsZSBzZWFyY2ggZW5naW5lIG9mIGdpZnMsIHVzaW5nIGZldGNoIGZvciBodHRwIHBldGl0aW9ucywgYW5kIGp1c3QgY3NzIGZvciB0aGUgc3R5bGVzLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9naWZzLnBuZycsXG4gICAgdGFnczogWydSZWFjdCcsICdDc3MnLCAnZmV0Y2gnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vY3BhbmRhcmVzL2VjY29tZXJjZS1zdGF0aWMnLFxuICAgIHZpc2l0OiAnaHR0cHM6Ly9jcGFuZGFyZXMuZ2l0aHViLmlvL3JlYWN0LWdpZnQvJyxcbiAgICBpZDogNyxcbiAgfSxcbl07XG5cbmV4cG9ydCBjb25zdCBUaW1lTGluZURhdGEgPSBbXG4gIHsgeWVhcjogMjAxNywgdGV4dDogJ1N0YXJ0ZWQgbXkgam91cm5leScsIH0sXG4gIHsgeWVhcjogMjAxOCwgdGV4dDogJ1dvcmtlZCBhcyBhIGZyZWVsYW5jZSBkZXZlbG9wZXInLCB9LFxuICB7IHllYXI6IDIwMTksIHRleHQ6ICdGb3VuZGVkIEphdmFTY3JpcHQgTWFzdGVyeScsIH0sXG4gIHsgeWVhcjogMjAyMCwgdGV4dDogJ1NoYXJlZCBteSBwcm9qZWN0cyB3aXRoIHRoZSB3b3JsZCcsIH0sXG4gIHsgeWVhcjogMjAyMSwgdGV4dDogJ1N0YXJ0ZWQgbXkgb3duIHBsYXRmb3JtJywgfSxcbl07Il0sInNvdXJjZVJvb3QiOiIifQ==