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
  visit: 'https://eccomerce-git-main-cpandares.vercel.app/',
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbnN0YW50cy9jb25zdGFudHMuanMiXSwibmFtZXMiOlsicHJvamVjdHMiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiaW1hZ2UiLCJ0YWdzIiwic291cmNlIiwidmlzaXQiLCJpZCIsIlRpbWVMaW5lRGF0YSIsInllYXIiLCJ0ZXh0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBTyxJQUFNQSxRQUFRLEdBQUcsQ0FDdEI7QUFDRUMsT0FBSyxFQUFFLE1BRFQ7QUFFRUMsYUFBVyxFQUFFLGtRQUZmO0FBR0lDLE9BQUssRUFBRSxrQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixVQUFyQixFQUFpQyxVQUFqQyxFQUE2QyxXQUE3QyxDQUpWO0FBS0VDLFFBQU0sRUFBRSx5Q0FMVjtBQU1FQyxPQUFLLEVBQUUsRUFOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQURzQixFQVV0QjtBQUNFTixPQUFLLEVBQUUsV0FEVDtBQUVFQyxhQUFXLEVBQUUsc0dBRmY7QUFHSUMsT0FBSyxFQUFFLHNCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLFNBQUQsRUFBWSxPQUFaLEVBQXFCLFVBQXJCLEVBQWlDLFVBQWpDLEVBQTZDLFVBQTdDLENBSlY7QUFLRUMsUUFBTSxFQUFFLDBDQUxWO0FBTUVDLE9BQUssRUFBRSxFQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBVnNCLEVBbUJ0QjtBQUNFTixPQUFLLEVBQUUsdUJBRFQ7QUFFRUMsYUFBVyxFQUFFLDhKQUZmO0FBR0lDLE9BQUssRUFBRSxrQkFIWDtBQUlJQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsUUFBVixFQUFvQixLQUFwQixFQUEyQixRQUEzQixDQUpWO0FBS0VDLFFBQU0sRUFBRSx3Q0FMVjtBQU1FQyxPQUFLLEVBQUUsa0RBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FuQnNCLEVBNEJ0QjtBQUNFTixPQUFLLEVBQUUsVUFEVDtBQUVFQyxhQUFXLEVBQUUsdVBBRmY7QUFHSUMsT0FBSyxFQUFFLGtCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLFNBQUQsRUFBWSxPQUFaLEVBQXFCLE9BQXJCLEVBQThCLE1BQTlCLENBSlY7QUFLRUMsUUFBTSxFQUFFLEVBTFY7QUFNRUMsT0FBSyxFQUFFLHVCQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBNUJzQixFQXFDdEI7QUFDRU4sT0FBSyxFQUFFLFlBRFQ7QUFFRUMsYUFBVyxFQUFDLDZWQUZkO0FBR0VDLE9BQUssRUFBRSxnQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxLQUFELEVBQVEsSUFBUixFQUFhLE9BQWIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsRUFMVjtBQU1FQyxPQUFLLEVBQUUsaUNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0FyQ3NCLEVBOEN0QjtBQUNFTixPQUFLLEVBQUUsZUFEVDtBQUVFQyxhQUFXLEVBQUUsa01BRmY7QUFHSUMsT0FBSyxFQUFFLHNCQUhYO0FBSUlDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxTQUFWLEVBQW9CLE1BQXBCLEVBQTRCLFNBQTVCLENBSlY7QUFLRUMsUUFBTSxFQUFFLDZDQUxWO0FBTUVDLE9BQUssRUFBRSxFQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBOUNzQixFQXVEdEI7QUFDRU4sT0FBSyxFQUFFLGFBRFQ7QUFFRUMsYUFBVyxFQUFFLDRMQUZmO0FBR0VDLE9BQUssRUFBRSxxQkFIVDtBQUlFQyxNQUFJLEVBQUUsQ0FBQyxPQUFELEVBQVUsVUFBVixFQUFzQixPQUF0QixDQUpSO0FBS0VDLFFBQU0sRUFBRSw4Q0FMVjtBQU1FQyxPQUFLLEVBQUUsNkNBTlQ7QUFPRUMsSUFBRSxFQUFFO0FBUE4sQ0F2RHNCLEVBZ0V0QjtBQUNFTixPQUFLLEVBQUUsVUFEVDtBQUVFQyxhQUFXLEVBQUUsb0lBRmY7QUFHRUMsT0FBSyxFQUFFLDJCQUhUO0FBSUVDLE1BQUksRUFBRSxDQUFDLE9BQUQsRUFBVSxVQUFWLEVBQXNCLE1BQXRCLEVBQThCLE9BQTlCLENBSlI7QUFLRUMsUUFBTSxFQUFFLCtDQUxWO0FBTUVDLE9BQUssRUFBRSxvQ0FOVDtBQU9FQyxJQUFFLEVBQUU7QUFQTixDQWhFc0IsRUF5RXRCO0FBQ0VOLE9BQUssRUFBRSxhQURUO0FBRUVDLGFBQVcsRUFBRSw4RkFGZjtBQUdFQyxPQUFLLEVBQUUsa0JBSFQ7QUFJRUMsTUFBSSxFQUFFLENBQUMsT0FBRCxFQUFVLEtBQVYsRUFBaUIsT0FBakIsQ0FKUjtBQUtFQyxRQUFNLEVBQUUsK0NBTFY7QUFNRUMsT0FBSyxFQUFFLHlDQU5UO0FBT0VDLElBQUUsRUFBRTtBQVBOLENBekVzQixDQUFqQjtBQW9GQSxJQUFNQyxZQUFZLEdBQUcsQ0FDMUI7QUFBRUMsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBRDBCLEVBRTFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUYwQixFQUcxQjtBQUFFRCxNQUFJLEVBQUUsSUFBUjtBQUFjQyxNQUFJLEVBQUU7QUFBcEIsQ0FIMEIsRUFJMUI7QUFBRUQsTUFBSSxFQUFFLElBQVI7QUFBY0MsTUFBSSxFQUFFO0FBQXBCLENBSjBCLEVBSzFCO0FBQUVELE1BQUksRUFBRSxJQUFSO0FBQWNDLE1BQUksRUFBRTtBQUFwQixDQUwwQixDQUFyQiIsImZpbGUiOiJzdGF0aWMvd2VicGFjay9wYWdlcy9pbmRleC4xYjg2ODkzNmQxNTk4ZGFhNWQ1MC5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IHByb2plY3RzID0gW1xuICB7XG4gICAgdGl0bGU6ICdCbG9nJyxcbiAgICBkZXNjcmlwdGlvbjogXCJCbG9nIGRldmVsb3BlZCB1c2luZyBsYXJhdmVsIDggKyBsaXZld2lyZSwgQWRtaW5MdGUgd2FzIGltcGxlbWVudGVkIGFzIGFkbWluIHRlbXBsYXRlIGZvciBjcmVhdGluZyBwb3N0cy4gSXQgaGFzIENSVUQgb2YgY2F0ZWdvcmllcywgdGFncy4gT25lLXRvLW1hbnkgYW5kIG1hbnktdG8tbWFueSByZWxhdGlvbnNoaXAgdXNpbmcgRWxvcXVlbnQgT1JNLCBhY2Nlc3MgcG9saWNpZXMsIHJvbGVzIGFuZCBwZXJtaXNzaW9ucy4gTXlzcWwgZGF0YWJhc2UuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvYmxvZy5wbmcnLFxuICAgICAgdGFnczogWydMYXJhdmVsJywgJ015c3FsJywgJ0xpdmV3YXJlJywgJ1RhaWx3aW5kJywgJ0Jvb3RzcmFwcCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jcGFuZGFyZXMvYmxvZC1hZG1pbicsXG4gICAgdmlzaXQ6ICcnLFxuICAgIGlkOiAwLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdQb3N0cy1UREQnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkNSVUQgb2YgcG9zdHMgd2l0aCBsYXJhdmVsLCBmb2N1c2VkIG9uIHVuaXQgdGVzdGluZyB1c2luZyBUREQuIFVuaXQgdGVzdHMgdG8gdmVyaWZ5IGl0cyBwZXJmb3JtYW5jZS5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy9saXZld2lyZS5wbmcnLFxuICAgICAgdGFnczogWydMYXJhdmVsJywgJ015c3FsJywgJ0xpdmV3YXJlJywgJ1BocCBVbml0JywgJ1RhaWx3aW5kJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2NwYW5kYXJlcy90ZGQtbGFyYXZlbCcsXG4gICAgdmlzaXQ6ICcnLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdFY2NvbW1lcmNlLUhlYWRwaG9uZXMnLFxuICAgIGRlc2NyaXB0aW9uOiBcIkVjY29tZXJjZSBkZXZlbG9wZWQgd2l0aCBSZWFjdCBhbmQgTmV4dEpzIGFzIGZyYW1lcndvcmssIGJhY2tlbmQgaW4gc2FuaXR5LmlvLCBoYXMgc3RyaXBlIGludGVncmF0aW9uIGluIHRlc3QgbW9kZSBzbyBpdCBjYW4gYmUgdGVzdGVkLCBhbmltYXRpb25zIHdpdGggY3NzLlwiLFxuICAgICAgaW1hZ2U6ICcvaW1hZ2VzL25leHQucG5nJyxcbiAgICAgIHRhZ3M6IFsnUmVhY3QnLCAnTmV4dGpzJywgJ0NzcycsICdTdHJpcGUnXSxcbiAgICBzb3VyY2U6ICdodHRwczovL2dpdGh1Yi5jb20vY3BhbmRhcmVzL2VjY29tZXJjZScsXG4gICAgdmlzaXQ6ICdodHRwczovL2VjY29tZXJjZS1naXQtbWFpbi1jcGFuZGFyZXMudmVyY2VsLmFwcC8nLFxuICAgIGlkOiAxLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdWZW50bW92ZScsXG4gICAgZGVzY3JpcHRpb246IFwiVXNpbmcgUmVhY3QsIFN5bWZvbnksIE15c3FsIHRvIGNyZWF0ZSBhIHBsYXRmb3JtIHRvIG1ha2UgZm9yIGFsbCB1c2VycyBjcmVhdGUgYSBwYWdlIGFuZCBpbnRlZ3JhdGUgeW91ciBPbmxpbmUgU3RvcmUsIFJlc2VydmF0aW9uIGFuZCBDb2xsZWN0aW9uIFN5c3RlbSwgT25saW5lIEV2ZW50cywgVGlja2V0IFNhbGVzLCBDb250YWN0IE1hbmFnZXIgKENSTSksIEZpbmFuY2luZyBDYW1wYWlnbnMsIEJsb2cgYW5kIE11Y2ggTW9yZS5cIixcbiAgICAgIGltYWdlOiAnL2ltYWdlcy92ZW50LnBuZycsXG4gICAgICB0YWdzOiBbJ1N5bWZvbnknLCAnTXlzcWwnLCAnUmVhY3QnLCAnU2FzcyddLFxuICAgIHNvdXJjZTogJycsXG4gICAgdmlzaXQ6ICdodHRwczovL3ZlbnRtb3ZlLmNvbS8nLFxuICAgIGlkOiAyLFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdSdiBhZHZpc29yJyxcbiAgICBkZXNjcmlwdGlvbjpcIlRoaXMgc3RhcnQgYSBzaW1wbGUgZS1jb21tZXJjZSBmb3IgdXNlcnMgaW4gVVNBLCB3aXRoIFJ2IHZlaGljbGVzLCBwcm92aWRpbmcgdGhlIG9wcG9ydHVuaXR5IHRvIGluc3VyZSB0aGVpciB2ZWhpY2xlcywgb2ZmZXIgcm9hZCBhc3Npc3RhbmNlLCB0aXJlIGluc3VyYW5jZSwgYWxsIHVuZGVyIHRoZSBwYXltZW50IG9mIG1lbWJlcnNoaXBzICh1c2luZyBzdHJpcGUpLiBUb2RheSBpdCBpcyBhIHdob2xlIHNvY2lhbCBuZXR3b3JrIHdoZXJlIHVzZXJzIGNhbiB1cGxvYWQgdGhlaXIgcG9zdHMsIGxpa2Ugc3lzdGVtcywgY2hhdC4gVG9kYXkgaXQgY29udGludWVzIHRvIGdyb3cgYW5kIGFkZCBmZWF0dXJlcy4uXCIsXG4gICAgaW1hZ2U6ICcvaW1hZ2VzL3J2LnBuZycsXG4gICAgdGFnczogWydQaHAnLCAnSnMnLCdNeXNxbCddLFxuICAgIHNvdXJjZTogJycsXG4gICAgdmlzaXQ6ICdodHRwczovL3BhbmVsLnRoZXJ2YWR2aXNvci5jb20vJyxcbiAgICBpZDogMyxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnTWVybiBDYWxlbmRhcicsXG4gICAgZGVzY3JpcHRpb246IFwiVGhpcyBpcyBhIGNvZGUgcmVwb3NpdG9yeSBmb3IgdGhlIGNvcnJlc3BvbmRpbmcgdG8gYW4gYXBwIGRldmVsb3BlZCBpbiByZWFjdCAmIG1vbmdvRGIgd2l0aCB0aGUgYWJpbGl0eSB0byBjcmVhdGUgdXNlcnMsIGFuZCBhZGQgZXZlbnRzIHdpdGggYSBjYWxlbmRhciwgc3RhcnQgZGF0ZSwgZW5kIGRhdGUsIHZhbGlkYXRpb25zLCBldGMuXCIsXG4gICAgICBpbWFnZTogJy9pbWFnZXMvY2FsZW5kYXIucG5nJyxcbiAgICAgIHRhZ3M6IFsnUmVhY3QnLCAnTW9uZ29EYicsJ05vZGUnLCAnRXhwcmVzcyddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jcGFuZGFyZXMvY2FsZW5kYXItcmVhY3QnLFxuICAgIHZpc2l0OiAnJyxcbiAgICBpZDogNCxcbiAgfSxcbiAge1xuICAgIHRpdGxlOiAnSm91cm5hbC1hcHAnLFxuICAgIGRlc2NyaXB0aW9uOiBcIlRoaXMgaXMgYSBjb2RlIHJlcG9zaXRvcnkgZm9yIHRoZSBjb3JyZXNwb25kaW5nIHRvIG9uZSBhcHAgZGV2ZWxvcGVkIGluIHJlYWN0LCByZWR1eCAmIGZpcmViYXNlLCB3aGVyZSB1c2VycyBjYW4gYWRkIG5vdGVzIGZyb20gZGlmZmVyZW50IG1lbW9yaWVzLCBhZGQgaW1hZ2VzLiBQcm92aWRlIGxvZ2luIHdpdGggZ29vZ2xlLlwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9qb3VybmFsLnBuZycsXG4gICAgdGFnczogWydSZWFjdCcsICdGaXJlYmFzZScsICdSZWR1eCddLFxuICAgIHNvdXJjZTogJ2h0dHBzOi8vZ2l0aHViLmNvbS9jcGFuZGFyZXMvZGlhcmlvLXJlYWN0LTE4JyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vYXBwLWpvdXJuYWxyLm5ldGxpZnkuYXBwL2F1dGgvbG9naW4nLFxuICAgIGlkOiA1LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdzaG9wLWFwcCcsXG4gICAgZGVzY3JpcHRpb246IFwiRWNjb21lcmNlIGRldmVsb3BlZCBpbiBSZWFjdCBpbiBmcm9udGVuZCAmIHNhc3MgZm9yIHN0eWxlcywgaXMganVzdCBhIHRlc3Qgd2l0aCBhIGFwaSByZXN0IGZyZWUsIGluY2x1ZGVkIGF4aW9zIGZvciBwZXRpdGlvbnMgaHR0cFwiLFxuICAgIGltYWdlOiAnL2ltYWdlcy9zY3JlZW5jYXB0dXJlLnBuZycsXG4gICAgdGFnczogWydSZWFjdCcsICdGaXJlYmFzZScsICdTYXNzJywgJ0F4aW9zJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2NwYW5kYXJlcy9lY2NvbWVyY2Utc3RhdGljJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vc2hvcHBpbmdjLWFwcC5uZXRsaWZ5LmFwcC8nLFxuICAgIGlkOiA2LFxuICB9LFxuICB7XG4gICAgdGl0bGU6ICdTZWFyY2ggZ2lmcycsXG4gICAgZGVzY3JpcHRpb246IFwiQSBzaW1wbGUgc2VhcmNoIGVuZ2luZSBvZiBnaWZzLCB1c2luZyBmZXRjaCBmb3IgaHR0cCBwZXRpdGlvbnMsIGFuZCBqdXN0IGNzcyBmb3IgdGhlIHN0eWxlcy5cIixcbiAgICBpbWFnZTogJy9pbWFnZXMvZ2lmcy5wbmcnLFxuICAgIHRhZ3M6IFsnUmVhY3QnLCAnQ3NzJywgJ2ZldGNoJ10sXG4gICAgc291cmNlOiAnaHR0cHM6Ly9naXRodWIuY29tL2NwYW5kYXJlcy9lY2NvbWVyY2Utc3RhdGljJyxcbiAgICB2aXNpdDogJ2h0dHBzOi8vY3BhbmRhcmVzLmdpdGh1Yi5pby9yZWFjdC1naWZ0LycsXG4gICAgaWQ6IDcsXG4gIH0sXG5dO1xuXG5leHBvcnQgY29uc3QgVGltZUxpbmVEYXRhID0gW1xuICB7IHllYXI6IDIwMTcsIHRleHQ6ICdTdGFydGVkIG15IGpvdXJuZXknLCB9LFxuICB7IHllYXI6IDIwMTgsIHRleHQ6ICdXb3JrZWQgYXMgYSBmcmVlbGFuY2UgZGV2ZWxvcGVyJywgfSxcbiAgeyB5ZWFyOiAyMDE5LCB0ZXh0OiAnRm91bmRlZCBKYXZhU2NyaXB0IE1hc3RlcnknLCB9LFxuICB7IHllYXI6IDIwMjAsIHRleHQ6ICdTaGFyZWQgbXkgcHJvamVjdHMgd2l0aCB0aGUgd29ybGQnLCB9LFxuICB7IHllYXI6IDIwMjEsIHRleHQ6ICdTdGFydGVkIG15IG93biBwbGF0Zm9ybScsIH0sXG5dOyJdLCJzb3VyY2VSb290IjoiIn0=