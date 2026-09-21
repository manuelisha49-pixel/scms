// Fills in the sidebar profile card with the name and student number
// the person actually typed at registration, and remembers it for
// next time (no backend yet, so this uses the browser's own storage).
(function () {
  var params = new URLSearchParams(window.location.search);
  var fullName = params.get('full_name');
  var studentNo = params.get('student_no');

  if (fullName) localStorage.setItem('scms_full_name', fullName);
  if (studentNo) localStorage.setItem('scms_student_no', studentNo);

  var storedName = localStorage.getItem('scms_full_name');
  var storedNo = localStorage.getItem('scms_student_no');

  var nameEl = document.querySelector('.rail-user b');
  var subEl = document.querySelector('.rail-user span');

  if (nameEl && storedName) {
    nameEl.textContent = storedName;
  }
  if (subEl && storedNo) {
    // keep whatever program label was already there, just swap in the real student number
    var current = subEl.textContent;
    var program = current.indexOf('·') > -1 ? current.split('·')[0].trim() : '';
    subEl.textContent = program ? (program + ' · ' + storedNo) : storedNo;
  }
})();
