'use strict';

var state = [];
var result = [];
var search = document.getElementById('search');
var select = document.getElementById('type');
function loadJson() {
	var url = 'http://my-json-server.typicode.com/mkazemiraz/job-blog-fakeDB/jobs';
	return new Promise(function (resolve, reject) {
		var res = $.ajax(url);
		if (res) {
			resolve(res);
		} else {
			reject(new Error('Api done or bad request'));
		}
	});
}
async function loadJob() {
	var loadjob = await loadJson();
	state = loadjob;
	renderJobs(state);
}
function renderJobs(jobs) {
	var html = '';
	console.log(jobs);
	jobs.forEach(function (job) {
		var htmlseg = '<div class="user">\n\t\t<img src="' + job.logo + '" >\n\t\t<a href="./Job.html" class="text-primary">' + job.jobTitle + '</a>\n\t\t <div class="userdetail">\n\t\t   <div>\u0634\u0631\u06A9\u062A :' + job.companyName + '</div>\n\t\t   <div><span class="badge badge-info badge-pill m-1">' + job.location + '</span></div>\n\t\t   <div><span class="badge badge-warning badge-pill m-1">' + job.contractType + '</span></div>\n\t\t   <div><span class="badge badge-danger badge-pill m-1">Urgent: ' + job.urgent + '</span></div>\n\t\t </div>\n\t\t</div>\t\n\t</div>';
		html += htmlseg;
	});
	var jobslenght = jobs.length;
	var container = document.querySelector('.jobContainer');
	container.innerHTML = html;
	document.querySelector('.jobshow').innerHTML = 'Job Listed : ' + jobslenght;
}
function finder(input, select) {
	console.log(input);
	var finds = [];
	switch (select) {
		case "teh":
			for (var i = 0; i < state.length; i++) {
				if (state[i].jobTitle.includes(input) && state[i].location === 'تهران') {
					finds.push(state[i]);
				}
			}
			break;
		case "other":
			for (var i = 0; i < state.length; i++) {
				if (state[i].jobTitle.includes(input) && state[i].location != 'تهران') {
					finds.push(state[i]);
				}
			}
			break;
		case "all":
			for (var i = 0; i < state.length; i++) {
				if (state[i].jobTitle.includes(input)) {
					finds.push(state[i]);
				}
			}
	}
	result = finds;
}
loadJob();

function eventHandler() {
	finder(search.value, select.value);
	renderJobs(result);
}
search.addEventListener('keyup', eventHandler);
select.addEventListener('change', eventHandler);
// jobTitle: "برنامه‌نویس Front-End",
// companyName: "ایده پردازان",
// location: "تهران",
// contractType: "تمام وقت",
// logo: "https://picsum.photos/200/300?random=1",
// urgent: true